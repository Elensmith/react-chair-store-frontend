(this["webpackJsonpreact-chair-store-frontend"]=this["webpackJsonpreact-chair-store-frontend"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},,,,function(e){e.exports=JSON.parse('{"product":[{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 1","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 2","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 3","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 4","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 5","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \xab\u041d\u043e\u0440\u043c\xbb \u0433\u0438\u0434\u0440\u0430\u0432\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 6","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"}]}')},function(e,a,r){"use strict";r.r(a);var t=r(0),n=r(2),c=r.n(n),o=r(6),s=r.n(o),i=(r(12),r(4)),p=r(1),l=r(3);r(13),r(14);var m=function(e){return Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("img",{className:"card__image",src:e.card.img,alt:e.card.name}),Object(t.jsx)("h2",{className:"card__title",children:e.card.name}),Object(t.jsxs)("p",{className:"card__price",children:[e.card.price,Object(t.jsx)("span",{className:"card__price-symbol",children:"\u20bd"})]}),Object(t.jsx)("button",{className:"card__button",onClick:e.onClick,children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})},u=r.p+"static/media/close-white.e4e5d624.svg";r(15);var d=function(e){return Object(t.jsx)("div",{className:"popup",children:Object(t.jsxs)("div",{className:"popup__content",children:[Object(t.jsx)("h3",{className:"popup__header",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(t.jsx)("img",{className:"popup__close",src:u,alt:"",onClick:e.isClosed}),Object(t.jsxs)("form",{onSubmit:e.onClick,noValidate:!0,className:"popup__form",children:[Object(t.jsx)("p",{className:"popup__label",children:"\u0418\u043c\u044f"}),Object(t.jsx)("input",{className:"popup__input ".concat(void 0===e.error.nameError?"":e.error.nameError.length>1?"popup__input_error":""),value:e.value.name,name:"name",placeholder:"\u0418\u043c\u044f",onChange:e.onChange}),Object(t.jsx)("span",{className:"popup__error",children:e.error.nameError}),Object(t.jsx)("p",{className:"popup__label",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(t.jsx)("input",{className:"popup__input ".concat(void 0===e.error.phoneError?"":e.error.phoneError.length>1?"popup__input_error":""),value:e.value.phone,name:"phone",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",onChange:e.onChange}),Object(t.jsx)("span",{className:"popup__error",children:e.error.phoneError}),Object(t.jsx)("p",{className:"popup__label",children:"Email"}),Object(t.jsx)("input",{className:"popup__input ".concat(void 0===e.error.emailError?"":e.error.emailError.length>1?"popup__input_error":""),value:e.value.email,name:"email",placeholder:"Email",onChange:e.onChange}),Object(t.jsx)("span",{className:"popup__error",children:e.error.emailError}),Object(t.jsx)("p",{className:"popup__label",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(t.jsx)("textarea",{className:"popup__item",name:"item",rows:"2",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",value:e.value.clickedItem,readOnly:!0}),Object(t.jsx)("button",{className:"popup__button",type:"submit",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]})]})})};r(16);var j=function(){var e=r(19),a=c.a.useState([]),n=Object(l.a)(a,2),o=n[0],s=n[1],u=c.a.useState(!1),j=Object(l.a)(u,2),h=j[0],b=j[1],_=c.a.useState({name:null,email:null,phone:null,clickedItem:null}),g=Object(l.a)(_,2),O=g[0],v=g[1],x=c.a.useState({nameError:"",emailError:"",phoneError:""}),E=Object(l.a)(x,2),f=E[0],N=E[1],k=RegExp(/[A-Za-z\u0410-\u042f\u0430-\u044f]{2,20}/),C=RegExp(/^([a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]+|[a-zA-Z0-9]+)@[-a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/),w=RegExp(/^[+]?[\d]([(][\d]{3}[)][\s]?[\d]{3}[-][\d]{2}[-][\d]{2}|[\d]{10}|[\s]([\d]{3}[-])+[\d]{2}[-][\d]{2})/);function S(e){v({clickedItem:e.target.parentNode.childNodes[1].innerText}),b(!0)}return c.a.useEffect((function(){s(e.product)}),[e.product]),Object(t.jsxs)("div",{className:"app",children:[Object(t.jsx)("h1",{className:"app__header",children:"Welcome to CHAIR STORE"}),Object(t.jsx)("div",{className:"app__grid",children:o.map((function(e){return Object(t.jsx)(m,{card:e,onClick:S},e.id)}))}),h?Object(t.jsx)(d,{onClick:function(e){if(e.preventDefault(),function(e){var a=!1;return Object.values(e).forEach((function(e){return e.length>1||""===e?a=!1:1===e.length?a=!0:void 0})),a}(f)){var a={name:O.name,email:O.email,phone:O.phone,item:O.clickedItem};alert("\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044be \u0443\u0439\u0434\u0443\u0442 \u043d\u0430 \u043f\u043e\u0447\u0442\u0443: \u0418\u043c\u044f: "+a.name+" Email: "+a.email+" \u0422\u0435\u043b\u0435\u0444\u043e\u043d: "+a.phone+" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430: "+a.item),b(!1)}},value:O,error:f,isClosed:function(){b(!1),N({nameError:"",emailError:"",phoneError:""})},onChange:function(e){var a=e.target,r=a.name,t=a.value;switch(v(Object(p.a)(Object(p.a)({},O),{},Object(i.a)({},r,t))),r){case"name":k.test(t)?N(Object(p.a)(Object(p.a)({},f),{},{nameError:"."})):N(Object(p.a)(Object(p.a)({},f),{},{nameError:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043e\u0442 2 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}));break;case"phone":w.test(t)?N(Object(p.a)(Object(p.a)({},f),{},{phoneError:"."})):N(Object(p.a)(Object(p.a)({},f),{},{phoneError:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}));break;case"email":C.test(t)?N(Object(p.a)(Object(p.a)({},f),{},{emailError:"."})):N(Object(p.a)(Object(p.a)({},f),{},{emailError:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}))}}}):""]})},h=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,21)).then((function(a){var r=a.getCLS,t=a.getFID,n=a.getFCP,c=a.getLCP,o=a.getTTFB;r(e),t(e),n(e),c(e),o(e)}))};s.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(j,{})}),document.getElementById("root")),h()}],[[20,1,2]]]);
//# sourceMappingURL=main.a1f44132.chunk.js.map