parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".nav__btn--phone"),n=document.querySelector(".nav__number--hidden"),t=document.querySelector(".nav__btn--burger"),i=document.querySelector(".menu"),s=document.querySelector(".nav__btn--cross"),c=document.querySelector(".header"),r=document.querySelector(".menu__container"),o=document.querySelectorAll(".menu__link"),u=document.querySelector(".mybike-page__body");e.addEventListener("mouseover",function(e){n.classList.add("nav__number--visible")}),e.addEventListener("mouseout",function(e){n.classList.remove("nav__number--visible")}),t.addEventListener("click",function(){i.classList.add("menu--visible"),r.classList.add("menu__container--visible"),u.classList.add("mybike-page__body--hidden")}),s.addEventListener("click",function(e){i.classList.remove("menu--visible"),r.classList.remove("menu__container--visible"),u.classList.remove("mybike-page__body--hidden")}),o.forEach(function(e){return e.addEventListener("click",function(){i.classList.remove("menu--visible"),r.classList.remove("menu__container--visible"),u.classList.remove("mybike-page__body--hidden")})}),document.querySelector(".button--submit").addEventListener("click",function(e){e.preventDefault()},!0);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.705a3aea.js.map