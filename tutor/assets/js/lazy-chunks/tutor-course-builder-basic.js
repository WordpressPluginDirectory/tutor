"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["694"],{42617:function(e,t,r){r.d(t,{LE:()=>l,Mv:()=>i,qg:()=>s});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);const o={display:"none"};function i(e){let{id:t,value:r}=e;return a().createElement("div",{id:t,style:o},r)}function l(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;// Hide element visually but keep it readable by screen readers
const o={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return a().createElement("div",{id:t,style:o,role:"status","aria-live":n,"aria-atomic":true},r)}function s(){const[e,t]=(0,n.useState)("");const r=(0,n.useCallback)(e=>{if(e!=null){t(e)}},[]);return{announce:r,announcement:e}}//# sourceMappingURL=accessibility.esm.js.map
},94697:function(e,t,r){r.d(t,{Cj:()=>th,Dy:()=>b,LB:()=>td,Lg:()=>eb,O1:()=>tp,VK:()=>P,VT:()=>m,Zj:()=>tb,_8:()=>C,ey:()=>S,g4:()=>eh,hI:()=>X,pE:()=>E,uN:()=>eA,we:()=>eZ,y9:()=>tB});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var o=r(61533);/* ESM import */var i=/*#__PURE__*/r.n(o);/* ESM import */var l=r(24285);/* ESM import */var s=r(42617);const c=/*#__PURE__*/(0,n.createContext)(null);function d(e){const t=(0,n.useContext)(c);(0,n.useEffect)(()=>{if(!t){throw new Error("useDndMonitor must be used within a children of <DndContext>")}const r=t(e);return r},[e,t])}function u(){const[e]=(0,n.useState)(()=>new Set);const t=(0,n.useCallback)(t=>{e.add(t);return()=>e.delete(t)},[e]);const r=(0,n.useCallback)(t=>{let{type:r,event:n}=t;e.forEach(e=>{var t;return(t=e[r])==null?void 0:t.call(e,n)})},[e]);return[r,t]}const v={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "};const f={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was moved over droppable area "+r.id+"."}return"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was dropped over droppable area "+r.id}return"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function p(e){let{announcements:t=f,container:r,hiddenTextDescribedById:i,screenReaderInstructions:c=v}=e;const{announce:u,announcement:p}=(0,s/* .useAnnouncement */.qg)();const h=(0,l/* .useUniqueId */.Ld)("DndLiveRegion");const[g,m]=(0,n.useState)(false);(0,n.useEffect)(()=>{m(true)},[]);d((0,n.useMemo)(()=>({onDragStart(e){let{active:r}=e;u(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;if(t.onDragMove){u(t.onDragMove({active:r,over:n}))}},onDragOver(e){let{active:r,over:n}=e;u(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;u(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;u(t.onDragCancel({active:r,over:n}))}}),[u,t]));if(!g){return null}const b=a().createElement(a().Fragment,null,a().createElement(s/* .HiddenText */.Mv,{id:i,value:c.draggable}),a().createElement(s/* .LiveRegion */.LE,{id:h,announcement:p}));return r?(0,o.createPortal)(b,r):b}var h;(function(e){e["DragStart"]="dragStart";e["DragMove"]="dragMove";e["DragEnd"]="dragEnd";e["DragCancel"]="dragCancel";e["DragOver"]="dragOver";e["RegisterDroppable"]="registerDroppable";e["SetDroppableDisabled"]="setDroppableDisabled";e["UnregisterDroppable"]="unregisterDroppable"})(h||(h={}));function g(){}function m(e,t){return(0,n.useMemo)(()=>({sensor:e,options:t!=null?t:{}}),[e,t])}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>[...t].filter(e=>e!=null),[...t])}const _=/*#__PURE__*/Object.freeze({x:0,y:0});/**
 * Returns the distance between two points
 */function y(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(e,t){const r=(0,l/* .getEventCoordinates */.DC)(e);if(!r){return"0 0"}const n={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return n.x+"% "+n.y+"%"}/**
 * Sort collisions from smallest to greatest value
 */function x(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return r-n}/**
 * Sort collisions from greatest to smallest value
 */function Z(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return n-r}/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */function k(e){let{left:t,top:r,height:n,width:a}=e;return[{x:t,y:r},{x:t+a,y:r},{x:t,y:r+n},{x:t+a,y:r+n}]}function C(e,t){if(!e||e.length===0){return null}const[r]=e;return t?r[t]:r}/**
 * Returns the coordinates of the center of a given ClientRect
 */function D(e,t,r){if(t===void 0){t=e.left}if(r===void 0){r=e.top}return{x:t+e.width*.5,y:r+e.height*.5}}/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */const E=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=D(t,t.left,t.top);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=y(D(n),a);o.push({id:t,data:{droppableContainer:e,value:r}})}}return o.sort(x)};/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */const S=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=k(t);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=k(n);const i=a.reduce((e,t,n)=>{return e+y(r[n],t)},0);const l=Number((i/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:l}})}}return o.sort(x)};/**
 * Returns the intersecting rectangle area between two rectangles
 */function W(e,t){const r=Math.max(t.top,e.top);const n=Math.max(t.left,e.left);const a=Math.min(t.left+t.width,e.left+e.width);const o=Math.min(t.top+t.height,e.top+e.height);const i=a-n;const l=o-r;if(n<a&&r<o){const r=t.width*t.height;const n=e.width*e.height;const a=i*l;const o=a/(r+n-a);return Number(o.toFixed(4))}// Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
return 0}/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */const M=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=[];for(const e of n){const{id:n}=e;const o=r.get(n);if(o){const r=W(o,t);if(r>0){a.push({id:n,data:{droppableContainer:e,value:r}})}}}return a.sort(Z)};/**
 * Check if a given point is contained within a bounding rectangle
 */function T(e,t){const{top:r,left:n,bottom:a,right:o}=t;return r<=e.y&&e.y<=a&&n<=e.x&&e.x<=o}/**
 * Returns the rectangles that the pointer is hovering over
 */const B=e=>{let{droppableContainers:t,droppableRects:r,pointerCoordinates:n}=e;if(!n){return[]}const a=[];for(const e of t){const{id:t}=e;const o=r.get(t);if(o&&T(n,o)){/* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */const r=k(o);const i=r.reduce((e,t)=>{return e+y(n,t)},0);const l=Number((i/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:l}})}}return a.sort(x)};function I(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function N(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_}function O(e){return function t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x}),{...t})}}const A=/*#__PURE__*/O(1);function L(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function J(e,t,r){const n=L(t);if(!n){return e}const{scaleX:a,scaleY:o,x:i,y:l}=n;const s=e.left-i-(1-a)*parseFloat(r);const c=e.top-l-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1));const d=a?e.width/a:e.width;const u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:s+d,bottom:c+u,left:s}}const R={ignoreTransform:false};/**
 * Returns the bounding client rect of an element relative to the viewport.
 */function P(e,t){if(t===void 0){t=R}let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=(0,l/* .getWindow */.Jj)(e).getComputedStyle(e);if(t){r=J(r,t,n)}}const{top:n,left:a,width:o,height:i,bottom:s,right:c}=r;return{top:n,left:a,width:o,height:i,bottom:s,right:c}}/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */function z(e){return P(e,{ignoreTransform:true})}function U(e){const t=e.innerWidth;const r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function F(e,t){if(t===void 0){t=(0,l/* .getWindow */.Jj)(e).getComputedStyle(e)}return t.position==="fixed"}function j(e,t){if(t===void 0){t=(0,l/* .getWindow */.Jj)(e).getComputedStyle(e)}const r=/(auto|scroll|overlay)/;const n=["overflow","overflowX","overflowY"];return n.some(e=>{const n=t[e];return typeof n==="string"?r.test(n):false})}function X(e,t){const r=[];function n(a){if(t!=null&&r.length>=t){return r}if(!a){return r}if((0,l/* .isDocument */.qk)(a)&&a.scrollingElement!=null&&!r.includes(a.scrollingElement)){r.push(a.scrollingElement);return r}if(!(0,l/* .isHTMLElement */.Re)(a)||(0,l/* .isSVGElement */.vZ)(a)){return r}if(r.includes(a)){return r}const o=(0,l/* .getWindow */.Jj)(e).getComputedStyle(a);if(a!==e){if(j(a,o)){r.push(a)}}if(F(a,o)){return r}return n(a.parentNode)}if(!e){return r}return n(e)}function Y(e){const[t]=X(e,1);return t!=null?t:null}function Q(e){if(!l/* .canUseDOM */.Nq||!e){return null}if((0,l/* .isWindow */.FJ)(e)){return e}if(!(0,l/* .isNode */.UG)(e)){return null}if((0,l/* .isDocument */.qk)(e)||e===(0,l/* .getOwnerDocument */.r3)(e).scrollingElement){return window}if((0,l/* .isHTMLElement */.Re)(e)){return e}return null}function q(e){if((0,l/* .isWindow */.FJ)(e)){return e.scrollX}return e.scrollLeft}function H(e){if((0,l/* .isWindow */.FJ)(e)){return e.scrollY}return e.scrollTop}function V(e){return{x:q(e),y:H(e)}}var G;(function(e){e[e["Forward"]=1]="Forward";e[e["Backward"]=-1]="Backward"})(G||(G={}));function K(e){if(!l/* .canUseDOM */.Nq||!e){return false}return e===document.scrollingElement}function $(e){const t={x:0,y:0};const r=K(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth};const n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};const a=e.scrollTop<=t.y;const o=e.scrollLeft<=t.x;const i=e.scrollTop>=n.y;const l=e.scrollLeft>=n.x;return{isTop:a,isLeft:o,isBottom:i,isRight:l,maxScroll:n,minScroll:t}}const ee={x:.2,y:.2};function et(e,t,r,n,a){let{top:o,left:i,right:l,bottom:s}=r;if(n===void 0){n=10}if(a===void 0){a=ee}const{isTop:c,isBottom:d,isLeft:u,isRight:v}=$(e);const f={x:0,y:0};const p={x:0,y:0};const h={height:t.height*a.y,width:t.width*a.x};if(!c&&o<=t.top+h.height){// Scroll Up
f.y=G.Backward;p.y=n*Math.abs((t.top+h.height-o)/h.height)}else if(!d&&s>=t.bottom-h.height){// Scroll Down
f.y=G.Forward;p.y=n*Math.abs((t.bottom-h.height-s)/h.height)}if(!v&&l>=t.right-h.width){// Scroll Right
f.x=G.Forward;p.x=n*Math.abs((t.right-h.width-l)/h.width)}else if(!u&&i<=t.left+h.width){// Scroll Left
f.x=G.Backward;p.x=n*Math.abs((t.left+h.width-i)/h.width)}return{direction:f,speed:p}}function er(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:a}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:a,width:e.clientWidth,height:e.clientHeight}}function en(e){return e.reduce((e,t)=>{return(0,l/* .add */.IH)(e,V(t))},_)}function ea(e){return e.reduce((e,t)=>{return e+q(t)},0)}function eo(e){return e.reduce((e,t)=>{return e+H(t)},0)}function ei(e,t){if(t===void 0){t=P}if(!e){return}const{top:r,left:n,bottom:a,right:o}=t(e);const i=Y(e);if(!i){return}if(a<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth){e.scrollIntoView({block:"center",inline:"center"})}}const el=[["x",["left","right"],ea],["y",["top","bottom"],eo]];class es{constructor(e,t){this.rect=void 0;this.width=void 0;this.height=void 0;this.top=void 0;this.bottom=void 0;this.right=void 0;this.left=void 0;const r=X(t);const n=en(r);this.rect={...e};this.width=e.width;this.height=e.height;for(const[e,t,a]of el){for(const o of t){Object.defineProperty(this,o,{get:()=>{const t=a(r);const i=n[e]-t;return this.rect[o]+i},enumerable:true})}}Object.defineProperty(this,"rect",{enumerable:false})}}class ec{constructor(e){this.target=void 0;this.listeners=[];this.removeAll=()=>{this.listeners.forEach(e=>{var t;return(t=this.target)==null?void 0:t.removeEventListener(...e)})};this.target=e}add(e,t,r){var n;(n=this.target)==null?void 0:n.addEventListener(e,t,r);this.listeners.push([e,t,r])}}function ed(e){// If the `event.target` element is removed from the document events will still be targeted
// at it, and hence won't always bubble up to the window or document anymore.
// If there is any risk of an element being removed while it is being dragged,
// the best practice is to attach the event listeners directly to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const{EventTarget:t}=(0,l/* .getWindow */.Jj)(e);return e instanceof t?e:(0,l/* .getOwnerDocument */.r3)(e)}function eu(e,t){const r=Math.abs(e.x);const n=Math.abs(e.y);if(typeof t==="number"){return Math.sqrt(r**2+n**2)>t}if("x"in t&&"y"in t){return r>t.x&&n>t.y}if("x"in t){return r>t.x}if("y"in t){return n>t.y}return false}var ev;(function(e){e["Click"]="click";e["DragStart"]="dragstart";e["Keydown"]="keydown";e["ContextMenu"]="contextmenu";e["Resize"]="resize";e["SelectionChange"]="selectionchange";e["VisibilityChange"]="visibilitychange"})(ev||(ev={}));function ef(e){e.preventDefault()}function ep(e){e.stopPropagation()}var eh;(function(e){e["Space"]="Space";e["Down"]="ArrowDown";e["Right"]="ArrowRight";e["Left"]="ArrowLeft";e["Up"]="ArrowUp";e["Esc"]="Escape";e["Enter"]="Enter";e["Tab"]="Tab"})(eh||(eh={}));const eg={start:[eh.Space,eh.Enter],cancel:[eh.Esc],end:[eh.Space,eh.Enter,eh.Tab]};const em=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case eh.Right:return{...r,x:r.x+25};case eh.Left:return{...r,x:r.x-25};case eh.Down:return{...r,y:r.y+25};case eh.Up:return{...r,y:r.y-25}}return undefined};class eb{constructor(e){this.props=void 0;this.autoScrollEnabled=false;this.referenceCoordinates=void 0;this.listeners=void 0;this.windowListeners=void 0;this.props=e;const{event:{target:t}}=e;this.props=e;this.listeners=new ec((0,l/* .getOwnerDocument */.r3)(t));this.windowListeners=new ec((0,l/* .getWindow */.Jj)(t));this.handleKeyDown=this.handleKeyDown.bind(this);this.handleCancel=this.handleCancel.bind(this);this.attach()}attach(){this.handleStart();this.windowListeners.add(ev.Resize,this.handleCancel);this.windowListeners.add(ev.VisibilityChange,this.handleCancel);setTimeout(()=>this.listeners.add(ev.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props;const r=e.node.current;if(r){ei(r)}t(_)}handleKeyDown(e){if((0,l/* .isKeyboardEvent */.vd)(e)){const{active:t,context:r,options:n}=this.props;const{keyboardCodes:a=eg,coordinateGetter:o=em,scrollBehavior:i="smooth"}=n;const{code:s}=e;if(a.end.includes(s)){this.handleEnd(e);return}if(a.cancel.includes(s)){this.handleCancel(e);return}const{collisionRect:c}=r.current;const d=c?{x:c.left,y:c.top}:_;if(!this.referenceCoordinates){this.referenceCoordinates=d}const u=o(e,{active:t,context:r.current,currentCoordinates:d});if(u){const t=(0,l/* .subtract */.$X)(u,d);const n={x:0,y:0};const{scrollableAncestors:a}=r.current;for(const r of a){const a=e.code;const{isTop:o,isRight:l,isLeft:s,isBottom:c,maxScroll:d,minScroll:v}=$(r);const f=er(r);const p={x:Math.min(a===eh.Right?f.right-f.width/2:f.right,Math.max(a===eh.Right?f.left:f.left+f.width/2,u.x)),y:Math.min(a===eh.Down?f.bottom-f.height/2:f.bottom,Math.max(a===eh.Down?f.top:f.top+f.height/2,u.y))};const h=a===eh.Right&&!l||a===eh.Left&&!s;const g=a===eh.Down&&!c||a===eh.Up&&!o;if(h&&p.x!==u.x){const e=r.scrollLeft+t.x;const o=a===eh.Right&&e<=d.x||a===eh.Left&&e>=v.x;if(o&&!t.y){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({left:e,behavior:i});return}if(o){n.x=r.scrollLeft-e}else{n.x=a===eh.Right?r.scrollLeft-d.x:r.scrollLeft-v.x}if(n.x){r.scrollBy({left:-n.x,behavior:i})}break}else if(g&&p.y!==u.y){const e=r.scrollTop+t.y;const o=a===eh.Down&&e<=d.y||a===eh.Up&&e>=v.y;if(o&&!t.x){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({top:e,behavior:i});return}if(o){n.y=r.scrollTop-e}else{n.y=a===eh.Down?r.scrollTop-d.y:r.scrollTop-v.y}if(n.y){r.scrollBy({top:-n.y,behavior:i})}break}}this.handleMove(e,(0,l/* .add */.IH)((0,l/* .subtract */.$X)(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault();r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault();this.detach();t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault();this.detach();t()}detach(){this.listeners.removeAll();this.windowListeners.removeAll()}}eb.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=eg,onActivation:a}=t;let{active:o}=r;const{code:i}=e.nativeEvent;if(n.start.includes(i)){const t=o.activatorNode.current;if(t&&e.target!==t){return false}e.preventDefault();a==null?void 0:a({event:e.nativeEvent});return true}return false}}];function e_(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}class ew{constructor(e,t,r){var n;if(r===void 0){r=ed(e.event.target)}this.props=void 0;this.events=void 0;this.autoScrollEnabled=true;this.document=void 0;this.activated=false;this.initialCoordinates=void 0;this.timeoutId=null;this.listeners=void 0;this.documentListeners=void 0;this.windowListeners=void 0;this.props=e;this.events=t;const{event:a}=e;const{target:o}=a;this.props=e;this.events=t;this.document=(0,l/* .getOwnerDocument */.r3)(o);this.documentListeners=new ec(this.document);this.listeners=new ec(r);this.windowListeners=new ec((0,l/* .getWindow */.Jj)(o));this.initialCoordinates=(n=(0,l/* .getEventCoordinates */.DC)(a))!=null?n:_;this.handleStart=this.handleStart.bind(this);this.handleMove=this.handleMove.bind(this);this.handleEnd=this.handleEnd.bind(this);this.handleCancel=this.handleCancel.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.removeTextSelection=this.removeTextSelection.bind(this);this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;this.listeners.add(e.move.name,this.handleMove,{passive:false});this.listeners.add(e.end.name,this.handleEnd);if(e.cancel){this.listeners.add(e.cancel.name,this.handleCancel)}this.windowListeners.add(ev.Resize,this.handleCancel);this.windowListeners.add(ev.DragStart,ef);this.windowListeners.add(ev.VisibilityChange,this.handleCancel);this.windowListeners.add(ev.ContextMenu,ef);this.documentListeners.add(ev.Keydown,this.handleKeydown);if(t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options})){return this.handleStart()}if(ey(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);this.handlePending(t);return}if(e_(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll();this.windowListeners.removeAll();// Wait until the next event loop before removing document listeners
// This is necessary because we listen for `click` and `selection` events on the document
setTimeout(this.documentListeners.removeAll,50);if(this.timeoutId!==null){clearTimeout(this.timeoutId);this.timeoutId=null}}handlePending(e,t){const{active:r,onPending:n}=this.props;n(r,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this;const{onStart:t}=this.props;if(e){this.activated=true;// Stop propagation of click events once activation constraints are met
this.documentListeners.add(ev.Click,ep,{capture:true});// Remove any text selection from the document
this.removeTextSelection();// Prevent further text selection while dragging
this.documentListeners.add(ev.SelectionChange,this.removeTextSelection);t(e)}}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:a}=this;const{onMove:o,options:{activationConstraint:i}}=a;if(!n){return}const s=(t=(0,l/* .getEventCoordinates */.DC)(e))!=null?t:_;const c=(0,l/* .subtract */.$X)(n,s);// Constraint validation
if(!r&&i){if(e_(i)){if(i.tolerance!=null&&eu(c,i.tolerance)){return this.handleCancel()}if(eu(c,i.distance)){return this.handleStart()}}if(ey(i)){if(eu(c,i.tolerance)){return this.handleCancel()}}this.handlePending(i,c);return}if(e.cancelable){e.preventDefault()}o(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleKeydown(e){if(e.code===eh.Esc){this.handleCancel()}}removeTextSelection(){var e;(e=this.document.getSelection())==null?void 0:e.removeAllRanges()}}const ex={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eZ extends ew{constructor(e){const{event:t}=e;// Pointer events stop firing if the target is unmounted while dragging
// Therefore we attach listeners to the owner document instead
const r=(0,l/* .getOwnerDocument */.r3)(t.target);super(e,ex,r)}}eZ.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(!r.isPrimary||r.button!==0){return false}n==null?void 0:n({event:r});return true}}];const ek={move:{name:"mousemove"},end:{name:"mouseup"}};var eC;(function(e){e[e["RightClick"]=2]="RightClick"})(eC||(eC={}));class eD extends ew{constructor(e){super(e,ek,(0,l/* .getOwnerDocument */.r3)(e.event.target))}}eD.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(r.button===eC.RightClick){return false}n==null?void 0:n({event:r});return true}}];const eE={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class eS extends ew{constructor(e){super(e,eE)}static setup(){// Adding a non-capture and non-passive `touchmove` listener in order
// to force `event.preventDefault()` calls to work in dynamically added
// touchmove event handlers. This is required for iOS Safari.
window.addEventListener(eE.move.name,e,{capture:false,passive:false});return function t(){window.removeEventListener(eE.move.name,e)};// We create a new handler because the teardown function of another sensor
// could remove our event listener if we use a referentially equal listener.
function e(){}}}eS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;const{touches:a}=r;if(a.length>1){return false}n==null?void 0:n({event:r});return true}}];var eW;(function(e){e[e["Pointer"]=0]="Pointer";e[e["DraggableRect"]=1]="DraggableRect"})(eW||(eW={}));var eM;(function(e){e[e["TreeOrder"]=0]="TreeOrder";e[e["ReversedTreeOrder"]=1]="ReversedTreeOrder"})(eM||(eM={}));function eT(e){let{acceleration:t,activator:r=eW.Pointer,canScroll:a,draggingRect:o,enabled:i,interval:s=5,order:c=eM.TreeOrder,pointerCoordinates:d,scrollableAncestors:u,scrollableAncestorRects:v,delta:f,threshold:p}=e;const h=eI({delta:f,disabled:!i});const[g,m]=(0,l/* .useInterval */.Yz)();const b=(0,n.useRef)({x:0,y:0});const _=(0,n.useRef)({x:0,y:0});const y=(0,n.useMemo)(()=>{switch(r){case eW.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case eW.DraggableRect:return o}},[r,o,d]);const w=(0,n.useRef)(null);const x=(0,n.useCallback)(()=>{const e=w.current;if(!e){return}const t=b.current.x*_.current.x;const r=b.current.y*_.current.y;e.scrollBy(t,r)},[]);const Z=(0,n.useMemo)(()=>c===eM.TreeOrder?[...u].reverse():u,[c,u]);(0,n.useEffect)(()=>{if(!i||!u.length||!y){m();return}for(const e of Z){if((a==null?void 0:a(e))===false){continue}const r=u.indexOf(e);const n=v[r];if(!n){continue}const{direction:o,speed:i}=et(e,n,y,t,p);for(const e of["x","y"]){if(!h[e][o[e]]){i[e]=0;o[e]=0}}if(i.x>0||i.y>0){m();w.current=e;g(x,s);b.current=i;_.current=o;return}}b.current={x:0,y:0};_.current={x:0,y:0};m()},[t,x,a,m,i,s,JSON.stringify(y),JSON.stringify(h),g,u,Z,v,JSON.stringify(p)])}const eB={x:{[G.Backward]:false,[G.Forward]:false},y:{[G.Backward]:false,[G.Forward]:false}};function eI(e){let{delta:t,disabled:r}=e;const n=(0,l/* .usePrevious */.D9)(t);return(0,l/* .useLazyMemo */.Gj)(e=>{if(r||!n||!e){// Reset scroll intent tracking when auto-scrolling is disabled
return eB}const a={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};// Keep track of the user intent to scroll in each direction for both axis
return{x:{[G.Backward]:e.x[G.Backward]||a.x===-1,[G.Forward]:e.x[G.Forward]||a.x===1},y:{[G.Backward]:e.y[G.Backward]||a.y===-1,[G.Forward]:e.y[G.Forward]||a.y===1}}},[r,t,n])}function eN(e,t){const r=t!=null?e.get(t):undefined;const n=r?r.node.current:null;return(0,l/* .useLazyMemo */.Gj)(e=>{var r;if(t==null){return null}// In some cases, the draggable node can unmount while dragging
// This is the case for virtualized lists. In those situations,
// we fall back to the last known value for that node.
return(r=n!=null?n:e)!=null?r:null},[n,t])}function eO(e,t){return(0,n.useMemo)(()=>e.reduce((e,r)=>{const{sensor:n}=r;const a=n.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,r)}));return[...e,...a]},[]),[e,t])}var eA;(function(e){e[e["Always"]=0]="Always";e[e["BeforeDragging"]=1]="BeforeDragging";e[e["WhileDragging"]=2]="WhileDragging"})(eA||(eA={}));var eL;(function(e){e["Optimized"]="optimized"})(eL||(eL={}));const eJ=/*#__PURE__*/new Map;function eR(e,t){let{dragging:r,dependencies:a,config:o}=t;const[i,s]=(0,n.useState)(null);const{frequency:c,measure:d,strategy:u}=o;const v=(0,n.useRef)(e);const f=b();const p=(0,l/* .useLatestValue */.Ey)(f);const h=(0,n.useCallback)(function(e){if(e===void 0){e=[]}if(p.current){return}s(t=>{if(t===null){return e}return t.concat(e.filter(e=>!t.includes(e)))})},[p]);const g=(0,n.useRef)(null);const m=(0,l/* .useLazyMemo */.Gj)(t=>{if(f&&!r){return eJ}if(!t||t===eJ||v.current!==e||i!=null){const t=new Map;for(let r of e){if(!r){continue}if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){// This container does not need to be re-measured
t.set(r.id,r.rect.current);continue}const e=r.node.current;const n=e?new es(d(e),e):null;r.rect.current=n;if(n){t.set(r.id,n)}}return t}return t},[e,i,r,f,d]);(0,n.useEffect)(()=>{v.current=e},[e]);(0,n.useEffect)(()=>{if(f){return}h()},[r,f]);(0,n.useEffect)(()=>{if(i&&i.length>0){s(null)}},[JSON.stringify(i)]);(0,n.useEffect)(()=>{if(f||typeof c!=="number"||g.current!==null){return}g.current=setTimeout(()=>{h();g.current=null},c)},[c,f,h,...a]);return{droppableRects:m,measureDroppableContainers:h,measuringScheduled:i!=null};function b(){switch(u){case eA.Always:return false;case eA.BeforeDragging:return r;default:return!r}}}function eP(e,t){return(0,l/* .useLazyMemo */.Gj)(r=>{if(!e){return null}if(r){return r}return typeof t==="function"?t(e):e},[t,e])}function ez(e,t){return eP(e,t)}/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */function eU(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */.zX)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.MutationObserver==="undefined"){return undefined}const{MutationObserver:e}=window;return new e(a)},[a,r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */function eF(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */.zX)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.ResizeObserver==="undefined"){return undefined}const{ResizeObserver:e}=window;return new e(a)},[r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}function ej(e){return new es(P(e),e)}function eX(e,t,r){if(t===void 0){t=ej}const[a,o]=(0,n.useState)(null);function i(){o(n=>{if(!e){return null}if(e.isConnected===false){var a;// Fall back to last rect we measured if the element is
// no longer connected to the DOM.
return(a=n!=null?n:r)!=null?a:null}const o=t(e);if(JSON.stringify(n)===JSON.stringify(o)){return n}return o})}const s=eU({callback(t){if(!e){return}for(const r of t){const{type:t,target:n}=r;if(t==="childList"&&n instanceof HTMLElement&&n.contains(e)){i();break}}}});const c=eF({callback:i});(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{i();if(e){c==null?void 0:c.observe(e);s==null?void 0:s.observe(document.body,{childList:true,subtree:true})}else{c==null?void 0:c.disconnect();s==null?void 0:s.disconnect()}},[e]);return a}function eY(e){const t=eP(e);return N(e,t)}const eQ=[];function eq(e){const t=(0,n.useRef)(e);const r=(0,l/* .useLazyMemo */.Gj)(r=>{if(!e){return eQ}if(r&&r!==eQ&&e&&t.current&&e.parentNode===t.current.parentNode){return r}return X(e)},[e]);(0,n.useEffect)(()=>{t.current=e},[e]);return r}function eH(e){const[t,r]=(0,n.useState)(null);const a=(0,n.useRef)(e);// To-do: Throttle the handleScroll callback
const o=(0,n.useCallback)(e=>{const t=Q(e.target);if(!t){return}r(e=>{if(!e){return null}e.set(t,V(t));return new Map(e)})},[]);(0,n.useEffect)(()=>{const t=a.current;if(e!==t){n(t);const i=e.map(e=>{const t=Q(e);if(t){t.addEventListener("scroll",o,{passive:true});return[t,V(t)]}return null}).filter(e=>e!=null);r(i.length?new Map(i):null);a.current=e}return()=>{n(e);n(t)};function n(e){e.forEach(e=>{const t=Q(e);t==null?void 0:t.removeEventListener("scroll",o)})}},[o,e]);return(0,n.useMemo)(()=>{if(e.length){return t?Array.from(t.values()).reduce((e,t)=>(0,l/* .add */.IH)(e,t),_):en(e)}return _},[e,t])}function eV(e,t){if(t===void 0){t=[]}const r=(0,n.useRef)(null);(0,n.useEffect)(()=>{r.current=null},t);(0,n.useEffect)(()=>{const t=e!==_;if(t&&!r.current){r.current=e}if(!t&&r.current){r.current=null}},[e]);return r.current?(0,l/* .subtract */.$X)(e,r.current):_}function eG(e){(0,n.useEffect)(()=>{if(!l/* .canUseDOM */.Nq){return}const t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(const e of t){e==null?void 0:e()}}},// eslint-disable-next-line react-hooks/exhaustive-deps
e.map(e=>{let{sensor:t}=e;return t}))}function eK(e,t){return(0,n.useMemo)(()=>{return e.reduce((e,r)=>{let{eventName:n,handler:a}=r;e[n]=e=>{a(e,t)};return e},{})},[e,t])}function e$(e){return(0,n.useMemo)(()=>e?U(e):null,[e])}const e0=[];function e1(e,t){if(t===void 0){t=P}const[r]=e;const a=e$(r?(0,l/* .getWindow */.Jj)(r):null);const[o,i]=(0,n.useState)(e0);function s(){i(()=>{if(!e.length){return e0}return e.map(e=>K(e)?a:new es(t(e),e))})}const c=eF({callback:s});(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{c==null?void 0:c.disconnect();s();e.forEach(e=>c==null?void 0:c.observe(e))},[e]);return o}function e2(e){if(!e){return null}if(e.children.length>1){return e}const t=e.children[0];return(0,l/* .isHTMLElement */.Re)(t)?t:e}function e4(e){let{measure:t}=e;const[r,a]=(0,n.useState)(null);const o=(0,n.useCallback)(e=>{for(const{target:r}of e){if((0,l/* .isHTMLElement */.Re)(r)){a(e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n});break}}},[t]);const i=eF({callback:o});const s=(0,n.useCallback)(e=>{const r=e2(e);i==null?void 0:i.disconnect();if(r){i==null?void 0:i.observe(r)}a(r?t(r):null)},[t,i]);const[c,d]=(0,l/* .useNodeRef */.wm)(s);return(0,n.useMemo)(()=>({nodeRef:c,rect:r,setRef:d}),[r,c,d])}const e3=[{sensor:eZ,options:{}},{sensor:eb,options:{}}];const e8={current:{}};const e6={draggable:{measure:z},droppable:{measure:z,strategy:eA.WhileDragging,frequency:eL.Optimized},dragOverlay:{measure:P}};class e5 extends Map{get(e){var t;return e!=null?(t=super.get(e))!=null?t:undefined:undefined}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,r;return(t=(r=this.get(e))==null?void 0:r.node.current)!=null?t:undefined}}const e9={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:/*#__PURE__*/new Map,droppableRects:/*#__PURE__*/new Map,droppableContainers:/*#__PURE__*/new e5,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:g},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:e6,measureDroppableContainers:g,windowRect:null,measuringScheduled:false};const e7={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:g,draggableNodes:/*#__PURE__*/new Map,over:null,measureDroppableContainers:g};const te=/*#__PURE__*/(0,n.createContext)(e7);const tt=/*#__PURE__*/(0,n.createContext)(e9);function tr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new e5}}}function tn(e,t){switch(t.type){case h.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case h.DragMove:if(e.draggable.active==null){return e}return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case h.DragEnd:case h.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case h.RegisterDroppable:{const{element:r}=t;const{id:n}=r;const a=new e5(e.droppable.containers);a.set(n,r);return{...e,droppable:{...e.droppable,containers:a}}}case h.SetDroppableDisabled:{const{id:r,key:n,disabled:a}=t;const o=e.droppable.containers.get(r);if(!o||n!==o.key){return e}const i=new e5(e.droppable.containers);i.set(r,{...o,disabled:a});return{...e,droppable:{...e.droppable,containers:i}}}case h.UnregisterDroppable:{const{id:r,key:n}=t;const a=e.droppable.containers.get(r);if(!a||n!==a.key){return e}const o=new e5(e.droppable.containers);o.delete(r);return{...e,droppable:{...e.droppable,containers:o}}}default:{return e}}}function ta(e){let{disabled:t}=e;const{active:r,activatorEvent:a,draggableNodes:o}=(0,n.useContext)(te);const i=(0,l/* .usePrevious */.D9)(a);const s=(0,l/* .usePrevious */.D9)(r==null?void 0:r.id);// Restore keyboard focus on the activator node
(0,n.useEffect)(()=>{if(t){return}if(!a&&i&&s!=null){if(!(0,l/* .isKeyboardEvent */.vd)(i)){return}if(document.activeElement===i.target){// No need to restore focus
return}const e=o.get(s);if(!e){return}const{activatorNode:t,node:r}=e;if(!t.current&&!r.current){return}requestAnimationFrame(()=>{for(const e of[t.current,r.current]){if(!e){continue}const t=(0,l/* .findFirstFocusableNode */.so)(e);if(t){t.focus();break}}})}},[a,t,o,s,i]);return null}function to(e,t){let{transform:r,...n}=t;return e!=null&&e.length?e.reduce((e,t)=>{return t({transform:e,...n})},r):r}function ti(e){return(0,n.useMemo)(()=>({draggable:{...e6.draggable,...e==null?void 0:e.draggable},droppable:{...e6.droppable,...e==null?void 0:e.droppable},dragOverlay:{...e6.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function tl(e){let{activeNode:t,measure:r,initialRect:a,config:o=true}=e;const i=(0,n.useRef)(false);const{x:s,y:c}=typeof o==="boolean"?{x:o,y:o}:o;(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{const e=!s&&!c;if(e||!t){i.current=false;return}if(i.current||!a){// Return early if layout shift scroll compensation was already attempted
// or if there is no initialRect to compare to.
return}// Get the most up to date node ref for the active draggable
const n=t==null?void 0:t.node.current;if(!n||n.isConnected===false){// Return early if there is no attached node ref or if the node is
// disconnected from the document.
return}const o=r(n);const l=N(o,a);if(!s){l.x=0}if(!c){l.y=0}// Only perform layout shift scroll compensation once
i.current=true;if(Math.abs(l.x)>0||Math.abs(l.y)>0){const e=Y(n);if(e){e.scrollBy({top:l.y,left:l.x})}}},[t,s,c,a,r])}const ts=/*#__PURE__*/(0,n.createContext)({..._,scaleX:1,scaleY:1});var tc;(function(e){e[e["Uninitialized"]=0]="Uninitialized";e[e["Initializing"]=1]="Initializing";e[e["Initialized"]=2]="Initialized"})(tc||(tc={}));const td=/*#__PURE__*/(0,n.memo)(function e(e){var t,r,i,s;let{id:d,accessibility:v,autoScroll:f=true,children:g,sensors:m=e3,collisionDetection:b=M,measuring:_,modifiers:y,...w}=e;const x=(0,n.useReducer)(tn,undefined,tr);const[Z,k]=x;const[D,E]=u();const[S,W]=(0,n.useState)(tc.Uninitialized);const T=S===tc.Initialized;const{draggable:{active:B,nodes:N,translate:O},droppable:{containers:L}}=Z;const J=B!=null?N.get(B):null;const R=(0,n.useRef)({initial:null,translated:null});const P=(0,n.useMemo)(()=>{var e;return B!=null?{id:B,// It's possible for the active node to unmount while dragging
data:(e=J==null?void 0:J.data)!=null?e:e8,rect:R}:null},[B,J]);const z=(0,n.useRef)(null);const[U,F]=(0,n.useState)(null);const[j,X]=(0,n.useState)(null);const Y=(0,l/* .useLatestValue */.Ey)(w,Object.values(w));const Q=(0,l/* .useUniqueId */.Ld)("DndDescribedBy",d);const q=(0,n.useMemo)(()=>L.getEnabled(),[L]);const H=ti(_);const{droppableRects:V,measureDroppableContainers:G,measuringScheduled:K}=eR(q,{dragging:T,dependencies:[O.x,O.y],config:H.droppable});const $=eN(N,B);const ee=(0,n.useMemo)(()=>j?(0,l/* .getEventCoordinates */.DC)(j):null,[j]);const et=eL();const er=ez($,H.draggable.measure);tl({activeNode:B!=null?N.get(B):null,config:et.layoutShiftCompensation,initialRect:er,measure:H.draggable.measure});const en=eX($,H.draggable.measure,er);const ea=eX($?$.parentElement:null);const eo=(0,n.useRef)({activatorEvent:null,active:null,activeNode:$,collisionRect:null,collisions:null,droppableRects:V,draggableNodes:N,draggingNode:null,draggingNodeRect:null,droppableContainers:L,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null});const ei=L.getNodeFor((t=eo.current.over)==null?void 0:t.id);const el=e4({measure:H.dragOverlay.measure});// Use the rect of the drag overlay if it is mounted
const es=(r=el.nodeRef.current)!=null?r:$;const ec=T?(i=el.rect)!=null?i:en:null;const ed=Boolean(el.nodeRef.current&&el.rect);// The delta between the previous and new position of the draggable node
// is only relevant when there is no drag overlay
const eu=eY(ed?null:en);// Get the window rect of the dragging node
const ev=e$(es?(0,l/* .getWindow */.Jj)(es):null);// Get scrollable ancestors of the dragging node
const ef=eq(T?ei!=null?ei:$:null);const ep=e1(ef);// Apply modifiers
const eh=to(y,{transform:{x:O.x-eu.x,y:O.y-eu.y,scaleX:1,scaleY:1},activatorEvent:j,active:P,activeNodeRect:en,containerNodeRect:ea,draggingNodeRect:ec,over:eo.current.over,overlayNodeRect:el.rect,scrollableAncestors:ef,scrollableAncestorRects:ep,windowRect:ev});const eg=ee?(0,l/* .add */.IH)(ee,O):null;const em=eH(ef);// Represents the scroll delta since dragging was initiated
const eb=eV(em);// Represents the scroll delta since the last time the active node rect was measured
const e_=eV(em,[en]);const ey=(0,l/* .add */.IH)(eh,eb);const ew=ec?A(ec,eh):null;const ex=P&&ew?b({active:P,collisionRect:ew,droppableRects:V,droppableContainers:q,pointerCoordinates:eg}):null;const eZ=C(ex,"id");const[ek,eC]=(0,n.useState)(null);// When there is no drag overlay used, we need to account for the
// window scroll delta
const eD=ed?eh:(0,l/* .add */.IH)(eh,e_);const eE=I(eD,(s=ek==null?void 0:ek.rect)!=null?s:null,en);const eS=(0,n.useRef)(null);const eW=(0,n.useCallback)((e,t)=>{let{sensor:r,options:n}=t;if(z.current==null){return}const a=N.get(z.current);if(!a){return}const i=e.nativeEvent;const l=new r({active:z.current,activeNode:a,event:i,options:n,// Sensors need to be instantiated with refs for arguments that change over time
// otherwise they are frozen in time with the stale arguments
context:eo,onAbort(e){const t=N.get(e);if(!t){return}const{onDragAbort:r}=Y.current;const n={id:e};r==null?void 0:r(n);D({type:"onDragAbort",event:n})},onPending(e,t,r,n){const a=N.get(e);if(!a){return}const{onDragPending:o}=Y.current;const i={id:e,constraint:t,initialCoordinates:r,offset:n};o==null?void 0:o(i);D({type:"onDragPending",event:i})},onStart(e){const t=z.current;if(t==null){return}const r=N.get(t);if(!r){return}const{onDragStart:n}=Y.current;const a={activatorEvent:i,active:{id:t,data:r.data,rect:R}};(0,o.unstable_batchedUpdates)(()=>{n==null?void 0:n(a);W(tc.Initializing);k({type:h.DragStart,initialCoordinates:e,active:t});D({type:"onDragStart",event:a});F(eS.current);X(i)})},onMove(e){k({type:h.DragMove,coordinates:e})},onEnd:s(h.DragEnd),onCancel:s(h.DragCancel)});eS.current=l;function s(e){return async function t(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:a}=eo.current;let l=null;if(t&&a){const{cancelDrop:o}=Y.current;l={activatorEvent:i,active:t,collisions:r,delta:a,over:n};if(e===h.DragEnd&&typeof o==="function"){const t=await Promise.resolve(o(l));if(t){e=h.DragCancel}}}z.current=null;(0,o.unstable_batchedUpdates)(()=>{k({type:e});W(tc.Uninitialized);eC(null);F(null);X(null);eS.current=null;const t=e===h.DragEnd?"onDragEnd":"onDragCancel";if(l){const e=Y.current[t];e==null?void 0:e(l);D({type:t,event:l})}})}}},[N]);const eM=(0,n.useCallback)((e,t)=>{return(r,n)=>{const a=r.nativeEvent;const o=N.get(n);if(z.current!==null||// No active draggable
!o||// Event has already been captured
a.dndKit||a.defaultPrevented){return}const i={active:o};const l=e(r,t.options,i);if(l===true){a.dndKit={capturedBy:t.sensor};z.current=n;eW(r,t)}}},[N,eW]);const eB=eO(m,eM);eG(m);(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{if(en&&S===tc.Initializing){W(tc.Initialized)}},[en,S]);(0,n.useEffect)(()=>{const{onDragMove:e}=Y.current;const{active:t,activatorEvent:r,collisions:n,over:a}=eo.current;if(!t||!r){return}const i={active:t,activatorEvent:r,collisions:n,delta:{x:ey.x,y:ey.y},over:a};(0,o.unstable_batchedUpdates)(()=>{e==null?void 0:e(i);D({type:"onDragMove",event:i})})},[ey.x,ey.y]);(0,n.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:a}=eo.current;if(!e||z.current==null||!t||!a){return}const{onDragOver:i}=Y.current;const l=n.get(eZ);const s=l&&l.rect.current?{id:l.id,rect:l.rect.current,data:l.data,disabled:l.disabled}:null;const c={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:s};(0,o.unstable_batchedUpdates)(()=>{eC(s);i==null?void 0:i(c);D({type:"onDragOver",event:c})})},[eZ]);(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{eo.current={activatorEvent:j,active:P,activeNode:$,collisionRect:ew,collisions:ex,droppableRects:V,draggableNodes:N,draggingNode:es,draggingNodeRect:ec,droppableContainers:L,over:ek,scrollableAncestors:ef,scrollAdjustedTranslate:ey};R.current={initial:ec,translated:ew}},[P,$,ex,ew,N,es,ec,V,L,ek,ef,ey]);eT({...et,delta:O,draggingRect:ew,pointerCoordinates:eg,scrollableAncestors:ef,scrollableAncestorRects:ep});const eI=(0,n.useMemo)(()=>{const e={active:P,activeNode:$,activeNodeRect:en,activatorEvent:j,collisions:ex,containerNodeRect:ea,dragOverlay:el,draggableNodes:N,droppableContainers:L,droppableRects:V,over:ek,measureDroppableContainers:G,scrollableAncestors:ef,scrollableAncestorRects:ep,measuringConfiguration:H,measuringScheduled:K,windowRect:ev};return e},[P,$,en,j,ex,ea,el,N,L,V,ek,G,ef,ep,H,K,ev]);const eA=(0,n.useMemo)(()=>{const e={activatorEvent:j,activators:eB,active:P,activeNodeRect:en,ariaDescribedById:{draggable:Q},dispatch:k,draggableNodes:N,over:ek,measureDroppableContainers:G};return e},[j,eB,P,en,k,Q,N,ek,G]);return a().createElement(c.Provider,{value:E},a().createElement(te.Provider,{value:eA},a().createElement(tt.Provider,{value:eI},a().createElement(ts.Provider,{value:eE},g)),a().createElement(ta,{disabled:(v==null?void 0:v.restoreFocus)===false})),a().createElement(p,{...v,hiddenTextDescribedById:Q}));function eL(){const e=(U==null?void 0:U.autoScrollEnabled)===false;const t=typeof f==="object"?f.enabled===false:f===false;const r=T&&!e&&!t;if(typeof f==="object"){return{...f,enabled:r}}return{enabled:r}}});const tu=/*#__PURE__*/(0,n.createContext)(null);const tv="button";const tf="Draggable";function tp(e){let{id:t,data:r,disabled:a=false,attributes:o}=e;const i=(0,l/* .useUniqueId */.Ld)(tf);const{activators:s,activatorEvent:c,active:d,activeNodeRect:u,ariaDescribedById:v,draggableNodes:f,over:p}=(0,n.useContext)(te);const{role:h=tv,roleDescription:g="draggable",tabIndex:m=0}=o!=null?o:{};const b=(d==null?void 0:d.id)===t;const _=(0,n.useContext)(b?ts:tu);const[y,w]=(0,l/* .useNodeRef */.wm)();const[x,Z]=(0,l/* .useNodeRef */.wm)();const k=eK(s,t);const C=(0,l/* .useLatestValue */.Ey)(r);(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{f.set(t,{id:t,key:i,node:y,activatorNode:x,data:C});return()=>{const e=f.get(t);if(e&&e.key===i){f.delete(t)}}},[f,t]);const D=(0,n.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":a,"aria-pressed":b&&h===tv?true:undefined,"aria-roledescription":g,"aria-describedby":v.draggable}),[a,h,m,b,g,v.draggable]);return{active:d,activatorEvent:c,activeNodeRect:u,attributes:D,isDragging:b,listeners:a?undefined:k,node:y,over:p,setNodeRef:w,setActivatorNodeRef:Z,transform:_}}function th(){return(0,n.useContext)(tt)}const tg="Droppable";const tm={timeout:25};function tb(e){let{data:t,disabled:r=false,id:a,resizeObserverConfig:o}=e;const i=(0,l/* .useUniqueId */.Ld)(tg);const{active:s,dispatch:c,over:d,measureDroppableContainers:u}=(0,n.useContext)(te);const v=(0,n.useRef)({disabled:r});const f=(0,n.useRef)(false);const p=(0,n.useRef)(null);const g=(0,n.useRef)(null);const{disabled:m,updateMeasurementsFor:b,timeout:_}={...tm,...o};const y=(0,l/* .useLatestValue */.Ey)(b!=null?b:a);const w=(0,n.useCallback)(()=>{if(!f.current){// ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
// assuming the element is rendered and displayed.
f.current=true;return}if(g.current!=null){clearTimeout(g.current)}g.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]);g.current=null},_)},[_]);const x=eF({callback:w,disabled:m||!s});const Z=(0,n.useCallback)((e,t)=>{if(!x){return}if(t){x.unobserve(t);f.current=false}if(e){x.observe(e)}},[x]);const[k,C]=(0,l/* .useNodeRef */.wm)(Z);const D=(0,l/* .useLatestValue */.Ey)(t);(0,n.useEffect)(()=>{if(!x||!k.current){return}x.disconnect();f.current=false;x.observe(k.current)},[k,x]);(0,n.useEffect)(()=>{c({type:h.RegisterDroppable,element:{id:a,key:i,disabled:r,node:k,rect:p,data:D}});return()=>c({type:h.UnregisterDroppable,key:i,id:a})},[a]);(0,n.useEffect)(()=>{if(r!==v.current.disabled){c({type:h.SetDroppableDisabled,id:a,key:i,disabled:r});v.current.disabled=r}},[a,i,r,c]);return{active:s,rect:p,isOver:(d==null?void 0:d.id)===a,node:k,over:d,setNodeRef:C}}function t_(e){let{animation:t,children:r}=e;const[o,i]=(0,n.useState)(null);const[s,c]=(0,n.useState)(null);const d=(0,l/* .usePrevious */.D9)(r);if(!r&&!o&&d){i(d)}(0,l/* .useIsomorphicLayoutEffect */.LI)(()=>{if(!s){return}const e=o==null?void 0:o.key;const r=o==null?void 0:o.props.id;if(e==null||r==null){i(null);return}Promise.resolve(t(r,s)).then(()=>{i(null)})},[t,o,s]);return a().createElement(a().Fragment,null,r,o?(0,n.cloneElement)(o,{ref:c}):null)}const ty={x:0,y:0,scaleX:1,scaleY:1};function tw(e){let{children:t}=e;return a().createElement(te.Provider,{value:e7},a().createElement(ts.Provider,{value:ty},t))}const tx={position:"fixed",touchAction:"none"};const tZ=e=>{const t=(0,l/* .isKeyboardEvent */.vd)(e);return t?"transform 250ms ease":undefined};const tk=/*#__PURE__*/(0,n.forwardRef)((e,t)=>{let{as:r,activatorEvent:n,adjustScale:o,children:i,className:s,rect:c,style:d,transform:u,transition:v=tZ}=e;if(!c){return null}const f=o?u:{...u,scaleX:1,scaleY:1};const p={...tx,width:c.width,height:c.height,top:c.top,left:c.left,transform:l/* .CSS.Transform.toString */.ux.Transform.toString(f),transformOrigin:o&&n?w(n,c):undefined,transition:typeof v==="function"?v(n):v,...d};return a().createElement(r,{className:s,style:p,ref:t},i)});const tC=e=>t=>{let{active:r,dragOverlay:n}=t;const a={};const{styles:o,className:i}=e;if(o!=null&&o.active){for(const[e,t]of Object.entries(o.active)){if(t===undefined){continue}a[e]=r.node.style.getPropertyValue(e);r.node.style.setProperty(e,t)}}if(o!=null&&o.dragOverlay){for(const[e,t]of Object.entries(o.dragOverlay)){if(t===undefined){continue}n.node.style.setProperty(e,t)}}if(i!=null&&i.active){r.node.classList.add(i.active)}if(i!=null&&i.dragOverlay){n.node.classList.add(i.dragOverlay)}return function e(){for(const[e,t]of Object.entries(a)){r.node.style.setProperty(e,t)}if(i!=null&&i.active){r.node.classList.remove(i.active)}}};const tD=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:l/* .CSS.Transform.toString */.ux.Transform.toString(t)},{transform:l/* .CSS.Transform.toString */.ux.Transform.toString(r)}]};const tE={duration:250,easing:"ease",keyframes:tD,sideEffects:/*#__PURE__*/tC({styles:{active:{opacity:"0"}}})};function tS(e){let{config:t,draggableNodes:r,droppableContainers:n,measuringConfiguration:a}=e;return(0,l/* .useEvent */.zX)((e,o)=>{if(t===null){return}const i=r.get(e);if(!i){return}const s=i.node.current;if(!s){return}const c=e2(o);if(!c){return}const{transform:d}=(0,l/* .getWindow */.Jj)(o).getComputedStyle(o);const u=L(d);if(!u){return}const v=typeof t==="function"?t:tW(t);ei(s,a.draggable.measure);return v({active:{id:e,data:i.data,node:s,rect:a.draggable.measure(s)},draggableNodes:r,dragOverlay:{node:o,rect:a.dragOverlay.measure(c)},droppableContainers:n,measuringConfiguration:a,transform:u})})}function tW(e){const{duration:t,easing:r,sideEffects:n,keyframes:a}={...tE,...e};return e=>{let{active:o,dragOverlay:i,transform:l,...s}=e;if(!t){// Do not animate if animation duration is zero.
return}const c={x:i.rect.left-o.rect.left,y:i.rect.top-o.rect.top};const d={scaleX:l.scaleX!==1?o.rect.width*l.scaleX/i.rect.width:1,scaleY:l.scaleY!==1?o.rect.height*l.scaleY/i.rect.height:1};const u={x:l.x-c.x,y:l.y-c.y,...d};const v=a({...s,active:o,dragOverlay:i,transform:{initial:l,final:u}});const[f]=v;const p=v[v.length-1];if(JSON.stringify(f)===JSON.stringify(p)){// The start and end keyframes are the same, infer that there is no animation needed.
return}const h=n==null?void 0:n({active:o,dragOverlay:i,...s});const g=i.node.animate(v,{duration:t,easing:r,fill:"forwards"});return new Promise(e=>{g.onfinish=()=>{h==null?void 0:h();e()}})}}let tM=0;function tT(e){return(0,n.useMemo)(()=>{if(e==null){return}tM++;return tM},[e])}const tB=/*#__PURE__*/a().memo(e=>{let{adjustScale:t=false,children:r,dropAnimation:o,style:i,transition:l,modifiers:s,wrapperElement:c="div",className:d,zIndex:u=999}=e;const{activatorEvent:v,active:f,activeNodeRect:p,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:b,over:_,measuringConfiguration:y,scrollableAncestors:w,scrollableAncestorRects:x,windowRect:Z}=th();const k=(0,n.useContext)(ts);const C=tT(f==null?void 0:f.id);const D=to(s,{activatorEvent:v,active:f,activeNodeRect:p,containerNodeRect:h,draggingNodeRect:b.rect,over:_,overlayNodeRect:b.rect,scrollableAncestors:w,scrollableAncestorRects:x,transform:k,windowRect:Z});const E=eP(p);const S=tS({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:y});// We need to wait for the active node to be measured before connecting the drag overlay ref
// otherwise collisions can be computed against a mispositioned drag overlay
const W=E?b.setRef:undefined;return a().createElement(tw,null,a().createElement(t_,{animation:S},f&&C?a().createElement(tk,{key:C,id:f.id,ref:W,as:c,activatorEvent:v,adjustScale:t,className:d,transition:l,rect:E,style:{zIndex:u,...i},transform:D},r):null))});//# sourceMappingURL=core.esm.js.map
},32339:function(e,t,r){r.d(t,{hg:()=>d});/* ESM import */var n=r(24285);function a(e){return t=>{let{transform:r}=t;return{...r,x:Math.ceil(r.x/e)*e,y:Math.ceil(r.y/e)*e}}}const o=e=>{let{transform:t}=e;return{...t,y:0}};function i(e,t,r){const n={...e};if(t.top+e.y<=r.top){n.y=r.top-t.top}else if(t.bottom+e.y>=r.top+r.height){n.y=r.top+r.height-t.bottom}if(t.left+e.x<=r.left){n.x=r.left-t.left}else if(t.right+e.x>=r.left+r.width){n.x=r.left+r.width-t.right}return n}const l=e=>{let{containerNodeRect:t,draggingNodeRect:r,transform:n}=e;if(!r||!t){return n}return i(n,r,t)};const s=e=>{let{draggingNodeRect:t,transform:r,scrollableAncestorRects:n}=e;const a=n[0];if(!t||!a){return r}return i(r,t,a)};const c=e=>{let{transform:t}=e;return{...t,x:0}};const d=e=>{let{transform:t,draggingNodeRect:r,windowRect:n}=e;if(!r||!n){return t}return i(t,r,n)};const u=e=>{let{activatorEvent:t,draggingNodeRect:r,transform:n}=e;if(r&&t){const e=getEventCoordinates(t);if(!e){return n}const a=e.x-r.left;const o=e.y-r.top;return{...n,x:n.x+a-r.width/2,y:n.y+o-r.height/2}}return n};//# sourceMappingURL=modifiers.esm.js.map
},45587:function(e,t,r){r.d(t,{Fo:()=>Z,cP:()=>C,is:()=>O,nB:()=>T,qw:()=>_});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var o=r(94697);/* ESM import */var i=r(24285);/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */function l(e,t,r){const n=e.slice();n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]);return n}/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */function s(e,t,r){const n=e.slice();n[t]=e[r];n[r]=e[t];return n}function c(e,t){return e.reduce((e,r,n)=>{const a=t.get(r);if(a){e[n]=a}return e},Array(e.length))}function d(e){return e!==null&&e>=0}function u(e,t){if(e===t){return true}if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}function v(e){if(typeof e==="boolean"){return{draggable:e,droppable:e}}return e}// To-do: We should be calculating scale transformation
const f=/* unused pure expression or super */null&&{scaleX:1,scaleY:1};const p=e=>{var t;let{rects:r,activeNodeRect:n,activeIndex:a,overIndex:o,index:i}=e;const l=(t=r[a])!=null?t:n;if(!l){return null}const s=h(r,i,a);if(i===a){const e=r[o];if(!e){return null}return{x:a<o?e.left+e.width-(l.left+l.width):e.left-l.left,y:0,...f}}if(i>a&&i<=o){return{x:-l.width-s,y:0,...f}}if(i<a&&i>=o){return{x:l.width+s,y:0,...f}}return{x:0,y:0,...f}};function h(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n||!a&&!o){return 0}if(r<t){return a?n.left-(a.left+a.width):o.left-(n.left+n.width)}return o?o.left-(n.left+n.width):n.left-(a.left+a.width)}const g=e=>{let{rects:t,activeIndex:r,overIndex:n,index:a}=e;const o=l(t,n,r);const i=t[a];const s=o[a];if(!s||!i){return null}return{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}};const m=e=>{let{activeIndex:t,index:r,rects:n,overIndex:a}=e;let o;let i;if(r===t){o=n[r];i=n[a]}if(r===a){o=n[r];i=n[t]}if(!i||!o){return null}return{x:i.left-o.left,y:i.top-o.top,scaleX:i.width/o.width,scaleY:i.height/o.height}};// To-do: We should be calculating scale transformation
const b={scaleX:1,scaleY:1};const _=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:a,rects:o,overIndex:i}=e;const l=(t=o[r])!=null?t:n;if(!l){return null}if(a===r){const e=o[i];if(!e){return null}return{x:0,y:r<i?e.top+e.height-(l.top+l.height):e.top-l.top,...b}}const s=y(o,a,r);if(a>r&&a<=i){return{x:0,y:-l.height-s,...b}}if(a<r&&a>=i){return{x:0,y:l.height+s,...b}}return{x:0,y:0,...b}};function y(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n){return 0}if(r<t){return a?n.top-(a.top+a.height):o?o.top-(n.top+n.height):0}return o?o.top-(n.top+n.height):a?n.top-(a.top+a.height):0}const w="Sortable";const x=/*#__PURE__*/a().createContext({activeIndex:-1,containerId:w,disableTransforms:false,items:[],overIndex:-1,useDragOverlay:false,sortedRects:[],strategy:g,disabled:{draggable:false,droppable:false}});function Z(e){let{children:t,id:r,items:l,strategy:s=g,disabled:d=false}=e;const{active:f,dragOverlay:p,droppableRects:h,over:m,measureDroppableContainers:b}=(0,o/* .useDndContext */.Cj)();const _=(0,i/* .useUniqueId */.Ld)(w,r);const y=Boolean(p.rect!==null);const Z=(0,n.useMemo)(()=>l.map(e=>typeof e==="object"&&"id"in e?e.id:e),[l]);const k=f!=null;const C=f?Z.indexOf(f.id):-1;const D=m?Z.indexOf(m.id):-1;const E=(0,n.useRef)(Z);const S=!u(Z,E.current);const W=D!==-1&&C===-1||S;const M=v(d);(0,i/* .useIsomorphicLayoutEffect */.LI)(()=>{if(S&&k){b(Z)}},[S,Z,k,b]);(0,n.useEffect)(()=>{E.current=Z},[Z]);const T=(0,n.useMemo)(()=>({activeIndex:C,containerId:_,disabled:M,disableTransforms:W,items:Z,overIndex:D,useDragOverlay:y,sortedRects:c(Z,h),strategy:s}),[C,_,M.draggable,M.droppable,W,Z,D,h,y,s]);return a().createElement(x.Provider,{value:T},t)}const k=e=>{let{id:t,items:r,activeIndex:n,overIndex:a}=e;return l(r,n,a).indexOf(t)};const C=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:a,items:o,newIndex:i,previousItems:l,previousContainerId:s,transition:c}=e;if(!c||!n){return false}if(l!==o&&a===i){return false}if(r){return true}return i!==a&&t===s};const D={duration:200,easing:"ease"};const E="transform";const S=/*#__PURE__*/i/* .CSS.Transition.toString */.ux.Transition.toString({property:E,duration:0,easing:"linear"});const W={roleDescription:"sortable"};/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */function M(e){let{disabled:t,index:r,node:a,rect:l}=e;const[s,c]=(0,n.useState)(null);const d=(0,n.useRef)(r);(0,i/* .useIsomorphicLayoutEffect */.LI)(()=>{if(!t&&r!==d.current&&a.current){const e=l.current;if(e){const t=(0,o/* .getClientRect */.VK)(a.current,{ignoreTransform:true});const r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};if(r.x||r.y){c(r)}}}if(r!==d.current){d.current=r}},[t,r,a,l]);(0,n.useEffect)(()=>{if(s){c(null)}},[s]);return s}function T(e){let{animateLayoutChanges:t=C,attributes:r,disabled:a,data:l,getNewIndex:s=k,id:c,strategy:u,resizeObserverConfig:v,transition:f=D}=e;const{items:p,containerId:h,activeIndex:g,disabled:m,disableTransforms:b,sortedRects:_,overIndex:y,useDragOverlay:w,strategy:Z}=(0,n.useContext)(x);const T=B(a,m);const I=p.indexOf(c);const N=(0,n.useMemo)(()=>({sortable:{containerId:h,index:I,items:p},...l}),[h,l,I,p]);const O=(0,n.useMemo)(()=>p.slice(p.indexOf(c)),[p,c]);const{rect:A,node:L,isOver:J,setNodeRef:R}=(0,o/* .useDroppable */.Zj)({id:c,data:N,disabled:T.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...v}});const{active:P,activatorEvent:z,activeNodeRect:U,attributes:F,setNodeRef:j,listeners:X,isDragging:Y,over:Q,setActivatorNodeRef:q,transform:H}=(0,o/* .useDraggable */.O1)({id:c,data:N,attributes:{...W,...r},disabled:T.draggable});const V=(0,i/* .useCombinedRefs */.HB)(R,j);const G=Boolean(P);const K=G&&!b&&d(g)&&d(y);const $=!w&&Y;const ee=$&&K?H:null;const et=u!=null?u:Z;const er=K?ee!=null?ee:et({rects:_,activeNodeRect:U,activeIndex:g,overIndex:y,index:I}):null;const en=d(g)&&d(y)?s({id:c,items:p,activeIndex:g,overIndex:y}):I;const ea=P==null?void 0:P.id;const eo=(0,n.useRef)({activeId:ea,items:p,newIndex:en,containerId:h});const ei=p!==eo.current.items;const el=t({active:P,containerId:h,isDragging:Y,isSorting:G,id:c,index:I,items:p,newIndex:eo.current.newIndex,previousItems:eo.current.items,previousContainerId:eo.current.containerId,transition:f,wasDragging:eo.current.activeId!=null});const es=M({disabled:!el,index:I,node:L,rect:A});(0,n.useEffect)(()=>{if(G&&eo.current.newIndex!==en){eo.current.newIndex=en}if(h!==eo.current.containerId){eo.current.containerId=h}if(p!==eo.current.items){eo.current.items=p}},[G,en,h,p]);(0,n.useEffect)(()=>{if(ea===eo.current.activeId){return}if(ea!=null&&eo.current.activeId==null){eo.current.activeId=ea;return}const e=setTimeout(()=>{eo.current.activeId=ea},50);return()=>clearTimeout(e)},[ea]);return{active:P,activeIndex:g,attributes:F,data:N,rect:A,index:I,newIndex:en,items:p,isOver:J,isSorting:G,isDragging:Y,listeners:X,node:L,overIndex:y,over:Q,setNodeRef:V,setActivatorNodeRef:q,setDroppableNodeRef:R,setDraggableNodeRef:j,transform:es!=null?es:er,transition:ec()};function ec(){if(es||// Or to prevent items jumping to back to their "new" position when items change
ei&&eo.current.newIndex===I){return S}if($&&!(0,i/* .isKeyboardEvent */.vd)(z)||!f){return undefined}if(G||el){return i/* .CSS.Transition.toString */.ux.Transition.toString({...f,property:E})}return undefined}}function B(e,t){var r,n;if(typeof e==="boolean"){return{draggable:e,// Backwards compatibility
droppable:false}}return{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(n=e==null?void 0:e.droppable)!=null?n:t.droppable}}function I(e){if(!e){return false}const t=e.data.current;if(t&&"sortable"in t&&typeof t.sortable==="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable){return true}return false}const N=[o/* .KeyboardCode.Down */.g4.Down,o/* .KeyboardCode.Right */.g4.Right,o/* .KeyboardCode.Up */.g4.Up,o/* .KeyboardCode.Left */.g4.Left];const O=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:a,droppableContainers:l,over:s,scrollableAncestors:c}}=t;if(N.includes(e.code)){e.preventDefault();if(!r||!n){return}const t=[];l.getEnabled().forEach(r=>{if(!r||r!=null&&r.disabled){return}const i=a.get(r.id);if(!i){return}switch(e.code){case o/* .KeyboardCode.Down */.g4.Down:if(n.top<i.top){t.push(r)}break;case o/* .KeyboardCode.Up */.g4.Up:if(n.top>i.top){t.push(r)}break;case o/* .KeyboardCode.Left */.g4.Left:if(n.left>i.left){t.push(r)}break;case o/* .KeyboardCode.Right */.g4.Right:if(n.left<i.left){t.push(r)}break}});const d=(0,o/* .closestCorners */.ey)({active:r,collisionRect:n,droppableRects:a,droppableContainers:t,pointerCoordinates:null});let u=(0,o/* .getFirstCollision */._8)(d,"id");if(u===(s==null?void 0:s.id)&&d.length>1){u=d[1].id}if(u!=null){const e=l.get(r.id);const t=l.get(u);const s=t?a.get(t.id):null;const d=t==null?void 0:t.node.current;if(d&&s&&e&&t){const r=(0,o/* .getScrollableAncestors */.hI)(d);const a=r.some((e,t)=>c[t]!==e);const l=A(e,t);const u=L(e,t);const v=a||!l?{x:0,y:0}:{x:u?n.width-s.width:0,y:u?n.height-s.height:0};const f={x:s.left,y:s.top};const p=v.x&&v.y?f:(0,i/* .subtract */.$X)(f,v);return p}}}return undefined};function A(e,t){if(!I(e)||!I(t)){return false}return e.data.current.sortable.containerId===t.data.current.sortable.containerId}function L(e,t){if(!I(e)||!I(t)){return false}if(!A(e,t)){return false}return e.data.current.sortable.index<t.data.current.sortable.index}//# sourceMappingURL=sortable.esm.js.map
},24285:function(e,t,r){r.d(t,{$X:()=>C,D9:()=>y,DC:()=>W,Ey:()=>m,FJ:()=>l,Gj:()=>b,HB:()=>o,IH:()=>k,Jj:()=>c,LI:()=>p,Ld:()=>x,Nq:()=>i,Re:()=>u,UG:()=>s,Yz:()=>g,qk:()=>d,r3:()=>f,so:()=>B,ux:()=>M,vZ:()=>v,vd:()=>E,wm:()=>_,zX:()=>h});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const i=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";function l(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||// In Electron context the Window object serializes to [object global]
t==="[object global]"}function s(e){return"nodeType"in e}function c(e){var t,r;if(!e){return window}if(l(e)){return e}if(!s(e)){return window}return(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window}function d(e){const{Document:t}=c(e);return e instanceof t}function u(e){if(l(e)){return false}return e instanceof c(e).HTMLElement}function v(e){return e instanceof c(e).SVGElement}function f(e){if(!e){return document}if(l(e)){return e.document}if(!s(e)){return document}if(d(e)){return e}if(u(e)||v(e)){return e.ownerDocument}return document}/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */const p=i?n.useLayoutEffect:n.useEffect;function h(e){const t=(0,n.useRef)(e);p(()=>{t.current=e});return(0,n.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}return t.current==null?void 0:t.current(...r)},[])}function g(){const e=(0,n.useRef)(null);const t=(0,n.useCallback)((t,r)=>{e.current=setInterval(t,r)},[]);const r=(0,n.useCallback)(()=>{if(e.current!==null){clearInterval(e.current);e.current=null}},[]);return[t,r]}function m(e,t){if(t===void 0){t=[e]}const r=(0,n.useRef)(e);p(()=>{if(r.current!==e){r.current=e}},t);return r}function b(e,t){const r=(0,n.useRef)();return(0,n.useMemo)(()=>{const t=e(r.current);r.current=t;return t},[...t])}function _(e){const t=h(e);const r=(0,n.useRef)(null);const a=(0,n.useCallback)(e=>{if(e!==r.current){t==null?void 0:t(e,r.current)}r.current=e},[]);return[r,a]}function y(e){const t=(0,n.useRef)();(0,n.useEffect)(()=>{t.current=e},[e]);return t.current}let w={};function x(e,t){return(0,n.useMemo)(()=>{if(t){return t}const r=w[e]==null?0:w[e]+1;w[e]=r;return e+"-"+r},[e,t])}function Z(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>{const n=Object.entries(r);for(const[r,a]of n){const n=t[r];if(n!=null){t[r]=n+e*a}}return t},{...t})}}const k=/*#__PURE__*/Z(1);const C=/*#__PURE__*/Z(-1);function D(e){return"clientX"in e&&"clientY"in e}function E(e){if(!e){return false}const{KeyboardEvent:t}=c(e.target);return t&&e instanceof t}function S(e){if(!e){return false}const{TouchEvent:t}=c(e.target);return t&&e instanceof t}/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */function W(e){if(S(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}if(D(e)){return{x:e.clientX,y:e.clientY}}return null}const M=/*#__PURE__*/Object.freeze({Translate:{toString(e){if(!e){return}const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e){return}const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(!e){return}return[M.Translate.toString(e),M.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}});const T="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function B(e){if(e.matches(T)){return e}return e.querySelector(T)}//# sourceMappingURL=utilities.esm.js.map
},58574:function(e,t,r){r.d(t,{Z:()=>s});/* ESM import */var n=r(8081);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var o=r(23645);/* ESM import */var i=/*#__PURE__*/r.n(o);// Imports
var l=i()(a());// Module
l.push([e.id,`/* Variables declaration */
/* prettier-ignore */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */
  
  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */
  
  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */
  
  --rdp-dropdown-gap: 0.5rem;/* The gap between the dropdowns used in the month captons. */
  
  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */
  
  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */
  
  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit;/* The color of the range text. */
  
  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(var(--rdp-gradient-direction), transparent 50%, var(--rdp-range_middle-background-color) 50%); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */
  
  --rdp-range_end-background: linear-gradient(var(--rdp-gradient-direction), var(--rdp-range_middle-background-color) 50%, transparent 50%); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white;/* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */
  
  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */
  
  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border-color: transparent;
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* ESM default export */const s=l},23645:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,o){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var l=0;l<this.length;l++){var s=this[l][0];if(s!=null){i[s]=true}}}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);if(n&&i[d[0]]){continue}if(typeof o!=="undefined"){if(typeof d[5]==="undefined"){d[5]=o}else{d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}");d[5]=o}}if(r){if(!d[2]){d[2]=r}else{d[1]="@media ".concat(d[2]," {").concat(d[1],"}");d[2]=r}}if(a){if(!d[4]){d[4]="".concat(a)}else{d[1]="@supports (".concat(d[4],") {").concat(d[1],"}");d[4]=a}}t.push(d)}};return t}},8081:function(e){e.exports=function(e){return e[1]}},47041:function(e,t,r){r.d(t,{Z:()=>l});/* ESM import */var n=r(58545);/* ESM import */var a=r(19013);/* ESM import */var o=r(18717);/* ESM import */var i=r(13882);/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function l(e,t){var r;(0,i/* ["default"] */.Z)(1,arguments);var l=(0,o/* ["default"] */.Z)((0,a["default"])(e.start));var s=(0,a["default"])(e.end);var c=l.getTime();var d=s.getTime();if(c>=d){throw new RangeError("Invalid interval")}var u=[];var v=l;var f=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(f<1||isNaN(f))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(v.getTime()<=d){u.push((0,a["default"])(v));v=(0,n["default"])(v,f)}return u}},37042:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* ESM import */var n=r(83946);/* ESM import */var a=r(19013);/* ESM import */var o=r(13882);/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function i(e,t){(0,o/* ["default"] */.Z)(2,arguments);var r=(0,a["default"])(e);var i=(0,n/* ["default"] */.Z)(t);r.setHours(i);return r}},4543:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* ESM import */var n=r(83946);/* ESM import */var a=r(19013);/* ESM import */var o=r(13882);/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function i(e,t){(0,o/* ["default"] */.Z)(2,arguments);var r=(0,a["default"])(e);var i=(0,n/* ["default"] */.Z)(t);r.setMinutes(i);return r}},18717:function(e,t,r){r.d(t,{Z:()=>o});/* ESM import */var n=r(19013);/* ESM import */var a=r(13882);/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function o(e){(0,a/* ["default"] */.Z)(1,arguments);var t=(0,n["default"])(e);t.setSeconds(0,0);return t}},70165:function(e,t,r){/* ESM import */var n=r(93379);/* ESM import */var a=/*#__PURE__*/r.n(n);/* ESM import */var o=r(7795);/* ESM import */var i=/*#__PURE__*/r.n(o);/* ESM import */var l=r(90569);/* ESM import */var s=/*#__PURE__*/r.n(l);/* ESM import */var c=r(3565);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(19216);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(44589);/* ESM import */var p=/*#__PURE__*/r.n(f);/* ESM import */var h=r(58574);var g={};g.styleTagTransform=p();g.setAttributes=d();g.insert=s().bind(null,"head");g.domAPI=i();g.insertStyleElement=v();var m=a()(h/* ["default"] */.Z,g);/* unused ESM default export */var b=h/* ["default"] */.Z&&h/* ["default"].locals */.Z.locals?h/* ["default"].locals */.Z.locals:undefined},93379:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var o={};var i=[];for(var l=0;l<e.length;l++){var s=e[l];var c=n.base?s[0]+n.base:s[0];var d=o[c]||0;var u="".concat(c," ").concat(d);o[c]=d+1;var v=r(u);var f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(v!==-1){t[v].references++;t[v].updater(f)}else{var p=a(f,n);n.byIndex=l;t.splice(l,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var o=n(e,a);return function e(e){e=e||[];for(var i=0;i<o.length;i++){var l=o[i];var s=r(l);t[s].references--}var c=n(e,a);for(var d=0;d<o.length;d++){var u=o[d];var v=r(u);if(t[v].references===0){t[v].updater();t.splice(v,1)}}o=c}}},90569:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},19216:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},3565:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},7795:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var o=r.sourceMap;if(o&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},44589:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},56096:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},67149:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},41834:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},42336:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},79608:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},4359:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},88013:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},53192:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},48366:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},39071:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},43666:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},46572:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},86056:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},95781:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},19646:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */M});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(99282);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var o=r(35944);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var i=r(75537);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var l=r(27412);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var s=r(87056);// EXTERNAL MODULE: external "React"
var c=r(87363);// CONCATENATED MODULE: ./assets/react/v3/shared/components/ComponentErrorBoundary.tsx
class d extends c.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,o/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,l._)(this,"state",{hasError:false,error:null})}}(0,l._)(d,"defaultProps",{showError:true,componentName:"Component"});/* ESM default export */const u=d;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/ContentRenderer.tsx
var v=e=>{var{component:t}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(u,{componentName:"content",children:t})};/* ESM default export */const f=v;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var p=r(60274);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var h=r(42456);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var g=r(86774);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var m=r(44226);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var b=r(78150);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var _=r(90097);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var y=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var w=r(92386);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var x=r(3473);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var Z=r(47778);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var k=r(69789);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var C=r(3960);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var D=r(52293);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/FieldRenderer.tsx
var E=e=>{var{name:t,label:r,buttonText:i,helpText:l,infoText:c,placeholder:d,type:v,options:f,defaultValue:E,rules:S,form:W}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var M=e=>{var D=(()=>{switch(v){case"text":return/*#__PURE__*/(0,o/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"number":return/*#__PURE__*/(0,o/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:d,helpText:l}));case"password":return/*#__PURE__*/(0,o/* .jsx */.tZ)(b/* ["default"] */.Z,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:d,helpText:l}));case"textarea":return/*#__PURE__*/(0,o/* .jsx */.tZ)(x/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"select":return/*#__PURE__*/(0,o/* .jsx */.tZ)(y/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,options:f||[],placeholder:d,helpText:l}));case"radio":return/*#__PURE__*/(0,o/* .jsx */.tZ)(_/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,options:f||[]}));case"checkbox":return/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,o/* .jsx */.tZ)(w/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,helpText:l}));case"date":return/*#__PURE__*/(0,o/* .jsx */.tZ)(h/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"time":return/*#__PURE__*/(0,o/* .jsx */.tZ)(Z/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"image":return/*#__PURE__*/(0,o/* .jsx */.tZ)(m/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:c}));case"video":return/*#__PURE__*/(0,o/* .jsx */.tZ)(k/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:c}));case"uploader":return/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l}));case"WPEditor":return/*#__PURE__*/(0,o/* .jsx */.tZ)(C/* ["default"] */.Z,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));default:return/*#__PURE__*/(0,o/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"danger",children:["Unsupported field type: ",v]})}})();return/*#__PURE__*/(0,o/* .jsx */.tZ)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:D})};return/*#__PURE__*/(0,o/* .jsx */.tZ)(D/* .Controller */.Qr,{name:t,control:W.control,defaultValue:E!==null&&E!==void 0?E:"",rules:S,render:e=>M(e)})};/* ESM default export */const S=E;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var W=e=>{var{section:t,namePrefix:r,form:l}=e;var{fields:s,contents:c}=(0,i/* .useCourseBuilderSlot */.l)();var d=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=s;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=c;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,o/* .jsxs */.BX)(o/* .Fragment */.HY,{children:[d().map(e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(S,(0,a._)((0,n._)({form:l},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(f,{component:r},t)})]})};/* ESM default export */const M=W},88311:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(35944);/* ESM import */var i=r(20203);/* ESM import */var l=r(89459);/* ESM import */var s=r(19398);/* ESM import */var c=r(26815);/* ESM import */var d=r(74053);/* ESM import */var u=r(60860);/* ESM import */var v=r(17106);/* ESM import */var f=r(93283);/* ESM import */var p=r(70917);/* ESM import */var h=r(38003);/* ESM import */var g=/*#__PURE__*/r.n(h);/* ESM import */var m=r(52293);/* ESM import */var b=r(89250);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:g}=(0,l/* .useCourseNavigator */.O)();var _=(0,b/* .useNavigate */.s0)();var y=(0,f/* .useCurrentPath */.J)(i/* ["default"] */.Z);var x=(0,m/* .useFormContext */.Gc)();var Z=r.findIndex(e=>e.path===y);var k=Math.max(-1,Z-1);var C=Math.min(r.length,Z+1);var D=r[k];var E=r[C];var S=x.watch("post_title");var W=()=>{g(e=>{return e.map((e,t)=>{if(t===Z){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};var M=()=>{g(e=>{return e.map((e,t)=>{if(t===Z){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===C){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(E.path)};return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z>0,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"tertiary",iconPosition:"right",size:"small",onClick:W,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:k<0,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:!d/* .isRTL */.dZ?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z<r.length-1&&S,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"tertiary",icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:!d/* .isRTL */.dZ?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:!S||C>=r.length,children:(0,h.__)("Next","tutor")})})]})};/* ESM default export */const y=_;var w={wrapper:/*#__PURE__*/(0,p/* .css */.iv)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",u/* .spacing["16"] */.W0["16"],";")}},26328:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */rU});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(76150);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(99282);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(58865);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var s=r(70917);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var c=r(99469);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var d=r(33233);// EXTERNAL MODULE: external "wp.i18n"
var u=r(38003);// EXTERNAL MODULE: external "React"
var v=r(87363);var f=/*#__PURE__*/r.n(v);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var p=r(52293);// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var h=r(32449);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var g=r(26815);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var m=r(83946);// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js
var b=r(51820);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var _=r(13882);// CONCATENATED MODULE: ./node_modules/date-fns/esm/addHours/index.js
var y=36e5;/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */function w(e,t){(0,_/* ["default"] */.Z)(2,arguments);var r=(0,m/* ["default"] */.Z)(t);return(0,b/* ["default"] */.Z)(e,r*y)}// EXTERNAL MODULE: ./node_modules/date-fns/esm/isValid/index.js
var x=r(12274);// EXTERNAL MODULE: ./node_modules/date-fns/esm/isBefore/index.js
var Z=r(313);// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var k=r(23855);// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var C=r(19013);// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function D(e){(0,_/* ["default"] */.Z)(1,arguments);var t=(0,C["default"])(e);t.setHours(0,0,0,0);return t}// EXTERNAL MODULE: ./node_modules/date-fns/esm/startOfMinute/index.js
var E=r(18717);// CONCATENATED MODULE: ./node_modules/date-fns/esm/isSameMinute/index.js
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */function S(e,t){(0,_/* ["default"] */.Z)(2,arguments);var r=(0,E/* ["default"] */.Z)(e);var n=(0,E/* ["default"] */.Z)(t);return r.getTime()===n.getTime()}// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var W=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var M=r(30647);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ProBadge.tsx
var T=r(86766);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var B=r(60274);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var I=r(42456);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var N=r(44226);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var O=r(92386);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var A=r(47778);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/utils/utils.ts
var L=r(14784);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var J=r(34039);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var R=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var P=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var z=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var U=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var F=r(52357);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var j=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var X=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var Y=r(25481);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ScheduleOptions.tsx
var Q=!!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var q=(0,L/* .getCourseId */.z)();var H=()=>{var e=(0,p/* .useFormContext */.Gc)();var t=(0,p/* .useWatch */.qo)({name:"post_date"});var r;var n=(r=(0,p/* .useWatch */.qo)({name:"schedule_date"}))!==null&&r!==void 0?r:"";var i;var s=(i=(0,p/* .useWatch */.qo)({name:"schedule_time"}))!==null&&i!==void 0?i:(0,h["default"])(w(new Date,1),R/* .DateFormats.hoursMinutes */.E_.hoursMinutes);var c;var f=(c=(0,p/* .useWatch */.qo)({name:"isScheduleEnabled"}))!==null&&c!==void 0?c:false;var m;var b=(m=(0,p/* .useWatch */.qo)({name:"showScheduleForm"}))!==null&&m!==void 0?m:false;var _;var y=(_=(0,p/* .useWatch */.qo)({name:"enable_coming_soon"}))!==null&&_!==void 0?_:false;var C;var E=(C=(0,p/* .useWatch */.qo)({name:"course_enrollment_period"}))!==null&&C!==void 0?C:false;var L;var P=(L=(0,p/* .useWatch */.qo)({name:"enrollment_starts_date"}))!==null&&L!==void 0?L:"";var z;var F=(z=(0,p/* .useWatch */.qo)({name:"enrollment_starts_time"}))!==null&&z!==void 0?z:"";var H=(0,p/* .useWatch */.qo)({name:"coming_soon_thumbnail"});var V=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",q]});var[K,$]=(0,v.useState)(n&&s&&(0,x["default"])(new Date("".concat(n," ").concat(s)))?(0,h["default"])(new Date("".concat(n," ").concat(s)),R/* .DateFormats.yearMonthDayHourMinuteSecond24H */.E_.yearMonthDayHourMinuteSecond24H):"");var ee=new Date("".concat(P," ").concat(F));var et=()=>{e.setValue("schedule_date","",{shouldDirty:true});e.setValue("schedule_time","",{shouldDirty:true});e.setValue("showScheduleForm",true,{shouldDirty:true})};var er=()=>{var r=(0,Z["default"])(new Date(t),new Date);e.setValue("schedule_date",r&&K?(0,h["default"])((0,k["default"])(K),R/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",{shouldDirty:true});e.setValue("schedule_time",r&&K?(0,h["default"])((0,k["default"])(K),R/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",{shouldDirty:true})};var en=()=>{if(!n||!s){return}e.setValue("showScheduleForm",false,{shouldDirty:true});$((0,h["default"])(new Date("".concat(n," ").concat(s)),R/* .DateFormats.yearMonthDayHourMinuteSecond24H */.E_.yearMonthDayHourMinuteSecond24H))};(0,v.useEffect)(()=>{if(f&&b){e.setFocus("schedule_date")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[b,f]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.scheduleOptions,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"isScheduleEnabled",control:e.control,rules:{deps:["enrollment_starts_date","enrollment_starts_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.tZ)(O/* ["default"] */.Z,(0,o._)((0,a._)({},t),{loading:!!V,label:(0,u.__)("Schedule","tutor"),onChange:t=>{if(!t&&n&&s){e.setValue("showScheduleForm",false,{shouldDirty:true})}}}))}),f&&b&&/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.formWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"schedule_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required.","tutor"),validate:{invalidDateRule:Y/* .invalidDateRule */.Ek,futureDate:e=>{if((0,Z["default"])(new Date("".concat(e," +T00:00:00")),D(new Date))){return(0,u.__)("Schedule date should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(E&&(0,Z["default"])(ee,new Date("".concat(e," ").concat(s)))){return(0,u.__)("Schedule date should be before enrollment start date.","tutor")}return true}},deps:["enrollment_starts_date","enrollment_starts_time","schedule_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.tZ)(I/* ["default"] */.Z,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:(0,u.__)("Select date","tutor"),disabledBefore:(0,h["default"])(new Date,R/* .DateFormats.yearMonthDay */.E_.yearMonthDay),onChange:()=>{e.setFocus("schedule_time")},dateFormat:R/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"schedule_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required.","tutor"),validate:{invalidTimeRule:Y/* .invalidTimeRule */.xB,futureDate:e=>{if((0,Z["default"])(new Date("".concat(n," ").concat(e)),new Date)){return(0,u.__)("Schedule time should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(E&&(0,Z["default"])(ee,new Date("".concat(n," ").concat(e)))){return(0,u.__)("Schedule time should be before enrollment start date.","tutor")}return true}},deps:["schedule_date","enrollment_starts_date","enrollment_starts_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(A/* ["default"] */.Z,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enable_coming_soon",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[(0,u.__)("Show coming soon in course list & details page","tutor"),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!Q,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{"data-pro-badge":true,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(T/* ["default"] */.Z,{content:(0,u.__)("Pro","tutor"),size:"small"})})})]}),disabled:!Q,labelCss:G.checkboxStartAlign}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:Q,children:/*#__PURE__*/(0,l/* .jsxs */.BX)(U/* ["default"] */.Z,{when:y,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"coming_soon_thumbnail",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(N/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Coming Soon Thumbnail","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:/* translators: %s is the maximum allowed upload file size (e.g., "2MB") */(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),J/* .tutorConfig.max_upload_size */.y.max_upload_size)}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enable_curriculum_preview",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Preview Course Curriculum","tutor")}))})]})}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.scheduleButtonsWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"tertiary",size:"small",onClick:er,disabled:!n&&!s||(0,x["default"])(new Date("".concat(n," ").concat(s)))&&S(new Date("".concat(n," ").concat(s)),new Date(K)),children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"secondary",size:"small",onClick:e.handleSubmit(en),disabled:!n||!s,children:(0,u.__)("Ok","tutor")})]})]}),f&&!b&&/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.scheduleInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.scheduledFor,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:G.scheduleLabel,children:!y?(0,u.__)("Scheduled for","tutor"):(0,u.__)("Scheduled with coming soon","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:G.scheduleInfoButtons,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",css:j/* .styleUtils.actionButton */.i.actionButton,onClick:et,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"delete",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",css:j/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{e.setValue("showScheduleForm",true,{shouldDirty:true})},children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"edit",width:24,height:24})})]})]}),/*#__PURE__*/(0,l/* .jsxs */.BX)(U/* ["default"] */.Z,{when:n&&s&&(0,x["default"])(new Date("".concat(n," ").concat(s))),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:G.scheduleInfo,children:/* translators: %1$s is the date and %2$s is the time */(0,u.sprintf)((0,u.__)("%1$s at %2$s","tutor"),(0,h["default"])((0,k["default"])(n),R/* .DateFormats.monthDayYear */.E_.monthDayYear),s)}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:H===null||H===void 0?void 0:H.url,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(M/* ["default"] */.Z,{value:H,uploadHandler:X/* .noop */.ZT,clearHandler:X/* .noop */.ZT,disabled:true})})]})]})]})};/* ESM default export */const V=(0,F/* .withVisibilityControl */.v)(H);var G={scheduleOptions:/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";gap:",P/* .spacing["8"] */.W0["8"],";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";"),formWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["16"] */.W0["16"],";"),scheduleButtonsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;gap:",P/* .spacing["12"] */.W0["12"],";margin-top:",P/* .spacing["8"] */.W0["8"],";button{width:100%;span{justify-content:center;}}"),scheduleInfoWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["12"] */.W0["12"],";"),scheduledFor:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),scheduleLabel:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),scheduleInfoButtons:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";"),scheduleInfo:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";background-color:",P/* .colorTokens.background.status.processing */.Jv.background.status.processing,";padding:",P/* .spacing["8"] */.W0["8"],";border-radius:",P/* .borderRadius["4"] */.E0["4"],";text-align:center;"),checkboxStartAlign:/*#__PURE__*/(0,s/* .css */.iv)("span:first-of-type{gap:",P/* .spacing["4"] */.W0["4"],";align-self:flex-start;margin-top:",P/* .spacing["4"] */.W0["4"],";}[data-pro-badge]{display:inline-flex;vertical-align:middle;padding-left:",P/* .spacing["4"] */.W0["4"],";}")};// EXTERNAL MODULE: ./node_modules/immer/dist/immer.mjs
var K=r(18241);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/CheckBox.tsx
var $=r(69602);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var ee=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var et=r(4867);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var er=r(37861);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useIsScrolling.ts
var en=r(41819);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var ea=r(98567);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var eo=r(24333);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var ei=r(65228);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Toast.tsx
var el=r(13985);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var es=r(82340);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var ec=r(84225);// CONCATENATED MODULE: ./assets/react/v3/shared/services/category.ts
var ed=e=>{return es/* .wpAuthApiInstance.get */.B.get(ec/* ["default"].CATEGORIES */.Z.CATEGORIES,e?{params:{per_page:100,search:e}}:{params:{per_page:100}})};var eu=e=>{return(0,eo/* .useQuery */.a)({queryKey:["CategoryList",e],queryFn:()=>ed(e).then(e=>e.data)})};var ev=e=>{return es/* .wpAuthApiInstance.post */.B.post(ec/* ["default"].CATEGORIES */.Z.CATEGORIES,e)};var ef=()=>{var e=(0,c/* .useQueryClient */.NL)();var{showToast:t}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:ev,onSuccess:()=>{e.invalidateQueries({queryKey:["CategoryList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var ep=r(84978);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var eh=r(78150);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var eg=r(97669);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var em=r(54354);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiLevelSelect.tsx
function eb(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);eb=function t(){return e};return e}var e_=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:s,placeholder:c,helpText:d,isInlineLabel:f,clearable:p,listItemsLabel:h,optionsWrapperStyle:m}=e;var b=(0,v.useRef)(null);var[_,y]=(0,v.useState)(false);var[w,x]=(0,v.useState)("");var Z=(0,et/* .useDebounce */.N)(w,300);var k=eu(Z);var C;var D=(0,X/* .generateTree */.TQ)((C=k.data)!==null&&C!==void 0?C:[]);(0,v.useEffect)(()=>{if(!_){x("")}},[_]);return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{label:t,field:r,fieldState:n,disabled:i||D.length===0,loading:s,placeholder:c,helpText:d,isInlineLabel:f,children:e=>{var t,n;return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ex.inputWrapper,ref:b,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},e),{type:"text",onClick:e=>{e.stopPropagation();y(true)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();y(true)}if(e.key==="Tab"){y(false)}},autoComplete:"off",readOnly:true,disabled:i||D.length===0,value:r.value?(n=k.data)===null||n===void 0?void 0:(t=n.find(e=>e.id===r.value))===null||t===void 0?void 0:t.name:"",placeholder:c})),/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{tabIndex:-1,type:"button",disabled:i||D.length===0,"aria-label":(0,u.__)("Toggle options","tutor"),css:ex.toggleIcon(_),onClick:()=>{y(e=>!e)},children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(eg/* ["default"] */.Z,{triggerRef:b,isOpen:_,closePopover:()=>y(false),dependencies:[D.length],animationType:em/* .AnimationType.slideDown */.ru.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ex.categoryWrapper,children:[!!h&&/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:ex.listItemLabel,children:h}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ex.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ex.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:w,onChange:e=>{x(e.target.value)}})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:D.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ex.notFound,children:(0,u.__)("No categories found.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:[ex.options,m],children:D.map(e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(ew,{option:e,onChange:e=>{r.onChange(e);y(false)}},e.id))})}),p&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ex.clearButton,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"text",onClick:()=>{r.onChange(null);y(false)},children:(0,u.__)("Clear selection","tutor")})})]})})]})}})};/* ESM default export */const ey=e_;var ew=e=>{var{option:t,onChange:r,level:n=0}=e;var a=t.children.length>0;var o=()=>{if(!a){return null}return t.children.map(e=>{return/*#__PURE__*/(0,l/* .jsx */.tZ)(ew,{option:e,onChange:r,level:n+1},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ex.branchItem(n),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",onClick:()=>r(t.id),title:t.name,children:(0,X/* .decodeHtmlEntities */.aV)(t.name)}),o()]})};var ex={categoryWrapper:/*#__PURE__*/(0,s/* .css */.iv)("background-color:",P/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",P/* .shadow.popover */.AF.popover,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";padding:",P/* .spacing["8"] */.W0["8"]," 0;min-width:275px;"),options:/*#__PURE__*/(0,s/* .css */.iv)("max-height:455px;",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),notFound:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;",z/* .typography.caption */.c.caption("regular"),";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),searchInput:/*#__PURE__*/(0,s/* .css */.iv)("position:sticky;top:0;padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";input{",z/* .typography.body */.c.body("regular"),";width:100%;border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["32"] */.W0["32"],";color:",P/* .colorTokens.text.title */.Jv.text.title,";appearance:textfield;:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;left:",P/* .spacing["24"] */.W0["24"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),branchItem:e=>/*#__PURE__*/(0,s/* .css */.iv)("position:relative;z-index:",P/* .zIndex.positive */.W5.positive,";button{",j/* .styleUtils.resetButton */.i.resetButton,";",z/* .typography.body */.c.body("regular"),";",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),";color:",P/* .colorTokens.text.title */.Jv.text.title,";padding-left:calc(",P/* .spacing["24"] */.W0["24"]," + ",P/* .spacing["24"] */.W0["24"]," * ",e,");line-height:",P/* .lineHeight["36"] */.Nv["36"],";padding-right:",P/* .spacing["16"] */.W0["16"],";width:100%;&:hover,&:focus,&:active{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";color:",P/* .colorTokens.text.title */.Jv.text.title,";}}"),toggleIcon:e=>/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";position:absolute;top:",P/* .spacing["4"] */.W0["4"],";right:",P/* .spacing["4"] */.W0["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";padding:",P/* .spacing["6"] */.W0["6"],";&:focus,&:active,&:hover{background:none;color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",e&&(0,s/* .css */.iv)(eb())),inputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:relative;input:read-only{background-color:inherit;}"),clearButton:/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["24"] */.W0["24"],";box-shadow:",P/* .shadow.dividerTop */.AF.dividerTop,";& > button{padding:0;}"),listItemLabel:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";font-weight:",P/* .fontWeight.medium */.Ue.medium,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";padding:",P/* .spacing["10"] */.W0["10"]," ",P/* .spacing["16"] */.W0["16"],";"),radioLabel:/*#__PURE__*/(0,s/* .css */.iv)("line-height:",P/* .lineHeight["32"] */.Nv["32"],";padding-left:",P/* .spacing["2"] */.W0["2"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCategoriesInput.tsx
function eZ(){var e=(0,i._)(["\n      &:before {\n        content: '';\n        position: absolute;\n        height: 1px;\n        width: 10px;\n        left: -10px;\n        top: ",";\n\n        background-color: ",";\n        z-index: ",";\n      }\n    "]);eZ=function t(){return e};return e}function ek(){var e=(0,i._)(["\n      box-shadow: ",";\n    "]);ek=function t(){return e};return e}var eC=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:s,placeholder:c,helpText:d,optionsWrapperStyle:f}=e;var h=(0,er/* .useFormWithGlobalError */.O)({shouldFocusError:true});var m=h.watch("search");var b=(0,et/* .useDebounce */.N)(m,300);var _=eu(b);var y=ef();var[w,x]=(0,v.useState)(false);var[Z,k]=(0,v.useState)(false);var{ref:C,isScrolling:D}=(0,en/* .useIsScrolling */.a)();(0,v.useEffect)(()=>{if(!_.isLoading&&(_.data||[]).length>0){k(true)}},[_.isLoading,_.data]);(0,v.useEffect)(()=>{if(w){var e=setTimeout(()=>{h.setFocus("name")},250);return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[w]);var{triggerRef:E,position:S,popoverRef:M}=(0,ea/* .usePortalPopover */.lM)({isOpen:w});var T;var B=(0,X/* .generateTree */.TQ)((T=_.data)!==null&&T!==void 0?T:[]);var I=()=>{x(false);h.reset({name:"",parent:null,search:m})};var N=e=>{if(e.name){y.mutate((0,a._)({name:e.name},e.parent&&{parent:e.parent}));I()}};return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{label:t,field:r,fieldState:n,loading:s,placeholder:c,helpText:d,children:()=>{return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:[eW.options,f],children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eW.categoryListWrapper,ref:C,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!i&&(Z||b),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"search",control:h.control,render:e=>/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eW.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eW.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:m,disabled:i||s,onChange:t=>{e.field.onChange(t.target.value)}})]})})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!_.isLoading&&!s,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)(ee/* .LoadingSection */.g4,{}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:B.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{css:eW.notFound,children:(0,u.__)("No categories found.","tutor")}),children:B.map((e,t)=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eS,{disabled:i,option:e,value:r.value,isLastChild:t===B.length-1,onChange:e=>{r.onChange((0,K/* .produce */.Uy)(r.value,t=>{if(Array.isArray(t)){return t.includes(e)?t.filter(t=>t!==e):[...t,e]}return[e]}))}},e.id))})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!i,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{ref:E,css:eW.addButtonWrapper({isActive:D,hasCategories:_.isLoading||B.length>0}),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{disabled:i||s,type:"button",css:eW.addNewButton,onClick:()=>x(true),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{width:24,height:24,name:"plus"})," ",(0,u.__)("Add","tutor")]})})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(ea/* .Portal */.Uv,{isOpen:w,onClickOutside:I,onEscape:I,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eW.categoryFormWrapper,style:{left:S.left,top:S.top},ref:M,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"name",control:h.control,rules:{required:(0,u.__)("Category name is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Category name","tutor"),selectOnFocus:true}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"parent",control:h.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(ey,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Select parent","tutor"),clearable:!!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eW.categoryFormButtons,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"text",size:"small",onClick:I,children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"secondary",size:"small",loading:y.isPending,onClick:h.handleSubmit(N),children:(0,u.__)("Ok","tutor")})]})]})})]})}})};/* ESM default export */const eD=(0,F/* .withVisibilityControl */.v)(eC);var eE=e=>{return e.children.reduce((e,t)=>e+eE(t),e.children.length)};var eS=e=>{var{option:t,value:r,onChange:n,isLastChild:a,disabled:o}=e;var i=eE(t);var s=i>0;var c=(0,X/* .getCategoryLeftBarHeight */.VH)(a,i);var d=()=>{if(!s){return null}return t.children.map((e,a)=>{return/*#__PURE__*/(0,l/* .jsx */.tZ)(eS,{option:e,value:r,onChange:n,isLastChild:a===t.children.length-1,disabled:o},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eW.branchItem({leftBarHeight:c,hasParent:t.parent!==0}),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)($/* ["default"] */.Z,{checked:Array.isArray(r)?r.includes(t.id):r===t.id,label:(0,X/* .decodeHtmlEntities */.aV)(t.name),onChange:()=>{n(t.id)},labelCss:eW.checkboxLabel,disabled:o}),d()]})};var eW={options:/*#__PURE__*/(0,s/* .css */.iv)("border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";padding:",P/* .spacing["8"] */.W0["8"]," 0;background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";"),categoryListWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";max-height:208px;"),notFound:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;",z/* .typography.caption */.c.caption("regular"),";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),searchInput:/*#__PURE__*/(0,s/* .css */.iv)("position:sticky;top:0;padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";z-index:",P/* .zIndex.dropdown */.W5.dropdown,";input{",z/* .typography.body */.c.body("regular"),";width:100%;border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["32"] */.W0["32"],";color:",P/* .colorTokens.text.title */.Jv.text.title,";appearance:textfield;:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;left:",P/* .spacing["24"] */.W0["24"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),checkboxLabel:/*#__PURE__*/(0,s/* .css */.iv)("line-height:1.88rem !important;span:last-of-type{",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"}"),branchItem:e=>{var{leftBarHeight:t,hasParent:r}=e;return/*#__PURE__*/(0,s/* .css */.iv)("line-height:",P/* .spacing["32"] */.W0["32"],";position:relative;z-index:",P/* .zIndex.positive */.W5.positive,";margin-inline:",P/* .spacing["20"] */.W0["20"]," ",P/* .spacing["16"] */.W0["16"],";&:after{content:'';position:absolute;height:",t,";width:1px;left:9px;top:25px;background-color:",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";z-index:",P/* .zIndex.level */.W5.level,";}",r&&(0,s/* .css */.iv)(eZ(),P/* .spacing["16"] */.W0["16"],P/* .colorTokens.stroke.divider */.Jv.stroke.divider,P/* .zIndex.level */.W5.level))},addNewButton:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",z/* .typography.small */.c.small("medium"),";color:",P/* .colorTokens.brand.blue */.Jv.brand.blue,";padding:0 ",P/* .spacing["8"] */.W0["8"],";display:flex;align-items:center;border-radius:",P/* .borderRadius["2"] */.E0["2"],";&:focus,&:active,&:hover{background:none;color:",P/* .colorTokens.brand.blue */.Jv.brand.blue,";}&:focus-visible{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}&:disabled{color:",P/* .colorTokens.text.disable */.Jv.text.disable,";}"),categoryFormWrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",P/* .shadow.popover */.AF.popover,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";padding:",P/* .spacing["16"] */.W0["16"],";min-width:306px;display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";"),categoryFormButtons:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;justify-content:end;gap:",P/* .spacing["8"] */.W0["8"],";"),addButtonWrapper:e=>{var{isActive:t=false,hasCategories:r=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)("transition:box-shadow 0.3s ease-in-out;padding-inline:",P/* .spacing["8"] */.W0["8"],";padding-block:",r?P/* .spacing["4"] */.W0["4"]:"0px",";",t&&(0,s/* .css */.iv)(ek(),P/* .shadow.scrollable */.AF.scrollable))}};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var eM=r(82325);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var eT=r(98848);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var eB=r(30633);// CONCATENATED MODULE: ./assets/react/v3/public/images/profile-photo.png
const eI=r.p+"js/images/profile-photo-92d02228.png";// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormSelectUser.tsx
function eN(){var e=(0,i._)(["\n      border-color: ",";\n      cursor: pointer;\n    "]);eN=function t(){return e};return e}function eO(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);eO=function t(){return e};return e}var eA={id:0,name:(0,u.__)("Click to select user","tutor"),email:"example@example.com",avatar_url:"https://gravatar.com/avatar"};var eL=e=>{var{field:t,fieldState:r,options:n,onChange:i=X/* .noop */.ZT,handleSearchOnChange:s,isMultiSelect:c=false,label:d,placeholder:f="",disabled:p,readOnly:h,loading:m,isSearchable:b=false,helpText:_,emptyStateText:y=(0,u.__)("No user selected","tutor"),isInstructorMode:w=false}=e;var x;var Z;var k=(Z=t.value)!==null&&Z!==void 0?Z:c?[]:eA;var C=Array.isArray(k)?k.map(e=>String(e.id)):[String(k.id)];var D=(x=J/* .tutorConfig.current_user.roles */.y.current_user.roles)===null||x===void 0?void 0:x.includes(R/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var E=(0,v.useRef)(null);var[S,W]=(0,v.useState)(false);var[M,T]=(0,v.useState)("");var B=(0,et/* .useDebounce */.N)(M);var I=n.filter(e=>{var t,r;var n=((t=e.name)===null||t===void 0?void 0:t.toLowerCase().includes(M.toLowerCase()))||((r=e.email)===null||r===void 0?void 0:r.toLowerCase().includes(M.toLowerCase()));var a=!C.includes(String(e.id));return n&&a})||[];(0,v.useEffect)(()=>{if(s){s(B)}else{// Handle local filter
}},[B,s]);var{activeIndex:N,setActiveIndex:O}=(0,eB/* .useSelectKeyboardNavigation */.U)({options:I.map(e=>({label:e.name,value:e})),isOpen:S,onSelect:e=>{A(e.value)},onClose:()=>{W(false);T("")},selectedValue:Array.isArray(k)?null:k});var A=e=>{var r=w?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(k)?[...k,r]:r;t.onChange(n);T("");i(n);W(false)};var L=e=>{if(Array.isArray(k)){var r=k.filter(t=>t.id!==e);t.onChange(r);i(r)}};var P=(0,v.useRef)(null);(0,v.useEffect)(()=>{if(S&&N>=0&&P.current){P.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[S,N]);return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{fieldState:r,field:t,label:d,disabled:p,readOnly:h,loading:m,helpText:_,children:e=>{var{css:r}=e,n=(0,eT._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eR.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{ref:E,children:[!c&&!Array.isArray(k)&&/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{type:"button",css:eR.instructorItem({isDefaultItem:true}),onClick:()=>W(e=>!e),disabled:h||p||I.length===0,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eR.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("img",{src:k.avatar_url?k.avatar_url:eI,alt:k.name,css:eR.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorName,children:k.name}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorEmail,children:k.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!m,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.toggleIcon({isOpen:S}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"chevronDown",width:20,height:20})})})]}),c&&/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eR.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},n),{onClick:e=>{e.stopPropagation();W(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();W(e=>!e)}if(e.key==="Tab"){W(false)}},className:"tutor-input-field",css:[r,eR.input],autoComplete:"off",readOnly:h||!b,placeholder:f,value:M,onChange:e=>{T(e.target.value)}}))]})]}),c&&Array.isArray(k)&&(k.length>0?/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorList,children:k.map(e=>/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eR.instructorItem({isDefaultItem:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eR.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("img",{src:e.avatar_url?e.avatar_url:eI,alt:e.name,css:eR.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorEmail,children:e.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:w,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",onClick:()=>L(e.id),css:eR.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"cross",width:32,height:32})}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:D||e.isRemoveAble,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",onClick:()=>L(e.id),css:eR.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"cross",width:32,height:32})})})})]},e.id))}):/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.emptyState,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{children:y})})),/*#__PURE__*/(0,l/* .jsx */.tZ)(eg/* ["default"] */.Z,{triggerRef:E,isOpen:S,dependencies:[I.length],animationType:em/* .AnimationType.slideDown */.ru.slideDown,closePopover:()=>{W(false);T("")},children:/*#__PURE__*/(0,l/* .jsxs */.BX)("ul",{css:[eR.options],children:[!c&&/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:eR.inputWrapperListItem,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:[eR.inputWrapper,eR.portalInputWrapper],children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},n),{autoFocus:true,className:"tutor-input-field",css:[r,eR.input],autoComplete:"off",readOnly:h||!b,placeholder:f,value:M,onChange:e=>{T(e.target.value)}}))]})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:I.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:eR.noUserFound,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{children:(0,u.__)("No user found","tutor")})}),children:I.map((e,r)=>/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:eR.optionItem,"data-active":N===r,onMouseOver:()=>O(r),onMouseLeave:()=>r!==N&&O(-1),ref:N===r?P:null,onFocus:()=>O(r),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{type:"button",css:eR.label,onClick:()=>{var r=w?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(k)?[...k,r]:r;t.onChange(n);T("");i(n);W(false)},"aria-selected":N===r,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("img",{src:e.avatar_url?e.avatar_url:eI,alt:e.name,css:eR.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eR.instructorEmail,children:e.email})]})]})},String(e.id)))})]})})]})}})};/* ESM default export */const eJ=(0,F/* .withVisibilityControl */.v)(eL);var eR={mainWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;"),inputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),portalInputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"],";"),inputWrapperListItem:/*#__PURE__*/(0,s/* .css */.iv)("position:sticky;top:0px;padding:0px;background-color:inherit;"),leftIcon:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;left:",P/* .spacing["12"] */.W0["12"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body(),";width:100%;padding-right:",P/* .spacing["32"] */.W0["32"],";padding-left:",P/* .spacing["36"] */.W0["36"],";",j/* .styleUtils.textEllipsis */.i.textEllipsis,";border-color:transparent;:focus{outline:none;box-shadow:none;}&.tutor-input-field{padding-right:",P/* .spacing["32"] */.W0["32"],";padding-left:",P/* .spacing["36"] */.W0["36"],";}"),instructorList:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),instructorItem:e=>{var{isDefaultItem:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";border:1px solid transparent;border-radius:",P/* .borderRadius.input */.E0.input,";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";&:hover,&:focus,&:active{background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";}&:focus{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}",t&&(0,s/* .css */.iv)(eN(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"]),"    &:hover{border-color:",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";[data-instructor-delete-button]{opacity:1;}}",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-instructor-delete-button]{opacity:1;}}")},instructorInfo:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["10"] */.W0["10"],";"),instructorAvatar:/*#__PURE__*/(0,s/* .css */.iv)("height:40px;width:40px;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.circle */.E0.circle,";"),instructorName:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";"),instructorEmail:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),optionsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;width:100%;"),instructorDeleteButton:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.crossButton */.i.crossButton,";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";opacity:0;transition:none;&:hover,&:focus,&:active{background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";}&:focus{box-shadow:",P/* .shadow.focus */.AF.focus,";}:focus-visible{opacity:1;}"),options:/*#__PURE__*/(0,s/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";margin:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";scrollbar-gutter:auto;min-width:200px;"),optionItem:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&[data-active='true']{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),label:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";width:100%;height:100%;display:flex;gap:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";text-align:left;line-height:",P/* .lineHeight["24"] */.Nv["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-2px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";}"),optionsContainer:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;overflow:hidden auto;min-width:16px;min-height:16px;max-width:calc(100% - 32px);max-height:calc(100% - 32px);"),toggleIcon:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;top:0;bottom:0;right:",P/* .spacing["8"] */.W0["8"],";",j/* .styleUtils.flexCenter */.i.flexCenter(),";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:transform 0.3s ease-in-out;",t&&(0,s/* .css */.iv)(eO()))},noUserFound:/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"],";text-align:center;"),emptyState:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.flexCenter */.i.flexCenter(),";",z/* .typography.caption */.c.caption(),";margin-top:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["8"] */.W0["8"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";border-radius:",P/* .borderRadius["4"] */.E0["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Chip.tsx
function eP(){var e=(0,i._)(["\n      cursor: inherit;\n    "]);eP=function t(){return e};return e}function ez(){var e=(0,i._)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ",";\n      padding: "," "," "," ",";\n    "]);ez=function t(){return e};return e}var eU=e=>{var{label:t,onClick:r=X/* .noop */.ZT,showIcon:n=true,icon:a=/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"cross",width:20,height:20}),isClickable:o}=e;if(o){return/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{type:"button",css:ej.wrapper({hasIcon:n,isClickable:true}),onClick:r,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ej.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ej.iconWrapper,"data-icon-wrapper":true,children:a})]})}return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ej.wrapper({hasIcon:n,isClickable:false}),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ej.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",css:ej.iconWrapper,onClick:r,"data-icon-wrapper":true,children:a})]})};/* ESM default export */const eF=eU;var ej={wrapper:e=>{var{hasIcon:t=false,isClickable:r}=e;return/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";background-color:#e4e5e7;border-radius:",P/* .borderRadius["24"] */.E0["24"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["8"] */.W0["8"],";min-height:24px;transition:background-color 0.3s ease;",!r&&(0,s/* .css */.iv)(eP())," ",t&&(0,s/* .css */.iv)(ez(),P/* .spacing["2"] */.W0["2"],P/* .spacing["4"] */.W0["4"],P/* .spacing["8"] */.W0["8"],P/* .spacing["4"] */.W0["4"],P/* .spacing["12"] */.W0["12"]),":hover{[data-icon-wrapper]{> svg{color:",P/* .colorTokens.icon.hover */.Jv.icon.hover,";}}}")},label:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption()),iconWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";border-radius:",P/* .borderRadius.circle */.E0.circle,";transition:background-color 0.3s ease;height:20px;width:20px;text-align:center;&:focus,&:active,&:hover{background:none;}svg{color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:color 0.3s ease;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/tags.ts
var eX=e=>{return es/* .wpAuthApiInstance.get */.B.get(ec/* ["default"].TAGS */.Z.TAGS,{params:e})};var eY=e=>{return(0,eo/* .useQuery */.a)({queryKey:["TagList",e],queryFn:()=>eX(e).then(e=>e.data)})};var eQ=e=>{return es/* .wpAuthApiInstance.post */.B.post(ec/* ["default"].TAGS */.Z.TAGS,e)};var eq=()=>{var e=(0,c/* .useQueryClient */.NL)();var{showToast:t}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:eQ,onSuccess:()=>{e.invalidateQueries({queryKey:["TagList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormTagsInput.tsx
function eH(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);eH=function t(){return e};return e}var eV=e=>{var{field:t,fieldState:r,label:i,placeholder:s="",disabled:c,readOnly:d,loading:f,helpText:p,removeOptionsMinWidth:h=false}=e;var m;var b=(m=t.value)!==null&&m!==void 0?m:[];var[_,y]=(0,v.useState)("");var w=(0,et/* .useDebounce */.N)(_);var x=(0,v.useRef)(null);var[Z,k]=(0,v.useState)(false);var C=eY({search:w});var D=eq();var E;var S=(E=C.data)!==null&&E!==void 0?E:[];var W=(e,r)=>{if(e){t.onChange([...b,r])}else{t.onChange(b.filter(e=>e.id!==r.id))}};var M=()=>(0,n._)(function*(){if(_.length){var e=yield D.mutateAsync({name:_});t.onChange([...b,e.data]);k(false);y("")}})();return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{fieldState:r,field:t,label:i,disabled:c,readOnly:d,loading:f,helpText:p,children:e=>{var t;var{css:r}=e,n=(0,eT._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:eK.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eK.inputWrapper,ref:x,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},n),{css:[r,eK.input],onClick:e=>{e.stopPropagation();k(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();k(e=>!e)}if(e.key==="Tab"){k(false)}},autoComplete:"off",readOnly:d,placeholder:s,value:_,onChange:e=>{y(e.target.value)}}))}),b.length>0&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eK.tagsWrapper,children:b.map(e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eF,{label:(0,X/* .decodeHtmlEntities */.aV)(e.name),onClick:()=>W(false,e)},e.id))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(eg/* ["default"] */.Z,{triggerRef:x,isOpen:Z,closePopover:()=>k(false),dependencies:[(t=C.data)===null||t===void 0?void 0:t.length],animationType:em/* .AnimationType.slideDown */.ru.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("ul",{css:[eK.options(h)],children:[_.length>0&&/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{children:/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{type:"button",css:eK.addTag,onClick:M,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"plus",width:24,height:24}),/*#__PURE__*/(0,l/* .jsx */.tZ)("strong",{children:(0,u.__)("Add","tutor")})," ",_]})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:S.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:eK.notTag,children:(0,u.__)("No tag created yet.","tutor")}),children:S.map(e=>/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:eK.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.tZ)($/* ["default"] */.Z,{label:(0,X/* .decodeHtmlEntities */.aV)(e.name),checked:!!b.find(t=>t.id===e.id),onChange:t=>W(t,e)})},String(e.id)))})]})})]})}})};/* ESM default export */const eG=(0,F/* .withVisibilityControl */.v)(eV);var eK={mainWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;"),notTag:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body(),";width:100%;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";:focus{outline:none;box-shadow:",P/* .shadow.focus */.AF.focus,";}"),tagsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-wrap:wrap;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),options:e=>/*#__PURE__*/(0,s/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,s/* .css */.iv)(eH())),optionItem:/*#__PURE__*/(0,s/* .css */.iv)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",P/* .spacing["8"] */.W0["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),addTag:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",z/* .typography.body */.c.body(),"    line-height:",P/* .lineHeight["24"] */.Nv["24"],";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";width:100%;padding:",P/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";}")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var e$=r(69789);// CONCATENATED MODULE: ./assets/react/v3/shared/services/users.ts
var e0=e=>{return es/* .wpAjaxInstance.get */.R.get(ec/* ["default"].USERS_LIST */.Z.USERS_LIST,{params:{filter:{search:e,role:[R/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR,R/* .TutorRoles.TUTOR_INSTRUCTOR */.er.TUTOR_INSTRUCTOR]}}})};var e1=e=>{return(0,eo/* .useQuery */.a)({queryKey:["UserList",e],queryFn:()=>e0(e).then(e=>e.data.results.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url})))})};var e2=e=>{return es/* .wpAjaxInstance.get */.R.get(ec/* ["default"].TUTOR_INSTRUCTOR_SEARCH */.Z.TUTOR_INSTRUCTOR_SEARCH,{params:{course_id:e}}).then(e=>e.data)};var e4=(e,t)=>{return(0,eo/* .useQuery */.a)({queryKey:["InstructorList",e],queryFn:()=>e2(e).then(e=>{return e.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}))}),enabled:t})};// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var e3=r(89250);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
var e8=r(35159);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var e6=r(90097);// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js
var e5=r(94697);// EXTERNAL MODULE: ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var e9=r(32339);// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var e7=r(45587);// EXTERNAL MODULE: external "ReactDOM"
var te=r(61533);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var tt=r(63260);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/ModalWrapper.tsx
var tr=r(36951);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormInputWithPresets.tsx
function tn(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);tn=function t(){return e};return e}function ta(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);ta=function t(){return e};return e}function to(){var e=(0,i._)(["\n        border-color: ",";\n      "]);to=function t(){return e};return e}function ti(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);ti=function t(){return e};return e}function tl(){var e=(0,i._)(["\n              padding-",": ",";\n            "]);tl=function t(){return e};return e}function ts(){var e=(0,i._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);ts=function t(){return e};return e}function tc(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);tc=function t(){return e};return e}function td(){var e=(0,i._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);td=function t(){return e};return e}function tu(){var e=(0,i._)(["\n      ","\n    "]);tu=function t(){return e};return e}function tv(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);tv=function t(){return e};return e}function tf(){var e=(0,i._)(["\n      ","\n    "]);tf=function t(){return e};return e}function tp(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);tp=function t(){return e};return e}var th=e=>{var{field:t,fieldState:r,content:n,contentPosition:i="left",showVerticalBar:s=true,type:c="text",size:d="regular",label:u,placeholder:f="",disabled:p,readOnly:h,loading:m,helpText:b,removeOptionsMinWidth:_=true,onChange:y,presetOptions:w=[],selectOnFocus:x=false,wrapperCss:Z,contentCss:k,removeBorder:C=false}=e;var D;var E=(D=t.value)!==null&&D!==void 0?D:"";var S=(0,v.useRef)(null);var W=(0,v.useRef)(null);var[M,T]=(0,v.useState)(false);return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{fieldState:r,field:t,label:u,disabled:p,readOnly:h,loading:m,helpText:b,removeBorder:C,placeholder:f,children:e=>{var{css:u}=e,v=(0,eT._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:[tm.inputWrapper(!!r.error,C),Z],ref:W,children:[n&&i==="left"&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:[tm.inputLeftContent(s,d),k],children:n}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},v),{css:[u,tm.input(i,s,d)],onClick:()=>T(true),autoComplete:"off",readOnly:h,ref:e=>{t.ref(e);// @ts-ignore
S.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!x||!S.current){return}S.current.select()},value:E,onChange:e=>{var r=c==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(y){y(r)}},"data-input":true})),n&&i==="right"&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:tm.inputRightContent(s,d),children:n})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(eg/* ["default"] */.Z,{triggerRef:W,isOpen:M,closePopover:()=>T(false),animationType:em/* .AnimationType.slideDown */.ru.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:[tm.optionsWrapper],children:/*#__PURE__*/(0,l/* .jsx */.tZ)("ul",{css:[tm.options(_)],children:w.map(e=>/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:tm.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("button",{type:"button",css:tm.label,onClick:()=>{t.onChange(e.value);y===null||y===void 0?void 0:y(e.value);T(false)},children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* ESM default export */const tg=th;var tm={mainWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;",!t&&(0,s/* .css */.iv)(tn(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],P/* .borderRadius["6"] */.E0["6"],P/* .shadow.input */.AF.input,P/* .colorTokens.background.white */.Jv.background.white)," ",e&&(0,s/* .css */.iv)(ta(),P/* .colorTokens.stroke.danger */.Jv.stroke.danger,P/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail),";&:focus-within{",j/* .styleUtils.inputFocus */.i.inputFocus,";",e&&(0,s/* .css */.iv)(to(),P/* .colorTokens.stroke.danger */.Jv.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,s/* .css */.iv)("&[data-input]{",z/* .typography.body */.c.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,s/* .css */.iv)(ti(),e,P/* .spacing["10"] */.W0["10"]),";",r==="large"&&(0,s/* .css */.iv)(ts(),P/* .fontSize["24"] */.JB["24"],P/* .fontWeight.medium */.Ue.medium,t&&(0,s/* .css */.iv)(tl(),e,P/* .spacing["12"] */.W0["12"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";margin:0 ",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["6"] */.W0["6"]," 0;text-align:left;line-height:",P/* .lineHeight["24"] */.Nv["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),optionsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,s/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:500px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";",!e&&(0,s/* .css */.iv)(tc())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}",t&&(0,s/* .css */.iv)(td(),P/* .colorTokens.background.active */.Jv.background.active,P/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],P/* .borderRadius["6"] */.E0["6"],P/* .borderRadius["6"] */.E0["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.small */.c.small()," ",j/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",P/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",P/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,s/* .css */.iv)(tu(),z/* .typography.body */.c.body())," ",e&&(0,s/* .css */.iv)(tv(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.small */.c.small()," ",j/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",P/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",P/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,s/* .css */.iv)(tf(),z/* .typography.body */.c.body())," ",e&&(0,s/* .css */.iv)(tp(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/OfferSalePrice.tsx
var{tutor_currency:tb}=J/* .tutorConfig */.y;function t_(){var e=(0,p/* .useFormContext */.Gc)();var t=e.watch("offer_sale_price");var r=e.watch("regular_price");var n=!!e.watch("schedule_sale_price");return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ty.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(O/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Offer sale price","tutor")}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ty.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"sale_price",rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(e&&r&&Number(e)>=Number(r)){return(0,u.__)("Sale price should be less than regular price","tutor")}if(e&&r&&Number(e)<=0){return(0,u.__)("Sale price should be greater than 0","tutor")}return undefined}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e8/* ["default"] */.Z,(0,o._)((0,a._)({},e),{type:"number",label:(0,u.__)("Sale Price","tutor"),content:(tb===null||tb===void 0?void 0:tb.symbol)||"$",selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Schedule the sale price","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.BX)(U/* ["default"] */.Z,{when:n,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ty.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{children:(0,u.__)("Sale starts from","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"sale_price_from_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(I/* ["default"] */.Z,(0,o._)((0,a._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"sale_price_from_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(A/* ["default"] */.Z,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ty.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{children:(0,u.__)("Sale ends to","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"sale_price_to_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required","tutor"),validate:{checkEndDate:t=>{var r=e.watch("sale_price_from_date");var n=t;if(r&&n){return new Date(r)>new Date(n)?(0,u.__)("Sales End date should be greater than start date","tutor"):undefined}return undefined}},deps:["sale_price_from_date"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.tZ)(I/* ["default"] */.Z,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:e.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"sale_price_to_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required","tutor"),validate:{checkEndTime:t=>{var r=e.watch("sale_price_from_date");var n=e.watch("sale_price_from_time");var a=e.watch("sale_price_to_date");var o=t;if(r&&a&&n&&o){return new Date("".concat(r," ").concat(n))>new Date("".concat(a," ").concat(o))?(0,u.__)("Sales End time should be greater than start time","tutor"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(A/* ["default"] */.Z,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})}var ty={wrapper:/*#__PURE__*/(0,s/* .css */.iv)("background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";display:flex;flex-direction:column;gap:",P/* .spacing["20"] */.W0["20"],";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["4"] */.W0["4"],";margin:-",P/* .spacing["4"] */.W0["4"],";"),datetimeWrapper:/*#__PURE__*/(0,s/* .css */.iv)("label{",z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/subscription.ts
var tw=[3,6,9,12];var tx={untilCancelled:(0,u.__)("Until cancelled","tutor"),noRenewal:(0,u.__)("No Renewal","tutor")};var tZ={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,u.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var tk=e=>{var t=()=>{if(e.recurring_limit==="0"){return tx.untilCancelled}if(e.recurring_limit==="-1"){return tx.noRenewal}return e.recurring_limit||""};var r,n,a,o,i,l,s,c,d,u,v;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(a=e.plan_name)!==null&&a!==void 0?a:"",plan_order:(o=e.plan_order)!==null&&o!==void 0?o:"0",recurring_value:(i=e.recurring_value)!==null&&i!==void 0?i:"0",recurring_interval:(l=e.recurring_interval)!==null&&l!==void 0?l:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(s=e.regular_price)!==null&&s!==void 0?s:"0",recurring_limit:t(),enrollment_fee:(c=e.enrollment_fee)!==null&&c!==void 0?c:"0",trial_value:(d=e.trial_value)!==null&&d!==void 0?d:"0",trial_interval:(u=e.trial_interval)!==null&&u!==void 0?u:"day",sale_price:(v=e.sale_price)!==null&&v!==void 0?v:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?(0,h["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_from),R/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",sale_price_from_time:e.sale_price_from?(0,h["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_from),R/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",sale_price_to_date:e.sale_price_to?(0,h["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_to),R/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",sale_price_to_time:e.sale_price_to?(0,h["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_to),R/* .DateFormats.hoursMinutes */.E_.hoursMinutes):""}};var tC=e=>{var t=()=>{if(e.recurring_limit===tx.untilCancelled){return"0"}if(e.recurring_limit===tx.noRenewal){return"-1"}return e.recurring_limit};return(0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:(0,X/* .convertToGMT */.WK)(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:(0,X/* .convertToGMT */.WK)(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var tD=e=>{return es/* .wpAjaxInstance.post */.R.post(ec/* ["default"].GET_SUBSCRIPTIONS_LIST */.Z.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var tE=e=>{return(0,eo/* .useQuery */.a)({queryKey:["SubscriptionsList",e],queryFn:()=>tD(e).then(e=>e.data)})};var tS=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(ec/* ["default"].SAVE_SUBSCRIPTION */.Z.SAVE_SUBSCRIPTION,(0,a._)({object_id:e},t.id&&{id:t.id},t))};var tW=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:t=>tS(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tM=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(ec/* ["default"].DELETE_SUBSCRIPTION */.Z.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var tT=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:t=>tM(e,t),onSuccess:(n,a)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(a))})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tB=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(ec/* ["default"].DUPLICATE_SUBSCRIPTION */.Z.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var tI=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:t=>tB(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tN=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(ec/* ["default"].SORT_SUBSCRIPTION */.Z.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var tO=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,el/* .useToast */.p)();return(0,ei/* .useMutation */.D)({mutationFn:t=>tN(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var tA=()=>{return wpAjaxInstance.get(endpoints.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var tL=()=>{return useQuery({queryKey:["MembershipPlans"],queryFn:tA})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionItem.tsx
var tJ=250;// this is hack to fix layout shifting while animating.
var{tutor_currency:tR}=J/* .tutorConfig */.y;function tP(){var e=(0,p/* .useFormContext */.Gc)();(0,v.useEffect)(()=>{var t=setTimeout(()=>{e.setFocus("plan_name")},tJ);return()=>{clearTimeout(t)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var t=e.watch("charge_enrollment_fee");// @TODO: Will be added after confirmation
// const enableTrial = form.watch(`subscriptions.${index}.enable_free_trial` as `subscriptions.0.enable_free_trial`);
var r=Object.values(tx);var n=[...tw.map(e=>({/* translators: %s is the number of times */label:(0,u.sprintf)((0,u.__)("%s times","tutor"),e.toString()),value:String(e)})),...r.map(e=>({label:e,value:e}))];return/*#__PURE__*/(0,l/* .jsx */.tZ)("form",{css:tz.subscription,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:j/* .styleUtils.display.flex */.i.display.flex("column"),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:tz.subscriptionContent,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"plan_name",rules:(0,Y/* .requiredRule */.n0)(),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Enter plan name","tutor"),label:(0,u.__)("Plan Name","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:tz.inputGroup,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"regular_price",rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e8/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Price","tutor"),content:(tR===null||tR===void 0?void 0:tR.symbol)||"$",placeholder:(0,u.__)("Plan price","tutor"),selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"recurring_value",rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<1){return(0,u.__)("This value must be equal to or greater than 1","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Billing Interval","tutor"),placeholder:(0,u.__)("12","tutor"),selectOnFocus:true,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{children:" "}),options:[{label:(0,u.__)("Day(s)","tutor"),value:"day"},{label:(0,u.__)("Week(s)","tutor"),value:"week"},{label:(0,u.__)("Month(s)","tutor"),value:"month"},{label:(0,u.__)("Year(s)","tutor"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"recurring_limit",rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(r.includes(e)){return true}if(Number(e)<=0){return(0,u.__)("Renew plan must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(tg,(0,o._)((0,a._)({},e),{label:(0,u.__)("Billing Cycles","tutor"),placeholder:(0,u.__)("Select or type times to renewing the plan","tutor"),content:!r.includes(e.field.value)&&(0,u.__)("Times","tutor"),contentPosition:"right",type:"number",presetOptions:n,selectOnFocus:true}))})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge enrollment fee","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"enrollment_fee",rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Enrollment fee must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e8/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enrollment fee","tutor"),content:(tR===null||tR===void 0?void 0:tR.symbol)||"$",placeholder:(0,u.__)("Enter enrollment fee","tutor"),selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Do not provide certificate","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{control:e.control,name:"is_featured",render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Mark as featured","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(t_,{})]})})})}var tz={trialWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:",P/* .spacing["8"] */.W0["8"],";"),subscription:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.card */.E0.card,";overflow:hidden;transition:border-color 0.3s ease;"),subscriptionContent:/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["16"] */.W0["16"],";display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";"),inputGroup:/*#__PURE__*/(0,s/* .css */.iv)("display:grid;grid-template-columns:1fr 0.7fr 1fr 1fr;align-items:start;gap:",P/* .spacing["8"] */.W0["8"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{grid-template-columns:1fr;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/SubscriptionModal.tsx
function tU(e){var{courseId:t,isBundle:r=false,icon:i,closeModal:s,subscription:c}=e;var d=(0,er/* .useFormWithGlobalError */.O)({defaultValues:c||tZ,mode:"onChange"});var v=tW(t);var f=d.formState.isDirty;var h=c.isSaved;var m=e=>(0,n._)(function*(){var n=tC((0,o._)((0,a._)({},e),{id:e.isSaved?e.id:"0",assign_id:String(t),plan_type:r?"bundle":"course"}));var i=yield v.mutateAsync(n);if(i.status_code===200||i.status_code===201){s({action:"CONFIRM"})}})();return/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .FormProvider */.RV,(0,o._)((0,a._)({},d),{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(tr/* ["default"] */.Z,{onClose:()=>s({action:"CLOSE"}),icon:f?/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"warning",width:24,height:24}):i,title:f?R/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile?(0,u.__)("Unsaved Changes","tutor"):"":(0,u.__)("Subscription Plan","tutor"),subtitle:c.isSaved?(0,u.__)("Update plan","tutor"):(0,u.__)("Create plan","tutor"),maxWidth:1218,actions:f&&/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>h?d.reset():s({action:"CLOSE"}),children:h?(0,u.__)("Discard Changes","tutor"):(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{"data-cy":"save-subscription",loading:v.isPending,variant:"primary",size:"small",onClick:d.handleSubmit(m),children:h?(0,u.__)("Update","tutor"):(0,u.__)("Save","tutor")})]}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:tF.wrapper,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:tF.container,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:tF.content,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(tP,{},c.id)})})})})}))}var tF={wrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;height:100%;"),container:/*#__PURE__*/(0,s/* .css */.iv)("max-width:640px;width:100%;padding-block:",P/* .spacing["40"] */.W0["40"],";margin-inline:auto;display:flex;flex-direction:column;gap:",P/* .spacing["32"] */.W0["32"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-block:",P/* .spacing["24"] */.W0["24"],";padding-inline:",P/* .spacing["8"] */.W0["8"],";}"),content:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";")};// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var tj=r(24285);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Switch.tsx
var tX=r(25959);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/TutorBadge.tsx
var tY={default:{background:P/* .colorTokens.background.status.drip */.Jv.background.status.drip,foreground:P/* .colorTokens.text.status.primary */.Jv.text.status.primary,border:P/* .colorTokens.stroke.neutral */.Jv.stroke.neutral},secondary:{background:P/* .colorTokens.background.status.cancelled */.Jv.background.status.cancelled,foreground:P/* .colorTokens.text.status.cancelled */.Jv.text.status.cancelled,border:P/* .colorTokens.stroke.status.cancelled */.Jv.stroke.status.cancelled},critical:{background:P/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail,foreground:P/* .colorTokens.text.status.failed */.Jv.text.status.failed,border:P/* .colorTokens.stroke.status.fail */.Jv.stroke.status.fail},warning:{background:P/* .colorTokens.background.status.warning */.Jv.background.status.warning,foreground:P/* .colorTokens.text.status.pending */.Jv.text.status.pending,border:P/* .colorTokens.stroke.status.warning */.Jv.stroke.status.warning},success:{background:P/* .colorTokens.background.status.success */.Jv.background.status.success,foreground:P/* .colorTokens.text.status.completed */.Jv.text.status.completed,border:P/* .colorTokens.stroke.status.success */.Jv.stroke.status.success},outline:{background:P/* .colorTokens.background.white */.Jv.background.white,foreground:P/* .colorTokens.text.status.cancelled */.Jv.text.status.cancelled,border:P/* .colorTokens.stroke.status.cancelled */.Jv.stroke.status.cancelled}};var tQ=/*#__PURE__*/f().forwardRef((e,t)=>{var{className:r,children:n,variant:a="default"}=e;return/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{ref:t,className:r,css:tq.badge(a),children:n})});tQ.displayName="TutorBadge";var tq={badge:e=>/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.small */.c.small("medium"),";display:inline-flex;align-items:center;border-radius:",P/* .borderRadius["30"] */.E0["30"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["8"] */.W0["8"],";max-height:24px;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";border:1px solid ",tY[e].border,";background-color:",tY[e].background,";color:",tY[e].foreground,";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/ThreeDots.tsx
var tH=r(52130);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/ConfirmationModal.tsx
var tV=r(6293);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/dndkit.ts
var tG=r(28089);// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/PreviewItem.tsx
function tK(){var e=(0,i._)(["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        min-width: 0;\n      "]);tK=function t(){return e};return e}function t$(){var e=(0,i._)(["\n          overflow: unset;\n          text-overflow: unset;\n          animation: marquee-slide ","s ease-out forwards;\n          will-change: transform;\n\n          @keyframes marquee-slide {\n            0% {\n              transform: translateX(0);\n            }\n            100% {\n              transform: translateX(-","px);\n            }\n          }\n        "]);t$=function t(){return e};return e}function t0(){var e=(0,i._)(["\n      border-radius: ",";\n      box-shadow: ",";\n\n      [data-grabber] {\n        cursor: grabbing;\n      }\n    "]);t0=function t(){return e};return e}function t1(){var e=(0,i._)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n      min-width: 0;\n    "]);t1=function t(){return e};return e}var t2=60;var t4=(e,t)=>{switch(e){case"hour":return t>1?(0,u.__)("Hours","tutor"):(0,u.__)("Hour","tutor");case"day":return t>1?(0,u.__)("Days","tutor"):(0,u.__)("Day","tutor");case"week":return t>1?(0,u.__)("Weeks","tutor"):(0,u.__)("Week","tutor");case"month":return t>1?(0,u.__)("Months","tutor"):(0,u.__)("Month","tutor");case"year":return t>1?(0,u.__)("Years","tutor"):(0,u.__)("Year","tutor");case"until_cancellation":return(0,u.__)("Until Cancellation","tutor")}};var t3=e=>{var{subscription:t,courseId:r,isBundle:i,isOverlay:s}=e;var c;var[d,f]=(0,v.useState)(false);var[p,h]=(0,v.useState)(0);var[m,b]=(0,v.useState)(0);var{showModal:_,updateModal:y,closeModal:w}=(0,tt/* .useModal */.d)();var x=tW(r);var Z=tT(r);var k=tI(r);var C=(0,v.useRef)(null);var D=(0,v.useRef)(null);var{attributes:E,listeners:S,setNodeRef:W,transform:M,transition:T,isDragging:B}=(0,e7/* .useSortable */.nB)({id:t.id||"",animateLayoutChanges:tG/* .animateLayoutChanges */.h});var I={transform:tj/* .CSS.Transform.toString */.ux.Transform.toString(M),transition:T,opacity:B?.3:undefined,background:B?P/* .colorTokens.stroke.hover */.Jv.stroke.hover:undefined};var N=(0,v.useMemo)(()=>{var e="".concat(t.recurring_limit.toString().padStart(2,"0")," ").concat((0,u.__)("Billing Cycles","tutor"));if(t.recurring_limit===tx.untilCancelled){e=(0,u.__)("Until Cancellation","tutor")}if(t.recurring_limit===tx.noRenewal){e=(0,u.__)("No Renewal","tutor")}return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:"•"}),/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:e})]})},[t.recurring_limit]);var O=(0,v.useMemo)(()=>/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.payment_type==="recurring",fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:(0,u.__)("Lifetime","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.recurring_limit!==tx.noRenewal,fallback:"".concat(t.recurring_value.toString().padStart(2,"0")," ").concat(t4(t.recurring_interval,Number(t.recurring_value))),children:(0,u.sprintf)((0,u.__)("Renew every %1$s %2$s","tutor"),t.recurring_value.toString().padStart(2,"0"),t4(t.recurring_interval,Number(t.recurring_value)))})})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.payment_type!=="onetime",children:N})]}),[t.payment_type,t.recurring_limit,t.recurring_interval,t.recurring_value,N]);var A=(0,v.useCallback)(e=>{var r=tC(t);x.mutate((0,o._)((0,a._)({},r),{is_enabled:e?"1":"0"}))},[t,x]);var L=(0,v.useCallback)(()=>{var e=(0,o._)((0,a._)({},t),{isSaved:true});_({component:tU,props:{icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"dollarRecurring",width:24,height:24}),subscription:e,courseId:r,isBundle:i}});f(false)},[t,_,r,i]);var J=(0,v.useCallback)(()=>(0,n._)(function*(){y("subscription-delete-modal",{isLoading:true});var e=yield Z.mutateAsync(Number(t.id));if(e.status_code===200){w()}})(),[y,Z,t.id,w]);var R=(0,v.useCallback)(()=>(0,n._)(function*(){var e=yield k.mutateAsync(Number(t.id));if(e.data){f(false)}})(),[k,t.id]);var z=(0,v.useCallback)(e=>{if(e.key==="Enter"||e.key===" "){L()}},[L]);var F=(0,v.useCallback)(()=>{f(false);_({id:"subscription-delete-modal",component:tV/* ["default"] */.Z,props:{title:(0,u.sprintf)((0,u.__)('Delete "%s"',"tutor"),t.plan_name),description:(0,u.__)("Are you sure you want to delete this plan? This cannot be undone.","tutor"),onConfirm:J,confirmButtonVariant:"danger"}})},[_,t.plan_name,J]);(0,v.useEffect)(()=>{var e=C.current;var t=D.current;if(!e||!t){return}var r=t.scrollWidth>e.clientWidth;if(r){var n=t.scrollWidth-e.clientWidth;b(n);h(n/t2)}},[t.plan_name,t.payment_type,t.recurring_value,t.recurring_interval,t.recurring_limit]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{"data-cy":"subscription-preview-item",css:t8.wrapper({isActionButtonVisible:d||x.isPending,isOverlay:s,marqueeDuration:p,marqueeDistance:m}),style:I,ref:W,"aria-label":(0,u.__)("Subscription plan item","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,(0,o._)((0,a._)({},S,E),{"data-grabber":true,name:"threeDotsVerticalDouble",width:20,height:20})),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:t8.item,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:t8.header,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("p",{css:t8.title,onClick:L,onKeyDown:z,tabIndex:0,"aria-label":(0,u.__)("Edit subscription plan","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{"data-plan-name":true,title:t.plan_name,children:t.plan_name}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.is_featured,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{style:t8.featuredIcon,name:"star",height:20,width:20})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!t.is_enabled,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(tQ,{css:t8.badge,variant:"secondary",title:(0,u.__)("Inactive","tutor"),children:(0,u.__)("Inactive","tutor")})})]}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:t8.actionButtons,"data-action-buttons":true,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(tX/* ["default"] */.Z,{checked:t.is_enabled,onChange:A,loading:x.isPending,size:"small"}),/*#__PURE__*/(0,l/* .jsxs */.BX)(tH/* ["default"] */.Z,{isOpen:d,closePopover:()=>f(false),onClick:()=>f(!d),dotsOrientation:"vertical",size:"small",arrow:true,"data-three-dot":true,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(tH/* ["default"].Option */.Z.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"edit",width:16,height:16}),text:(0,u.__)("Edit","tutor"),"data-cy":"edit-subscription",onClick:L}),/*#__PURE__*/(0,l/* .jsx */.tZ)(tH/* ["default"].Option */.Z.Option,{icon:k.isPending?/*#__PURE__*/(0,l/* .jsx */.tZ)(ee/* ["default"] */.ZP,{size:16}):/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"duplicate",width:16,height:16}),text:(0,u.__)("Duplicate","tutor"),onClick:R}),/*#__PURE__*/(0,l/* .jsx */.tZ)(tH/* ["default"].Option */.Z.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"delete",width:16,height:16}),text:(0,u.__)("Delete","tutor"),isTrash:true,onClick:F})]})]})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:t8.information,ref:C,"aria-label":(0,u.__)("Subscription plan details","tutor"),title:(c=C.current)===null||c===void 0?void 0:c.textContent,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{css:t8.marqueeSlide,ref:D,"data-marquee-content":true,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:O})})})]})]})};var t8={wrapper:e=>{var{isActionButtonVisible:t=false,isOverlay:r=false,marqueeDuration:n=0,marqueeDistance:a=0}=e;return/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";gap:",P/* .spacing["4"] */.W0["4"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"]," ",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["4"] */.W0["4"],";min-width:0;[data-grabber]{align-self:flex-start;margin-top:",P/* .spacing["2"] */.W0["2"],";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";flex-shrink:0;cursor:grab;&:focus-visible{border-radius:",P/* .borderRadius["4"] */.E0["4"],";outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";}}[data-three-dot]{height:20px;width:20px;svg{height:24px;width:24px;flex-shrink:0;}}[data-action-buttons]{opacity:",t?1:0,";background-color:inherit;}[data-marquee-content]{",a>0&&(0,s/* .css */.iv)(tK()),"}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";[data-action-buttons]{opacity:1;}[data-marquee-content]{",a>0&&(0,s/* .css */.iv)(t$(),n,a),"}}&:not(:last-of-type){border-bottom:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";}&:focus-within{[data-action-buttons]{opacity:1;}}",r&&(0,s/* .css */.iv)(t0(),P/* .borderRadius.card */.E0.card,P/* .shadow.drag */.AF.drag))},item:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;min-height:48px;",j/* .styleUtils.display.flex */.i.display.flex("column"),";justify-content:center;gap:",P/* .spacing["4"] */.W0["4"],";min-width:0;"),header:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;gap:",P/* .spacing["8"] */.W0["8"],";min-width:0;"),title:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption("medium"),";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";display:flex;align-items:center;cursor:pointer;[data-plan-name]{",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),";}&:focus-visible{border-radius:",P/* .borderRadius["4"] */.E0["4"],";outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";}"),information:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;max-width:100%;min-width:0;",z/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";display:flex;align-items:center;flex-grow:1;overflow:hidden;position:relative;white-space:nowrap;"),marqueeContent:e=>{var{shouldEllipsis:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",P/* .spacing["4"] */.W0["4"],";white-space:nowrap;&:last-child{margin-right:0;}}",t&&(0,s/* .css */.iv)(t1()))},marqueeSlide:/*#__PURE__*/(0,s/* .css */.iv)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",P/* .spacing["4"] */.W0["4"],";white-space:nowrap;&:last-child{margin-right:0;}}"),featuredIcon:/*#__PURE__*/(0,s/* .css */.iv)("flex-shrink:0;color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";"),actionButtons:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";height:100%;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";"),badge:/*#__PURE__*/(0,s/* .css */.iv)("flex-shrink:0;margin-left:",P/* .spacing["8"] */.W0["8"],";font-size:",P/* .fontSize["11"] */.JB["11"],";padding:0 ",P/* .spacing["6"] */.W0["6"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/controls/For.tsx
var t6=r(36352);// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionPreview.tsx
function t5(){var e=(0,i._)(["\n      border: none;\n    "]);t5=function t(){return e};return e}var t9=e=>{var{courseId:t,isBundle:r=false}=e;var i=tE(t);var s=tO(t);var{showModal:c}=(0,tt/* .useModal */.d)();var[d,f]=(0,v.useState)(null);var h=(0,e5/* .useSensors */.Dy)((0,e5/* .useSensor */.VT)(e5/* .PointerSensor */.we,{activationConstraint:{distance:10}}),(0,e5/* .useSensor */.VT)(e5/* .KeyboardSensor */.Lg,{coordinateGetter:e7/* .sortableKeyboardCoordinates */.is}));var m=(0,er/* .useFormWithGlobalError */.O)({defaultValues:{subscriptions:[]},mode:"onChange"});var{move:b,fields:_}=(0,p/* .useFieldArray */.Dq)({control:m.control,name:"subscriptions",keyName:"_id"});var y=i.data;(0,v.useEffect)(()=>{if(!y){return}if(_.length===0){return m.reset({subscriptions:y.map(e=>(0,o._)((0,a._)({},tk(e)),{isSaved:true}))})}var e=y.map(e=>{var t=_.find(t=>t.id===e.id);if(t){return(0,a._)({},t,(0,o._)((0,a._)({},tk(e)),{isSaved:true}))}return(0,o._)((0,a._)({},tk(e)),{isSaved:true})});m.reset({subscriptions:e});// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,i.isLoading]);if(i.isLoading){return/*#__PURE__*/(0,l/* .jsx */.tZ)(ee/* .LoadingSection */.g4,{})}if(!i.data){return null}return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:re.outer,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:_.length>0,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:re.header,children:(0,u.__)("Subscriptions","tutor")})}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:re.inner({hasSubscriptions:_.length>0}),children:[/*#__PURE__*/(0,l/* .jsxs */.BX)(e5/* .DndContext */.LB,{sensors:h,collisionDetection:e5/* .closestCenter */.pE,measuring:tG/* .droppableMeasuringStrategy */.O,modifiers:[e9/* .restrictToWindowEdges */.hg],onDragStart:e=>{f(e.active.id)},onDragEnd:e=>(0,n._)(function*(){var{active:t,over:r}=e;if(!r){f(null);return}if(t.id!==r.id){var n=_.findIndex(e=>e.id===t.id);var a=_.findIndex(e=>e.id===r.id);var o=(0,X/* .moveTo */.Ao)(_,n,a);b(n,a);s.mutateAsync(o.map(e=>Number(e.id)))}f(null)})(),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(e7/* .SortableContext */.Fo,{items:_,strategy:e7/* .verticalListSortingStrategy */.qw,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(t6/* ["default"] */.Z,{each:_,children:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(t3,{subscription:e,courseId:t,isBundle:r},e.id)})}),/*#__PURE__*/(0,te.createPortal)(/*#__PURE__*/(0,l/* .jsx */.tZ)(e5/* .DragOverlay */.y9,{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:d,children:e=>{var n=_.find(t=>t.id===e);if(!n){return null}return/*#__PURE__*/(0,l/* .jsx */.tZ)(t3,{subscription:n,courseId:t,isBundle:r,isOverlay:true},e)}})}),document.body)]}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:re.emptyState({hasSubscriptions:_.length>0}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{"data-cy":"add-subscription",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"dollarRecurring",width:24,height:24}),onClick:()=>{c({component:tU,props:{title:(0,u.__)("Manage Subscription Plans","tutor"),icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"dollarRecurring",width:24,height:24}),subscription:(0,o._)((0,a._)({},tZ),{plan_order:String(_.length+1),isSaved:false}),courseId:t,isBundle:r}})},children:(0,u.__)("Add Subscription","tutor")})})]})]})};/* ESM default export */const t7=t9;var re={outer:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),inner:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,s/* .css */.iv)("background:",P/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.card */.E0.card,";width:100%;overflow:hidden;",!t&&(0,s/* .css */.iv)(t5()))},header:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;",z/* .typography.body */.c.body(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";"),emptyState:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,s/* .css */.iv)("padding:",t?"".concat(P/* .spacing["8"] */.W0["8"]," ").concat(P/* .spacing["12"] */.W0["12"]):0,";width:100%;& > button{width:100%;}")}};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/config/route-configs.ts + 1 modules
var rt=r(38032);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/services/course.ts
var rr=r(90406);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/types.ts
var rn=r(22456);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CoursePricing.tsx
var ra=(0,L/* .getCourseId */.z)();var ro=()=>{var e,t,r,n;var i=(0,p/* .useFormContext */.Gc)();var s=(0,c/* .useQueryClient */.NL)();var f=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",ra]});var h=(0,e3/* .useNavigate */.s0)();var{state:g}=(0,e3/* .useLocation */.TH)();var m=(0,p/* .useWatch */.qo)({control:i.control,name:"course_price_type"});var b=(0,p/* .useWatch */.qo)({control:i.control,name:"course_product_id"});var _=(0,p/* .useWatch */.qo)({control:i.control,name:"course_selling_option"});var y=(0,p/* .useWatch */.qo)({control:i.control,name:"is_public_course"});var w=s.getQueryData(["CourseDetails",ra]);var{tutor_currency:x}=J/* .tutorConfig */.y;var Z=!!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var k=!!((e=J/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.enable_tax);var C=!!((t=J/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enable_individual_tax_control);var D=!!((r=J/* .tutorConfig.settings */.y.settings)===null||r===void 0?void 0:r.is_tax_included_in_price);var E=(n=J/* .tutorConfig.settings */.y.settings)===null||n===void 0?void 0:n.monetize_by;// prettier-ignore
var S=(0,u.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor");var W=["wc","tutor","edd"].includes(E||"")?[{label:(0,u.__)("Free","tutor"),value:"free"},{label:(0,u.__)("Paid","tutor"),value:"paid"}]:[{label:(0,u.__)("Free","tutor"),value:"free"}];var M=[{label:(0,u.__)("One-time purchase only","tutor"),value:"one_time"},{label:(0,u.__)("Subscription only","tutor"),value:"subscription"},{label:(0,u.__)("Subscription & one-time purchase","tutor"),value:"both"},{label:(0,u.__)("Membership only","tutor"),value:"membership"},{label:(0,u.__)("All","tutor"),value:"all"}];var T=(0,rr/* .useGetWcProductsQuery */.ni)(E,ra?String(ra):"");var I=(0,rr/* .useWcProductDetailsQuery */.vG)(b,String(ra),m,Z?E:undefined);var N=e=>{if(!e||!e.length){return[]}var{course_pricing:t}=w||{};var r=(t===null||t===void 0?void 0:t.product_id)&&t.product_id!=="0"&&t.product_name?{label:t.product_name||"",value:String(t.product_id)}:null;var n;var a=(n=e.map(e=>{var{post_title:t,ID:r}=e;return{label:t,value:String(r)}}))!==null&&n!==void 0?n:[];var o=[r,...a].filter(rn/* .isDefined */.$K);var i=Array.from(new Map(o.map(e=>[e.value,e])).values());return i};(0,v.useEffect)(()=>{if(T.isSuccess&&T.data){var{course_pricing:e}=w||{};if(E==="wc"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!N(T.data).find(t=>{var{value:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[T.data]);(0,v.useEffect)(()=>{if(!J/* .tutorConfig.edd_products */.y.edd_products||!J/* .tutorConfig.edd_products.length */.y.edd_products.length){return}var{course_pricing:e}=w||{};if(E==="edd"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!J/* .tutorConfig.edd_products.find */.y.edd_products.find(t=>{var{ID:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[J/* .tutorConfig.edd_products */.y.edd_products]);(0,v.useEffect)(()=>{if(E!=="wc"){return}if(I.isSuccess&&I.data){if(g===null||g===void 0?void 0:g.isError){h(rt/* .CourseBuilderRouteConfigs.CourseBasics.buildLink */.L.CourseBasics.buildLink(),{state:{isError:false}});return}i.setValue("course_price",I.data.regular_price||"0",{shouldValidate:true});i.setValue("course_sale_price",I.data.sale_price||"0",{shouldValidate:true});return}var e=i.formState.dirtyFields.course_price;var t=i.formState.dirtyFields.course_sale_price;if(!e){i.setValue("course_price","0")}if(!t){i.setValue("course_sale_price","0")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[I.data]);return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_price_type",control:i.control,rules:{validate:e=>{if(e==="paid"&&y){return(0,u.__)("Public courses cannot be paid.","tutor")}return true},deps:["is_public_course"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e6/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Pricing Model","tutor"),options:W,wrapperCss:rl.priceRadioGroup,onSelect:e=>{if(e.value==="paid"&&y){i.setError("course_price_type",{type:"validate",message:(0,u.__)("Public courses cannot be paid.","tutor")});i.setValue("course_price_type","free")}}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(R/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&E==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_selling_option",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Purchase Options","tutor"),options:M}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="wc",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_product_id",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:[{label:(0,u.__)("Select a product","tutor"),value:"-1"},...N(T.data)],helpText:Z?(0,u.__)("You can select an existing WooCommerce product, alternatively, a new WooCommerce product will be created for you.","tutor"):(0,u.__)("You can select an existing WooCommerce product.","tutor"),isSearchable:true,loading:T.isLoading&&!e.field.value,isClearable:true}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="edd",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_product_id",control:i.control,rules:(0,a._)({},(0,Y/* .requiredRule */.n0)()),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:J/* .tutorConfig.edd_products */.y.edd_products?J/* .tutorConfig.edd_products.map */.y.edd_products.map(e=>({label:e.post_title,value:String(e.ID)})):[],helpText:(0,u.__)("Sell your product, process by EDD","tutor"),isSearchable:true,loading:!!f&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&!["subscription","membership"].includes(_)&&(E==="tutor"||Z&&E==="wc"&&b!=="-1"),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rl.coursePriceWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_price",control:i.control,rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e8/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Regular Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!f&&!e.field.value,selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_sale_price",control:i.control,rules:{validate:e=>{if(!e){return true}var t=i.getValues("course_price");if(Number(e)>=Number(t)){return(0,u.__)("Sale price must be less than regular price","tutor")}return true}},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e8/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Sale Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!f&&!e.field.value,selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))})]})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(R/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&E==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!["one_time","membership"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(t7,{courseId:ra})})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="tutor"&&k&&C&&_!=="membership",children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rl.taxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{children:(0,u.__)("Tax Collection","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rl.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:["one_time","both","all"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"tax_on_single",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge tax on one-time purchase ","tutor"),helpText:D&&!e.field.value?S:""}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(R/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&["subscription","both","all"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"tax_on_subscription",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge tax on subscription","tutor"),helpText:D&&!e.field.value?S:""}))})})]})]})})]})};/* ESM default export */const ri=(0,F/* .withVisibilityControl */.v)(ro);var rl={priceRadioGroup:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";"),taxWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["4"] */.W0["4"],";label{",z/* .typography.body */.c.body(),"      color:",P/* .colorTokens.text.title */.Jv.text.title,";}"),checkboxWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["4"] */.W0["4"],";"),taxAlert:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["12"] */.W0["12"],";background-color:",P/* .colorTokens.color.warning["40"] */.Jv.color.warning["40"],";border:1px solid ",P/* .colorTokens.color.warning["50"] */.Jv.color.warning["50"],";border-radius:",P/* .borderRadius["6"] */.E0["6"],";"),alertTitle:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),"    gap:",P/* .spacing["4"] */.W0["4"],";align-items:center;",z/* .typography.caption */.c.caption("medium"),";color:",P/* .colorTokens.color.warning["100"] */.Jv.color.warning["100"],";svg{color:",P/* .colorTokens.design.warning */.Jv.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),"    color:",P/* .colorTokens.color.warning["100"] */.Jv.color.warning["100"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseBasicSidebar.tsx
var rs=(0,L/* .getCourseId */.z)();var rc=()=>{var e,t,r,n;var i=(0,p/* .useFormContext */.Gc)();var s=(0,c/* .useQueryClient */.NL)();var f=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rs]});var[m,b]=(0,v.useState)("");var _=s.getQueryData(["CourseDetails",rs]);var y=J/* .tutorConfig.current_user */.y.current_user;var w=(0,X/* .isAddonEnabled */.ro)(R/* .Addons.TUTOR_MULTI_INSTRUCTORS */.AO.TUTOR_MULTI_INSTRUCTORS);var x=!!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var Z=((e=J/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var k=((t=J/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.instructor_can_change_course_author)!=="off";var C=((r=J/* .tutorConfig.settings */.y.settings)===null||r===void 0?void 0:r.instructor_can_manage_co_instructors)!=="off";var D=String(y.data.id)===String((_===null||_===void 0?void 0:_.post_author.ID)||"");var E=y.roles.includes(R/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var S=((_===null||_===void 0?void 0:_.course_instructors)||[]).find(e=>String(e.id)===String(y.data.id));var W=(0,X/* .isAddonEnabled */.ro)(R/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&((n=J/* .tutorConfig.settings */.y.settings)===null||n===void 0?void 0:n.membership_only_mode);var M=i.watch("post_author");var T=x&&w&&(E||S&&C);var B=E||D&&k;var I=(0,p/* .useWatch */.qo)({control:i.control,name:"visibility"});var O=[{label:(0,u.__)("Public","tutor"),value:"publish"},{label:(0,u.__)("Password Protected","tutor"),value:"password_protected"},{label:(0,u.__)("Private","tutor"),value:"private"}];var A=e1(m);var L=e4(String(rs),w);var P=((_===null||_===void 0?void 0:_.course_instructors)||[]).map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}));var z=[...P,...L.data||[]].filter(e=>String(e.id)!==String(M===null||M===void 0?void 0:M.id));var F=()=>{var e=_===null||_===void 0?void 0:_.post_author;var t=i.getValues("course_instructors");var r=!!t.find(t=>String(t.id)===String(e===null||e===void 0?void 0:e.ID));var n={id:Number(e===null||e===void 0?void 0:e.ID),name:e===null||e===void 0?void 0:e.display_name,email:e.user_email,avatar_url:e===null||e===void 0?void 0:e.tutor_profile_photo_url,isRemoveAble:String(e===null||e===void 0?void 0:e.ID)!==String(y.data.id)};var a=r?t:[...t,n];i.setValue("course_instructors",a)};return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ru.sidebar,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:ru.statusAndDate,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"visibility",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Visibility","tutor"),placeholder:(0,u.__)("Select visibility status","tutor"),options:O,leftIcon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"eye",width:32,height:32}),loading:!!f&&!e.field.value,onChange:()=>{i.setValue("post_password","")}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:_===null||_===void 0?void 0:_.post_modified,children:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:ru.updatedOn,children:/* translators: %s is the last updated date */(0,u.sprintf)((0,u.__)("Last updated on %s","tutor"),(0,h["default"])(new Date(e),R/* .DateFormats.dayMonthYear */.E_.dayMonthYear)||"")})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:I==="password_protected",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"post_password",control:i.control,rules:{required:(0,u.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Password","tutor"),placeholder:(0,u.__)("Enter password","tutor"),type:"password",isPassword:true,loading:!!f&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(V,{visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS */.j9.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"thumbnail",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(N/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Featured Image","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),J/* .tutorConfig.max_upload_size */.y.max_upload_size),generateWithAi:!x||Z,loading:!!f&&!e.field.value,visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.FEATURED_IMAGE */.j9.COURSE_BUILDER.BASICS.FEATURED_IMAGE}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"video",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e$/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Intro Video","tutor"),buttonText:(0,u.__)("Upload Video","tutor"),infoText:(0,u.sprintf)((0,u.__)("MP4, and WebM formats, up to %s","tutor"),J/* .tutorConfig.max_upload_size */.y.max_upload_size),loading:!!f&&!e.field.value,visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INTRO_VIDEO */.j9.COURSE_BUILDER.BASICS.INTRO_VIDEO}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!W,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(ri,{visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.PRICING_OPTIONS */.j9.COURSE_BUILDER.BASICS.PRICING_OPTIONS})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_categories",control:i.control,defaultValue:[],render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eD,(0,o._)((0,a._)({},e),{label:(0,u.__)("Categories","tutor"),visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.CATEGORIES */.j9.COURSE_BUILDER.BASICS.CATEGORIES}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_tags",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eG,(0,o._)((0,a._)({},e),{label:(0,u.__)("Tags","tutor"),placeholder:(0,u.__)("Add tags","tutor"),visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.TAGS */.j9.COURSE_BUILDER.BASICS.TAGS}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"post_author",control:i.control,render:e=>{var t;var r;return/*#__PURE__*/(0,l/* .jsx */.tZ)(eJ,(0,o._)((0,a._)({},e),{label:(0,u.__)("Author","tutor"),options:(r=(t=A.data)===null||t===void 0?void 0:t.map(e=>({id:e.id,name:e.name||"",email:e.email||"",avatar_url:e.avatar_url||""})))!==null&&r!==void 0?r:[],placeholder:(0,u.__)("Search to add author","tutor"),isSearchable:true,disabled:!B,loading:A.isLoading,onChange:F,handleSearchOnChange:e=>{b(e)},visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.AUTHOR */.j9.COURSE_BUILDER.BASICS.AUTHOR}))}}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:T,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_instructors",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eJ,(0,o._)((0,a._)({},e),{label:(0,u.__)("Instructors","tutor"),options:z,placeholder:(0,u.__)("Search to add instructor","tutor"),isSearchable:true,isMultiSelect:true,loading:L.isLoading&&!e.field.value,emptyStateText:(0,u.__)("No instructors added.","tutor"),isInstructorMode:true,visibilityKey:R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INSTRUCTORS */.j9.COURSE_BUILDER.BASICS.INSTRUCTORS}))})})]})};/* ESM default export */const rd=rc;var ru={sidebar:/*#__PURE__*/(0,s/* .css */.iv)("border-left:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";min-height:calc(100vh - ",P/* .headerHeight */.J9,"px);padding-left:",P/* .spacing["32"] */.W0["32"],";padding-block:",P/* .spacing["24"] */.W0["24"],";display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{border-left:none;border-top:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";padding-block:",P/* .spacing["16"] */.W0["16"],";padding-left:0;}"),statusAndDate:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";"),updatedOn:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),priceRadioGroup:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Tabs.tsx
var rv=r(63189);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiSelectInput.tsx
function rf(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);rf=function t(){return e};return e}var rp=e=>{var{field:t,fieldState:r,label:n,placeholder:i="",disabled:s,readOnly:c,loading:d,helpText:f,removeOptionsMinWidth:p=false,options:h}=e;var g=t.value||[];var m=h.filter(e=>g.includes(e.value));var[b,_]=(0,v.useState)("");var y=(0,et/* .useDebounce */.N)(b);var w=h.filter(e=>e.label.toLowerCase().includes(y.toLowerCase()));var[x,Z]=(0,v.useState)(false);var k=(0,v.useRef)(null);var C=(e,r)=>{if(e){t.onChange([...g,r])}else{t.onChange(g.filter(e=>e!==r))}};return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{fieldState:r,field:t,label:n,disabled:s,readOnly:c,loading:d,helpText:f,children:e=>{var{css:t}=e,r=(0,eT._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rg.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:rg.inputWrapper,ref:k,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},r),{css:[t,rg.input],onClick:()=>Z(true),autoComplete:"off",readOnly:c,placeholder:i,value:b,onChange:e=>{_(e.target.value)}}))}),g.length>0&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:rg.selectedOptionsWrapper,children:m.map(e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eF,{label:e.label,onClick:()=>C(false,e.value)},e.value))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(eg/* ["default"] */.Z,{triggerRef:k,isOpen:x,closePopover:()=>Z(false),animationType:em/* .AnimationType.slideDown */.ru.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("ul",{css:[rg.options(p)],children:/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:w.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:rg.notTag,children:(0,u.__)("No option available.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(t6/* ["default"] */.Z,{each:w,children:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)("li",{css:rg.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.tZ)($/* ["default"] */.Z,{label:e.label,checked:!!g.find(t=>t===e.value),onChange:t=>C(t,e.value)})},e.value)})})})})]})}})};/* ESM default export */const rh=rp;var rg={mainWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;"),notTag:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body(),";width:100%;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";:focus{outline:none;box-shadow:",P/* .shadow.focus */.AF.focus,";}"),selectedOptionsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-wrap:wrap;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),options:e=>/*#__PURE__*/(0,s/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";",!e&&(0,s/* .css */.iv)(rf())),optionItem:/*#__PURE__*/(0,s/* .css */.iv)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",P/* .spacing["8"] */.W0["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),addTag:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",z/* .typography.body */.c.body(),"    line-height:",P/* .lineHeight["24"] */.Nv["24"],";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";width:100%;padding:",P/* .spacing["8"] */.W0["8"],";&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ContentDripSettings.tsx
var rm=()=>{var e=(0,p/* .useFormContext */.Gc)();var t=[{label:(0,u.__)("Schedule course content by date","tutor"),value:"unlock_by_date"},{label:(0,u.__)("Content available after X days from enrollment","tutor"),value:"specific_days"},{label:(0,u.__)("Course content available sequentially","tutor"),value:"unlock_sequentially"},{label:(0,u.__)("Course content unlocked after finishing prerequisites","tutor"),value:"after_finishing_prerequisites",labelCss:/*#__PURE__*/(0,s/* .css */.iv)("align-items:start;span{top:3px;}")},{label:(0,u.__)("None","tutor"),value:""}];if(!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url){return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:r_.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"crown",width:72,height:72}),/*#__PURE__*/(0,l/* .jsx */.tZ)("h6",{css:z/* .typography.body */.c.body("medium"),children:(0,u.__)("Content Drip is a pro feature","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:r_.dripNoProDescription,children:(0,u.__)("You can schedule your course content using  content drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"crown",width:24,height:24}),onClick:()=>{window.open(J/* ["default"].TUTOR_PRICING_PAGE */.Z.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,u.__)("Get Tutor LMS Pro","tutor")})]})}if(!(0,X/* .isAddonEnabled */.ro)(R/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)){return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:r_.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"contentDrip",width:72,height:72,style:r_.dripIcon}),/*#__PURE__*/(0,l/* .jsx */.tZ)("h6",{css:z/* .typography.body */.c.body("medium"),children:(0,u.__)("Activate the “Content Drip” addon to use this feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:r_.dripNoProDescription,children:(0,u.__)("Control when students can access lessons and quizzes using the Content Drip feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"linkExternal",width:24,height:24}),onClick:()=>{window.open(J/* ["default"].TUTOR_ADDONS_PAGE */.Z.TUTOR_ADDONS_PAGE,"_blank","noopener")},children:(0,u.__)("Enable Content Drip Addon","tutor")})]})}return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:r_.dripWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("h6",{css:r_.dripTitle,children:(0,u.__)("Content Drip Type","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:r_.dripSubTitle,children:(0,u.__)("You can schedule your course content using one of the following Content Drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"contentDripType",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(e6/* ["default"] */.Z,(0,o._)((0,a._)({},e),{options:t,wrapperCss:r_.radioWrapper}))})]})};/* ESM default export */const rb=rm;var r_={dripWrapper:/*#__PURE__*/(0,s/* .css */.iv)("background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["24"] */.W0["24"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["32"] */.W0["32"],";min-height:400px;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),dripTitle:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.body */.c.body("medium"),";margin-bottom:",P/* .spacing["4"] */.W0["4"],";"),dripSubTitle:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";margin-bottom:",P/* .spacing["16"] */.W0["16"],";"),radioWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),dripNoProWrapper:/*#__PURE__*/(0,s/* .css */.iv)("min-height:400px;background:",P/* .colorTokens.background.white */.Jv.background.white,";display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",P/* .spacing["4"] */.W0["4"],";padding:",P/* .spacing["24"] */.W0["24"],";text-align:center;"),dripNoProDescription:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";max-width:320px;margin:0 auto ",P/* .spacing["12"] */.W0["12"],";"),dripIcon:/*#__PURE__*/(0,s/* .css */.iv)("color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/EnrollmentSettings.tsx
function ry(){var e=(0,i._)(["\n      padding-bottom: ",";\n    "]);ry=function t(){return e};return e}var rw=(0,L/* .getCourseId */.z)();var rx=()=>{var e,t;var r=!!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var n=(0,p/* .useFormContext */.Gc)();var i=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rw]});var s=(0,p/* .useWatch */.qo)({control:n.control,name:"course_enrollment_period"});var c=(0,p/* .useWatch */.qo)({control:n.control,name:"enrollment_starts_date"});var f=(0,p/* .useWatch */.qo)({control:n.control,name:"enrollment_starts_time"});var h=(0,p/* .useWatch */.qo)({control:n.control,name:"enrollment_ends_date"});var g=(0,p/* .useWatch */.qo)({control:n.control,name:"isScheduleEnabled"});var m=(0,p/* .useWatch */.qo)({control:n.control,name:"schedule_date"});var b=(0,p/* .useWatch */.qo)({control:n.control,name:"schedule_time"});var[_,y]=(0,v.useState)(false);var w=(0,X/* .isAddonEnabled */.ro)(R/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&((e=J/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.membership_only_mode);var x=(0,X/* .isAddonEnabled */.ro)(R/* .Addons.ENROLLMENT */.AO.ENROLLMENT);var k=new Date("".concat(m," ").concat(b));return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rk.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"maximum_students",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Maximum Student","tutor"),helpText:(0,u.__)("Number of students that can enrol in this course. Set 0 for no limits.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.BX)(U/* ["default"] */.Z,{when:r&&x,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!w&&((t=J/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enrollment_expiry_enabled)==="on",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enrollment_expiry",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enrollment Expiration","tutor"),helpText:(0,u.__)("Student's enrollment will be removed after this number of days. Set 0 for lifetime enrollment.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rk.enrollmentPeriod({isEnabled:s}),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_enrollment_period",control:n.control,rules:{deps:["schedule_date","schedule_time",...c?["enrollment_starts_date"]:[],...f?["enrollment_starts_time"]:[],"enrollment_ends_date","enrollment_ends_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(O/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Course Enrollment Period","tutor"),loading:!!i&&!e.field.value,onChange:e=>{if(!e){n.clearErrors(["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"])}}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:s,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rk.enrollmentDateWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rk.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{htmlFor:"enrollment_starts_at",children:(0,u.__)("Start Date","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{id:"enrollment_starts_at",css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enrollment_starts_date",control:n.control,rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:{invalidDate:Y/* .invalidDateRule */.Ek,isAfterScheduleDate:e=>{if(g&&k&&(0,Z["default"])(D(new Date(e)),D(new Date(m)))){return(0,u.__)("Start date should be after the schedule date","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(I/* ["default"] */.Z,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("Start Date","tutor"),dateFormat:R/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enrollment_starts_time",control:n.control,rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:{invalidTime:Y/* .invalidTimeRule */.xB,isAfterScheduleTime:e=>{if(g&&k&&(0,Z["default"])(new Date("".concat(c," ").concat(e)),k)){return(0,u.__)("Start time should be after the schedule time","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_date","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(A/* ["default"] */.Z,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:_||h,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"secondary",size:"small",onClick:()=>y(true),disabled:!!i||!c||!f,children:(0,u.__)("Add End Date","tutor")})}),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rk.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("label",{htmlFor:"enrollment_ends_at",children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:(0,u.__)("End Date","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>{y(false);n.setValue("enrollment_ends_date","");n.setValue("enrollment_ends_time","")},css:rk.removeButton,children:(0,u.__)("Remove","tutor")})]}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{id:"enrollment_ends_at",css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enrollment_ends_date",control:n.control,rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:{invalidDate:Y/* .invalidDateRule */.Ek,checkEndDate:e=>{if((0,Z["default"])(D(new Date(e)),D(new Date(c)))){return(0,u.__)("End date should be after the start date","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(I/* ["default"] */.Z,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("End Date","tutor"),disabledBefore:c,dateFormat:R/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enrollment_ends_time",control:n.control,rules:(0,o._)((0,a._)({},(0,Y/* .requiredRule */.n0)()),{validate:{invalidTime:Y/* .invalidTimeRule */.xB,checkEndTime:e=>{if(c&&h&&f&&!(0,Z["default"])(new Date("".concat(c," ").concat(f)),new Date("".concat(h," ").concat(e)))){return(0,u.__)("End time should be after the start time","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(A/* ["default"] */.Z,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]})})]})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"pause_enrollment",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Pause Enrollment","tutor"),description:(0,u.__)("If you pause enrolment, students will no longer be able to enroll in the course.","tutor")}))})]})]})};/* ESM default export */const rZ=rx;var rk={wrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["16"] */.W0["16"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["24"] */.W0["24"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["32"] */.W0["32"],";min-height:400px;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),enrollmentPeriod:e=>{var{isEnabled:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)("padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";",t&&(0,s/* .css */.iv)(ry(),P/* .spacing["16"] */.W0["16"]))},enrollmentDateWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["16"] */.W0["16"],";"),enrollmentDate:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";label{",j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;justify-content:space-between;",z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";}"),removeButton:/*#__PURE__*/(0,s/* .css */.iv)("margin-left:auto;padding:0;")};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
var rC=r(72501);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseSettings.tsx
var rD=(0,L/* .getCourseId */.z)();var rE=()=>{var e,t;var r=(0,p/* .useFormContext */.Gc)();var n=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rD]});var i=(0,rC/* ["default"] */.Z)(R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.GENERAL */.j9.COURSE_BUILDER.BASICS.OPTIONS.GENERAL);var c=(0,rC/* ["default"] */.Z)(R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP */.j9.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP);var f=(0,rC/* ["default"] */.Z)(R/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT */.j9.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT);var h=r.watch("contentDripType");var m=r.watch("enable_tutor_bp");var b=r.watch("course_price_type")==="paid";var _=[i&&{label:(0,u.__)("General","tutor"),value:"general",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"settings",width:24,height:24})},c&&{label:(0,u.__)("Content Drip","tutor"),value:"content_drip",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"contentDrip",width:24,height:24}),activeBadge:!!h},f&&{label:(0,u.__)("Enrollment","tutor"),value:"enrollment",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"update",width:24,height:24})},(0,X/* .isAddonEnabled */.ro)(R/* .Addons.BUDDYPRESS */.AO.BUDDYPRESS)&&{label:(0,u.__)("BuddyPress","tutor"),value:"buddyPress",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"buddyPress",width:24,height:24}),activeBadge:m}].filter(Boolean);var[y,w]=(0,v.useState)(((e=_[0])===null||e===void 0?void 0:e.value)||"general");if(!_.length){return null}var x=R/* .CURRENT_VIEWPORT.isAboveSmallMobile */.iM.isAboveSmallMobile?_:_.map(e=>(0,o._)((0,a._)({},e),{label:y===e.value?e.label:""}));var Z=(J/* .tutorConfig.difficulty_levels */.y.difficulty_levels||[]).map(e=>({label:e.label,value:e.value}));return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{css:z/* .typography.caption */.c.caption(),children:(0,u.__)("Options","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{"data-cy":"course-settings",css:rW.courseSettings,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(rv/* ["default"] */.Z,{tabList:x,activeTab:y,onChange:w,orientation:!R/* .CURRENT_VIEWPORT.isAboveSmallMobile */.iM.isAboveSmallMobile?"horizontal":"vertical",wrapperCss:/*#__PURE__*/(0,s/* .css */.iv)("button{min-width:auto;}")}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:{borderLeft:"1px solid ".concat(P/* .colorTokens.stroke.divider */.Jv.stroke.divider)},children:[y==="general"&&/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rW.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"course_level",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eM/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Difficulty Level","tutor"),placeholder:(0,u.__)("Select Difficulty Level","tutor"),helpText:(0,u.__)("Course difficulty level","tutor"),options:Z,isClearable:false,loading:!!n&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rW.courseAndQna,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"is_public_course",control:r.control,rules:{validate:e=>{if(e&&b){return(0,u.__)("Paid courses cannot be public.","tutor")}return true},deps:["course_price_type"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(O/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Public Course","tutor"),helpText:(0,u.__)("Make This Course Public. No Enrollment Required.","tutor"),loading:!!n&&!e.field.value,onChange:e=>{if(b&&e){r.setValue("is_public_course",false);r.setError("is_public_course",{type:"validate",message:(0,u.__)("Paid courses cannot be public.","tutor")})}}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:((t=J/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enable_q_and_a_on_course)==="on",children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enable_qna",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(O/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Q&A","tutor"),helpText:(0,u.__)("Enable Q&A section for your course","tutor"),loading:!!n&&!e.field.value}))})})]})]}),y==="content_drip"&&/*#__PURE__*/(0,l/* .jsx */.tZ)(rb,{}),y==="enrollment"&&/*#__PURE__*/(0,l/* .jsx */.tZ)(rZ,{}),y==="buddyPress"&&/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rW.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"enable_tutor_bp",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(B/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enable BuddyPress group activity feeds","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"bp_attached_group_ids",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(rh,(0,o._)((0,a._)({},e),{label:(0,u.__)("BuddyPress Groups","tutor"),helpText:(0,u.__)("Assign this course to BuddyPress Groups","tutor"),placeholder:(0,u.__)("Search BuddyPress Groups","tutor"),options:(J/* .tutorConfig.bp_groups */.y.bp_groups||[]).map(e=>({label:e.name,value:String(e.id)})),loading:!!n&&!e.field.value}))})]})]})]})]})};/* ESM default export */const rS=rE;var rW={courseSettings:/*#__PURE__*/(0,s/* .css */.iv)("display:grid;grid-template-columns:200px 1fr;margin-top:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["6"] */.E0["6"],";background-color:",P/* .colorTokens.background["default"] */.Jv.background["default"],";overflow:hidden;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{grid-template-columns:1fr;}"),settingsOptions:/*#__PURE__*/(0,s/* .css */.iv)("min-height:400px;display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["48"] */.W0["48"]," ",P/* .spacing["32"] */.W0["32"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),courseAndQna:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["32"] */.W0["32"],";margin-top:",P/* .spacing["12"] */.W0["12"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/Navigator.tsx
var rM=r(88311);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormEditableAlias.tsx
var rT=e=>{var{field:t,fieldState:r,label:n="",baseURL:i,onChange:s}=e;var{value:c=""}=t;var d="".concat(i,"/").concat(c);var[f,p]=(0,v.useState)(false);var[h,m]=(0,v.useState)(d);var b="".concat(i,"/");var[_,y]=(0,v.useState)(c);(0,v.useEffect)(()=>{if(i){m("".concat(i,"/").concat(c))}if(c){y(c)}},[i,c]);return/*#__PURE__*/(0,l/* .jsx */.tZ)(ep/* ["default"] */.Z,{field:t,fieldState:r,children:e=>{return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rB.aliasWrapper,children:[n&&/*#__PURE__*/(0,l/* .jsxs */.BX)("label",{css:rB.label,children:[n,": "]}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:rB.linkWrapper,children:!f?/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("a",{"data-cy":"course-slug",href:h,target:"_blank",css:rB.link,title:h,rel:"noreferrer",children:h}),/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{css:rB.iconWrapper,type:"button",onClick:()=>p(e=>!e),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"edit",width:24,height:24,style:rB.editIcon})})]}):/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{css:rB.prefix,title:b,children:b}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rB.editWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,o._)((0,a._)({},e),{className:"tutor-input-field",css:rB.editable,type:"text",value:_,onChange:e=>y(e.target.value),autoComplete:"off"})),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{variant:"secondary",isOutlined:true,size:"small",buttonCss:rB.saveBtn,onClick:()=>{p(false);t.onChange((0,X/* .convertToSlug */.k6)(_.replace(i,"")));s===null||s===void 0?void 0:s((0,X/* .convertToSlug */.k6)(_.replace(i,"")))},children:(0,u.__)("Save","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(W/* ["default"] */.Z,{buttonContentCss:rB.cancelButton,variant:"text",size:"small",onClick:()=>{p(false);y(c)},children:(0,u.__)("Cancel","tutor")})]})]})})]})}})};var rB={aliasWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;min-height:32px;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{flex-direction:column;gap:",P/* .spacing["4"] */.W0["4"],";align-items:flex-start;}"),label:/*#__PURE__*/(0,s/* .css */.iv)("flex-shrink:0;",z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";margin:0px;"),linkWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;width:fit-content;font-size:",P/* .fontSize["14"] */.JB["14"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{gap:",P/* .spacing["4"] */.W0["4"],";flex-wrap:wrap;}"),link:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";text-decoration:none;",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"    max-width:fit-content;word-break:break-all;"),iconWrapper:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,"    margin-left:",P/* .spacing["8"] */.W0["8"],";height:24px;width:24px;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";border-radius:",P/* .borderRadius["4"] */.E0["4"],";:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,"}"),editIcon:/*#__PURE__*/(0,s/* .css */.iv)("color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";:hover{color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";}"),prefix:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),"    color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"    word-break:break-all;max-width:fit-content;"),editWrapper:/*#__PURE__*/(0,s/* .css */.iv)("margin-left:",P/* .spacing["2"] */.W0["2"],";display:flex;align-items:center;width:fit-content;"),editable:/*#__PURE__*/(0,s/* .css */.iv)("&.tutor-input-field{",z/* .typography.caption */.c.caption(),"      background:",P/* .colorTokens.background.white */.Jv.background.white,";width:208px;height:32px;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";border-radius:",P/* .borderRadius.input */.E0.input,";margin-right:",P/* .spacing["8"] */.W0["8"],";outline:none;&:focus{border-color:",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";box-shadow:none;outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}"),saveBtn:/*#__PURE__*/(0,s/* .css */.iv)("flex-shrink:0;margin-right:",P/* .spacing["8"] */.W0["8"],";"),cancelButton:/*#__PURE__*/(0,s/* .css */.iv)("color:",P/* .colorTokens.text.brand */.Jv.text.brand,";")};/* ESM default export */const rI=rT;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var rN=r(3960);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var rO=r(19646);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var rA=r(75537);// EXTERNAL MODULE: ./assets/react/v3/shared/services/course.ts
var rL=r(19918);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/pages/CourseBasic.tsx
function rJ(){var e=(0,i._)(["\n      z-index: ",";\n    "]);rJ=function t(){return e};return e}var rR=(0,L/* .getCourseId */.z)();var rP=false;var rz=()=>{var e;var{fields:t}=(0,rA/* .useCourseBuilderSlot */.l)();var r=(0,p/* .useFormContext */.Gc)();var i=(0,c/* .useQueryClient */.NL)();var s=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rR]});var f=(0,rr/* .useUpdateCourseMutation */.mG)();var h=(0,rL/* .useUnlinkPageBuilderMutation */.Fv)();var[g,m]=(0,v.useState)(false);var b=i.getQueryData(["CourseDetails",rR]);var _=!!J/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var y=((e=J/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var w=r.watch("post_status");var x=r.watch("editor_used");return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rF.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rF.mainForm({isWpEditorFullScreen:g}),children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rF.fieldsWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:rF.titleAndSlug,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"post_title",control:r.control,rules:(0,a._)({},(0,Y/* .requiredRule */.n0)(),(0,Y/* .maxLimitRule */.T9)(255)),render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(eh/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Title","tutor"),placeholder:(0,u.__)("ex. Learn Photoshop CS6 from scratch","tutor"),isClearable:true,generateWithAi:!_||y,loading:!!s&&!e.field.value,onChange:e=>{if(w==="draft"&&!rP){r.setValue("post_name",(0,X/* .convertToSlug */.k6)(String(e)),{shouldValidate:true,shouldDirty:true})}}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"post_name",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,l/* .jsx */.tZ)(rI,(0,o._)((0,a._)({},e),{label:(0,u.__)("Course URL","tutor"),baseURL:"".concat(J/* .tutorConfig.home_url */.y.home_url,"/").concat((t=J/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.course_permalink_base),onChange:()=>{rP=true}}))}})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .Controller */.Qr,{name:"post_content",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.tZ)(rN/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,u.__)("Description","tutor"),loading:!!s&&!e.field.value,max_height:280,generateWithAi:!_||y,hasCustomEditorSupport:true,editorUsed:x,editors:b===null||b===void 0?void 0:b.editors,onCustomEditorButtonClick:()=>{return r.handleSubmit(e=>{var n=(0,rr/* .convertCourseDataToPayload */.iC)(e,(0,X/* .findSlotFields */.hk)({fields:t.Basic},{fields:t.Additional}));return f.mutateAsync((0,o._)((0,a._)({course_id:rR},n),{post_status:(0,X/* .determinePostStatus */.Xl)(r.getValues("post_status"),r.getValues("visibility"))}))})()},onBackToWPEditorClick:e=>(0,n._)(function*(){return h.mutateAsync({courseId:rR,builder:e}).then(e=>{r.setValue("editor_used",{name:"classic",label:(0,u.__)("Classic Editor","tutor"),link:""});return e})})(),onFullScreenChange:e=>{m(e)}}))}),/*#__PURE__*/(0,l/* .jsx */.tZ)(rO/* ["default"] */.Z,{section:"Basic.after_description",form:r}),/*#__PURE__*/(0,l/* .jsx */.tZ)(rS,{}),/*#__PURE__*/(0,l/* .jsx */.tZ)(rO/* ["default"] */.Z,{section:"Basic.after_settings",form:r})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:R/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(rM/* ["default"] */.Z,{styleModifier:rF.navigator})})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(rd,{}),/*#__PURE__*/(0,l/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!R/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(rM/* ["default"] */.Z,{styleModifier:rF.navigator})})]})};/* ESM default export */const rU=rz;var rF={wrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:grid;grid-template-columns:1fr 338px;gap:",P/* .spacing["32"] */.W0["32"],";width:100%;",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{grid-template-columns:1fr;gap:0;}"),mainForm:e=>{var{isWpEditorFullScreen:t}=e;return/*#__PURE__*/(0,s/* .css */.iv)("padding-block:",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["24"] */.W0["24"],";align-self:start;top:",P/* .headerHeight */.J9,"px;position:sticky;",t&&(0,s/* .css */.iv)(rJ(),P/* .zIndex.header */.W5.header+1)," ",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{padding-top:",P/* .spacing["16"] */.W0["16"],";position:unset;}")},fieldsWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["24"] */.W0["24"],";"),titleAndSlug:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),sidebar:/*#__PURE__*/(0,s/* .css */.iv)("border-left:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";min-height:calc(100vh - ",P/* .headerHeight */.J9,"px);padding-left:",P/* .spacing["32"] */.W0["32"],";padding-block:",P/* .spacing["24"] */.W0["24"],";display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";"),priceRadioGroup:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";"),navigator:/*#__PURE__*/(0,s/* .css */.iv)("margin-top:",P/* .spacing["40"] */.W0["40"],";",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{margin-top:0;}"),statusAndDate:/*#__PURE__*/(0,s/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";"),updatedOn:/*#__PURE__*/(0,s/* .css */.iv)(z/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";")}},69602:function(e,t,r){r.d(t,{Z:()=>w});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(58865);/* ESM import */var i=r(35944);/* ESM import */var l=r(60860);/* ESM import */var s=r(76487);/* ESM import */var c=r(34403);/* ESM import */var d=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);function f(){var e=(0,o._)(["\n      cursor: not-allowed;\n    "]);f=function t(){return e};return e}function p(){var e=(0,o._)(["\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,o._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function g(){var e=(0,o._)(["\n        background-color: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,o._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);m=function t(){return e};return e}function b(){var e=(0,o._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/v().forwardRef((e,t)=>{var{id:r=(0,c/* .nanoid */.x0)(),name:o,labelCss:l,inputCss:s,label:d="",checked:u,value:f,disabled:p=false,onChange:h,onBlur:g,isIndeterminate:m=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!m?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/v().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.BX)("label",{htmlFor:r,css:[y.container({disabled:p}),l],children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:o,type:"checkbox",value:f,checked:!!u,disabled:p,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:g,css:[s,y.checkbox({label:!!d,isIndeterminate:m,disabled:p})]})),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:[y.label({isDisabled:p}),l],title:_(d),children:d})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",l/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,d/* .css */.iv)(f()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)(s/* .typography.caption */.c.caption(),";color:",l/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,d/* .css */.iv)(p(),l/* .colorTokens.text.disable */.Jv.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,d/* .css */.iv)(h(),l/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';background-color:",l/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",l/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",l/* .colorTokens.icon.brand */.Jv.icon.brand,";border-radius:",l/* .borderRadius["4"] */.E0["4"],";",n&&(0,d/* .css */.iv)(g(),l/* .colorTokens.icon.disable["default"] */.Jv.icon.disable["default"]),"}",r&&(0,d/* .css */.iv)(m(),l/* .colorTokens.brand.blue */.Jv.brand.blue,l/* .colorTokens.stroke.white */.Jv.stroke.white)," ",n&&(0,d/* .css */.iv)(b(),l/* .colorTokens.stroke.disable */.Jv.stroke.disable),"    &:focus-visible{& + span{border-radius:",l/* .borderRadius["2"] */.E0["2"],";outline:2px solid ",l/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")}};/* ESM default export */const w=_},30647:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(70917);/* ESM import */var i=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(i);/* ESM import */var s=r(86138);/* ESM import */var c=/*#__PURE__*/r.n(s);/* ESM import */var d=r(19398);/* ESM import */var u=r(26815);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(2613);function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,i.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:l,uploadHandler:s,clearHandler:c,emptyImageCss:f,previewImageCss:g,overlayCss:m,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:Z=true}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:l===null||l===void 0?void 0:l.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),f],onClick:e=>{e.stopPropagation();if(x){return}s()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();s()}},children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),g],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:e,alt:l===null||l===void 0?void 0:l.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[w.hoverPreview,m],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,o/* .css */.iv)("margin-top:",Z&&v/* .spacing["16"] */.W0["16"],";"),onClick:e=>{e.stopPropagation();s()},"data-cy":"replace-media",children:_||(0,i.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:Z,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();c()},"data-cy":"clear-media",children:(0,i.__)("Remove","tutor")})})]})]})}})})};/* ESM default export */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",v/* .spacing["8"] */.W0["8"],";border:1px dashed ",v/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",v/* .borderRadius["8"] */.E0["8"],";background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,o/* .css */.iv)(g()),"    svg{color:",v/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover svg{color:",!r&&v/* .colorTokens.brand.blue */.Jv.brand.blue,";}")},buttonText:/*#__PURE__*/(0,o/* .css */.iv)("color:",v/* .colorTokens.text.brand */.Jv.text.brand,";"),infoTexts:/*#__PURE__*/(0,o/* .css */.iv)(f/* .typography.tiny */.c.tiny(),";color:",v/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.iv)("width:100%;height:168px;border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",v/* .borderRadius["8"] */.E0["8"],";overflow:hidden;position:relative;background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";",t==="small"&&(0,o/* .css */.iv)(m()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,o/* .css */.iv)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";opacity:0;position:absolute;inset:0;background-color:",c()(v/* .colorTokens.color.black.main */.Jv.color.black.main,.6),";button:first-of-type{box-shadow:",v/* .shadow.button */.AF.button,";}button:last-of-type:not(:only-of-type){color:",v/* .colorTokens.text.white */.Jv.text.white,";box-shadow:none;}")}},86766:function(e,t,r){r.d(t,{Z:()=>p});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(70917);/* ESM import */var i=r(60860);/* ESM import */var l=r(17106);/* ESM import */var s=r(22456);/* ESM import */var c=r(26815);function d(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);v=function t(){return e};return e}var f=e=>{var{children:t,content:r,size:n="regular",textOnly:o}=e;return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:g.wrapper({hasChildren:(0,s/* .isDefined */.$K)(t),size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{when:!(0,s/* .isDefined */.$K)(t)&&!o,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:h[n].iconSize,height:h[n].iconSize})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:g.content({hasChildren:(0,s/* .isDefined */.$K)(t),size:n,textOnly:o}),children:(0,s/* .isDefined */.$K)(t)?/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:n==="tiny"?h[n].iconSize:16}):r})]})};/* ESM default export */const p=f;var h={tiny:{borderRadius:i/* .spacing["10"] */.W0["10"],height:i/* .spacing["10"] */.W0["10"],gap:i/* .spacing["2"] */.W0["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:i/* .spacing["16"] */.W0["16"],height:i/* .spacing["16"] */.W0["16"],gap:i/* .spacing["4"] */.W0["4"],iconSize:16,fontSize:i/* .fontSize["10"] */.JB["10"],lineHeight:i/* .lineHeight["16"] */.Nv["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:i/* .fontSize["14"] */.JB["14"],lineHeight:i/* .lineHeight["18"] */.Nv["18"]},large:{borderRadius:"26px",height:"26px",gap:i/* .spacing["6"] */.W0["6"],iconSize:26,fontSize:i/* .fontSize["16"] */.JB["16"],lineHeight:i/* .lineHeight["26"] */.Nv["26"]}};var g={wrapper:e=>{var{hasChildren:t,size:r="regular"}=e;return/*#__PURE__*/(0,o/* .css */.iv)("position:relative;svg{flex-shrink:0;}",!t&&(0,o/* .css */.iv)(d(),h[r].height,h[r].borderRadius,h[r].gap))},content:e=>{var{hasChildren:t,size:r="regular",textOnly:n}=e;return/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&(0,o/* .css */.iv)(v(),i/* .spacing["2"] */.W0["2"],i/* .colorTokens.icon.white */.Jv.icon.white,h[r].gap,h[r].fontSize,h[r].lineHeight,n&&(0,o/* .css */.iv)(u(),i/* .spacing["6"] */.W0["6"])))}}},63772:function(e,t,r){r.d(t,{Z:()=>g});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(70917);/* ESM import */var i=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(i);/* ESM import */var s=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(29535);/* ESM import */var u=r(34403);function v(){var e=(0,n._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);f=function t(){return e};return e}var p=/*#__PURE__*/l().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:o,disabled:i=false,labelCss:l,label:s,icon:c,value:d,onChange:v,onBlur:f,description:p}=e;var g=(0,u/* .nanoid */.x0)();return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("label",{htmlFor:g,css:[h.container(i),l],children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("input",{ref:t,id:g,name:r,type:"radio",checked:n,readOnly:o,value:d,disabled:i,onChange:v,onBlur:f,css:[h.radio(s)]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{}),c,s]}),p&&/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{css:h.description,children:p})]})});var h={wrapper:/*#__PURE__*/(0,o/* .css */.iv)(d/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",s/* .spacing["8"] */.W0["8"],";"),container:e=>/*#__PURE__*/(0,o/* .css */.iv)(c/* .typography.caption */.c.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,o/* .css */.iv)(v(),s/* .colorTokens.text.disable */.Jv.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,o/* .css */.iv)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",s/* .colorTokens.background.white */.Jv.background.white,";border:2px solid ",s/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:100%;",e&&(0,o/* .css */.iv)(f(),s/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",s/* .colorTokens.background.white */.Jv.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",s/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:checked + span::before{background-color:",s/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",s/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,o/* .css */.iv)(c/* .typography.small */.c.small(),";color:",s/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;")};/* ESM default export */const g=p},98978:function(e,t,r){r.d(t,{Z:()=>c});/* ESM import */var n=r(35944);/* ESM import */var a=r(60860);/* ESM import */var o=r(78151);/* ESM import */var i=r(70917);/* ESM import */var l=r(87363);/* ESM import */var s=/*#__PURE__*/r.n(l);var c=/*#__PURE__*/s().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{className:r,ref:t,css:u({variant:a})})});c.displayName="Separator";var d={horizontal:/*#__PURE__*/(0,i/* .css */.iv)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,i/* .css */.iv)("height:100%;width:1px;"),base:/*#__PURE__*/(0,i/* .css */.iv)("flex-shrink:0;background-color:",a/* .colorTokens.stroke.divider */.Jv.stroke.divider,";")};var u=(0,o/* .createVariation */.Y)({variants:{variant:{horizontal:d.horizontal,vertical:d.vertical}},defaultVariants:{variant:"horizontal"}},d.base)},85746:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(70917);/* ESM import */var i=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(i);/* ESM import */var s=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(s);/* ESM import */var d=r(34039);/* ESM import */var u=r(74053);/* ESM import */var v=r(60860);/* ESM import */var f=r(29535);/* ESM import */var p=r(34403);function h(){var e=(0,n._)(["\n        ","\n      "]);h=function t(){return e};return e}function g(){var e=(0,n._)(["\n        border-top-right-radius: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n          ","\n        "]);m=function t(){return e};return e}function b(){var e=(0,n._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!d/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,o,l,s,c,u,v,f,p){var h=f!==null&&f!==void 0?f:n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv");var g=p!==null&&p!==void 0?p:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen | tutor_button | undoRedoDropdown";h=v?h:h.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:c||200,autoresize_max_height:u||500,wp_autoresize_on:true,browser_spellcheck:!s,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!s,toolbar1:h,toolbar2:n?false:g,content_css:"".concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-includes/css/dashicons.min.css,").concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!s,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:a=>{a.on("init",()=>{if(e&&!s){a.getBody().focus()}if(s){a.setMode("readonly");var t=a.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){a.iframeElement.style.height="".concat(e,"px")}},500)}});if(!n){a.addButton("tutor_button",{text:(0,i.__)("Tutor ShortCode","tutor"),icon:false,type:"menubutton",menu:[{text:(0,i.__)("Student Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_student_registration_form]")}},{text:(0,i.__)("Instructor Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_instructor_registration_form]")}},{text:(0,i.__)("Courses","tutor"),onclick:()=>{a.windowManager.open({title:(0,i.__)("Courses Shortcode","tutor"),body:[{type:"textbox",name:"id",label:(0,i.__)("Course id, separate by (,) comma","tutor"),value:""},{type:"textbox",name:"exclude_ids",label:(0,i.__)("Exclude Course IDS","tutor"),value:""},{type:"textbox",name:"category",label:(0,i.__)("Category IDS","tutor"),value:""},{type:"listbox",name:"orderby",label:(0,i.__)("Order By","tutor"),onselect:()=>{},values:[{text:"ID",value:"ID"},{text:"title",value:"title"},{text:"rand",value:"rand"},{text:"date",value:"date"},{text:"menu_order",value:"menu_order"},{text:"post__in",value:"post__in"}]},{type:"listbox",name:"order",label:(0,i.__)("Order","tutor"),onselect:()=>{},values:[{text:"DESC",value:"DESC"},{text:"ASC",value:"ASC"}]},{type:"textbox",name:"count",label:(0,i.__)("Count","tutor"),value:"6"}],// eslint-disable-next-line @typescript-eslint/no-explicit-any
onsubmit:e=>{a.insertContent('[tutor_course id="'.concat(e.data.id,'" exclude_ids="').concat(e.data.exclude_ids,'" category="').concat(e.data.category,'" orderby="').concat(e.data.orderby,'" order="').concat(e.data.order,'" count="').concat(e.data.count,'"]'))}})}}]})}a.on("change keyup paste",()=>{t(a.getContent())});a.on("focus",()=>{r(true)});a.on("blur",()=>r(false));a.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}l===null||l===void 0?void 0:l(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!s,drag_drop_upload:true,quicktags:o||n||s?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:o,hideQuickTags:i,autoFocus:l=false,onFullScreenChange:c,readonly:d=false,min_height:v,max_height:f,toolbar1:h,toolbar2:g}=e;var m=(0,s.useRef)(null);var{current:b}=(0,s.useRef)((0,p/* .nanoid */.x0)());var[_,w]=(0,s.useState)(l);var x=e=>{var t=e.target;r(t.value)};var k=(0,s.useCallback)(e=>{var{tinymce:t}=window;if(!t||_){return}var r=window.tinymce.get(b);if(r){if(e!==r.getContent()){r.setContent(e)}}},[b,_]);(0,s.useEffect)(()=>{k(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,s.useEffect)(()=>{if(typeof window.wp!=="undefined"&&window.wp.editor){window.wp.editor.remove(b);window.wp.editor.initialize(b,y(_,r,w,n,o,i,c,d,v,f,u/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile,h,g));var e=m.current;e===null||e===void 0?void 0:e.addEventListener("change",x);e===null||e===void 0?void 0:e.addEventListener("input",x);return()=>{window.wp.editor.remove(b);e===null||e===void 0?void 0:e.removeEventListener("change",x);e===null||e===void 0?void 0:e.removeEventListener("input",x)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[d]);return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:Z.wrapper({hideQuickTags:i,isMinimal:n,isFocused:_,isReadOnly:d}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)("textarea",{"data-cy":"tutor-tinymce",ref:m,id:b,defaultValue:t})})};/* ESM default export */const x=w;var Z={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,o/* .css */.iv)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";",n&&!a&&(0,o/* .css */.iv)(h(),f/* .styleUtils.inputFocus */.i.inputFocus),":focus-within{",!a&&f/* .styleUtils.inputFocus */.i.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",v/* .borderRadius["4"] */.E0["4"],";border-top-right-radius:",v/* .borderRadius["4"] */.E0["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";",(t||r)&&(0,o/* .css */.iv)(g(),v/* .borderRadius["6"] */.E0["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,o/* .css */.iv)(b(),!a?"1px solid ".concat(v/* .colorTokens.stroke["default"] */.Jv.stroke["default"]):"none",v/* .borderRadius["6"] */.E0["6"],n&&!a&&(0,o/* .css */.iv)(m(),f/* .styleUtils.inputFocus */.i.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",v/* .spacing["10"] */.W0["10"],";}")}}},60274:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(35944);/* ESM import */var l=r(69602);/* ESM import */var s=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(70917);/* ESM import */var u=r(26815);/* ESM import */var v=r(58982);/* ESM import */var f=r(84978);var p=e=>{var{field:t,fieldState:r,disabled:s,value:c,onChange:d,label:p,description:h,helpText:m,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,f=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:g.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,(0,a._)((0,n._)({},t,f),{inputCss:r,labelCss:_,value:c,disabled:s,checked:t.value,label:p,onChange:()=>{t.onChange(!t.value);if(d){d(!t.value)}}})),m&&/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* ["default"] */.Z,{content:m,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{css:g.description,children:h})]})}})};/* ESM default export */const h=p;var g={wrapper:/*#__PURE__*/(0,d/* .css */.iv)("display:flex;align-items:center;gap:",s/* .spacing["6"] */.W0["6"],";& > div{display:flex;color:",s/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),description:/*#__PURE__*/(0,d/* .css */.iv)(c/* .typography.small */.c.small(),"    color:",s/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;margin-top:",s/* .spacing["6"] */.W0["6"],";")}},42456:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(35944);/* ESM import */var l=r(70917);/* ESM import */var s=r(38003);/* ESM import */var c=/*#__PURE__*/r.n(s);/* ESM import */var d=r(12274);/* ESM import */var u=r(32449);/* ESM import */var v=r(87363);/* ESM import */var f=/*#__PURE__*/r.n(v);/* ESM import */var p=r(57684);/* ESM import */var h=r(19398);/* ESM import */var g=r(26815);/* ESM import */var m=r(74053);/* ESM import */var b=r(60860);/* ESM import */var _=r(76487);/* ESM import */var y=r(98567);/* ESM import */var w=r(29535);/* ESM import */var x=r(84978);/* ESM import */var Z=r(70165);// Create DayPicker formatters based on WordPress locale
var k=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var C=e=>{if(!e)return undefined;return(0,d["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var D=e=>{var{label:t,field:r,fieldState:l,disabled:c,disabledBefore:d,disabledAfter:f,loading:b,placeholder:_,helpText:Z,isClearable:D=true,onChange:E,dateFormat:W=m/* .DateFormats.monthDayYear */.E_.monthDayYear}=e;var M=(0,v.useRef)(null);var[T,B]=(0,v.useState)(false);var I=C(r.value);var N=typeof window!=="undefined"&&window.wp&&window.wp.date;var O=I?N?window.wp.date.format("F j, Y",I):(0,u["default"])(I,W):"";var{triggerRef:A,position:L,popoverRef:J}=(0,y/* .usePortalPopover */.lM)({isOpen:T,placement:y/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.h_.BOTTOM_LEFT});var R=()=>{var e;B(false);(e=M.current)===null||e===void 0?void 0:e.focus()};var P=C(d);var z=C(f);return/*#__PURE__*/(0,i/* .jsx */.tZ)(x/* ["default"] */.Z,{label:t,field:r,fieldState:l,disabled:c,loading:b,placeholder:_,helpText:Z,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:S.wrapper,ref:A,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,a._)((0,n._)({},l),{css:[t,S.input],title:O,ref:e=>{r.ref(e);// @ts-ignore
M.current=e},type:"text",value:O,onClick:e=>{e.stopPropagation();B(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();B(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"calendarLine",width:30,height:32,style:S.icon}),D&&r.value&&/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* ["default"] */.Z,{isIconOnly:true,"aria-label":(0,s.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:w/* .styleUtils.inputClearButton */.i.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(y/* .Portal */.Uv,{isOpen:T,onClickOutside:R,onEscape:R,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:S.pickerWrapper,style:{left:L.left,top:L.top},ref:J,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* .DayPicker */._,{dir:m/* .isRTL */.dZ?"rtl":"ltr",animate:true,mode:"single",formatters:k(),disabled:[!!P&&{before:P},!!z&&{after:z}],selected:I,onSelect:e=>{if(e){var t=(0,u["default"])(e,m/* .DateFormats.yearMonthDay */.E_.yearMonthDay);r.onChange(t);R();if(E){E(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:I||new Date,startMonth:P||new Date(new Date().getFullYear()-10,0),endMonth:z||new Date(new Date().getFullYear()+10,11),weekStartsOn:N?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* ESM default export */const E=D;var S={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,l/* .css */.iv)("&[data-input]{padding-left:",b/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;top:50%;left:",b/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,l/* .css */.iv)(_/* .typography.body */.c.body("regular"),";position:absolute;background-color:",b/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",b/* .shadow.popover */.AF.popover,";border-radius:",b/* .borderRadius["6"] */.E0["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",b/* .colorTokens.text.title */.Jv.text.title,";--rdp-caption-font-size:",b/* .fontSize["18"] */.JB["18"],";--rdp-accent-color:",b/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";--rdp-background-color:",b/* .colorTokens.background.hover */.Jv.background.hover,";--rdp-accent-color-dark:",b/* .colorTokens.action.primary.active */.Jv.action.primary.active,";--rdp-background-color-dark:",b/* .colorTokens.action.primary.hover */.Jv.action.primary.hover,";--rdp-selected-color:",b/* .colorTokens.text.white */.Jv.text.white,";--rdp-day_button-border-radius:",b/* .borderRadius.circle */.E0.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",b/* .spacing["16"] */.W0["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",b/* .colorTokens.text.primary */.Jv.text.primary,";button{border-radius:",b/* .borderRadius.circle */.E0.circle,";&:hover,&:focus,&:active{background-color:",b/* .colorTokens.background.hover */.Jv.background.hover,";color:",b/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",b/* .colorTokens.text.white */.Jv.text.white,";background-color:",b/* .colorTokens.background.brand */.Jv.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",b/* .spacing["8"] */.W0["8"],";}}.rdp-today{.rdp-day_button{font-weight:",b/* .fontWeight.bold */.Ue.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",b/* .borderRadius.circle */.E0.circle,";font-weight:",b/* .fontWeight.regular */.Ue.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",b/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",b/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")}},86774:function(e,t,r){r.d(t,{Z:()=>Z});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(70917);/* ESM import */var i=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(i);/* ESM import */var s=r(19398);/* ESM import */var c=r(26815);/* ESM import */var d=r(84978);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(52357);/* ESM import */var g=r(43372);/* ESM import */var m=r(29535);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:o,buttonText:l=(0,i.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:v,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,g/* ["default"] */.Z)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(v){v(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var Z=()=>{y()};var C=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(v){v(r.length>0?r:null)}}else{t.onChange(null);if(v){v(null)}}};return/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{label:n,field:t,fieldState:r,helpText:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,children:l}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(f/* ["default"] */.Z,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{style:k.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:k.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{title:e.title,css:m/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{children:"".concat((0,i.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("button",{type:"button",css:k.removeButton,onClick:()=>{C(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:k.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,"data-cy":"upload-media",children:l})})]})})}})};/* ESM default export */const Z=(0,h/* .withVisibilityControl */.v)(x);var k={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("display:flex;flex-direction:column;position:relative;",t&&(0,o/* .css */.iv)(b(),u/* .colorTokens.background.white */.Jv.background.white,u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius.card */.E0.card,u/* .spacing["8"] */.W0["8"]))},attachmentsWrapper:/*#__PURE__*/(0,o/* .css */.iv)("max-height:260px;padding-right:",u/* .spacing["16"] */.W0["16"],";",m/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,o/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.W0["20"],";padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"]," ",u/* .spacing["4"] */.W0["4"]," 0;border-radius:",u/* .borderRadius["6"] */.E0["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.Jv.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.Uo.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,o/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,o/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",u/* .spacing["4"] */.W0["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,o/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";",v/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,o/* .css */.iv)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,o/* .css */.iv)(v/* .typography.tiny */.c.tiny("regular")," ",m/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";color:",u/* .colorTokens.text.hints */.Jv.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)(t&&(0,o/* .css */.iv)(_(),u/* .spacing["16"] */.W0["16"]))},uploadButton:/*#__PURE__*/(0,o/* .css */.iv)("width:100%;"),fileIcon:/*#__PURE__*/(0,o/* .css */.iv)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),removeButton:/*#__PURE__*/(0,o/* .css */.iv)(m/* .styleUtils.crossButton */.i.crossButton,";background:none;transition:none;flex-shrink:0;")}},44226:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(35944);/* ESM import */var a=r(38003);/* ESM import */var o=/*#__PURE__*/r.n(a);/* ESM import */var i=r(30647);/* ESM import */var l=r(26815);/* ESM import */var s=r(36853);/* ESM import */var c=r(63260);/* ESM import */var d=r(31342);/* ESM import */var u=r(99678);/* ESM import */var v=r(34039);/* ESM import */var f=r(52357);/* ESM import */var p=r(43372);/* ESM import */var h=r(86056);/* ESM import */var g=r(95781);/* ESM import */var m=r(84978);var b;var _=!!v/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var y=(b=v/* .tutorConfig.settings */.y.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:o,size:v,helpText:f,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:Z=false,previewImageCss:k,loading:C,onClickAiButton:D}=e;var{showModal:E}=(0,c/* .useModal */.d)();var{openMediaLibrary:S,resetFiles:W}=(0,p/* ["default"] */.Z)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var M=t.value;var T=()=>{S()};var B=()=>{W();t.onChange(null);if(x){x(null)}};var I=()=>{if(!_){E({component:d/* ["default"] */.Z,props:{image:g,image2x:h}})}else if(!y){E({component:u/* ["default"] */.Z,props:{image:g,image2x:h}})}else{E({component:s/* ["default"] */.Z,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});D===null||D===void 0?void 0:D()}};return/*#__PURE__*/(0,n/* .jsx */.tZ)(m/* ["default"] */.Z,{label:o,field:t,fieldState:r,helpText:f,onClickAiButton:I,generateWithAi:Z,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* ["default"] */.Z,{size:v,value:M,uploadHandler:T,clearHandler:B,buttonText:b,infoText:w,previewImageCss:k,loading:C})})}})};/* ESM default export */const x=(0,f/* .withVisibilityControl */.v)(w)},99308:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(60860);/* ESM import */var i=r(70917);/* ESM import */var l=r(76487);/* ESM import */var s=r(29535);/* ESM import */var c=r(84978);function d(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var v=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:i}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{field:t,fieldState:r,label:n,disabled:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:p.wrapper,children:o.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{type:"button",css:p.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:i,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.tZ)("p",{children:e.label})]},r))})}})};/* ESM default export */const f=v;var p={wrapper:/*#__PURE__*/(0,i/* .css */.iv)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",o/* .spacing["12"] */.W0["12"],";margin-top:",o/* .spacing["4"] */.W0["4"],";"),item:e=>/*#__PURE__*/(0,i/* .css */.iv)(s/* .styleUtils.resetButton */.i.resetButton,";display:flex;flex-direction:column;gap:",o/* .spacing["4"] */.W0["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",l/* .typography.small */.c.small(),";width:100%;",s/* .styleUtils.textEllipsis */.i.textEllipsis,";color:",o/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,i/* .css */.iv)(d(),o/* .colorTokens.stroke.hover */.Jv.stroke.hover),"}img{border-radius:",o/* .borderRadius["6"] */.E0["6"],";border:2px solid ",o/* .colorTokens.stroke.border */.Jv.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,i/* .css */.iv)(u(),o/* .colorTokens.stroke.magicAi */.Jv.stroke.magicAi),"}")}},35159:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(58865);/* ESM import */var l=r(35944);/* ESM import */var s=r(70917);/* ESM import */var c=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(52357);/* ESM import */var p=r(29535);/* ESM import */var h=r(84978);function g(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function m(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function b(){var e=(0,i._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,i._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      ","\n    "]);x=function t(){return e};return e}function Z(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);Z=function t(){return e};return e}function k(){var e=(0,i._)(["\n      ","\n    "]);k=function t(){return e};return e}function C(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);C=function t(){return e};return e}var D=e=>{var{label:t,content:r,contentPosition:i="left",showVerticalBar:s=true,size:d="regular",type:u="text",field:v,fieldState:f,disabled:p,readOnly:g,loading:m,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:Z,contentCss:k,removeBorder:C=false,selectOnFocus:D=false}=e;var E=(0,c.useRef)(null);return/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{label:t,field:v,fieldState:f,disabled:p,readOnly:g,loading:m,placeholder:b,helpText:_,isHidden:x,removeBorder:C,children:e=>{var{css:t}=e,c=(0,o._)(e,["css"]);var p;return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:[S.inputWrapper(!!f.error,C),Z],children:[i==="left"&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:[S.inputLeftContent(s,d),k],children:r}),/*#__PURE__*/(0,l/* .jsx */.tZ)("input",(0,a._)((0,n._)({},v,c),{type:"text",value:(p=v.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;v.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,S.input(i,s,d)],autoComplete:"off",ref:e=>{v.ref(e);// @ts-ignore
E.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!D||!E.current){return}E.current.select()},"data-input":true})),i==="right"&&/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:[S.inputRightContent(s,d),k],children:r})]})}})};/* ESM default export */const E=(0,f/* .withVisibilityControl */.v)(D);var S={inputWrapper:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)("display:flex;align-items:center;",!t&&(0,s/* .css */.iv)(g(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius["6"] */.E0["6"],u/* .shadow.input */.AF.input,u/* .colorTokens.background.white */.Jv.background.white)," ",e&&(0,s/* .css */.iv)(m(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger,u/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail),";&:focus-within{",p/* .styleUtils.inputFocus */.i.inputFocus,";",e&&(0,s/* .css */.iv)(b(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,s/* .css */.iv)("&[data-input]{",v/* .typography.body */.c.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,s/* .css */.iv)(_(),e,u/* .spacing["10"] */.W0["10"]),";",r==="large"&&(0,s/* .css */.iv)(w(),u/* .fontSize["24"] */.JB["24"],u/* .fontWeight.medium */.Ue.medium,t&&(0,s/* .css */.iv)(y(),e,u/* .spacing["12"] */.W0["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,s/* .css */.iv)(x(),v/* .typography.body */.c.body())," ",e&&(0,s/* .css */.iv)(Z(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,s/* .css */.iv)(k(),v/* .typography.body */.c.body())," ",e&&(0,s/* .css */.iv)(C(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))}},90097:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(35944);/* ESM import */var l=r(63772);/* ESM import */var s=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(70917);/* ESM import */var u=r(84978);var v=e=>{var{field:t,fieldState:r,label:s,options:c=[],disabled:d,wrapperCss:v,onSelect:f,onSelectRender:h}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,{field:t,fieldState:r,label:s,disabled:d,children:e=>{var{css:r}=e,s=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:v,children:c.map((e,o)=>/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,(0,a._)((0,n._)({},s),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||d,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(f){f(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:p.radioLegend,children:e.legend})]},o))})}})};/* ESM default export */const f=v;var p={radioLegend:/*#__PURE__*/(0,d/* .css */.iv)("margin-left:",s/* .spacing["28"] */.W0["28"],";",c/* .typography.body */.c.body(),";color:",s/* .colorTokens.text.subdued */.Jv.text.subdued,";")}},60309:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(60860);/* ESM import */var i=r(76487);/* ESM import */var l=r(4867);/* ESM import */var s=r(29535);/* ESM import */var c=r(34403);/* ESM import */var d=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(84978);function p(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function g(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var o=a.width;var i=e-a.left;var l=Math.max(0,Math.min(i,o));var s=l/o*100;var c=Math.floor(r+s/100*(n-r));return c}var m=e=>{var{field:t,fieldState:r,label:n,min:o=0,max:i=100,isMagicAi:s=false,hasBorder:d=false}=e;var v=(0,u.useRef)(null);var[p,h]=(0,u.useState)(t.value);var m=(0,u.useRef)(null);var b=(0,u.useRef)(null);var y=(0,l/* .useDebounce */.N)(p);(0,u.useEffect)(()=>{t.onChange(y);// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==b.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!m.current){return}h(g(t.clientX,m,o,i))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[o,i]);var w=(0,u.useMemo)(()=>{return Math.floor((p-o)/(i-o)*100)},[p,o,i]);return/*#__PURE__*/(0,a/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,label:n,isMagicAi:s,children:()=>/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.wrapper(d),children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:_.track,ref:m,onKeyDown:c/* .noop */.ZT,onClick:e=>{h(g(e.clientX,m,o,i))},children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:_.fill,style:{width:"".concat(w,"%")}}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:_.thumb(s),style:{left:"".concat(w,"%")},ref:b})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)("input",{type:"text",css:_.input,value:String(p),onChange:e=>{h(Number(e.target.value))},ref:v,onFocus:()=>{var e;(e=v.current)===null||e===void 0?void 0:e.select()}})]})})};/* ESM default export */const b=m;var _={wrapper:e=>/*#__PURE__*/(0,d/* .css */.iv)("display:grid;grid-template-columns:1fr 45px;gap:",o/* .spacing["20"] */.W0["20"],";align-items:center;",e&&(0,d/* .css */.iv)(p(),o/* .colorTokens.stroke.disable */.Jv.stroke.disable,o/* .borderRadius["6"] */.E0["6"],o/* .spacing["12"] */.W0["12"],o/* .spacing["10"] */.W0["10"],o/* .spacing["12"] */.W0["12"],o/* .spacing["16"] */.W0["16"])),track:/*#__PURE__*/(0,d/* .css */.iv)("position:relative;height:4px;background-color:",o/* .colorTokens.bg.gray20 */.Jv.bg.gray20,";border-radius:",o/* .borderRadius["50"] */.E0["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;left:0;top:0;height:100%;background:",o/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";width:50%;border-radius:",o/* .borderRadius["50"] */.E0["50"],";"),thumb:e=>/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",o/* .borderRadius.circle */.E0.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",o/* .borderRadius.circle */.E0.circle,";background-color:",o/* .colorTokens.background.white */.Jv.background.white,";cursor:pointer;}",e&&(0,d/* .css */.iv)(h(),o/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1)),input:/*#__PURE__*/(0,d/* .css */.iv)(i/* .typography.caption */.c.caption("medium"),";height:32px;border:1px solid ",o/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",o/* .borderRadius["6"] */.E0["6"],";text-align:center;color:",o/* .colorTokens.text.primary */.Jv.text.primary,";&:focus-visible{",s/* .styleUtils.inputFocus */.i.inputFocus,";}")}},47778:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(35944);/* ESM import */var l=r(70917);/* ESM import */var s=r(4543);/* ESM import */var c=r(37042);/* ESM import */var d=r(47041);/* ESM import */var u=r(32449);/* ESM import */var v=r(87363);/* ESM import */var f=/*#__PURE__*/r.n(v);/* ESM import */var p=r(19398);/* ESM import */var h=r(26815);/* ESM import */var g=r(97669);/* ESM import */var m=r(74053);/* ESM import */var b=r(60860);/* ESM import */var _=r(76487);/* ESM import */var y=r(29535);/* ESM import */var w=r(54354);/* ESM import */var x=r(30633);/* ESM import */var Z=r(38003);/* ESM import */var k=/*#__PURE__*/r.n(Z);/* ESM import */var C=r(84978);var D=e=>{var{label:t,field:r,fieldState:l,interval:f=30,disabled:b,loading:_,placeholder:k,helpText:D,isClearable:E=true}=e;var[W,M]=(0,v.useState)(false);var T=(0,v.useRef)(null);var B=(0,v.useRef)(null);var I=(0,v.useMemo)(()=>{var e=(0,s["default"])((0,c["default"])(new Date,0),0);var t=(0,s["default"])((0,c["default"])(new Date,23),59);var r=(0,d/* ["default"] */.Z)({start:e,end:t},{step:f});return r.map(e=>(0,u["default"])(e,m/* .DateFormats.hoursMinutes */.E_.hoursMinutes))},[f]);var{activeIndex:N,setActiveIndex:O}=(0,x/* .useSelectKeyboardNavigation */.U)({options:I.map(e=>({label:e,value:e})),isOpen:W,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);M(false)},onClose:()=>M(false)});(0,v.useEffect)(()=>{if(W&&N>=0&&B.current){B.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[W,N]);return/*#__PURE__*/(0,i/* .jsx */.tZ)(C/* ["default"] */.Z,{label:t,field:r,fieldState:l,disabled:b,loading:_,placeholder:k,helpText:D,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);var s;return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:S.wrapper,ref:T,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,a._)((0,n._)({},l),{ref:r.ref,css:[t,S.input],type:"text",onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(e=>!e)}if(e.key==="Tab"){M(false)}},value:(s=r.value)!==null&&s!==void 0?s:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"clock",width:32,height:32,style:S.icon}),E&&r.value&&/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{isIconOnly:true,"aria-label":(0,Z.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:y/* .styleUtils.inputClearButton */.i.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,i/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(g/* ["default"] */.Z,{triggerRef:T,isOpen:W,closePopover:()=>M(false),animationType:w/* .AnimationType.slideDown */.ru.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("ul",{css:S.list,children:I.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.tZ)("li",{css:S.listItem,ref:N===t?B:null,"data-active":N===t,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:S.itemButton,onClick:()=>{r.onChange(e);M(false)},onMouseOver:()=>O(t),onMouseLeave:()=>t!==N&&O(-1),onFocus:()=>O(t),children:e})},t)})})})]})}})};/* ESM default export */const E=D;var S={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,l/* .css */.iv)("&[data-input]{padding-left:",b/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;top:50%;left:",b/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),list:/*#__PURE__*/(0,l/* .css */.iv)("height:380px;list-style:none;padding:0;margin:0;",y/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),listItem:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",b/* .colorTokens.background.hover */.Jv.background.hover,";}:hover{background-color:",b/* .colorTokens.background.hover */.Jv.background.hover,";}"),itemButton:/*#__PURE__*/(0,l/* .css */.iv)(y/* .styleUtils.resetButton */.i.resetButton,";",_/* .typography.body */.c.body(),";margin:",b/* .spacing["4"] */.W0["4"]," ",b/* .spacing["12"] */.W0["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.primary */.Jv.text.primary,";}")}},69789:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */ee});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(76150);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(99282);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(58865);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var s=r(70917);// EXTERNAL MODULE: external "wp.i18n"
var c=r(38003);// EXTERNAL MODULE: external "React"
var d=r(87363);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(52293);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var v=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var f=r(30647);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var p=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(26815);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var g=r(97669);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var m=r(34039);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var b=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var _=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var y=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var w=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var x=r(52357);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var Z=r(54354);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var k=r(37861);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var C=r(98567);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useWpMedia.ts
var D=r(43372);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var E=r(65228);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var S=r(82340);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var W=r(84225);// CONCATENATED MODULE: ./assets/react/v3/shared/services/video.ts
var M=e=>{return S/* .wpAjaxInstance.post */.R.post(W/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.Z.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var T=()=>{return(0,E/* .useMutation */.D)({mutationFn:M})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var B=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var I=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var N=r(25481);// CONCATENATED MODULE: ./assets/react/v3/shared/utils/video.ts
function O(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var o=yield fetch(a);if(!o.ok){throw new Error((0,c.__)("Failed to fetch the video data","tutor"))}var i=yield o.text();var l=new DOMParser;var s=l.parseFromString(i,"application/xml");var d=s.getElementsByTagName("duration")[0];if(!d||!d.textContent){return null}var u=Number.parseInt(d.textContent,10);return u;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var A=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var L=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var J=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(b/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var o=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var i=yield o.json();return i[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var o=false;var i=false;var l=false;var s=false;var d=()=>{n.src="";n.remove();a.remove();clearTimeout(v)};var u=()=>{if(o&&i&&l&&s){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,c.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var u=a.toDataURL("image/png");d();e(u)}catch(e){d();var v=e instanceof Error?e.message:(0,c.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(v)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{o=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{i=true;u()});n.addEventListener("suspend",()=>{l=true;u()});n.addEventListener("seeked",()=>{s=true;u()});n.addEventListener("error",e=>{d();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var v=setTimeout(()=>{d();r(new Error((0,c.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var f=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(f)))}})}throw new Error((0,c.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var R=r(84978);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var P=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var z=r(3473);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx
function U(){var e=(0,i._)(["\n      background-color: ",";\n    "]);U=function t(){return e};return e}function F(){var e=(0,i._)(["\n      ",";\n    "]);F=function t(){return e};return e}var j=m/* .tutorConfig.supported_video_sources */.y.supported_video_sources||[];var X=j.filter(e=>e.value!=="html5");var Y=j.map(e=>e.value);var Q=["vimeo","youtube","html5"];var q={youtube:(0,c.__)("Paste YouTube Video URL","tutor"),vimeo:(0,c.__)("Paste Vimeo Video URL","tutor"),external_url:(0,c.__)("Paste External Video URL","tutor"),shortcode:(0,c.__)("Paste Video Shortcode","tutor"),embedded:(0,c.__)("Paste Embedded Video Code","tutor")};var H={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var V=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var G={youtube:e=>{var t=e.match(b/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(b/* .VideoRegex.VIMEO */.t8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(b/* .VideoRegex.SHORTCODE */.t8.SHORTCODE)?e:null},url:e=>{return e.match(b/* .VideoRegex.EXTERNAL_URL */.t8.EXTERNAL_URL)?e:null}};var K=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield O(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var o;e=(o=yield A(r))!==null&&o!==void 0?o:0;break;case"youtube":{var i=G.youtube(r);if(i){var l=yield a.mutateAsync(i);e=L(l.data.duration)}break}}if(e){var s=(0,I/* .covertSecondsToHMS */.lL)(Math.floor(e));return s}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var $=e=>{var{field:t,fieldState:r,label:i,helpText:b,buttonText:_=(0,c.__)("Upload Media","tutor"),infoText:y,onChange:x,supportedFormats:E,loading:S,onGetDuration:W}=e;var M,U,F;var $=(0,k/* .useFormWithGlobalError */.O)({defaultValues:{videoSource:((M=X[0])===null||M===void 0?void 0:M.value)||"",videoUrl:""}});var ee=T();var[er,en]=(0,d.useState)(false);var[ea,eo]=(0,d.useState)({hours:0,minutes:0,seconds:0});var[ei,el]=(0,d.useState)("");var[es,ec]=(0,d.useState)(false);var ed=(0,d.useRef)(null);var eu=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};t.onChange(V(t.value,n));x===null||x===void 0?void 0:x(V(t.value,n));try{en(true);eh();var a=yield J("external_url",r.url);var o=yield A(r.url);if(!o){return}eo((0,I/* .covertSecondsToHMS */.lL)(Math.floor(o)));if(W){W((0,I/* .covertSecondsToHMS */.lL)(Math.floor(o)))}if(a){el(a)}}finally{en(false)}})();var{openMediaLibrary:ev,resetFiles:ef}=(0,D/* ["default"] */.Z)({options:{type:(E===null||E===void 0?void 0:E.length)?E.map(e=>"video/".concat(e)).join(","):"video"},onChange:eu});var{openMediaLibrary:ep,resetFiles:eh}=(0,D/* ["default"] */.Z)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};t.onChange(V(t.value,n));x===null||x===void 0?void 0:x(V(t.value,n))},initialFiles:((U=t.value)===null||U===void 0?void 0:U.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var eg=$.watch("videoSource")||"";var em=t.value;(0,d.useEffect)(()=>{var e;if(!em){return}if(!em.source){var r,n;$.setValue("videoSource",(r=X[0])===null||r===void 0?void 0:r.value);$.setValue("videoUrl",em["source_".concat((n=X[0])===null||n===void 0?void 0:n.value)]||"");return}var a=Y.includes(em.source);if(!a){t.onChange(V(em,{source:""}));return}$.setValue("videoSource",em.source);$.setValue("videoUrl",em["source_".concat(em.source)]||"");if(!em.poster_url&&Q.includes(em.source)){var o=em.source;en(true);J(o,em["source_".concat(o)]||"").then(e=>{en(false);el(e)}).finally(()=>{en(false)})}if(Object.values(ea).some(e=>e>0)){return}if(em.source==="vimeo"){O(em["source_vimeo"]||"").then(e=>{if(!e){return}eo((0,I/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(W){W((0,I/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(["external_url","html5"].includes(em.source)){A(em["source_".concat(em.source)]||"").then(e=>{if(!e){return}eo((0,I/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(W){W((0,I/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(em.source==="youtube"&&((e=m/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var i;var l=(i=G.youtube(em["source_youtube"]||""))!==null&&i!==void 0?i:"";ee.mutateAsync(l).then(e=>{var t=e.data.duration;if(!t){return}var r=L(t);eo((0,I/* .covertSecondsToHMS */.lL)(Math.floor(r)));if(W){W((0,I/* .covertSecondsToHMS */.lL)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[em]);if(!Y.length){return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.emptyMediaWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:i,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("label",{children:i})}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("p",{css:et.warningText,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"info",height:20,width:20}),(0,c.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,l/* .jsx */.tZ)(v/* ["default"] */.Z,{buttonCss:et.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(m/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.Z.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,c.__)("Select from settings","tutor")})]})]})}var eb=e=>{if(e==="video"){ev();return}ep()};var e_=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=V(em,r);if(e==="video"){ef()}else{eh()}t.onChange(n);el("");eo({hours:0,minutes:0,seconds:0});if(x){x(n)}};var ey=()=>{if(!(em===null||em===void 0?void 0:em.source)||!Y.includes(em.source)){return false}var e=em===null||em===void 0?void 0:em.source;var t="source_".concat(e);return em&&em[t]!==""};var ew=e=>(0,n._)(function*(){en(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange(V(em,a));x===null||x===void 0?void 0:x(V(em,a));ec(false);var[o,i]=yield Promise.all([K({source:r,url:n,getYouTubeVideoDurationMutation:ee}),Q.includes(r)?J(r,n):null]);if(o){eo(o);W===null||W===void 0?void 0:W(o)}if(i){el(i)}}finally{en(false)}})();var ex=e=>{var t=e.trim();if(eg==="embedded")return true;if(eg==="shortcode"){return G.shortcode(t)?true:(0,c.__)("Invalid Shortcode","tutor")}if(!G.url(t)){return(0,c.__)("Invalid URL","tutor")}if(eg==="youtube"&&!G.youtube(t)){return(0,c.__)("Invalid YouTube URL","tutor")}if(eg==="vimeo"&&!G.vimeo(t)){return(0,c.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(R/* ["default"] */.Z,{label:i,field:t,fieldState:r,helpText:b,children:()=>{return/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{ref:ed,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:!S,fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:et.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(p/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:ey(),fallback:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:Y.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"monitorPlay",height:24,width:24}),onClick:()=>{eb("video")},children:_})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:Y.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:!Y.includes("html5"),fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{"data-cy":"add-from-url",type:"button",css:et.urlButton,onClick:()=>{ec(e=>!e)},children:(0,c.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{ec(e=>!e)},children:(0,c.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:Y.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.tZ)("p",{css:et.infoTexts,children:y})})]}),children:()=>{var e;return/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.videoInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.videoInfoCard,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:H[em===null||em===void 0?void 0:em.source]||"video",height:36,width:36}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:et.videoInfo,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:et.videoInfoTitle,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:B/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:Q.includes((em===null||em===void 0?void 0:em.source)||"")?em===null||em===void 0?void 0:em["source_".concat(em.source)]:(e=j.find(e=>e.value===(em===null||em===void 0?void 0:em.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.actionButtons,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:eg!=="html5",children:/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{ec(true)},children:/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,l/* .jsx */.tZ)("button",{"data-cy":"remove-video",type:"button",css:B/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{e_("video")},children:/*#__PURE__*/(0,l/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:et.imagePreview({hasImageInput:Q.includes((em===null||em===void 0?void 0:em.source)||"")}),children:/*#__PURE__*/(0,l/* .jsxs */.BX)(w/* ["default"] */.Z,{when:Q.includes((em===null||em===void 0?void 0:em.source)||""),fallback:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:et.urlData,children:$.watch("videoUrl")}),children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(f/* ["default"] */.Z,{value:em?{id:Number(em.poster)||0,url:em.poster_url||ei,title:""}:null,loading:er,isClearAble:!!(em===null||em===void 0?void 0:em.poster),disabled:["vimeo","youtube"].includes((em===null||em===void 0?void 0:em.source)||""),uploadHandler:()=>eb("poster"),clearHandler:()=>e_("poster"),buttonText:(0,c.__)("Upload Thumbnail","tutor"),infoText:(0,c.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:et.thumbImage,previewImageCss:et.thumbImage,overlayCss:et.thumbImage,replaceButtonText:(0,c.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(w/* ["default"] */.Z,{when:ea.hours>0||ea.minutes>0||ea.seconds>0,children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.duration,children:[ea.hours>0&&"".concat(ea.hours,"h")," ",ea.minutes,"m ",ea.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,l/* .jsx */.tZ)(g/* ["default"] */.Z,{triggerRef:ed,isOpen:es,placement:C/* .POPOVER_PLACEMENTS.MIDDLE */.h_.MIDDLE,animationType:Z/* .AnimationType.fadeIn */.ru.fadeIn,closePopover:()=>ec(false),positionModifier:{top:17,left:0},maxWidth:"".concat(((F=ed.current)===null||F===void 0?void 0:F.offsetWidth)||300,"px"),children:/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.popoverContent,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(u/* .Controller */.Qr,{control:$.control,name:"videoSource",rules:(0,a._)({},(0,N/* .requiredRule */.n0)()),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.tZ)(P/* ["default"] */.Z,(0,o._)((0,a._)({},e),{options:X,disabled:j.length<=1,placeholder:(0,c.__)("Select source","tutor"),hideCaret:j.length<=1}))}}),/*#__PURE__*/(0,l/* .jsx */.tZ)(u/* .Controller */.Qr,{control:$.control,name:"videoUrl",rules:(0,o._)((0,a._)({},(0,N/* .requiredRule */.n0)()),{validate:ex}),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.tZ)(z/* ["default"] */.Z,(0,o._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,s/* .css */.iv)("border-style:dashed;"),rows:2,placeholder:q[eg]||(0,c.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,l/* .jsxs */.BX)("div",{css:et.popoverButtonWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.tZ)(v/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>{ec(false)},children:(0,c.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:$.handleSubmit(ew),children:(0,c.__)("Ok","tutor")})]})]})})]})};/* ESM default export */const ee=(0,x/* .withVisibilityControl */.v)($);var et={emptyMediaWrapper:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",_/* .spacing["4"] */.W0["4"],";label{",y/* .typography.caption */.c.caption(),";color:",_/* .colorTokens.text.title */.Jv.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",_/* .spacing["8"] */.W0["8"],";border:1px dashed ",_/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",_/* .borderRadius["8"] */.E0["8"],";background-color:",_/* .colorTokens.background.status.warning */.Jv.background.status.warning,";",t&&(0,s/* .css */.iv)(U(),_/* .colorTokens.bg.white */.Jv.bg.white))},infoTexts:/*#__PURE__*/(0,s/* .css */.iv)(y/* .typography.tiny */.c.tiny(),";color:",_/* .colorTokens.text.subdued */.Jv.text.subdued,";"),warningText:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",_/* .spacing["4"] */.W0["4"],";",y/* .typography.caption */.c.caption(),";color:",_/* .colorTokens.text.warning */.Jv.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,s/* .css */.iv)("background:",_/* .colorTokens.bg.white */.Jv.bg.white,";"),urlData:/*#__PURE__*/(0,s/* .css */.iv)(y/* .typography.caption */.c.caption(),";",B/* .styleUtils.display.flex */.i.display.flex("column"),";padding:",_/* .spacing["8"] */.W0["8"]," ",_/* .spacing["12"] */.W0["12"],";gap:",_/* .spacing["8"] */.W0["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,s/* .css */.iv)("width:100%;height:100%;border:1px solid ",_/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",_/* .borderRadius["8"] */.E0["8"],";overflow:hidden;background-color:",_/* .colorTokens.bg.white */.Jv.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",_/* .spacing["20"] */.W0["20"],";padding:",_/* .spacing["8"] */.W0["8"]," ",_/* .spacing["12"] */.W0["12"],";"),videoInfoCard:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",_/* .spacing["8"] */.W0["8"],";svg{flex-shrink:0;color:",_/* .colorTokens.icon.hover */.Jv.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",_/* .spacing["4"] */.W0["4"],";"),videoInfoTitle:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";",y/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,s/* .css */.iv)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",_/* .colorTokens.background["default"] */.Jv.background["default"],";",!t&&(0,s/* .css */.iv)(F(),B/* .styleUtils.overflowYAuto */.i.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,s/* .css */.iv)(y/* .typography.tiny */.c.tiny(),";position:absolute;bottom:",_/* .spacing["12"] */.W0["12"],";right:",_/* .spacing["12"] */.W0["12"],";background-color:rgba(0,0,0,0.5);color:",_/* .colorTokens.text.white */.Jv.text.white,";padding:",_/* .spacing["4"] */.W0["4"]," ",_/* .spacing["8"] */.W0["8"],";border-radius:",_/* .borderRadius["6"] */.E0["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,s/* .css */.iv)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.resetButton */.i.resetButton,";",y/* .typography.small */.c.small("medium"),";color:",_/* .colorTokens.text.brand */.Jv.text.brand,";border-radius:",_/* .borderRadius["2"] */.E0["2"],";padding:0 ",_/* .spacing["4"] */.W0["4"],";margin-bottom:",_/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background:none;color:",_/* .colorTokens.text.brand */.Jv.text.brand,";}&:focus-visible{outline:2px solid ",_/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";gap:",_/* .spacing["4"] */.W0["4"],";"),popover:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;width:100%;z-index:",_/* .zIndex.dropdown */.W5.dropdown,";background-color:",_/* .colorTokens.bg.white */.Jv.bg.white,";border-radius:",_/* .borderRadius.card */.E0.card,";box-shadow:",_/* .shadow.popover */.AF.popover,";"),popoverContent:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",_/* .spacing["12"] */.W0["12"],";padding:",_/* .spacing["16"] */.W0["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,s/* .css */.iv)(B/* .styleUtils.display.flex */.i.display.flex(),";gap:",_/* .spacing["8"] */.W0["8"],";justify-content:flex-end;")}},3960:function(e,t,r){r.d(t,{Z:()=>P});/* ESM import */var n=r(76150);/* ESM import */var a=r(58865);/* ESM import */var o=r(35944);/* ESM import */var i=r(70917);/* ESM import */var l=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(l);/* ESM import */var c=r(86138);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(87056);/* ESM import */var p=r(19398);/* ESM import */var h=r(2613);/* ESM import */var g=r(26815);/* ESM import */var m=r(58982);/* ESM import */var b=r(85746);/* ESM import */var _=r(54273);/* ESM import */var y=r(6293);/* ESM import */var w=r(63260);/* ESM import */var x=r(31342);/* ESM import */var Z=r(99678);/* ESM import */var k=r(34039);/* ESM import */var C=r(74053);/* ESM import */var D=r(60860);/* ESM import */var E=r(36352);/* ESM import */var S=r(17106);/* ESM import */var W=r(29535);/* ESM import */var M=r(14578);/* ESM import */var T=r(43567);/* ESM import */var B=r(84978);function I(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);I=function t(){return e};return e}var N;var O={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var A=!!k/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var L=(N=k/* .tutorConfig.settings */.y.settings)===null||N===void 0?void 0:N.chatgpt_key_exist;var J=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:i}=(0,w/* .useModal */.d)();var[s,c]=(0,u.useState)("");return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:z.editorOverlay,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(S/* ["default"] */.Z,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:z.editWithButton,icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"arrowLeft",height:24,width:24}),loading:s==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield i({component:y/* ["default"] */.Z,props:{title:(0,l.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{type:"warning",icon:"warning",children:(0,l.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,l.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:D/* .zIndex.highest */.W5.highest});if(e==="CONFIRM"){try{c("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{c("")}}})(),children:(0,l.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:z.editWithButton,loading:s==="edit_with",icon:O[t.name]&&/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{name:O[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{c("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{c("")}})(),children:/* translators: %s is the editor name */(0,l.sprintf)((0,l.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var R=e=>{var{label:t,field:r,fieldState:a,disabled:i,readOnly:s,loading:c,placeholder:d,helpText:v,onChange:f,generateWithAi:p=false,onClickAiButton:y,hasCustomEditorSupport:I=false,isMinimal:N=false,hideMediaButtons:R=false,hideQuickTags:P=false,editors:U=[],editorUsed:F={name:"classic",label:"Classic Editor",link:""},isMagicAi:j=false,autoFocus:X=false,onCustomEditorButtonClick:Y,onBackToWPEditorClick:Q,onFullScreenChange:q,min_height:H,max_height:V,toolbar1:G,toolbar2:K}=e;var $,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.d)();var eo=(($=k/* .tutorConfig.settings */.y.settings)===null||$===void 0?void 0:$.hide_admin_bar_for_users)==="off";var ei=(et=k/* .tutorConfig.current_user */.y.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(C/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var el=(en=k/* .tutorConfig.current_user */.y.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(C/* .TutorRoles.TUTOR_INSTRUCTOR */.er.TUTOR_INSTRUCTOR);var[es,ec]=(0,u.useState)(null);var ed=U.filter(e=>ei||el&&eo||e.name==="droip");var eu=I&&ed.length>0;var ev=eu&&F.name!=="classic";var ef=()=>{if(!A){ea({component:x/* ["default"] */.Z,props:{image:T,image2x:M}})}else if(!L){ea({component:Z/* ["default"] */.Z,props:{image:T,image2x:M}})}else{ea({component:_/* ["default"] */.Z,isMagicAi:true,props:{title:(0,l.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ep=/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:z.editorLabel,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("span",{css:z.labelWithAi,children:[t,/*#__PURE__*/(0,o/* .jsx */.tZ)(S/* ["default"] */.Z,{when:p,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("button",{type:"button",css:z.aiButton,onClick:ef,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:z.editorsButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{children:(0,l.__)("Edit with","tutor")}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:z.customEditorButtons,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(E/* ["default"] */.Z,{each:ed,children:e=>/*#__PURE__*/(0,o/* .jsx */.tZ)(m/* ["default"] */.Z,{content:e.label,delay:200,children:/*#__PURE__*/(0,o/* .jsxs */.BX)("button",{type:"button",css:z.customEditorButton,disabled:es===e.name,onClick:()=>(0,n._)(function*(){try{ec(e.name);yield Y===null||Y===void 0?void 0:Y(e);window.location.href=e.link}finally{ec(null)}})(),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(S/* ["default"] */.Z,{when:es===e.name,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{name:O[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,o/* .jsx */.tZ)(B/* ["default"] */.Z,{label:eu?ep:t,field:r,fieldState:a,disabled:i,readOnly:s,placeholder:d,helpText:v,isMagicAi:j,generateWithAi:!eu&&p,onClickAiButton:ef,replaceEntireLabel:eu,children:()=>{if(c){return/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:W/* .styleUtils.flexCenter */.i.flexCenter(),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(h/* ["default"] */.ZP,{size:20,color:D/* .colorTokens.icon["default"] */.Jv.icon["default"]})})}var e;return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:z.wrapper({isOverlayVisible:ev}),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(S/* ["default"] */.Z,{when:ev,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(J,{editorUsed:F,onBackToWPEditorClick:Q,onCustomEditorButtonClick:Y})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(b/* ["default"] */.Z,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(f){f(e)}},isMinimal:N,hideMediaButtons:R,hideQuickTags:P,autoFocus:X,onFullScreenChange:q,readonly:s,min_height:H,max_height:V,toolbar1:G,toolbar2:K})]})}})};/* ESM default export */const P=R;var z={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,i/* .css */.iv)("position:relative;",t&&(0,i/* .css */.iv)(I(),D/* .borderRadius["6"] */.E0["6"]))},editorLabel:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,i/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,";",W/* .styleUtils.flexCenter */.i.flexCenter(),";width:32px;height:32px;border-radius:",D/* .borderRadius["4"] */.E0["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",D/* .colorTokens.stroke.brand */.Jv.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["4"] */.W0["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["8"] */.W0["8"],";color:",D/* .colorTokens.text.hints */.Jv.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["4"] */.W0["4"],";"),customEditorButton:/*#__PURE__*/(0,i/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",D/* .borderRadius.circle */.E0.circle,";&:focus-visible{outline:2px solid ",D/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;height:100%;width:100%;",W/* .styleUtils.flexCenter */.i.flexCenter(),";gap:",D/* .spacing["8"] */.W0["8"],";background-color:",d()(D/* .colorTokens.background.modal */.Jv.background.modal,.6),";border-radius:",D/* .borderRadius["6"] */.E0["6"],";z-index:",D/* .zIndex.positive */.W5.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,i/* .css */.iv)("background:",D/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";color:",D/* .colorTokens.text.primary */.Jv.text.primary,";box-shadow:inset 0 -1px 0 0 ",d()("#1112133D",.24),",0 1px 0 0 ",d()("#1112133D",.8),";")}},33267:function(e,t,r){r.d(t,{R:()=>c});/* ESM import */var n=r(35944);/* ESM import */var a=r(60860);/* ESM import */var o=r(75361);/* ESM import */var i=r(70917);/* ESM import */var l=r(87363);/* ESM import */var s=/*#__PURE__*/r.n(l);var c=/*#__PURE__*/s().forwardRef((e,t)=>{var{src:r,width:a,height:i,brushSize:s,trackStack:c,pointer:u,setTrackStack:v,setPointer:f}=e;var[p,h]=(0,l.useState)(false);var[g,m]=(0,l.useState)({x:0,y:0});var b=(0,l.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.o_)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var i=(e.clientX-a.left)*(r.width/a.width);var l=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(i,l);h(true);m({x:i,y:l})};var y=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.o_)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(p){(0,o/* .drawPath */.MC)(n,i)}b.current.style.left="".concat(i.x,"px");b.current.style.top="".concat(i.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.o_)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,o/* .calculateCartesianDistance */.jo)(g,i)===0){(0,o/* .drawPath */.MC)(n,{x:i.x+1,y:i.y+1})}v(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});f(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,o/* .getCanvas */.o_)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var o;var i;if(r>t){i=e.height;o=e.height*t}else{o=e.width;i=e.width/t}var l=(e.width-o)/2;var s=(e.height-i)/2;n.drawImage(a,l,s,o,i);if(c.length===0){v([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var Z=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var k=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,l.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:d.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.tZ)("canvas",{ref:t,width:a,height:i,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:Z,onMouseLeave:k}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{ref:b,css:d.customCursor(s)})]})});var d={wrapper:/*#__PURE__*/(0,i/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",a/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",a/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",a/* .zIndex.highest */.W5.highest,";display:none;")}},68439:function(e,t,r){r.d(t,{$h:()=>v,DK:()=>p,_$:()=>h});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(35944);/* ESM import */var i=r(37861);/* ESM import */var l=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(l);/* ESM import */var c=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(52293);var v=[(0,l.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,l.__)("An abstract representation of innovation and creativity","tutor"),(0,l.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,l.__)("A modern design with digital learning icons","tutor"),(0,l.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,l.__)("A peaceful nature scene with soft colors","tutor"),(0,l.__)("A professional boardroom with sleek visuals","tutor"),(0,l.__)("A stack of books with warm, inviting lighting","tutor"),(0,l.__)("A dynamic collage of technology and education themes","tutor"),(0,l.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var f=/*#__PURE__*/d().createContext(null);var p=()=>{var e=(0,c.useContext)(f);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:l,onCloseModal:s}=e;var d=(0,i/* .useFormWithGlobalError */.O)({defaultValues:{prompt:"",style:"none"}});var[v,p]=(0,c.useState)("generation");var[h,g]=(0,c.useState)("");var[m,b]=(0,c.useState)([null,null,null,null]);var _=(0,c.useCallback)(e=>{p(e)},[]);return/*#__PURE__*/(0,o/* .jsx */.tZ)(f.Provider,{value:{state:v,onDropdownMenuChange:_,images:m,setImages:b,currentImage:h,setCurrentImage:g,field:r,fieldState:l,onCloseModal:s},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* .FormProvider */.RV,(0,a._)((0,n._)({},d),{children:t}))})}},59355:function(e,t,r){r.d(t,{E:()=>z});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var o=r(99282);/* ESM import */var i=r(35944);/* ESM import */var l=r(53052);/* ESM import */var s=r(26815);/* ESM import */var c=r(99308);/* ESM import */var d=r(3473);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(15287);/* ESM import */var g=r(56096);/* ESM import */var m=r(67149);/* ESM import */var b=r(41834);/* ESM import */var _=r(42336);/* ESM import */var y=r(79608);/* ESM import */var w=r(4359);/* ESM import */var x=r(88013);/* ESM import */var Z=r(53192);/* ESM import */var k=r(48366);/* ESM import */var C=r(39071);/* ESM import */var D=r(43666);/* ESM import */var E=r(46572);/* ESM import */var S=r(13985);/* ESM import */var W=r(29535);/* ESM import */var M=r(22456);/* ESM import */var T=r(70917);/* ESM import */var B=r(38003);/* ESM import */var I=/*#__PURE__*/r.n(B);/* ESM import */var N=r(87363);/* ESM import */var O=/*#__PURE__*/r.n(N);/* ESM import */var A=r(52293);/* ESM import */var L=r(68439);/* ESM import */var J=r(45019);/* ESM import */var R=r(95754);var P=[{label:(0,B.__)("None","tutor"),value:"none",image:Z},{label:(0,B.__)("Photo","tutor"),value:"photo",image:C},{label:(0,B.__)("Neon","tutor"),value:"neon",image:x},{label:(0,B.__)("3D","tutor"),value:"3d",image:g},{label:(0,B.__)("Painting","tutor"),value:"painting",image:k},{label:(0,B.__)("Sketch","tutor"),value:"sketch",image:E},{label:(0,B.__)("Concept","tutor"),value:"concept_art",image:b},{label:(0,B.__)("Illustration","tutor"),value:"illustration",image:w},{label:(0,B.__)("Dreamy","tutor"),value:"dreamy",image:_},{label:(0,B.__)("Filmic","tutor"),value:"filmic",image:y},{label:(0,B.__)("Retro","tutor"),value:"retrowave",image:D},{label:(0,B.__)("Black & White","tutor"),value:"black-and-white",image:m}];var z=()=>{var e=(0,A/* .useForm */.cI)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,L/* .useMagicImageGeneration */.DK)();var u=(0,h/* .useMagicImageGenerationMutation */.QL)();var{showToast:v}=(0,S/* .useToast */.p)();var[g,m]=(0,N.useState)(t.every(e=>e===null));var[b,_]=(0,N.useState)([false,false,false,false]);var y=e.watch("style");var w=e.watch("prompt");var x=!y||!w;var Z=t.some(M/* .isDefined */.$K);(0,N.useEffect)(()=>{if(u.isError){v({type:"danger",message:u.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[u.isError]);(0,N.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("form",{css:R/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){_([true,true,true,true]);m(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return u.mutateAsync(e).then(e=>{r(t=>{var r,a;var o=[...t];var i;o[n]=(i=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&i!==void 0?i:null;return o});_(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{_(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){_([false,false,false,false]);m(true)}})()),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:R/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!g,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:U.images,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.tZ)(J/* .AiImageItem */.J,{src:e,loading:b[t],index:t},t)}})})})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:R/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:U.fields,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:U.promptWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,B.__)("Visualize Your Course","tutor"),placeholder:(0,B.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:u.isPending,enableResize:false}))}),/*#__PURE__*/(0,i/* .jsxs */.BX)("button",{type:"button",css:U.inspireButton,onClick:()=>{var t=L/* .inspirationPrompts.length */.$h.length;var r=Math.floor(Math.random()*t);e.reset((0,o._)((0,a._)({},e.getValues()),{prompt:L/* .inspirationPrompts */.$h[r]}))},disabled:u.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"bulbLine"}),(0,B.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(c/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,B.__)("Styles","tutor"),options:P,disabled:u.isPending}))})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:R/* .magicAIStyles.rightFooter */.a.rightFooter,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(l/* ["default"] */.Z,{type:"submit",disabled:u.isPending||x,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:Z?"reload":"magicAi",width:24,height:24}),Z?(0,B.__)("Generate Again","tutor"):(0,B.__)("Generate Now","tutor")]})})]})]})};var U={images:/*#__PURE__*/(0,T/* .css */.iv)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",u/* .spacing["12"] */.W0["12"],";align-self:start;padding:",u/* .spacing["24"] */.W0["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,T/* .css */.iv)("display:flex;flex-direction:column;gap:",u/* .spacing["12"] */.W0["12"],";"),promptWrapper:/*#__PURE__*/(0,T/* .css */.iv)("position:relative;textarea{padding-bottom:",u/* .spacing["40"] */.W0["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,T/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,";",v/* .typography.small */.c.small(),";position:absolute;height:28px;bottom:",u/* .spacing["12"] */.W0["12"],";left:",u/* .spacing["12"] */.W0["12"],";border:1px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";border-radius:",u/* .borderRadius["4"] */.E0["4"],";display:flex;align-items:center;gap:",u/* .spacing["4"] */.W0["4"],";color:",u/* .colorTokens.text.brand */.Jv.text.brand,";padding-inline:",u/* .spacing["12"] */.W0["12"],";background-color:",u/* .colorTokens.background.white */.Jv.background.white,";&:hover{background-color:",u/* .colorTokens.background.brand */.Jv.background.brand,";color:",u/* .colorTokens.text.white */.Jv.text.white,";}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",u/* .colorTokens.background.disable */.Jv.background.disable,";color:",u/* .colorTokens.text.disable */.Jv.text.disable,";}")}},45019:function(e,t,r){r.d(t,{J:()=>W});/* ESM import */var n=r(76150);/* ESM import */var a=r(58865);/* ESM import */var o=r(35944);/* ESM import */var i=r(70917);/* ESM import */var l=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(l);/* ESM import */var c=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(53052);/* ESM import */var v=r(26815);/* ESM import */var f=r(97669);/* ESM import */var p=r(60860);/* ESM import */var h=r(76487);/* ESM import */var g=r(36352);/* ESM import */var m=r(54354);/* ESM import */var b=r(15287);/* ESM import */var _=r(75361);/* ESM import */var y=r(29535);/* ESM import */var w=r(34403);/* ESM import */var x=r(68439);function Z(){var e=(0,a._)(["\n      background-position: top left;\n    "]);Z=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);k=function t(){return e};return e}function C(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);C=function t(){return e};return e}function D(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);D=function t(){return e};return e}function E(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);E=function t(){return e};return e}var S=[{label:(0,l.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', 'tutor'),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', 'tutor'),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,l.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{name:"download",width:24,height:24})}];var W=e=>{var{src:t,loading:r,index:a}=e;var i=(0,c.useRef)(null);var[s,d]=(0,c.useState)(false);var{onDropdownMenuChange:p,setCurrentImage:h,onCloseModal:y,field:Z}=(0,x/* .useMagicImageGeneration */.DK)();var k=(0,b/* .useStoreAIGeneratedImageMutation */.H9)();if(r||!t){return/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:T.loader(a+1)})}return/*#__PURE__*/(0,o/* .jsxs */.BX)(o/* .Fragment */.HY,{children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:T.image({isActive:k.isPending}),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("img",{src:t,alt:(0,l.__)("Generated Image","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{"data-actions":true,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:T.useButton,children:/*#__PURE__*/(0,o/* .jsxs */.BX)(u/* ["default"] */.Z,{variant:"primary",disabled:k.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield k.mutateAsync({image:t});if(e.data){Z.onChange(e.data);y()}})(),loading:k.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{name:"download",width:24,height:24}),(0,l.__)("Use This","tutor")]})}),/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* ["default"] */.Z,{variant:"primary",size:"icon",css:T.threeDots,ref:i,onClick:()=>d(true),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(v/* ["default"] */.Z,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{triggerRef:i,isOpen:s,arrow:true,closePopover:()=>{d(false)},animationType:m/* .AnimationType.slideDown */.ru.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:T.dropdownOptions,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(g/* ["default"] */.Z,{each:S,children:(e,r)=>/*#__PURE__*/(0,o/* .jsxs */.BX)("button",{type:"button",css:T.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{h(t);p(e.value);break}case"download":{var r="".concat((0,w/* .nanoid */.x0)(),".png");(0,_/* .downloadBase64Image */.Lp)(t,r);break}default:break}d(false)},children:[e.icon,e.label]},r)})})})]})};var M=/*#__PURE__*/(0,i/* .keyframes */.F4)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var T={loader:e=>/*#__PURE__*/(0,i/* .css */.iv)("border-radius:",p/* .borderRadius["12"] */.E0["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",M," 2s linear infinite;",e===1&&(0,i/* .css */.iv)(Z())," ",e===2&&(0,i/* .css */.iv)(k()),"		",e===3&&(0,i/* .css */.iv)(C()),"		",e===4&&(0,i/* .css */.iv)(D())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,i/* .css */.iv)("width:100%;height:100%;overflow:hidden;border-radius:",p/* .borderRadius["12"] */.E0["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,i/* .css */.iv)(E(),p/* .colorTokens.stroke.brand */.Jv.stroke.brand),"    &:hover,&:focus-within{outline-color:",p/* .colorTokens.stroke.brand */.Jv.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;top:",p/* .spacing["8"] */.W0["8"],";right:",p/* .spacing["8"] */.W0["8"],";border-radius:",p/* .borderRadius["4"] */.E0["4"],";"),useButton:/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;left:50%;bottom:",p/* .spacing["12"] */.W0["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",p/* .spacing["4"] */.W0["4"],";}"),dropdownOptions:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;flex-direction:column;padding-block:",p/* .spacing["8"] */.W0["8"],";"),dropdownItem:/*#__PURE__*/(0,i/* .css */.iv)(h/* .typography.small */.c.small(),";",y/* .styleUtils.resetButton */.i.resetButton,";height:40px;display:flex;gap:",p/* .spacing["10"] */.W0["10"],";align-items:center;transition:background-color 0.3s ease;color:",p/* .colorTokens.text.title */.Jv.text.title,";padding-inline:",p/* .spacing["8"] */.W0["8"],";cursor:pointer;svg{color:",p/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover{background-color:",p/* .colorTokens.background.hover */.Jv.background.hover,";}")}},81828:function(e,t,r){r.d(t,{Z:()=>I});/* ESM import */var n=r(76150);/* ESM import */var a=r(7409);/* ESM import */var o=r(99282);/* ESM import */var i=r(35944);/* ESM import */var l=r(53052);/* ESM import */var s=r(26815);/* ESM import */var c=r(98978);/* ESM import */var d=r(60309);/* ESM import */var u=r(3473);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(4867);/* ESM import */var g=r(37861);/* ESM import */var m=r(15287);/* ESM import */var b=r(75361);/* ESM import */var _=r(29535);/* ESM import */var y=r(34403);/* ESM import */var w=r(70917);/* ESM import */var x=r(38003);/* ESM import */var Z=/*#__PURE__*/r.n(x);/* ESM import */var k=r(87363);/* ESM import */var C=/*#__PURE__*/r.n(k);/* ESM import */var D=r(52293);/* ESM import */var E=r(33267);/* ESM import */var S=r(68439);/* ESM import */var W=r(95754);var M=620;var T=620;var B=()=>{var e=(0,g/* .useFormWithGlobalError */.O)({defaultValues:{brush_size:40,prompt:""}});var t=(0,m/* .useMagicFillImageMutation */.vN)();var r=(0,k.useRef)(null);var{onDropdownMenuChange:v,currentImage:f,field:_,onCloseModal:Z}=(0,S/* .useMagicImageGeneration */.DK)();var C=(0,m/* .useStoreAIGeneratedImageMutation */.H9)();var B=(0,h/* .useDebounce */.N)(e.watch("brush_size",40));var[I,N]=(0,k.useState)([]);var[A,L]=(0,k.useState)(1);var J=(0,k.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var o of t.slice(0,e)){a.putImageData(o,0,0)}},[]);(0,k.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=B},[B]);(0,k.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){J(A+1,I);L(e=>Math.min(e+1,I.length));return}if(e.key.toUpperCase()==="Z"){J(A-1,I);L(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[A,I,J]);if(!f){return null}return/*#__PURE__*/(0,i/* .jsxs */.BX)("form",{css:W/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var o={prompt:e.prompt,image:(0,b/* .getImageData */.n$)(n)};var i=yield t.mutateAsync(o);if(i){var l=new Image;l.onload=()=>{n.width=M;n.height=T;a.drawImage(l,0,0,n.width,n.height);a.lineWidth=B;a.lineJoin="round";a.lineCap="round"};l.src=i}})()),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:W/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.leftWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.actionBar,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.backButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:O.backButton,onClick:()=>v("generation"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"arrowLeft"})}),(0,x.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.actions,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"ghost",disabled:I.length===0,onClick:()=>{J(1,I);N(I.slice(0,1));L(1)},children:(0,x.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)(c/* .Separator */.Z,{variant:"vertical",css:/*#__PURE__*/(0,w/* .css */.iv)("min-height:16px;")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.undoRedo,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A<=1,onClick:()=>{J(A-1,I);L(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A===I.length,onClick:()=>{J(A+1,I);L(e=>Math.min(e+1,I.length))},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.canvasAndLoading,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(E/* .DrawingCanvas */.R,{ref:r,width:M,height:T,src:f,brushSize:B,trackStack:I,pointer:A,setTrackStack:N,setPointer:L}),/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{when:t.isPending,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.loading})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.footerActions,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.footerActionsLeft,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"secondary",onClick:()=>{var e="".concat((0,y/* .nanoid */.x0)(),".png");var{canvas:t}=(0,b/* .getCanvas */.o_)(r);if(!t)return;(0,b/* .downloadBase64Image */.Lp)((0,b/* .getImageData */.n$)(t),e)},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:W/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.fields,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(D/* .Controller */.Qr,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(D/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,(0,o._)((0,a._)({},e),{label:(0,x.__)("Describe the Fill","tutor"),placeholder:(0,x.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:[W/* .magicAIStyles.rightFooter */.a.rightFooter,/*#__PURE__*/(0,w/* .css */.iv)("margin-top:auto;")],children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.footerButtons,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)(l/* ["default"] */.Z,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicWand",width:24,height:24}),(0,x.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"primary_outline",disabled:t.isPending,loading:C.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,b/* .getCanvas */.o_)(r);if(!e)return;var t=yield C.mutateAsync({image:(0,b/* .getImageData */.n$)(e)});if(t.data){_.onChange(t.data);Z()}})(),children:(0,x.__)("Use Image","tutor")})]})})]})]})};/* ESM default export */const I=B;var N={loading:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{left:0%;}100%{left:100%;}")};var O={canvasAndLoading:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;z-index:",v/* .zIndex.positive */.W5.positive,";"),loading:/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;top:0;left:0;width:100%;height:100%;background:",v/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",N.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",N.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["12"] */.W0["12"],";"),leftWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";padding-block:",v/* .spacing["16"] */.W0["16"],";"),footerButtons:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";"),footerActions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),actions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.W0["16"],";"),undoRedo:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),backButtonWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";",f/* .typography.body */.c.body("medium"),";color:",v/* .colorTokens.text.title */.Jv.text.title,";"),backButton:/*#__PURE__*/(0,w/* .css */.iv)(_/* .styleUtils.resetButton */.i.resetButton,";width:24px;height:24px;border-radius:",v/* .borderRadius["4"] */.E0["4"],";border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,w/* .css */.iv)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",v/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",v/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",v/* .zIndex.highest */.W5.highest,";display:none;")}},95754:function(e,t,r){r.d(t,{a:()=>o});/* ESM import */var n=r(60860);/* ESM import */var a=r(70917);var o={wrapper:/*#__PURE__*/(0,a/* .css */.iv)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",n/* .Breakpoint.tablet */.Uo.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,a/* .css */.iv)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",n/* .zIndex.level */.W5.level,";"),right:/*#__PURE__*/(0,a/* .css */.iv)("padding:",n/* .spacing["20"] */.W0["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",n/* .zIndex.positive */.W5.positive,";"),rightFooter:/*#__PURE__*/(0,a/* .css */.iv)("display:flex;flex-direction:column;gap:",n/* .spacing["8"] */.W0["8"],";margin-top:auto;padding-top:80px;")}},36853:function(e,t,r){r.d(t,{Z:()=>d});/* ESM import */var n=r(35944);/* ESM import */var a=r(68439);/* ESM import */var o=r(59355);/* ESM import */var i=r(81828);/* ESM import */var l=r(22128);function s(){var{state:e}=(0,a/* .useMagicImageGeneration */.DK)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.tZ)(o/* .ImageGeneration */.E,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* ["default"] */.Z,{});default:return null}}var c=e=>{var{title:t,icon:r,closeModal:o,field:i,fieldState:c}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)(l/* ["default"] */.Z,{onClose:o,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(a/* .MagicImageGenerationProvider */._$,{field:i,fieldState:c,onCloseModal:o,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(s,{})})})};/* ESM default export */const d=c},36951:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(35944);/* ESM import */var a=r(70917);/* ESM import */var o=r(26815);/* ESM import */var i=r(68214);/* ESM import */var l=r(62067);/* ESM import */var s=r(74053);/* ESM import */var c=r(60860);/* ESM import */var d=r(76487);/* ESM import */var u=r(17106);/* ESM import */var v=r(68675);/* ESM import */var f=r(29535);var p=e=>{var{children:t,onClose:r,title:a,subtitle:s,icon:c,headerChildren:d,entireHeader:f,actions:p,maxWidth:h=1218,blurTriggerElement:m=true}=e;(0,v/* .useScrollLock */.Pr)();return/*#__PURE__*/(0,n/* .jsx */.tZ)(l/* ["default"] */.Z,{blurPrevious:m,children:/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:g.container({maxWidth:h}),children:[/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:g.header({hasHeaderChildren:!!d}),children:/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:f,fallback:/*#__PURE__*/(0,n/* .jsxs */.BX)(n/* .Fragment */.HY,{children:[/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:g.headerContent,children:[/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:g.iconWithTitle,children:[/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:c,children:c}),/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:a,children:/*#__PURE__*/(0,n/* .jsx */.tZ)("h6",{css:g.title,title:typeof a==="string"?a:"",children:a})})]}),/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:s,children:/*#__PURE__*/(0,n/* .jsx */.tZ)("span",{css:g.subtitle,children:s})})]}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:g.headerChildren,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:d,children:d})}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:g.actionsWrapper,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(u/* ["default"] */.Z,{when:p,fallback:/*#__PURE__*/(0,n/* .jsx */.tZ)("button",{type:"button",css:g.closeButton,onClick:r,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(o/* ["default"] */.Z,{name:"times",width:14,height:14})}),children:p})})]}),children:f})}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:g.content,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* ["default"] */.Z,{children:t})})]})})};/* ESM default export */const h=p;var g={container:e=>{var{maxWidth:t}=e;return/*#__PURE__*/(0,a/* .css */.iv)("position:relative;background:",c/* .colorTokens.background.white */.Jv.background.white,";margin:",s/* .modal.MARGIN_TOP */.oC.MARGIN_TOP,"px auto ",c/* .spacing["24"] */.W0["24"],";height:100%;max-width:",t,"px;box-shadow:",c/* .shadow.modal */.AF.modal,";border-radius:",c/* .borderRadius["10"] */.E0["10"],";overflow:hidden;bottom:0;z-index:",c/* .zIndex.modal */.W5.modal,";width:100%;",c/* .Breakpoint.smallTablet */.Uo.smallTablet,"{width:90%;}")},header:e=>{var{hasHeaderChildren:t}=e;return/*#__PURE__*/(0,a/* .css */.iv)("display:grid;grid-template-columns:",t?"1fr auto 1fr":"1fr auto auto",";gap:",c/* .spacing["8"] */.W0["8"],";align-items:center;width:100%;height:",s/* .modal.HEADER_HEIGHT */.oC.HEADER_HEIGHT,"px;background:",c/* .colorTokens.background.white */.Jv.background.white,";border-bottom:1px solid ",c/* .colorTokens.stroke.divider */.Jv.stroke.divider,";position:sticky;")},headerContent:/*#__PURE__*/(0,a/* .css */.iv)("place-self:center start;display:inline-flex;align-items:center;gap:",c/* .spacing["12"] */.W0["12"],";padding-left:",c/* .spacing["24"] */.W0["24"],";",c/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-left:",c/* .spacing["16"] */.W0["16"],";}"),headerChildren:/*#__PURE__*/(0,a/* .css */.iv)("place-self:center center;"),iconWithTitle:/*#__PURE__*/(0,a/* .css */.iv)("display:inline-flex;align-items:center;gap:",c/* .spacing["4"] */.W0["4"],";flex-shrink:0;color:",c/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),title:/*#__PURE__*/(0,a/* .css */.iv)(d/* .typography.heading6 */.c.heading6("medium"),";color:",c/* .colorTokens.text.title */.Jv.text.title,";text-transform:none;letter-spacing:normal;"),subtitle:/*#__PURE__*/(0,a/* .css */.iv)(f/* .styleUtils.text.ellipsis */.i.text.ellipsis(1)," ",d/* .typography.caption */.c.caption(),";color:",c/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:",c/* .spacing["12"] */.W0["12"],";border-left:1px solid ",c/* .colorTokens.icon.hints */.Jv.icon.hints,";"),actionsWrapper:/*#__PURE__*/(0,a/* .css */.iv)("place-self:center end;display:inline-flex;gap:",c/* .spacing["16"] */.W0["16"],";padding-right:",c/* .spacing["24"] */.W0["24"],";",c/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-right:",c/* .spacing["16"] */.W0["16"],";}"),closeButton:/*#__PURE__*/(0,a/* .css */.iv)(f/* .styleUtils.resetButton */.i.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.E0.circle,";background:",c/* .colorTokens.background.white */.Jv.background.white,";&:focus,&:active,&:hover{background:",c/* .colorTokens.background.white */.Jv.background.white,";}svg{color:",c/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",c/* .colorTokens.icon.hover */.Jv.icon.hover,";}}:focus{box-shadow:",c/* .shadow.focus */.AF.focus,";}"),content:/*#__PURE__*/(0,a/* .css */.iv)("height:calc(100% - ",s/* .modal.HEADER_HEIGHT */.oC.HEADER_HEIGHT+s/* .modal.MARGIN_TOP */.oC.MARGIN_TOP,"px);background-color:",c/* .colorTokens.surface.courseBuilder */.Jv.surface.courseBuilder,";overflow-x:hidden;",f/* .styleUtils.overflowYAuto */.i.overflowYAuto)}},4867:function(e,t,r){r.d(t,{N:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=/*#__PURE__*/r.n(n);var o=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},41819:function(e,t,r){r.d(t,{a:()=>s});/* ESM import */var n=r(7409);/* ESM import */var a=r(22456);/* ESM import */var o=r(87363);/* ESM import */var i=/*#__PURE__*/r.n(o);var l={defaultValue:false};var s=e=>{var t=(0,o.useRef)(null);var r=(0,n._)({},l,e);var[i,s]=(0,o.useState)(r.defaultValue);(0,o.useEffect)(()=>{if(!(0,a/* .isDefined */.$K)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){s(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){s(false);return}s(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:i}}},43372:function(e,t,r){r.d(t,{Z:()=>u});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(38003);/* ESM import */var i=/*#__PURE__*/r.n(o);/* ESM import */var l=r(87363);/* ESM import */var s=/*#__PURE__*/r.n(l);/* ESM import */var c=r(13985);var d=e=>{var{options:t={},onChange:r,initialFiles:i}=e;var{showToast:s}=(0,c/* .useToast */.p)();var d=(0,l.useMemo)(()=>i?Array.isArray(i)?i:[i]:[],[i]);var u=(0,l.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[v,f]=(0,l.useState)(d);(0,l.useEffect)(()=>{if(d&&!v.length){f(d)}},[v,d]);var p=(0,l.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();v.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=v.filter(e=>n.has(e.id));var i=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){s({// translators: %s is the file title
message:(0,o.sprintf)((0,o.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var l=u.multiple?[...a,...i]:i.slice(0,1);if(u.maxFiles&&l.length>u.maxFiles){s({// translators: %d is the maximum number of files allowed
message:(0,o.sprintf)((0,o.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}f(l);r===null||r===void 0?void 0:r(u.multiple?l:l[0]||null);t.close()});t.open()},[u,r,v,s]);var h=(0,l.useCallback)(()=>{f([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:p,existingFiles:v,resetFiles:h}};/* ESM default export */const u=d},63189:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(58865);/* ESM import */var a=r(35944);/* ESM import */var o=r(60860);/* ESM import */var i=r(29535);/* ESM import */var l=r(70917);/* ESM import */var s=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(s);function d(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);f=function t(){return e};return e}var p=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:o="horizontal",disabled:i=false,wrapperCss:l}=e;var c=(0,s.useRef)(n.map(()=>/*#__PURE__*/(0,s.createRef)()));var[d,u]=(0,s.useState)();(0,s.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,o,i;var l=c.current[r];var s={width:((n=l.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=l.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((o=l.current)===null||o===void 0?void 0:o.offsetLeft)||0,top:((i=l.current)===null||i===void 0?void 0:i.offsetTop)||0};e[t.value]=s;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:g.container,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:[g.wrapper(o),l],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{onClick:()=>{r(e.value)},css:g.tabButton({isActive:t===e.value,orientation:o}),disabled:i||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:c.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.BX)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{css:g.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{css:g.indicator((d===null||d===void 0?void 0:d[t])||{width:0,height:0,left:0,top:0},o)})]})};/* ESM default export */const h=p;var g={container:/*#__PURE__*/(0,l/* .css */.iv)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,l/* .css */.iv)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",o/* .shadow.tabs */.AF.tabs,";",e==="vertical"&&(0,l/* .css */.iv)(d())),indicator:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",o/* .colorTokens.brand.blue */.Jv.brand.blue,";border-radius:",o/* .borderRadius["4"] */.E0["4"]," ",o/* .borderRadius["4"] */.E0["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,l/* .css */.iv)(u(),e.height,e.top,o/* .borderRadius["4"] */.E0["4"],o/* .borderRadius["4"] */.E0["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,l/* .css */.iv)(i/* .styleUtils.resetButton */.i.resetButton,";font-size:",o/* .fontSize["15"] */.JB["15"],";line-height:",o/* .lineHeight["20"] */.Nv["20"],";display:flex;justify-content:center;align-items:center;gap:",o/* .spacing["6"] */.W0["6"],";padding:",o/* .spacing["12"] */.W0["12"]," ",o/* .spacing["20"] */.W0["20"],";color:",o/* .colorTokens.text.subdued */.Jv.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",o/* .colorTokens.text.subdued */.Jv.text.subdued,";box-shadow:none;}& > svg{color:",o/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",r==="vertical"&&(0,l/* .css */.iv)(v(),o/* .colorTokens.stroke.border */.Jv.stroke.border,o/* .colorTokens.stroke.border */.Jv.stroke.border)," ",t&&(0,l/* .css */.iv)(f(),o/* .colorTokens.background.white */.Jv.background.white,o/* .colorTokens.text.primary */.Jv.text.primary,o/* .colorTokens.text.subdued */.Jv.text.subdued,o/* .colorTokens.icon.brand */.Jv.icon.brand),"    &:disabled{color:",o/* .colorTokens.text.disable */.Jv.text.disable,";&::before{background:",o/* .colorTokens.text.disable */.Jv.text.disable,";}}&:focus-visible{outline:2px solid ",o/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-2px;border-radius:",o/* .borderRadius["4"] */.E0["4"],";}")},activeBadge:/*#__PURE__*/(0,l/* .css */.iv)("display:inline-block;height:8px;width:8px;border-radius:",o/* .borderRadius.circle */.E0.circle,";background-color:",o/* .colorTokens.color.success["80"] */.Jv.color.success["80"],";")}},52130:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(98848);/* ESM import */var i=r(58865);/* ESM import */var l=r(35944);/* ESM import */var s=r(70917);/* ESM import */var c=r(86138);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(26815);/* ESM import */var p=r(60860);/* ESM import */var h=r(76487);/* ESM import */var g=r(54354);/* ESM import */var m=r(98567);/* ESM import */var b=r(29535);/* ESM import */var _=r(97669);function y(){var e=(0,i._)(["\n      padding-block: ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n      padding: "," ",";\n      ",";\n    "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      color: ",";\n      svg {\n        color: ",";\n      }\n\n      &:hover:not(:disabled) {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n\n      &:active {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n    "]);x=function t(){return e};return e}function Z(){var e=(0,i._)(["\n      background-color: ",";\n      svg {\n        color: ",";\n      }\n    "]);Z=function t(){return e};return e}function k(){var e=(0,i._)(["\n      background-color: ",";\n      :hover {\n        background-color: ",";\n        svg {\n          color: ",";\n        }\n      }\n    "]);k=function t(){return e};return e}var C=e=>{var{text:t,icon:r,onClick:i,onClosePopover:s,isTrash:c=false,size:d="medium",buttonCss:u,disabled:v}=e,f=(0,o._)(e,["text","icon","onClick","onClosePopover","isTrash","size","buttonCss","disabled"]);return/*#__PURE__*/(0,l/* .jsxs */.BX)("button",(0,a._)((0,n._)({type:"button",css:[S.option({isTrash:c,size:d}),u],onClick:e=>{if(i){i(e)}if(s){s()}},disabled:v},f),{children:[r&&r,/*#__PURE__*/(0,l/* .jsx */.tZ)("span",{children:t})]}))};var D=e=>{var{onClick:t,isOpen:r,disabled:i=false,closePopover:s,placement:c=m/* .POPOVER_PLACEMENTS.BOTTOM_RIGHT */.h_.BOTTOM_RIGHT,children:d,animationType:p=g/* .AnimationType.slideLeft */.ru.slideLeft,dotsOrientation:h="horizontal",maxWidth:b="148px",isInverse:y=false,arrow:w=false,size:x="medium",closeOnEscape:Z=true,wrapperCss:k}=e,C=(0,o._)(e,["onClick","isOpen","disabled","closePopover","placement","children","animationType","dotsOrientation","maxWidth","isInverse","arrow","size","closeOnEscape","wrapperCss"]);var D=(0,u.useRef)(null);return/*#__PURE__*/(0,l/* .jsxs */.BX)(l/* .Fragment */.HY,{children:[/*#__PURE__*/(0,l/* .jsx */.tZ)("button",(0,a._)((0,n._)({type:"button",ref:D,onClick:t,css:[S.button({isOpen:r,isInverse:y,isDisabled:i}),k],disabled:i},C),{children:/*#__PURE__*/(0,l/* .jsx */.tZ)(f/* ["default"] */.Z,{name:h==="horizontal"?"threeDots":"threeDotsVertical",width:32,height:32})})),/*#__PURE__*/(0,l/* .jsx */.tZ)(_/* ["default"] */.Z,{gap:13,maxWidth:b,placement:c,triggerRef:D,isOpen:r,closePopover:s,animationType:p,arrow:w,closeOnEscape:Z,children:/*#__PURE__*/(0,l/* .jsx */.tZ)("div",{css:S.wrapper({size:x}),children:v().Children.map(d,e=>{if(/*#__PURE__*/v().isValidElement(e)){var t={size:x};return /*#__PURE__*/v().cloneElement(e,t)}return e})})})]})};D.Option=C;/* ESM default export */const E=D;var S={wrapper:e=>{var{size:t="medium"}=e;return/*#__PURE__*/(0,s/* .css */.iv)("padding-block:",p/* .spacing["8"] */.W0["8"],";position:relative;",t==="small"&&(0,s/* .css */.iv)(y(),p/* .spacing["4"] */.W0["4"]))},option:e=>{var{isTrash:t=false,size:r="medium"}=e;return/*#__PURE__*/(0,s/* .css */.iv)(b/* .styleUtils.resetButton */.i.resetButton,";",h/* .typography.body */.c.body(),";width:100%;padding:",p/* .spacing["10"] */.W0["10"]," ",p/* .spacing["20"] */.W0["20"],";transition:background-color 0.3s ease-in-out;cursor:pointer;display:flex;align-items:center;gap:",p/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background:none;color:",p/* .colorTokens.text.primary */.Jv.text.primary,";}svg{flex-shrink:0;color:",p/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",r==="small"&&(0,s/* .css */.iv)(w(),p/* .spacing["8"] */.W0["8"],p/* .spacing["16"] */.W0["16"],h/* .typography.small */.c.small("medium")),":hover:not(:disabled){background-color:",p/* .colorTokens.background.hover */.Jv.background.hover,";color:",p/* .colorTokens.text.title */.Jv.text.title,";svg{color:",p/* .colorTokens.icon.hover */.Jv.icon.hover,";filter:grayscale(0%);}}:disabled{cursor:not-allowed;color:",p/* .colorTokens.text.disable */.Jv.text.disable,";svg{color:",p/* .colorTokens.icon.disable.background */.Jv.icon.disable.background,";}}",t&&(0,s/* .css */.iv)(x(),p/* .colorTokens.text.error */.Jv.text.error,p/* .colorTokens.icon.error */.Jv.icon.error,p/* .colorTokens.text.error */.Jv.text.error,d()(p/* .colorTokens.bg.error */.Jv.bg.error,.1),p/* .colorTokens.icon.error */.Jv.icon.error,p/* .colorTokens.text.error */.Jv.text.error,p/* .colorTokens.color.danger["40"] */.Jv.color.danger["40"],p/* .colorTokens.icon.error */.Jv.icon.error),":focus-visible{outline:2px solid ",p/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-4px;border-radius:",p/* .borderRadius.input */.E0.input,";}")},button:e=>{var{isOpen:t=false,isInverse:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,s/* .css */.iv)(b/* .styleUtils.resetButton */.i.resetButton,";width:32px;height:32px;border-radius:",p/* .borderRadius.circle */.E0.circle,";display:flex;justify-content:center;align-items:center;transition:background-color 0.3s ease-in-out;svg{color:",p/* .colorTokens.icon["default"] */.Jv.icon["default"],";flex-shrink:0;}:hover{background-color:",p/* .colorTokens.background.hover */.Jv.background.hover,";svg{color:",p/* .colorTokens.icon["default"] */.Jv.icon["default"],";}}&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",p/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}",t&&(0,s/* .css */.iv)(Z(),p/* .colorTokens.background.hover */.Jv.background.hover,p/* .colorTokens.icon.brand */.Jv.icon.brand)," ",r&&(0,s/* .css */.iv)(k(),p/* .colorTokens.background.white */.Jv.background.white,p/* .colorTokens.background.white */.Jv.background.white,!n&&p/* .colorTokens.icon.brand */.Jv.icon.brand),":disabled{cursor:not-allowed;}")}}},19918:function(e,t,r){r.d(t,{Cp:()=>d,Fv:()=>v});/* ESM import */var n=r(7409);/* ESM import */var a=r(24333);/* ESM import */var o=r(49982);/* ESM import */var i=r(65228);/* ESM import */var l=r(82340);/* ESM import */var s=r(84225);var c=e=>{return l/* .wpAjaxInstance.get */.R.get(s/* ["default"].GET_COURSE_LIST */.Z.GET_COURSE_LIST,{params:e})};var d=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.a)({queryKey:["PrerequisiteCourses",t],queryFn:()=>c((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:o/* .keepPreviousData */.Wk,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return l/* .wpAjaxInstance.post */.R.post(s/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.Z.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var v=()=>{return(0,i/* .useMutation */.D)({mutationFn:u})};var f=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var p=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>f(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},28089:function(e,t,r){r.d(t,{O:()=>s,h:()=>l});/* ESM import */var n=r(7409);/* ESM import */var a=r(99282);/* ESM import */var o=r(94697);/* ESM import */var i=r(45587);var l=e=>(0,i/* .defaultAnimateLayoutChanges */.cP)((0,a._)((0,n._)({},e),{wasDragging:true}));var s={droppable:{strategy:o/* .MeasuringStrategy.Always */.uN.Always}}},75361:function(e,t,r){r.d(t,{Lp:()=>i,MC:()=>n,jo:()=>a,n$:()=>c,o_:()=>s});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function o(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var o=0;o<t.length;o++){a[o]=t.charCodeAt(o)}return new Blob([n],{type:r})}function i(e,t){var r=o(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function l(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var s=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var c=e=>{return e.toDataURL("image/png")}},53754:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},26402:function(e,t,r){r.d(t,{N:()=>o});/* ESM import */var n=r(1493);/* ESM import */var a=r(91336);class o extends a/* .TZDateMini */.Z{//#region static
static tz(e,...t){return t.length?new o(...t,e):new o(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.P)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new o(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new o(+new Date(e),this.timeZone)}}},91336:function(e,t,r){r.d(t,{Z:()=>a});/* ESM import */var n=r(4973);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.I)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));s(this,NaN);i(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.I)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);i(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const o=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!o.test(e))return;const t=e.replace(o,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);l(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);i(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function i(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.I)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function l(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
s(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function s(e){// Save the time zone offset before all the adjustments
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const a=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
a.setUTCHours(a.getUTCHours()-1);// Calculate if we are on the system DST hour.
const o=-new Date(+e).getTimezoneOffset();const i=-new Date(+a).getTimezoneOffset();const l=o-i;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(l&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const c=o-r;if(c)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);//#endregion
//#region Seconds System diff adjustment
const d=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
d.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=o>0?d.getSeconds():(d.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const v=Math.round(-((0,n/* .tzOffset */.I)(e.timeZone,e)*60))%60;if(v||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+v);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+v+u)}//#endregion
//#region Post-adjustment DST fix
const f=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const g=h-p;const m=p!==r;const b=g-c;if(m&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=p-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},58184:function(e,t,r){r.d(t,{N9:()=>/* reexport safe */a.N});/* ESM import */var n=r(53754);/* ESM import */var a=r(26402);/* ESM import */var o=r(91336);/* ESM import */var i=r(20981)},20981:function(e,t,r){/* ESM import */var n=r(26402);/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const a=e=>t=>TZDate.tz(e,+new Date(t))},1493:function(e,t,r){r.d(t,{P:()=>n});/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function n(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")}},4973:function(e,t,r){r.d(t,{I:()=>o});const n={};const a={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function o(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const o=r(t).split("GMT")[1];if(o in a)return a[o];return l(o,o.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(i);if(t)return l(e,t.slice(1));return NaN}}const i=/([+-]\d\d):?(\d\d)?/;function l(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+o:r*60-n-o}},33233:function(e,t,r){r.d(t,{y:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(93242);/* ESM import */var o=r(99469);"use client";// src/useIsFetching.ts
function i(e,t){const r=(0,o/* .useQueryClient */.NL)(t);const i=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>i.subscribe(a/* .notifyManager.batchCalls */.Vr.batchCalls(e)),[i]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},57684:function(e,t,r){r.d(t,{_:()=>D});/* ESM import */var n=r(87363);/* ESM import */var a=r(58184);/* ESM import */var o=r(6156);/* ESM import */var i=r(79237);/* ESM import */var l=r(65469);/* ESM import */var s=r(48834);/* ESM import */var c=r(52395);/* ESM import */var d=r(18296);/* ESM import */var u=r(54054);/* ESM import */var v=r(45734);/* ESM import */var f=r(54908);/* ESM import */var p=r(71264);/* ESM import */var h=r(64347);/* ESM import */var g=r(77614);/* ESM import */var m=r(62464);/* ESM import */var b=r(58100);/* ESM import */var _=r(84332);/* ESM import */var y=r(30833);/* ESM import */var w=r(5293);/* ESM import */var x=r(35625);/* ESM import */var Z=r(70162);/* ESM import */var k=r(94232);/* ESM import */var C=r(20311);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function D(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new a/* .TZDate */.N9(t.today,t.timeZone)}if(t.month){t.month=new a/* .TZDate */.N9(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new a/* .TZDate */.N9(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new a/* .TZDate */.N9(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new a/* .TZDate */.N9(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new a/* .TZDate */.N9(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new a/* .TZDate */.N9(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new a/* .TZDate */.N9(t.selected.from,t.timeZone):undefined,to:t.selected.to?new a/* .TZDate */.N9(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:D,labels:E,dateLib:S,locale:W,classNames:M}=(0,n.useMemo)(()=>{const e={...i/* .enUS */._,...t.locale};const r=new l/* .DateLib */.Z1({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,d/* .getComponents */.O)(t.components),formatters:(0,f/* .getFormatters */._)(t.formatters),labels:{...b,...t.labels},locale:e,classNames:{...(0,v/* .getDefaultClassNames */.U)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:T,mode:B,navLayout:I,numberOfMonths:N=1,onDayBlur:O,onDayClick:A,onDayFocus:L,onDayKeyDown:J,onDayMouseEnter:R,onDayMouseLeave:P,onNextClick:z,onPrevClick:U,showWeekNumber:F,styles:j}=t;const{formatCaption:X,formatDay:Y,formatMonthDropdown:Q,formatWeekNumber:q,formatWeekNumberHeader:H,formatWeekdayName:V,formatYearDropdown:G}=D;const K=(0,y/* .useCalendar */.G)(t,S);const{days:$,months:ee,navStart:et,navEnd:er,previousMonth:en,nextMonth:ea,goToMonth:eo}=K;const ei=(0,s/* .createGetModifiers */.H)($,t,et,er,S);const{isSelected:el,select:es,selected:ec}=(0,Z/* .useSelection */.c)(t,S)??{};const{blur:ed,focused:eu,isFocusTarget:ev,moveFocus:ef,setFocused:ep}=(0,x/* .useFocus */.K)(t,K,ei,el??(()=>false),S);const{labelDayButton:eh,labelGridcell:eg,labelGrid:em,labelMonthDropdown:eb,labelNav:e_,labelPrevious:ey,labelNext:ew,labelWeekday:ex,labelWeekNumber:eZ,labelWeekNumberHeader:ek,labelYearDropdown:eC}=E;const eD=(0,n.useMemo)(()=>(0,g/* .getWeekdays */.D)(S,t.ISOWeek),[S,t.ISOWeek]);const eE=B!==undefined||A!==undefined;const eS=(0,n.useCallback)(()=>{if(!en)return;eo(en);U?.(en)},[en,eo,U]);const eW=(0,n.useCallback)(()=>{if(!ea)return;eo(ea);z?.(ea)},[eo,ea,z]);const eM=(0,n.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();ep(e);es?.(e.date,t,r);A?.(e.date,t,r)},[es,A,ep]);const eT=(0,n.useCallback)((e,t)=>r=>{ep(e);L?.(e.date,t,r)},[L,ep]);const eB=(0,n.useCallback)((e,t)=>r=>{ed();O?.(e.date,t,r)},[ed,O]);const eI=(0,n.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];ef(e,t)}J?.(e.date,r,n)},[ef,J,t.dir]);const eN=(0,n.useCallback)((e,t)=>r=>{R?.(e.date,t,r)},[R]);const eO=(0,n.useCallback)((e,t)=>r=>{P?.(e.date,t,r)},[P]);const eA=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=S.setMonth(S.startOfMonth(e),r);eo(n)},[S,eo]);const eL=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=S.setYear(S.startOfMonth(e),r);eo(n)},[S,eo]);const{className:eJ,style:eR}=(0,n.useMemo)(()=>({className:[M[o.UI.Root],t.className].filter(Boolean).join(" "),style:{...j?.[o.UI.Root],...t.style}}),[M,t.className,t.style,j]);const eP=(0,u/* .getDataAttributes */.P)(t);const ez=(0,n.useRef)(null);(0,_/* .useAnimation */._)(ez,Boolean(t.animate),{classNames:M,months:ee,focused:eu,dateLib:S});const eU={dayPickerProps:t,selected:ec,select:es,isSelected:el,months:ee,nextMonth:ea,previousMonth:en,goToMonth:eo,getModifiers:ei,components:r,classNames:M,styles:j,labels:E,formatters:D};return n.createElement(w/* .dayPickerContext.Provider */.Z.Provider,{value:eU},n.createElement(r.Root,{rootRef:t.animate?ez:undefined,className:eJ,style:eR,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...eP},n.createElement(r.Months,{className:M[o.UI.Months],style:j?.[o.UI.Months]},!t.hideNavigation&&!I&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[o.UI.Nav],style:j?.[o.UI.Nav],"aria-label":e_(),onPreviousClick:eS,onNextClick:eW,previousMonth:en,nextMonth:ea}),ee.map((e,a)=>{const i=(0,p/* .getMonthOptions */.d)(e.date,et,er,D,S);const l=(0,m/* .getYearOptions */.h)(et,er,D,S);return n.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:M[o.UI.Month],style:j?.[o.UI.Month],key:a,displayIndex:a,calendarMonth:e},I==="around"&&!t.hideNavigation&&a===0&&n.createElement(r.PreviousMonthButton,{type:"button",className:M[o.UI.PreviousMonthButton],tabIndex:en?undefined:-1,"aria-disabled":en?undefined:true,"aria-label":ey(en),onClick:eS,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:en?undefined:true,className:M[o.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),n.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:M[o.UI.MonthCaption],style:j?.[o.UI.MonthCaption],calendarMonth:e,displayIndex:a},T?.startsWith("dropdown")?n.createElement(r.DropdownNav,{className:M[o.UI.Dropdowns],style:j?.[o.UI.Dropdowns]},T==="dropdown"||T==="dropdown-months"?n.createElement(r.MonthsDropdown,{className:M[o.UI.MonthsDropdown],"aria-label":eb(),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eA(e.date),options:i,style:j?.[o.UI.Dropdown],value:S.getMonth(e.date)}):n.createElement("span",null,Q(e.date,S)),T==="dropdown"||T==="dropdown-years"?n.createElement(r.YearsDropdown,{className:M[o.UI.YearsDropdown],"aria-label":eC(S.options),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eL(e.date),options:l,style:j?.[o.UI.Dropdown],value:S.getYear(e.date)}):n.createElement("span",null,G(e.date,S)),n.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},X(e.date,S.options,S))):n.createElement(r.CaptionLabel,{className:M[o.UI.CaptionLabel],role:"status","aria-live":"polite"},X(e.date,S.options,S))),I==="around"&&!t.hideNavigation&&a===N-1&&n.createElement(r.NextMonthButton,{type:"button",className:M[o.UI.NextMonthButton],tabIndex:ea?undefined:-1,"aria-disabled":ea?undefined:true,"aria-label":ew(ea),onClick:eW,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:ea?undefined:true,className:M[o.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),a===N-1&&I==="after"&&!t.hideNavigation&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[o.UI.Nav],style:j?.[o.UI.Nav],"aria-label":e_(),onPreviousClick:eS,onNextClick:eW,previousMonth:en,nextMonth:ea}),n.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":B==="multiple"||B==="range","aria-label":em(e.date,S.options,S)||undefined,className:M[o.UI.MonthGrid],style:j?.[o.UI.MonthGrid]},!t.hideWeekdays&&n.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:M[o.UI.Weekdays],style:j?.[o.UI.Weekdays]},F&&n.createElement(r.WeekNumberHeader,{"aria-label":ek(S.options),className:M[o.UI.WeekNumberHeader],style:j?.[o.UI.WeekNumberHeader],scope:"col"},H()),eD.map((e,t)=>n.createElement(r.Weekday,{"aria-label":ex(e,S.options,S),className:M[o.UI.Weekday],key:t,style:j?.[o.UI.Weekday],scope:"col"},V(e,S.options,S)))),n.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:M[o.UI.Weeks],style:j?.[o.UI.Weeks]},e.weeks.map((e,a)=>{return n.createElement(r.Week,{className:M[o.UI.Week],key:e.weekNumber,style:j?.[o.UI.Week],week:e},F&&n.createElement(r.WeekNumber,{week:e,style:j?.[o.UI.WeekNumber],"aria-label":eZ(e.weekNumber,{locale:W}),className:M[o.UI.WeekNumber],scope:"row",role:"rowheader"},q(e.weekNumber,S)),e.days.map(e=>{const{date:a}=e;const i=ei(e);i[o/* .DayFlag.focused */.BE.focused]=!i.hidden&&Boolean(eu?.isEqualTo(e));i[o/* .SelectionState.selected */.fP.selected]=el?.(a)||i.selected;if((0,C/* .isDateRange */.Ws)(ec)){// add range modifiers
const{from:e,to:t}=ec;i[o/* .SelectionState.range_start */.fP.range_start]=Boolean(e&&t&&S.isSameDay(a,e));i[o/* .SelectionState.range_end */.fP.range_end]=Boolean(e&&t&&S.isSameDay(a,t));i[o/* .SelectionState.range_middle */.fP.range_middle]=(0,k/* .rangeIncludesDate */.C)(ec,a,true,S)}const l=(0,h/* .getStyleForModifiers */.D)(i,j,t.modifiersStyles);const s=(0,c/* .getClassNamesForModifiers */.k)(i,M,t.modifiersClassNames);const d=!eE&&!i.hidden?eg(a,i,S.options,S):undefined;return n.createElement(r.Day,{key:`${S.format(a,"yyyy-MM-dd")}_${S.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:i,className:s.join(" "),style:l,role:"gridcell","aria-selected":i.selected||undefined,"aria-label":d,"data-day":S.format(a,"yyyy-MM-dd"),"data-month":e.outside?S.format(a,"yyyy-MM"):undefined,"data-selected":i.selected||undefined,"data-disabled":i.disabled||undefined,"data-hidden":i.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":i.focused||undefined,"data-today":i.today||undefined},!i.hidden&&eE?n.createElement(r.DayButton,{className:M[o.UI.DayButton],style:j?.[o.UI.DayButton],type:"button",day:e,modifiers:i,disabled:i.disabled||undefined,tabIndex:ev(e)?0:-1,"aria-label":eh(a,i,S.options,S),onClick:eM(e,i),onBlur:eB(e,i),onFocus:eT(e,i),onKeyDown:eI(e,i),onMouseEnter:eN(e,i),onMouseLeave:eO(e,i)},Y(a,S.options,S)):!i.hidden&&Y(e.date,S.options,S))}))}))))})),t.footer&&n.createElement(r.Footer,{className:M[o.UI.Footer],style:j?.[o.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}//# sourceMappingURL=DayPicker.js.map
},6156:function(e,t,r){r.d(t,{BE:()=>a,UI:()=>n,fP:()=>o,fw:()=>i});/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var n;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(n||(n={}));/** Enum representing flags for the {@link UI.Day} element. */var a;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(a||(a={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var o;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(o||(o={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var i;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(i||(i={}));//# sourceMappingURL=UI.js.map
},77827:function(e,t,r){r.d(t,{X:()=>a});/* ESM import */var n=r(65469);/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class a{constructor(e,t,r=n/* .defaultDateLib */.zk){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}//# sourceMappingURL=CalendarDay.js.map
},50644:function(e,t,r){r.d(t,{C:()=>n});/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class n{constructor(e,t){this.date=e;this.weeks=t}}//# sourceMappingURL=CalendarMonth.js.map
},26046:function(e,t,r){r.d(t,{u:()=>n});/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}//# sourceMappingURL=CalendarWeek.js.map
},65469:function(e,t,r){r.d(t,{Z1:()=>J,zk:()=>R});/* ESM import */var n=r(58184);/* ESM import */var a=r(55722);/* ESM import */var o=r(636);/* ESM import */var i=r(46263);/* ESM import */var l=r(90423);/* ESM import */var s=r(23279);/* ESM import */var c=r(36430);/* ESM import */var d=r(83475);/* ESM import */var u=r(13470);/* ESM import */var v=r(28353);/* ESM import */var f=r(41041);/* ESM import */var p=r(45827);/* ESM import */var h=r(17989);/* ESM import */var g=r(65719);/* ESM import */var m=r(11854);/* ESM import */var b=r(22431);/* ESM import */var _=r(12347);/* ESM import */var y=r(18474);/* ESM import */var w=r(32880);/* ESM import */var x=r(46695);/* ESM import */var Z=r(17522);/* ESM import */var k=r(40756);/* ESM import */var C=r(26098);/* ESM import */var D=r(5618);/* ESM import */var E=r(20831);/* ESM import */var S=r(19706);/* ESM import */var W=r(16614);/* ESM import */var M=r(51066);/* ESM import */var T=r(44459);/* ESM import */var B=r(12432);/* ESM import */var I=r(19397);/* ESM import */var N=r(35523);/* ESM import */var O=r(79237);/* ESM import */var A=r(11548);/* ESM import */var L=r(29726);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class J{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n/* .TZDate.tz */.N9.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n/* .TZDate */.N9(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):(0,a/* .addDays */.E)(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,o/* .addMonths */.z)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,i/* .addWeeks */.j)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,l/* .addYears */.B)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,s/* .differenceInCalendarDays */.w)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,c/* .differenceInCalendarMonths */.T)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,d/* .eachMonthOfInterval */.R)(e)};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,A/* .endOfBroadcastWeek */.r)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,u/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,v/* .endOfMonth */.V)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,f/* .endOfWeek */.v)(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):(0,p/* .endOfYear */.w)(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,h/* .format */.WU)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,g/* .getISOWeek */.l)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):(0,m/* .getMonth */.j)(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):(0,b/* .getYear */.S)(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,_/* .getWeek */.Q)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):(0,y/* .isAfter */.A)(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):(0,w/* .isBefore */.R)(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,x/* .isDate */.J)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):(0,Z/* .isSameDay */.K)(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):(0,k/* .isSameMonth */.x)(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):(0,C/* .isSameYear */.F)(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):(0,D/* .max */.F)(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):(0,E/* .min */.V)(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,S/* .setMonth */.q)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,W/* .setYear */.M)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,L/* .startOfBroadcastWeek */.i)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,M/* .startOfDay */.b)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,T/* .startOfISOWeek */.T)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,B/* .startOfMonth */.N)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,I/* .startOfWeek */.z)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,N/* .startOfYear */.e)(e)};this.options={locale:O/* .enUS */._,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}}/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const R=new J;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const P=/* unused pure expression or super */null&&R;//# sourceMappingURL=DateLib.js.map
},77204:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(87363);/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function a(e){return n.createElement("button",{...e})}//# sourceMappingURL=Button.js.map
},91293:function(e,t,r){r.d(t,{i:()=>a});/* ESM import */var n=r(87363);/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("span",{...e})}//# sourceMappingURL=CaptionLabel.js.map
},1745:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(87363);/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{size:t=24,orientation:r="left",className:a}=e;return n.createElement("svg",{className:a,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&n.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&n.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&n.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&n.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}//# sourceMappingURL=Chevron.js.map
},60442:function(e,t,r){r.d(t,{J:()=>a});/* ESM import */var n=r(87363);/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;return n.createElement("td",{...a})}//# sourceMappingURL=Day.js.map
},17431:function(e,t,r){r.d(t,{b:()=>a});/* ESM import */var n=r(87363);/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;const o=n.useRef(null);n.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return n.createElement("button",{ref:o,...a})}//# sourceMappingURL=DayButton.js.map
},26031:function(e,t,r){r.d(t,{L:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{options:t,className:r,components:o,classNames:i,...l}=e;const s=[i[a.UI.Dropdown],r].join(" ");const c=t?.find(({value:e})=>e===l.value);return n.createElement("span",{"data-disabled":l.disabled,className:i[a.UI.DropdownRoot]},n.createElement(o.Select,{className:s,...l},t?.map(({value:e,label:t,disabled:r})=>n.createElement(o.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:i[a.UI.CaptionLabel],"aria-hidden":true},c?.label,n.createElement(o.Chevron,{orientation:"down",size:18,className:i[a.UI.Chevron]})))}//# sourceMappingURL=Dropdown.js.map
},58581:function(e,t,r){r.d(t,{Z:()=>a});/* ESM import */var n=r(87363);/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=DropdownNav.js.map
},50947:function(e,t,r){r.d(t,{$:()=>a});/* ESM import */var n=r(87363);/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=Footer.js.map
},18149:function(e,t,r){r.d(t,{m:()=>a});/* ESM import */var n=r(87363);/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a},e.children)}//# sourceMappingURL=Month.js.map
},78136:function(e,t,r){r.d(t,{h:()=>a});/* ESM import */var n=r(87363);/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a})}//# sourceMappingURL=MonthCaption.js.map
},51601:function(e,t,r){r.d(t,{A:()=>a});/* ESM import */var n=r(87363);/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("table",{...e})}//# sourceMappingURL=MonthGrid.js.map
},28299:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(87363);/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}//# sourceMappingURL=Months.js.map
},43498:function(e,t,r){r.d(t,{c:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=MonthsDropdown.js.map
},30841:function(e,t,r){r.d(t,{J:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);/* ESM import */var o=r(5293);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{onPreviousClick:t,onNextClick:r,previousMonth:i,nextMonth:l,...s}=e;const{components:c,classNames:d,labels:{labelPrevious:u,labelNext:v}}=(0,o/* .useDayPicker */.k)();const f=(0,n.useCallback)(e=>{if(l){r?.(e)}},[l,r]);const p=(0,n.useCallback)(e=>{if(i){t?.(e)}},[i,t]);return n.createElement("nav",{...s},n.createElement(c.PreviousMonthButton,{type:"button",className:d[a.UI.PreviousMonthButton],tabIndex:i?undefined:-1,"aria-disabled":i?undefined:true,"aria-label":u(i),onClick:p},n.createElement(c.Chevron,{disabled:i?undefined:true,className:d[a.UI.Chevron],orientation:"left"})),n.createElement(c.NextMonthButton,{type:"button",className:d[a.UI.NextMonthButton],tabIndex:l?undefined:-1,"aria-disabled":l?undefined:true,"aria-label":v(l),onClick:f},n.createElement(c.Chevron,{disabled:l?undefined:true,orientation:"right",className:d[a.UI.Chevron]})))}//# sourceMappingURL=Nav.js.map
},60296:function(e,t,r){r.d(t,{b:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=NextMonthButton.js.map
},93073:function(e,t,r){r.d(t,{W:()=>a});/* ESM import */var n=r(87363);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}//# sourceMappingURL=Option.js.map
},92348:function(e,t,r){r.d(t,{U:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=PreviousMonthButton.js.map
},24618:function(e,t,r){r.d(t,{f:()=>a});/* ESM import */var n=r(87363);/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{rootRef:t,...r}=e;return n.createElement("div",{...r,ref:t})}//# sourceMappingURL=Root.js.map
},59145:function(e,t,r){r.d(t,{P:()=>a});/* ESM import */var n=r(87363);/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("select",{...e})}//# sourceMappingURL=Select.js.map
},60287:function(e,t,r){r.d(t,{H:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("tr",{...r})}//# sourceMappingURL=Week.js.map
},63914:function(e,t,r){r.d(t,{M:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("th",{...r})}//# sourceMappingURL=WeekNumber.js.map
},78351:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(87363);/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}//# sourceMappingURL=WeekNumberHeader.js.map
},12620:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(87363);/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}//# sourceMappingURL=Weekday.js.map
},56053:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(87363);/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("thead",{"aria-hidden":true},n.createElement("tr",{...e}))}//# sourceMappingURL=Weekdays.js.map
},51615:function(e,t,r){r.d(t,{B:()=>a});/* ESM import */var n=r(87363);/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("tbody",{...e})}//# sourceMappingURL=Weeks.js.map
},38678:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(87363);/* ESM import */var a=r(5293);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=YearsDropdown.js.map
},73840:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.z,CaptionLabel:()=>/* reexport safe */a.i,Chevron:()=>/* reexport safe */o.T,Day:()=>/* reexport safe */i.J,DayButton:()=>/* reexport safe */l.b,Dropdown:()=>/* reexport safe */s.L,DropdownNav:()=>/* reexport safe */c.Z,Footer:()=>/* reexport safe */d.$,Month:()=>/* reexport safe */u.m,MonthCaption:()=>/* reexport safe */v.h,MonthGrid:()=>/* reexport safe */f.A,Months:()=>/* reexport safe */p.z,MonthsDropdown:()=>/* reexport safe */h.c,Nav:()=>/* reexport safe */g.J,NextMonthButton:()=>/* reexport safe */m.b,Option:()=>/* reexport safe */b.W,PreviousMonthButton:()=>/* reexport safe */_.U,Root:()=>/* reexport safe */y.f,Select:()=>/* reexport safe */w.P,Week:()=>/* reexport safe */x.H,WeekNumber:()=>/* reexport safe */C.M,WeekNumberHeader:()=>/* reexport safe */D.o,Weekday:()=>/* reexport safe */Z.O,Weekdays:()=>/* reexport safe */k.o,Weeks:()=>/* reexport safe */E.B,YearsDropdown:()=>/* reexport safe */S.T});/* ESM import */var n=r(77204);/* ESM import */var a=r(91293);/* ESM import */var o=r(1745);/* ESM import */var i=r(60442);/* ESM import */var l=r(17431);/* ESM import */var s=r(26031);/* ESM import */var c=r(58581);/* ESM import */var d=r(50947);/* ESM import */var u=r(18149);/* ESM import */var v=r(78136);/* ESM import */var f=r(51601);/* ESM import */var p=r(28299);/* ESM import */var h=r(43498);/* ESM import */var g=r(30841);/* ESM import */var m=r(60296);/* ESM import */var b=r(93073);/* ESM import */var _=r(92348);/* ESM import */var y=r(24618);/* ESM import */var w=r(59145);/* ESM import */var x=r(60287);/* ESM import */var Z=r(12620);/* ESM import */var k=r(56053);/* ESM import */var C=r(63914);/* ESM import */var D=r(78351);/* ESM import */var E=r(51615);/* ESM import */var S=r(38678);//# sourceMappingURL=custom-components.js.map
},2957:function(e,t,r){r.d(t,{I:()=>o,O:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const o=a;//# sourceMappingURL=formatCaption.js.map
},29187:function(e,t,r){r.d(t,{f:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"d")}//# sourceMappingURL=formatDay.js.map
},6906:function(e,t,r){r.d(t,{E:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){return t.format(e,"LLLL")}//# sourceMappingURL=formatMonthDropdown.js.map
},67221:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)}//# sourceMappingURL=formatWeekNumber.js.map
},7655:function(e,t,r){r.d(t,{I:()=>n});/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function n(){return``}//# sourceMappingURL=formatWeekNumberHeader.js.map
},69583:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccccc")}//# sourceMappingURL=formatWeekdayName.js.map
},41614:function(e,t,r){r.d(t,{N:()=>o,P:()=>a});/* ESM import */var n=r(65469);/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.zk){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const o=a;//# sourceMappingURL=formatYearDropdown.js.map
},27790:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.O,formatDay:()=>/* reexport safe */a.f,formatMonthCaption:()=>/* reexport safe */n.I,formatMonthDropdown:()=>/* reexport safe */o.E,formatWeekNumber:()=>/* reexport safe */i.z,formatWeekNumberHeader:()=>/* reexport safe */l.I,formatWeekdayName:()=>/* reexport safe */s.T,formatYearCaption:()=>/* reexport safe */c.N,formatYearDropdown:()=>/* reexport safe */c.P});/* ESM import */var n=r(2957);/* ESM import */var a=r(29187);/* ESM import */var o=r(6906);/* ESM import */var i=r(67221);/* ESM import */var l=r(7655);/* ESM import */var s=r(69583);/* ESM import */var c=r(41614);//# sourceMappingURL=index.js.map
},79173:function(e,t,r){r.d(t,{k:()=>i});/* ESM import */var n=r(6156);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function o(e){return!e[n/* .DayFlag.disabled */.BE.disabled]&&!e[n/* .DayFlag.hidden */.BE.hidden]&&!e[n/* .DayFlag.outside */.BE.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function i(e,t,r,i){let l;let s=-1;for(const c of e){const e=t(c);if(o(e)){if(e[n/* .DayFlag.focused */.BE.focused]&&s<a.FocusedModifier){l=c;s=a.FocusedModifier}else if(i?.isEqualTo(c)&&s<a.LastFocused){l=c;s=a.LastFocused}else if(r(c.date)&&s<a.Selected){l=c;s=a.Selected}else if(e[n/* .DayFlag.today */.BE.today]&&s<a.Today){l=c;s=a.Today}}}if(!l){// Return the first day that is focusable
l=e.find(e=>o(t(e)))}return l}//# sourceMappingURL=calculateFocusTarget.js.map
},48834:function(e,t,r){r.d(t,{H:()=>o});/* ESM import */var n=r(6156);/* ESM import */var a=r(52804);/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function o(e,t,r,o,i){const{disabled:l,hidden:s,modifiers:c,showOutsideDays:d,broadcastCalendar:u,today:v}=t;const{isSameDay:f,isSameMonth:p,startOfMonth:h,isBefore:g,endOfMonth:m,isAfter:b}=i;const _=r&&h(r);const y=o&&m(o);const w={[n/* .DayFlag.focused */.BE.focused]:[],[n/* .DayFlag.outside */.BE.outside]:[],[n/* .DayFlag.disabled */.BE.disabled]:[],[n/* .DayFlag.hidden */.BE.hidden]:[],[n/* .DayFlag.today */.BE.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!p(e,r));const o=Boolean(_&&g(e,_));const h=Boolean(y&&b(e,y));const m=Boolean(l&&(0,a/* .dateMatchModifiers */.W)(e,l,i));const Z=Boolean(s&&(0,a/* .dateMatchModifiers */.W)(e,s,i))||o||h||// Broadcast calendar will show outside days as default
!u&&!d&&n||u&&d===false&&n;const k=f(e,v??i.today());if(n)w.outside.push(t);if(m)w.disabled.push(t);if(Z)w.hidden.push(t);if(k)w.today.push(t);// Add custom modifiers
if(c){Object.keys(c).forEach(r=>{const n=c?.[r];const o=n?(0,a/* .dateMatchModifiers */.W)(e,n,i):false;if(!o)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.BE.focused]:false,[n/* .DayFlag.disabled */.BE.disabled]:false,[n/* .DayFlag.hidden */.BE.hidden]:false,[n/* .DayFlag.outside */.BE.outside]:false,[n/* .DayFlag.today */.BE.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}//# sourceMappingURL=createGetModifiers.js.map
},11548:function(e,t,r){r.d(t,{r:()=>o});/* ESM import */var n=r(59582);/* ESM import */var a=r(29726);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function o(e,t){const r=(0,a/* .startOfBroadcastWeek */.i)(e,t);const o=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const i=t.addDays(r,o*7-1);return i}//# sourceMappingURL=endOfBroadcastWeek.js.map
},59582:function(e,t,r){r.d(t,{I:()=>o});const n=5;const a=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function o(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const o=r.getDay()>0?r.getDay():7;const i=t.addDays(e,-o+1);const l=t.addDays(i,n*7-1);const s=t.getMonth(e)===t.getMonth(l)?n:a;return s}//# sourceMappingURL=getBroadcastWeeksInMonth.js.map
},52395:function(e,t,r){r.d(t,{k:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function a(e,t,r={}){const o=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.BE[a]]){e.push(t[n/* .DayFlag */.BE[a]])}else if(t[n/* .SelectionState */.fP[a]]){e.push(t[n/* .SelectionState */.fP[a]])}return e},[t[n.UI.Day]]);return o}//# sourceMappingURL=getClassNamesForModifiers.js.map
},18296:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(73840);/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function a(e){return{...n,...e}}//# sourceMappingURL=getComponents.js.map
},54054:function(e,t,r){r.d(t,{P:()=>n});/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function n(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t}//# sourceMappingURL=getDataAttributes.js.map
},11732:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function n(e,t,r,n){const a=e[0];const o=e[e.length-1];const{ISOWeek:i,fixedWeeks:l,broadcastCalendar:s}=r??{};const{addDays:c,differenceInCalendarDays:d,differenceInCalendarMonths:u,endOfBroadcastWeek:v,endOfISOWeek:f,endOfMonth:p,endOfWeek:h,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:_}=n;const y=s?m(a,n):i?b(a):_(a);const w=s?v(o):i?f(p(o)):h(p(o));const x=d(w,y);const Z=u(o,a)+1;const k=[];for(let e=0;e<=x;e++){const r=c(y,e);if(t&&g(r,t)){break}k.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const C=s?35:42;const D=C*Z;if(l&&k.length<D){const e=D-k.length;for(let t=0;t<e;t++){const e=c(k[k.length-1],1);k.push(e)}}return k}//# sourceMappingURL=getDates.js.map
},84517:function(e,t,r){r.d(t,{g:()=>n});/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function n(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return[...e,...t.days]},t);return[...e,...n]},t)}//# sourceMappingURL=getDays.js.map
},45734:function(e,t,r){r.d(t,{U:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function a(){const e={};for(const t in n.UI){e[n.UI[t]]=`rdp-${n.UI[t]}`}for(const t in n/* .DayFlag */.BE){e[n/* .DayFlag */.BE[t]]=`rdp-${n/* .DayFlag */.BE[t]}`}for(const t in n/* .SelectionState */.fP){e[n/* .SelectionState */.fP[t]]=`rdp-${n/* .SelectionState */.fP[t]}`}for(const t in n/* .Animation */.fw){e[n/* .Animation */.fw[t]]=`rdp-${n/* .Animation */.fw[t]}`}return e}//# sourceMappingURL=getDefaultClassNames.js.map
},6341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const o=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}o.push(a)}return o}//# sourceMappingURL=getDisplayMonths.js.map
},9025:function(e,t,r){r.d(t,{N:()=>n});/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function n(e,t,r,n,a,o,i){const{ISOWeek:l,broadcastCalendar:s}=o;const{addDays:c,addMonths:d,addWeeks:u,addYears:v,endOfBroadcastWeek:f,endOfISOWeek:p,endOfWeek:h,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=i;const w={day:c,week:u,month:d,year:v,startOfWeek:e=>s?b(e,i):l?_(e):y(e),endOfWeek:e=>s?f(e):l?p(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&a){x=m([a,x])}return x}//# sourceMappingURL=getFocusableDate.js.map
},54908:function(e,t,r){r.d(t,{_:()=>a});/* ESM import */var n=r(27790);/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function a(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...n,...e}}//# sourceMappingURL=getFormatters.js.map
},82283:function(e,t,r){r.d(t,{Z:()=>n});/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function n(e,t,r,n){const{month:a,defaultMonth:o,today:i=n.today(),numberOfMonths:l=1}=e;let s=a||o||i;const{differenceInCalendarMonths:c,addMonths:d,startOfMonth:u}=n;if(r&&c(r,s)<l-1){const e=-1*(l-1);s=d(r,e)}if(t&&c(s,t)<0){s=t}return u(s)}//# sourceMappingURL=getInitialMonth.js.map
},71264:function(e,t,r){r.d(t,{d:()=>n});/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function n(e,t,r,n,a){const{startOfMonth:o,startOfYear:i,endOfYear:l,eachMonthOfInterval:s,getMonth:c}=a;const d=s({start:i(e),end:l(e)});const u=d.map(e=>{const i=n.formatMonthDropdown(e,a);const l=c(e);const s=t&&e<o(t)||r&&e>o(r)||false;return{value:l,label:i,disabled:s}});return u}//# sourceMappingURL=getMonthOptions.js.map
},97018:function(e,t,r){r.d(t,{w:()=>i});/* ESM import */var n=r(77827);/* ESM import */var a=r(26046);/* ESM import */var o=r(50644);/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function i(e,t,r,i){const{addDays:l,endOfBroadcastWeek:s,endOfISOWeek:c,endOfMonth:d,endOfWeek:u,getISOWeek:v,getWeek:f,startOfBroadcastWeek:p,startOfISOWeek:h,startOfWeek:g}=i;const m=e.reduce((e,m)=>{const b=r.broadcastCalendar?p(m,i):r.ISOWeek?h(m):g(m);const _=r.broadcastCalendar?s(m):r.ISOWeek?c(d(m)):u(d(m));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=l(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const o=r.ISOWeek?v(t):f(t);const l=e.find(e=>e.weekNumber===o);const s=new n/* .CalendarDay */.X(t,m,i);if(!l){e.push(new a/* .CalendarWeek */.u(o,[s]))}else{l.days.push(s)}return e},[]);const Z=new o/* .CalendarMonth */.C(m,x);e.push(Z);return e},[]);if(!r.reverseMonths){return m}else{return m.reverse()}}//# sourceMappingURL=getMonths.js.map
},38540:function(e,t,r){r.d(t,{P:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:o,startOfMonth:i,endOfMonth:l,addYears:s,endOfYear:c,newDate:d,today:u}=t;// Handle deprecated code
const{fromYear:v,toYear:f,fromMonth:p,toMonth:h}=e;if(!r&&p){r=p}if(!r&&v){r=t.newDate(v,0,1)}if(!n&&h){n=h}if(!n&&f){n=d(f,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(v){r=d(v,0,1)}else if(!r&&g){r=a(s(e.today??u(),-100))}if(n){n=l(n)}else if(f){n=d(f,11,31)}else if(!n&&g){n=c(e.today??u())}return[r?o(r):r,n?o(n):n]}//# sourceMappingURL=getNavMonth.js.map
},84110:function(e,t,r){r.d(t,{j:()=>i});/* ESM import */var n=r(77827);/* ESM import */var a=r(52804);/* ESM import */var o=r(9025);/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function i(e,t,r,l,s,c,d,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const v=(0,o/* .getFocusableDate */.N)(e,t,r.date,l,s,c,d);const f=Boolean(c.disabled&&(0,a/* .dateMatchModifiers */.W)(v,c.disabled,d));const p=Boolean(c.hidden&&(0,a/* .dateMatchModifiers */.W)(v,c.hidden,d));const h=v;const g=new n/* .CalendarDay */.X(v,h,d);if(!f&&!p){return g}// Recursively attempt to find the next focusable date
return i(e,t,g,l,s,c,d,u+1)}//# sourceMappingURL=getNextFocus.js.map
},22663:function(e,t,r){r.d(t,{f:()=>n});/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o=1}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const c=a?o:1;const d=i(e);if(!t){return l(d,c)}const u=s(t,e);if(u<o){return undefined}return l(d,c)}//# sourceMappingURL=getNextMonth.js.map
},88490:function(e,t,r){r.d(t,{S:()=>n});/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const c=a?o??1:1;const d=i(e);if(!t){return l(d,-c)}const u=s(d,t);if(u<=0){return undefined}return l(d,-c)}//# sourceMappingURL=getPreviousMonth.js.map
},64347:function(e,t,r){r.d(t,{D:()=>a});/* ESM import */var n=r(6156);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let o={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{o={...o,...r?.[e]}});return o}//# sourceMappingURL=getStyleForModifiers.js.map
},77614:function(e,t,r){r.d(t,{D:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r){const n=e.today();const a=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const o=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);o.push(r)}return o}//# sourceMappingURL=getWeekdays.js.map
},60049:function(e,t,r){r.d(t,{K:()=>n});/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function n(e){const t=[];return e.reduce((e,t)=>{return[...e,...t.weeks]},t)}//# sourceMappingURL=getWeeks.js.map
},62464:function(e,t,r){r.d(t,{h:()=>n});/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function n(e,t,r,n){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:o,addYears:i,getYear:l,isBefore:s,isSameYear:c}=n;const d=a(e);const u=o(t);const v=[];let f=d;while(s(f,u)||c(f,u)){v.push(f);f=i(f,1)}return v.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})}//# sourceMappingURL=getYearOptions.js.map
},29726:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function n(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}}//# sourceMappingURL=startOfBroadcastWeek.js.map
},50717:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(87363);/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function a(e,t){const[r,a]=(0,n.useState)(e);const o=t===undefined?r:t;return[o,a]}//# sourceMappingURL=useControlledValue.js.map
},58100:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */n.D,labelDay:()=>/* reexport safe */o.Q,labelDayButton:()=>/* reexport safe */o.l,labelGrid:()=>/* reexport safe */n.v,labelGridcell:()=>/* reexport safe */a.R,labelMonthDropdown:()=>/* reexport safe */l.N,labelNav:()=>/* reexport safe */i.g,labelNext:()=>/* reexport safe */s.T,labelPrevious:()=>/* reexport safe */c.b,labelWeekNumber:()=>/* reexport safe */u.j,labelWeekNumberHeader:()=>/* reexport safe */v.E,labelWeekday:()=>/* reexport safe */d.O,labelYearDropdown:()=>/* reexport safe */f.I});/* ESM import */var n=r(80782);/* ESM import */var a=r(54428);/* ESM import */var o=r(95490);/* ESM import */var i=r(88234);/* ESM import */var l=r(60327);/* ESM import */var s=r(96368);/* ESM import */var c=r(55341);/* ESM import */var d=r(79231);/* ESM import */var u=r(58095);/* ESM import */var v=r(82779);/* ESM import */var f=r(58634);//# sourceMappingURL=index.js.map
},95490:function(e,t,r){r.d(t,{Q:()=>o,l:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const o=a;//# sourceMappingURL=labelDayButton.js.map
},80782:function(e,t,r){r.d(t,{D:()=>o,v:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const o=a;//# sourceMappingURL=labelGrid.js.map
},54428:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o}//# sourceMappingURL=labelGridcell.js.map
},60327:function(e,t,r){r.d(t,{N:()=>n});/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Month"}//# sourceMappingURL=labelMonthDropdown.js.map
},88234:function(e,t,r){r.d(t,{g:()=>n});/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(){return""}//# sourceMappingURL=labelNav.js.map
},96368:function(e,t,r){r.d(t,{T:()=>n});/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Next Month"}//# sourceMappingURL=labelNext.js.map
},55341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Previous Month"}//# sourceMappingURL=labelPrevious.js.map
},58095:function(e,t,r){r.d(t,{j:()=>n});/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e,t){return`Week ${e}`}//# sourceMappingURL=labelWeekNumber.js.map
},82779:function(e,t,r){r.d(t,{E:()=>n});/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Week Number"}//# sourceMappingURL=labelWeekNumberHeader.js.map
},79231:function(e,t,r){r.d(t,{O:()=>a});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccc")}//# sourceMappingURL=labelWeekday.js.map
},58634:function(e,t,r){r.d(t,{I:()=>n});/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Year"}//# sourceMappingURL=labelYearDropdown.js.map
},13796:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(50717);/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.O)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:c}=t;const d=e=>{return s?.some(t=>c(t,e))??false};const{min:u,max:v}=e;const f=(e,t,r)=>{let n=[...s??[]];if(d(e)){if(s?.length===u){// Min value reached, do nothing
return}if(a&&s?.length===1){// Required value already selected do nothing
return}n=s?.filter(t=>!c(t,e))}else{if(s?.length===v){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!o){l(n)}o?.(n,e,t,r);return n};return{selected:s,select:f,isSelected:d}}//# sourceMappingURL=useMulti.js.map
},9998:function(e,t,r){r.d(t,{C:()=>l});/* ESM import */var n=r(50717);/* ESM import */var a=r(16257);/* ESM import */var o=r(99217);/* ESM import */var i=r(94232);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function l(e,t){const{disabled:r,excludeDisabled:l,selected:s,required:c,onSelect:d}=e;const[u,v]=(0,n/* .useControlledValue */.O)(s,d?s:undefined);const f=!d?u:s;const p=e=>f&&(0,i/* .rangeIncludesDate */.C)(f,e,false,t);const h=(n,i,s)=>{const{min:u,max:p}=e;const h=n?(0,a/* .addToRange */.n)(n,f,u,p,c,t):undefined;if(l&&r&&h?.from&&h.to){if((0,o/* .rangeContainsModifiers */.C)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!d){v(h)}d?.(h,n,i,s);return h};return{selected:f,select:h,isSelected:p}}//# sourceMappingURL=useRange.js.map
},67413:function(e,t,r){r.d(t,{G:()=>a});/* ESM import */var n=r(50717);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.O)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:c}=t;const d=e=>{return s?c(s,e):false};const u=(e,t,r)=>{let n=e;if(!a&&s&&s&&c(e,s)){// If the date is the same, clear the selection.
n=undefined}if(!o){l(n)}if(a){o?.(n,e,t,r)}else{o?.(n,e,t,r)}return n};return{selected:s,select:u,isSelected:d}}//# sourceMappingURL=useSingle.js.map
},84332:function(e,t,r){r.d(t,{_:()=>v});/* ESM import */var n=r(87363);/* ESM import */var a=r(6156);const o=e=>{if(e instanceof HTMLElement)return e;return null};const i=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const l=e=>o(e.querySelector("[data-animated-month]"));const s=e=>o(e.querySelector("[data-animated-caption]"));const c=e=>o(e.querySelector("[data-animated-weeks]"));const d=e=>o(e.querySelector("[data-animated-nav]"));const u=e=>o(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function v(e,t,{classNames:r,months:o,focused:v,dateLib:f}){const p=(0,n.useRef)(null);const h=(0,n.useRef)(o);const g=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=o;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
o.length===0||n.length===0||o.length!==n.length){return}const m=f.isSameMonth(o[0].date,n[0].date);const b=f.isAfter(o[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.fw.caption_after_enter]:r[a/* .Animation.caption_before_enter */.fw.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.fw.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.fw.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=p.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=i(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=l(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=s(e);if(r){r.classList.remove(_)}const n=c(e);if(n){n.classList.remove(y)}});p.current=x}else{p.current=null}if(g.current||m||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
v){return}const Z=w instanceof HTMLElement?i(w):[];const k=i(e.current);if(k&&k.every(e=>e instanceof HTMLElement)&&Z&&Z.every(e=>e instanceof HTMLElement)){g.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=d(e.current);if(n){n.style.zIndex="1"}k.forEach((o,i)=>{const l=Z[i];if(!l){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const d=s(o);if(d){d.classList.add(_)}const v=c(o);if(v){v.classList.add(y)}// animate new displayed month end
const f=()=>{g.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(d){d.classList.remove(_)}if(v){v.classList.remove(y)}o.style.position="";o.style.overflow="";if(o.contains(l)){o.removeChild(l)}};t.push(f);// animate old displayed month
l.style.pointerEvents="none";l.style.position="absolute";l.style.overflow="hidden";l.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const p=u(l);if(p){p.style.opacity="0"}const h=s(l);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.fw.caption_before_exit]:r[a/* .Animation.caption_after_exit */.fw.caption_after_exit]);h.addEventListener("animationend",f)}const m=c(l);if(m){m.classList.add(b?r[a/* .Animation.weeks_before_exit */.fw.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.fw.weeks_after_exit])}o.insertBefore(l,o.firstChild)})}})}//# sourceMappingURL=useAnimation.js.map
},30833:function(e,t,r){r.d(t,{G:()=>p});/* ESM import */var n=r(87363);/* ESM import */var a=r(11732);/* ESM import */var o=r(84517);/* ESM import */var i=r(6341);/* ESM import */var l=r(82283);/* ESM import */var s=r(97018);/* ESM import */var c=r(38540);/* ESM import */var d=r(22663);/* ESM import */var u=r(88490);/* ESM import */var v=r(60049);/* ESM import */var f=r(50717);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function p(e,t){const[r,p]=(0,c/* .getNavMonths */.P)(e,t);const{startOfMonth:h,endOfMonth:g}=t;const m=(0,l/* .getInitialMonth */.Z)(e,r,p,t);const[b,_]=(0,f/* .useControlledValue */.O)(m,// initialMonth is always computed from props.month if provided
e.month?m:undefined);(0,n.useEffect)(()=>{const n=(0,l/* .getInitialMonth */.Z)(e,r,p,t);_(n);// eslint-disable-next-line react-hooks/exhaustive-deps
},[e.timeZone]);/** The months displayed in the calendar. */const y=(0,i/* .getDisplayMonths */.b)(b,p,e,t);/** The dates displayed in the calendar. */const w=(0,a/* .getDates */.i)(y,e.endMonth?g(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const x=(0,s/* .getMonths */.w)(y,w,e,t);/** The Weeks displayed in the calendar. */const Z=(0,v/* .getWeeks */.K)(x);/** The Days displayed in the calendar. */const k=(0,o/* .getDays */.g)(x);const C=(0,u/* .getPreviousMonth */.S)(b,r,e,t);const D=(0,d/* .getNextMonth */.f)(b,p,e,t);const{disableNavigation:E,onMonthChange:S}=e;const W=e=>Z.some(t=>t.days.some(t=>t.isEqualTo(e)));const M=e=>{if(E){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(p&&t>h(p)){t=h(p)}_(t);S?.(t)};const T=e=>{// is this check necessary?
if(W(e)){return}M(e.date)};const B={months:x,weeks:Z,days:k,navStart:r,navEnd:p,previousMonth:C,nextMonth:D,goToMonth:M,goToDay:T};return B}//# sourceMappingURL=useCalendar.js.map
},5293:function(e,t,r){r.d(t,{Z:()=>a,k:()=>o});/* ESM import */var n=r(87363);/** @ignore */const a=(0,n.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function o(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}//# sourceMappingURL=useDayPicker.js.map
},35625:function(e,t,r){r.d(t,{K:()=>i});/* ESM import */var n=r(87363);/* ESM import */var a=r(79173);/* ESM import */var o=r(84110);/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function i(e,t,r,i,l){const{autoFocus:s}=e;const[c,d]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.k)(t.days,r,i||(()=>false),c);const[v,f]=(0,n.useState)(s?u:undefined);const p=()=>{d(v);f(undefined)};const h=(r,n)=>{if(!v)return;const a=(0,o/* .getNextFocus */.j)(r,n,v,t.navStart,t.navEnd,e,l);if(!a)return;t.goToDay(a);f(a)};const g=e=>{return Boolean(u?.isEqualTo(e))};const m={isFocusTarget:g,setFocused:f,focused:v,blur:p,moveFocus:h};return m}//# sourceMappingURL=useFocus.js.map
},70162:function(e,t,r){r.d(t,{c:()=>i});/* ESM import */var n=r(13796);/* ESM import */var a=r(9998);/* ESM import */var o=r(67413);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function i(e,t){const r=(0,o/* .useSingle */.G)(e,t);const i=(0,n/* .useMulti */.R)(e,t);const l=(0,a/* .useRange */.C)(e,t);switch(e.mode){case"single":return r;case"multiple":return i;case"range":return l;default:return undefined}}//# sourceMappingURL=useSelection.js.map
},16257:function(e,t,r){r.d(t,{n:()=>a});/* ESM import */var n=r(65469);/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function a(e,t,r=0,o=0,i=false,l=n/* .defaultDateLib */.zk){const{from:s,to:c}=t||{};const{isSameDay:d,isAfter:u,isBefore:v}=l;let f;if(!s&&!c){// the range is empty, add the date
f={from:e,to:r>0?undefined:e}}else if(s&&!c){// adding date to an incomplete range
if(d(s,e)){// adding a date equal to the start of the range
if(i){f={from:s,to:undefined}}else{f=undefined}}else if(v(e,s)){// adding a date before the start of the range
f={from:e,to:s}}else{// adding a date after the start of the range
f={from:s,to:e}}}else if(s&&c){// adding date to a complete range
if(d(s,e)&&d(c,e)){// adding a date that is equal to both start and end of the range
if(i){f={from:s,to:c}}else{f=undefined}}else if(d(s,e)){// adding a date equal to the the start of the range
f={from:s,to:r>0?undefined:e}}else if(d(c,e)){// adding a dare equal to the end of the range
f={from:e,to:r>0?undefined:e}}else if(v(e,s)){// adding a date before the start of the range
f={from:e,to:c}}else if(u(e,s)){// adding a date after the start of the range
f={from:s,to:e}}else if(u(e,c)){// adding a date after the end of the range
f={from:s,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(f?.from&&f?.to){const t=l.differenceInCalendarDays(f.to,f.from);if(o>0&&t>o){f={from:e,to:undefined}}else if(r>1&&t<r){f={from:e,to:undefined}}}return f}//# sourceMappingURL=addToRange.js.map
},52804:function(e,t,r){r.d(t,{W:()=>i});/* ESM import */var n=r(65469);/* ESM import */var a=r(94232);/* ESM import */var o=r(20311);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.zk){const l=!Array.isArray(t)?[t]:t;const{isSameDay:s,differenceInCalendarDays:c,isAfter:d}=r;return l.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return s(e,t)}if((0,o/* .isDatesArray */.jA)(t,r)){return t.includes(e)}if((0,o/* .isDateRange */.Ws)(t)){return(0,a/* .rangeIncludesDate */.C)(t,e,false,r)}if((0,o/* .isDayOfWeekType */.U4)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,o/* .isDateInterval */.Zl)(t)){const r=c(t.before,e);const n=c(t.after,e);const a=r>0;const o=n<0;const i=d(t.before,t.after);if(i){return o&&a}else{return a||o}}if((0,o/* .isDateAfterType */.FZ)(t)){return c(e,t.after)>0}if((0,o/* .isDateBeforeType */.Vp)(t)){return c(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const l=/* unused pure expression or super */null&&i;//# sourceMappingURL=dateMatchModifiers.js.map
},7493:function(e,t,r){r.d(t,{L:()=>a});/* ESM import */var n=r(65469);/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function a(e,t,r=n/* .defaultDateLib */.zk){const o=!Array.isArray(t)?[t]:t;let i=e.from;const l=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const s=Math.min(l,6);for(let e=0;e<=s;e++){if(o.includes(i.getDay())){return true}i=r.addDays(i,1)}return false}//# sourceMappingURL=rangeContainsDayOfWeek.js.map
},99217:function(e,t,r){r.d(t,{C:()=>c});/* ESM import */var n=r(65469);/* ESM import */var a=r(52804);/* ESM import */var o=r(7493);/* ESM import */var i=r(94232);/* ESM import */var l=r(1297);/* ESM import */var s=r(20311);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function c(e,t,r=n/* .defaultDateLib */.zk){const d=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=d.filter(e=>typeof e!=="function");const v=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,i/* .rangeIncludesDate */.C)(e,t,false,r)}if((0,s/* .isDatesArray */.jA)(t,r)){return t.some(t=>(0,i/* .rangeIncludesDate */.C)(e,t,false,r))}if((0,s/* .isDateRange */.Ws)(t)){if(t.from&&t.to){return(0,l/* .rangeOverlaps */.z)(e,{from:t.from,to:t.to},r)}return false}if((0,s/* .isDayOfWeekType */.U4)(t)){return(0,o/* .rangeContainsDayOfWeek */.L)(e,t.dayOfWeek,r)}if((0,s/* .isDateInterval */.Zl)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,l/* .rangeOverlaps */.z)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.W)(e.from,t,r)||(0,a/* .dateMatchModifiers */.W)(e.to,t,r)}if((0,s/* .isDateAfterType */.FZ)(t)||(0,s/* .isDateBeforeType */.Vp)(t)){return(0,a/* .dateMatchModifiers */.W)(e.from,t,r)||(0,a/* .dateMatchModifiers */.W)(e.to,t,r)}return false});if(v){return true}const f=d.filter(e=>typeof e==="function");if(f.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(f.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}//# sourceMappingURL=rangeContainsModifiers.js.map
},94232:function(e,t,r){r.d(t,{C:()=>a});/* ESM import */var n=r(65469);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,o=n/* .defaultDateLib */.zk){let{from:i,to:l}=e;const{differenceInCalendarDays:s,isSameDay:c}=o;if(i&&l){const e=s(l,i)<0;if(e){[i,l]=[l,i]}const n=s(t,i)>=(r?1:0)&&s(l,t)>=(r?1:0);return n}if(!r&&l){return c(l,t)}if(!r&&i){return c(i,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const o=(e,t)=>a(e,t,false,defaultDateLib);//# sourceMappingURL=rangeIncludesDate.js.map
},1297:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(65469);/* ESM import */var a=r(94232);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.zk){return(0,a/* .rangeIncludesDate */.C)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.C)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.C)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.C)(t,e.to,false,r)}//# sourceMappingURL=rangeOverlaps.js.map
},20311:function(e,t,r){r.d(t,{FZ:()=>o,U4:()=>l,Vp:()=>i,Ws:()=>a,Zl:()=>n,jA:()=>s});/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function n(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function a(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function i(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function l(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function s(e,t){return Array.isArray(e)&&e.every(t.isDate)}//# sourceMappingURL=typeguards.js.map
},51805:function(e,t,r){r.d(t,{r:()=>n});function n(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n}},92639:function(e,t,r){r.d(t,{j:()=>a});let n={};function a(){return n}function o(e){n=e}},46083:function(e,t,r){r.d(t,{$:()=>u});/* ESM import */var n=r(29750);/* ESM import */var a=r(65719);/* ESM import */var o=r(74155);/* ESM import */var i=r(12347);/* ESM import */var l=r(7898);/* ESM import */var s=r(51805);/* ESM import */var c=r(12471);const d={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const u={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return c/* .lightFormatters.y */.o.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=(0,l/* .getWeekYear */.c)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const o=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=o%100;return(0,s/* .addLeadingZeros */.r)(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(o,{unit:"year"})}// Padding
return(0,s/* .addLeadingZeros */.r)(o,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,o/* .getISOWeekYear */.L)(e);// Padding
return(0,s/* .addLeadingZeros */.r)(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return(0,s/* .addLeadingZeros */.r)(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return(0,s/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return(0,s/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return c/* .lightFormatters.M */.o.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return(0,s/* .addLeadingZeros */.r)(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=(0,i/* .getWeek */.Q)(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return(0,s/* .addLeadingZeros */.r)(a,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,a/* .getISOWeek */.l)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return(0,s/* .addLeadingZeros */.r)(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return c/* .lightFormatters.d */.o.d(e,t)},// Day of year
D:function(e,t,r){const a=(0,n/* .getDayOfYear */.B)(e);if(t==="Do"){return r.ordinalNumber(a,{unit:"dayOfYear"})}return(0,s/* .addLeadingZeros */.r)(a,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(o);// Padded numerical value
case"ee":return(0,s/* .addLeadingZeros */.r)(o,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(o);// Padded numerical value
case"cc":return(0,s/* .addLeadingZeros */.r)(o,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return(0,s/* .addLeadingZeros */.r)(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=d.noon}else if(n===0){a=d.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=d.evening}else if(n>=12){a=d.afternoon}else if(n>=4){a=d.morning}else{a=d.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return c/* .lightFormatters.h */.o.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return c/* .lightFormatters.H */.o.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,s/* .addLeadingZeros */.r)(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,s/* .addLeadingZeros */.r)(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return c/* .lightFormatters.m */.o.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return c/* .lightFormatters.s */.o.s(e,t)},// Fraction of second
S:function(e,t){return c/* .lightFormatters.S */.o.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return p(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return p(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+v(n,":");// Long
case"OOOO":default:return"GMT"+p(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+v(n,":");// Long
case"zzzz":default:return"GMT"+p(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return(0,s/* .addLeadingZeros */.r)(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return(0,s/* .addLeadingZeros */.r)(+e,t.length)}};function v(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const o=n%60;if(o===0){return r+String(a)}return r+String(a)+t+(0,s/* .addLeadingZeros */.r)(o,2)}function f(e,t){if(e%60===0){const t=e>0?"-":"+";return t+(0,s/* .addLeadingZeros */.r)(Math.abs(e)/60,2)}return p(e,t)}function p(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=(0,s/* .addLeadingZeros */.r)(Math.trunc(n/60),2);const o=(0,s/* .addLeadingZeros */.r)(n%60,2);return r+a+t+o}},12471:function(e,t,r){r.d(t,{o:()=>a});/* ESM import */var n=r(51805);/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const a={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const a=r>0?r:1-r;return(0,n/* .addLeadingZeros */.r)(t==="yy"?a%100:a,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):(0,n/* .addLeadingZeros */.r)(r+1,2)},// Day of the month
d(e,t){return(0,n/* .addLeadingZeros */.r)(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours(),t.length)},// Minute
m(e,t){return(0,n/* .addLeadingZeros */.r)(e.getMinutes(),t.length)},// Second
s(e,t){return(0,n/* .addLeadingZeros */.r)(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const a=e.getMilliseconds();const o=Math.trunc(a*Math.pow(10,r-3));return(0,n/* .addLeadingZeros */.r)(o,t.length)}}},15475:function(e,t,r){r.d(t,{G:()=>i});const n=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const a=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const o=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const o=r[1];const i=r[2];if(!i){return n(e,t)}let l;switch(o){case"P":l=t.dateTime({width:"short"});break;case"PP":l=t.dateTime({width:"medium"});break;case"PPP":l=t.dateTime({width:"long"});break;case"PPPP":default:l=t.dateTime({width:"full"});break}return l.replace("{{date}}",n(o,t)).replace("{{time}}",a(i,t))};const i={p:a,P:o}},29486:function(e,t,r){r.d(t,{D:()=>a});/* ESM import */var n=r(28898);/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function a(e){const t=(0,n/* .toDate */.Q)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}},90457:function(e,t,r){r.d(t,{d:()=>a});/* ESM import */var n=r(85941);function a(e,...t){const r=n/* .constructFrom.bind */.L.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},15176:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(90457);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.d)(e,t.start,t.end);return{start:r,end:a}}},69814:function(e,t,r){r.d(t,{DD:()=>s,Do:()=>l,Iu:()=>i});const n=/^D+$/;const a=/^Y+$/;const o=["D","DD","YY","YYYY"];function i(e){return n.test(e)}function l(e){return a.test(e)}function s(e,t,r){const n=c(e,t,r);console.warn(n);if(o.includes(e))throw new RangeError(n)}function c(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}},55722:function(e,t,r){r.d(t,{E:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return o;o.setDate(o.getDate()+t);return o}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},636:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return o}const i=o.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const l=(0,n/* .constructFrom */.L)(r?.in||e,o.getTime());l.setMonth(o.getMonth()+t+1,0);const s=l.getDate();if(i>=s){// If we're already at the end of the month, then this is the correct date
// and we're done.
return l}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
o.setFullYear(l.getFullYear(),l.getMonth(),i);return o}}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},46263:function(e,t,r){r.d(t,{j:()=>a});/* ESM import */var n=r(55722);/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function a(e,t,r){return(0,n/* .addDays */.E)(e,t*7,r)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},90423:function(e,t,r){r.d(t,{B:()=>a});/* ESM import */var n=r(636);/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function a(e,t,r){return(0,n/* .addMonths */.z)(e,t*12,r)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},22050:function(e,t,r){r.d(t,{I7:()=>D,dP:()=>s,jE:()=>l});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const a=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const o=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const i=/* unused pure expression or super */null&&-o;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const l=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const s=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const c=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const d=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const u=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const v=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const f=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const h=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const g=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const m=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const b=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const _=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const y=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&_*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const Z=/* unused pure expression or super */null&&w*a;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const k=/* unused pure expression or super */null&&Z/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const C=/* unused pure expression or super */null&&k*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const D=Symbol.for("constructDateFrom")},85941:function(e,t,r){r.d(t,{L:()=>a});/* ESM import */var n=r(22050);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function a(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */.I7 in e)return e[n/* .constructFromSymbol */.I7](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},23279:function(e,t,r){r.d(t,{w:()=>l});/* ESM import */var n=r(29486);/* ESM import */var a=r(90457);/* ESM import */var o=r(22050);/* ESM import */var i=r(51066);/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function l(e,t,r){const[l,s]=(0,a/* .normalizeDates */.d)(r?.in,e,t);const c=(0,i/* .startOfDay */.b)(l);const d=(0,i/* .startOfDay */.b)(s);const u=+c-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(c);const v=+d-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(d);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((u-v)/o/* .millisecondsInDay */.dP)}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&l},36430:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.d)(r?.in,e,t);const i=a.getFullYear()-o.getFullYear();const l=a.getMonth()-o.getMonth();return i*12+l}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},83475:function(e,t,r){r.d(t,{R:()=>o});/* ESM import */var n=r(15176);/* ESM import */var a=r(85941);/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.T)(t?.in,e);let i=+r>+o;const l=i?+r:+o;const s=i?o:r;s.setHours(0,0,0,0);s.setDate(1);let c=t?.step??1;if(!c)return[];if(c<0){c=-c;i=!i}const d=[];while(+s<=l){d.push((0,a/* .constructFrom */.L)(r,s));s.setMonth(s.getMonth()+c)}return i?d.reverse():d}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},13470:function(e,t,r){r.d(t,{g:()=>a});/* ESM import */var n=r(41041);/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function a(e,t){return(0,n/* .endOfWeek */.v)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},28353:function(e,t,r){r.d(t,{V:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const a=r.getMonth();r.setFullYear(r.getFullYear(),a+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},41041:function(e,t,r){r.d(t,{v:()=>o});/* ESM import */var n=r(92639);/* ESM import */var a=r(28898);/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function o(e,t){const r=(0,n/* .getDefaultOptions */.j)();const o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,a/* .toDate */.Q)(e,t?.in);const l=i.getDay();const s=(l<o?-7:0)+6-(l-o);i.setDate(i.getDate()+s);i.setHours(23,59,59,999);return i}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},45827:function(e,t,r){r.d(t,{w:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const a=r.getFullYear();r.setFullYear(a+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},17989:function(e,t,r){r.d(t,{WU:()=>h});/* ESM import */var n=r(79237);/* ESM import */var a=r(92639);/* ESM import */var o=r(46083);/* ESM import */var i=r(15475);/* ESM import */var l=r(69814);/* ESM import */var s=r(1173);/* ESM import */var c=r(28898);// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const d=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const u=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const v=/^'([^]*?)'?$/;const f=/''/g;const p=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function h(e,t,r){const v=(0,a/* .getDefaultOptions */.j)();const f=r?.locale??v.locale??n/* .enUS */._;const h=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??v.firstWeekContainsDate??v.locale?.options?.firstWeekContainsDate??1;const m=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??v.weekStartsOn??v.locale?.options?.weekStartsOn??0;const b=(0,c/* .toDate */.Q)(e,r?.in);if(!(0,s/* .isValid */.J)(b)){throw new RangeError("Invalid time value")}let _=t.match(u).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=i/* .longFormatters */.G[t];return r(e,f.formatLong)}return e}).join("").match(d).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:g(e)}}if(o/* .formatters */.$[t]){return{isToken:true,value:e}}if(t.match(p)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(f.localize.preprocessor){_=f.localize.preprocessor(b,_)}const y={firstWeekContainsDate:h,weekStartsOn:m,locale:f};return _.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&(0,l/* .isProtectedWeekYearToken */.Do)(a)||!r?.useAdditionalDayOfYearTokens&&(0,l/* .isProtectedDayOfYearToken */.Iu)(a)){(0,l/* .warnOrThrowProtectedError */.DD)(a,t,String(e))}const i=o/* .formatters */.$[a[0]];return i(b,a,f.localize,y)}).join("")}function g(e){const t=e.match(v);if(!t){return e}return t[1].replace(f,"'")}// Fallback for modularized imports:
/* unused ESM default export */var m=/* unused pure expression or super */null&&h},29750:function(e,t,r){r.d(t,{B:()=>i});/* ESM import */var n=r(23279);/* ESM import */var a=r(35523);/* ESM import */var o=r(28898);/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function i(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const i=(0,n/* .differenceInCalendarDays */.w)(r,(0,a/* .startOfYear */.e)(r));const l=i+1;return l}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&i},12309:function(e,t,r){r.d(t,{N:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function o(e,t){const r=(0,a/* .toDate */.Q)(e,t?.in);const o=r.getFullYear();const i=r.getMonth();const l=(0,n/* .constructFrom */.L)(r,0);l.setFullYear(o,i+1,0);l.setHours(0,0,0,0);return l.getDate()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},65719:function(e,t,r){r.d(t,{l:()=>l});/* ESM import */var n=r(22050);/* ESM import */var a=r(44459);/* ESM import */var o=r(47926);/* ESM import */var i=r(28898);/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function l(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const l=+(0,a/* .startOfISOWeek */.T)(r)-+(0,o/* .startOfISOWeekYear */.E)(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(l/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&l},74155:function(e,t,r){r.d(t,{L:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(44459);/* ESM import */var o=r(28898);/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function i(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const i=r.getFullYear();const l=(0,n/* .constructFrom */.L)(r,0);l.setFullYear(i+1,0,4);l.setHours(0,0,0,0);const s=(0,a/* .startOfISOWeek */.T)(l);const c=(0,n/* .constructFrom */.L)(r,0);c.setFullYear(i,0,4);c.setHours(0,0,0,0);const d=(0,a/* .startOfISOWeek */.T)(c);if(r.getTime()>=s.getTime()){return i+1}else if(r.getTime()>=d.getTime()){return i}else{return i-1}}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&i},11854:function(e,t,r){r.d(t,{j:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function a(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},12347:function(e,t,r){r.d(t,{Q:()=>l});/* ESM import */var n=r(22050);/* ESM import */var a=r(19397);/* ESM import */var o=r(86009);/* ESM import */var i=r(28898);/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function l(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const l=+(0,a/* .startOfWeek */.z)(r,t)-+(0,o/* .startOfWeekYear */.v)(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(l/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&l},7898:function(e,t,r){r.d(t,{c:()=>l});/* ESM import */var n=r(92639);/* ESM import */var a=r(85941);/* ESM import */var o=r(19397);/* ESM import */var i=r(28898);/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function l(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const l=r.getFullYear();const s=(0,n/* .getDefaultOptions */.j)();const c=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1;const d=(0,a/* .constructFrom */.L)(t?.in||e,0);d.setFullYear(l+1,0,c);d.setHours(0,0,0,0);const u=(0,o/* .startOfWeek */.z)(d,t);const v=(0,a/* .constructFrom */.L)(t?.in||e,0);v.setFullYear(l,0,c);v.setHours(0,0,0,0);const f=(0,o/* .startOfWeek */.z)(v,t);if(+r>=+u){return l+1}else if(+r>=+f){return l}else{return l-1}}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&l},22431:function(e,t,r){r.d(t,{S:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function a(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},18474:function(e,t,r){r.d(t,{A:()=>a});/* ESM import */var n=r(28898);/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function a(e,t){return+(0,n/* .toDate */.Q)(e)>+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},32880:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(28898);/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function a(e,t){return+(0,n/* .toDate */.Q)(e)<+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},46695:function(e,t,r){r.d(t,{J:()=>n});/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&n},17522:function(e,t,r){r.d(t,{K:()=>o});/* ESM import */var n=r(90457);/* ESM import */var a=r(51066);/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function o(e,t,r){const[o,i]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return+(0,a/* .startOfDay */.b)(o)===+(0,a/* .startOfDay */.b)(i)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},40756:function(e,t,r){r.d(t,{x:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},26098:function(e,t,r){r.d(t,{F:()=>a});/* ESM import */var n=r(90457);/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return a.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},1173:function(e,t,r){r.d(t,{J:()=>o});/* ESM import */var n=r(46695);/* ESM import */var a=r(28898);/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function o(e){return!(!(0,n/* .isDate */.J)(e)&&typeof e!=="number"||isNaN(+(0,a/* .toDate */.Q)(e)))}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},96018:function(e,t,r){r.d(t,{l:()=>n});function n(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}}},23495:function(e,t,r){r.d(t,{Y:()=>n});/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function n(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const o=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[o]}}},46588:function(e,t,r){r.d(t,{t:()=>n});function n(e){return(t,r={})=>{const n=r.width;const i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const l=t.match(i);if(!l){return null}const s=l[0];const c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const d=Array.isArray(c)?o(c,e=>e.test(s)):a(c,e=>e.test(s));let u;u=e.valueCallback?e.valueCallback(d):d;u=r.valueCallback?r.valueCallback(u):u;const v=t.slice(s.length);return{value:u,rest:v}}}function a(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function o(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined}},12931:function(e,t,r){r.d(t,{y:()=>n});function n(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const o=t.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];// [TODO] I challenge you to fix the type
i=r.valueCallback?r.valueCallback(i):i;const l=t.slice(a.length);return{value:i,rest:l}}}},79237:function(e,t,r){r.d(t,{_:()=>s});/* ESM import */var n=r(71953);/* ESM import */var a=r(87049);/* ESM import */var o=r(20040);/* ESM import */var i=r(15318);/* ESM import */var l=r(57113);/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const s={code:"en-US",formatDistance:n/* .formatDistance */.B,formatLong:a/* .formatLong */.W,formatRelative:o/* .formatRelative */.l,localize:i/* .localize */.N,match:l/* .match */.E,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* unused ESM default export */var c=/* unused pure expression or super */null&&s},71953:function(e,t,r){r.d(t,{B:()=>a});const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const o=n[e];if(typeof o==="string"){a=o}else if(t===1){a=o.one}else{a=o.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a}},87049:function(e,t,r){r.d(t,{W:()=>l});/* ESM import */var n=r(96018);const a={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const i={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const l={date:(0,n/* .buildFormatLongFn */.l)({formats:a,defaultWidth:"full"}),time:(0,n/* .buildFormatLongFn */.l)({formats:o,defaultWidth:"full"}),dateTime:(0,n/* .buildFormatLongFn */.l)({formats:i,defaultWidth:"full"})}},20040:function(e,t,r){r.d(t,{l:()=>a});const n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const a=(e,t,r,a)=>n[e]},15318:function(e,t,r){r.d(t,{N:()=>u});/* ESM import */var n=r(23495);const a={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const i={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const l={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const s={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const c={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const d=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const u={ordinalNumber:d,era:(0,n/* .buildLocalizeFn */.Y)({values:a,defaultWidth:"wide"}),quarter:(0,n/* .buildLocalizeFn */.Y)({values:o,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n/* .buildLocalizeFn */.Y)({values:i,defaultWidth:"wide"}),day:(0,n/* .buildLocalizeFn */.Y)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n/* .buildLocalizeFn */.Y)({values:s,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})}},57113:function(e,t,r){r.d(t,{E:()=>m});/* ESM import */var n=r(46588);/* ESM import */var a=r(12931);const o=/^(\d+)(th|st|nd|rd)?/i;const i=/\d+/i;const l={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const s={any:[/^b/i,/^(a|c)/i]};const c={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const d={any:[/1/i,/2/i,/3/i,/4/i]};const u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const v={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const f={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const p={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const g={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const m={ordinalNumber:(0,a/* .buildMatchPatternFn */.y)({matchPattern:o,parsePattern:i,valueCallback:e=>parseInt(e,10)}),era:(0,n/* .buildMatchFn */.t)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,n/* .buildMatchFn */.t)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n/* .buildMatchFn */.t)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,n/* .buildMatchFn */.t)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,n/* .buildMatchFn */.t)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})}},5618:function(e,t,r){r.d(t,{F:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,a/* .toDate */.Q)(e,o);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(o,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},20831:function(e,t,r){r.d(t,{V:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,a/* .toDate */.Q)(e,o);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(o,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},19706:function(e,t,r){r.d(t,{q:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(12309);/* ESM import */var o=r(28898);/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function i(e,t,r){const i=(0,o/* .toDate */.Q)(e,r?.in);const l=i.getFullYear();const s=i.getDate();const c=(0,n/* .constructFrom */.L)(r?.in||e,0);c.setFullYear(l,t,15);c.setHours(0,0,0,0);const d=(0,a/* .getDaysInMonth */.N)(c);// Set the earlier date, allows to wrap Jan 31 to Feb 28
i.setMonth(t,Math.min(s,d));return i}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&i},16614:function(e,t,r){r.d(t,{M:()=>o});/* ESM import */var n=r(85941);/* ESM import */var a=r(28898);/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.Q)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+o))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);o.setFullYear(t);return o}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},51066:function(e,t,r){r.d(t,{b:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},44459:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(19397);/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){return(0,n/* .startOfWeek */.z)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},47926:function(e,t,r){r.d(t,{E:()=>i});/* ESM import */var n=r(85941);/* ESM import */var a=r(74155);/* ESM import */var o=r(44459);/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function i(e,t){const r=(0,a/* .getISOWeekYear */.L)(e,t);const i=(0,n/* .constructFrom */.L)(t?.in||e,0);i.setFullYear(r,0,4);i.setHours(0,0,0,0);return(0,o/* .startOfISOWeek */.T)(i)}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&i},12432:function(e,t,r){r.d(t,{N:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},19397:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(92639);/* ESM import */var a=r(28898);/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function o(e,t){const r=(0,n/* .getDefaultOptions */.j)();const o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,a/* .toDate */.Q)(e,t?.in);const l=i.getDay();const s=(l<o?7:0)+l-o;i.setDate(i.getDate()-s);i.setHours(0,0,0,0);return i}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&o},86009:function(e,t,r){r.d(t,{v:()=>l});/* ESM import */var n=r(92639);/* ESM import */var a=r(85941);/* ESM import */var o=r(7898);/* ESM import */var i=r(19397);/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function l(e,t){const r=(0,n/* .getDefaultOptions */.j)();const l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const s=(0,o/* .getWeekYear */.c)(e,t);const c=(0,a/* .constructFrom */.L)(t?.in||e,0);c.setFullYear(s,0,l);c.setHours(0,0,0,0);const d=(0,i/* .startOfWeek */.z)(c,t);return d}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&l},35523:function(e,t,r){r.d(t,{e:()=>a});/* ESM import */var n=r(28898);/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a},28898:function(e,t,r){r.d(t,{Q:()=>a});/* ESM import */var n=r(85941);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function a(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.L)(t||e,e)}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&a}}]);