var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function d(t){f=t}const p=[],h=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}let v=!1;const _=new Set;function x(){if(!v){v=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),w(e.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,v=!1,_.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const k=new Set;function A(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(c,s,i,u,l,p,h=[-1]){const $=f;d(c);const m=s.props||{},g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let b=!1;if(g.ctx=i?i(c,m,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&A(c,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();s.intro&&((v=c.$$.fragment)&&v.i&&(k.delete(v),v.i(_))),function(t,n,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),y((()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(y)}(c,s.target,s.anchor),x()}var v,_;d($)}function C(e){let n,o,r,c,f,d,p;return{c(){n=i("main"),o=i("h1"),r=u("Hello "),c=u(e[0]),f=u("!"),d=u(" "),p=i("div"),p.innerHTML='<h1 class="svelte-1e9puaw">Apache Cordova ❤️ Svelte</h1> \n    <div id="deviceready" class="blink"><p class="event listening">Connecting to Device</p> \n      <p class="event received">Device is Ready</p></div>',l(o,"class","svelte-1e9puaw"),l(p,"class","app"),l(n,"class","svelte-1e9puaw")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),s(n,o),s(o,r),s(o,c),s(o,f),s(n,d),s(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&a(n)}}}function j(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,j,C,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
