(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([e.id,":root {\n  --back: #ffffff;\n  --color: #2b3467;\n  --accent: #eb455f;\n}\n\n::placeholder {\n  color: var(--color);\n  opacity: 0.3;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--color);\n}\n\nbutton {\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\ndialog {\n  margin: auto;\n}\n\ninput,\ntextarea {\n  outline: none;\n  border: none;\n}\n\ninput[type='radio'] {\n  appearance: none;\n  color: var(--accent);\n  font: inherit;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid var(--color);\n  border-radius: 50%;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type='radio']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--accent);\n}\n\ninput[type='radio']:checked::before {\n  transform: scale(1);\n}\n\n#todo-dialog {\n  width: 600px;\n  height: 600px;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#title-input {\n  font-size: 1.3rem;\n  height: 1.4;\n}\n\n#description-input {\n  font-size: 1.1rem;\n  resize: none;\n}\n\n#priority-input {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#fab {\n  background-color: var(--accent);\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: scale(1);\n  transition-duration: 1s;\n  position: absolute;\n  bottom: 3%;\n  right: 3%;\n  box-shadow: rgba(26, 18, 11, 0.5) 0px 2px 4px;\n}\n\n#fab:hover {\n  transform: scale(1.5);\n  transition-duration: 1s;\n}\n\n#fab > .material-icons {\n  font-size: 4rem;\n  color: var(--back);\n}\n\n#content {\n  min-height: 100vh;\n  background-color: var(--back);\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(400px, 4fr);\n  grid-template-rows: 1fr 10fr;\n  padding: 20px;\n  column-gap: 20px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\n.dialog,\n.sidebar,\n.main {\n  border-radius: 30px;\n  box-shadow: rgba(26, 18, 11, 0.5) 0px 2px 4px;\n  border: none;\n}\n\n.main {\n  padding: 50px;\n  overflow: hidden;\n  position: relative;\n}\n\n.dialog,\n.sidebar {\n  padding: 20px 20px;\n}\n\n.menu {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  width: 100%;\n}\n\n.menu-item {\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.menu-item:hover,\n.menu-item.selected {\n  transform: scale(1.05);\n}\n\n.menu-item:hover > div::before,\n.menu-item.selected > div::before {\n  content: '//';\n}\n\n.btn {\n  height: 1.5rem;\n  width: 1.5rem;\n  color: var(--color);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title-bar {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n}\n\n#new-project-btn {\n  background-color: var(--color);\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  font-size: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#new-project-btn:hover {\n  color: var(--accent);\n}\n\n#new-project-input {\n  font-size: 1.1rem;\n  width: 80%;\n}\n\n.project-input-container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  transition: opacity 0.5s;\n  opacity: 0;\n}\n\n.show {\n  transition: opacity 0.5s;\n  opacity: 1;\n}\n\n.new-project {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\n.projects {\n  width: 100%;\n}\n\n.project-list,\n.todo-list {\n  list-style-type: none;\n}\n\n#project-list {\n  height: 200px;\n  overflow-y: scroll;\n}\n\n.project-list > li {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.project-list > li:hover {\n  border-radius: 30px;\n  box-shadow: rgba(26, 18, 11, 0.3) 0px 2px 4px;\n}\n\n.title,\n.description {\n  cursor: pointer;\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.p-block {\n  width: 50px;\n  height: 50px;\n}\n",""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],s=0;s<e.length;s++){var a=e[s],d=r.base?a[0]+r.base:a[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=t(i[c]);n[s].references--}for(var a=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=a}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e={events:{},subscribe(e,n){this.events[e]=this.events[e]||[],this.events[e].push(n)},unsubscribe(e,n){this.events[e]&&(this.events[e]=this.events[e].filter((e=>e!==n)))},publish(e,n){this.events[e]&&this.events[e].forEach((e=>{e(n)}))}};var n=t(379),r=t.n(n),o=t(795),i=t.n(o),c=t(569),s=t.n(c),a=t(565),d=t.n(a),l=t(216),p=t.n(l),u=t(589),m=t.n(u),f=t(28),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("todo-dialog"),b={show(){v.showModal()},onSubmit(e){v.addEventListener("close",e)},close(){v.close()},getInput(){const e=v.querySelector("#title-input"),n=v.querySelector("#description-input"),t=document.querySelector('input[name="priority"]:checked'),r=v.querySelector("#duedate-input");return{title:e.value,description:n.value,priority:t.value,dueDate:r.value}}};document.getElementById("todo-cancel").addEventListener("click",b.close);const y=b,g={formatDate:e=>e.toISOString().slice(0,10),currentDate(){const e=new Date;return g.formatDate(e)},nextWeek(){const e=new Date;return e.setDate(e.getDate()+7),g.formatDate(e)}},x={projects:[],currentProject:{},setCurrentProject(e){x.currentProject=e},addProject(n){x.projectExists(n)||(x.projects.push(n),e.publish("projectListUpdated",x.projects))},removeProject(e){const n=x.projects.findIndex((n=>n.title===e.title));-1!==n&&x.projects.splice(n,1)},getProjectList:()=>x.projects,projectExists:e=>x.projects.some((n=>n.title===e.title)),getTodayTodos(){const e=[];return x.projects.forEach((n=>{n.todos.forEach((n=>{n.dueDate===g.currentDate()&&e.push(n)}))})),e}},j=x;function w(e="untitled"){return{title:e,todos:[]}}function E(e,n){e.todos.push(n)}const L=document.querySelector("#new-project-btn"),S=document.querySelector(".project-input-container"),k=S.querySelector("#new-project-input"),C=S.querySelector("#submit-project"),T=S.querySelector("#cancel-project");function D(){const n=k.value;if(""===n)return;k.value="";const t=w(n);e.publish("projectAdded",t)}const P={bindEvents(){L.addEventListener("click",(function(){S.classList.toggle("show")})),T.addEventListener("click",(function(){S.classList.remove("show")})),k.addEventListener("keydown",(e=>{"Enter"===e.key&&D()})),C.addEventListener("click",D)}},I=(n,t)=>{const r=document.createElement("div");r.classList.add("project");const o=document.createElement("h2");if(o.classList.add("title"),o.innerText=n,0===t.length){const e=document.createElement("h3");return e.textContent="list is empty.",r.appendChild(o),r.appendChild(e),r}const i=document.createElement("ul");return i.classList.add("todo-list"),t.forEach(((n,t)=>{const r=(n=>{const{title:t,description:r,dueDate:o}=n,i=document.createElement("div");i.classList.add("todo");const c=document.createElement("h3");c.classList.add("title"),c.innerText=t;const s=document.createElement("p");s.classList.add("description"),s.innerText=r;const a=document.createElement("span");a.classList.add("due-date"),a.innerText=o;const d=document.createElement("div");return d.classList.add("todo-header"),d.append(c,a),i.append(d,s),e.publish("todoClicked",n),i})(n),o=document.createElement("li");o.appendChild(r),o.setAttribute("id",t),i.appendChild(o)})),r.appendChild(o),r.appendChild(i),r};function q(e,n,t,r,o=!1){return{title:e,description:n,dueDate:t,priority:r,status:o}}const A=document.querySelector(".menu");A.addEventListener("click",(n=>{const t=n.target.closest(".menu-item");t&&(A.querySelectorAll(".menu-item").forEach((e=>e.classList.remove("selected"))),e.publish("itemSelected",t.querySelector("div").id),t.classList.add("selected"))}));function M(e){const n=document.getElementById("current-list"),t=I(e.title,e.todos);n.textContent="",n.appendChild(t)}document.getElementById("fab").addEventListener("click",y.show),y.onSubmit((function(){const n=y.getInput(),t=q(n.title,n.description,n.dueDate,n.priority);e.publish("todoAdded",t)})),e.subscribe("projectAdded",j.addProject),e.subscribe("projectListUpdated",(function(n){const t=document.getElementById("project-list");t.textContent="";const r=(e=>{const n=document.createElement("ul");return n.classList.add("project-list"),e.forEach(((e,t)=>{const r=document.createElement("li");r.innerText=e.title,r.setAttribute("id",t),n.appendChild(r)})),n})(n);r.addEventListener("click",(n=>{const t=n.target.closest("li").getAttribute("id");e.publish("projectSelected",j.projects[t])})),t.appendChild(r)})),e.subscribe("projectSelected",M),e.subscribe("projectSelected",j.setCurrentProject),e.subscribe("todoAdded",(function(e){E(j.currentProject,e),M(j.currentProject)})),e.subscribe("itemSelected",(e=>{"today"===e&&console.log(j.getTodayTodos())})),console.log("hey"),(()=>{const e=w("workout"),n=q("benchpress","",g.currentDate(),"high"),t=w("learn backflip"),r=q("learn to roll backwards on ground","",g.nextWeek(),"high");E(e,n),E(t,r),j.addProject(e),j.addProject(t)})(),P.bindEvents()})()})();