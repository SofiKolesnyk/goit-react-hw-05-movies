"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{2260:function(t,e,r){r.d(e,{y:function(){return u}});var n=r(7689),a=r(1087),c=r(184),u=function(t){var e=t.movies,r=t.path,u=(0,n.TH)(),i=r?"".concat(r,"/"):"";return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(i).concat(e),state:{from:u},children:r})},e)}))})}},5345:function(t,e,r){r.d(e,{Fn:function(){return n},MY:function(){return u},bl:function(){return a},wR:function(){return c}});var n="669f3cb1f35b3303e76bb3fe15475760",a="https://api.themoviedb.org/3",c={TRENDING:"trending",SEARCH:"search"},u="https://image.tmdb.org/t/p/w500"},8170:function(t,e,r){r.d(e,{PA:function(){return v},T1:function(){return s},VQ:function(){return f},aO:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1912),i=r(5345),o=r(7596),s=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e===i.wR.TRENDING?"".concat(i.bl,"/trending/movie/day?api_key=").concat(i.Fn):"".concat(i.bl,"/search/movie?api_key=").concat(i.Fn,"&query=").concat(r),t.prev=1,t.next=4,u.Z.get(n);case 4:if(200===(a=t.sent).status){t.next=7;break}throw new Error("The service is unavailable.");case 7:return t.abrupt("return",a.data);case 10:t.prev=10,t.t0=t.catch(1),o.Am.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i.bl,"/movie/").concat(e,"?api_key=").concat(i.Fn),t.prev=1,t.next=4,u.Z.get(r);case 4:if(200===(n=t.sent).status){t.next=7;break}throw new Error("The service is unavailable.");case 7:return t.abrupt("return",n.data);case 10:t.prev=10,t.t0=t.catch(1),o.Am.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i.bl,"/movie/").concat(e,"/credits?api_key=").concat(i.Fn),t.prev=1,t.next=4,u.Z.get(r);case 4:if(200===(n=t.sent).status){t.next=7;break}throw new Error("The service is unavailable.");case 7:return t.abrupt("return",n.data);case 10:t.prev=10,t.t0=t.catch(1),o.Am.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i.bl,"/movie/").concat(e,"/reviews?api_key=").concat(i.Fn),t.prev=1,t.next=4,u.Z.get(r);case 4:if(200===(n=t.sent).status){t.next=7;break}throw new Error("The service is unavailable.");case 7:return t.abrupt("return",n.data);case 10:t.prev=10,t.t0=t.catch(1),o.Am.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},9544:function(t,e,r){r.r(e);var n=r(3433),a=r(9439),c=r(2791),u=r(8170),i=r(2260),o=r(5345),s=r(184);e.default=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),r=e[0],f=e[1];return(0,c.useEffect)((function(){(0,u.T1)(o.wR.TRENDING).then((function(t){var e=t.results;return f((0,n.Z)(e.map((function(t){return{id:t.id,title:t.title}}))))}))}),[]),(0,s.jsx)(i.y,{movies:r,path:"movies"})}}}]);
//# sourceMappingURL=544.3f00ddfa.chunk.js.map