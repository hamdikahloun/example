(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[28],{229:function(t,e,n){"use strict";n.r(e);var a=n(52),r=n(182),o=n(99),l=n(183);function i(t){return Object(r.a)(t)||Object(o.a)(t)||Object(l.a)()}var s=n(79),c=n(80),u=n(82),m=n(81),f=n(83),p=n(179),b=n.n(p),d=n(1),g=n.n(d),h=n(7),E=n(13),v=n(123),w=n(197),F=n(102),y=n(39),D=n(177),S=n(22),C=h.a.create({button:{alignItems:"center",borderRadius:40,height:80,justifyContent:"center",width:80},buttonBorder:{alignItems:"center",borderRadius:38,borderWidth:1,height:76,justifyContent:"center",width:76},buttonTitle:{fontSize:18},buttonsRow:{alignSelf:"stretch",flexDirection:"row",justifyContent:"space-between",marginBottom:30,marginTop:80},container:{alignItems:"center",backgroundColor:"#0D0D0D",flex:1,paddingHorizontal:20,paddingTop:130},fastest:{color:"#4BC05F"},lap:{borderColor:"#151515",borderTopWidth:1,flexDirection:"row",justifyContent:"space-between",paddingVertical:10},lapText:{color:"#FFFFFF",fontFamily:"Courier",fontSize:18},scrollView:{alignSelf:"stretch"},slowest:{color:"#CC3531"},timer:{color:"#FFFFFF",fontFamily:"Courier",fontSize:54,fontWeight:"200"},timerContainer:{flexDirection:"row"}});function j(t){var e=t.interval,n=t.style,a=function(t){return t<10?"0"+t:t},r=b.a.duration(e),o=Math.floor(r.milliseconds()/10);return g.a.createElement(E.a,{style:C.timerContainer},g.a.createElement(v.a,{style:n},a(r.minutes()),":"),g.a.createElement(v.a,{style:n},a(r.seconds()),"."),g.a.createElement(v.a,{style:n},a(o)))}function k(t){var e=t.title,n=t.color,a=t.background,r=t.onPress,o=t.disabled,l=void 0!==o&&o;return g.a.createElement(w.a,{onPress:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return!l&&r()}),style:[C.button,{backgroundColor:a}],activeOpacity:l?1:.7},g.a.createElement(E.a,{style:C.buttonBorder},g.a.createElement(v.a,{style:[C.buttonTitle,{color:n}]},e)))}function T(t){var e=t.num,n=t.interval,a=t.fastest,r=t.slowest,o=[C.lapText,a&&C.fastest,r&&C.slowest];return g.a.createElement(E.a,{style:C.lap},g.a.createElement(v.a,{style:o},"Lap ",e),g.a.createElement(j,{style:o,interval:n}))}function O(t){var e=t.laps,n=t.timer,a=e.slice(1),r=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER;return a.length>=2&&a.forEach(function(t){t<r&&(r=t),t>o&&(o=t)}),g.a.createElement(F.a,{style:C.scrollView},e.map(function(t,a){return g.a.createElement(T,{num:e.length-a,key:e.length-a,interval:0===a?n+t:t,fastest:t===r,slowest:t===o})}))}function P(t){var e=t.children;return g.a.createElement(E.a,{style:C.buttonsRow},e)}var I=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={laps:[],now:0,start:0},n.timer=void 0,n.start=function(){var t=(new Date).getTime();n.setState({laps:[0],now:t,start:t}),n.run()},n.lap=function(){var t=(new Date).getTime(),e=n.state,r=e.laps,o=e.now,l=e.start,s=i(r),c=s[0],u=s.slice(1);n.setState({laps:[0,c+o-l].concat(Object(a.a)(u)),now:t,start:t})},n.stop=function(){clearInterval(n.timer);var t=n.state,e=t.laps,r=t.now,o=t.start,l=i(e),s=l[0],c=l.slice(1);n.setState({laps:[s+r-o].concat(Object(a.a)(c)),now:0,start:0})},n.reset=function(){n.setState({laps:[],now:0,start:0})},n.run=function(){n.timer=setInterval(function(){n.setState({now:(new Date).getTime()})},100)},n.resume=function(){var t=(new Date).getTime();n.setState({now:t,start:t}),n.run()},n.nav=function(t){return function(){return n.props.navigate(t)}},n}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,e=t.now,n=t.start,a=t.laps,r=e-n;return g.a.createElement(D.g,{onLeftPress:this.nav("debug"),style:C.container},g.a.createElement(j,{interval:a.reduce(function(t,e){return t+e},0)+r,style:C.timer}),0===a.length&&g.a.createElement(P,null,g.a.createElement(k,{title:"Lap",color:"#8B8B90",background:"#151515",onPress:this.lap,disabled:!0}),g.a.createElement(k,{title:"Start",color:"#50D167",background:"#1B361F",onPress:this.start})),n>0&&g.a.createElement(P,null,g.a.createElement(k,{title:"Lap",color:"#FFFFFF",background:"#3D3D3D",onPress:this.lap}),g.a.createElement(k,{title:"Stop",color:"#E33935",background:"#3C1715",onPress:this.stop})),a.length>0&&0===n&&g.a.createElement(P,null,g.a.createElement(k,{title:"Reset",color:"#FFFFFF",background:"#3D3D3D",onPress:this.reset}),g.a.createElement(k,{title:"Start",color:"#50D167",background:"#1B361F",onPress:this.resume})),g.a.createElement(O,{laps:a,timer:r}))}}]),e}(g.a.PureComponent),x={navigate:S.i};e.default=Object(y.b)(null,x)(I)}}]);
//# sourceMappingURL=28.8f50960c.chunk.js.map