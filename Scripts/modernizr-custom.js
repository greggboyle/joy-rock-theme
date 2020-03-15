/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-cssall-cssanimations-objectfit-mq-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),h.push((o?"":"no-")+s.join("-"))}}function i(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?S.className.baseVal=t:S.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,u,d,f="modernizr",c=a("div"),p=s();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:f+(r+1),c.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=d,S.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,o,i){function s(){f&&(delete j.style,delete j.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var f,c,p,m,v,y=["modernizr","tspan","samp"];!j.style&&y.length;)f=!0,j.modElem=a(y.shift()),j.style=j.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],v=j.style[m],d(m,"-")&&(m=u(m)),j.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{j.style[m]=o}catch(b){}if(j.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+w.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+P.join(a+" ")+a).split(" "),c(s,t,n))}function b(e,t,r){return y(e,n,n,t,r)}var h=[],C=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=t.documentElement;Modernizr.addTest("cssall","all"in S.style);var T="svg"===S.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n});var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=k;var _="Moz O ms Webkit",w=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=w;var z=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=z;var P=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=P;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var j={style:E.elem.style};Modernizr._q.unshift(function(){delete j.style}),x.testAllProps=y,x.testAllProps=b,Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("appearance",b("appearance")),Modernizr.addTest("backdropfilter",b("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return b("backgroundClip","text")}),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",b("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",b("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0));var N=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=u(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("backgroundblendmode",N("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(h),delete x.addTest,delete x.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);
