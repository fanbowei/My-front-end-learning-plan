(function(t){function e(e){for(var o,i,c=e[0],a=e[1],u=e[2],h=0,p=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,c=1;c<s.length;c++){var a=s[c];0!==n[a]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="http://fanbowei.cn:3000/vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},"03fb":function(t,e,s){"use strict";var o=s("2bfb"),n=s.n(o);n.a},1:function(t,e){},"2bfb":function(t,e,s){},4476:function(t,e,s){},"4a4c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.ischoosepopshow?s("choosepop",{attrs:{popmsg:t.popmsg,togglechoosepopshow:t.togglechoosepopshow}}):t._e(),t.ispopshow?s("popsc",{attrs:{popmsg:t.popmsg}}):t._e(),t.$root.me?s("userlist",{attrs:{isonline:t.isonline,users:t.users,touser:t.touser,chatlist:t.chatlist}}):s("chooseuser",{attrs:{userlist:t.userlist}}),t.ischat?s("chatuser",{attrs:{tochatuser:t.tochatuser,toback:t.toback,chatlist:t.chatlist}}):t._e(),s("div",{staticClass:"cz"})],1)},r=[],i=(s("96cf"),s("1da1")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popsc"},[s("div",{staticClass:"pop"},[t._v(" "+t._s(t.popmsg)+" ")])])},a=[],u={props:["popmsg"],name:"fade"},l=u,h=(s("6551"),s("2877")),p=Object(h["a"])(l,c,a,!1,null,"c159bcf4",null),m=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"choosepop"},[s("div",{staticClass:"choose"},[s("div",{staticClass:"one"},[t._v(t._s(t.popmsg))]),s("div",{staticClass:"two",on:{click:function(e){return t.closepop(!0)}}},[t._v("好的")]),s("div",{staticClass:"three",on:{click:function(e){return t.closepop(!1)}}},[t._v("不好")])])])},d=[],g={props:["popmsg","togglechoosepopshow"],methods:{closepop:function(t){this.togglechoosepopshow(!1),this.$root.$children[0].choosepopbacktrue=t}}},v=g,w=(s("81ad"),Object(h["a"])(v,f,d,!1,null,"5591367f",null)),b=w.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chooseuser"},[s("h3",[t._v("请选择要登陆的账号")]),s("ul",t._l(t.userlist,(function(e,o){return s("li",{key:o,class:{disonline:!e.isonline,online:e.isonline},on:{click:function(s){return t.chooseevent(e)}}},[s("img",{attrs:{src:e.headering+"?"+(new Date).toString()}}),s("div",{staticClass:"name"},[t._v(t._s(e.username))])])})),0)])},$=[],k=(s("d3b7"),s("8055")),y=s.n(k),C=y.a.connect("http://fanbowei.cn:3000"),O=C,x={props:["userlist"],methods:{chooseevent:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:"null"!==t.socketid?new Promise((function(t,s){e.$root.$children[0].togglechoosepopshow(!0,"当前用户已在线,是否登录");var o=setInterval((function(){0==e.$root.$children[0].ischoosepopshow&&(clearInterval(o),t())}),50)})).then((function(){return e.$root.$children[0].choosepopbacktrue?(e.$root.me=t,localStorage.chatme=JSON.stringify(t),void O.emit("login",t)):void 0})):(e.$root.me=t,localStorage.chatme=JSON.stringify(t),O.emit("login",t));case 1:case"end":return s.stop()}}),s)})))()}}},j=x,S=(s("f5dd"),Object(h["a"])(j,_,$,!1,null,"24cc15f9",null)),T=S.exports,E=s("bc3a"),P=s.n(E),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatuser"},[s("div",{staticClass:"header"},[s("div",{staticClass:"back",on:{click:t.back}},[t._v("返回")]),t._v(" "+t._s(t.tochatuser.username)+" ")]),s("div",{ref:"chatbox",staticClass:"chatlist"},t._l(t.chatlist,(function(e,o){return t.tochatuser.username==e.to.username||e.from.username==t.tochatuser.username?s("div",{key:o,staticClass:"chatitem",class:{self:t.$root.me.username==e.from.username}},[s("div",{staticClass:"header",class:{selfchatlist:t.$root.me.username==e.from.username,headerr:t.$root.me.username!==e.from.username}},[s("img",{attrs:{src:e.from.headering,alt:""}})]),s("div",{staticClass:"chatcontent"},[t._v(t._s(e.content)+" ")])]):t._e()})),0),s("div",{staticClass:"inputcom"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chatcontent,expression:"chatcontent"}],attrs:{type:"text"},domProps:{value:t.chatcontent},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendchat(e)},input:function(e){e.target.composing||(t.chatcontent=e.target.value)}}}),s("button",{on:{click:t.sendchat}},[t._v("发送")])])])},M=[],J={props:["tochatuser","toback","chatlist"],methods:{back:function(){this.toback()},sendchat:function(t){if(this.chatcontent){this.tochatuser.socketid||this.$root.$children[0].togglepopshow("对方暂时不在线");var e={from:this.$root.me,fromusername:this.$root.me.username,to:this.tochatuser,tousername:this.tochatuser.username,content:this.chatcontent,time:(new Date).getTime()};O.emit("sendmsg",e),setTimeout((function(){var t=document.querySelector(".chatlist");t&&t.scrollHeight&&(t.scrollTop=t.scrollHeight)}),100),this.chatlist.push(e),this.savestorage(),this.chatcontent=""}else this.$root.$children[0].togglepopshow("内容不能为空")},savestorage:function(){var t="chat-user-"+this.$root.me.username+"-"+this.tochatuser.username;localStorage[t]=JSON.stringify(this.chatlist)}},data:function(){return{chatcontent:""}},watch:{chatlist:function(){setTimeout((function(){var t=document.querySelector(".chatlist");t&&t.scrollHeight&&(t.scrollTop=t.scrollHeight)}),100)}},computed:{},mounted:function(){var t=document.querySelector(".chatlist");t&&t.scrollHeight&&(t.scrollTop=t.scrollHeight)}},D=J,N=(s("03fb"),Object(h["a"])(D,H,M,!1,null,"1569c15b",null)),R=N.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userlist"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"headering",class:{disonline:!t.isonline,online:t.isonline}},[null!=t.$root.me?s("img",{attrs:{src:t.$root.me.headering,alt:""}}):t._e()]),s("div",{staticClass:"headering1"},[t._v("消息")]),s("div",{staticClass:"headering2"})]),s("div",{staticClass:"users"},t._l(t.users,(function(e,o){return e.username!=t.$root.me.username?s("div",{key:o,staticClass:"useritem",on:{click:function(s){return t.chooseu(e,"click")}}},[s("div",{staticClass:"left",class:{disonline:!e.isonline,online:e.isonline}},[s("img",{attrs:{src:e.headering+"?"+(new Date).toString(),alt:""}})]),s("div",{staticClass:"right"},[s("span",{staticClass:"usernam"},[t._v(t._s(e.username))]),s("div",{staticClass:"newmsg"},[t._v(t._s(t.newmsg[o]?t.newmsg[o].from.username==t.$root.me.username?"我: ":t.newmsg[o].from.username+": ":"")+" "+t._s(t.newmsg[o]?" "+t.newmsg[o].content:""))]),s("span",{staticClass:"msg"})])]):t._e()})),0)])},I=[],z=(s("4160"),s("159b"),{props:["isonline","users","chatlist"],data:function(){return{watchu:this.users,choosemen:"",newmsg:[],time:""}},methods:{chooseu:function(t,e){this.$root.$children[0].tochatuser=t,"click"==e&&(this.$root.$children[0].ischat=!0),this.choosemen=t}},watch:{users:function(){var t=this,e=this.choosemen;this.users.forEach((function(s,o){s.username==e.username&&t.chooseu(s,"others")}))},chatlist:function(){var t=this;clearTimeout(this.time),this.time=setTimeout((function(){for(var e=function(e){t.users.forEach((function(s,o){if(t.$root.me.username!==s.username){if(t.chatlist[e].from.username==t.$root.me.username&&t.chatlist[e].to.username==s.username){if(!t.newmsg[o])return void(t.newmsg[o]=t.chatlist[e]);if(t.chatlist[e].time>t.newmsg[o].time)return void(t.newmsg[o]=t.chatlist[e])}if(t.chatlist[e].from.username==s.username&&t.chatlist[e].to.username==t.$root.me.username){if(!t.newmsg[o])return void(t.newmsg[o]=t.chatlist[e]);if(t.chatlist[e].time>t.newmsg[o].time)return void(t.newmsg[o]=t.chatlist[e])}}}))},s=t.chatlist.length-1;s>=0;s--)e(s);t.newmsg.push(""),t.newmsg.pop()}),1500)}},beforeMount:function(){}}),A=z,B=(s("ff40"),Object(h["a"])(A,q,I,!1,null,"6bd95b68",null)),F=B.exports,G={name:"App",components:{chooseuser:T,userlist:F,chatuser:R,popsc:m,choosepop:b},methods:{touser:function(t){this.tochatuser=t,this.ischat=!1},toback:function(){this.tochatuser=null,this.ischat=!1},togglepopshow:function(t){var e=this;this.popmsg=t,this.ispopshow=!0,setTimeout((function(){e.ispopshow=!1}),1500)},togglechoosepopshow:function(t,e){return this.ischoosepopshow=t,this.popmsg=e,this.choosepopbacktrue}},data:function(){return{userlist:[],isonline:!1,users:[],ischat:!1,tochatuser:{},chatlist:[],popmsg:"",ispopshow:!1,ischoosepopshow:!1,choosepopbacktrue:!1}},beforeMount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://49.233.175.166:3000/api/getuserlist/?"+new Date);case 2:s=e.sent,t.userlist=s.data;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;O.on("login",(function(e){"ok"===e.state&&(t.isonline=!0,t.togglepopshow(e.msg)),"no"===e.state&&(setTimeout((function(){location.reload()}),1e3),t.isonline=!1,t.togglepopshow(e.msg))})),O.emit("getuserlist",{}),O.on("senduserlist",(function(e){t.users=e})),O.on("usersupdata",(function(e){t.users=e,t.userlist=e})),O.on("backmsg",(function(e){t.chatlist.push(e),t.chatlist.sort((function(t,e){return t.time-e.time}))}))}},K=G,L=(s("034f"),Object(h["a"])(K,n,r,!1,null,null,null)),Q=L.exports;o["a"].config.productionTip=!1;new o["a"]({render:function(t){return t(Q)},data:{me:""}}).$mount("#app")},6551:function(t,e,s){"use strict";var o=s("8902"),n=s.n(o);n.a},"81ad":function(t,e,s){"use strict";var o=s("4476"),n=s.n(o);n.a},"85ec":function(t,e,s){},8902:function(t,e,s){},c564:function(t,e,s){},f5dd:function(t,e,s){"use strict";var o=s("4a4c"),n=s.n(o);n.a},ff40:function(t,e,s){"use strict";var o=s("c564"),n=s.n(o);n.a}});
//# sourceMappingURL=app.abd67c30.js.map