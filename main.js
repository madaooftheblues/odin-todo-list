(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),c=t.n(i)()(r());c.push([e.id,":root {\n  --back: #ffffff;\n  --color: #2b3467;\n  --accent: #eb455f;\n}\n\n::placeholder {\n  color: var(--color);\n  opacity: 0.3;\n}\n\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: var(--back);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--color);\n  border-radius: 6px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--accent);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--color);\n}\n\nbutton {\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\ndialog {\n  margin: auto;\n}\n\ninput,\ntextarea {\n  outline: none;\n  border: none;\n}\n\ninput[type='radio'] {\n  appearance: none;\n  color: var(--accent);\n  font: inherit;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid var(--color);\n  border-radius: 50%;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type='radio']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--accent);\n}\n\ninput[type='radio']:checked::before,\ninput[type='radio']:hover {\n  transform: scale(1);\n}\n\ninput[type='date'] {\n  border: 2px solid var(--accent);\n  padding: 6px;\n  margin: 6px;\n  border-radius: 6px;\n  transform: scale(1);\n  transition: transform 1s ease;\n}\n\ninput[type='date']:hover {\n  transform: scale(1.1);\n  transition: transform 0.5s ease;\n}\n\n#todo-dialog {\n  width: 600px;\n  height: 600px;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#title-input {\n  font-size: 1.3rem;\n}\n\n#description-input {\n  font-size: 1.1rem;\n  resize: none;\n}\n\n#priority-input {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#todo-submit {\n  background-color: var(--color);\n  padding: 10px;\n  border-radius: 6px;\n}\n\n#todo-submit > * {\n  color: var(--back);\n}\n\n#todo-submit:hover > * {\n  color: var(--accent);\n}\n\n#fab {\n  background-color: var(--accent);\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: scale(1);\n  transition-duration: 1s;\n  position: absolute;\n  bottom: 3%;\n  right: 3%;\n  box-shadow: rgba(26, 18, 11, 0.5) 0px 2px 4px;\n}\n\n#fab:hover {\n  transform: scale(1.5);\n  transition-duration: 1s;\n}\n\n#fab > .material-icons {\n  font-size: 4rem;\n  color: var(--back);\n}\n\n#content {\n  min-height: 100vh;\n  background-color: var(--back);\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(400px, 4fr);\n  grid-template-rows: 1fr 10fr;\n  padding: 20px;\n  column-gap: 20px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\n.dialog,\n.sidebar,\n.main {\n  border-radius: 30px;\n  box-shadow: rgba(26, 18, 11, 0.5) 0px 2px 4px;\n  border: none;\n}\n\n.main {\n  padding: 50px;\n  position: relative;\n}\n\n.dialog,\n.sidebar {\n  padding: 20px 20px;\n}\n\n.menu {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  width: 100%;\n}\n\n.menu-item {\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 6px;\n}\n\n.menu-item:hover,\n.menu-item.selected {\n  transform: scale(1.05);\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  border-radius: 6px;\n}\n\n.menu-item:hover > div,\n.menu-item.selected > div {\n  color: var(--accent);\n}\n\n.btn {\n  height: 1.5rem;\n  width: 1.5rem;\n  color: var(--color);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title-bar {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n}\n\n#new-project-btn {\n  background-color: var(--color);\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  font-size: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#new-project-btn:hover {\n  color: var(--accent);\n}\n\n#new-project-input {\n  font-size: 1.1rem;\n  width: 80%;\n}\n\n.project-input-container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  transition: opacity 0.5s;\n  opacity: 0;\n}\n\n.show {\n  transition: opacity 0.5s;\n  opacity: 1;\n}\n\n.new-project {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\n.projects,\n.todo-content {\n  width: 100%;\n}\n\n.project > .title {\n  text-align: center;\n}\n\n.project-list,\n.todo-list {\n  list-style-type: none;\n}\n\n.todo {\n  margin: 20px 0;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  display: flex;\n  gap: 10px;\n}\n\n.todo-content {\n  padding: 5px;\n}\n\n.prio-box {\n  width: 5px;\n  display: inline-block;\n}\n\n.prio-box.high {\n  background-color: red;\n}\n\n.prio-box.med {\n  background-color: orange;\n}\n\n.prio-box.low {\n  background-color: aqua;\n}\n\n.todo-list {\n  overflow-y: auto;\n  height: 400px;\n  padding-right: 10px;\n}\n\n#project-list {\n  height: 200px;\n  overflow-y: auto;\n}\n\n.project-list > li {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.project-list > li:hover {\n  border-radius: 6px;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  color: var(--accent);\n}\n\n.title,\n.description {\n  cursor: pointer;\n}\n\n.description {\n  width: 80%;\n  word-wrap: break-word;\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo-header-right {\n  display: flex;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.p-block {\n  width: 50px;\n  height: 50px;\n}\n\n.completed {\n  opacity: 50%;\n  text-decoration: line-through;\n}\n\n.todo-remove {\n  background-color: var(--accent);\n  color: var(--back);\n  display: inline-block;\n  padding: 5px;\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n}\n\n.todo-edit {\n  background-color: var(--accent);\n  color: var(--back);\n  display: inline-block;\n  padding: 5px;\n  width: 2rem;\n  height: 1.5rem;\n  text-align: center;\n}\n",""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},c=[],s=0;s<e.length;s++){var a=e[s],d=o.base?a[0]+o.base:a[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=t(i[c]);n[s].references--}for(var a=o(e,r),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=a}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e={events:{},subscribe(e,n){this.events[e]=this.events[e]||[],this.events[e].push(n)},unsubscribe(e,n){this.events[e]&&(this.events[e]=this.events[e].filter((e=>e!==n)))},publish(e,n){this.events[e]&&this.events[e].forEach((e=>{e(n)}))}};var n=t(379),o=t.n(n),r=t(795),i=t.n(r),c=t(569),s=t.n(c),a=t(565),d=t.n(a),l=t(216),p=t.n(l),u=t(589),m=t.n(u),h=t(28),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const b=n=>{const{title:t,description:o,dueDate:r,priority:i,status:c}=n,s=document.createElement("div");s.classList.add("todo"),c&&s.classList.add("completed");const a=document.createElement("div");a.classList.add("prio-box"),a.classList.add(i);const d=document.createElement("div");d.classList.add("todo-content");const l=document.createElement("h3");l.classList.add("title"),l.innerText=t;const p=document.createElement("p");p.classList.add("description"),p.innerText=o;const u=document.createElement("div");u.classList.add("todo-header-right");const m=document.createElement("span");m.classList.add("due-date"),m.innerText=r;const h=document.createElement("button");h.classList.add("todo-edit"),h.innerText="edit";const f=document.createElement("button");f.classList.add("todo-remove"),f.innerText="X";const b=document.createElement("div");return b.classList.add("todo-header"),u.append(m,h,f),b.append(l,u),d.append(b,p),s.append(a,d),h.onclick=()=>{e.publish("todoEditClicked",n)},f.onclick=()=>{e.publish("todoRemoveClicked",n)},l.addEventListener("click",(()=>{s.classList.toggle("completed"),e.publish("todoTitleClicked",n)})),s},v=document.getElementById("current-list"),x={isProject:!1,current:null,project(e){const n=((e,n)=>{const t=document.createElement("div");t.classList.add("project");const o=document.createElement("h2");if(o.classList.add("title"),o.innerText=e,0===n.length){const e=document.createElement("h3");return e.textContent="list is empty.",t.appendChild(o),t.appendChild(e),t}const r=document.createElement("ul");return r.classList.add("todo-list"),n.forEach(((e,n)=>{const t=b(e),o=document.createElement("li");o.appendChild(t),o.setAttribute("id",n),r.appendChild(o)})),t.appendChild(o),t.appendChild(r),t})(e.title,e.todos);v.textContent="",v.appendChild(n)},list(e){const n=e.map((e=>b(e)));v.textContent="",n.forEach((e=>{v.appendChild(e)}))}},g={formatDate:e=>e.toISOString().slice(0,10),currentDate(){const e=new Date;return g.formatDate(e)},nextWeek(){const e=new Date;return e.setDate(e.getDate()+7),g.formatDate(e)},isToday:e=>g.currentDate()===e,isUpcoming(e){const n=new Date;return new Date(e)>n}},y=document.getElementById("todo-dialog"),j=document.getElementById("todo-cancel"),w={show(){y.showModal()},onSubmit(e){y.addEventListener("submit",e)},close(){y.close()},getInput(){const e=y.querySelector("#title-input"),n=y.querySelector("#description-input"),t=document.querySelector('input[name="priority"]:checked'),o=y.querySelector("#duedate-input");return{title:e.value,description:n.value,priority:t.value,dueDate:o.value}},populateInput(e){const n=y.querySelector("#title-input"),t=y.querySelector("#description-input"),o=y.querySelector("#duedate-input"),r=document.querySelectorAll('input[name="priority"]');n.value=e.title,t.value=e.description,o.value=e.dueDate,r.forEach((n=>{n.value===e.priority&&(n.checked=!0)}))},clearInput(){const e=y.querySelector("#title-input"),n=y.querySelector("#description-input"),t=document.querySelector('input[name="priority"]:checked');[e,n,y.querySelector("#duedate-input")].forEach((e=>{e.value=""})),t.value=!1}};j.addEventListener("click",(()=>{w.close()}));const E=w,k={projects:[],currentProject:{},setCurrentProject(e){k.currentProject=e},addProject(n){k.projectExists(n)||(k.projects.push(n),e.publish("projectListUpdated",k.projects))},removeProject(e){const n=k.projects.findIndex((n=>n.title===e.title));-1!==n&&k.projects.splice(n,1)},getProjectList:()=>k.projects,projectExists:e=>k.projects.some((n=>n.title===e.title)),getTodayTodos(){const e=[];return k.projects.forEach((n=>{n.todos.forEach((n=>{g.isToday(n.dueDate)&&e.push(n)}))})),e},getUpcomingTodos(){const e=[];return k.projects.forEach((n=>{n.todos.forEach((n=>{g.isUpcoming(n.dueDate)&&e.push(n)}))})),e}},S=k;function L(e="untitled"){return{title:e,todos:[]}}function C(e,n){n.parent=e,e.todos.push(n)}const T=document.querySelector("#new-project-btn"),D=document.querySelector(".project-input-container"),q=D.querySelector("#new-project-input"),I=D.querySelector("#submit-project"),P=D.querySelector("#cancel-project");function A(){const n=q.value;if(""===n)return;q.value="";const t=L(n);e.publish("projectAdded",t)}const M={bindEvents(){T.addEventListener("click",(function(){D.classList.toggle("show")})),P.addEventListener("click",(function(){D.classList.remove("show")})),q.addEventListener("keydown",(e=>{"Enter"===e.key&&A()})),I.addEventListener("click",A)}};function U(e,n,t,o,r=!1,i=null){return{id:`${(new Date).getTime()}${Math.random().toString(36).substring(2,10)}`,title:e,description:n,dueDate:t,priority:o,status:r,parent:i}}const z=document.querySelector(".menu"),B={selected:z.querySelector("li"),bindEvents(){z.addEventListener("click",(n=>{const t=n.target.closest(".menu-item");t&&(B.selected.classList.remove("selected"),B.selected=t,e.publish("itemSelected",t.querySelector("div").id),t.classList.add("selected"))}))},getSelectedId:()=>B.selected.querySelector("div").id,removeSelected(){B.selected.classList.remove("selected")}},O=B,Z=L("home");x.current=Z,x.list(x.current.todos);const F=document.getElementById("fab"),N={todo:null,edit:!1,storeForEdit(e){N.todo=e,N.edit=!0}};function R(e){switch(F.style="display:none",x.isProject=!1,e){case"home":F.style="display:flex",x.current=Z,x.list(Z.todos);break;case"today":x.current=L("today"),x.current.todos=Z.todos.filter((e=>g.isToday(e.dueDate))).concat(S.getTodayTodos()),x.list(x.current.todos);break;case"upcoming":x.current=L("upcoming"),x.current.todos=Z.todos.filter((e=>g.isUpcoming(e.dueDate))).concat(S.getUpcomingTodos()),x.list(x.current.todos)}}F.addEventListener("click",(()=>{N.edit=!1,E.show()})),E.onSubmit((function(){const n=E.getInput();if(N.edit){!function(e,n){for(const t in e)t in n&&(n[t]=e[t])}(n,N.todo);const e=x.current;return void(x.isProject?x.project(e):x.list(e.todos))}const t=U(n.title,n.description,n.dueDate,n.priority);E.clearInput(),e.publish("todoAdded",t)})),e.subscribe("projectAdded",S.addProject),e.subscribe("projectListUpdated",(function(n){const t=document.getElementById("project-list");t.textContent="";const o=(e=>{const n=document.createElement("ul");return n.classList.add("project-list"),e.forEach(((e,t)=>{const o=document.createElement("li");o.innerText=e.title,o.setAttribute("id",t),n.appendChild(o)})),n})(n);o.addEventListener("click",(n=>{const t=n.target.closest("li").getAttribute("id");e.publish("projectSelected",S.projects[t])})),t.appendChild(o)})),e.subscribe("projectSelected",x.project),e.subscribe("projectSelected",S.setCurrentProject),e.subscribe("projectSelected",(e=>{x.isProject=!0,x.current=e,F.style="display:flex",O.removeSelected()})),e.subscribe("todoAdded",(function(e){const n=x.current;C(n,e),x.isProject?x.project(n):x.list(n.todos)})),e.subscribe("itemSelected",R),e.subscribe("todoTitleClicked",(function(e){e.status=!e.status})),e.subscribe("todoEditClicked",(e=>{N.storeForEdit(e),E.populateInput(e),E.show()})),e.subscribe("todoRemoveClicked",(e=>{!function(e,n){const t=e.todos.findIndex((e=>e.id===n.id));-1!==t&&e.todos.splice(t,1)}(e.parent,e),x.isProject?x.project(x.current):R(O.getSelectedId())})),(()=>{const e=L("workout"),n=U("benchpress","",g.nextWeek(),"med"),t=L("learn backflip"),o=U("learn to roll backwards on ground","perform 15 reps",g.currentDate(),"high"),r=U("learn to roll forward on ground","perform 15 reps",g.currentDate(),"high");C(e,n),C(t,o),C(t,r),S.addProject(e),S.addProject(t)})(),O.bindEvents(),M.bindEvents()})()})();