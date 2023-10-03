(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(21),a=c(6),s=(c(30),c(31),c(2)),r=(c(32),c(4)),i=c(0),j=(c(33),c(3)),l=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})};function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=function(e){var t=e.person,c=e.people,n=Object(s.m)().pathname,r=c.find((function(e){return e.name===t.motherName}))||null,i=c.find((function(e){return e.name===t.fatherName}))||null;return Object(j.jsxs)("tr",{"data-cy":"person",className:n==="/people/".concat(t.slug)?"has-background-warning":"",children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:r?Object(j.jsx)(a.b,{className:"has-text-danger",to:"/people/".concat(r.slug),children:r.name}):t.motherName||"-"}),Object(j.jsx)("td",{children:i?Object(j.jsx)(a.b,{to:"/people/".concat(i.slug),children:i.name}):t.fatherName||"-"})]})},d=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),d=s[0],h=s[1],O=Object(i.useState)(!1),u=Object(r.a)(O,2),x=u[0],m=u[1];return Object(i.useEffect)((function(){m(!0),o().then((function(e){return n(e)})).catch((function(){return h(!0)})).finally((function(){return m(!1)}))}),[]),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[x&&Object(j.jsx)(l,{}),!x&&d&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!x&&!d&&!c.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!x&&!d&&!!c.length&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsx)(b,{person:e,people:c},e.slug)}))})]})]})})},h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)(d,{})]})},O=function(){return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home Page"})})})},u=function(){return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})})},x=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.b,{to:"/",className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},children:"Home"}),Object(j.jsx)(a.b,{to:"/people",className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},children:"People"})]})})}),Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/",element:Object(j.jsx)(O,{})}),Object(j.jsx)(s.b,{path:"/home",element:Object(j.jsx)(s.a,{to:"/",replace:!0})}),Object(j.jsx)(s.b,{path:"/people",element:Object(j.jsx)(h,{})}),Object(j.jsx)(s.b,{path:"/people/:slug",element:Object(j.jsx)(h,{})}),Object(j.jsx)(s.b,{path:"*",element:Object(j.jsx)(u,{})})]})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(x,{})}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c6bc6d11.chunk.js.map