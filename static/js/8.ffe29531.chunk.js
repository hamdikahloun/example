(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[8],{181:function(e,n,t){"use strict";var o=t(63),r={centroidDimension:function(e,n,t,o){var a=e.touchBank,u=0,i=0,c=1===e.numberActiveTouches?e.touchBank[e.indexOfSingleActiveTouch]:null;if(null!==c)c.touchActive&&c.currentTimeStamp>n&&(u+=o&&t?c.currentPageX:o&&!t?c.currentPageY:!o&&t?c.previousPageX:c.previousPageY,i=1);else for(var s=0;s<a.length;s++){var d=a[s];if(null!==d&&void 0!==d&&d.touchActive&&d.currentTimeStamp>=n){u+=o&&t?d.currentPageX:o&&!t?d.currentPageY:!o&&t?d.previousPageX:d.previousPageY,i++}}return i>0?u/i:r.noCentroid},currentCentroidXOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!1,!1)},currentCentroidX:function(e){return r.centroidDimension(e,0,!0,!0)},currentCentroidY:function(e){return r.centroidDimension(e,0,!1,!0)},noCentroid:-1},a=r,u=a.currentCentroidXOfTouchesChangedAfter,i=a.currentCentroidYOfTouchesChangedAfter,c=a.previousCentroidXOfTouchesChangedAfter,s=a.previousCentroidYOfTouchesChangedAfter,d=a.currentCentroidX,p=a.currentCentroidY,v={_initializeGestureState:function(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=u(n,e._accountsForMovesUpTo),e.moveY=i(n,e._accountsForMovesUpTo);var t=e._accountsForMovesUpTo,o=c(n,t),r=u(n,t),a=s(n,t),d=i(n,t),p=e.dx+(r-o),v=e.dy+(d-a),h=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(p-e.dx)/h,e.vy=(v-e.dy)/h,e.dx=p,e.dy=v,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create:function(e){var n={handle:null},t={stateID:Math.random()};return v._initializeGestureState(t),{panHandlers:{onStartShouldSetResponder:function(n){return void 0!==e.onStartShouldSetPanResponder&&e.onStartShouldSetPanResponder(n,t)},onMoveShouldSetResponder:function(n){return void 0!==e.onMoveShouldSetPanResponder&&e.onMoveShouldSetPanResponder(n,t)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&v._initializeGestureState(t),t.numberActiveTouches=n.touchHistory.numberActiveTouches,void 0!==e.onStartShouldSetPanResponderCapture&&e.onStartShouldSetPanResponderCapture(n,t)},onMoveShouldSetResponderCapture:function(n){var o=n.touchHistory;return t._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(v._updateGestureStateOnMove(t,o),!!e.onMoveShouldSetPanResponderCapture&&e.onMoveShouldSetPanResponderCapture(n,t))},onResponderGrant:function(r){return n.handle||(n.handle=o.a.createInteractionHandle()),t.x0=d(r.touchHistory),t.y0=p(r.touchHistory),t.dx=0,t.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(r,t),void 0===e.onShouldBlockNativeResponder||e.onShouldBlockNativeResponder()},onResponderReject:function(o){h(n,e.onPanResponderReject,o,t)},onResponderRelease:function(o){h(n,e.onPanResponderRelease,o,t),v._initializeGestureState(t)},onResponderStart:function(n){var o=n.touchHistory;t.numberActiveTouches=o.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(n,t)},onResponderMove:function(n){var o=n.touchHistory;t._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(v._updateGestureStateOnMove(t,o),e.onPanResponderMove&&e.onPanResponderMove(n,t))},onResponderEnd:function(o){var r=o.touchHistory;t.numberActiveTouches=r.numberActiveTouches,h(n,e.onPanResponderEnd,o,t)},onResponderTerminate:function(o){h(n,e.onPanResponderTerminate,o,t),v._initializeGestureState(t)},onResponderTerminationRequest:function(n){return void 0===e.onPanResponderTerminationRequest||e.onPanResponderTerminationRequest(n,t)}},getInteractionHandle:function(){return n.handle}}}};function h(e,n,t,r){e.handle&&(o.a.clearInteractionHandle(e.handle),e.handle=null),n&&n(t,r)}var l=v;n.a=l},221:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var o=t(1),r=t.n(o),a=t(104),u=t(8),i=t(174),c=t(181),s=t(176),d=t(39);function p(){var e=Object(d.d)(),n=Object(d.a)(),t=a.a.get("window"),o=t.width,p=t.height,v=u.a.create({ball:{borderColor:n.text,borderRadius:30,borderWidth:30,height:60,marginLeft:-30,marginTop:-30,width:60}}),h=new i.a.ValueXY({x:o/2,y:p/2}),l=c.a.create({onMoveShouldSetPanResponderCapture:function(){return!0},onPanResponderMove:function(e,n){i.a.spring(h,{toValue:{x:n.moveX,y:n.moveY}}).start()}});return r.a.createElement(s.l,{onLeftPress:e.to("debug")},r.a.createElement(s.n,{center:!0,title:"drag the circle"}),r.a.createElement(i.a.View,Object.assign({style:[h.getLayout(),v.ball]},l.panHandlers)))}}}]);
//# sourceMappingURL=8.ffe29531.chunk.js.map