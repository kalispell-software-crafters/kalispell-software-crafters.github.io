parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e){if("keypress"===e.type){var t=e.keyCode;return 32===t||13===t}}document.addEventListener("keypress",e);var t=document.querySelector(".hamburger"),o=document.querySelector(".nav"),a=!1;function r(){a?(t.classList.remove("open"),o.classList.remove("visible"),a=!1):(t.classList.add("open"),o.classList.add("visible"),a=!0)}t.addEventListener("click",r);for(var n=document.querySelector(".profile--selected"),s=document.getElementById("about__name"),i=document.getElementById("about__desc"),l=document.getElementById("about__photo"),c=document.querySelectorAll(".profile"),d=0;d<c.length;d++)c[d].addEventListener("click",m),c[d].addEventListener("keypress",function(t){e(t)&&m(t)});function m(e){var t=e.currentTarget.id,o=u[t];o&&(n.classList.remove("profile--selected"),(n=document.getElementById("".concat(t))).classList.add("profile--selected"),s.textContent=o.name,i.textContent=o.about,l.src=o.profilePhoto,l.alt="Kalispell Software Crafters organizer ".concat(o.name))}var u={Travis:{name:"Travis Craft",about:"I'm a Flathead native and remote software engineer. I want to connect with others to talk about software development and engineering. I first learned about software craftsmanship in the Fall of 2017 which led me to create this group. I've learned a lot along the way!",profilePhoto:"./imgs/travis.jpg"},Sam:{name:"Sam Nordlinger",about:"Sam is a software developer currently working for Best Buy. Previously a resident of Flathead Valley, Sam now joins us remotely from Seattle. His interests include programming languages, functional programming, concurrency, and rollercoasters.",profilePhoto:"./imgs/sam.jpg"},Skyler:{name:"Skyler Bexten",about:"Flathead native with computer science degree from UM. Fell in love with programming in a Java course. Likes JavaScript, test-driven development and plays with Haskell on the side. Reads too many books on the history of computer science and too much manga.",profilePhoto:"./imgs/skyler.jpg"}};
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.f523c205.js.map