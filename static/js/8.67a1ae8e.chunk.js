(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[8],{357:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(313),c=n(7),i=n(12),l=n(64),s=n(24),u=n(29),m=n(10),p=n(3),d=n(17),h=n.n(d),b=n(28),f=n(5),g=n(307),E=n(63),y={},O=Object(a.memo)((function(e){var t=e.onPress,n=e.icon,a=e.title,r=Object(m.a)();return o.a.createElement(u.r,{onPress:t,style:{alignItems:"center",justifyContent:"center",flexDirection:"row",borderColor:r.text,borderWidth:2,padding:p.a.padding.p02,marginBottom:p.a.padding.p02,borderRadius:p.a.padding.p10}},o.a.createElement(u.h,{name:n}),o.a.createElement(u.p,{style:{paddingLeft:p.a.padding.p02},title:a,type:"button"}))})),j=Object(a.memo)((function(e){var t=e.onBackgroundPress,n=Object(a.useState)({email:"",password:"",phone:"",phoneCode:"",phoneConfirmation:null,state:"loading"}),r=Object(c.a)(n,2),i=r[0],l=r[1],s=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{password:"",state:"email"})}))}),[]),m=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{state:"forgot password"})}))}),[]),p=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{email:"",password:"",state:"landing"})}))}),[]),d=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{state:"phone"})}))}),[]),j=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{email:e})}))}),[]),C=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{phone:e})}))}),[]),k=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{phoneCode:e})}))}),[]),w=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{password:e})}))}),[]),P=Object(a.useCallback)(Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().signInWithPhoneNumber(i.phone);case 2:t=e.sent,l((function(e){return Object(f.a)({},e,{state:"phone confirm",phoneConfirmation:t})}));case 4:case"end":return e.stop()}}),e)}))),[l,i.phone]),v=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.phoneConfirmation){e.next=3;break}return console.log("missing confirmation"),e.abrupt("return");case 3:return e.prev=3,e.next=6,i.phoneConfirmation.confirm(i.phoneCode);case 6:l((function(e){return Object(f.a)({},e,{state:"landing"})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("invalid code");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){},T=Object(a.useCallback)((function(){y().signOut().then((function(){return console.log("User signed out!")})).catch((function(){return console.log("no user to sign out")})).finally((function(){return l((function(e){return Object(f.a)({},e,{state:"landing"})}))}))}),[]);return Object(a.useEffect)((function(){T()}),[T]),o.a.createElement(u.j,{onBackgroundPress:t},"loading"===i.state?o.a.createElement(g.a,{size:"large"}):"phone confirm"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"number-pad",onChangeText:k,placeholder:"phone confirmation code",value:i.phoneCode}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:v,title:"verify phone confirmation code"}),o.a.createElement(u.d,{onPress:d,title:"go back"})):"phone"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"number-pad",onChangeText:C,placeholder:"phone",value:i.phone}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:P,title:"send confirmation code"}),o.a.createElement(u.d,{onPress:p,title:"go back"})):"forgot password"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"email-address",onChangeText:j,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:function(){y().createUserWithEmailAndPassword(i.email,i.password).then((function(){console.log("User account created & signed in!")})).catch((function(e){"auth/email-already-in-use"===e.code&&console.log("That email address is already in use!"),"auth/invalid-email"===e.code&&console.log("That email address is invalid!"),console.error(e)}))},title:"send password reset"}),o.a.createElement(u.d,{onPress:s,title:"go back"})):"email"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"email-address",onChangeText:j,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.q,{onChangeText:w,placeholder:"password",secureTextEntry:!0,textContentType:"password",value:i.password}),o.a.createElement(u.d,{color:"primary",emphasis:"high",title:"submit"}),o.a.createElement(u.d,{onPress:m,title:"forgot password"}),o.a.createElement(u.d,{onPress:p,title:"go back"})):o.a.createElement(o.a.Fragment,null,"ios"===E.a.OS&&o.a.createElement(O,{icon:"apple",onPress:x,title:"Continue with Apple"}),o.a.createElement(O,{icon:"google",onPress:x,title:"Continue with Google"}),o.a.createElement(O,{icon:"facebook",onPress:x,title:"Continue with Facebook"}),o.a.createElement(O,{icon:"email",onPress:s,title:"Continue with Email"}),o.a.createElement(O,{icon:"phone",onPress:d,title:"Continue with Phone"}),o.a.createElement(O,{icon:"close",onPress:function(){y().signInAnonymously().then((function(){console.log("User signed in anonymously")})).catch((function(e){"auth/operation-not-allowed"===e.code&&console.log("Enable anonymous in your firebase console."),console.error(e)}))},title:"Continue trial"})))})),C=Object(a.memo)((function(){var e=Object(m.a)(),t=Object(s.useNavigation)().goBack,n=i.a.create({bottom:{paddingBottom:p.a.padding.p04}}),r=Object(a.useState)(!1),d=Object(c.a)(r,2),h=d[0],b=d[1],f=Object(a.useCallback)((function(){return b((function(e){return!e}))}),[]),g=Object(a.useCallback)((function(){return t()}),[t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.m,{onLeftPress:g,title:"Checklists"},o.a.createElement(l.a,{contentContainerStyle:{paddingHorizontal:p.a.padding.p04,paddingVertical:p.a.padding.p02},style:{backgroundColor:e.surface}},o.a.createElement(u.f,null,o.a.createElement(u.p,{emphasis:"medium",style:n.bottom,title:"Weekly Goals",type:"h4"}),o.a.createElement(u.p,{title:"1. complete learn plan profit",type:"caption"}),o.a.createElement(u.p,{title:"2. ship checklist",type:"caption"}),o.a.createElement(u.p,{title:"3. complete 30 leetcode",type:"caption"})),o.a.createElement(u.f,null,o.a.createElement(u.p,{emphasis:"medium",style:n.bottom,title:"Daily Habits and Routines",type:"h4"}),o.a.createElement(u.p,{title:"After I wake up",type:"caption"}),o.a.createElement(u.p,{title:"After I shower",type:"caption"}),o.a.createElement(u.p,{title:"Before I one on one",type:"caption"}),o.a.createElement(u.p,{title:"Before I get on the train",type:"caption"}))),o.a.createElement(u.h,{color:e.background,fab:!0,name:"plus",style:{position:"absolute",bottom:0,right:0,margin:p.a.padding.p04}}),o.a.createElement(u.d,{onPress:f,title:"showLogin"})),h&&o.a.createElement(j,{onBackgroundPress:f}))})),k={headerShown:!1},w=Object(r.a)();t.default=Object(a.memo)((function(){return o.a.createElement(w.Navigator,{screenOptions:k},o.a.createElement(w.Screen,{component:C,name:"home"}))}))}}]);
//# sourceMappingURL=8.67a1ae8e.chunk.js.map