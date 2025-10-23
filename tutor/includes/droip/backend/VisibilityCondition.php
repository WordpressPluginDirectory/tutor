<?php

/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip;

use TUTOR\Course;
use Tutor\Models\CartModel;
use TUTOR_CERT\Certificate;
use TutorLMSDroip\ElementGenerator\CourseMetaGenerator;

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Class Helper
 * This class is used to define all helper functions.
 */
class VisibilityCondition
{

	use CourseMetaGenerator;

	public static function visibility_condition_fields($conditions, $collection_data)
	{
		$type           = $collection_data['type'];
		$collectionType = $collection_data['collectionType'];
		if ($collectionType === 'posts') {
			switch ($type) {
				case 'courses': {
						$conditions = self::get_course_type_conditions($conditions);
					}
			}
		} elseif ($collectionType === 'user') {
			switch ($type) {
				case 'courses': {
						$conditions['user'] = array(
							'title'  => 'Instructor',
							'fields' => array_merge(
								$conditions['user']['fields'],
								array(
									array(
										'source'        => TDE_APP_PREFIX,
										'value'         => 'instructor_course_count',
										'title'         => 'Course Count',
										'operator_type' => 'numeric_operators',
										'operand_type'  => array_merge(
											DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
											array(
												'placeholder' => 'Course Count',
											)
										),
									),
									array(
										'source'        => TDE_APP_PREFIX,
										'value'         => 'instructor_student_count',
										'title'         => 'Student Count',
										'operator_type' => 'numeric_operators',
										'operand_type'  => array_merge(
											DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
											array(
												'placeholder' => 'Student Count',
											)
										),
									),
									array(
										'source'        => TDE_APP_PREFIX,
										'value'         => 'instructor_rating',
										'title'         => 'Rating',
										'operator_type' => 'numeric_operators',
										'operand_type'  => array_merge(
											DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
											array(
												'placeholder' => 'Rating',
											)
										),
									),
									array(
										'source'        => TDE_APP_PREFIX,
										'value'         => 'instructor_rating_count',
										'title'         => 'Rating Count',
										'operator_type' => 'numeric_operators',
										'operand_type'  => array_merge(
											DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
											array(
												'placeholder' => 'Rating Count',
											)
										),
									),
								)
							),
						);
					}
			}
		} else {
			switch ($type) {
				case 'TUTOR_LMS-tutor_course_rating': {
						$conditions = self::get_course_type_conditions($conditions);
						break;
					}

				case 'TUTOR_LMS-subscriptions': {
						$conditions = self::get_subscription_type_conditions($conditions);
						break;
					}

				case 'TUTOR_LMS-membership-plans': {
						$conditions = self::get_membership_type_conditions($conditions);
						break;
					}

				case 'TUTOR_LMS-membership-features': {
						$conditions = self::get_membership_features_type_conditions($conditions);
						break;
					}
			}
		}

		return $conditions;
	}

	private static function get_subscription_type_conditions($conditions)
	{
		if (!isset($conditions['post']['fields'])) {
			$conditions['post']['fields'] = array();
		}
		$conditions['post'] = array(
			'title'  => 'Subscription',
			'fields' => array_merge(
				$conditions['post']['fields'],
				array(

					// recurring_interval
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'recurring_interval',
						'title'         => 'Recurring Interval',
						'operator_type' => 'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => 'day',
										'title' => 'Day',
									),
									array(
										'value' => 'week',
										'title' => 'Week',
									),
									array(
										'value' => 'month',
										'title' => 'Month',
									),
									array(
										'value' => 'year',
										'title' => 'Year',
									),
								),
							),
						),
					),

					// enrollment_fee
					array(
						'source' 	  => TDE_APP_PREFIX,
						'value' 	  => 'enrollment_fee',
						'title' 	  => 'Enrollment Fee',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Enrollment Fee',
							),
						),
					),

					// provide_certificate DEFAULT 1, -- 0 or 1
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'provide_certificate',
						'title'         => 'Provide Certificate',
						'operator_type' =>  'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => '1',
										'title' => 'Yes',
									),
									array(
										'value' => '0',
										'title' => 'No',
									),
								),
							)
						),
					),

					// is_featured
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_featured',
						'title'         => 'Is Featured',
						'operator_type' =>  'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => '1',
										'title' => 'Yes',
									),
									array(
										'value' => '0',
										'title' => 'No',
									),
								),
							),
						),
					),

					// sale_price
					array(
						'source' 	  => TDE_APP_PREFIX,
						'value' 	  => 'sale_price',
						'title' 	  => 'Sale Price',
						'operator_type' => 'boolean_operators',
					),
				),
			),
		);

		return $conditions;
	}

	private static function get_membership_type_conditions($conditions)
	{
		if (!isset($conditions['post']['fields'])) {
			$conditions['post']['fields'] = array();
		}
		$conditions['post'] = array(
			'title'  => 'Membership',
			'fields' => array_merge(
				$conditions['post']['fields'],
				array(
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'recurring_interval',
						'title'         => 'Recurring Interval',
						'operator_type' => 'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => 'day',
										'title' => 'Day',
									),
									array(
										'value' => 'week',
										'title' => 'Week',
									),
									array(
										'value' => 'month',
										'title' => 'Month',
									),
									array(
										'value' => 'year',
										'title' => 'Year',
									),
								),
							),
						),
					),

					// recurring_value
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'recurring_value',
						'title'         => 'Recurring Value',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Recurring Value',
							)
						),
					),

					// enrollment_fee
					array(
						'source' 	  => TDE_APP_PREFIX,
						'value' 	  => 'enrollment_fee',
						'title' 	  => 'Has enrollment fee',
						'operator_type' => 'boolean_operators',
					),

					// provide_certificate DEFAULT 1, -- 0 or 1
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'provide_certificate',
						'title'         => 'Provide Certificate',
						'operator_type' => 'boolean_operators',
					),

					// is_featured
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_featured',
						'title'         => 'Is Featured',
						'operator_type' => 'boolean_operators',
					),

					// sale_price
					array(
						'source' 	  => TDE_APP_PREFIX,
						'value' 	  => 'sale_price',
						'title' 	  => 'Offer sale Price',
						'operator_type' => 'boolean_operators',
					),
				),
			),
		);

		return $conditions;
	}

	private static function get_membership_features_type_conditions($conditions)
	{
		if (!isset($conditions['post']['fields'])) {
			$conditions['post']['fields'] = array();
		}
		$conditions['post'] = array(
			'title'  => 'Feature',
			'fields' => array_merge(
				$conditions['post']['fields'],
				array(
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'icon_type',
						'title'         => 'Icon',
						'operator_type' => 'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => 'yes',
										'title' => 'Check',
									),
									array(
										'value' => 'no',
										'title' => 'Times',
									),
								),
							),
						),
					),
				),
			),
		);

		return $conditions;
	}

	private static function get_course_type_conditions($conditions)
	{
		if (!isset($conditions['post']['fields'])) {
			$conditions['post']['fields'] = array();
		}
		$conditions['post'] = array(
			'title'  => 'Course',
			'fields' => array_merge(
				$conditions['post']['fields'],
				array(
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_paid',
						'title'         => 'Paid',
						'operator_type' => 'boolean_operators',
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'on_sale',
						'title'         => 'On Sale',
						'operator_type' => 'boolean_operators',
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'purchase_options',
						'title'         => 'Purchase Options',
						'operator_type' => 'dropdown_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => Course::SELLING_OPTION_ONE_TIME,
										'title' => 'One Time',
									),
									array(
										'value' => Course::SELLING_OPTION_SUBSCRIPTION,
										'title' => 'Subscription',
									),

									array(
										'value' => Course::SELLING_OPTION_BOTH,
										'title' => 'Subscription & One-Time',
									),

									array(
										'value' => Course::SELLING_OPTION_MEMBERSHIP,
										'title' => 'Membership',
									),
									array(
										'value' => Course::SELLING_OPTION_ALL,
										'title' => 'All',
									),
								),
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'average_rating',
						'title'         => 'Rating (Avg.)',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Rating',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'total_ratings',
						'title'         => 'Total Ratings',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Rating count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'enroll_count',
						'title'         => 'Enrollment Count',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Enroll Count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'student_state',
						'title'         => 'Student status',
						'operator_type' => array(
							array(
								'title' => '= Equals',
								'value' => 'user_state-is_equal',
							),
							array(
								'title' => '≠ Does not equal',
								'value' => 'user_state-not_equal',
							),
						),
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['SELECT'],
							array(
								'options' => array(
									array(
										'value' => 'logged_in',
										'title' => 'Logged in',
									),
									array(
										'value' => 'wishlisted',
										'title' => 'Wishlisted',
									),
									array(
										'value' => 'added_in_cart',
										'title' => 'Added in Cart',
									),
									array(
										'value' => 'enrolled',
										'title' => 'Enrolled',
									),
									array(
										'value' => 'learner',
										'title' => 'Learner',
									),
									array(
										'value' => 'can_retake',
										'title' => 'Can Retake',
									),
									array(
										'value' => 'completed',
										'title' => 'Completed',
									),
								),
							)
						),
					),
					// [
					// 'source'        => TDE_APP_PREFIX,
					// 'value'         => 'user_authored',
					// 'title'         => 'User authored',
					// 'operator_type' => 'dropdown_operators',
					// 'operand_type'  => array_merge(
					// DROIP_PLUGIN_SETTINGS['SELECT'],
					// [
					// 'options' => [
					// ['value' => 'no_review', 'title' => 'No Review'],
					// ['value' => 'current_review', 'title' => 'Current Review'],
					// ['value' => 'no_question', 'title' => 'No Question'],
					// ['value' => 'current_question', 'title' => 'Current Question'],
					// ],
					// ]
					// ),
					// ],
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'resource_count',
						'title'         => 'Resources',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Resource Count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'lesson_count',
						'title'         => 'Lessons',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Lesson Count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'quiz_count',
						'title'         => 'Quizzes',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Quiz Count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'assignments_count',
						'title'         => 'Assignments',
						'operator_type' => 'numeric_operators',
						'operand_type'  => array_merge(
							DROIP_PLUGIN_SETTINGS['INPUT_NUMBER'],
							array(
								'placeholder' => 'Assignment Count',
							)
						),
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_review_enabled',
						'title'         => 'Review Enabled',
						'operator_type' => 'boolean_operators',
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_qna_enabled',
						'title'         => 'QnA Enabled',
						'operator_type' => 'boolean_operators',
					),
					array(
						'source'        => TDE_APP_PREFIX,
						'value'         => 'is_certificate_enabled',
						'title'         => 'Certificate Enabled',
						'operator_type' => 'boolean_operators',
					),
				)
			),
		);
		return $conditions;
	}

	public static function element_visibility_condition_check($default_value, $condition, $options)
	{
		$source   = $condition['source'];
		$field    = $condition['field']['value'];
		$operator = $condition['operator']['value'];
		$operand  = $condition['operand']['value'];

		if (isset($options['TUTOR_LMS-subscriptions'])) {
			$subscription = (array) $options['TUTOR_LMS-subscriptions'];
			$fieldValue = self::get_subscription_field_value($subscription, $field, $options);
		} else if (isset($options['membership-plan'], $options['itemType']) && $options['itemType'] === 'membership-plan') {
			$membership_plan = (array) $options['membership-plan'];
			$fieldValue = self::get_membership_plan_field_value($membership_plan, $field);
		} else if (isset($options['membership-feature'], $options['itemType']) && $options['itemType'] === 'membership-feature') {
			$membership_feature = (array) $options['membership-feature'];
			$fieldValue = self::get_membership_feature_field_value($membership_feature, $field);
		} else {
			$fieldValue = self::get_course_field_value($field, $options);
		}

		if ($source === TDE_APP_PREFIX) {
			switch ($operator) {
				case 'true': {
						return (bool) $fieldValue;
					}
				case 'false': {
						return ! $fieldValue;
					}
				case 'is_equal': {
						return $fieldValue == $operand;
					}
				case 'not_equal': {
						return $fieldValue != $operand;
					}
				case 'less_than': {
						return $fieldValue < $operand;
					}
				case 'greater_than': {
						return $fieldValue > $operand;
					}
				case 'less_than_or_equal': {
						return $fieldValue <= $operand;
					}
				case 'greater_than_or_equal': {
						return $fieldValue >= $operand;
					}
				case 'user_state-is_equal': {
						return in_array($operand, $fieldValue);
					}
				case 'user_state-not_equal': {
						return !in_array($operand, $fieldValue);
					}
			}
		}

		return $default_value;
	}

	private static function get_membership_feature_field_value($membership_feature, $field)
	{
		$yes_icon_types = array(
			'tick',
			'tick_circle',
			'tick_circle_fill',
			'plus_square',
			'plus_circle',
			'plus_circle_fill',
			'plus_square_fill',
		);

		$no_icon_types = array(
			'cross',
			'cross_circle',
			'cross_circle_fill',
			'minus_square',
			'minus_circle',
			'minus_circle_fill',
			'minus_square_fill',
		);

		switch ($field) {
			case 'icon_type': {
					if (in_array($membership_feature['icon'], $yes_icon_types)) {
						return 'yes';
					} elseif (in_array($membership_feature['icon'], $no_icon_types)) {
						return 'no';
					}

					return null;
				}
		}

		return isset($membership_feature[$field]) ? $membership_feature[$field] : null;
	}

	private static function get_subscription_field_value($subscription, $field, $options)
	{
		switch ($field) {
			case 'sale_price': {
					return $subscription['sale_price'] !== '0.00';
				}
		}
		return isset($subscription[$field]) ? $subscription[$field] : null;
	}

	private static function get_membership_plan_field_value($membership_plan, $field)
	{
		switch ($field) {
			case 'enrollment_fee':
			case 'sale_price': {
					return $membership_plan[$field] !== '0.00';
				}

			case 'is_featured':
			case 'provide_certificate': {
					return $membership_plan[$field] == '1';
				}

			default:
				return isset($membership_plan[$field]) ? $membership_plan[$field] : null;
		}
	}

	private static function get_course_field_value($field, $options)
	{
		$course_id = isset($options['post']) ? $options['post']->ID : get_the_ID();
		switch ($field) {
			case 'is_paid': {
					$is_paid_course = tutor_utils()->is_course_purchasable($course_id);
					return $is_paid_course;
				}
			case 'on_sale': {
					$course_price = tutor_utils()->get_raw_course_price($course_id);
					return $course_price->sale_price != 0;
				}
			case 'purchase_options': {
					$selling_option = Course::get_selling_option($course_id);
					return $selling_option;
				}
			case 'average_rating': {
					$average_rating = self::get_course_meta($field, $course_id, $options);
					$average_rating = floatval(str_replace(',', '', $average_rating));
					return $average_rating;
				}
			case 'total_ratings':
			case 'enroll_count':
			case 'resource_count':
			case 'lesson_count':
			case 'quiz_count':
			case 'assignments_count': {
					$value = self::get_course_meta($field, $course_id, $options);
					return $value;
				}
			case 'student_state': {
					$state           = array();
					$entry_box_logic = tutor_entry_box_buttons($course_id);
					if (is_user_logged_in()) {
						$state[] = 'logged_in';
						if (tutor_utils()->is_wishlisted($course_id)) {
							$state[] = 'wishlisted';
						}

						if ($entry_box_logic->show_view_cart_btn) {
							$state[] = 'added_in_cart';
						} elseif (tutor_utils()->is_enrolled($course_id)) {
							$state[] = 'enrolled';
						}

						if ($entry_box_logic->show_continue_learning_btn) {
							$state[] = 'learner';
						} elseif (tutor_utils()->is_completed_course($course_id)) {
							$state[] = 'completed';
						}

						if ($entry_box_logic->show_retake_course_btn) {
							$state[] = 'can_retake';
						}
					}
					return $state;
				}
			case 'is_review_enabled': {
					$review_enabled = (bool) get_tutor_option('enable_course_review');
					return $review_enabled;
				}
			case 'is_qna_enabled': {
					$enable_q_and_a_on_course   = (bool) get_tutor_option('enable_q_and_a_on_course');
					$disable_qa_for_this_course = get_post_meta($course_id, '_tutor_enable_qa', true) != 'yes' ?? false;
					return ! (! $enable_q_and_a_on_course || $disable_qa_for_this_course);
				}
			case 'is_certificate_enabled': {
					$addon_config = tutor_utils()->get_addon_config('tutor-pro/addons/tutor-certificate/tutor-certificate.php');
					$is_enabled   = (bool) tutor_utils()->avalue_dot('is_enable', $addon_config);
					if ($is_enabled) {
						$has_course_certificate_template = (new Certificate(true))->has_course_certificate_template($course_id);
						return $has_course_certificate_template;
					}
					return false;
				}
		}
	}
}
