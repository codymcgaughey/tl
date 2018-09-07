!function(e){e.fn.navList=function(){var t=e(this)
return $a=t.find("a"),b=[],$a.each(function(){var t=e(this),n=Math.max(0,t.parents("li").length-1),r=t.attr("href"),i=t.attr("target")
b.push('<a class="link depth-'+n+'"'+(void 0!==i&&""!=i?' target="'+i+'"':"")+(void 0!==r&&""!=r?' href="'+r+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),b.join("")},e.fn.panel=function(t){if(0==this.length)return i
if(this.length>1){for(var n=0;n<this.length;n++)e(this[n]).panel(t)
return i}var r,i=e(this),o=e("body"),a=e(window),s=i.attr("id")
return r=e.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:i,visibleClass:"visible"},t),"jQuery"!=typeof r.target&&(r.target=e(r.target)),i._hide=function(e){r.target.hasClass(r.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),r.target.removeClass(r.visibleClass),window.setTimeout(function(){r.resetScroll&&i.scrollTop(0),r.resetForms&&i.find("form").each(function(){this.reset()})},r.delay))},i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),r.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",function(t){var n=e(this),o=n.attr("href"),a=n.attr("target")
o&&"#"!=o&&""!=o&&o!="#"+s&&(t.preventDefault(),t.stopPropagation(),i._hide(),window.setTimeout(function(){"_blank"==a?window.open(o):window.location.href=o},r.delay+10))})),i.on("touchstart",function(e){i.touchPosX=e.originalEvent.touches[0].pageX,i.touchPosY=e.originalEvent.touches[0].pageY}),i.on("touchmove",function(e){if(null!==i.touchPosX&&null!==i.touchPosY){var t=i.touchPosX-e.originalEvent.touches[0].pageX,n=i.touchPosY-e.originalEvent.touches[0].pageY,o=i.outerHeight(),a=i.get(0).scrollHeight-i.scrollTop()
if(r.hideOnSwipe){var s=!1,l=20,u=50
switch(r.side){case"left":s=l>n&&n>-1*l&&t>u
break
case"right":s=l>n&&n>-1*l&&-1*u>t
break
case"top":s=l>t&&t>-1*l&&n>u
break
case"bottom":s=l>t&&t>-1*l&&-1*u>n}if(s)return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}(i.scrollTop()<0&&0>n||a>o-2&&o+2>a&&n>0)&&(e.preventDefault(),e.stopPropagation())}}),i.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),i.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),r.target.removeClass(r.visibleClass)}),o.on("click touchend",function(e){i._hide(e)}),o.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),r.target.toggleClass(r.visibleClass)}),r.hideOnEscape&&a.on("keydown",function(e){27==e.keyCode&&i._hide(e)}),i},e.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return e(this)
if(0==this.length)return n
if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder()
return n}var n=e(this)
return n.find("input[type=text],textarea").each(function(){var t=e(this);(""==t.val()||t.val()==t.attr("placeholder"))&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this)
t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this)
t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")}),n.find("input[type=password]").each(function(){var t=e(this),n=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"))
""!=t.attr("id")&&n.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&n.attr("name",t.attr("name")+"-polyfill-field"),n.addClass("polyfill-placeholder").val(n.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():n.hide(),t.on("blur",function(e){e.preventDefault()
var n=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]")
""==t.val()&&(t.hide(),n.show())}),n.on("focus",function(e){e.preventDefault()
var t=n.parent().find("input[name="+n.attr("name").replace("-polyfill-field","")+"]")
n.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),n.val("")})}),n.on("submit",function(){n.find("input[type=text],input[type=password],textarea").each(function(t){var n=e(this)
n.attr("name").match(/-polyfill-field$/)&&n.attr("name",""),n.val()==n.attr("placeholder")&&(n.removeClass("polyfill-placeholder"),n.val(""))})}).on("reset",function(t){t.preventDefault(),n.find("select").val(e("option:first").val()),n.find("input,textarea").each(function(){var t,n=e(this)
switch(n.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break
case"password":n.val(n.attr("defaultValue")),t=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]"),""==n.val()?(n.hide(),t.show()):(n.show(),t.hide())
break
case"checkbox":case"radio":n.attr("checked",n.attr("defaultValue"))
break
case"text":case"textarea":n.val(n.attr("defaultValue")),""==n.val()&&(n.addClass("polyfill-placeholder"),n.val(n.attr("placeholder")))
break
default:n.val(n.attr("defaultValue"))}})}),n},e.prioritize=function(t,n){var r="__prioritize"
"jQuery"!=typeof t&&(t=e(t)),t.each(function(){var t,i=e(this),o=i.parent()
if(0!=o.length)if(i.data(r)){if(n)return
t=i.data(r),i.insertAfter(t),i.removeData(r)}else{if(!n)return
if(t=i.prev(),0==t.length)return
i.prependTo(o),i.data(r,t)}})}}(jQuery)
