(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[9],{181:function(e,n,t){"use strict";var o=t(63),r={centroidDimension:function(e,n,t,o){var a=e.touchBank,i=0,u=0,s=1===e.numberActiveTouches?e.touchBank[e.indexOfSingleActiveTouch]:null;if(null!==s)s.touchActive&&s.currentTimeStamp>n&&(i+=o&&t?s.currentPageX:o&&!t?s.currentPageY:!o&&t?s.previousPageX:s.previousPageY,u=1);else for(var c=0;c<a.length;c++){var d=a[c];if(null!==d&&void 0!==d&&d.touchActive&&d.currentTimeStamp>=n){i+=o&&t?d.currentPageX:o&&!t?d.currentPageY:!o&&t?d.previousPageX:d.previousPageY,u++}}return u>0?i/u:r.noCentroid},currentCentroidXOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(e,n){return r.centroidDimension(e,n,!1,!1)},currentCentroidX:function(e){return r.centroidDimension(e,0,!0,!0)},currentCentroidY:function(e){return r.centroidDimension(e,0,!1,!0)},noCentroid:-1},a=r,i=a.currentCentroidXOfTouchesChangedAfter,u=a.currentCentroidYOfTouchesChangedAfter,s=a.previousCentroidXOfTouchesChangedAfter,c=a.previousCentroidYOfTouchesChangedAfter,d=a.currentCentroidX,h=a.currentCentroidY,p={_initializeGestureState:function(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=i(n,e._accountsForMovesUpTo),e.moveY=u(n,e._accountsForMovesUpTo);var t=e._accountsForMovesUpTo,o=s(n,t),r=i(n,t),a=c(n,t),d=u(n,t),h=e.dx+(r-o),p=e.dy+(d-a),v=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(h-e.dx)/v,e.vy=(p-e.dy)/v,e.dx=h,e.dy=p,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create:function(e){var n={handle:null},t={stateID:Math.random()};return p._initializeGestureState(t),{panHandlers:{onStartShouldSetResponder:function(n){return void 0!==e.onStartShouldSetPanResponder&&e.onStartShouldSetPanResponder(n,t)},onMoveShouldSetResponder:function(n){return void 0!==e.onMoveShouldSetPanResponder&&e.onMoveShouldSetPanResponder(n,t)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&p._initializeGestureState(t),t.numberActiveTouches=n.touchHistory.numberActiveTouches,void 0!==e.onStartShouldSetPanResponderCapture&&e.onStartShouldSetPanResponderCapture(n,t)},onMoveShouldSetResponderCapture:function(n){var o=n.touchHistory;return t._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(p._updateGestureStateOnMove(t,o),!!e.onMoveShouldSetPanResponderCapture&&e.onMoveShouldSetPanResponderCapture(n,t))},onResponderGrant:function(r){return n.handle||(n.handle=o.a.createInteractionHandle()),t.x0=d(r.touchHistory),t.y0=h(r.touchHistory),t.dx=0,t.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(r,t),void 0===e.onShouldBlockNativeResponder||e.onShouldBlockNativeResponder()},onResponderReject:function(o){v(n,e.onPanResponderReject,o,t)},onResponderRelease:function(o){v(n,e.onPanResponderRelease,o,t),p._initializeGestureState(t)},onResponderStart:function(n){var o=n.touchHistory;t.numberActiveTouches=o.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(n,t)},onResponderMove:function(n){var o=n.touchHistory;t._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(p._updateGestureStateOnMove(t,o),e.onPanResponderMove&&e.onPanResponderMove(n,t))},onResponderEnd:function(o){var r=o.touchHistory;t.numberActiveTouches=r.numberActiveTouches,v(n,e.onPanResponderEnd,o,t)},onResponderTerminate:function(o){v(n,e.onPanResponderTerminate,o,t),p._initializeGestureState(t)},onResponderTerminationRequest:function(n){return void 0===e.onPanResponderTerminationRequest||e.onPanResponderTerminationRequest(n,t)}},getInteractionHandle:function(){return n.handle}}}};function v(e,n,t,r){e.handle&&(o.a.clearInteractionHandle(e.handle),e.handle=null),n&&n(t,r)}var l=p;n.a=l},235:function(e,n,t){"use strict";t.r(n);var o=t(4),r=t(177),a=t(1),i=t.n(a),u=t(8),s=t(174),c=t(176),d=t(39),h=t(181),p=function(e){var n=e.onStartShouldSetPanResponder,t=e.onStartShouldSetPanResponderCapture,o=e.onMoveShouldSetPanResponder,i=e.onMoveShouldSetPanResponderCapture,u=e.onPanResponderGrant,s=e.onPanResponderMove,c=e.onPanResponderTerminationRequest,d=e.onPanResponderRelease,p=e.onPanResponderTerminate,v=e.onShouldBlockNativeResponder,l=Object(a.useState)(),S=Object(r.a)(l,2),f=S[0],R=S[1];return Object(a.useEffect)((function(){var e=h.a.create({onStartShouldSetPanResponder:n,onStartShouldSetPanResponderCapture:t,onMoveShouldSetPanResponder:o,onMoveShouldSetPanResponderCapture:i,onPanResponderGrant:u,onPanResponderMove:s,onPanResponderTerminationRequest:c,onPanResponderRelease:d,onPanResponderTerminate:p,onShouldBlockNativeResponder:v});R(e)}),[o,i,u,s,d,p,c,v,n,t]),f},v=t(77),l=t(78),S=function(){function e(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).minTouches,t=void 0===n?2:n;Object(v.a)(this,e),this.minTouches=void 0,this.finish={},this.start={},this.minTouches=t}return Object(l.a)(e,[{key:"onPanResponderMove",value:function(e){var n=this;e.nativeEvent.touches.forEach((function(e){n.recordFinish(e),n.recordStart(e)}))}},{key:"onPanResponderRelease",value:function(){var e=this.determineOutcome();return this.start={},this.finish={},e}},{key:"recordStart",value:function(e){this.isStartAlreadyRecorded(e)||(this.start[String(e.identifier)]={x:e.locationX,y:e.locationY})}},{key:"isStartAlreadyRecorded",value:function(e){return this.start[String(e.identifier)]}},{key:"recordFinish",value:function(e){this.finish[String(e.identifier)]={x:e.locationX,y:e.locationY}}},{key:"isSpread",value:function(e,n,t){var o=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y),a=Math.abs(n.x-t.x),i=Math.abs(n.y-t.y);return o<=a&&r<=i}},{key:"determineCenter",value:function(e){for(var n=Object.keys(e).length,t=0,o=0,r=1;r<=n;r++){var a=e[r];t+=a.x,o+=a.x}return{x:t/n,y:o/n}}},{key:"determineOutcome",value:function(){var e=Object.keys(this.start).length,n={pinch:!1,spread:!1};if(e<this.minTouches)return n;for(var t=!1,o=!1,r=this.determineCenter(this.start),a=1;a<=e;a++){var i=this.start[a],u=this.finish[a],s=!this.isSpread(i,u,r),c=this.isSpread(i,u,r);if(s&&c)return n;if(!s&&!c)return n;if(s&&t)return n;if(c&&o)return n;o=s,t=c}return{spread:t,pinch:o}}}]),e}();t.d(n,"default",(function(){return m}));var f=2,R="pinch or spread the screen with ".concat(f," fingers minimum");function m(){var e=Object(a.useState)({pinchCount:0,spreadCount:0}),n=Object(r.a)(e,2),t=n[0],h=n[1],v=Object(d.a)(),l=Object(d.d)(),m=u.a.create({container:{flex:1,backgroundColor:v.light}}),P=new S({minTouches:f}),T=p({onMoveShouldSetPanResponderCapture:function(){return!0},onPanResponderMove:function(e){P.onPanResponderMove(e)},onPanResponderRelease:function(){var e=t.spreadCount,n=t.pinchCount,r=P.onPanResponderRelease();r.spread&&h(Object(o.a)({},t,{spreadCount:e+1})),r.pinch&&h(Object(o.a)({},t,{pinchCount:n+1}))}});return T?i.a.createElement(c.l,{onLeftPress:l.to("debug")},i.a.createElement(c.n,{center:!0,title:R}),i.a.createElement(c.n,{center:!0,title:"spread: ".concat(t.spreadCount)}),i.a.createElement(c.n,{center:!0,title:"pinch: ".concat(t.pinchCount)}),i.a.createElement(s.a.View,Object.assign({style:m.container},T.panHandlers))):i.a.createElement(i.a.Fragment,null)}}}]);
//# sourceMappingURL=9.3d16a33b.chunk.js.map