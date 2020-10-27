(this.webpackJsonptimesheet=this.webpackJsonptimesheet||[]).push([[0],{108:function(e,a,t){e.exports=t(119)},118:function(e,a,t){},119:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=t(189),i=t(172),u=t(19),s=t(173),m=t(66),d=t(192),f=t(179),h=t(180),g=t(181),p=t(50),E=t(74),b=t(65),v=t(190),k=t(60);function C(e){return JSON.parse(localStorage.getItem(e))}function D(e,a){localStorage.setItem(e,JSON.stringify(a))}var y,w={getItem:C,setItem:D,getDarkMode:function(){return C("dark_mode")},setDarkMode:function(e){return D("dark_mode",e)},setLines:function(e){return D("lines",e)},getLines:function(){return C("lines")},setImperative:function(e){return D("imperative",e)},getImperative:function(){return C("imperative")}},O=[],T=r.a.createContext({}),j=function(){return r.a.useContext(T)},x=function(e){var a=e.children,t=Object(k.b)(),n=t.enqueueSnackbar,l=t.closeSnackbar,o=r.a.useState(O),c=Object(u.a)(o,2),i=c[0],m=c[1],d=r.a.useState(w.getImperative()),f=Object(u.a)(d,2),h=f[0],g=f[1],C=r.a.useCallback((function(e){w.setLines(e)}),[]),D=r.a.useCallback((function(){m((function(e){var a=[].concat(Object(b.a)(e),[{id:Object(v.a)(),title:"",hours:""}]);return C(a),n("Line Added",{variant:"success"}),a}))}),[C,n]),y=r.a.useCallback((function(){m([]),C([]),n("All Line Deleted")}),[C,n]),j=r.a.useCallback((function(e,a){var t=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{color:"secondary",size:"small",onClick:function(){m((function(e){var t=[].concat(Object(b.a)(e),[a]);return C(t),t})),l(e)}},"Undo"),r.a.createElement(s.a,{color:"inherit",size:"small",onClick:function(){l(e)}},"Dismiss"))};m((function(e){var r=e.filter((function(e){return e.id!==a.id}));return C(r),n("Line Deleted",{action:t}),r}))}),[C,n,l]),x=r.a.useCallback((function(e,a){var t=e.target,n=t.name,r=t.value;("hours"!==n||(h?/^\d*\.?\d*$/:/(^\d*$)|(^\d*\.?$)|(^\d*\.[0-5]{1}$)|(^\d*\.[0-5]{1}[0-9]{1}$)/).test(r))&&m((function(e){var t=e.map((function(e){return e.id===a.id?Object(E.a)({},a,Object(p.a)({},n,r)):e}));return C(t),t}))}),[h,C]),S=r.a.useCallback((function(e){var a=e.target.checked;g(a),w.setImperative(a)}),[]);r.a.useEffect((function(){return function(){var e=w.getLines();e&&e.length&&m(e)}()}),[]);var N=r.a.useMemo((function(){return{lines:i,imperative:h,handleChangeLine:x,handleDeleteLine:j,handleDeleteAllLines:y,handleAddNewLine:D,handleChangeImperative:S}}),[i,h,x,j,y,D,S]);return r.a.createElement(T.Provider,{value:N},a)},S=t(57),N=t.n(S),B=Object(i.a)((function(e){return{totalHours:{color:e.palette.primary.main}}})),I=function(e){var a=e.totalHours,t=B(),n=r.a.useState(N()(new Date).format("DD-MMM-YYYY")),l=Object(u.a)(n,1)[0];return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,padding:1.5,marginBottom:.5,width:"98%",justifyContent:"space-between"},r.a.createElement(m.a,null,r.a.createElement("b",null,l)),"\xa0\xa0",r.a.createElement(m.a,null,r.a.createElement("b",null,"Total Hours\xa0:\xa0",r.a.createElement("span",{className:t.totalHours},a.toFixed(2)))))},F=t(175),L=t(188),P=t(61),M=t(174),z=t(78),A=t.n(z),H=t(79),R=t.n(H),V=t(80),W=t.n(V),X=t(81),Y=t.n(X),$=t(82),q=t.n($),J=t(83),_=t.n(J),U=t(84),G=t.n(U),K=t(85),Q=t.n(K),Z={info:A.a,brightness:R.a,download:W.a,delete:Y.a,question:q.a,add:_.a,timesheet:G.a,check:Q.a},ee=r.a.forwardRef((function(e,a){var t=e.icon,n=Object(P.a)(e,["icon"]),l=Z[t];return r.a.createElement(M.a,Object.assign({size:"small",ref:a},n),r.a.createElement(l,null))})),ae=Object(i.a)((function(e){return{deleteButton:{marginTop:e.spacing(.5)}}})),te=function(e){var a=e.line,t=e.onDelete,n=e.onChange,l=ae(),o=r.a.useCallback((function(e){t(e,a)}),[a,t]),c=r.a.useCallback((function(e){e.persist(),n(e,a)}),[a,n]);return r.a.createElement(F.a,{container:!0,spacing:1,alignItems:"flex-start"},r.a.createElement(F.a,{item:!0,xs:8,sm:9},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Title",name:"title",value:a.title,onChange:c,multiline:!0,fullWidth:!0})),r.a.createElement(F.a,{item:!0,xs:3,sm:2},r.a.createElement(L.a,{variant:"outlined",size:"small",placeholder:"Hours",name:"hours",value:a.hours,onChange:c,fullWidth:!0})),r.a.createElement(F.a,{item:!0,xs:1,sm:1},r.a.createElement(ee,{icon:"delete",color:"secondary",className:l.deleteButton,onClick:o})))},ne=Object(i.a)((function(e){return{listWrapper:{padding:e.spacing(1.5),height:"calc(100% - ".concat(e.spacing(6),"px)"),overflow:"auto"}}})),re=function(e){var a=ne(),t=e.lines,n=e.onDelete,l=e.onChange;return r.a.createElement(c.a,{className:a.listWrapper},r.a.createElement(F.a,{container:!0,spacing:1},t.map((function(e){return r.a.createElement(F.a,{item:!0,xs:12,key:e.id},r.a.createElement(te,{line:e,onDelete:n,onChange:l}))}))))},le=Object(i.a)((function(e){return{button:{marginRight:e.spacing()}}})),oe=function(e){var a=e.onAdd,t=e.onDelete,n=le();return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,marginBottom:1,padding:1.5},r.a.createElement(s.a,{variant:"contained",color:"primary",size:"small",className:n.button,onClick:a},"Add"),r.a.createElement(s.a,{variant:"outlined",color:"primary",size:"small",className:n.button,onClick:t},"Delete"))},ce=t(191),ie=t(178),ue=t(193),se=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{title:"1 hour = 1.00; 30 mins = 0.50; 15 mins = 0.25; Or simply follow any other convention you needed."},r.a.createElement(ee,{icon:"question"})))},me=Object(i.a)((function(e){return{imperativeFormControl:{marginRight:e.spacing(.5)}}})),de=function(e){var a=e.checked,t=e.onChange,n=me();return r.a.createElement(c.a,{display:"flex",alignItems:"center",height:32,marginBottom:1,padding:1.5},r.a.createElement(ie.a,{control:r.a.createElement(ce.a,{checked:a,onChange:t,color:"primary"}),classes:{root:n.imperativeFormControl},label:"Imperative Time"}),"\xa0",r.a.createElement(se,null))},fe=function(e){var a=j(),t=a.lines,n=void 0===t?[]:t,l=a.imperative,o=a.handleAddNewLine,c=a.handleChangeLine,i=a.handleDeleteLine,p=a.handleDeleteAllLines,E=a.handleChangeImperative,b=r.a.useState(!1),v=Object(u.a)(b,2),k=v[0],C=v[1],D=r.a.useCallback((function(){n&&n.length&&C(!0)}),[n]),y=r.a.useCallback((function(){C(!1)}),[]),w=r.a.useCallback((function(){p(),y()}),[p,y]),O=n.reduce((function(e,a){return e+(Number(a.hours)||0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{onAdd:o,onDelete:D}),r.a.createElement(de,{checked:l,onChange:E}),r.a.createElement(I,{totalHours:O}),r.a.createElement(re,{lines:n,onDelete:i,onChange:c}),r.a.createElement(d.a,{open:k,onClose:y},r.a.createElement(f.a,null,"Delete"),r.a.createElement(h.a,null,r.a.createElement(m.a,null,"Do you want to delete all timesheet lines ?")),r.a.createElement(g.a,null,r.a.createElement(s.a,{size:"small",onClick:y},"Cancel"),r.a.createElement(s.a,{color:"primary",onClick:w},"Delete"))))},he=Object(i.a)((function(e){return{toolbar:{minHeight:e.spacing(6)},main:{padding:e.spacing(2),maxWidth:e.spacing(70),marginRight:"auto",marginLeft:"auto",height:"calc(100% - ".concat(e.spacing(14.5),"px)")}}})),ge=function(){var e=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:e.toolbar}),r.a.createElement(c.a,{component:"main",className:e.main},r.a.createElement(fe,null)))},pe=t(186),Ee=t(187),be=t(87),ve=t(91),ke=t(194);!function(e){e.TXT="txt",e.CSV="csv",e.PDF="pdf"}(y||(y={}));var Ce=function(e){var a=e.onDownload,t=Object(P.a)(e,["onDownload"]),n=r.a.useState(null),l=Object(u.a)(n,2),o=l[0],c=l[1],i=function(){c(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,Object.assign({icon:"download"},t,{onClick:function(e){c(e.currentTarget)}})),r.a.createElement(ve.a,{anchorEl:o,open:Boolean(o),onClose:i},r.a.createElement(ke.a,{onClick:function(e){e.preventDefault(),i(),a(y.TXT)}},"TXT File"),r.a.createElement(ke.a,{onClick:function(e){e.preventDefault(),i(),a(y.CSV)}},"CSV File"),r.a.createElement(ke.a,{onClick:function(e){e.preventDefault(),i(),a(y.PDF)}},"PDF File")))},De=t(183),ye=t(182),we=t(176),Oe=Object(i.a)((function(e){return{popoverPaper:{width:500,padding:e.spacing(2)},link:{color:e.palette.primary.main},divider:{marginBottom:e.spacing()}}})),Te=function(e){var a=e.children;return r.a.createElement(c.a,{display:"flex",marginBottom:.5,alignItems:"center"},r.a.createElement(ee,{icon:"check",disableRipple:!0}),"\xa0",r.a.createElement(m.a,{color:"secondary"},a))},je=function(e){var a=e.open,t=e.anchorEl,n=e.onClose,l=Oe();return r.a.createElement(we.a,{open:a,anchorEl:t,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},PaperProps:{className:l.popoverPaper}},r.a.createElement(m.a,{gutterBottom:!0},"Timesheet is a small application for managing daily task work time and to evaluate total hours of work."),r.a.createElement(ye.a,{className:l.divider,light:!0}),r.a.createElement(Te,null,"Hassle-free access to your timesheet lines"),r.a.createElement(Te,null,"Instant overview of total time hours"),r.a.createElement(Te,null,"Dark mode"),r.a.createElement(Te,null,"Works Offline"),r.a.createElement(Te,null,"Download timesheet in TXT, CSV and PDF format"),r.a.createElement(ye.a,{className:l.divider,light:!0}),r.a.createElement(m.a,{gutterBottom:!0},"The application works offline and can be used by using\xa0",r.a.createElement("i",null,"'Add to home screen'"),"\xa0option from browser setting on mobile devices."),r.a.createElement(ye.a,{className:l.divider,light:!0}),r.a.createElement(m.a,{gutterBottom:!0},"The application do not store any consumer data and use local storage for persisting the information. Timesheet is\xa0",r.a.createElement(De.a,{color:"primary",href:"https://github.com/nishantpainter/timesheet",target:"_blank"},"Open-source"),". Pull request are welcome!"),r.a.createElement(ye.a,{className:l.divider,light:!0}),r.a.createElement(m.a,null,"Developed By :\xa0",r.a.createElement(De.a,{color:"primary",href:"https://nishantpainter.github.io/",target:"_blank"},"Nishant Painter")))},xe=t(185),Se=t(90),Ne=t(184),Be=t(88),Ie=t.n(Be),Fe=t(89),Le=t.n(Fe),Pe=r.a.createContext({}),Me=function(e){var a=e.children,t=r.a.useState(w.getDarkMode()),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useCallback((function(){o((function(e){return w.setDarkMode(!e),!e}))}),[]),i=Object(Se.a)({palette:{type:l?"dark":"light",primary:Ie.a,secondary:Le.a}}),s=r.a.useMemo((function(){return{handleToggleDarkTheme:c}}),[c]);return r.a.createElement(Pe.Provider,{value:s},r.a.createElement(Ne.a,{theme:i},r.a.createElement(xe.a,null),a))},ze=Object(i.a)((function(e){return{iconButton:{marginRight:e.spacing(1)}}})),Ae=function(e){var a=ze(),t=r.a.useContext(Pe).handleToggleDarkTheme,n=j().lines,l=void 0===n?[]:n,o=r.a.useState(null),i=Object(u.a)(o,2),s=i[0],d=i[1],f=r.a.useCallback((function(e){d(e.currentTarget)}),[]),h=r.a.useCallback((function(){d(null)}),[]),g=r.a.useCallback((function(e,a){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download",a),n.click()}),[]),p=r.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DD MMM YYYY";return N()().format(e)}),[]),E=r.a.useCallback((function(e){return p()+".".concat(e.toLowerCase())}),[p]),b=r.a.useCallback((function(){return l.reduce((function(e,a){return e+(Number(a.hours)||0)}),0)}),[l]),v=r.a.useCallback((function(e){switch(e){case y.PDF:case y.TXT:return l.reduce((function(e,a){return(a.title||a.hours)&&(e+="".concat(a.title||""," - ").concat(a.hours||"0","\n")),e}),"Timesheet : ".concat(p(),"; Total Hours : ").concat(b(),"\n============================================\n"));case y.CSV:return l.reduce((function(e,a){return(a.title||a.hours)&&(e+='"'.concat(a.title||"",'","').concat(a.hours||"0",'"\n')),e}),'"Title","Hours"\n');default:return""}}),[l,p,b]),k=r.a.useCallback((function(){var e=v(y.TXT),a=new Blob([e],{type:"text/plain"});g(a,E(y.TXT))}),[v,g,E]),C=r.a.useCallback((function(){var e=v(y.CSV),a=new Blob([e],{type:"text/plain"});g(a,E(y.CSV))}),[v,g,E]),D=r.a.useCallback((function(){var e=v(y.PDF),a=new be.a;a.text(e,10,10),a.save(E(y.PDF))}),[v,E]),w=r.a.useCallback((function(e){switch(e){case y.TXT:k();break;case y.CSV:C();break;case y.PDF:D();break;default:return}}),[k,C,D]);return r.a.createElement(pe.a,{color:"default"},r.a.createElement(Ee.a,{variant:"dense"},r.a.createElement(c.a,{display:"flex",flexGrow:1,alignItems:"center"},r.a.createElement(ee,{icon:"timesheet",color:"primary"}),r.a.createElement(m.a,{color:"primary"},r.a.createElement("b",null,"Timesheet"))),r.a.createElement(c.a,{display:"flex",alignItems:"center"},r.a.createElement(ee,{icon:"brightness",color:"primary",className:a.iconButton,onClick:t}),r.a.createElement(Ce,{color:"primary",className:a.iconButton,onDownload:w}),r.a.createElement(ee,{icon:"info",color:"secondary",onClick:f})),r.a.createElement(je,{open:Boolean(s),anchorEl:s,onClose:h})))},He=function(e){var a=e.children,t=r.a.createRef(),n=function(e){return function(){t.current.closeSnackbar(e)}};return r.a.createElement(k.a,{autoHideDuration:2e3,maxSnack:3,ref:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},action:function(e){return r.a.createElement(s.a,{color:"inherit",size:"small",onClick:n(e)},"Dismiss")}},a)},Re=function(){return r.a.createElement(Me,null,r.a.createElement(He,null,r.a.createElement(x,null,r.a.createElement(Ae,null),r.a.createElement(ge,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(118);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,3]]]);
//# sourceMappingURL=main.5297a219.chunk.js.map