!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector(".form"),l=document.querySelector('button[type="submit"'),a=null,c=1;i.addEventListener("submit",(function(n){n.preventDefault(),l.disabled=!0;var t=n.currentTarget.elements,o=t.delay.value,r=t.step.value,f=t.amount.value;function d(){var n=function(e,n){var t=Math.random()>.3,o=i.elements.step.value,r=Number(n)+o*(c-1);return new Promise((function(n,o){setTimeout((function(){t?n("✅ Fulfilled promise ".concat(e," in ").concat(r,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(r,"ms"))}))}))}(c,o);(c+=1)>Number(f)&&(clearInterval(a),c=1,l.disabled=!1),n.then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}setTimeout((function(){d(),a=setInterval((function(){d()}),r)}),o)}))}();
//# sourceMappingURL=03-promises.1db9e439.js.map
