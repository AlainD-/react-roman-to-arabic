(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,r){e.exports=r(42)},21:function(e,a,r){},30:function(e,a,r){},40:function(e,a,r){},42:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),i=r(12),o=r.n(i),c=(r(21),r(3)),s=r(4),l=r(6),m=r(5),p=r(7),u=r(13),b=r(9),v=r(14),h=r(15),d=(r(30),function(e){function a(){var e,r;Object(c.a)(this,a);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={romanDictionnary:{},roman:"",romanErrorMessage:"",arabic:"",arabicErrorMessage:""},r.romanNumbers="IVXLCDM",r.allowedRegExp=/^[IVXLCDM]+$/i,r.arabicGetDivisibleBy=function(e,a,r){var t=Math.floor(e/r);return{convert:a.repeat(Math.floor(e/r)),remain:e-t*r}},r.specialRomanRules=function(e){var a=e;return a=(a=(a=(a=(a=(a=a.replace("DCCCC","CM")).replace("CCCC","CD")).replace("LXXXX","XC")).replace("XXXX","XL")).replace("VIIII","IX")).replace("IIII","IV")},r.arabicConvert=function(e){var a={convert:"",remain:parseInt(e)},t="";return t+=(a=r.arabicGetDivisibleBy(a.remain,"M",1e3)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"D",500)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"C",100)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"L",50)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"X",10)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"V",5)).convert,t+=(a=r.arabicGetDivisibleBy(a.remain,"I",1)).convert,r.specialRomanRules(t)},r.initRomanDictionnary=function(){for(var e={},a=1;a<5e3;a++){e[r.arabicConvert(a)]=a}r.setState({romanDictionnary:e})},r.errorMessage=function(e){return e?n.a.createElement(v.Message,{severity:"error",text:e}):null},r.invalidRomanNumber=function(e){var a="This is not a valid Roman number.",t=r.specialRomanRules(e);return t in r.state.romanDictionnary&&(a="".concat(a," Did you mean '").concat(t,"' instead?")),a},r.handleChangeRoman=function(e){var a=e.target.value.toUpperCase(),t=a,n="",i="";if(!a.trim())return r.setState({roman:"",arabic:n,romanErrorMessage:i});r.allowedRegExp.test(a)||(i="Only ".concat(r.romanNumbers," are valid.")),a in r.state.romanDictionnary?n=r.state.romanDictionnary[t]:i=r.invalidRomanNumber(a),r.setState({roman:t,arabic:n,romanErrorMessage:i})},r.handleChangeArabic=function(e){var a=e.target.value,t=parseInt(a),n="",i="";a?t<0||t>=5e3?i="Only positive number lower than 5000 are allowed.":n=r.arabicConvert(t):t="",r.setState({arabic:t,roman:n,arabicErrorMessage:i})},r.handleReset=function(e){e.preventDefault();r.setState({roman:"",romanErrorMessage:"",arabic:"",arabicErrorMessage:""})},r}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.initRomanDictionnary()}},{key:"render",value:function(){return n.a.createElement(u.Card,{title:"Convertion",subTitle:"Roman <-> Arabic"},n.a.createElement("div",{className:"p-grid p-justify-between p-fluid app-converter"},n.a.createElement("div",{className:"p-col"},n.a.createElement("span",{className:"p-float-label"},n.a.createElement(b.InputText,{id:"roman",className:{"p-error":!!this.state.romanErrorMessage},value:this.state.roman,onChange:this.handleChangeRoman,keyfilter:this.allowedRegExp}),n.a.createElement("label",{htmlFor:"roman"},"Roman")),this.errorMessage(this.state.romanErrorMessage)),n.a.createElement("div",{className:"p-col-3 app-arrows"},n.a.createElement("div",{className:"p-grid p-justify-center"},n.a.createElement("div",{className:"p-col-12"},n.a.createElement("span",{className:"pi pi-pw pi-chevron-left"}),n.a.createElement("span",{className:"pi pi-pw pi-minus"}),n.a.createElement("span",{className:"pi pi-pw pi-chevron-right"})),n.a.createElement("div",{className:"p-col-12 p-sm-8 p-md-6 p-lg-4"},n.a.createElement(h.Button,{onClick:this.handleReset,icon:"pi pi-pw pi-replay",className:"p-button-info",label:"reset"})))),n.a.createElement("div",{className:"p-col"},n.a.createElement("span",{className:"p-float-label"},n.a.createElement(b.InputText,{id:"arabic",className:{"p-error":!!this.state.arabicErrorMessage},value:this.state.arabic,onChange:this.handleChangeArabic,keyfilter:"pint"}),n.a.createElement("label",{htmlFor:"arabic"},"Arabic")),this.errorMessage(this.state.arabicErrorMessage))))}}]),a}(t.Component)),f=(r(32),r(34),r(36),r(38),r(40),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(d,null)}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.8401160c.chunk.js.map