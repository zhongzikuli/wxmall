!function(t){function i(i,s){var h=i[a],l=h&&n[h];if(void 0===s)return l||e(i);if(l){if(s in l)return l[s];var c=r(s);if(c in l)return l[c]}return o.call(t(i),s)}function e(i,e,o){var h=i[a]||(i[a]=++t.uuid),l=n[h]||(n[h]=s(i));return void 0!==e&&(l[r(e)]=o),l}function s(i){var e={};return t.each(i.attributes||h,function(i,s){0==s.name.indexOf("data-")&&(e[r(s.name.replace("data-",""))]=t.zepto.deserializeValue(s.value))}),e}var n={},o=t.fn.data,r=t.camelCase,a=t.expando="Zepto"+ +new Date,h=[];t.fn.data=function(s,n){return void 0===n?t.isPlainObject(s)?this.each(function(i,n){t.each(s,function(t,i){e(n,t,i)})}):0 in this?i(this[0],s):void 0:this.each(function(){e(this,s,n)})},t.fn.removeData=function(i){return"string"==typeof i&&(i=i.split(/\s+/)),this.each(function(){var e=this[a],s=e&&n[e];s&&t.each(i||s,function(t){delete s[i?r(this):t]})})},["remove","empty"].forEach(function(i){var e=t.fn[i];t.fn[i]=function(){var t=this.find("*");return"remove"===i&&(t=t.add(this)),t.removeData(),e.call(this)}})}(window.Zepto),!function(t){var i={};i.cache={},t.tpl=function(t,e,s){var n=/[^\w\-\.:]/.test(t)?function(t,i){var e,s=[],o=[];for(e in t)s.push(e),o.push(t[e]);return new Function(s,n.code).apply(i||t,o)}:i.cache[t]=i.cache[t]||this.get(document.getElementById(t).innerHTML);return n.code=n.code||"var $parts=[]; $parts.push('"+t.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/(^|%>)[^\t]*/g,function(t){return t.replace(/'/g,"\\'")}).replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("$parts.push('")+"'); return $parts.join('');",e?n(e,s):n},t.adaptObject=function(i,e,s,n,o,r){var a=i;if("string"!=typeof s){var h=t.extend({},e,"object"==typeof s&&s),l=!1;t.isArray(a)&&a.length&&"script"==t(a)[0].nodeName.toLowerCase()?(a=t(t.tpl(a[0].innerHTML,h)).appendTo("body"),l=!0):t.isArray(a)&&a.length&&""==a.selector?(a=t(t.tpl(a[0].outerHTML,h)).appendTo("body"),l=!0):t.isArray(a)||(a=t(t.tpl(n,h)).appendTo("body"),l=!0)}return a.each(function(){var i=t(this),n=i.data("fz."+r);n||i.data("fz."+r,n=new o(this,t.extend({},e,"object"==typeof s&&s),l)),"string"==typeof s&&n[s]()})}}(window.Zepto),!function(t){function i(){return!1}function e(i){return t.adaptObject(this,n,i,s,o,"dialog")}var s='<div class="ui-dialog"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4><%=title%></h4><div><%=content%></div></div></div><div class="ui-dialog-ft ui-btn-group"><% for (var i = 0; i < button.length; i++) { %><% if (i == select) { %><button type="button" data-role="button"  class="select" id="dialogButton<%=i%>"><%=button[i]%></button><% } else { %><button type="button" data-role="button" id="dialogButton<%=i%>"><%=button[i]%></div><% } %><% } %></div></div></div>',n={title:"",content:"",button:["确认"],select:0,allowScroll:!1,callback:function(){}},o=function(i,e,s){this.option=t.extend(n,e),this.element=t(i),this._isFromTpl=s,this.button=t(i).find('[data-role="button"]'),this._bindEvent(),this.toggle()};o.prototype={_bindEvent:function(){var i=this;i.button.on("tap",function(){var e=t(i.button).index(t(this));i.option.callback("button",e);var s=t.Event("dialog:action");s.index=e,i.element.trigger(s),i.hide.apply(i)})},toggle:function(){this.element.hasClass("show")?this.hide():this.show()},show:function(){var e=this;e.element.trigger(t.Event("dialog:show")),e.element.addClass("show"),this.option.allowScroll&&e.element.on("touchmove",i)},hide:function(){var e=this;e.element.trigger(t.Event("dialog:hide")),e.element.off("touchmove",i),e.element.removeClass("show"),e._isFromTpl&&e.element.remove()}},t.fn.dialog=t.dialog=e}(window.Zepto),!function(t){function i(i){return t.adaptObject(this,s,i,e,n,"loading")}var e='<div class="ui-loading-block show"><div class="ui-loading-cnt"><i class="ui-loading-bright"></i><p><%=content%></p></div></div>',s={content:"加载中..."},n=function(i,e,n){this.element=t(i),this._isFromTpl=n,this.option=t.extend(s,e),this.show()};n.prototype={show:function(){var i=t.Event("loading:show");this.element.trigger(i),this.element.show()},hide:function(){var i=t.Event("loading:hide");this.element.trigger(i),this.element.remove()}},t.fn.loading=t.loading=i}(window.Zepto),function(t){function i(i,e){this.wrapper="string"==typeof i?t(i)[0]:i,this.options={startX:0,startY:0,scrollY:!0,scrollX:!1,directionLockThreshold:5,momentum:!0,duration:300,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,eventPassthrough:!0,freeScroll:!1,bindToWrapper:!0,resizePolling:60,disableMouse:!1,disableTouch:!1,disablePointer:!1,tap:!0,click:!1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var n in e)this.options[n]=e[n];if(this.options.role||this.options.scrollX!==!1||(this.options.eventPassthrough="horizontal"),"slider"===this.options.role){if(this.options.scrollX=!0,this.options.scrollY=!1,this.options.momentum=!1,this.scroller=t(".ui-slider-content")[0],t(this.scroller.children[0]).addClass("current"),this.currentPage=0,this.count=this.scroller.children.length,this.scroller.style.width=this.count+"00%",this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count,this.options.indicator){for(var o='<ul class="ui-slider-indicators">',n=1;n<=this.count;n++)o+=1===n?'<li class="current">'+n+"</li>":"<li>"+n+"</li>";o+="</ul>",t(this.wrapper).append(o),this.indicator=t(".ui-slider-indicators")[0]}}else"tab"===this.options.role?(this.options.scrollX=!0,this.options.scrollY=!1,this.options.momentum=!1,this.scroller=t(".ui-tab-content")[0],this.nav=t(".ui-tab-nav")[0],t(this.scroller.children[0]).addClass("current"),t(this.nav.children[0]).addClass("current"),this.currentPage=0,this.count=this.scroller.children.length,this.scroller.style.width=this.count+"00%",this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count):this.scroller=this.wrapper.children[0];if(this.scrollerStyle=this.scroller.style,this.translateZ=s.hasPerspective&&this.options.HWCompositing?" translateZ(0)":"",this.options.useTransition=s.hasTransition&&this.options.useTransition,this.options.useTransform=s.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransform===!1&&(this.scroller.style.position="relative"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable(),this.options.autoplay){var r=this;this.options.interval=this.options.interval||2e3,this.options.flag=setTimeout(function(){r._autoplay.apply(r)},r.options.interval)}}var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},s=function(){function t(t){return s!==!1&&(""===s?t:s+t.charAt(0).toUpperCase()+t.substr(1))}var i={},e=document.createElement("div").style,s=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],s=0,n=i.length;n>s;s++)if(t=i[s]+"ransform",t in e)return i[s].substr(0,i[s].length-1);return!1}();i.getTime=Date.now||function(){return(new Date).getTime()},i.extend=function(t,i){for(var e in i)t[e]=i[e]},i.addEvent=function(t,i,e,s){t.addEventListener(i,e,!!s)},i.removeEvent=function(t,i,e,s){t.removeEventListener(i,e,!!s)},i.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t},i.momentum=function(t,i,e,s,n,o){var r,a,h=t-i,l=Math.abs(h)/e;return o=void 0===o?6e-4:o,r=t+l*l/(2*o)*(0>h?-1:1),a=l/o,s>r?(r=n?s-n/2.5*(l/8):s,h=Math.abs(r-t),a=h/l):r>0&&(r=n?n/2.5*(l/8):0,h=Math.abs(t)+r,a=h/l),{destination:Math.round(r),duration:a}};var n=t("transform");return i.extend(i,{hasTransform:n!==!1,hasPerspective:t("perspective")in e,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:t("transition")in e}),i.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),i.extend(i.style={},{transform:n,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin"),transitionProperty:t("transitionProperty")}),i.offset=function(t){for(var i=-t.offsetLeft,e=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,e-=t.offsetTop;return{left:i,top:e}},i.preventDefaultException=function(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1},i.extend(i.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),i.extend(i.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,e=.4;return 0===t?0:1==t?1:e*Math.pow(2,-10*t)*Math.sin(2*(t-i/4)*Math.PI/i)+1}}}),i.tap=function(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},i.click=function(t){var i,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||(i=document.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,e.dispatchEvent(i))},i}();i.prototype={_init:function(){this._initEvents()},_initEvents:function(t){var i=t?s.removeEvent:s.addEvent,e=this.options.bindToWrapper?this.wrapper:window;i(window,"orientationchange",this),i(window,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(e,"mousemove",this),i(e,"mousecancel",this),i(e,"mouseup",this)),s.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,s.prefixPointerEvent("pointerdown"),this),i(e,s.prefixPointerEvent("pointermove"),this),i(e,s.prefixPointerEvent("pointercancel"),this),i(e,s.prefixPointerEvent("pointerup"),this)),s.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(e,"touchmove",this),i(e,"touchcancel",this),i(e,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this),"tab"===this.options.role&&(i(this.nav,"touchend",this),i(this.nav,"mouseup",this),i(this.nav,"pointerup",this))},refresh:function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var t=window.getComputedStyle(this.wrapper,null),i=t["padding-top"].replace(/[^-\d.]/g,""),e=t["padding-bottom"].replace(/[^-\d.]/g,""),n=t["padding-left"].replace(/[^-\d.]/g,""),o=t["padding-right"].replace(/[^-\d.]/g,""),r=window.getComputedStyle(this.scroller,null),a=r["margin-top"].replace(/[^-\d.]/g,""),h=r["margin-bottom"].replace(/[^-\d.]/g,""),l=r["margin-left"].replace(/[^-\d.]/g,""),c=r["margin-right"].replace(/[^-\d.]/g,"");this.scrollerWidth=this.scroller.offsetWidth+parseInt(n)+parseInt(o)+parseInt(l)+parseInt(c),this.scrollerHeight=this.scroller.offsetHeight+parseInt(i)+parseInt(e)+parseInt(a)+parseInt(h),("slider"===this.options.role||"tab"===this.options.role)&&(this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count,this.scrollerWidth=this.scrollWidth),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=s.offset(this.wrapper),this.resetPosition()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}},_start:function(t){if(!(1!=s.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&s.eventType[t.type]!==this.initiated)){!this.options.preventDefault||s.isBadAndroid||s.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,e=t.touches?t.touches[0]:t;if(this.initiated=s.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=s.getTime(),this.options.useTransition&&this.isInTransition&&"slider"!==this.options.role&&"tab"!==this.options.role?(this.isInTransition=!1,i=this.getComputedPosition(),this._translate(Math.round(i.x),Math.round(i.y))):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.options.autoplay){var n=this;clearTimeout(this.options.flag),this.options.flag=setTimeout(function(){n._autoplay.apply(n)},n.options.interval)}event.stopPropagation()}},_move:function(i){if(this.enabled&&s.eventType[i.type]===this.initiated){this.options.preventDefault&&i.preventDefault();var e,n,o,r,a=i.touches?i.touches[0]:i,h=a.pageX-this.pointX,l=a.pageY-this.pointY,c=s.getTime();if(this.pointX=a.pageX,this.pointY=a.pageY,this.distX+=h,this.distY+=l,o=Math.abs(this.distX),r=Math.abs(this.distY),!(c-this.endTime>300&&10>o&&10>r)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>r+this.options.directionLockThreshold?"h":r>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("tab"===this.options.role&&t(this.scroller).children("li").height("auto"),"vertical"==this.options.eventPassthrough)i.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)i.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}h=this.hasHorizontalScroll?h:0,l=this.hasVerticalScroll?l:0,e=this.x+h,n=this.y+l,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+h/3:e>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+l/3:n>0?0:this.maxScrollY),this.directionX=h>0?-1:0>h?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved=!0,this._translate(e,n),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(i){if(this.enabled&&s.eventType[i.type]===this.initiated){this.options.preventDefault&&!s.preventDefaultException(i.target,this.options.preventDefaultException)&&i.preventDefault();var e,n,o=(i.changedTouches?i.changedTouches[0]:i,s.getTime()-this.startTime),r=Math.round(this.x),a=Math.round(this.y),h=Math.abs(r-this.startX),l=(Math.abs(a-this.startY),0),c="";if(this.isInTransition=0,this.initiated=0,this.endTime=s.getTime(),this.resetPosition(this.options.bounceTime))return void("tab"===this.options.role&&t(this.scroller.children[this.currentPage]).siblings("li").height(0));if(this.scrollTo(r,a),this.moved||(this.options.tap&&1===s.eventType[i.type]&&s.tap(i,this.options.tap),this.options.click&&s.click(i)),this.options.momentum&&300>o&&(e=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:r,duration:0},n=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:a,duration:0},r=e.destination,a=n.destination,l=Math.max(e.duration,n.duration),this.isInTransition=1),r!=this.x||a!=this.y)return(r>0||r<this.maxScrollX||a>0||a<this.maxScrollY)&&(c=s.ease.quadratic),void this.scrollTo(r,a,l,c);if("tab"===this.options.role&&t(event.target).closest("ul").hasClass("ui-tab-nav")){t(this.nav).children().removeClass("current"),t(event.target).addClass("current");var p=this.currentPage;this.currentPage=t(event.target).index(),t(this.scroller).children().height("auto"),this._execEvent("beforeScrollStart",p,this.currentPage)}("slider"===this.options.role||"tab"===this.options.role)&&(30>h?this.scrollTo(-this.itemWidth*this.currentPage,0,this.options.bounceTime,this.options.bounceEasing):r-this.startX<0?(this._execEvent("beforeScrollStart",this.currentPage,this.currentPage+1),this.scrollTo(-this.itemWidth*++this.currentPage,0,this.options.bounceTime,this.options.bounceEasing)):r-this.startX>=0&&(this._execEvent("beforeScrollStart",this.currentPage,this.currentPage-1),this.scrollTo(-this.itemWidth*--this.currentPage,0,this.options.bounceTime,this.options.bounceEasing)),"tab"===this.options.role&&t(this.scroller.children[this.currentPage]).siblings("li").height(0),this.indicator&&h>=30?(t(this.indicator).children().removeClass("current"),t(this.indicator.children[this.currentPage]).addClass("current")):this.nav&&h>=30&&(t(this.nav).children().removeClass("current"),t(this.nav.children[this.currentPage]).addClass("current")),t(this.scroller).children().removeClass("current"),t(this.scroller.children[this.currentPage]).addClass("current"))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd",this.currentPage)))},destroy:function(){this._initEvents(!0)},resetPosition:function(t){var i=this.x,e=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?e=0:this.y<this.maxScrollY&&(e=this.maxScrollY),(i!=this.x||e!=this.y)&&(this.scrollTo(i,e,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var e=this._events[t].indexOf(i);e>-1&&this._events[t].splice(e,1)}},_execEvent:function(t){if(this._events[t]){var i=0,e=this._events[t].length;if(e)for(;e>i;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollTo:function(t,i,e,n){n=n||s.ease.circular,this.isInTransition=this.options.useTransition&&e>0,!e||this.options.useTransition&&n.style?(("slider"===this.options.role||"tab"===this.options.role)&&(e=this.options.duration,this.scrollerStyle[s.style.transitionProperty]=s.style.transform),this.scrollerStyle[s.style.transitionTimingFunction]=n.style,this._transitionTime(e),this._translate(t,i)):this._animate(t,i,e,n.fn)},scrollToElement:function(t,i,e,n,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=s.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,e===!0&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),n===!0&&(n=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=n||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,i=void 0===i||null===i||"auto"===i?Math.max(Math.abs(this.x-r.left),Math.abs(this.y-r.top)):i,this.scrollTo(r.left,r.top,i,o)}},_transitionTime:function(t){t=t||0,this.scrollerStyle[s.style.transitionDuration]=t+"ms",!t&&s.isBadAndroid&&(this.scrollerStyle[s.style.transitionDuration]="0.001s")},_translate:function(t,i){this.options.useTransform?this.scrollerStyle[s.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i},getComputedPosition:function(){var t,i,e=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=e[s.style.transform].split(")")[0].split(", "),t=+(e[12]||e[4]),i=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),i=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_animate:function(t,i,n,o){function r(){var u,d,f,v=s.getTime();return v>=p?(a.isAnimating=!1,a._translate(t,i),void(a.resetPosition(a.options.bounceTime)||a._execEvent("scrollEnd",this.currentPage))):(v=(v-c)/n,f=o(v),u=(t-h)*f+h,d=(i-l)*f+l,a._translate(u,d),void(a.isAnimating&&e(r)))}var a=this,h=this.x,l=this.y,c=s.getTime(),p=c+n;this.isAnimating=!0,r()},_autoplay:function(){var i=this,e=i.currentPage;i.currentPage=i.currentPage>=i.count-1?0:++i.currentPage,i._execEvent("beforeScrollStart",e,i.currentPage),"tab"===this.options.role&&(t(this.scroller).children().height("auto"),document.body.scrollTop=0),i.scrollTo(-i.itemWidth*i.currentPage,0,i.options.bounceTime,i.options.bounceEasing),i.indicator?(t(i.indicator).children().removeClass("current"),t(i.indicator.children[i.currentPage]).addClass("current"),t(i.scroller).children().removeClass("current"),t(i.scroller.children[i.currentPage]).addClass("current")):i.nav&&(t(i.nav).children().removeClass("current"),t(i.nav.children[i.currentPage]).addClass("current"),t(i.scroller).children().removeClass("current"),t(i.scroller.children[i.currentPage]).addClass("current")),i.options.flag=setTimeout(function(){i._autoplay.apply(i)},i.options.interval)}},window.fz=window.fz||{},window.frozen=window.frozen||{},window.fz.Scroll=window.frozen.Scroll=i,"function"==typeof define&&define(function(t,e,s){s.exports=i})}(window.Zepto),!function(t){function i(i){return t.adaptObject(this,s,i,e,n,"tips")}var e='<div class="ui-poptips ui-poptips-<%=type%>"><div class="ui-poptips-cnt"><i></i><%=content%></div></div>',s={content:"",stayTime:1e3,type:"info",callback:function(){}},n=function(i,e,n){var o=this;this.element=t(i),this._isFromTpl=n,this.elementHeight=t(i).height(),this.option=t.extend(s,e),t(i).css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){t(i).css({"-webkit-transition":"all .5s"}),o.show()},20)};n.prototype={show:function(){var i=this;i.element.trigger(t.Event("tips:show")),this.element.css({"-webkit-transform":"translateY(0px)"}),i.option.stayTime>0&&setTimeout(function(){i.hide()},i.option.stayTime)},hide:function(){var i=this;i.element.trigger(t.Event("tips:hide")),this.element.css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){i._isFromTpl&&i.element.remove()},500)}},t.fn.tips=t.tips=i}(window.Zepto);