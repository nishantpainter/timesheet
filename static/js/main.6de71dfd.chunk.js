(this.webpackJsonptimesheet=this.webpackJsonptimesheet||[]).push([[0],{104:function(e,a,t){e.exports=t(116)},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=t(183),i=t(166),u=t(20),s=t(171),m=t(185),d=t(172),f=t(63),h=t(186),g=t(173),p=t(174),E=t(175),v=t(49),b=t(70),k=t(85),C=t(184),D=t(58);function y(e){return JSON.parse(localStorage.getItem(e))}function w(e,a){localStorage.setItem(e,JSON.stringify(a))}var O,j={getItem:y,setItem:w,getDarkMode:function(){return y("dark_mode")},setDarkMode:function(e){return w("dark_mode",e)},setLines:function(e){return w("lines",e)},getLines:function(){return y("lines")},setImperative:function(e){return w("imperative",e)},getImperative:function(){return y("imperative")}},x=[],T=r.a.createContext({}),I=function(e){var a=e.children,t=Object(D.b)().enqueueSnackbar,n=r.a.useState(x),l=Object(u.a)(n,2),o=l[0],c=l[1],i=r.a.useState(j.getImperative()),s=Object(u.a)(i,2),m=s[0],d=s[1],f=r.a.useCallback((function(e){j.setLines(e)}),[]),h=r.a.useCallback((function(){c((function(e){var a=[].concat(Object(k.a)(e),[{id:Object(C.a)(),title:"",hours:""}]);return f(a),t("Line Added",{variant:"success"}),a}))}),[f,t]),g=r.a.useCallback((function(){c([]),f([]),t("All Line Deleted")}),[f,t]),p=r.a.useCallback((function(e,a){c((function(e){var n=e.filter((function(e){return e.id!==a.id}));return f(n),t("Line Deleted"),n}))}),[f,t]),E=r.a.useCallback((function(e,a){var t=e.target,n=t.name,r=t.value;("hours"!==n||(m?/^\d*\.?\d*$/:/^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/).test(r))&&c((function(e){var t=e.map((function(e){return e.id===a.id?Object(b.a)({},a,Object(v.a)({},n,r)):e}));return f(t),t}))}),[m,f]),y=r.a.useCallback((function(e){var a=e.target.checked;d(a),j.setImperative(a)}),[]);r.a.useEffect((function(){return function(){var e=j.getLines();e&&e.length&&c(e)}()}),[]);var w=r.a.useMemo((function(){return{lines:o,imperative:m,handleChangeLine:E,handleDeleteLine:p,handleDeleteAllLines:g,handleAddNewLine:h,handleChangeImperative:y}}),[o,m,E,p,g,h,y]);return r.a.createElement(T.Provider,{value:w},a)},S=t(168),L=t(182),N=t(59),B=t(167),F=t(74),P=t.n(F),M=t(75),z=t.n(M),A=t(76),H=t.n(A),W=t(77),R=t.n(W),q=t(78),J=t.n(q),V=t(79),X=t.n(V),Y={info:P.a,brightness:z.a,download:H.a,delete:R.a,question:J.a,add:X.a},_=r.a.forwardRef((function(e,a){var t=e.icon,n=Object(N.a)(e,["icon"]),l=Y[t];return r.a.createElement(B.a,Object.assign({size:"small",ref:a},n),r.a.createElement(l,null))})),$=function(e){var a=e.line,t=e.onDelete,n=e.onChange,l=r.a.useCallback((function(e){t(e,a)}),[a,t]),o=r.a.useCallback((function(e){e.persist(),n(e,a)}),[a,n]);return r.a.createElement(S.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(S.a,{item:!0,xs:7,sm:9},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Title",name:"title",value:a.title,onChange:o,multiline:!0,fullWidth:!0})),r.a.createElement(S.a,{item:!0,xs:4,sm:2},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Hours",name:"hours",value:a.hours,onChange:o,fullWidth:!0})),r.a.createElement(S.a,{item:!0,xs:1,sm:1},r.a.createElement(_,{icon:"delete",color:"secondary",onClick:l})))},G=Object(i.a)((function(e){return{listWrapper:{padding:e.spacing(),height:"calc(100% - ".concat(e.spacing(6),"px)"),overflow:"auto"}}})),K=function(e){var a=G(),t=e.lines,n=e.onDelete,l=e.onChange;return r.a.createElement(c.a,{className:a.listWrapper},r.a.createElement(S.a,{container:!0,spacing:1},t.map((function(e){return r.a.createElement(S.a,{item:!0,xs:12,key:e.id},r.a.createElement($,{line:e,onDelete:n,onChange:l}))}))))},Q=t(187),U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{title:"1 hour = 1.00; 30 mins = 0.50; 15 mins = 0.25; Or simply follow any other convention you needed."},r.a.createElement(_,{icon:"question"})))},Z=Object(i.a)((function(e){return{button:{marginRight:e.spacing()},imperativeFormControl:{marginRight:e.spacing(.5)}}})),ee=function(e){var a=Z(),t=r.a.useContext(T),n=t.lines,l=void 0===n?[]:n,o=t.imperative,i=t.handleAddNewLine,v=t.handleChangeLine,b=t.handleDeleteLine,k=t.handleDeleteAllLines,C=t.handleChangeImperative,D=r.a.useState(!1),y=Object(u.a)(D,2),w=y[0],O=y[1],j=r.a.useCallback((function(){O(!0)}),[]),x=r.a.useCallback((function(){O(!1)}),[]),I=l.reduce((function(e,a){return e+(Number(a.hours)||0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{display:"flex",alignItems:"center",height:40,marginBottom:1},r.a.createElement(s.a,{variant:"outlined",color:"primary",size:"small",className:a.button,onClick:i},"Add Line"),r.a.createElement(s.a,{variant:"outlined",color:"primary",size:"small",className:a.button,onClick:j},"Delete All Lines"),r.a.createElement(f.a,null,"Total Hours : ",r.a.createElement("b",null,I.toFixed(2)))),r.a.createElement(c.a,{display:"flex",alignItems:"center",height:40,marginBottom:1},r.a.createElement(d.a,{control:r.a.createElement(m.a,{checked:o,onChange:C,color:"primary"}),classes:{root:a.imperativeFormControl},label:"Imperative Time"}),"\xa0",r.a.createElement(U,null)),r.a.createElement(K,{lines:l,onDelete:b,onChange:v}),r.a.createElement(h.a,{open:w,onClose:x},r.a.createElement(g.a,null,"Delete"),r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Do you want to delete all timesheet lines ?")),r.a.createElement(E.a,null,r.a.createElement(s.a,{size:"small",onClick:x},"Cancel"),r.a.createElement(s.a,{color:"primary",onClick:function(){k(),x()}},"Delete"))))},ae=Object(i.a)((function(e){return{toolbar:{minHeight:e.spacing(6)},main:{padding:e.spacing(2),maxWidth:e.spacing(70),marginRight:"auto",marginLeft:"auto",height:"calc(100% - ".concat(e.spacing(12),"px)")}}})),te=function(){var e=ae();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:e.toolbar}),r.a.createElement(c.a,{component:"main",className:e.main},r.a.createElement(ee,null)))},ne=t(81),re=t.n(ne),le=t(180),oe=t(181),ce=t(86),ie=t(188);!function(e){e.TXT="txt",e.CSV="csv",e.PDF="pdf"}(O||(O={}));var ue=function(e){var a=e.onDownload,t=Object(N.a)(e,["onDownload"]),n=r.a.useState(null),l=Object(u.a)(n,2),o=l[0],c=l[1],i=function(){c(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,Object.assign({icon:"download"},t,{onClick:function(e){c(e.currentTarget)}})),r.a.createElement(ce.a,{anchorEl:o,open:Boolean(o),onClose:i},r.a.createElement(ie.a,{disabled:!0,onClick:function(e){e.preventDefault(),i(),a(O.TXT)}},"TXT File"),r.a.createElement(ie.a,{disabled:!0,onClick:function(e){e.preventDefault(),i(),a(O.CSV)}},"CSV File"),r.a.createElement(ie.a,{disabled:!0,onClick:function(e){e.preventDefault(),i(),a(O.PDF)}},"PDF File")))},se=t(177),me=t(176),de=t(169),fe=Object(i.a)((function(e){return{popoverPaper:{width:400,padding:e.spacing(2)},link:{color:e.palette.primary.main},divider:{marginBottom:e.spacing()},check:{color:e.palette.text.primary}}})),he=function(){var e=fe();return r.a.createElement("span",{role:"img","aria-label":"check",className:e.check},"\u2705")},ge=function(e){var a=e.open,t=e.anchorEl,n=e.onClose,l=fe();return r.a.createElement(de.a,{open:a,anchorEl:t,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},PaperProps:{className:l.popoverPaper}},r.a.createElement(f.a,{gutterBottom:!0},"Timesheet is a small application for managing daily task work time and to evaluate total hours of work."),r.a.createElement(me.a,{className:l.divider,light:!0}),r.a.createElement(f.a,{color:"secondary",gutterBottom:!0},r.a.createElement(he,null),"\xa0Hassle-free access to your work sheet lines"),r.a.createElement(f.a,{color:"secondary",gutterBottom:!0},r.a.createElement(he,null),"\xa0Instant overview of total hours done"),r.a.createElement(f.a,{color:"secondary",gutterBottom:!0},r.a.createElement(he,null),"\xa0Download timesheet in txt, pdf and csv format"),r.a.createElement(me.a,{className:l.divider,light:!0}),r.a.createElement(f.a,{gutterBottom:!0},"The application do not consume any consumer data and use local storage for persisting the information. Timesheet is\xa0",r.a.createElement(se.a,{color:"primary",href:"https://github.com/nishantpainter/timesheet",target:"_blank"},"Open-source"),". Pull request are welcome!"),r.a.createElement(me.a,{className:l.divider,light:!0}),r.a.createElement(f.a,null,"Developed By :\xa0",r.a.createElement(se.a,{color:"primary",href:"https://nishantpainter.github.io/",target:"_blank"},"Nishant Painter")))},pe=t(179),Ee=t(84),ve=t(178),be=t(82),ke=t.n(be),Ce=t(83),De=t.n(Ce),ye=r.a.createContext({}),we=function(e){var a=e.children,t=r.a.useState(j.getDarkMode()),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useCallback((function(){o((function(e){return j.setDarkMode(!e),!e}))}),[]),i=Object(Ee.a)({palette:{type:l?"dark":"light",primary:ke.a,secondary:De.a}}),s=r.a.useMemo((function(){return{handleToggleDarkTheme:c}}),[c]);return r.a.createElement(ye.Provider,{value:s},r.a.createElement(ve.a,{theme:i},r.a.createElement(pe.a,null),a))},Oe=Object(i.a)((function(e){return{iconButton:{marginRight:e.spacing(1)}}})),je=function(){return re()(new Date).format("DD-MMM-YYYY HH:mm:ss")},xe=function(e){var a=Oe(),t=r.a.useContext(ye).handleToggleDarkTheme,n=r.a.useState(null),l=Object(u.a)(n,2),o=l[0],i=l[1],s=r.a.useState(je()),m=Object(u.a)(s,2),d=m[0],h=m[1],g=r.a.useCallback((function(e){i(e.currentTarget)}),[]),p=r.a.useCallback((function(){i(null)}),[]),E=r.a.useCallback((function(){h(je())}),[]),v=r.a.useCallback((function(e){}),[]),b=r.a.useCallback((function(e){}),[]),k=r.a.useCallback((function(e){}),[]),C=r.a.useCallback((function(e){switch(e){case O.TXT:v([]);break;case O.CSV:b([]);break;case O.PDF:k([]);break;default:return}}),[v,b,k]);return r.a.useEffect((function(){var e=setInterval(E,1e3);return function(){return clearInterval(e)}}),[E]),r.a.createElement(le.a,{color:"default"},r.a.createElement(oe.a,{variant:"dense"},r.a.createElement(c.a,{display:"flex",flexGrow:1,alignItems:"center"},r.a.createElement(f.a,{color:"primary"},r.a.createElement("b",null,"TIMESHEET")),"\xa0\xa0",r.a.createElement(f.a,{variant:"body2"},r.a.createElement("b",null,d))),r.a.createElement(c.a,{display:"flex",alignItems:"center"},r.a.createElement(_,{icon:"brightness",color:"primary",className:a.iconButton,onClick:t}),r.a.createElement(ue,{color:"primary",className:a.iconButton,onDownload:C}),r.a.createElement(_,{icon:"info",color:"secondary",onClick:g})),r.a.createElement(ge,{open:Boolean(o),anchorEl:o,onClose:p})))},Te=function(e){var a=e.children,t=r.a.createRef(),n=function(e){return function(){t.current.closeSnackbar(e)}};return r.a.createElement(D.a,{autoHideDuration:2e3,maxSnack:3,ref:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},action:function(e){return r.a.createElement(s.a,{color:"inherit",size:"small",onClick:n(e)},"Dismiss")}},a)},Ie=function(){return r.a.createElement(we,null,r.a.createElement(Te,null,r.a.createElement(I,null,r.a.createElement(xe,null),r.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(115);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.6de71dfd.chunk.js.map