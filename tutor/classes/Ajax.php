<?php
/**
 * Handle Ajax Request
 *
 * @package Tutor
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.0.0
 */

namespace TUTOR;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Tutor\Helpers\HttpHelper;
use Tutor\Models\LessonModel;
use Tutor\Traits\JsonResponse;

/**
 * Ajax Class
 *
 * @since 1.0.0
 */
class Ajax {
	use JsonResponse;

	const LOGIN_ERRORS_TRANSIENT_KEY = 'tutor_login_errors';
	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @since 2.6.2 added allow_hooks param.
	 *
	 * @param bool $allow_hooks default value true.
	 *
	 * @return void
	 */
	public function __construct( $allow_hooks = true ) {
		if ( $allow_hooks ) {
			add_action( 'wp_ajax_sync_video_playback', array( $this, 'sync_video_playback' ) );
			add_action( 'wp_ajax_nopriv_sync_video_playback', array( $this, 'sync_video_playback_noprev' ) );
			add_action( 'wp_ajax_tutor_place_rating', array( $this, 'tutor_place_rating' ) );
			add_action( 'wp_ajax_delete_tutor_review', array( $this, 'delete_tutor_review' ) );

			add_action( 'wp_ajax_tutor_course_add_to_wishlist', array( $this, 'tutor_course_add_to_wishlist' ) );
			add_action( 'wp_ajax_nopriv_tutor_course_add_to_wishlist', array( $this, 'tutor_course_add_to_wishlist' ) );

			/**
			 * Ajax login
			 *
			 * @since  v.1.6.3
			 */
			add_action( 'tutor_action_tutor_user_login', array( $this, 'process_tutor_login' ) );

			/**
			 * Announcement
			 *
			 * @since  v.1.7.9
			 */
			add_action( 'wp_ajax_tutor_announcement_create', array( $this, 'create_or_update_annoucement' ) );
			add_action( 'wp_ajax_tutor_announcement_delete', array( $this, 'delete_annoucement' ) );

			add_action( 'wp_ajax_tutor_youtube_video_duration', array( $this, 'ajax_youtube_video_duration' ) );
		}
	}



	/**
	 * Update video information and data when necessary
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function sync_video_playback() {
		tutor_utils()->checking_nonce();

		$user_id      = get_current_user_id();
		$post_id      = Input::post( 'post_id', 0, Input::TYPE_INT );
		$duration     = Input::post( 'duration' );
		$current_time = Input::post( 'currentTime' );

		if ( ! tutor_utils()->has_enrolled_content_access( 'lesson', $post_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Access Denied', 'tutor' ) ) );
			exit;
		}

		/**
		 * Update posts attached video
		 */
		$video = tutor_utils()->get_video( $post_id );

		if ( $duration ) {
			$video['duration_sec'] = $duration; // Duration in sec.
			$video['playtime']     = tutor_utils()->playtime_string( $duration );
			$video['runtime']      = tutor_utils()->playtime_array( $duration );
		}
		tutor_utils()->update_video( $post_id, $video );

		/**
		 * Sync Lesson Reading Info by Users
		 */

		$best_watch_time = tutor_utils()->get_lesson_reading_info( $post_id, $user_id, 'video_best_watched_time' );
		if ( $best_watch_time < $current_time ) {
			LessonModel::update_lesson_reading_info( $post_id, $user_id, 'video_best_watched_time', $current_time );
		}

		if ( Input::post( 'is_ended', false, Input::TYPE_BOOL ) ) {
			LessonModel::mark_lesson_complete( $post_id );
			LessonModel::update_lesson_reading_info( $post_id, $user_id, 'video_best_watched_time', 0 );
		}
		exit();
	}

	/**
	 * Video playback callback for noprev
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function sync_video_playback_noprev() {
	}

	/**
	 * Place rating
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function tutor_place_rating() {
		tutor_utils()->checking_nonce();

		$user_id   = get_current_user_id();
		$course_id = Input::post( 'course_id' );
		$rating    = Input::post( 'tutor_rating_gen_input', 0, Input::TYPE_INT );
		$review    = Input::post( 'review', '', Input::TYPE_TEXTAREA );

		$rating <= 0 ? $rating = 1 : 0;
		$rating > 5 ? $rating  = 5 : 0;

		$this->add_or_update_review( $user_id, $course_id, $rating, $review );
	}

	/**
	 * Add/Update rating
	 *
	 * @param int    $user_id the user id.
	 * @param int    $course_id the course id.
	 * @param int    $rating rating star number.
	 * @param string $review review description.
	 * @param int    $review_id review id needed for api update.
	 *
	 * @return void|string
	 */
	public function add_or_update_review( $user_id, $course_id, $rating, $review, $review_id = 0 ) {
		global $wpdb;

		$moderation = tutor_utils()->get_option( 'enable_course_review_moderation', false, true, true );
		$user       = get_userdata( $user_id );
		$date    = date( 'Y-m-d H:i:s', tutor_time() ); //phpcs:ignore

		if ( ! tutor_is_rest() && ! tutor_utils()->has_enrolled_content_access( 'course', $course_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Access Denied', 'tutor' ) ) );
			exit;
		}

		do_action( 'tutor_before_rating_placed' );

		$is_edit = 0 === $review_id ? false : true;

		if ( ! tutor_is_rest() ) {
			$previous_rating_id = $wpdb->get_var(
				$wpdb->prepare(
					"SELECT comment_ID
				from {$wpdb->comments}
				WHERE comment_post_ID = %d AND
					user_id = %d AND
					comment_type = 'tutor_course_rating'
				LIMIT 1;",
					$course_id,
					$user_id
				)
			);

			if ( ! empty( $previous_rating_id ) ) {
				$review_id = $previous_rating_id;
				$is_edit   = true;
			}
		}

		if ( $is_edit ) {
			$wpdb->update(
				$wpdb->comments,
				array(
					'comment_content'  => $review,
					'comment_approved' => $moderation ? 'hold' : 'approved',
					'comment_date'     => $date,
					'comment_date_gmt' => get_gmt_from_date( $date ),
				),
				array( 'comment_ID' => $review_id )
			);

			$rating_info = $wpdb->get_row(
				$wpdb->prepare(
					"SELECT * FROM {$wpdb->commentmeta} 
				WHERE comment_id = %d 
					AND meta_key = 'tutor_rating'; ",
					$review_id
				)
			);

			if ( $rating_info ) {
				$wpdb->update(
					$wpdb->commentmeta,
					array( 'meta_value' => $rating ),
					array(
						'comment_id' => $review_id,
						'meta_key'   => 'tutor_rating',
					)
				);
			} else {
				$wpdb->insert(
					$wpdb->commentmeta,
					array(
						'comment_id' => $review_id,
						'meta_key'   => 'tutor_rating',
						'meta_value' => $rating,
					)
				);
			}
		} else {
			$data = array(
				'comment_post_ID'  => esc_sql( $course_id ),
				'comment_approved' => $moderation ? 'hold' : 'approved',
				'comment_type'     => 'tutor_course_rating',
				'comment_date'     => $date,
				'comment_date_gmt' => get_gmt_from_date( $date ),
				'user_id'          => $user_id,
				'comment_author'   => $user->user_login,
				'comment_agent'    => 'TutorLMSPlugin',
			);
			if ( $review ) {
				$data['comment_content'] = $review;
			}

			$wpdb->insert( $wpdb->comments, $data );
			$comment_id = (int) $wpdb->insert_id;
			$review_id  = $comment_id;

			if ( $comment_id ) {
				$wpdb->insert(
					$wpdb->commentmeta,
					array(
						'comment_id' => $comment_id,
						'meta_key'   => 'tutor_rating',
						'meta_value' => $rating,
					)
				);

				do_action( 'tutor_after_rating_placed', $comment_id );
			}
		}

		if ( ! tutor_is_rest() ) {
			wp_send_json_success(
				array(
					'message'   => __( 'Rating placed successfully!', 'tutor' ),
					'review_id' => $review_id,
				)
			);
		} else {
			return $is_edit ? 'updated' : 'created';
		}
	}

	/**
	 * Delete a review
	 *
	 * @since 1.0.0
	 * @since 2.6.2 added params user_id.
	 * @param int $user_id the user id.
	 * @return void|bool
	 */
	public function delete_tutor_review( $user_id = 0 ) {
		if ( ! tutor_is_rest() ) {
			tutor_utils()->checking_nonce();
		}

		$review_id = Input::post( 'review_id' );

		if ( ! tutor_utils()->can_user_manage( 'review', $review_id, tutils()->get_user_id( $user_id ) ) ) {
			wp_send_json_error( array( 'message' => __( 'Permissioned Denied!', 'tutor' ) ) );
			exit;
		}

		global $wpdb;
		$wpdb->delete( $wpdb->commentmeta, array( 'comment_id' => $review_id ) );
		$wpdb->delete( $wpdb->comments, array( 'comment_ID' => $review_id ) );

		if ( tutor_is_rest() ) {
			return true;
		}

		wp_send_json_success();
	}

	/**
	 * Add course in wishlist
	 *
	 * @since 1.0.0
	 * @return void|string
	 */
	public function tutor_course_add_to_wishlist() {
		tutor_utils()->checking_nonce();

		// Redirect login since only logged in user can add courses to wishlist.
		if ( ! is_user_logged_in() ) {
			wp_send_json_error(
				array(
					'redirect_to' => wp_login_url( wp_get_referer() ),
				)
			);
		}

		$user_id   = get_current_user_id();
		$course_id = Input::post( 'course_id', 0, Input::TYPE_INT );

		$result = $this->add_or_delete_wishlist( $user_id, $course_id );

		if ( tutor_is_rest() ) {
			return $result;
		} elseif ( 'added' === $result ) {
			wp_send_json_success(
				array(
					'status'  => 'added',
					'message' => __( 'Course added to wish list', 'tutor' ),
				)
			);
		} else {
			wp_send_json_success(
				array(
					'status'  => 'removed',
					'message' => __( 'Course removed from wish list', 'tutor' ),
				)
			);
		}
	}

	/**
	 * Add or Delete wishlist by user_id and course_id
	 *
	 * @since 2.6.2
	 *
	 * @param int $user_id the user id.
	 * @param int $course_id the course_id to add to the wishlist.
	 *
	 * @return string
	 */
	public function add_or_delete_wishlist( $user_id, $course_id ) {
		global $wpdb;

		$if_added_to_list = tutor_utils()->is_wishlisted( $course_id, $user_id );

		$result = '';

		if ( $if_added_to_list ) {
			$wpdb->delete(
				$wpdb->usermeta,
				array(
					'user_id'    => $user_id,
					'meta_key'   => '_tutor_course_wishlist',
					'meta_value' => $course_id,
				)
			);

			$result = 'removed';
		} else {
			add_user_meta( $user_id, '_tutor_course_wishlist', $course_id );

			$result = 'added';
		}

		return $result;
	}

	/**
	 * Process tutor login
	 *
	 * @since 1.6.3
	 *
	 * @since 2.1.3 Ajax removed, validation errors
	 * stores in session.
	 *
	 * @return void
	 */
	public function process_tutor_login() {
		$validation_error = new \WP_Error();

		/**
		 * Separate nonce verification added to show nonce verification
		 * failed message in a proper way.
		 *
		 * @since 2.1.4
		 */
		if ( ! wp_verify_nonce( $_POST[ tutor()->nonce ], tutor()->nonce_action ) ) { //phpcs:ignore
			$validation_error->add( 401, __( 'Nonce verification failed', 'tutor' ) );
			\set_transient( self::LOGIN_ERRORS_TRANSIENT_KEY, $validation_error->get_error_messages() );
			return;
		}
		//phpcs:disable WordPress.Security.NonceVerification.Missing

		/**
		 * No sanitization/wp_unslash needed for log & pwd since WordPress
		 * does itself
		 *
		 * @since 2.1.3
		 *
		 * @see https://developer.wordpress.org/reference/functions/wp_signon/
		 */
		$username    = tutor_utils()->array_get( 'log', $_POST ); //phpcs:ignore
		$password    = tutor_utils()->array_get( 'pwd', $_POST ); //phpcs:ignore
		$redirect_to = isset( $_POST['redirect_to'] ) ? esc_url_raw( wp_unslash( $_POST['redirect_to'] ) ) : '';
		$remember    = isset( $_POST['rememberme'] );

		try {
			$creds = array(
				'user_login'    => trim( $username ),
				'user_password' => $password,
				'remember'      => $remember,
			);

			$validation_error = apply_filters( 'tutor_process_login_errors', $validation_error, $creds['user_login'], $creds['user_password'] );

			if ( $validation_error->get_error_code() ) {
				$validation_error->add(
					$validation_error->get_error_code(),
					$validation_error->get_error_message()
				);
			}

			if ( empty( $creds['user_login'] ) ) {
				$validation_error->add(
					400,
					__( 'Username is required.', 'tutor' )
				);
			}

			// On multi-site, ensure user exists on current site, if not add them before allowing login.
			if ( is_multisite() ) {
				$user_data = get_user_by( is_email( $creds['user_login'] ) ? 'email' : 'login', $creds['user_login'] );

				if ( $user_data && ! is_user_member_of_blog( $user_data->ID, get_current_blog_id() ) ) {
					add_user_to_blog( get_current_blog_id(), $user_data->ID, 'customer' );
				}
			}

			// Perform the login.
			$user = wp_signon( apply_filters( 'tutor_login_credentials', $creds ), is_ssl() );

			if ( is_wp_error( $user ) ) {
				// If no error exist then add WP login error, to prevent error duplication.
				if ( ! $validation_error->has_errors() ) {
					$validation_error->add( 400, $user->get_error_message() );
				}
			} else {
				do_action( 'tutor_after_login_success', $user->ID );
				// Since 1.9.8 do enroll if guest attempt to enroll.
				$course_enroll_attempt = Input::post( 'tutor_course_enroll_attempt' );
				if ( ! empty( $course_enroll_attempt ) && is_a( $user, 'WP_User' ) ) {
					do_action( 'tutor_do_enroll_after_login_if_attempt', $course_enroll_attempt, $user->ID );
				}
				wp_safe_redirect( $redirect_to );
				exit();
			}
		} catch ( \Exception $e ) {
			do_action( 'tutor_login_failed' );
			$validation_error->add( 400, $e->getMessage() );
		} finally {
			// Store errors in transient data.
			\set_transient( self::LOGIN_ERRORS_TRANSIENT_KEY, $validation_error->get_error_messages() );
		}
	}

	/**
	 * Create/Update announcement
	 *
	 * @since  1.7.9
	 * @return void
	 */
	public function create_or_update_annoucement() {
		tutor_utils()->checking_nonce();

		$error                = array();
		$course_id            = Input::post( 'tutor_announcement_course' );
		$announcement_title   = Input::post( 'tutor_announcement_title' );
		$announcement_summary = Input::post( 'tutor_announcement_summary', '', Input::TYPE_TEXTAREA );

		// Check if user can manage this announcment.
		if ( ! tutor_utils()->can_user_manage( 'course', $course_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Access Denied', 'tutor' ) ) );
		}

		// Set data and sanitize it.
		$form_data = array(
			'post_type'    => 'tutor_announcements',
			'post_title'   => $announcement_title,
			'post_content' => $announcement_summary,
			'post_parent'  => $course_id,
			'post_status'  => 'publish',
		);

		if ( Input::has( 'announcement_id' ) ) {
			$form_data['ID'] = Input::post( 'announcement_id' );
		}

		if ( ! empty( $form_data['ID'] ) ) {
			if ( ! tutor_utils()->can_user_manage( 'announcement', $form_data['ID'] ) ) {
				wp_send_json_error( array( 'message' => tutor_utils()->error_message() ) );
			}
		}

		// Validation message set.
		if ( empty( $form_data['post_parent'] ) ) {
			$error['post_parent'] = __( 'Course name required', 'tutor' );

		}

		if ( empty( $form_data['post_title'] ) ) {
			$error['post_title'] = __( 'Announcement title required', 'tutor' );
		}

		if ( empty( $form_data['post_content'] ) ) {
			$error['post_content'] = __( 'Announcement summary required', 'tutor' );

		}

		if ( empty( $form_data['post_content'] ) ) {
			$error['post_content'] = __( 'Announcement summary required', 'tutor' );

		}

		// If validation fails.
		if ( count( $error ) > 0 ) {
			wp_send_json_error(
				array(
					'message' => __( 'All fields required!', 'tutor' ),
					'fields'  => $error,
				)
			);
		}

		// Insert or update post.
		$post_id = wp_insert_post( $form_data );
		if ( $post_id > 0 ) {
			$announcement = get_post( $post_id );
			$action_type  = Input::post( 'action_type' );

			do_action( 'tutor_announcements/after/save', $post_id, $announcement, $action_type );

			$resp_message = 'create' === $action_type ? __( 'Announcement created successfully', 'tutor' ) : __( 'Announcement updated successfully', 'tutor' );
			wp_send_json_success( array( 'message' => $resp_message ) );
		}

		wp_send_json_error( array( 'message' => __( 'Something Went Wrong!', 'tutor' ) ) );
	}

	/**
	 * Delete announcement
	 *
	 * @since  1.7.9
	 * @return void
	 */
	public function delete_annoucement() {
		tutor_utils()->checking_nonce();

		$announcement_id = Input::post( 'announcement_id' );

		if ( ! tutor_utils()->can_user_manage( 'announcement', $announcement_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Access Denied', 'tutor' ) ) );
		}

		$delete = wp_delete_post( $announcement_id );
		if ( $delete ) {
			wp_send_json_success( array( 'message' => __( 'Announcement deleted successfully', 'tutor' ) ) );
		}

		wp_send_json_error( array( 'message' => __( 'Announcement delete failed', 'tutor' ) ) );
	}

	/**
	 * Get youtube video duration.
	 *
	 * @since 3.0.0
	 *
	 * @return void
	 */
	public function ajax_youtube_video_duration() {
		tutor_utils()->check_nonce();

		$video_id = Input::post( 'video_id' );
		if ( empty( $video_id ) ) {
			$this->json_response( __( 'Video ID is required', 'tutor' ), null, HttpHelper::STATUS_BAD_REQUEST );
		}

		tutor_utils()->check_current_user_capability( 'edit_tutor_course' );

		$api_key = tutor_utils()->get_option( 'lesson_video_duration_youtube_api_key', '' );
		$url     = "https://www.googleapis.com/youtube/v3/videos?id=$video_id&part=contentDetails&key=$api_key";

		$request = HttpHelper::get( $url );
		if ( HttpHelper::STATUS_OK === $request->get_status_code() ) {
			$response = $request->get_json();
			if ( isset( $response->items[0]->contentDetails->duration ) ) {
				$duration = $response->items[0]->contentDetails->duration;
				$this->json_response(
					__( 'Fetched duration successfully', 'tutor' ),
					array(
						'duration' => $duration,
					)
				);
			}
		}

		$this->json_response(
			__( 'Failed to fetch duration', 'tutor' ),
			null,
			HttpHelper::STATUS_BAD_REQUEST
		);
	}
}
