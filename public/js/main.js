!function(e){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"}),e(function(){var t=e(window),n=e("body"),r=e("#wrapper"),i=e("#header"),o=e("#footer"),a=e("#languages"),s=e("#main"),l=s.children("article")
if(n.addClass("is-loading"),t.on("load",function(){window.setTimeout(function(){n.removeClass("is-loading")},100)}),e("form").placeholder(),skel.vars.IEVersion<12){var u
t.on("resize.flexbox-fix",function(){clearTimeout(u),u=setTimeout(function(){r.prop("scrollHeight")>t.height()?r.css("height","auto"):r.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix")}var c=i.children("nav"),d=c.find("li")
d.length%2==0&&(c.addClass("use-middle"),d.eq(d.length/2).addClass("is-middle"))
var f=325,p=!1
if(s._show=function(e,r){var u=l.filter("#"+e)
if(0!=u.length){if(p||void 0!==r&&r===!0)return n.addClass("is-switching"),n.addClass("is-article-visible"),l.removeClass("active"),i.hide(),o.hide(),a.hide(),s.show(),u.show(),u.addClass("active"),p=!1,void setTimeout(function(){n.removeClass("is-switching")},r?1e3:0)
if(p=!0,n.hasClass("is-article-visible")){var c=l.filter(".active")
c.removeClass("active"),setTimeout(function(){c.hide(),u.show(),setTimeout(function(){u.addClass("active"),t.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){p=!1},f)},25)},f)}else n.addClass("is-article-visible"),setTimeout(function(){i.hide(),o.hide(),a.hide(),s.show(),u.show(),setTimeout(function(){u.addClass("active"),t.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){p=!1},f)},25)},f)}},s._hide=function(e){var r=l.filter(".active")
if(n.hasClass("is-article-visible")){if(void 0!==e&&e===!0&&history.pushState(null,null,"#"),p)return n.addClass("is-switching"),r.removeClass("active"),r.hide(),s.hide(),o.show(),i.show(),a.show(),n.removeClass("is-article-visible"),p=!1,n.removeClass("is-switching"),void t.scrollTop(0).triggerHandler("resize.flexbox-fix")
p=!0,r.removeClass("active"),setTimeout(function(){r.hide(),s.hide(),o.show(),i.show(),a.show(),setTimeout(function(){n.removeClass("is-article-visible"),t.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){p=!1},f)},25)},f)}},l.each(function(){var t=e(this)
e('<div class="close">Close</div>').appendTo(t).on("click",function(){location.hash=""}),t.on("click",function(e){e.stopPropagation()})}),n.on("click",function(e){n.hasClass("is-article-visible")&&s._hide(!0)}),t.on("keyup",function(e){switch(e.keyCode){case 27:n.hasClass("is-article-visible")&&s._hide(!0)}}),t.on("hashchange",function(e){""==location.hash||"#"==location.hash?(e.preventDefault(),e.stopPropagation(),s._hide()):l.filter(location.hash).length>0&&(e.preventDefault(),e.stopPropagation(),s._show(location.hash.substr(1)))}),"scrollRestoration"in history)history.scrollRestoration="manual"
else{var h=0,m=0,g=e("html,body")
t.on("scroll",function(){h=m,m=g.scrollTop()}).on("hashchange",function(){t.scrollTop(h)})}s.hide(),l.hide(),""!=location.hash&&"#"!=location.hash&&t.on("load",function(){s._show(location.hash.substr(1),!0)})})}(jQuery)
