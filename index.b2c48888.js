!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var n={headers:e(t)({},"x-api-key","live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn")},r=function(e){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e),n).then((function(e){if(!e.ok)throw new error(e.statusText);return e.json()}))},o=document.querySelector(".breed-select"),c=document.querySelector(".cat-info"),i=document.querySelector(".loader"),u=document.querySelector(".error");fetch("https://api.thecatapi.com/v1/breeds",n).then((function(e){if(!e.ok)throw new error(e.statusText);return e.json()})).then((function(e){o.innerHTML=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("")})).finally((function(){return i.setAttribute("hidden",!0)})).catch((function(){return u.removeAttribute("hidden")})),o.addEventListener("change",(function(e){i.removeAttribute("hidden");var t=e.target.value;r(t).then((function(t){console.log(t),console.log(r),c.innerHTML=t.map((function(e){return'<img src="'.concat(e.url,'" alt="cat" width="500" hight="400"/>\n      ')})).join(""),t.map((function(t){t.breeds.forEach((function(t){var n=[t].find((function(t){return t.id==="".concat(e.target.value)})),r='<div class="flex"> \n        <h2>'.concat(n.name,"</h2>\n        <p>").concat(n.description,"</p>\n        <h2>Temperament</h2>\n        <p>").concat(n.temperament,"</p>\n        </div> ");c.insertAdjacentHTML("beforeend",r)}))}))})).catch((function(){u.removeAttribute("hideen")})).finally((function(){return i.setAttribute("hidden",!0)}))}))}();
//# sourceMappingURL=index.b2c48888.js.map
