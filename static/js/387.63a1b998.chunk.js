"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{341:function(n,t,e){e.d(t,{Cp:function(){return c},Lo:function(){return u},Q_:function(){return f},cI:function(){return i},kh:function(){return a}});var r="https://api.themoviedb.org/3",o="6928b414a06a986ae0ddb84cc2231fdd",c=function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(o,"&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},i=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,o=e(439),c=e(341),u=e(689),i=e(791),a=e(168),f=e(444).ZP.ul(r||(r=(0,a.Z)(["\nlist-style: none;\npadding: 0;\nmargin: 0;\n"]))),s=e(184),h=function(){var n=(0,u.UO)().id,t=(0,i.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];if((0,i.useEffect)((function(){(0,c.kh)(n).then((function(n){return a(n.results)}))}),[n]),r)return(0,s.jsx)("div",{children:0===r.length?(0,s.jsx)("p",{children:"We don`t have any reviews for this movie."}):(0,s.jsx)(f,{children:r.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",n.author]}),(0,s.jsx)("p",{children:n.content})]},n.id)}))})})}}}]);
//# sourceMappingURL=387.63a1b998.chunk.js.map