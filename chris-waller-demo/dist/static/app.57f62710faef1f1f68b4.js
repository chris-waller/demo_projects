!function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={2:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(t){return a.p+"static/"+({0:"DynamicPage",1:"NoMatch"}[t]||t)+".57f62710faef1f1f68b4.js"}(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([488,4,3]),n()}({186:function(t,e,n){var r=n(485);t.exports=d,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var f=n[0],p=n[1],d=n.index;if(c+=t.slice(a,d),a=d+f.length,p)c+=p[1];else{var h=t[a],v=n[2],m=n[3],y=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var O=null!=v&&null!=h&&h!==v,x="+"===b||"*"===b,E="?"===b||"*"===b,P=n[2]||l,j=y||g;r.push({name:m||i++,prefix:v||"",delimiter:P,optional:E,repeat:x,partial:O,asterisk:!!w,pattern:j?s(j):w?".*":"[^"+u(P)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",f(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";e.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),v=a.slice(-h.length)===h;return o||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+h+"|$)",l(new RegExp("^"+a,f(n)),e)}function d(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],e,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},188:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(83),a=n(491),c=n(493),u=n(492),s=n(46),l=n(185);e.a=function(t){var e=t.children;return o.a.createElement(a.a,null,o.a.createElement(i.b,{to:"/"},o.a.createElement(c.a,{as:"h1",className:l.h1},"webpack-for-react")),e,o.a.createElement(u.a,null),o.a.createElement("p",{className:l.pullRight},"Made with ",o.a.createElement(s.a,{name:"heart",color:"red"})," by Esau Silva"))}},23:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},287:function(t,e,n){"use strict";var r=n(131),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&t(e,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(e),v=u(n),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(n,y);try{s(e,y,g)}catch(t){}}}}return e}},288:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(n){function r(){c(this,r);var t=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.state={ready:!0},t}return s(r,n),o(r,[{key:"componentWillMount",value:function(){var e=this,n=t.delay,r=t.onRender,o=parseInt(n,10);o&&o>0?(this.setState({ready:!1}),this.timeout=setTimeout((function(){e.setState({ready:!0}),r&&"function"==typeof r&&r()}),n)):this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.ready?a.default.createElement(e,e.props):null}}]),r}(i.Component)}}},289:function(t,e){t.exports=!1},290:function(t,e,n){"use strict";t.exports=n(487)},35:function(t,e,n){"use strict";e.a=function(t,e){if(!t)throw new Error("Invariant failed")}},37:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var r=new Map,o=function(t){0},i={marks:{}},a=function(t,e){void 0===t&&(t=i),o(),e&&e.length&&e.forEach((function(e){return t.marks[e]=!0}))},c=function(t,e){r.set(JSON.stringify(t),{mark:t,loadable:e})}}).call(this,n(89))},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return A})),n.d(e,"c",(function(){return v})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return h}));var r=n(23);function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var a=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),u=e&&o(e),s=c||u;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=a.length;p>=0;p--){var d=a[p];"."===d?i(a,p):".."===d?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var h=a.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};function c(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var u=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=c(e),o=c(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1},s=n(35);function l(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(t,e,n,o){var i;"string"==typeof t?(i=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(i=Object(r.a)({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function m(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&u(t.state,e.state)}function y(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var g=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,e){e(window.confirm(t))}function w(){try{return window.history.state||{}}catch(t){return{}}}function O(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e,n=window.history,o=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=t,c=a.forceRefresh,u=void 0!==c&&c,f=a.getUserConfirmation,m=void 0===f?b:f,O=a.keyLength,x=void 0===O?6:O,E=t.basename?d(l(t.basename)):"";function P(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return E&&(i=p(i,E)),v(i,r,n)}function j(){return Math.random().toString(36).substr(2,x)}var C=y();function k(t){Object(r.a)($,t),$.length=n.length,C.notifyListeners($.location,$.action)}function A(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||S(P(t.state))}function R(){S(P(w()))}var T=!1;function S(t){if(T)T=!1,k();else{C.confirmTransitionTo(t,"POP",m,(function(e){e?k({action:"POP",location:t}):function(t){var e=$.location,n=_.indexOf(e.key);-1===n&&(n=0);var r=_.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(T=!0,U(o))}(t)}))}}var L=P(w()),_=[L.key];function M(t){return E+h(t)}function U(t){n.go(t)}var I=0;function N(t){1===(I+=t)&&1===t?(window.addEventListener("popstate",A),i&&window.addEventListener("hashchange",R)):0===I&&(window.removeEventListener("popstate",A),i&&window.removeEventListener("hashchange",R))}var H=!1;var $={length:n.length,action:"POP",location:L,createHref:M,push:function(t,e){var r=v(t,e,j(),$.location);C.confirmTransitionTo(r,"PUSH",m,(function(t){if(t){var e=M(r),i=r.key,a=r.state;if(o)if(n.pushState({key:i,state:a},null,e),u)window.location.href=e;else{var c=_.indexOf($.location.key),s=_.slice(0,c+1);s.push(r.key),_=s,k({action:"PUSH",location:r})}else window.location.href=e}}))},replace:function(t,e){var r=v(t,e,j(),$.location);C.confirmTransitionTo(r,"REPLACE",m,(function(t){if(t){var e=M(r),i=r.key,a=r.state;if(o)if(n.replaceState({key:i,state:a},null,e),u)window.location.replace(e);else{var c=_.indexOf($.location.key);-1!==c&&(_[c]=r.key),k({action:"REPLACE",location:r})}else window.location.replace(e)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var e=C.setPrompt(t);return H||(N(1),H=!0),function(){return H&&(H=!1,N(-1)),e()}},listen:function(t){var e=C.appendListener(t);return N(1),function(){N(-1),e()}}};return $}var x={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+f(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:f,decodePath:l},slash:{encodePath:l,decodePath:l}};function E(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function P(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function j(t){window.location.replace(E(window.location.href)+"#"+t)}function C(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,i=void 0===o?b:o,a=n.hashType,c=void 0===a?"slash":a,u=t.basename?d(l(t.basename)):"",f=x[c],m=f.encodePath,w=f.decodePath;function O(){var t=w(P());return u&&(t=p(t,u)),v(t)}var C=y();function k(t){Object(r.a)($,t),$.length=e.length,C.notifyListeners($.location,$.action)}var A=!1,R=null;function T(){var t,e,n=P(),r=m(n);if(n!==r)j(r);else{var o=O(),a=$.location;if(!A&&(e=o,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(R===h(o))return;R=null,function(t){if(A)A=!1,k();else{C.confirmTransitionTo(t,"POP",i,(function(e){e?k({action:"POP",location:t}):function(t){var e=$.location,n=M.lastIndexOf(h(e));-1===n&&(n=0);var r=M.lastIndexOf(h(t));-1===r&&(r=0);var o=n-r;o&&(A=!0,U(o))}(t)}))}}(o)}}var S=P(),L=m(S);S!==L&&j(L);var _=O(),M=[h(_)];function U(t){e.go(t)}var I=0;function N(t){1===(I+=t)&&1===t?window.addEventListener("hashchange",T):0===I&&window.removeEventListener("hashchange",T)}var H=!1;var $={length:e.length,action:"POP",location:_,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=E(window.location.href)),n+"#"+m(u+h(t))},push:function(t,e){var n=v(t,void 0,void 0,$.location);C.confirmTransitionTo(n,"PUSH",i,(function(t){if(t){var e=h(n),r=m(u+e);if(P()!==r){R=e,function(t){window.location.hash=t}(r);var o=M.lastIndexOf(h($.location)),i=M.slice(0,o+1);i.push(e),M=i,k({action:"PUSH",location:n})}else k()}}))},replace:function(t,e){var n=v(t,void 0,void 0,$.location);C.confirmTransitionTo(n,"REPLACE",i,(function(t){if(t){var e=h(n),r=m(u+e);P()!==r&&(R=e,j(r));var o=M.indexOf(h($.location));-1!==o&&(M[o]=e),k({action:"REPLACE",location:n})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var e=C.setPrompt(t);return H||(N(1),H=!0),function(){return H&&(H=!1,N(-1)),e()}},listen:function(t){var e=C.appendListener(t);return N(1),function(){N(-1),e()}}};return $}function k(t,e,n){return Math.min(Math.max(t,e),n)}function A(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,i=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,u=e.keyLength,s=void 0===u?6:u,l=y();function f(t){Object(r.a)(w,t),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=k(c,0,i.length-1),m=i.map((function(t){return v(t,void 0,"string"==typeof t?p():t.key||p())})),g=h;function b(t){var e=k(w.index+t,0,w.entries.length-1),r=w.entries[e];l.confirmTransitionTo(r,"POP",n,(function(t){t?f({action:"POP",location:r,index:e}):f()}))}var w={length:m.length,action:"POP",location:m[d],index:d,entries:m,createHref:g,push:function(t,e){var r=v(t,e,p(),w.location);l.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=w.index+1,n=w.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),f({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=v(t,e,p(),w.location);l.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(w.entries[w.index]=r,f({action:"REPLACE",location:r}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var e=w.index+t;return e>=0&&e<w.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return w}},48:function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},485:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},486:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},487:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r;function i(t){return i.warnAboutHMRDisabled&&(i.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),o.Children.only(t.children)}i.warnAboutHMRDisabled=!1;var a=function t(){return t.shouldWrapWithAppContainer?function(t){return function(e){return o.createElement(i,null,o.createElement(t,e))}}:function(t){return t}};a.shouldWrapWithAppContainer=!1;e.AppContainer=i,e.hot=a,e.areComponentsEqual=function(t,e){return t===e},e.setConfig=function(){},e.cold=function(t){return t},e.configureComponent=function(){}},488:function(t,e,n){"use strict";n.r(e);var r=n(290),o=n(0),i=n.n(o),a=n(73),c=n.n(a),u=n(83),s=n(63);var l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}var p=n(59),d=n(37),h=o.createContext(d.b),v=(h.Consumer,n(61)),m=[],y=[],g=new WeakMap,b=new Map,w=function(t){return y=y.filter((function(e){return e!==t}))},O=function(t){return String(t).replace(/(["'])/g,"`").replace(/\/\*([^\*]*)\*\//gi,"")};function x(t,e){void 0===e&&(e=!0);var n,r=t,o=function(){return Promise.all([r()].concat(m.map((function(t){return t()})))).then((function(t){return t[0]}))},i=O(r),a=(i.match(/`imported_(.*?)_component`/g)||[]).map((function(t){return t&&(t.match(/`imported_(.*?)_component`/i)||[])[1].replace(/['"]/g,"")})),c={mark:a,resolution:new Promise((function(t){n=t})),done:!1,ok:!1,error:null,payload:void 0,promise:void 0,isLoading:function(){return!!this.promise&&!this.done},reset:function(){this.done=!1,this.ok=!0,this.payload=void 0,this.promise=void 0},replaceImportFunction:function(t){r=t},then:function(t,e){return this.promise?this.promise.then(t,e):(e&&e(),Promise.reject())},loadIfNeeded:function(){return this.error&&this.reset(),this.promise||this.load(),this.promise},tryResolveSync:function(t){if(this.done){var e=t(this.payload);return{then:function(t){return t(e),Promise.resolve(e)}}}return this.loadIfNeeded().then(t)},reload:function(){return this.promise?(this.promise=void 0,this.load()):Promise.resolve()},load:function(){var t,e=this;if(!this.promise){var r=this.promise=o().then((function(t){return e.done=!0,e.ok=!0,e.payload=t,e.error=null,w(r),n(t),t}),(function(t){throw e.done=!0,e.ok=!1,e.error=t,w(r),t}));t=r,y.push(t)}return this.promise}};return a&&a.length?(b.set(i,c),Object(d.a)(a,c)):console.warn("react-imported-component: no mark found at",r,"Please check babel plugin or macro setup, as well as imported-component's limitations. See https://github.com/theKashey/react-imported-component/issues/147"),v.a&&e&&c.load(),c}var E=!1;function P(t){if("resolution"in t)return t;if(g.has(t))return g.get(t);var e=O(t);if(b.has(e)){var n=b.get(e);return n.replaceImportFunction(t),n}var r=x(t);return g.set(t,r),r}var j=function(t){return t.default?t.default:t};function C(t,e){var n=function(){return e({})};t.loadIfNeeded().then(n,n)}var k=new WeakMap;function A(t,e){void 0===e&&(e={});var n=Object(o.useContext)(h),r=Object(o.useState)((function(){return!1!==e.import&&(!1!==e.track&&Object(d.c)(n,t.mark),t.loadIfNeeded()),{}}))[1];Object(o.useEffect)((function(){!1!==e.import&&(!1!==e.track&&Object(d.c)(n,t.mark),C(t,r))}),[t,e.import]),v.a&&!E&&t.isLoading()&&console.error("react-imported-component: trying to render a component which is not ready. You should `await whenComponentsReady()`?");var i=Object(o.useCallback)((function(){t&&(t.reset(),r({}),C(t,r))}),[t]);return{loadable:t,retry:i,update:r}}function R(t,e,n){void 0===e&&(e=j),void 0===n&&(n={});var r=Object(o.useState)(P(t))[0],i=Object(o.useRef)(!1),a=A(r,n),c=a.loadable,u=a.retry,s=a.update;return Object(o.useEffect)((function(){i.current&&function(t,e){var n={};k.set(t,n),setTimeout((function(){k.get(t)===n&&t.reload().then(e)}),16)}(c,(function(){return p.a.updateOnReload&&s({})})),i.current=!0}),["hot"]),c.error?{error:c.error,loadable:c,retry:u}:c.done?{imported:e(c.payload),loadable:c,retry:u}:{loading:c.isLoading(),loadable:c,retry:u}}function T(t){var e=R(t.loadable),n=e.loading,r=e.error,i=e.loadable,a=e.imported,c=e.retry;if(n&&t.async)throw i.resolution;if("render"in t&&t.render)return t.render(a,{loading:n,error:r},t.forwardProps);if(a)return o.createElement(a,l({},t.forwardProps,{ref:t.forwardRef}));if(n){if(t.async)throw i.resolution;return t.LoadingComponent?o.createElement(t.LoadingComponent,l({},t.forwardProps)):null}if(r){if(console.error("react-imported-component",r),p.a.rethrowErrors&&setTimeout((function(){throw r})),t.ErrorComponent)return o.createElement(t.ErrorComponent,l({retryImport:c,error:r},t.forwardProps));throw r}return null}function S(t,e){void 0===e&&(e={});var n=P(t),r=o.forwardRef((function(t,r){var i=t.importedProps,a=void 0===i?{}:i,c=f(t,["importedProps"]),u=l({},e,a);return o.createElement(T,{loadable:n,LoadingComponent:u.LoadingComponent,ErrorComponent:u.ErrorComponent,onError:u.onError,render:u.render,async:u.async,forwardProps:c||{},forwardRef:r})}));return r.preload=function(){return n.load().catch((function(){return{}})),n.resolution},r.done=n.resolution,r}var L,_=S,M=n(188),U=function(){return i.a.createElement(M.a,null,i.a.createElement("p",null,"Hello World of React and Webpack! Hot load"),i.a.createElement("p",null,i.a.createElement(u.b,{to:"/dynamic"},"Navigate to Dynamic Page")))},I=n(530),N=n(288),H=n.n(N)()({delay:300})((function(){return i.a.createElement(I.a,{active:!0,size:"massive"})})),$=_((function(){return n.e(0).then(n.bind(null,532))}),{LoadingComponent:H}),W=_((function(){return n.e(1).then(n.bind(null,533))}),{LoadingComponent:H});L=function(){return i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:U}),i.a.createElement(s.a,{exact:!0,path:"/dynamic",component:$}),i.a.createElement(s.a,{component:W}))))},c.a.render(i.a.createElement(r.AppContainer,null,i.a.createElement(L,null)),document.getElementById("root"))},59:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=n(61),o={hot:(!!t).hot,SSR:r.a,rethrowErrors:!1,fileFilter:function(t){return 0!==t.indexOf("http")},updateOnReload:!1}}).call(this,n(486)(t))},61:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(289),o=n.n(r).a||"undefined"==typeof window},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return P}));var r=n(48),o=n(0),i=n.n(o),a=n(6),c=n.n(a),u=n(39),s=n(75),l=n.n(s),f=n(180),p=n.n(f);function d(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var h=i.a.createContext||function(t,e){var n,r,i="__create-react-context-"+p()()+"__",a=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=d(e.props.value),e}l()(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(o.Component);a.childContextTypes=((n={})[i]=c.a.object.isRequired,n);var u=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}l()(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return u.contextTypes=((r={})[i]=c.a.object,r),{Provider:a,Consumer:u}},v=n(35),m=n(23),y=n(186),g=n.n(y),b=(n(131),n(76)),w=(n(287),function(t){var e=h();return e.displayName=t,e}("Router")),O=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(w.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},e}(i.a.Component);i.a.Component;i.a.Component;var x={},E=0;function P(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=x[n]||(x[n]={});if(r[t])return r[t];var o=[],i={regexp:g()(t,o,e),keys:o};return E<1e4&&(r[t]=i,E++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),p=t===l;return i&&!p?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:p,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var j=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(w.Consumer,null,(function(e){e||Object(v.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?P(n.pathname,t.props):e.match,o=Object(m.a)({},e,{location:n,match:r}),a=t.props,c=a.children,u=a.component,s=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(w.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?i.a.createElement(u,o):s?s(o):null:"function"==typeof c?c(o):null)}))},e}(i.a.Component);function C(t){return"/"===t.charAt(0)?t:"/"+t}function k(t,e){if(!t)return e;var n=C(t);return 0!==e.pathname.indexOf(n)?e:Object(m.a)({},e,{pathname:e.pathname.substr(n.length)})}function A(t){return"string"==typeof t?t:Object(u.e)(t)}function R(t){return function(){Object(v.a)(!1)}}function T(){}i.a.Component;var S=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(w.Consumer,null,(function(e){e||Object(v.a)(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?P(o.pathname,Object(m.a)({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);i.a.useContext},76:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return y}));var r=n(63),o=n(48),i=n(0),a=n.n(i),c=n(39),u=(n(6),n(23)),s=n(76),l=n(35),f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=Object(c.a)(e.props),e}return Object(o.a)(e,t),e.prototype.render=function(){return a.a.createElement(r.b,{history:this.history,children:this.props.children})},e}(a.a.Component);a.a.Component;var p=function(t,e){return"function"==typeof t?t(e):t},d=function(t,e){return"string"==typeof t?Object(c.c)(t,null,null,e):t},h=function(t){return t},v=a.a.forwardRef;void 0===v&&(v=h);var m=v((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,i=Object(s.a)(t,["innerRef","navigate","onClick"]),c=i.target,l=Object(u.a)({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=h!==v&&e||n,a.a.createElement("a",l)}));var y=v((function(t,e){var n=t.component,o=void 0===n?m:n,i=t.replace,c=t.to,f=t.innerRef,y=Object(s.a)(t,["component","replace","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var n=t.history,r=d(p(c,t.location),t.location),s=r?n.createHref(r):"",m=Object(u.a)({},y,{href:s,navigate:function(){var e=p(c,t.location);(i?n.replace:n.push)(e)}});return h!==v?m.ref=e||f:m.innerRef=f,a.a.createElement(o,m)}))})),g=function(t){return t},b=a.a.forwardRef;void 0===b&&(b=g);b((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,f=t.activeStyle,h=t.className,v=t.exact,m=t.isActive,w=t.location,O=t.strict,x=t.style,E=t.to,P=t.innerRef,j=Object(s.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var n=w||t.location,i=d(p(E,n),n),s=i.pathname,C=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=C?Object(r.e)(n.pathname,{path:C,exact:v,strict:O}):null,A=!!(m?m(k,n):k),R=A?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(h,c):h,T=A?Object(u.a)({},x,{},f):x,S=Object(u.a)({"aria-current":A&&o||null,className:R,style:T,to:i},j);return g!==b?S.ref=e||P:S.innerRef=P,a.a.createElement(y,S)}))}))}});
//# sourceMappingURL=app.57f62710faef1f1f68b4.js.map