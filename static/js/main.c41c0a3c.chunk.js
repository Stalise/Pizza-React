(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(19),r=a.n(n),s=(a(42),a(7)),o=(a(43),a(6));a(44),a(45);var l=function(){if(document.getElementById||document.createTextNode){for(var e="activetrigger",t="trigger",a="dropdownhidden",c="dropdownvisible",i=0,n=[],r=document.getElementsByTagName("select"),s=0;s<r.length;s++)if(z(r[s],"turnintodropdown")){var o=document.createElement("input");o.name=r[s].name,o.type="hidden",o.id=r[s].id,o.value=r[s].options[0].value,r[s].parentNode.insertBefore(o,r[s]);var l=document.createElement("a");v(l,t),l.href="#",l.onclick=function(){return _(this,t,e),_(this.parentNode.getElementsByTagName("ul")[0],a,c),!1},l.appendChild(document.createTextNode(r[s].options[0].text)),r[s].parentNode.insertBefore(l,r[s]);for(var j=document.createElement("ul"),u=0;u<r[s].getElementsByTagName("option").length;u++){var d=document.createElement("li"),m=document.createElement("a");d.v=r[s].getElementsByTagName("option")[u].value,d.elm=o,d.istrigger=l,m.href="#",m.appendChild(document.createTextNode(r[s].getElementsByTagName("option")[u].text)),d.onclick=function(){return this.elm.value=this.v,_(this.istrigger,e,t),_(this.parentNode,c,a),this.istrigger.firstChild.nodeValue=this.firstChild.firstChild.nodeValue,!1},d.appendChild(m),j.appendChild(d)}v(j,a);var h=document.createElement("div");h.appendChild(j),v(h,"dropcontainer"),r[s].parentNode.insertBefore(h,r[s]),n[i]=r[s],i++}for(var p=document.getElementsByTagName("ul");s<p.length;s++)if(z(p[s],"turnintoselect")){var b=document.createElement("form"),O=document.createElement("select");for(u=0;u<p[s].getElementsByTagName("a").length;u++){var g=document.createElement("option");g.value=p[s].getElementsByTagName("a")[u].href,g.appendChild(document.createTextNode(p[s].getElementsByTagName("a")[u].innerHTML)),O.appendChild(g)}O.onchange=function(){window.location=this.options[this.selectedIndex].value},b.appendChild(O),p[s].parentNode.insertBefore(b,p[s]),n[i]=p[s],i++}for(s=0;s<i;s++)n[s].parentNode.removeChild(n[s])}function z(e,t){return new RegExp("\\b"+t+"\\b").test(e.className)}function _(e,t,a){var c=e.className;e.className=z(e,t)?c.replace(t,a):c.replace(a,t)}function v(e,t){z(e,t)||(e.className+=""===e.className?t:" "+t)}},j=a(34),u=a(2),d=a(21),m=a(0),h=["children"],p=function(e){var t=e.children,a=Object(d.a)(e,h);return Object(m.jsxs)("li",Object(u.a)(Object(u.a)({},a),{},{children:[" ",t," "]}))},b=function(e){var t=e.pizzaParametr,a=e.pizzaChangeDough,c=function(e){if(e===t[0].dough)return"_active"},i=function(e){if(e===t[1].size)return"_active"};return Object(m.jsxs)("div",{className:"pizza-item__select-container",children:[Object(m.jsxs)("ul",{className:"pizza-item__type",children:[Object(m.jsx)(p,{onClick:function(e){return a(e)},className:"pizza-item__type ".concat(c("\u0442\u043e\u043d\u043a\u043e\u0435")," "),children:"\u0442\u043e\u043d\u043a\u043e\u0435"}),Object(m.jsx)(p,{onClick:function(e){return a(e)},className:"pizza-item__type ".concat(c("\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435")," "),children:"\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"})]}),Object(m.jsxs)("ul",{className:"pizza-item__size",children:[Object(m.jsx)(p,{onClick:function(e){return a(e,"low")},className:"pizza-item__size ".concat(i("25 \u0441\u043c.")," "),children:"25 \u0441\u043c."}),Object(m.jsx)(p,{onClick:function(e){return a(e,"average")},className:"pizza-item__size ".concat(i("30 \u0441\u043c.")," "),children:"30 \u0441\u043c."}),Object(m.jsx)(p,{onClick:function(e){return a(e,"high")},className:"pizza-item__size ".concat(i("35 \u0441\u043c.")," "),children:"35 \u0441\u043c."})]})]})},O=["children","clsName","active","buttonActive"],g=function(e){var t=e.children,a=e.clsName,c=e.active,i=e.buttonActive,n=Object(d.a)(e,O);return Object(m.jsxs)("button",Object(u.a)(Object(u.a)({className:c||!0===i?a+" _active":a},n),{},{children:[" ",t," "]}))},z=a(5),_=function(e){var t=e.pizza,a=Object(z.b)(),i=Object(z.c)((function(e){return e.cartReducer.cartProduct})),n=Object(c.useState)(!1),r=Object(s.a)(n,2),l=r[0],d=r[1],h=Object(c.useState)({25:!1,30:!1,35:!1}),p=Object(s.a)(h,2),O=p[0],_=p[1],v=Object(c.useState)([{dough:"\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"},{size:"30 \u0441\u043c."},{price:t.price.average}]),f=Object(s.a)(v,2),x=f[0],N=f[1];return Object(c.useEffect)((function(){var e,a=Object(u.a)({},O),c=Object(j.a)(i);try{for(c.s();!(e=c.n()).done;){var n=e.value;if(n.name===t.name)a[n.size.substr(0,2)]=!0}}catch(r){c.e(r)}finally{c.f()}_(Object(u.a)({},a)),!0===a[30]&&d(!0)}),[]),Object(m.jsxs)("div",{className:"main-pizza__item pizza-item",children:[Object(m.jsx)("div",{className:"pizza-item__picture",children:Object(m.jsx)("img",{src:"images/"+t.img,alt:"Pizza"})}),Object(m.jsxs)("div",{className:"pizza-item__content",children:[Object(m.jsx)("p",{className:"pizza-item__title",children:t.name}),Object(m.jsx)(b,{pizza:t,pizzaParametr:x,pizzaChangeDough:function(e,a){if(!e.target.classList.contains("_active")){if(e.target.classList.contains("pizza-item__type")){var c=Object(o.a)(x);c[0].dough=e.target.textContent.trim(),N(Object(o.a)(c))}else if(e.target.classList.contains("pizza-item__size")){var i=x;i[1].size=e.target.textContent.trim(),i[2].price=t.price[a],N(Object(o.a)(i))}O[x[1].size.substr(0,2)]?d(!0):d(!1)}}}),Object(m.jsxs)("div",{className:"pizza-item__bottom",children:[Object(m.jsxs)("p",{className:"pizza-item__price",children:[x[2].price," ",Object(m.jsx)("span",{children:"\u20bd"})]}),Object(m.jsx)(g,{onClick:function(){return function(){var e=x[1].size.substr(0,2),c=Object(u.a)({},O);c[e]=!0,_(Object(u.a)({},c)),!0===c[e]&&d(!0);var i={dough:x[0].dough,size:x[1].size,price:x[2].price,img:"./Pizza-React/images/"+t.img,name:t.name,numbPizzaCart:null,totalCount:1,totalPrice:x[2].price};a({type:"ADD_CART",payload:i})}()},clsName:"pizza-item__button",buttonActive:l,children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "})]})]})]})},v=function(e,t,a,c){var i=Object(o.a)(a).filter((function(t){if(t[Object.keys(t)[0]].type.hasOwnProperty(e))return t}));if("1"===t)c(Object(o.a)(i));else if("2"===t){var n=Object(o.a)(i).sort((function(e,t){return t[Object.keys(t)[0]].price.low-e[Object.keys(e)[0]].price.low}));c(Object(o.a)(n))}else if("3"===t){var r=Object(o.a)(i).sort((function(e,t){return e[Object.keys(e)[0]].price.low-t[Object.keys(t)[0]].price.low}));c(Object(o.a)(r))}},f=function(e){var t=e.pizzaItems,a=(e.sortedPizza,e.sortedPizzaHandler),i=Object(c.useState)("1"),n=Object(s.a)(i,2),r=n[0],o=n[1],j=Object(c.useState)({all:!1,meat:!1,cheese:!1,vegan:!1,sharp:!1}),d=Object(s.a)(j,2),h=d[0],p=d[1],b=function(e){var c={all:!1,meat:!1,cheese:!1,vegan:!1,sharp:!1};c[e]=!0,p(Object(u.a)({},c)),v(e,r,t,a)};return Object(c.useEffect)((function(){l(),p(Object(u.a)(Object(u.a)({},h),{},{all:!0}))}),[]),Object(m.jsxs)("div",{className:"main-pizza__navigation",children:[Object(m.jsxs)("div",{className:"main-pizza__categories",children:[Object(m.jsx)(g,{onClick:function(){return b("all")},clsName:"main-pizza__categories-button",active:h.all,children:"\u0412\u0441\u0435"}),Object(m.jsx)(g,{onClick:function(){return b("meat")},clsName:"main-pizza__categories-button",active:h.meat,children:"\u041c\u044f\u0441\u043d\u044b\u0435"}),Object(m.jsx)(g,{onClick:function(){return b("cheese")},clsName:"main-pizza__categories-button",active:h.cheese,children:"\u0421\u044b\u0440\u043d\u044b\u0435"}),Object(m.jsx)(g,{onClick:function(){return b("vegan")},clsName:"main-pizza__categories-button",active:h.vegan,children:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435"}),Object(m.jsx)(g,{onClick:function(){return b("sharp")},clsName:"main-pizza__categories-button",active:h.sharp,children:"\u041e\u0441\u0442\u0440\u044b\u0435"})]}),Object(m.jsxs)("div",{className:"main-pizza__sort",children:[Object(m.jsx)("span",{className:"main-pizza__sort-title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(m.jsx)("div",{onClick:function(){return function(){var e=document.getElementById("select_id");if(r!==e.value){o(e.value);for(var c=0,i=Object.keys(h);c<i.length;c++){var n=i[c];!0===h[n]&&v(n,e.value,t,a)}}}()},className:"main-pizza__sort-select",children:Object(m.jsxs)("select",{id:"select_id",name:"select_sort",className:"turnintodropdown",children:[Object(m.jsx)("option",{value:"1",children:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"}),Object(m.jsx)("option",{value:"2",children:"\u0446\u0435\u043d\u0435 (\u043c\u0430\u043a\u0441)"}),Object(m.jsx)("option",{value:"3",children:"\u0446\u0435\u043d\u0435 (\u043c\u0438\u043d)"})]})})]})]})},x=a(13),N=function(e){var t=e.color;e.width,e.height;return Object(m.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:t,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:t,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:t,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},C=function(){var e=Object(z.c)((function(e){return e.cartReducer.cartProduct})),t=Object(c.useState)(0),a=Object(s.a)(t,2),i=a[0],n=a[1];return Object(c.useMemo)((function(){e.length&&n(e.reduce((function(e,t){return e+t.totalCount}),0))}),[e]),Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("button",{className:"header__login",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(m.jsxs)(x.b,{to:"/pizza",className:"header__logo",children:[Object(m.jsx)("img",{src:"./Pizza-React/images/pizza-peace.png",alt:"pizza-logo",className:"header__img"}),Object(m.jsxs)("div",{className:"header__logo-text",children:[Object(m.jsx)("p",{className:"header__title",children:"REACT PIZZA"}),Object(m.jsx)("p",{className:"header__subtitle",children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430"})]})]}),Object(m.jsxs)(x.b,{to:"/cart",className:"header__cart",children:[Object(m.jsx)(N,{color:"#fff"}),Object(m.jsx)("p",{className:"header__cart-number",children:i})]})]})},y=(a(52),function(){Object(z.c)((function(e){return e.cartReducer.cartProduct}));var e=Object(c.useState)([{pepperoni:{type:{all:!0,meat:!0,cheese:!0},name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",img:"pepperoni.jpeg",price:{low:395,average:639,high:789},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{cheese:{type:{all:!0,cheese:!0,vegan:!0},name:"\u0421\u044b\u0440\u043d\u0430\u044f \ud83c\udf31",img:"cheese.jpeg",price:{low:245,average:449,high:589},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{ham_cheese:{type:{all:!0,meat:!0,cheese:!0},name:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u0438 \u0433\u0440\u0438\u0431\u044b",img:"ham-cheese.jpeg",price:{low:345,average:539,high:699},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{double_chicken:{type:{all:!0,meat:!0,cheese:!0},name:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",img:"double-chicken.jpeg",price:{low:295,average:449,high:589},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{cheese_chiken:{type:{all:!0,meat:!0,cheese:!0},name:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",img:"cheese-chiken.jpg",price:{low:395,average:639,high:789},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{mexican:{type:{all:!0,meat:!0,cheese:!0,sharp:!0},name:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \ud83c\udf36\ufe0f\ud83c\udf36\ufe0f",img:"mexican.jpg",price:{low:445,average:699,high:849},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{pepperoni_fresh:{type:{all:!0,meat:!0,cheese:!0},name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0444\u0440\u0435\u0448",img:"pepperoni-fresh.jpeg",price:{low:245,average:449,high:589},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{four_cheese:{type:{all:!0,cheese:!0,vegan:!0},name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u0430 \ud83c\udf31",img:"four-cheese.jpeg",price:{low:445,average:699,high:849},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{veg_mush:{type:{all:!0,cheese:!0,vegan:!0},name:"\u041e\u0432\u043e\u0449\u0438 \u0438 \u0433\u0440\u0438\u0431\u044b \ud83c\udf31",img:"veg-mush.jpeg",price:{low:395,average:639,high:789},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}},{pizza_pie:{type:{all:!0,vegan:!0},name:"\u041f\u0438\u0446\u0446\u0430-\u043f\u0438\u0440\u043e\u0433 \ud83c\udf31",img:"pizza-pie.jpg",price:{low:345,average:539,high:699},size:{low:25,average:30,high:35},dough:{traditional:!0,thin:!0}}}]),t=Object(s.a)(e,2),a=t[0],i=(t[1],Object(c.useState)(Object(o.a)(a))),n=Object(s.a)(i,2),r=n[0],l=n[1],j=Object(c.useState)(!1),u=Object(s.a)(j,2),d=u[0];u[1];return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(C,{}),Object(m.jsx)("div",{className:"main",children:Object(m.jsxs)("div",{className:"main__pizza main-pizza",children:[Object(m.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(m.jsx)(f,{pizzaItems:a,sortedPizza:r,sortedPizzaHandler:l})}),Object(m.jsx)("p",{className:"main-pizza__title",children:"\u041f\u0438\u0446\u0446\u0430"}),Object(m.jsx)("div",{className:"main-pizza__content",children:d?Object(m.jsx)("h1",{children:"HELLO"}):r.map((function(e,t){var a=Object.keys(e)[0];return Object(m.jsx)(_,{pizza:e[a]},a)}))})]})})]})}),k=(a(72),function(e){var t=e.currentProduct,a=e.fakeCartItems,c=Object(z.b)();return Object(m.jsx)("div",{onClick:function(){c({type:"DELETE_PRODUCT",payload:a.filter((function(e){return e!==a[t]}))})},className:"cart-item__delete"})}),T=function(e){var t=e.fakeCartItems,a=e.currentProduct,n=e.pizzaTotal,r=e.pizzaTotalHandler,l=Object(z.b)(),j=t[a].price,d=Object(c.useState)({countTotal:1,costTotal:j}),h=Object(s.a)(d,2),p=h[0],b=h[1],O=function(e){p.countTotal>=1&&p.countTotal<20&&"+"===e?(b(Object(u.a)(Object(u.a)({},p),{},{countTotal:p.countTotal+1,costTotal:p.costTotal+j})),t.forEach((function(e,c,i){c===a&&(t[a].totalCount=p.countTotal+1,t[a].totalPrice=p.costTotal+j)})),r(Object(u.a)(Object(u.a)({},n),{},{quantity:n.quantity+1,price:n.price+j}))):p.countTotal>1&&p.countTotal<20&&"-"===e&&(b(Object(u.a)(Object(u.a)({},p),{},{countTotal:p.countTotal-1})),t.forEach((function(e,c,i){c===a&&(t[a].totalCount=p.countTotal-1,t[a].totalPrice=p.costTotal-j)})),r(Object(u.a)(Object(u.a)({},n),{},{quantity:n.quantity-1,price:n.price-j}))),l({type:"UPDATE_CART",payload:Object(o.a)(t)})};return Object(c.useState)((function(){b(Object(u.a)(Object(u.a)({},p),{},{countTotal:t[a].totalCount,costTotal:t[a].totalPrice}))}),[]),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("div",{className:"cart-item__quantity",children:[Object(m.jsx)("div",{onClick:function(){return O("-")},className:"cart-item__quantity-minus"}),Object(m.jsxs)("div",{className:"cart-item__quantity-total",children:[Object(m.jsx)("p",{className:"cart-item__quantity-counter",children:p.countTotal}),Object(m.jsx)("input",{onChange:function(){return null},className:"cart-item__quantity-input",value:"1"})]}),Object(m.jsx)("div",{onClick:function(){return O("+")},className:"cart-item__quantity-plus"})]}),Object(m.jsxs)("p",{className:"cart-item__price",children:[p.costTotal," ",Object(m.jsx)("span",{children:"\u20bd"})]}),Object(m.jsx)(k,{fakeCartItems:t,currentProduct:a})]})},w=function(e){var t=e.pizzaTotalHandler,a=e.pizzaTotal,c=Object(z.c)((function(e){return e.cartReducer.cartProduct})),i=Object(o.a)(c);return i.forEach((function(e,t){e.numbPizzaCart=t})),null===c?null:c.map((function(e,c){return Object(m.jsxs)("div",{className:"main-cart__item cart-item",children:[Object(m.jsxs)("div",{className:"cart-item__info",children:[Object(m.jsx)("div",{className:"cart-item__picture",children:Object(m.jsx)("img",{src:e.img,className:"cart-item__picture",alt:"pizza"})}),Object(m.jsxs)("div",{className:"cart-item__text",children:[Object(m.jsx)("p",{className:"cart-item__name",children:e.name}),Object(m.jsxs)("p",{className:"cart-item__parameters",children:[e.dough,", ",e.size]})]})]}),Object(m.jsx)(T,{currentProduct:c,fakeCartItems:i,pizzaTotalHandler:t,pizzaTotal:a})]},Math.random().toFixed(3))}))},E=function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.cartReducer.cartProduct})),a=Object(c.useState)({price:0,quantity:0}),n=Object(s.a)(a,2),r=n[0],o=n[1],l=0,j=0;t.forEach((function(e){l+=e.totalCount,j+=e.totalPrice}));return Object(c.useMemo)((function(){o(Object(u.a)(Object(u.a)({},r),{},{quantity:l,price:j}))}),[t]),Object(c.useEffect)((function(){o(Object(u.a)(Object(u.a)({},r),{},{quantity:l,price:j}))}),[]),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("div",{className:"main-cart__top",children:[Object(m.jsxs)("div",{className:"main-cart__title",children:[Object(m.jsx)("img",{src:"./Pizza-React/images/cart-icon-big.png",className:"main-cart__title-icon",alt:"cart"}),Object(m.jsx)("h1",{className:"main-cart__title-text",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),Object(m.jsxs)("div",{onClick:function(){e({type:"CLEAR_CART"})},className:"main-cart__clear",children:[Object(m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(m.jsx)("p",{className:"main-cart__clear-text",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(m.jsxs)("form",{className:"main-cart__form",children:[Object(m.jsx)(w,{pizzaTotalHandler:o,pizzaTotal:r}),Object(m.jsxs)("div",{className:"main-cart__bottom",children:[Object(m.jsxs)("div",{className:"main-cart__info",children:[Object(m.jsxs)("p",{className:"main-cart__total-products",children:["\u0412\u0441\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432: ",Object(m.jsxs)("span",{children:[r.quantity," \u0448\u0442."]})]}),Object(m.jsxs)("p",{className:"main-cart__total-price",children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 ",Object(m.jsxs)("span",{children:[r.price," \u20bd"]})]})]}),Object(m.jsxs)("div",{className:"main-cart__buttons",children:[Object(m.jsx)(x.b,{to:"/pizza",className:"main-cart__back",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"}),Object(m.jsx)("button",{className:"main-cart__pay",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})]})]})},P=function(){var e=Object(z.c)((function(e){return e.cartReducer.cartProduct}));return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(C,{}),Object(m.jsx)("div",{className:"main",children:Object(m.jsx)("div",{className:"main-cart",children:e.length>0?Object(m.jsx)(E,{}):Object(m.jsxs)("div",{className:"main-cart__empty",children:[Object(m.jsxs)("div",{className:"main-cart__empty-text",children:[Object(m.jsxs)("p",{className:"main-cart__empty-title",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(m.jsx)("span",{children:"\ud83d\ude41"})]}),Object(m.jsx)("p",{className:"main-cart__empty-subtle",children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443."}),Object(m.jsx)("p",{className:"main-cart__empty-subtle",children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]}),Object(m.jsx)("div",{className:"main-cart__empty-picture",children:Object(m.jsx)("img",{src:"./Pizza-React/images/cart-person.png",alt:"cart-person"})})]})})})]})},B=a(4),L=a(18),R={cartProduct:[]},A={authorization:!1},H=a(36),S=a(37),q=Object(L.combineReducers)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART":return Object(u.a)(Object(u.a)({},e),{},{cartProduct:[].concat(Object(o.a)(e.cartProduct),[Object(u.a)({},t.payload)])});case"DELETE_PRODUCT":return Object(u.a)(Object(u.a)({},e),{},{cartProduct:Object(o.a)(t.payload)});case"CLEAR_CART":return Object(u.a)(Object(u.a)({},e),{},{cartProduct:[]});case"UPDATE_CART":return Object(u.a)(Object(u.a)({},e),{},{cartProduct:Object(o.a)(t.payload)});default:return e}},authoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAutho":return Object(u.a)(Object(u.a)({},e),{},{authorization:!e.authorization});default:return e}}}),D=Object(L.createStore)(q,Object(H.composeWithDevTools)(Object(L.applyMiddleware)(S.a)));var M=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2);return t[0],t[1],Object(m.jsx)(z.a,{store:D,children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(B.b,{path:"/pizza",children:Object(m.jsx)(y,{})}),Object(m.jsx)(B.b,{path:"/cart",children:Object(m.jsx)(P,{})}),Object(m.jsx)(B.a,{to:"/pizza"})]})})};r.a.render(Object(m.jsx)(M,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c41c0a3c.chunk.js.map