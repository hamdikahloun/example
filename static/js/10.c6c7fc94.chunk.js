(window.webpackJsonpexample=window.webpackJsonpexample||[]).push([[10],{213:function(e,t,n){"use strict";n.r(t);var a=n(21),i=n(22),r=n(24),c=n(23),s=n(25),o=n(1),u=n.n(o),p=n(38),l=n(69),m=n(18),h=n(98),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={description:"",name:""},n.nav=function(e){return function(){return n.props.navigate(e)}},n.setName=function(e){n.setState({name:e})},n.setDescription=function(e){n.setState({description:e})},n.createItem=function(){var e=n.props.createItem,t=n.state;e({name:t.name,description:t.description}),n.nav("checklistsList")},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.description;return u.a.createElement(l.g,{onLeftPress:this.nav("checklistsList")},u.a.createElement(l.i,{title:"name",value:t,onChangeText:this.setName}),u.a.createElement(l.i,{title:"description",value:n,onChangeText:this.setDescription}),u.a.createElement(l.a,{title:"create",onPress:this.createItem}))}}]),t}(u.a.PureComponent);t.default=Object(p.b)(function(e){return{state:e}},{createItem:h.a,navigate:m.l})(f)}}]);
//# sourceMappingURL=10.c6c7fc94.chunk.js.map