(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[36],{241:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(176),o=n(183),l=n(187),c=n(178),i=n(185);function s(e){return Object(o.a)(e)||Object(l.a)(e)||Object(c.a)(e)||Object(i.a)()}var u=n(171),m=n(0),f=n.n(m),b=n(8),p=n(170),d=n(41),g=n(7),E=n(116),w=Object(m.memo)((function(e){var t=e.interval,n=e.style,r=function(e){return(e<10?"0"+e.toString():e).toString()},a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),l=Math.floor(t%6e4%1e3),c=b.a.create({timerContainer:{flexDirection:"row"}});return f.a.createElement(g.a,{style:c.timerContainer},f.a.createElement(E.a,{style:n},r(a),":"),f.a.createElement(E.a,{style:n},r(o),"."),f.a.createElement(E.a,{style:n},r(l).substr(0,2)))})),F=Object(m.memo)((function(e){var t=e.title,n=e.color,r=e.background,a=e.onPress,o=e.disabled,l=void 0!==o&&o,c=b.a.create({button:{alignItems:"center",borderRadius:40,height:80,justifyContent:"center",width:80},buttonBorder:{alignItems:"center",borderRadius:38,borderWidth:1,height:76,justifyContent:"center",width:76},buttonTitle:{fontSize:18}});return f.a.createElement(p.n,{onPress:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return!l&&a()})),style:[c.button,{backgroundColor:r}],activeOpacity:l?1:.7},f.a.createElement(g.a,{style:c.buttonBorder},f.a.createElement(E.a,{style:[c.buttonTitle,{color:n}]},t)))})),h=n(39),j=Object(m.memo)((function(e){var t=e.num,n=e.interval,r=e.fastest,a=e.slowest,o=b.a.create({fastest:{color:"#4BC05F"},lap:{borderColor:"#151515",borderTopWidth:1,flexDirection:"row",justifyContent:"space-between",paddingVertical:10},lapText:{color:"#FFFFFF",fontFamily:"Courier",fontSize:18},slowest:{color:"#CC3531"}}),l=[o.lapText,r&&o.fastest,a&&o.slowest];return f.a.createElement(g.a,{style:o.lap},f.a.createElement(E.a,{style:l},"Lap ",t),f.a.createElement(w,{style:l,interval:n}))})),y=Object(m.memo)((function(e){var t=e.laps,n=e.timer,r=t.slice(1),a=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER;r.length>=2&&r.forEach((function(e){e<a&&(a=e),e>o&&(o=e)}));var l=b.a.create({scrollView:{alignSelf:"stretch"}});return f.a.createElement(h.a,{style:l.scrollView},t.map((function(e,r){return f.a.createElement(j,{num:t.length-r,key:t.length-r,interval:0===r?n+e:e,fastest:e===a,slowest:e===o})})))})),v=Object(m.memo)((function(e){var t=e.children,n=b.a.create({buttonsRow:{alignSelf:"stretch",flexDirection:"row",justifyContent:"space-between",marginBottom:30,marginTop:80}});return f.a.createElement(g.a,{style:n.buttonsRow},t)}));t.default=Object(m.memo)((function(){var e=Object(d.d)(),t=Object(m.useState)({laps:[],now:0,start:0}),n=Object(u.a)(t,2),o=n[0],l=n[1],c=Object(m.useRef)(null),i=o.now-o.start,g=o.laps.reduce((function(e,t){return e+t}),0)+i,E=b.a.create({container:{alignItems:"center",backgroundColor:"#0D0D0D",flex:1,paddingHorizontal:20,paddingTop:130},timer:{color:"#FFFFFF",fontFamily:"Courier",fontSize:54,fontWeight:"200"}});Object(m.useEffect)((function(){return function(){c.current&&clearTimeout(c.current)}}),[c]);var h=function(){var e=(new Date).getTime(),t=o.laps,n=o.now,r=o.start,c=s(t),i=c[0],u=c.slice(1);l({laps:[0,i+n-r].concat(Object(a.a)(u)),now:e,start:e})},j=function(){c.current=setInterval((function(){l((function(e){return Object(r.a)({},e,{now:(new Date).getTime()})}))}),100)};return f.a.createElement(p.j,{onLeftPress:e.to("debug"),style:E.container},f.a.createElement(w,{interval:g,style:E.timer}),0===o.laps.length&&f.a.createElement(v,null,f.a.createElement(F,{title:"Lap",color:"#8B8B90",background:"#151515",onPress:h,disabled:!0}),f.a.createElement(F,{title:"Start",color:"#50D167",background:"#1B361F",onPress:function(){var e=(new Date).getTime();l({laps:[0],now:e,start:e}),j()}})),o.start>0&&f.a.createElement(v,null,f.a.createElement(F,{title:"Lap",color:"#FFFFFF",background:"#3D3D3D",onPress:h}),f.a.createElement(F,{title:"Stop",color:"#E33935",background:"#3C1715",onPress:function(){c.current&&clearInterval(c.current);var e=o.laps,t=o.now,n=o.start,r=s(e),i=r[0],u=r.slice(1);l({laps:[i+t-n].concat(Object(a.a)(u)),now:0,start:0})}})),o.laps.length>0&&0===o.start&&f.a.createElement(v,null,f.a.createElement(F,{title:"Reset",color:"#FFFFFF",background:"#3D3D3D",onPress:function(){l({laps:[],now:0,start:0})}}),f.a.createElement(F,{title:"Start",color:"#50D167",background:"#1B361F",onPress:function(){var e=(new Date).getTime();l((function(t){return Object(r.a)({},t,{now:e,start:e})})),j()}})),f.a.createElement(y,{laps:o.laps,timer:i}))}))}}]);
//# sourceMappingURL=36.2be21a20.chunk.js.map