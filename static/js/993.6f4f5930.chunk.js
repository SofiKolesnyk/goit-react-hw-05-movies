"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[993],{5345:function(A,e,r){r.d(e,{Fn:function(){return n},MY:function(){return c},bl:function(){return t},wR:function(){return a}});var n="669f3cb1f35b3303e76bb3fe15475760",t="https://api.themoviedb.org/3",a={TRENDING:"trending",SEARCH:"search"},c="https://image.tmdb.org/t/p/w500"},8170:function(A,e,r){r.d(e,{PA:function(){return d},T1:function(){return o},VQ:function(){return u},aO:function(){return f}});var n=r(5861),t=r(7757),a=r.n(t),c=r(1912),s=r(5345),i=r(7596),o=function(){var A=(0,n.Z)(a().mark((function A(e,r){var n,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=e===s.wR.TRENDING?"".concat(s.bl,"/trending/movie/day?api_key=").concat(s.Fn):"".concat(s.bl,"/search/movie?api_key=").concat(s.Fn,"&query=").concat(r),A.prev=1,A.next=4,c.Z.get(n);case 4:if(200===(t=A.sent).status){A.next=7;break}throw new Error("The service is unavailable.");case 7:return A.abrupt("return",t.data);case 10:A.prev=10,A.t0=A.catch(1),i.Am.error(A.t0.message);case 13:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(e,r){return A.apply(this,arguments)}}(),u=function(){var A=(0,n.Z)(a().mark((function A(e){var r,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s.bl,"/movie/").concat(e,"?api_key=").concat(s.Fn),A.prev=1,A.next=4,c.Z.get(r);case 4:if(200===(n=A.sent).status){A.next=7;break}throw new Error("The service is unavailable.");case 7:return A.abrupt("return",n.data);case 10:A.prev=10,A.t0=A.catch(1),i.Am.error(A.t0.message);case 13:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(e){return A.apply(this,arguments)}}(),f=function(){var A=(0,n.Z)(a().mark((function A(e){var r,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s.bl,"/movie/").concat(e,"/credits?api_key=").concat(s.Fn),A.prev=1,A.next=4,c.Z.get(r);case 4:if(200===(n=A.sent).status){A.next=7;break}throw new Error("The service is unavailable.");case 7:return A.abrupt("return",n.data);case 10:A.prev=10,A.t0=A.catch(1),i.Am.error(A.t0.message);case 13:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(e){return A.apply(this,arguments)}}(),d=function(){var A=(0,n.Z)(a().mark((function A(e){var r,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s.bl,"/movie/").concat(e,"/reviews?api_key=").concat(s.Fn),A.prev=1,A.next=4,c.Z.get(r);case 4:if(200===(n=A.sent).status){A.next=7;break}throw new Error("The service is unavailable.");case 7:return A.abrupt("return",n.data);case 10:A.prev=10,A.t0=A.catch(1),i.Am.error(A.t0.message);case 13:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(e){return A.apply(this,arguments)}}()},4993:function(A,e,r){r.r(e),r.d(e,{default:function(){return k}});var n,t,a,c,s=r(9439),i=r(2791),o=r(1087),u=r(7689),f=r(8170),d=r(5345),l=r(952),p=r(168),v=r(6444),h=(0,v.ZP)(o.rU)(n||(n=(0,p.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  outline: none;\n  font-size: 12px;\n  padding: 2px;\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: #faf0f1;\n  color: black;\n  :hover {\n    background-color: #999999;\n  }\n"]))),g=v.ZP.div(t||(t=(0,p.Z)(["\n  display: flex;\n"]))),m=v.ZP.div(a||(a=(0,p.Z)(["\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  margin-bottom: 10px;\n"]))),x=v.ZP.div(c||(c=(0,p.Z)(["\n  margin-right: 10px;\n"]))),b=r(184),k=function(){var A,e,r=(0,u.UO)().movieId,n=(0,u.TH)(),t=(0,i.useState)({}),a=(0,s.Z)(t,2),c=a[0],p=a[1];(0,i.useEffect)((function(){r&&(0,f.VQ)(r).then((function(A){var e=A.title,r=A.release_date,n=A.vote_average,t=A.overview,a=A.genres,c=A.tagline,s=A.poster_path,i=r.substring(0,4),o=Math.round(10*n)+"%",u=a.map((function(A){return A.name})).join(" "),f=s?d.MY+s:l;return p({title:e,year:i,score:o,overview:t,genre:u,tagline:c,imgURL:f})})).catch((function(A){return A.message}))}),[r]);var v=c.title,k=c.year,P=c.score,j=c.overview,w=c.genre,E=c.tagline,y=c.imgURL;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{to:n.state.from,children:"\u261a Go back"}),(0,b.jsxs)(g,{children:[(0,b.jsx)(x,{children:(0,b.jsx)("img",{src:y,alt:E,width:300})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h1",{children:[v," (",k,")"]}),(0,b.jsxs)("p",{children:["User score: ",P]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:j}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)("p",{children:w})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(o.rU,{to:"cast",state:{from:null===(A=n.state)||void 0===A?void 0:A.from},children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(o.rU,{to:"reviews",state:{from:null===(e=n.state)||void 0===e?void 0:e.from},children:"Reviews"})})]})]}),(0,b.jsx)(u.j3,{})]})}},952:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=993.6f4f5930.chunk.js.map