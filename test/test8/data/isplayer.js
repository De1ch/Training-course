(function(){var g=void 0,h=!0,i=null,k=!1,l,m=this;
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"string"==typeof a}function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return r.apply(i,arguments)}function s(a,b){var c=a.split("."),d=m;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==g?d[e]=b:d=d[e]?d[e]:d[e]={}}function v(a,b){function c(){}c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c};var w,x,y,z,ca,da;function A(){return m.navigator?m.navigator.userAgent:i}function B(){return m.navigator}z=y=x=w=k;var C;if(C=A()){var ea=B();w=0==C.lastIndexOf("Opera",0);x=!w&&(-1!=C.indexOf("MSIE")||-1!=C.indexOf("Trident"));y=!w&&-1!=C.indexOf("WebKit");z=!w&&!y&&!x&&"Gecko"==ea.product}var D=w,E=x,F=z,G=y,H,fa=B();H=fa&&fa.platform||"";ca=-1!=H.indexOf("Mac");da=-1!=H.indexOf("Win");var ga=!!B()&&-1!=(B().appVersion||"").indexOf("X11");
function ha(){var a=m.document;return a?a.documentMode:g}var I;a:{var J="",K;if(D&&m.opera)var L=m.opera.version,J="function"==typeof L?L():L;else if(F?K=/rv\:([^\);]+)(\)|;)/:E?K=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(K=/WebKit\/(\S+)/),K)var ia=K.exec(A()),J=ia?ia[1]:"";if(E){var ja=ha();if(ja>parseFloat(J)){I=String(ja);break a}}I=J}var ka={};
function M(a){var b;if(!(b=ka[a])){b=0;for(var c=String(I).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var j=c[f]||"",n=d[f]||"",Sa=RegExp("(\\d*)(\\D*)","g"),Ta=RegExp("(\\d*)(\\D*)","g");do{var t=Sa.exec(j)||["","",""],u=Ta.exec(n)||["","",""];if(0==t[0].length&&0==u[0].length)break;b=((0==t[1].length?0:parseInt(t[1],10))<(0==u[1].length?0:parseInt(u[1],10))?-1:(0==t[1].length?0:parseInt(t[1],
10))>(0==u[1].length?0:parseInt(u[1],10))?1:0)||((0==t[2].length)<(0==u[2].length)?-1:(0==t[2].length)>(0==u[2].length)?1:0)||(t[2]<u[2]?-1:t[2]>u[2]?1:0)}while(0==b)}b=ka[a]=0<=b}return b}var la=m.document,ma=!la||!E?g:ha()||("CSS1Compat"==la.compatMode?parseInt(I,10):5);var N=Array.prototype,na=N.indexOf?function(a,b,c){return N.indexOf.call(a,b,c)}:function(a,b,c){c=c==i?0:0>c?Math.max(0,a.length+c):c;if(q(a))return!q(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
function oa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e,f;if(!(f="array"==p(d)))e=d,f=p(e),f=(e="array"==f||"object"==f&&"number"==typeof e.length)&&Object.prototype.hasOwnProperty.call(d,"callee");if(f)a.push.apply(a,d);else if(e){f=a.length;for(var j=d.length,n=0;n<j;n++)a[f+n]=d[n]}else a.push(d)}}function pa(a,b,c,d){N.splice.apply(a,qa(arguments,1))}function qa(a,b,c){return 2>=arguments.length?N.slice.call(a,b):N.slice.call(a,b,c)};function O(a,b){this.width=a;this.height=b}O.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};O.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!F&&!E||E&&E&&9<=ma||F&&M("1.9.1");E&&M("9");function ra(a,b,c){var d=F&&(ca||ga)&&M("1.9");a.style.left=P(b,d);a.style.top=P(c,d)}function sa(a,b,c){if(b instanceof O)c=b.height,b=b.width;else if(c==g)throw Error("missing height argument");a.style.width=P(b,h);a.style.height=P(c,h)}function P(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};E&&M("9");!G||M("528");F&&M("1.9b")||E&&M("8")||D&&M("9.5")||G&&M("528");F&&!M("8")||E&&M("9");function ta(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ua(){this.m=g}function va(a,b){var c=[];wa(a,b,c);return c.join("")}
function wa(a,b,c){switch(typeof b){case "string":xa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==i){c.push("null");break}if("array"==p(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],wa(a,a.m?a.m.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),xa(f,
c),c.push(":"),wa(a,a.m?a.m.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ya={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},za=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function xa(a,b){b.push('"',a.replace(za,function(a){if(a in ya)return ya[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ya[a]=e+b.toString(16)}),'"')};s("iSpring.ios.mobile.MobileAppCommand",function(a,b){this.L=a;this.K=b||[]});function Q(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}Q.prototype.BYTES_PER_ELEMENT=8;Q.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};Q.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{Q.BYTES_PER_ELEMENT=8}catch(Aa){}Q.prototype.BYTES_PER_ELEMENT=Q.prototype.BYTES_PER_ELEMENT;Q.prototype.set=Q.prototype.set;Q.prototype.toString=Q.prototype.toString;s("Float64Array",Q)};function R(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}R.prototype.BYTES_PER_ELEMENT=4;R.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};R.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(R.BYTES_PER_ELEMENT=4,R.prototype.BYTES_PER_ELEMENT=R.prototype.BYTES_PER_ELEMENT,R.prototype.set=R.prototype.set,R.prototype.toString=R.prototype.toString,s("Float32Array",R));new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function Ba(a,b,c,d){c=c||0;var e=Array.prototype.slice.call(arguments,3);setTimeout(function(){a.apply(b||i,e)},c)}function Ca(){var a;var b=window.location.search.substr(1);if(b){a={};for(var b=b.split("&"),c=0;c<b.length;++c){var d=b[c].split("=");if(2==d.length){var e=decodeURIComponent(d[0].replace(/\+/g," ")),d=decodeURIComponent(d[1].replace(/\+/g," ")),e=e.toLowerCase();a[e]=d}}}else a={};return a};var Da,Ea;Ea=Da=k;var S=A();S&&(-1!=S.indexOf("Firefox")?Da=h:-1!=S.indexOf("Camino")||-1!=S.indexOf("iPhone")||-1!=S.indexOf("iPod")||-1!=S.indexOf("iPad")||-1!=S.indexOf("Android")||-1!=S.indexOf("Chrome")||-1!=S.indexOf("Safari")&&(Ea=h));var Fa=Da,Ga=Ea;var T;var Ha=Ca().user_agent;T=Ha?Ha:A()||"";var Ia=Ca().small_screen,Ja=-1!=T.toLowerCase().indexOf("chrome"),Ka=-1!=T.toLowerCase().indexOf("android"),La,Ma=T.toLowerCase();La=-1!=Ma.indexOf("android")||-1!=Ma.indexOf("mobile")||-1!=Ma.indexOf("touch")||Ia;var Na=E&&-1!=T.toLowerCase().indexOf("touch"),Oa=Ka&&!Ja&&!Fa&&!D;
if(!Ia&&!window._ispringFullsizeSkin){var Pa=Ia?new O(document.documentElement.clientWidth,document.documentElement.clientHeight):Na?new O(screen.width*screen.deviceXDPI/screen.logicalXDPI,screen.height*screen.deviceYDPI/screen.logicalYDPI):Oa?new O(screen.width/window.devicePixelRatio,screen.height/window.devicePixelRatio):!La&&Fa||E?new O(screen.width*window.devicePixelRatio,screen.height*window.devicePixelRatio):new O(screen.width,screen.height);Math.min(Pa.width,Pa.height)};function U(){}s("ispring.events.IEventDispatcher",U);U.prototype.o=function(){};U.prototype.addHandler=U.prototype.o;U.prototype.q=function(){};U.prototype.removeHandler=U.prototype.q;function Qa(){this.v=[];this.c=[]}Qa.prototype.push=function(a,b){if(!(b in this.c)){this.c[b]=[];var c=this.v,d;d=0;for(var e=c.length,f;d<e;){var j=d+e>>1,n;n=b>c[j]?1:b<c[j]?-1:0;0<n?d=j+1:(e=j,f=!n)}d=f?d:~d;0>d&&pa(c,-(d+1),0,b)}this.c[b].push(a)};Qa.prototype.remove=function(a,b){if(b in this.c){var c=this.c[b],d=na(c,a);0<=d&&N.splice.call(c,d,1)}};function Ra(a){var b=[],c=a.c;a=a.v;for(var d=0;d<a.length;++d)oa(b,c[a[d]]);return b};function V(){this.h=new Qa}V.prototype.o=function(a,b,c){this.h.push({C:a,A:b},c||0)};V.prototype.addHandler=V.prototype.o;V.prototype.q=function(a,b,c){c=c||0;var d=c in this.h.c?this.h.c[c]:[],e=d.length,f=0;for(;f<e;++f){var j=d[f];if(j.C==a&&j.A==b){a=this.h;c in a.c&&N.splice.call(a.c[c],f,1);break}}};V.prototype.removeHandler=V.prototype.q;
V.prototype.B=function(a){for(var b=Ra(this.h),c=b.length,d=0;d<c;++d){var e=b[d];if(-1!=na(Ra(this.h),e))try{e.C.apply(e.A,arguments)}catch(f){(window._ispringDebug==h||"1"==Ca().isdebug)&&alert(f)}}};V.prototype.dispatch=V.prototype.B;function W(a,b){this.n=window.swfobject;this.n.switchOffAutoHideShow();this.G=a;this.w=b;this.u=new V}W.prototype.t="";W.prototype.load=function(a,b,c,d,e,f){if(this.n.hasFlashPlayerVersion("10.1.0")){a+=window.location.search;var j=r(this.H,this,a,b,c,d,e,f);this.w?this.w(function(){j()}):j()}else try{location.replace(this.G)}catch(n){}};W.prototype.load=W.prototype.load;W.prototype.J=function(){return this.u};W.prototype.playerPositionChangedEvent=W.prototype.J;
W.prototype.H=function(a,b,c,d,e,f){this.e&&(this.t="",this.e.innerHTML="");if("string"==typeof b)if(b=document.getElementById(b))this.e=b;else return;else this.e=b;this.e.style.position="absolute";ra(this.e,0,0);if(this.s=d===g||e===g)d=Ua()||720,e=Va()||540;this.t=c;b=document.createElement("div");b.setAttribute("id",c);this.e.appendChild(b);f===g&&(f="");f={id:c,resume:f};c={id:c,name:c,style:"position:absolute",wmodefixed:"true",wmode:Ga&&da?"window":""};this.n.embedSWF(a,b.getAttribute("id"),
d,e,"10.1.0",k,f,{allowscriptaccess:"sameDomain",allowfullscreen:h,allowFullScreenInteractive:h,salign:"lt",wmode:"opaque"},c,r(this.I,this))};W.prototype.I=function(a){this.d=a.ref;window.onresize=r(this.z,this);this.z()};
W.prototype.z=function(){var a=Ua(),b=Va();sa(this.e,a,b);if(this.s)this.d.width=a+"px",this.d.height=b+"px";else{var c=Math.max(0,Math.floor((a-this.d.width)/2)),d=Math.max(0,Math.floor((b-this.d.height)/2));ra(this.d,c,d);this.u.B(c,d);this.e.style.overflow=a>=this.d.width&&b>=this.d.height?"hidden":"auto"}E&&9>parseInt(I,10)&&(this.d.style.border="1px solid transparent",Ba(function(){this.d.style.border=""},this))};
function Ua(){return window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetWidth?document.documentElement.offsetWidth:document.body.offsetWidth}function Va(){return window.innerHeight?window.innerHeight:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetHeight?document.documentElement.offsetHeight:document.body.offsetHeight};function Wa(){};function Xa(a){this.j=a;this.D=new ua}l=Xa.prototype;l.j=i;l.D=i;l.set=function(a,b){b!==g?this.j.set(a,va(this.D,b)):this.j.remove(a)};l.get=function(a){a=this.j.get(a);if(a!==i)try{return ta(a)}catch(b){throw"Storage: Invalid value was encountered";}};l.remove=function(a){this.j.remove(a)};function X(){}v(X,Wa);X.prototype.set=function(){};X.prototype.get=function(){return i};X.prototype.remove=function(){};function Y(){}v(Y,Wa);function Ya(a,b){this.k=a;this.l=b+"::"}v(Ya,Y);l=Ya.prototype;l.k=i;l.l="";l.set=function(a,b){this.k.set(this.l+a,b)};l.get=function(a){return this.k.get(this.l+a)};l.remove=function(a){this.k.remove(this.l+a)};function Z(a){this.g=a}v(Z,Y);Z.prototype.p=function(){if(!this.g)return k;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),h}catch(a){return k}};Z.prototype.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};Z.prototype.get=function(a){a=this.g.getItem(a);if(!q(a)&&a!==i)throw"Storage mechanism: Invalid value was encountered";return a};Z.prototype.remove=function(a){this.g.removeItem(a)};function Za(){var a=i;try{a=window.localStorage||i}catch(b){}this.g=a}v(Za,Z);function $a(a,b){this.f={};this.a=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof $a){ab(a);d=a.a.concat();ab(a);e=[];for(c=0;c<a.a.length;c++)e.push(a.f[a.a[c]])}else{var c=[],f=0;for(d in a)c[f++]=d;d=c;c=[];f=0;for(e in a)c[f++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}l=$a.prototype;l.i=0;l.F=0;
l.remove=function(a){return Object.prototype.hasOwnProperty.call(this.f,a)?(delete this.f[a],this.i--,this.F++,this.a.length>2*this.i&&ab(this),h):k};function ab(a){if(a.i!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.i!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}
l.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};l.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.i++,this.a.push(a),this.F++);this.f[a]=b};function bb(a,b){if(E&&!(E&&9<=ma)){$||($=new $a);this.b=$.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),$.set(a,this.b));this.r=a;try{this.b.load(this.r)}catch(c){this.b=i}}}v(bb,Y);var cb={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$=i;l=bb.prototype;l.b=i;l.r=i;
function db(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return cb[a]})}l.p=function(){return!!this.b};l.set=function(a,b){this.b.setAttribute(db(a),b);eb(this)};l.get=function(a){a=this.b.getAttribute(db(a));if(!q(a)&&a!==i)throw"Storage mechanism: Invalid value was encountered";return a};l.remove=function(a){this.b.removeAttribute(db(a));eb(this)};function eb(a){try{a.b.save(a.r)}catch(b){throw"Storage mechanism: Quota exceeded";}};var fb=i;function gb(){if(!fb){var a=new Za;if(!(a=a.p()?new Ya(a,"ispring"):i))a=new bb("ispring"),a=a.p()?a:i;fb=new Xa(a||new X)}return fb};function hb(a){W.call(this,"data/flash-required.html",a)}v(hb,W);s("ispring.quiz.loader.FlashQuizLoader",hb);s("ispring.quiz.flashapi.closeWindow",function(){try{Oa||(window.open("","_self",""),window.close())}catch(a){}return h});s("ispring.quiz.flashapi.loadState",function(a){a=gb().get(a);return a!==g?a:i});s("ispring.quiz.flashapi.saveState",function(a,b){var c=gb();try{c.set(a,b)}catch(d){}return h});})();
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();