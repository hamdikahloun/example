(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[38],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(3),r=n(176),c=n(171),o=n(0),i=n.n(o),l=n(170),d=n(41),s=n(8),u=n(120),m=n(166),f=n(7),b=n(4),h=Object(o.memo)((function(e){var t=e.item;return i.a.createElement(f.a,{style:{alignItems:"center",borderTopColor:"grey",borderTopWidth:1,flexDirection:"row",justifyContent:"center",marginTop:b.c.padding.p02,padding:b.c.padding.p02}},i.a.createElement(l.l,{type:"h3",title:t.dayOfMonth}),i.a.createElement(l.l,{type:"overline",title:" ".concat(t.month,", ").concat(t.dayOfWeek)}))})),p=Object(o.memo)((function(e){var t=e.showSection,n=e.item,a=e.onItemPress,r=e.currentItem,c=Object(d.a)(),o=n.id>Date.now(),s=o?c.secondary:c.success,u=r?"current":o?"future":n.action;return i.a.createElement(f.a,{style:{borderColor:r?c.primary:c.background,borderLeftWidth:b.c.padding.p01,flex:1}},i.a.createElement(l.n,{style:{flex:1,flexDirection:"row",height:b.c.padding.p10,paddingHorizontal:b.c.padding.p04,paddingVertical:b.c.padding.p02},onPress:function(){return a(n)},disabled:o},i.a.createElement(f.a,{style:{flexDirection:"row",width:b.c.padding.p20}},i.a.createElement(l.f,{name:o?"cancel":"checkbox-blank-circle",size:14,color:s,style:{paddingRight:b.c.padding.p01}}),i.a.createElement(l.l,{title:"".concat(n.hour," ").concat(n.zone)})),i.a.createElement(l.l,{style:{color:c.secondary,flex:1},title:u,type:"body1",numberOfLines:1,ellipsizeMode:"tail"})),t&&i.a.createElement(h,{item:n}))})),g=n(175),O=n.n(g),y=b.c.padding.p10,E=O()().startOf("day").add(2,"day").diff(O()(),"hour")-4,j=function(e,t){return{length:y,offset:y*t,index:t}},v=function(e){var t=new Date,n=t.setHours(t.getHours()-1),a=t.setHours(t.getHours()+1);return e.id>n&&e.id<a},k=function(e,t,n){return!(e<1)&&t.dayOfMonth!==n[e-1].dayOfMonth},I=function(e){return String(e.id)},x=Object(o.memo)((function(e){var t=e.items,n=e.onItemPress,a=e.onEndReached,r=e.onEndReachedThreshold,l=Object(o.useState)(!0),d=Object(c.a)(l,2),f=d[0],b=d[1],h=s.a.create({list:{opacity:f?0:1},loading:{position:"absolute",height:"100%",width:"100%"}}),g=Object(o.useCallback)((function(){setTimeout((function(){b(!1)}),1e3)}),[]);Object(o.useEffect)(g,[]);var O=Object(o.useCallback)((function(e){var a=e.item,r=e.index;return i.a.createElement(p,{currentItem:v(a),item:a,showSection:k(r,a,t),onItemPress:n})}),[t,n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{style:h.list,inverted:!0,initialScrollIndex:E,getItemLayout:j,keyExtractor:I,data:t,onEndReached:a,onEndReachedThreshold:r,renderItem:O}),f&&i.a.createElement(m.a,{size:"large",style:h.loading}))})),w={visible:!1,item:null};function S(){var e=Object(o.useState)(w),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(o.useState)(!1),m=Object(c.a)(u,1)[0],f=Object(o.useState)(!1),b=Object(c.a)(f,1)[0],h=Object(o.useState)([]),p=Object(c.a)(h,2),g=p[0],y=p[1],E=Object(d.d)(),j=Object(o.useCallback)((function(){for(var e=Object(r.a)(g),t=0;t<100;t++){var n=0===e.length?O()().startOf("day").add(2,"day").valueOf():e[e.length-1].id,a=O()(n).subtract(1,"hour"),c=a.valueOf();e.push({action:String(Math.random())+String(Math.random()),dayOfMonth:a.format("D"),dayOfWeek:a.format("ddd"),hour:a.format("h"),id:c,month:a.format("MMM"),zone:a.format("a")})}y(e)}),[g]),v=Object(o.useCallback)((function(e){s({visible:!0,item:e})}),[]),k=Object(o.useCallback)((function(){g.length>0||j()}),[j,g.length]),I=Object(o.useCallback)((function(){s((function(e){return Object(a.a)({},e,{visible:!1})}))}),[]);return Object(o.useEffect)(k,[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.j,{border:!0,onLeftPress:E.to("portfolioLanding"),title:"Focus"},g.length>0&&i.a.createElement(x,{items:g,onItemPress:v,onEndReached:j,onEndReachedThreshold:.5})),n.visible&&i.a.createElement(l.e,{duration:2e3,testID:"editItem",title:n.item?n.item.action:"empty",onBackgroundPress:I}),m&&i.a.createElement(l.e,{testID:"editItem",title:"hello",onBackgroundPress:I}),b&&i.a.createElement(l.e,{testID:"editItem",title:"hello",onBackgroundPress:I}))}}}]);
//# sourceMappingURL=38.a1fd3bac.chunk.js.map