(this.webpackJsonptimesheet=this.webpackJsonptimesheet||[]).push([[0],{107:function(e,t,a){e.exports=a(118)},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(188),i=a(171),u=a(19),s=a(172),m=a(66),d=a(191),f=a(178),h=a(179),g=a(180),p=a(50),E=a(74),v=a(65),b=a(189),k=a(60);function C(e){return JSON.parse(localStorage.getItem(e))}function D(e,t){localStorage.setItem(e,JSON.stringify(t))}var y,w={getItem:C,setItem:D,getDarkMode:function(){return C("dark_mode")},setDarkMode:function(e){return D("dark_mode",e)},setLines:function(e){return D("lines",e)},getLines:function(){return C("lines")},setImperative:function(e){return D("imperative",e)},getImperative:function(){return C("imperative")}},O=[],T=r.a.createContext({}),j=function(){return r.a.useContext(T)},x=function(e){var t=e.children,a=Object(k.b)(),n=a.enqueueSnackbar,l=a.closeSnackbar,o=r.a.useState(O),c=Object(u.a)(o,2),i=c[0],m=c[1],d=r.a.useState(w.getImperative()),f=Object(u.a)(d,2),h=f[0],g=f[1],C=r.a.useCallback((function(e){w.setLines(e)}),[]),D=r.a.useCallback((function(){m((function(e){var t=[].concat(Object(v.a)(e),[{id:Object(b.a)(),title:"",hours:""}]);return C(t),n("Line Added",{variant:"success"}),t}))}),[C,n]),y=r.a.useCallback((function(){m([]),C([]),n("All Line Deleted")}),[C,n]),j=r.a.useCallback((function(e,t){var a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{color:"secondary",size:"small",onClick:function(){m((function(e){var a=[].concat(Object(v.a)(e),[t]);return C(a),a})),l(e)}},"Undo"),r.a.createElement(s.a,{color:"inherit",size:"small",onClick:function(){l(e)}},"Dismiss"))};m((function(e){var r=e.filter((function(e){return e.id!==t.id}));return C(r),n("Line Deleted",{action:a}),r}))}),[C,n,l]),x=r.a.useCallback((function(e,t){var a=e.target,n=a.name,r=a.value;("hours"!==n||(h?/^\d*\.?\d*$/:/^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/).test(r))&&m((function(e){var a=e.map((function(e){return e.id===t.id?Object(E.a)({},t,Object(p.a)({},n,r)):e}));return C(a),a}))}),[h,C]),S=r.a.useCallback((function(e){var t=e.target.checked;g(t),w.setImperative(t)}),[]);r.a.useEffect((function(){return function(){var e=w.getLines();e&&e.length&&m(e)}()}),[]);var B=r.a.useMemo((function(){return{lines:i,imperative:h,handleChangeLine:x,handleDeleteLine:j,handleDeleteAllLines:y,handleAddNewLine:D,handleChangeImperative:S}}),[i,h,x,j,y,D,S]);return r.a.createElement(T.Provider,{value:B},t)},S=a(57),B=a.n(S),N=Object(i.a)((function(e){return{totalHours:{color:e.palette.primary.main}}})),F=function(e){var t=e.totalHours,a=N(),n=r.a.useState(B()(new Date).format("DD-MMM-YYYY")),l=Object(u.a)(n,1)[0];return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,padding:1.5,marginBottom:.5,width:"98%",justifyContent:"space-between"},r.a.createElement(m.a,null,r.a.createElement("b",null,l)),"\xa0\xa0",r.a.createElement(m.a,null,r.a.createElement("b",null,"Total Hours\xa0:\xa0",r.a.createElement("span",{className:a.totalHours},t.toFixed(2)))))},I=a(174),L=a(187),P=a(61),M=a(173),z=a(78),H=a.n(z),A=a(79),R=a.n(A),V=a(80),X=a.n(V),Y=a(81),W=a.n(Y),q=a(82),J=a.n(q),_=a(83),U=a.n(_),$=a(84),G=a.n($),K={info:H.a,brightness:R.a,download:X.a,delete:W.a,question:J.a,add:U.a,timesheet:G.a},Q=r.a.forwardRef((function(e,t){var a=e.icon,n=Object(P.a)(e,["icon"]),l=K[a];return r.a.createElement(M.a,Object.assign({size:"small",ref:t},n),r.a.createElement(l,null))})),Z=function(e){var t=e.line,a=e.onDelete,n=e.onChange,l=r.a.useCallback((function(e){a(e,t)}),[t,a]),o=r.a.useCallback((function(e){e.persist(),n(e,t)}),[t,n]);return r.a.createElement(I.a,{container:!0,spacing:1,alignItems:"flex-start"},r.a.createElement(I.a,{item:!0,xs:8,sm:9},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Title",name:"title",value:t.title,onChange:o,multiline:!0,fullWidth:!0})),r.a.createElement(I.a,{item:!0,xs:3,sm:2},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Hours",name:"hours",value:t.hours,onChange:o,fullWidth:!0})),r.a.createElement(I.a,{item:!0,xs:1,sm:1},r.a.createElement(Q,{icon:"delete",color:"secondary",onClick:l})))},ee=Object(i.a)((function(e){return{listWrapper:{padding:e.spacing(1.5),height:"calc(100% - ".concat(e.spacing(6),"px)"),overflow:"auto"}}})),te=function(e){var t=ee(),a=e.lines,n=e.onDelete,l=e.onChange;return r.a.createElement(c.a,{className:t.listWrapper},r.a.createElement(I.a,{container:!0,spacing:1},a.map((function(e){return r.a.createElement(I.a,{item:!0,xs:12,key:e.id},r.a.createElement(Z,{line:e,onDelete:n,onChange:l}))}))))},ae=Object(i.a)((function(e){return{button:{marginRight:e.spacing()}}})),ne=function(e){var t=e.onAdd,a=e.onDelete,n=ae();return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,marginBottom:1,padding:1.5},r.a.createElement(s.a,{variant:"contained",color:"primary",size:"small",className:n.button,onClick:t},"Add"),r.a.createElement(s.a,{variant:"outlined",color:"primary",size:"small",className:n.button,onClick:a},"Delete"))},re=a(190),le=a(177),oe=a(192),ce=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{title:"1 hour = 1.00; 30 mins = 0.50; 15 mins = 0.25; Or simply follow any other convention you needed."},r.a.createElement(Q,{icon:"question"})))},ie=Object(i.a)((function(e){return{imperativeFormControl:{marginRight:e.spacing(.5)}}})),ue=function(e){var t=e.checked,a=e.onChange,n=ie();return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,marginBottom:1,padding:1.5},r.a.createElement(le.a,{control:r.a.createElement(re.a,{checked:t,onChange:a,color:"primary"}),classes:{root:n.imperativeFormControl},label:"Imperative Time"}),"\xa0",r.a.createElement(ce,null))},se=function(e){var t=j(),a=t.lines,n=void 0===a?[]:a,l=t.imperative,o=t.handleAddNewLine,c=t.handleChangeLine,i=t.handleDeleteLine,p=t.handleDeleteAllLines,E=t.handleChangeImperative,v=r.a.useState(!1),b=Object(u.a)(v,2),k=b[0],C=b[1],D=r.a.useCallback((function(){n&&n.length&&C(!0)}),[n]),y=r.a.useCallback((function(){C(!1)}),[]),w=r.a.useCallback((function(){p(),y()}),[p,y]),O=n.reduce((function(e,t){return e+(Number(t.hours)||0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{onAdd:o,onDelete:D}),r.a.createElement(ue,{checked:l,onChange:E}),r.a.createElement(F,{totalHours:O}),r.a.createElement(te,{lines:n,onDelete:i,onChange:c}),r.a.createElement(d.a,{open:k,onClose:y},r.a.createElement(f.a,null,"Delete"),r.a.createElement(h.a,null,r.a.createElement(m.a,null,"Do you want to delete all timesheet lines ?")),r.a.createElement(g.a,null,r.a.createElement(s.a,{size:"small",onClick:y},"Cancel"),r.a.createElement(s.a,{color:"primary",onClick:w},"Delete"))))},me=Object(i.a)((function(e){return{toolbar:{minHeight:e.spacing(6)},main:{padding:e.spacing(2),maxWidth:e.spacing(70),marginRight:"auto",marginLeft:"auto",height:"calc(100% - ".concat(e.spacing(14.5),"px)")}}})),de=function(){var e=me();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:e.toolbar}),r.a.createElement(c.a,{component:"main",className:e.main},r.a.createElement(se,null)))},fe=a(185),he=a(186),ge=a(86),pe=a(90),Ee=a(193);!function(e){e.TXT="txt",e.CSV="csv",e.PDF="pdf"}(y||(y={}));var ve=function(e){var t=e.onDownload,a=Object(P.a)(e,["onDownload"]),n=r.a.useState(null),l=Object(u.a)(n,2),o=l[0],c=l[1],i=function(){c(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,Object.assign({icon:"download"},a,{onClick:function(e){c(e.currentTarget)}})),r.a.createElement(pe.a,{anchorEl:o,open:Boolean(o),onClose:i},r.a.createElement(Ee.a,{onClick:function(e){e.preventDefault(),i(),t(y.TXT)}},"TXT File"),r.a.createElement(Ee.a,{onClick:function(e){e.preventDefault(),i(),t(y.CSV)}},"CSV File"),r.a.createElement(Ee.a,{onClick:function(e){e.preventDefault(),i(),t(y.PDF)}},"PDF File")))},be=a(182),ke=a(181),Ce=a(175),De=Object(i.a)((function(e){return{popoverPaper:{width:500,padding:e.spacing(2)},link:{color:e.palette.primary.main},divider:{marginBottom:e.spacing()},check:{color:e.palette.text.primary}}})),ye=function(){var e=De();return r.a.createElement("span",{role:"img","aria-label":"check",className:e.check},"\u2705")},we=function(e){var t=e.open,a=e.anchorEl,n=e.onClose,l=De();return r.a.createElement(Ce.a,{open:t,anchorEl:a,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},PaperProps:{className:l.popoverPaper}},r.a.createElement(m.a,{gutterBottom:!0},"Timesheet is a small application for managing daily task work time and to evaluate total hours of work."),r.a.createElement(ke.a,{className:l.divider,light:!0}),r.a.createElement(m.a,{color:"secondary",gutterBottom:!0},r.a.createElement(ye,null),"\xa0Hassle-free access to your timesheet lines"),r.a.createElement(m.a,{color:"secondary",gutterBottom:!0},r.a.createElement(ye,null),"\xa0Instant overview of total time hours"),r.a.createElement(m.a,{color:"secondary",gutterBottom:!0},r.a.createElement(ye,null),"\xa0Download timesheet in TXT, CSV and PDF format"),r.a.createElement(m.a,{color:"secondary",gutterBottom:!0},r.a.createElement(ye,null),"\xa0Dark mode"),r.a.createElement(ke.a,{className:l.divider,light:!0}),r.a.createElement(m.a,{gutterBottom:!0},"The application do not store any consumer data and use local storage for persisting the information. Timesheet is\xa0",r.a.createElement(be.a,{color:"primary",href:"https://github.com/nishantpainter/timesheet",target:"_blank"},"Open-source"),". Pull request are welcome!"),r.a.createElement(ke.a,{className:l.divider,light:!0}),r.a.createElement(m.a,null,"Developed By :\xa0",r.a.createElement(be.a,{color:"primary",href:"https://nishantpainter.github.io/",target:"_blank"},"Nishant Painter")))},Oe=a(184),Te=a(89),je=a(183),xe=a(87),Se=a.n(xe),Be=a(88),Ne=a.n(Be),Fe=r.a.createContext({}),Ie=function(e){var t=e.children,a=r.a.useState(w.getDarkMode()),n=Object(u.a)(a,2),l=n[0],o=n[1],c=r.a.useCallback((function(){o((function(e){return w.setDarkMode(!e),!e}))}),[]),i=Object(Te.a)({palette:{type:l?"dark":"light",primary:Se.a,secondary:Ne.a}}),s=r.a.useMemo((function(){return{handleToggleDarkTheme:c}}),[c]);return r.a.createElement(Fe.Provider,{value:s},r.a.createElement(je.a,{theme:i},r.a.createElement(Oe.a,null),t))},Le=Object(i.a)((function(e){return{iconButton:{marginRight:e.spacing(1)}}})),Pe=function(e){var t=Le(),a=r.a.useContext(Fe).handleToggleDarkTheme,n=j().lines,l=void 0===n?[]:n,o=r.a.useState(null),i=Object(u.a)(o,2),s=i[0],d=i[1],f=r.a.useCallback((function(e){d(e.currentTarget)}),[]),h=r.a.useCallback((function(){d(null)}),[]),g=r.a.useCallback((function(e,t){var a=window.URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.setAttribute("download",t),n.click()}),[]),p=r.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DD MMM YYYY";return B()().format(e)}),[]),E=r.a.useCallback((function(e){return p()+".".concat(e.toLowerCase())}),[p]),v=r.a.useCallback((function(){return l.reduce((function(e,t){return e+(Number(t.hours)||0)}),0)}),[l]),b=r.a.useCallback((function(e){switch(e){case y.PDF:case y.TXT:return l.reduce((function(e,t){return(t.title||t.hours)&&(e+="".concat(t.title||""," - ").concat(t.hours||"0","\n")),e}),"Timesheet : ".concat(p(),"; Total Hours : ").concat(v(),"\n============================================\n"));case y.CSV:return l.reduce((function(e,t){return(t.title||t.hours)&&(e+='"'.concat(t.title||"",'","').concat(t.hours||"0",'"\n')),e}),'"Title","Hours"\n');default:return""}}),[l,p,v]),k=r.a.useCallback((function(){var e=b(y.TXT),t=new Blob([e],{type:"text/plain"});g(t,E(y.TXT))}),[b,g,E]),C=r.a.useCallback((function(){var e=b(y.CSV),t=new Blob([e],{type:"text/plain"});g(t,E(y.CSV))}),[b,g,E]),D=r.a.useCallback((function(){var e=b(y.PDF),t=new ge.a;t.text(e,10,10),t.save(E(y.PDF))}),[b,E]),w=r.a.useCallback((function(e){switch(e){case y.TXT:k();break;case y.CSV:C();break;case y.PDF:D();break;default:return}}),[k,C,D]);return r.a.createElement(fe.a,{color:"default"},r.a.createElement(he.a,{variant:"dense"},r.a.createElement(c.a,{display:"flex",flexGrow:1,alignItems:"center"},r.a.createElement(Q,{icon:"timesheet",color:"primary"}),r.a.createElement(m.a,{color:"primary"},r.a.createElement("b",null,"Timsheet"))),r.a.createElement(c.a,{display:"flex",alignItems:"center"},r.a.createElement(Q,{icon:"brightness",color:"primary",className:t.iconButton,onClick:a}),r.a.createElement(ve,{color:"primary",className:t.iconButton,onDownload:w}),r.a.createElement(Q,{icon:"info",color:"secondary",onClick:f})),r.a.createElement(we,{open:Boolean(s),anchorEl:s,onClose:h})))},Me=function(e){var t=e.children,a=r.a.createRef(),n=function(e){return function(){a.current.closeSnackbar(e)}};return r.a.createElement(k.a,{autoHideDuration:2e3,maxSnack:3,ref:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},action:function(e){return r.a.createElement(s.a,{color:"inherit",size:"small",onClick:n(e)},"Dismiss")}},t)},ze=function(){return r.a.createElement(Ie,null,r.a.createElement(Me,null,r.a.createElement(x,null,r.a.createElement(Pe,null),r.a.createElement(de,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(117);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,3]]]);
//# sourceMappingURL=main.0bb1be29.chunk.js.map