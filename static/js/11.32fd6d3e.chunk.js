(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[11],{186:function(e,t,a){"use strict";var n=a(83),i={addListener:function(){return{remove:function(){}}},dismiss:function(){Object(n.a)()},removeAllListeners:function(){},removeListener:function(){}};t.a=i},217:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(172),o=a(0),r=a.n(o),c=a(169),d=a(8),l=a(60),u=a(186),m=a(7),s=a(122),b=a(171),f=a(4),p=a(40),g=[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"},{id:7,name:"7"},{id:8,name:"8"},{id:9,name:"9"},{id:10,name:"10"},{id:11,name:"11"},{id:12,name:"12"},{id:13,name:"13"},{id:14,name:"14"},{id:15,name:"15"},{id:16,name:"16"},{id:17,name:"17"},{id:18,name:"18"},{id:19,name:"19"}];t.default=Object(o.memo)((function(){var e=Object(p.d)(),t=Object(p.a)(),a=Object(o.useState)({animation:new c.a.Value(0),iconName:"magnify",input:""}),O=Object(i.a)(a,2),j=O[0],k=O[1],C=j.animation.interpolate({inputRange:[0,.5,1],outputRange:[1,-60,1]}),h=j.animation.interpolate({inputRange:[0,1],outputRange:[t.background,Object(f.d)(t.secondary)]}),x=d.a.create({container:{flex:1},header:{backgroundColor:t.light,height:f.c.padding.p20,justifyContent:"center",padding:f.c.padding.p02},item:{borderBottomColor:t.light,borderWidth:.2,padding:f.c.padding.p06},text:{fontSize:f.c.padding.p06},textContainer:{alignItems:"center",backgroundColor:t.background,flexDirection:"row",height:"100%",padding:f.c.padding.p02},textInput:{flex:1,marginLeft:f.c.padding.p02}}),y=Object(o.useCallback)((function(e){c.a.timing(j.animation,{duration:400,toValue:e}).start()}),[j.animation]),v=Object(o.useCallback)((function(e){var t=setTimeout((function(){clearTimeout(t),k(Object(n.a)({},j,{iconName:e}))}),200)}),[j]),E=Object(o.useCallback)((function(){y(1),v("arrow-left")}),[y,v]),S=Object(o.useCallback)((function(){y(0),v("magnify")}),[y,v]),L=Object(o.useCallback)((function(){l.a.OS===f.a.os.ios&&E()}),[E]),w=Object(o.useCallback)((function(){l.a.OS===f.a.os.ios&&S()}),[S]),R=Object(o.useCallback)((function(){l.a.OS===f.a.os.android&&E()}),[E]),I=Object(o.useCallback)((function(){l.a.OS===f.a.os.android&&S()}),[S]);Object(o.useEffect)((function(){if(!Object({NODE_ENV:"production",PUBLIC_URL:"/example"}).JEST_WORKER_ID){var e=u.a.addListener("keyboardDidShow",R),t=u.a.addListener("keyboardDidHide",I),a=u.a.addListener("keyboardWillShow",L),n=u.a.addListener("keyboardWillHide",w);return function(){e.remove(),t.remove(),a.remove(),n.remove()}}}),[I,R,w,L]);var D=Object(o.useCallback)((function(e){var t=e.item;return r.a.createElement(b.n,{subtitle2:!0,style:x.item,title:t.name})}),[x.item]),N=Object(o.useCallback)((function(e){return e.id.toString()}),[]);return r.a.createElement(b.l,{onLeftPress:e.to("debug")},r.a.createElement(m.a,{style:x.header},r.a.createElement(m.a,{style:x.textContainer},r.a.createElement(c.a.View,{style:{transform:[{translateX:C}]}},r.a.createElement(b.g,{name:j.iconName,style:x.text})),r.a.createElement(b.o,{value:j.input,onChangeText:function(e){return k(Object(n.a)({},j,{input:e}))},placeholder:"Search",containerStyle:[x.textInput,x.text]}))),r.a.createElement(c.a.View,{style:{flex:1,backgroundColor:h}},r.a.createElement(s.a,{keyExtractor:N,data:g,renderItem:D})))}))}}]);
//# sourceMappingURL=11.32fd6d3e.chunk.js.map