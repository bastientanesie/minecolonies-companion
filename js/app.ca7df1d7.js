(function(e){function t(t){for(var i,a,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/minecolonies-companion/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"21fa":function(e,t,n){},"22d7":function(e,t,n){"use strict";var i=n("be87"),s=n.n(i);s.a},"3e4a":function(e,t,n){"use strict";var i=n("aeff"),s=n.n(i);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",[n("h2",[e._v("Citizens")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.citizens.length<1,expression:"citizens.length < 1"}]},[e._v("Start by adding a citizen, click on the button below.")]),n("CitizenList",{directives:[{name:"show",rawName:"v-show",value:e.citizens.length>0,expression:"citizens.length > 0"}],attrs:{items:e.citizens}}),n("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.showNewCitizenForm(t)}}},[e._v("Add a citizen")])],1),e.isNewCitizenFormVisible?n("NewCitizenForm",{on:{close:function(t){e.isNewCitizenFormVisible=!1}}}):e._e(),null!==e.editedCitizen?n("EditCitizenForm",{attrs:{citizen:e.editedCitizen}}):e._e(),n("section",[n("h2",[e._v("Houses")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.houses.length<1,expression:"houses.length < 1"}]},[e._v("Start by adding a house, click on the button below.")]),n("HouseList",{directives:[{name:"show",rawName:"v-show",value:e.houses.length>0,expression:"houses.length > 0"}],attrs:{items:e.houses}}),n("button",{attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.isNewHouseFormVisible=!0}}},[e._v("Add a house")])],1),e.isNewHouseFormVisible?n("NewHouseForm",{on:{close:function(t){e.isNewHouseFormVisible=!1}}}):e._e(),e.selectedCitizenForAssignment?n("JobAssignmentModal",{attrs:{"selected-citizen":e.selectedCitizenForAssignment,citizens:e.citizens},on:{close:function(t){return e.$store.dispatch("jobs/selectToAssign",null)}}}):e._e()],1)},r=[],a=n("5530"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"citizen-list"},[e._m(0),e._l(e.items,(function(e){return n("CitizenListItem",{key:e.id,attrs:{citizen:e}})}))],2)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"citizen-list-header"},[n("li",{staticClass:"citizen-list-header-item mod-name"},[e._v("Citizen")]),n("li",{staticClass:"citizen-list-header-item mod-job"},[e._v("Job")]),n("li",{staticClass:"citizen-list-header-item mod-actions"})])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"citizen-list-item"},[n("p",{staticClass:"citizen-list-item-column mod-name"},[e._v(e._s(e.citizen.name))]),n("p",{staticClass:"citizen-list-item-column mod-job"},[e._v(e._s(e.jobTitle))]),n("div",{staticClass:"citizen-list-item-column mod-actions"},[n("button",{staticClass:"citizen-list-item-action",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$store.dispatch("jobs/selectToAssign",e.citizen.id)}}},[e._v("Assign")]),n("button",{staticClass:"citizen-list-item-action",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$store.dispatch("citizens/selectToEdit",e.citizen.id)}}},[e._v("Edit")]),n("button",{staticClass:"citizen-list-item-action",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleDelete(t)}}},[e._v("Delete")])])])},u=[],d=(n("b0c0"),n("96cf"),n("1da1")),m=n("d4ec"),f=n("bee2"),p=n("ade3"),h=function(){function e(t,n,i){Object(m["a"])(this,e),Object(p["a"])(this,"id",void 0),Object(p["a"])(this,"name",void 0),Object(p["a"])(this,"job",null),Object(p["a"])(this,"skills",{}),this.id=t,this.name=n,this.skills=i}return Object(f["a"])(e,[{key:"toJson",value:function(){return{name:this.name,job:this.job,skills:this.skills}}}],[{key:"fromJson",value:function(t){var n=new e(t.id,t.name,t.skills);return t.job&&(n.job=t.job),n}}]),e}(),b=(n("13d5"),n("dca8"),Object.freeze([{id:"baker",name:"Baker",skills:{primary:["knowledge"],secondary:["dexterity"]}},{id:"blacksmith",name:"Blacksmith",skills:{primary:["strength"],secondary:["focus"]}},{id:"builder",name:"Builder",skills:{primary:["adaptability"],secondary:["athletics"]}},{id:"chickenHerder",name:"Chicken Herder",skills:{primary:["adaptability"],secondary:["agility"]}},{id:"composter",name:"Composter",skills:{primary:["stamina"],secondary:["athletics"]}},{id:"cook",name:"Cook",skills:{primary:["adaptability"],secondary:["knowledge"]}},{id:"cowboy",name:"Cowboy",skills:{primary:["athletics"],secondary:["stamina"]}},{id:"crusher",name:"Crusher",skills:{primary:["stamina"],secondary:["strength"]}},{id:"deliveryman",name:"Deliveryman",skills:{primary:["agility"],secondary:["adaptability"]}},{id:"enchanter",name:"Enchanter",skills:{primary:["mana"],secondary:["knowledge"]}},{id:"farmer",name:"Farmer",skills:{primary:["stamina"],secondary:["athletics"]}},{id:"fisherman",name:"Fisherman",skills:{primary:["focus"],secondary:["agility"]}},{id:"florist",name:"Florist",skills:{primary:["dexterity"],secondary:["agility"]}},{id:"guard",name:"Guard",skills:{primary:["adaptability"],secondary:["stamina"]}},{id:"healer",name:"Healer",skills:{primary:["mana"],secondary:["knowledge"]}},{id:"libraryStudent",name:"Library Student",skills:{primary:["intelligence"],secondary:[]}},{id:"lumberjack",name:"Lumberjack",skills:{primary:["strength"],secondary:["focus"]}},{id:"miller",name:"Woodworker (Miller)",skills:{primary:["knowledge"],secondary:["dexterity"]}},{id:"miner",name:"Miner",skills:{primary:["strength"],secondary:["stamina"]}},{id:"ranger",name:"Ranger",skills:{primary:["agility"],secondary:["adaptability"]}},{id:"shepherd",name:"Shepherd",skills:{primary:["focus"],secondary:["strength"]}},{id:"Sifter",name:"Sifter",skills:{primary:["focus"],secondary:["strength"]}},{id:"smelter",name:"Smelter",skills:{primary:["athletics"],secondary:["strength"]}},{id:"stonemason",name:"StoneMason",skills:{primary:["creativity"],secondary:["dexterity"]}},{id:"stoneSmelter",name:"Stone Smelter",skills:{primary:["athletics"],secondary:["dexterity"]}},{id:"swineHerder",name:"Swine Herder",skills:{primary:["strength"],secondary:["athletics"]}},{id:"universityStudent",name:"University Student",skills:{primary:["knowledge"],secondary:["mana"]}},{id:"knight",name:"Knight",skills:{primary:["adaptability"],secondary:["stamina"]}},{id:"teacher",name:"Teacher",skills:{primary:["intelligence","knowledge"],secondary:["mana"]}},{id:"pupil",name:"Pupil",skills:{primary:["intelligence","knowledge"],secondary:["mana"]}},{id:"plant",name:"Planter",skills:{primary:["agility"],secondary:["dexterity"]}},{id:"mechanic",name:"Mechanic",skills:{primary:["knowledge"],secondary:["agility"]}},{id:"glassblower",name:"Glassblower",skills:{primary:["creativity"],secondary:["focus"]}}])),v=b;function y(e){return b.reduce((function(t,n){return n.id===e?n:t}),null)}function k(e){return null!==y(e)}var g={name:"CitizenListItem",props:{citizen:{type:h,required:!0}},computed:{jobTitle:function(){if(!this.citizen.job)return"Unemployed";var e=y(this.citizen.job);return e?e.name:"Unemployed"}},methods:{handleDelete:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(confirm("Are you sure you want to delete ".concat(e.citizen.name,"?"))){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$store.dispatch("citizens/remove",e.citizen.id);case 4:case"end":return t.stop()}}),t)})))()}}},_=g,z=(n("3e4a"),n("2877")),w=Object(z["a"])(_,c,u,!1,null,"091ac418",null),C=w.exports,j={name:"CitizenList",components:{CitizenListItem:C},props:{items:{type:Array,required:!0}}},S=j,x=(n("e088"),Object(z["a"])(S,o,l,!1,null,"dd6562ec",null)),O=x.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{on:{close:e.closeForm},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("New citizen")]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeForm(t)}}},[e._v("Cancel")]),n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e._v("Create citizen")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("ul",[n("li",[n("label",{attrs:{for:"citizen_name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCitizen.name,expression:"newCitizen.name"},{name:"focus",rawName:"v-focus"}],attrs:{name:"name",id:"citizen_name",type:"text"},domProps:{value:e.newCitizen.name},on:{input:function(t){t.target.composing||e.$set(e.newCitizen,"name",t.target.value)}}})]),n("li",[n("label",{attrs:{for:"citizen_job"}},[e._v("Job")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCitizen.job,expression:"newCitizen.job"}],attrs:{name:"job",id:"citizen_job"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCitizen,"job",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("Unemployed")]),e._l(e.jobs,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),n("li",[e._v("Skills: "),n("ul",e._l(e.skills,(function(t){return n("li",{key:t.id},[n("label",{attrs:{for:"citizen_skill_"+t.id}},[e._v(e._s(t.name))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCitizen.skills[t.id],expression:"newCitizen.skills[skill.id]"}],attrs:{name:"skills["+t.id+"]",id:"citizen_skill_"+t.id,type:"number",min:"1"},domProps:{value:e.newCitizen.skills[t.id]},on:{input:function(n){n.target.composing||e.$set(e.newCitizen.skills,t.id,n.target.value)}}})])})),0)])]),n("button",{staticStyle:{display:"none"},attrs:{type:"submit"}})])])},I=[],N=(n("4160"),n("498a"),n("159b"),Object.freeze([{id:"athletics",name:"Athletics"},{id:"dexterity",name:"Dexterity"},{id:"strength",name:"Strength"},{id:"agility",name:"Agility"},{id:"stamina",name:"Stamina"},{id:"mana",name:"Mana"},{id:"adaptability",name:"Adaptability"},{id:"focus",name:"Focus"},{id:"creativity",name:"Creativity"},{id:"knowledge",name:"Knowledge"},{id:"intelligence",name:"Intelligence"}])),H=N;function $(e){return N.reduce((function(t,n){return n.id===e?n:t}),null)}var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("article",{staticClass:"modal"},[n("div",{staticClass:"modal-overlay",on:{click:function(t){return t.preventDefault(),e.$emit("close")},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0)?null:e.$emit("close")}}},[n("div",{staticClass:"modal-container",on:{click:function(e){e.stopPropagation()}}},[n("h2",{staticClass:"modal-title"},[e._t("header",[e._v("Default modal header")])],2),n("div",{staticClass:"modal-body"},[e._t("default",[n("p",[e._v("Default modal content")])])],2),n("div",{staticClass:"modal-action-list"},[e._t("actions",[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$emit("close")}}},[e._v("Close")])])],2)])])])])},A=[],P={name:"Modal"},D=P,J=(n("22d7"),Object(z["a"])(D,E,A,!1,null,null,null)),L=J.exports,B={name:"NewCitizenForm",components:{Modal:L},data:function(){return{newCitizen:this.getInitialState(),skills:H,jobs:v}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.newCitizen.name&&e.newCitizen.name.trim(),n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$store.dispatch("citizens/add",{name:e.newCitizen.name,job:e.newCitizen.job,skills:e.newCitizen.skills});case 5:e.closeForm();case 6:case"end":return t.stop()}}),t)})))()},getInitialState:function(){var e={name:"",job:"",skills:{}};return H.forEach((function(t){e.skills[t.id]=1})),e},closeForm:function(){this.newCitizen=this.getInitialState(),this.$emit("close")}}},M=B,R=Object(z["a"])(M,F,I,!1,null,"c376e3c0",null),T=R.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{on:{close:e.closeForm},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Edit citizen: "+e._s(e.citizen.name))]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeForm(t)}}},[e._v("Cancel")]),n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e._v("Save changes")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("ul",[n("li",[n("label",{attrs:{for:"citizen_name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],attrs:{name:"name",id:"citizen_name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("li",[n("label",{attrs:{for:"citizen_job"}},[e._v("Job")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.job,expression:"job"}],attrs:{name:"job",id:"citizen_job"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.job=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v("Unemployed")]),e._l(e.availableJobs,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),n("li",[e._v("Skills: "),n("ul",e._l(e.availableSkills,(function(t){return n("li",{key:t.id},[n("label",{attrs:{for:"citizen_skill_"+t.id}},[e._v(e._s(t.name))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.skills[t.id],expression:"skills[skill.id]"}],attrs:{name:"skills["+t.id+"]",id:"citizen_skill_"+t.id,type:"number",min:"1"},domProps:{value:e.skills[t.id]},on:{input:function(n){n.target.composing||e.$set(e.skills,t.id,n.target.value)}}})])})),0)])]),n("button",{staticStyle:{display:"none"},attrs:{type:"submit"}})])])},V=[],U={name:"EditCitizenForm",components:{Modal:L},data:function(){return{availableSkills:H,availableJobs:v,name:this.citizen.name,job:this.citizen.job||"",skills:Object.assign({},this.citizen.skills)}},props:{citizen:{type:h,required:!0}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.name&&e.name.trim(),n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$store.dispatch("citizens/edit",{citizenId:e.citizen.id,name:e.name,job:e.job,skills:e.skills});case 5:e.closeForm();case 6:case"end":return t.stop()}}),t)})))()},closeForm:function(){this.$store.dispatch("citizens/selectToEdit",null)}}},G=U,W=Object(z["a"])(G,q,V,!1,null,"495330a0",null),K=W.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{class:"mod-fullpage",on:{close:e.closeForm},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Assignment: "+e._s(e.selectedCitizen.name))]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeForm(t)}}},[e._v("Close")])]},proxy:!0}])},[n("table",{staticClass:"job-list"},[n("thead",[n("tr",[n("th",[e._v("Job")]),n("th",[e._v("Skills")]),n("th",[e._v("Score")]),n("th",[e._v("Other workers")]),n("th",[e._v("Actions")])])]),n("tbody",e._l(e.citizenJobs,(function(t){return n("tr",{key:t.id,class:{"current-job":e.selectedCitizen.job===t.id}},[n("th",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.name))]),n("td",[e._l(t.primarySkills,(function(t){return n("div",{key:t},[e._v(e._s(e.findSkillById(t).name))])})),e._l(t.secondarySkills,(function(t){return n("div",{key:t},[e._v(e._s(e.findSkillById(t).name))])}))],2),n("td",[e._v(e._s(t.getScore()))]),n("td",e._l(e.getWorkerForJob(e.findJobById(t.id)),(function(t){return n("div",{key:t.id},[e._v(" "+e._s(t.name)+": "+e._s(t.job.getScore())+" ")])})),0),n("td",[n("button",{attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),e.assign(e.selectedCitizen.id,t.id)}}},[e._v("Assign")])])])})),0)])])},X=[],Y=(n("4de4"),n("d81d"),function(){function e(t,n,i,s){Object(m["a"])(this,e),Object(p["a"])(this,"id",void 0),Object(p["a"])(this,"name",void 0),Object(p["a"])(this,"primarySkills",void 0),Object(p["a"])(this,"secondarySkills",void 0),Object(p["a"])(this,"primarySkillLevels",void 0),Object(p["a"])(this,"secondarySkillLevels",void 0),this.id=t,this.name=n,this.primarySkills=i,this.secondarySkills=s}return Object(f["a"])(e,[{key:"setCitizenLevels",value:function(e){var t=this;this.primarySkillLevels={},this.primarySkills.forEach((function(n){if(!Object.prototype.hasOwnProperty.call(e,n))throw new Error("Citizen skills object does not contain required skill: ".concat(n));t.primarySkillLevels[n]=e[n]})),this.secondarySkills&&(this.secondarySkillLevels={},this.secondarySkills.forEach((function(n){if(!Object.prototype.hasOwnProperty.call(e,n))throw new Error("Citizen skills object does not contain required skill: ".concat(n));t.secondarySkillLevels[n]=e[n]})))}},{key:"getScore",value:function(){var e=0;for(var t in this.primarySkillLevels)Object.prototype.hasOwnProperty.call(this.primarySkillLevels,t)&&(e+=2*this.primarySkillLevels[t]);for(var n in this.secondarySkillLevels)Object.prototype.hasOwnProperty.call(this.secondarySkillLevels,n)&&(e+=parseInt(this.secondarySkillLevels[n]));return e}}],[{key:"fromJob",value:function(t){return new e(t.id,t.name,t.skills.primary,t.skills.secondary)}},{key:"compareByScore",value:function(e,t){return e.getScore()===t.getScore()?0:e.getScore()<t.getScore()}}]),e}()),Z={name:"AssignmentModal",components:{Modal:L},props:{selectedCitizen:{type:h,required:!0},citizens:{type:Array,required:!0}},data:function(){var e=this;return{citizenJobs:v.map((function(t){var n=Y.fromJob(t);return n.setCitizenLevels(e.selectedCitizen.skills),n})).sort(Y.compareByScore)}},computed:{otherCitizens:function(){var e=this;return this.citizens.filter((function(t){return t.id!==e.selectedCitizen.id}))}},methods:{closeForm:function(){this.$store.dispatch("jobs/selectToAssign",null)},findJobById:function(e){return y(e)},findSkillById:function(e){return $(e)},getWorkerForJob:function(e){return this.otherCitizens.filter((function(t){return t.job===e.id})).map((function(t){var n=Y.fromJob(e);return n.setCitizenLevels(t.skills),{id:t.id,name:t.name,job:n}}))},assign:function(e,t){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.$store.dispatch("citizens/assignJob",{citizenId:e,jobId:t});case 2:case"end":return i.stop()}}),i)})))()}}},ee=Z,te=(n("b608"),Object(z["a"])(ee,Q,X,!1,null,"10a261ee",null)),ne=te.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{on:{close:e.closeForm},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("New house")]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeForm(t)}}},[e._v("Cancel")]),n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e._v("Create house")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("ul",[n("li",[n("label",{attrs:{for:"house_name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newHouse.name,expression:"newHouse.name"},{name:"focus",rawName:"v-focus"}],attrs:{name:"name",id:"house_name",type:"text"},domProps:{value:e.newHouse.name},on:{input:function(t){t.target.composing||e.$set(e.newHouse,"name",t.target.value)}}})]),n("li",[n("label",{attrs:{for:"house_beds"}},[e._v("Beds")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newHouse.beds,expression:"newHouse.beds"}],attrs:{name:"beds",id:"house_beds",type:"number",min:"1"},domProps:{value:e.newHouse.beds},on:{input:function(t){t.target.composing||e.$set(e.newHouse,"beds",t.target.value)}}})])]),n("button",{staticStyle:{display:"none"},attrs:{type:"submit"}})])])},se=[],re={name:"NewHouseForm",components:{Modal:L},data:function(){return{newHouse:this.getInitialState()}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.newHouse.name&&e.newHouse.name.trim(),n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$store.dispatch("houses/add",{name:e.newHouse.name,beds:e.newHouse.beds});case 5:e.closeForm();case 6:case"end":return t.stop()}}),t)})))()},getInitialState:function(){return{name:"",beds:1}},closeForm:function(){this.newHouse=this.getInitialState(),this.$emit("close")}}},ae=re,oe=Object(z["a"])(ae,ie,se,!1,null,"1d920fa5",null),le=oe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"house-list"},[e._m(0),e._l(e.items,(function(t){return n("HouseListItem",{key:t.id,attrs:{house:t},on:{edit:e.onEdit}})}))],2),null!==e.editedHouse?n("EditHouseForm",{attrs:{house:e.editedHouse},on:{close:function(t){e.editedHouse=null}}}):e._e()],1)},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"house-list-header"},[n("li",{staticClass:"house-list-header-item mod-name"},[e._v("Name")]),n("li",{staticClass:"house-list-header-item mod-job"},[e._v("Beds")]),n("li",{staticClass:"house-list-header-item mod-actions"})])}],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"house-list-item"},[n("p",{staticClass:"house-list-item-column mod-name"},[e._v(e._s(e.house.name))]),n("p",{staticClass:"house-list-item-column mod-beds"},[e._v(e._s(e.house.bedCount))]),n("div",{staticClass:"house-list-item-column mod-actions"},[n("button",{staticClass:"house-list-item-action",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.$emit("edit",e.house)}}},[e._v("Edit")]),n("button",{staticClass:"house-list-item-action",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleDelete(t)}}},[e._v("Delete")])])])},me=[],fe=function(){function e(t,n,i){Object(m["a"])(this,e),Object(p["a"])(this,"id",void 0),Object(p["a"])(this,"name",void 0),Object(p["a"])(this,"bedCount",void 0),this.id=t,this.name=n,this.bedCount=i}return Object(f["a"])(e,[{key:"toJson",value:function(){return{name:this.name,beds:this.bedCount}}}],[{key:"fromJson",value:function(t){return new e(t.id,t.name,t.beds)}}]),e}(),pe={name:"HouseListItem",props:{house:{type:fe,required:!0}},methods:{handleDelete:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(confirm('Are you sure you want to delete house "'.concat(e.house.name,'"?'))){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$store.dispatch("houses/remove",e.house.id);case 4:case"end":return t.stop()}}),t)})))()}}},he=pe,be=(n("fe1f"),Object(z["a"])(he,de,me,!1,null,"3c5a6c90",null)),ve=be.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{on:{close:e.closeForm},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Edit house: "+e._s(e.house.name))]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.closeForm()}}},[e._v("Cancel")]),n("button",{staticClass:"modal-action-list-item",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e._v("Save changes")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("ul",[n("li",[n("label",{attrs:{for:"house_name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],attrs:{name:"name",id:"house_name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("li",[n("label",{attrs:{for:"house_beds"}},[e._v("Beds")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.beds,expression:"beds"}],attrs:{name:"beds",id:"house_beds",type:"number",min:"1"},domProps:{value:e.beds},on:{input:function(t){t.target.composing||(e.beds=t.target.value)}}})])]),n("button",{staticStyle:{display:"none"},attrs:{type:"submit"}})])])},ke=[],ge={name:"EditHouseForm",components:{Modal:L},data:function(){return{name:this.house.name,beds:this.house.bedCount}},props:{house:{type:fe,required:!0}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.name&&e.name.trim(),n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$store.dispatch("houses/edit",{houseId:e.house.id,name:e.name,beds:e.beds});case 5:e.closeForm();case 6:case"end":return t.stop()}}),t)})))()},closeForm:function(){this.name=null,this.beds=null,this.$emit("close")}}},_e=ge,ze=Object(z["a"])(_e,ye,ke,!1,null,"ee13d29a",null),we=ze.exports,Ce={name:"HouseList",components:{HouseListItem:ve,EditHouseForm:we},data:function(){return{editedHouse:null}},props:{items:{type:Array,required:!0}},methods:{onEdit:function(e){this.editedHouse=e}}},je=Ce,Se=(n("abdd"),Object(z["a"])(je,ce,ue,!1,null,"e1af7634",null)),xe=Se.exports,Oe=n("2f62"),Fe={name:"App",components:{EditCitizenForm:K,CitizenList:O,NewCitizenForm:T,JobAssignmentModal:ne,NewHouseForm:le,HouseList:xe},data:function(){return{isNewCitizenFormVisible:!1,isNewHouseFormVisible:!1}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(Oe["b"])("citizens",["editedCitizen"])),Object(Oe["b"])("jobs",{selectedCitizenForAssignment:function(e){return e.selectedCitizen}})),{},{houses:function(){return this.$store.getters["houses/getSorted"]},citizens:function(){return this.$store.getters["citizens/sortByName"]}}),methods:{showNewCitizenForm:function(){this.isNewCitizenFormVisible=!0}}},Ie=Fe,Ne=(n("034f"),Object(z["a"])(Ie,s,r,!1,null,null,null)),He=Ne.exports,$e=(n("7db0"),n("c975"),n("a434"),n("d3b7"),n("15fd")),Ee=n("2909"),Ae="mc-citizen-list",Pe={uid:0,save:function(e){var t=e.map((function(e){return e.toJson()}));localStorage.setItem(Ae,JSON.stringify(t))},fetchAll:function(){var e=JSON.parse(localStorage.getItem(Ae)||"[]"),t=[];return e.forEach((function(e,n){e.id=n,t.push(h.fromJson(e))})),Pe.uid=t.length,t}},De=Pe,Je={namespaced:!0,state:function(){return{citizens:De.fetchAll(),editedCitizen:null}},getters:{findById:function(e){return function(t){return e.citizens.find((function(e){return e.id===t}))}},sortByName:function(e){return Object(Ee["a"])(e.citizens).sort((function(e,t){return e.name.localeCompare(t.name)}))}},mutations:{create:function(e,t){e.citizens.push(t),De.save(e.citizens)},update:function(e,t){var n=t.citizen,i=t.payload,s=e.citizens.indexOf(n);i.name&&(n.name=i.name),i.job&&(n.job=i.job),i.skills&&(n.skills=i.skills),e.citizens[s]=n,De.save(e.citizens)},deleteAtIndex:function(e,t){e.citizens.splice(t,1),De.save(e.citizens)},setEditedCitizen:function(e,t){e.editedCitizen=t}},actions:{add:function(e,t){var n=t.name,i=t.job,s=t.skills;return new Promise((function(t){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(s[r]=parseInt(s[r]));var a=new h(De.uid++,n,s);return a.job=i&&k(i)?i:null,e.commit("create",a),t()}))},remove:function(e,t){return new Promise((function(n,i){var s=e.getters.findById(t);if(null===s)return i("Could not find citizen in database");var r=e.state.citizens.indexOf(s);return e.commit("deleteAtIndex",r),n()}))},edit:function(e,t){var n=t.citizenId,i=Object($e["a"])(t,["citizenId"]);return new Promise((function(t,s){var r=e.getters.findById(n);if(null===r)return s("Could not find citizen in database");if(i.name&&(i.name=i.name.trim()),i.skills)for(var a in i.skills)Object.prototype.hasOwnProperty.call(i.skills,a)&&(i.skills[a]=parseInt(i.skills[a]));return i.job&&(i.job=k(i.job)?i.job:null),e.commit("update",{citizen:r,payload:i}),t()}))},selectToEdit:function(e,t){return new Promise((function(n,i){if(null===t)return e.commit("setEditedCitizen",null),n();var s=e.getters.findById(t);return null===s?i("Could not find citizen in database"):(e.commit("setEditedCitizen",s),n())}))},assignJob:function(e,t){var n=t.citizenId,i=t.jobId;return new Promise((function(t,s){var r=e.getters.findById(n);return null===r?s("Could not find citizen in database"):k(i)?(e.commit("update",{citizen:r,payload:{job:i}}),t()):s('Could not find job "'.concat(i,'"'))}))}}},Le={namespaced:!0,state:function(){return{selectedCitizen:null}},mutations:{setSelectedCitizen:function(e,t){e.selectedCitizen=t}},actions:{selectToAssign:function(e,t){return new Promise((function(n,i){if(null===t)return e.commit("setSelectedCitizen",null),n();var s=e.rootGetters["citizens/findById"](t);return null===s?i("Could not find citizen in database"):(e.commit("setSelectedCitizen",s),n())}))}}},Be="mc-house-list",Me={uid:0,save:function(e){var t=e.map((function(e){return e.toJson()}));localStorage.setItem(Be,JSON.stringify(t))},fetchAll:function(){var e=JSON.parse(localStorage.getItem(Be)||"[]"),t=[];return e.forEach((function(e,n){e.id=n,t.push(fe.fromJson(e))})),Me.uid=t.length,t}},Re=Me,Te={namespaced:!0,state:function(){return{houses:Re.fetchAll()}},getters:{findById:function(e){return function(t){return e.houses.find((function(e){return e.id===t}))}},getSorted:function(e){return Object(Ee["a"])(e.houses).sort((function(e,t){return e.name.localeCompare(t.name)}))}},actions:{add:function(e,t){var n=t.name,i=t.beds;return new Promise((function(t){i=parseInt(i),n=n.trim();var s=new fe(Re.uid++,n,i);return e.commit("create",s),t()}))},edit:function(e,t){var n=t.houseId,i=Object($e["a"])(t,["houseId"]);return new Promise((function(t,s){var r=e.getters.findById(n);return null===r?s("Could not find house in database"):(i.name&&(i.name=i.name.trim()),i.beds&&(i.beds=parseInt(i.beds)),e.commit("update",{house:r,payload:i}),t())}))},remove:function(e,t){return new Promise((function(n,i){var s=e.getters.findById(t);if(null===s)return i("Could not find house in database");var r=e.state.houses.indexOf(s);return e.commit("deleteAtIndex",r),n()}))}},mutations:{create:function(e,t){e.houses.push(t),Re.save(e.houses)},update:function(e,t){var n=t.house,i=t.payload,s=e.houses.indexOf(n);i.name&&(n.name=i.name),i.beds&&(n.bedCount=i.beds),e.houses[s]=n,Re.save(e.houses)},deleteAtIndex:function(e,t){e.houses.splice(t,1),Re.save(e.houses)}}};i["a"].use(Oe["a"]);var qe=new Oe["a"].Store({strict:!0,modules:{citizens:Je,jobs:Le,houses:Te}}),Ve={inserted:function(e){e.focus()}};i["a"].directive("focus",Ve),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(He)},store:qe}).$mount("#app")},"85ec":function(e,t,n){},"94ca":function(e,t,n){},abdd:function(e,t,n){"use strict";var i=n("94ca"),s=n.n(i);s.a},aeff:function(e,t,n){},b489:function(e,t,n){},b608:function(e,t,n){"use strict";var i=n("21fa"),s=n.n(i);s.a},be87:function(e,t,n){},e088:function(e,t,n){"use strict";var i=n("b489"),s=n.n(i);s.a},ed40:function(e,t,n){},fe1f:function(e,t,n){"use strict";var i=n("ed40"),s=n.n(i);s.a}});
//# sourceMappingURL=app.ca7df1d7.js.map