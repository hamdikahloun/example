(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[30],{243:function(t,e,a){"use strict";a.r(e);var n=a(77),r=a(78),o=a(80),i=a(79),c=a(81),l=a(0),h=a.n(l),u=a(46),d=a(120),m=a(41),s=a(170),p=a(23),f=a(167),v=a(8),g=a(7),M=a(166),b=a(39);function w(t){var e=Object(b.c)(),a=new f.a.Value(0),n=new f.a.Value(1),r=v.a.create({indicatorOverlay:{justifyContent:"center",position:"absolute"}}),o=t.uri,i=t.height,c=t.width,l=t.color,u=void 0===l?"black":l,d=t.size,m=void 0===d?"small":d,s={width:c,height:i},p=[s,{opacity:a}],w=[s,{opacity:n},r.indicatorOverlay];return h.a.createElement(g.a,{style:s},h.a.createElement(f.a.Image,{source:{uri:o},style:p,onLoad:function(){f.a.parallel([f.a.timing(n,{toValue:0,useNativeDriver:e}),f.a.timing(a,{toValue:1,useNativeDriver:e})]).start()}}),h.a.createElement(f.a.View,{style:w},h.a.createElement(M.a,{size:m,color:u})))}var y=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).data=[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],a.numColumns=3,a.infiniteScrollThreshold=.3,a.columnWidth=u.a.get("window").width/a.numColumns,a.imageUrl="http://lorempixel.com/".concat(a.columnWidth,"/").concat(a.columnWidth),a.nav=function(t){return function(){return a.props.navigate(t)}},a.fetchMore=function(){a.data.push(Math.random()),a.data.push(Math.random()),a.data.push(Math.random()),a.data.push(Math.random()),a.data.push(Math.random())},a.renderImage=function(){return h.a.createElement(w,{uri:a.imageUrl,width:a.columnWidth,height:a.columnWidth})},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return h.a.createElement(s.k,{onLeftPress:this.nav("debug"),title:"Image Collection"},h.a.createElement(d.a,{keyExtractor:function(t){return t.toString()},data:this.data,onEndReached:this.fetchMore,onEndReachedThreshold:this.infiniteScrollThreshold,numColumns:this.numColumns,renderItem:this.renderImage}))}}]),e}(h.a.PureComponent),E={navigate:p.j};e.default=Object(m.b)(null,E)(y)}}]);
//# sourceMappingURL=30.fa1deb02.chunk.js.map