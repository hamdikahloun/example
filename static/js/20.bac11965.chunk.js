(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[20],{216:function(t,e,a){"use strict";a.r(e);var n=a(77),i=a(78),r=a(80),o=a(79),l=a(81),s=a(1),u=a.n(s),c=a(8),b=a(174),h=a(14),d=a(40),f=a(176),p=a(23),m=c.a.create({ball:{borderColor:"black",borderRadius:30,borderWidth:30,height:60,marginLeft:-30,marginTop:-30,width:60},button:{flex:1,flexDirection:"row",justifyContent:"space-around"}}),v=function(t){function e(t){var a;Object(n.a)(this,e),(a=Object(r.a)(this,Object(o.a)(e).call(this,t))).ballPosition=void 0,a.nav=function(t){return function(){return a.props.navigate(t)}};var i=a.props,l=i.width,s=i.height;return a.ballPosition=new b.a.ValueXY({x:l/2,y:s/2}),a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return u.a.createElement(f.l,{onLeftPress:this.nav("debug")},u.a.createElement(b.a.View,{style:[this.ballPosition.getLayout(),m.ball]}),u.a.createElement(h.a,{style:m.button},u.a.createElement(f.b,{title:"initial",onPress:function(){return t.animate(.5,.5)}}),u.a.createElement(f.b,{title:"random",onPress:function(){return t.animate(Math.random(),Math.random())}})))}},{key:"animate",value:function(t,e){var a=this.props,n=a.width,i=a.height;b.a.spring(this.ballPosition,{toValue:{x:n*t,y:i*e}}).start()}}]),e}(u.a.PureComponent),g={navigate:p.j};e.default=Object(d.b)((function(t){return{height:Object(p.f)(t),width:Object(p.i)(t)}}),g)(v)}}]);
//# sourceMappingURL=20.bac11965.chunk.js.map