(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n(0),a=n.n(c),s=n(9),r=n.n(s),o=(n(65),n(45)),l=n(16),j=(n(66),n(105));function d(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(l.a)(r,2),d=o[0],u=o[1],b=Object(c.useState)([]),h=Object(l.a)(b,2),m=h[0],O=h[1];return Object(c.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=64673092&type=movie&s="+e.data).then((function(e){return e.json()})).then((function(e){u(!0),O([e])}),(function(e){u(!0),s(e)}))}),[e.data]),a?Object(i.jsxs)("div",{children:["Error: ",a.message]}):d?e.data.length>=3&&"True"===m[0].Response?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"lists",children:Object(i.jsx)("ul",{children:m[0].Search.map((function(t){return Object(i.jsxs)("li",{style:{margin:"1.5em"},children:[t.Title," (",t.Year,")",Object(i.jsx)(j.a,{size:"small",disableElevation:!0,variant:"contained",color:"secondary",style:{float:"right",marginRight:"1%"},id:t.imdbID,disabled:e.buttonCheck(t.imdbID),onClick:function(){e.addNomination(t,t.imdbID)},children:"Nominate \ud83e\udd47"})]},t.imdbID)}))})})}):e.data.length<3?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:"Your Search Results will appear here!"})}):Object(i.jsx)("div",{children:"No Titles found matching that name \ud83d\ude22"}):Object(i.jsx)("div",{children:"Loading..."})}var u=n(108);n(70);function b(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("ol",{children:e.nominations.map((function(t){return Object(i.jsxs)("li",{className:"swing-in-top-fwd",style:{margin:"1.5em"},children:[Object(i.jsxs)(u.a,{item:!0,children:[t.Title," (",t.Year,")"]}),Object(i.jsx)(u.a,{item:!0,children:Object(i.jsx)(j.a,{onClick:function(){return function(t){var n=e.nominations.indexOf(t);e.buttons.splice(n,1),e.func(n)}(t)},size:"small",disableElevation:!0,variant:"outlined",style:{float:"right",marginRight:"1%"},color:"secondary",children:"Remove \u274c"})})]},t.imdbID)}))})})}n(71);function h(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(u.a,{container:!0,spacing:1,alignItems:"center",justify:"center",children:e.list.map((function(e){return Object(i.jsx)(u.a,{item:!0,xs:2,children:Object(i.jsx)("img",{className:"fade-in-bottom",src:e.Poster,alt:"Poster for the movie"+e.Title,style:{width:"100%",height:"auto"}},e.imdbID)},e.imdbID)}))})})}var m=n(111),O=n(110),x=n(109),f=n(116),g=n(114),p=n(113);function v(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),j=Object(l.a)(r,2),v=j[0],y=j[1],S=Object(c.useState)([]),I=Object(l.a)(S,2),w=I[0],C=I[1],k=a.a.useState(!1),D=Object(l.a)(k,2),R=D[0],E=D[1];function N(e){return Object(i.jsx)(g.a,Object(o.a)({elevation:6,variant:"filled"},e))}var F=function(){E(!0)},T=function(e){"clickaway"!==e&&E(!1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(O.a,{maxWidth:"xl",children:Object(i.jsxs)(p.a,{margin:3,padding:3,borderColor:"rgb(255,255,255)",border:1,borderRadius:5,children:[Object(i.jsx)("h1",{id:"heading",children:"The Shoppies: Movie Awards for Entrepreneurs"}),Object(i.jsx)("br",{}),Object(i.jsxs)(u.a,{container:!0,spacing:3,children:[Object(i.jsx)(h,{list:v}),Object(i.jsx)(u.a,{item:!0,xs:12,id:"SearchBar",children:Object(i.jsx)(x.a,{elevation:7,children:Object(i.jsx)(m.a,{id:"SearchBarInput",color:"primary",variant:"outlined",type:"search",fullWidth:!0,value:n,onChange:function(e){s(e.target.value)},label:"\ud83d\udd0dSearch",placeholder:"i.e. Interstellar, La La Land, etc...",size:"small"})})}),Object(i.jsxs)(u.a,{item:!0,xs:12,sm:6,id:"SearchResults",children:[Object(i.jsx)("h1",{children:"Search Results"}),Object(i.jsx)(d,{data:n,buttonCheck:function(e){if(w.length>0)return!!w.includes(e)},addNomination:function(e,t){if(v.length<5){y(v.concat(e));var n=document.getElementById("".concat(t));C(w.concat(t)),n.setAttribute("disabled","true"),4===v.length&&F()}else F()}})]}),Object(i.jsxs)(u.a,{item:!0,xs:12,sm:6,children:[Object(i.jsx)("h1",{children:"Nominations"}),Object(i.jsx)(b,{nominations:v,buttons:w,func:function(e){var t=[];v.splice(e,1),v.map((function(e){return t.push(e)})),y(t)}})]}),Object(i.jsx)(f.a,{open:R,autoHideDuration:5e3,onClose:T,children:Object(i.jsx)(N,{onClose:T,severity:"success",children:"Congratulations! You've nominated 5 movies!"})})]})]})})})}r.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.4ff1f598.chunk.js.map