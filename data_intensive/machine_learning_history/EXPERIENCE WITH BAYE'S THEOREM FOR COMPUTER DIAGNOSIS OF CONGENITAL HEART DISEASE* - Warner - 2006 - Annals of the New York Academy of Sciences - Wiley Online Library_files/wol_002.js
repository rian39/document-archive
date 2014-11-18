if(!$("html").hasClass("js_en")){$("html").addClass("js_en")
}var proxied=((location.hostname.indexOf("onlinelibrary.wiley.com")!=-1)&&(location.hostname.substring(location.hostname.indexOf("onlinelibrary.wiley.com")+23)==""))?false:true;
var wol=this.wol||{};
$(function(){$.ol={};
$(".publicationTypes #allTypes,.subjectsAndAccess #allTopics, #allAsist").searchSelectAll();
$(document).globalMessaging();
wol.rightsLink.init();
if($("#accordion").length>0){$("#accordion").accordion({header:"h2"})
}$(".contextTrigger").contextFilter();
$("#additionalInformation").slider();
$("#login #loggedIn .profile>li").profileMenu();
$("#issueTocGroups, #titles, #publications, .articles, .books, .contentAlerts").selectAll();
$(".emrw-table").mrwTables();
$(".jumpList").jumpList();
$("#loginEmail, #loginPassword").loginLabels();
if($("#pdf").length){$(window).resize(function(){$("#pdf").children("iframe").height(($(window).height()-$("#pdfHeader").height())-2)
});
$(window).triggerHandler("resize")
}if(!$("#mailUpdates").attr("checked")){$("#mailUpdates").parents("fieldset").next().slideUp()
}$("#mailUpdates").click(function(){if($(this).attr("checked")){$(this).parents("fieldset").next().slideDown()
}else{$(this).parents("fieldset").next().slideUp()
}});
$(".issuesInYear").issueTree();
$("#browseBySubject").subjectTree();
$("#globalMenu ul li:nth-child(3)").addResourceMenu();
$.ol.cleanAJAXResponse=function(g){if(g.indexOf("<body>")>-1){return/<body[^>]*>([\S\s]*?)<\/body>/.exec(g,"ig")[1]
}else{return g
}};
if(!$("#mailPromotionRequested").attr("checked")){$("#mailPromotionRequested").parents("fieldset").next().hide()
}$("#mailPromotionRequested").click(function(){if($(this).attr("checked")){$(this).parents("fieldset").next("fieldset").slideDown()
}else{$(this).parents("fieldset").next("fieldset").slideUp()
}return true
});
$.ol.textSlider=function(g,h){$(g).each(function(){var j=$(this),i=j.height();
if(i>=200){j.css({height:"20em",overflow:"hidden",position:"relative",marginBottom:"0.5em"});
$("<a/>",{text:h[0]}).toggle(function(){$(this).text(h[1]);
j.height(i);
return false
},function(){$(this).text(h[0]);
j.height("20em");
return false
}).insertAfter(j).wrap('<p id="showContent">')
}})
};
$.ol.textSlider("#bookHome #homepageContent",["More about this book summary","Less about this book summary"]);
$.ol.textSlider("#bookHomeSeries #homepageContent",["More about this book series","Less about this book series"]);
if($("#mrwHome").length>0){$.ol.textSlider("#mrwHome #homepageContent:has(~ #rightColumn, ~ #leftColumn)",["More about this book","Less about this book"])
}($.ol.keyStrokeCollector=function(){$(document).keydown(function(h){var g={ctrl:(h.ctrlKey)?true:false,shift:(h.shiftKey)?true:false,alt:(h.altKey)?true:false,key:h.keyCode};
$(this).data("keyDown",g)
});
$(document).keyup(function(g){$(this).removeData("keyDown")
})
})();
$(".decisionTree").dynamicSelectGroup();
$(".report_usage").dynamicReportScreen();
if($("#searchByCitation").length){$("#scope").append('<option value="byCitation">By Citation</option>');
$("#scope").change(function(){if($(this).find("option:selected").text()=="By Citation"){$("#searchByCitation").slideDown(function(){$("#searchText, #searchSiteSubmit").attr("disabled","disabled")
})
}else{$("#searchByCitation").slideUp(function(){$("#searchText, #searchSiteSubmit").removeAttr("disabled")
})
}});
$("#searchByCitation p.error").length&&$("#scope").val("byCitation").triggerHandler("change")
}$("#resourcesMenu ul").bgiframe({top:20});
$("#issueToc .figZoom img").load(function(){var g=$(this);
g.css("visibility","visible");
if(g.height()>300){g.height(300)
}if(g.width()>300){g.css("float","none")
}}).each(function(){$(this).attr("src",this.src)
});
$("#fulltext .firstPageContainer img").load(function(){$(this).removeAttr("height").removeAttr("width");
if($(this).width()>752){$(this).width(752)
}}).each(function(){if(this.complete||(jQuery.browser.msie&&parseInt(jQuery.browser.version)==6)){$(this).triggerHandler("load")
}});
$("#fulltext a.movingMolecule").each(function(){$(this).click(function(){window.open($(this).attr("href"),$(this).index(),"width=1024,height=790,scrollbars=yes");
return false
})
});
if($("meta[name='citation_journal_title']").length||($("#pdf").length&&$("#productTitle").length)){var c=($("#pdf").length)?$("#productTitle").attr("href").split("(ISSN)")[1]:$("meta[name='citation_issn']").attr("content");
var a=($("#pdf").length)?window.location.href.split("/doi/")[1].split("/pdf")[0]:$("meta[name='citation_doi']").attr("content");
$.getJSON("http://www.deepdyve.com/rental-link?docId="+a+"&fieldName=journal_doi&journal="+c+"&affiliateId=wiley&format=jsonp&callback=?",function(h){if(h.status==="ok"){var j=$('<p><a class="rentalLink">Rent this article at DeepDyve</a></p>');
var i=$('<div id="deepDyve" class="topLeftRoundCornerNew"><h2>Rent this article through DeepDyve</h2><p>View a read-only copy of this article through our partner DeepDyve, the largest online rental service for scientific and scholarly content. DeepDyve will safeguard user privacy and your information will not be sold to a third party.</p><p>Read more about our pilot program making a portfolio of Biotechnology journals available through DeepDyve.</p><p><a href="http://eu.wiley.com/WileyCDA/PressRelease/pressReleaseId-84017.html">Press Release</a></p></div>');
j.find("a").attr("href",h.url);
i.insertAfter("#accessDenied .access .login");
j.clone(true).insertAfter("#deepDyve p:first");
var g=$('<li><span style="color: red; padding-right: 0.4em; font-weight: bold;">NEW!</span> </li>');
j.find("a").clone(true).appendTo(g);
g.appendTo("#accessDeniedOptions")
}})
}$("#downloadStatisticalData form").live("submit",function(){var g=$(this).find("#tAndCs"),h=$(this).find("label[for='tAndCs']");
if(!g.is(":checked")){if($(this).find(".error").length==0){$('<label class="error" for="tAndCs">Please agree to the terms and conditions.</label>').insertAfter(h)
}return false
}});
$("#usageData").loadDataTable();
$("#usageReports .announcement").unEscapeHtml(["strong"]);
$(".societyEAlerts").tabToggle();
if(window.s){$("body").delegate(".moduleFragment a","click",function(){var h=$("#productTitle").text(),g=$(this).text().replace(/\s+/g," ");
g=toUnicode(g);
wol.analytics.trackLink($(this),{linkTrackVars:"events",linkTrackEvents:"event8",events:"event8",eVars:{eVar3:h,eVar7:g}})
})
}$("#currentHoldings .success, #currentHoldings .error ").requestCSV();
$("#payPerViewPaymentDetails").processPaymentDetail();
var d=$("#promosAndTools .titleTools");
if(d.length){var e=(document.location.protocol==="https:")?"https://":"http://",f=e+"s7.addthis.com/js/250/addthis_widget.js#async=1";
window.addthis_config={services_compact:"digg,diigo,citeulike,googlereader,www.mendeley.com,stumbleupon,facebook,twitter,delicious,researchgate,reddit",services_custom:{name:"mendeley",url:"http://www.mendeley.com?url={{url}}&title={{title}}",icon:"http://www.mendeley.com/favicon.ico"},data_track_clickback:true};
window.addthis_share={title:document.title.replace(/\-/g,"")};
$.getScript(f,function(){if(window.addthis){addthis.addEventListener("addthis.menu.share",function(){$("#at15s,#at16lb").css({display:"none",zIndex:"1"})
});
d.socialBookmarks();
addthis.init()
}})
}var b=window.institutions||[];
$("#institutionalAndAthensLogin #institutionName").autocomplete({source:b,minLength:2})
});
function toUnicode(a){var e="";
for(var b=0;
b<a.length;
b++){var d=a.charAt(b);
var c=a.charCodeAt(b);
if(c>"0xfff"){e+="\\u"+c.toString(16)
}else{if(c>"0xff"){e+="\\u0"+c.toString(16)
}else{if(c>"0x7f"){e+="\\u00"+c.toString(16)
}else{if(c<32){switch(d){case"\b":e+="\\b";
break;
case"\n":e+="\\n";
break;
case"\t":e+="\\t";
break;
case"\f":e+="\\f";
break;
case"\r":e+="\\r";
break;
default:if(c>"0xf"){e+="\\u00"+c.toString(16)
}else{e+="\\u000"+c.toString(16)
}break
}}else{switch(d){case"'":e+="\\'";
break;
case'"':e+='\\"';
break;
case"\\":e+="\\\\";
break;
case"/":e+="\\/";
break;
default:e+=d;
break
}}}}}}return e
};(function(b,f){var c,d;
var e=function(h){c.slideUp(function(){f(this).remove()
});
a(false);
return false
};
var a=function(k){document.domain="wiley.com";
var i=f(parent.document.getElementsByTagName("frameset")[0]),l,j,h;
if(i.length){l=i.attr("rows");
j=parseInt(l.split(",")[0]);
h=k?j+c.outerHeight():j-c.outerHeight();
i.attr("rows",l.replace(j,h))
}};
var g=function(){c=f("#cookieBanner");
if(c.length){var h=f('<a href="#" class="closeBanner" title="close">Close Banner</a>');
h.bind("click",e);
c.find(".l-cookiebanner-container").append(h);
a(true)
}};
b.cookies={dismiss:e,init:g};
return b
}(window.wol=window.wol||{},jQuery));
$(function(){wol.cookies.init()
});(function(l,j){var p=j(".shibbolethWidget"),y=j("#institutionName"),o=j("#institutionIdpUrl"),s=j("#selectInst"),r=p.find(".prevLogins"),k=p.find(".error"),b=r.find(".instName").length,x={};
var i=function(){s.removeClass("disabled").removeAttr("disabled");
y.removeClass("error ui-autocomplete-loading")
};
var a=function(){s.addClass("disabled").attr("disabled","disabled")
};
var e=function(z){if(z==="autocompleteselect"){k.remove()
}};
var d=function(A,z){x[A]=z
};
var m=function(z){return x[z]
};
var v=function(A,B){var z=[];
j.each(B,function(C,D){z.push({label:C,value:D})
});
d(A,z);
return z
};
var u=function(A,z){i();
z(A)
};
var f=function(C,z){var B=C.term.toLowerCase(),A=m(B);
if(A){u(A,z)
}else{j.ajax({url:"/widget/getinstitutiondetails",dataType:"json",data:{institutionname:encodeURIComponent(C.term)},success:function(E){var D=(E)?v(B,E):[];
u(D,z)
},error:function(E,F,D){return false
}})
}};
var c=function(z,A){y.val(A.item.label);
o.val(A.item.value);
e(z.type);
i();
return false
};
var h=function(){a();
y.autocomplete({source:f,minLength:3,select:c,focus:c,open:function(z,A){if(!j(".shibboleth-autocomplete").length){j(".ui-autocomplete").addClass("shibboleth-autocomplete")
}j(".ui-autocomplete").css("z-index",101)
}});
y.bind("blur keyup",function(){if(!y.val()){a()
}else{i()
}});
y.data("autocomplete")._resizeMenu=function(){this.menu.element.width(this.element.outerWidth()-2);
this.menu.element.css("top",parseInt(this.menu.element.css("top"),0))
};
y.data("autocomplete")._renderItem=function(B,D){var A=this.term.split(" ").join("|"),C=new RegExp("("+A+")","gi"),z=D.label.replace(C,"<b>$1</b>");
return j("<li></li>").data("item.autocomplete",D).append("<a>"+z+"</a>").appendTo(B)
}
};
var q=function(z){var A=j("#selectPrevInst");
z.prev(".rdo").attr("checked","checked");
A.trigger("click")
};
var g=function(A,z){var B=z.parent();
if(j.trim(A).toLowerCase()==="true"){B.fadeOut(900,function(){b--;
if(b===0){r.remove()
}j(this).remove()
})
}else{z.removeClass("waiting")
}};
var w=function(z){j.ajax({url:"/delinstitutionname",dataType:"text",charset:"utf-8",data:{institutionname:encodeURIComponent(z.val())},beforeSend:function(){z.addClass("waiting")
},success:function(A){g(A,z)
},error:function(B,C,A){return false
}})
};
var n=function(){r.delegate(".instLabel","click",function(){q(j(this))
}).delegate(".instName .actionBtn","click",function(A){A.preventDefault();
var z=j(this);
if(!z.hasClass("waiting")){w(z)
}})
};
var t=function(){if(y.length){h()
}s.val("Log in");
if(b){n()
}};
l.shibboleth={init:t};
return l
}(window.wol=window.wol||{},jQuery));
$(function(){wol.shibboleth.init()
});(function(f,b){var g=b(".readcubePdfLink"),e=b(".pdfOverlay"),a=location.href,d=b(".enhancedPdf");
var c=function(m){b.fancybox.staticUseSetup();
b.fancybox.showActivity();
var l=m.jquery?m:b(m),k=l.text().match(/\(.+\)/),o=k?k[0]:"",p=l.attr("href")||"",n=p+"/enhanced",q='<h3 class="choosePdfFormat">Choose a format:</h3><ul class="pdfOptions"><li class="pdfType"><a class="standardPdf">Standard PDF</a></li><li class="pdfType"><a class="enhancedPdf" target="_blank">Enhanced PDF</a><ul class="enhancedPdfBenefits"><li class="benefit">Supporting information and active references</li><li class="benefit">Save, organize, annotate, search, and share</li></ul><a href="http://readcube.com" target="_blank" class="readcubeRef">Learn more</a></li></ul>';
if(!e.length){e=b('<div class="pdfOverlay" />').append(q)
}e.find(".standardPdf").text("Standard PDF "+o).attr("href",p).click(function(){b.fancybox.close()
});
e.find(".enhancedPdf").attr("href",n).click(function(){b.fancybox.close()
});
b.fancybox({content:e,width:340,height:210,autoDimensions:false,autoScale:false})
};
var h=function(){if(g.length){b("body").delegate(".readcubePdfLink","click",function(k){k.preventDefault();
c(this)
})
}};
var j=function(){if(d.length){b('<a href="'+a+'/enhanced" target="_blank" class="pdfLink" title="Try the enhanced PDF version of this title">Enhanced PDF available</a>').appendTo(d)
}};
var i=function(){h();
j()
};
f.readcube={init:i};
return f
}(window.wol=window.wol||{},jQuery));
$(function(){wol.readcube.init()
});(function(a,c,e){var b=function(f){if(window.s&&s.apl){s.linkTrackVars="events,eVar7,eVar8,eVar9,eVar10";
f.first().delegate("a","mouseenter",function(h){window.clearInterval(window.altmetricsPopover);
var g=c("#_altmetric_popover_el"),i=c(this);
if(g.is(":hidden")){window.altmetricsPopover=window.setInterval(function(){if(g.is(":visible")){window.clearInterval(window.altmetricsPopover);
a.analytics.trackLink(i,{linkTrackEvents:"event25",events:["event25"]})
}},500)
}});
c("body").delegate(".altmetric-embed a.altmetric_details","click",function(g){a.analytics.trackLink(c(this),{linkTrackEvents:"event26",events:["event26"]})
})
}};
var d=function(){var h=c(".altmetric-embed");
if(h.length){var f=h.parents("#fancybox-inner").length,g="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js";
h=f?c("#fancybox-inner .altmetric-embed"):h;
if(window._altmetric){_altmetric_embed_init()
}else{c.getScript(g)
}b(h)
}};
a.altmetrics={init:d};
return a
}(window.wol=window.wol||{},jQuery));
$(document).ready(function(){wol.altmetrics.init()
});$(document).ready(function(){$(".js-header-user-access__trigger").click(function(c){var a=$("#login"),b=$(this).find(".icons-user-access-arrow"),d=$("#login"),f=250;
if(a.is(":visible")){d.fadeOut(f);
b.removeClass("icons-user-access-arrow_close");
b.addClass("icons-user-access-arrow_open")
}else{d.fadeIn(f);
b.removeClass("icons-user-access-arrow_open");
b.addClass("icons-user-access-arrow_close")
}return false
});
(function(){var b=$(".js-header-user-access__trigger"),a=b.find(".icons-user-access-arrow"),c=$("#login").not(".loggedIn");
c.mouseup(function(){return false
});
$(this).mouseup(function(d){if(!($(d.target).parent(".js-header-user-access__trigger").length>0)){c.fadeOut(250);
a.removeClass("icons-user-access-arrow_close");
a.addClass("icons-user-access-arrow_open")
}});
$(document).bind("keydown keypress",function(d){if(d.which==="27"){c.fadeOut(250);
a.removeClass("icons-user-access-arrow_close");
a.addClass("icons-user-access-arrow_open")
}})
}())
});(function(g,d){var c={padding:0,autoDimensions:false,width:480,height:"auto",autoScale:false,centerOnScroll:true,titleShow:false};
var f='<div class="loginContainer confirmContainer"><h1>Error</h1><p class="navAction message"><a href="#" id="confirm" class="actionBtn okBtn">OK</a>There has been an unexpected error, please try again.</p></div>';
var i=function(l){l.preventDefault();
var k=[],j;
c.target=d(l.target);
if(c.target.attr("type")&&c.target.attr("type")=="submit"){d(".validationRequired").validate({onclick:false,onfocusout:false,onkeyup:false,rules:{_checkbox_var:{required:true,minlength:1}},messages:{_checkbox_var:"Please select a journal title"},submitHandler:function(m){d.fancybox.staticUseSetup();
d.fancybox.showActivity();
j=d(m).attr("action");
k=d(m).serializeArray();
k.push({name:"reqType",value:"ajax"});
a(j,k)
}});
d(".validationRequired").submit()
}else{d.fancybox.staticUseSetup();
d.fancybox.showActivity();
j=c.target.attr("href");
k.push({name:"reqType",value:"ajax"});
a(j,k)
}};
var a=function(k,j){d.ajax({type:"GET",cache:false,url:k,data:j,success:function(l){b(l)
},error:function(){b(f)
}})
};
var e=function(l){d.fancybox.showActivity();
var k=d(l).attr("action");
var j=d(l).serializeArray();
j.push({name:"reqType",value:"ajax"});
d.ajax({type:"POST",cache:false,url:k,data:j,success:function(m){b(m)
},error:function(){d.fancybox.hideActivity();
var m=d('<p class="errorMsg">There has been an error, please try again.</p>');
d(".loginForm").find("input[name=password]").parent(".formField").after(m);
d.fancybox.resize()
}})
};
var b=function(j){c.content=j;
c.onComplete=function(){d("#cancelLogin").click(function(k){k.preventDefault();
d.fancybox.close()
});
d("#standaloneLogin").validate({onclick:false,onfocusout:false,onkeyup:false,submitHandler:function(k){e(k)
}});
d(".okBtn").click(function(k){k.preventDefault();
d.fancybox.close()
})
};
c.onCleanup=function(){var k=d(".okBtn").length&&d(".okBtn").parents("#fancybox-tmp").length!=1;
if(k){window.location.reload(true)
}};
d.fancybox(c)
};
var h=function(j){d.each(j.elms,function(l,m){var k=d(m);
k.click(i)
})
};
g.login={init:h};
return g
}(window.wol=window.wol||{},jQuery));
$(document).ready(function(){wol.login.init({elms:[".authReq"]})
});(function(i,h,f){var j=function(){if(window.s&&s.apl){i.analytics.trackLink("true",{linkTrackVars:"prop1,prop2,prop4,prop5,prop13,prop26,prop30,eVar1,eVar2,eVar4,eVar6,eVar9,eVar14,eVar15,eVar16,eVar17,campaign,events",linkTrackEvents:"event55",events:["event55"]})
}h(".btnDecline").bind("click",function(o){o.preventDefault();
h.fancybox.close()
})
};
var n={invalidPages:[],viewPercentage:50,expiryDate:null,cookie:{key:"wolSurvey",value:"survey-seen"},width:400,height:400,padding:0,autoDimensions:false,autoScale:false,centerOnScroll:true,hideOnOverlayClick:false,onComplete:j};
var g=function(){var o=location.href,p=o.split("/");
return(o.lastIndexOf("/")!==o.length-1?p[p.length-1]:p[p.length-2])
};
var e=function(){var o=b();
var p=o<n.viewPercentage;
return p
};
var b=function(){return Math.floor(Math.random()*100)
};
var a=function(o){return h.inArray(o,n.invalidPages)===-1
};
var d=function(){var p=window.location.href.match(/(\?|&)interceptDebug($|&|=)/);
var o,q;
if(p){o=m("viewPercentage");
n.viewPercentage=o;
if(m("deleteCookie")=="1"){h.cookie(n.cookie.key,null,{path:"/"})
}}return p
};
var m=function(p){p=p.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var o="[\\?&]"+p+"=([^&#]*)";
var r=new RegExp(o);
var q=r.exec(window.location.search);
if(q==null){return""
}else{return decodeURIComponent(q[1].replace(/\+/g," "))
}};
var l=function(x){h.extend(n,x);
if(typeof n.expiryDate=="string"){var p=n.expiryDate.split("/");
var t=new Date(p[0],(p[1]-1),p[2]);
n.expiryDate=t
}else{n.expiryDate=new Date(new Date().getUTCFullYear()+1,new Date().getUTCMonth(),new Date().getUTCDate())
}var w=d(),o=g(),u=a(o),r=(h.cookie(n.cookie.key)==n.cookie.value),v=e(),q=(new Date()<n.expiryDate);
if(w){if(v&&!r){c()
}}else{if(q&&!r&&u&&v){h.cookie(n.cookie.key,n.cookie.value,{expires:new Date(n.expiryDate.setDate(n.expiryDate.getDate()+1)),path:"/"});
c()
}}};
var k=function(){h.getScript(i.config.staticAssetUrl+"js/jquery/jquery.ba-postmessage.js",function(){jQuery.receiveMessage(function(o){if(o.data==="closeFancyBox"){h.fancybox.close();
jQuery.receiveMessage()
}},i.config.staticAssetUrl.slice(0,-1));
h.fancybox(n)
})
};
var c=function(){if(n.href){n.type="iframe";
k()
}else{h("head").append('<link rel="stylesheet" href="../intercepts/css/interceptSurvey.css" type="text/css" />');
h.fancybox(n)
}};
i.intercept={init:l};
return i
}(window.wol=window.wol||{},jQuery));
$(document).ready(function(){wol.intercept.init({href:wol.config.staticAssetUrl+"intercepts/wol-survey.html?targetUrl="+encodeURIComponent(this.location.href),invalidPages:["pdf","full","abstract","references","citedby","suppinfo","versions","otherversions","figures","tables","compoundindex"],viewPercentage:15,expiryDate:"2013/08/31"})
});(function(a,c){var b=function(){var e=c("#captcha_public_key").val();
if(e){Recaptcha.create(e,"recaptcha_image",{theme:"custom",callback:Recaptcha.recaptcha_response_field})
}};
var d=function(){b()
};
a.captcha={init:d};
return a
}(window.wol=window.wol||{},jQuery));
$(function(){wol.captcha.init()
});(function(a,c){var e=function(){c("a.rightsLink").bind("click",function(f){f.preventDefault();
b(c(this).attr("href"))
})
};
var b=function(f){var f=f.replace("%2526","%26");
window.open(f,"Rightslink","location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=650,height=550")
};
var d=function(){e()
};
a.rightsLink={init:d};
return a
}(window.wol=window.wol||{},jQuery));
$(function(){wol.rightsLink.init()
});