var wol=this.wol||{};
wol.siteCatalystTL=function(){this.urlPattern=["/advanced/search",];
this.matchingFunc=["trackSearchRecord",];
this.hostname=location.hostname;
this.pathname=location.pathname;
this.url=""
};
wol.siteCatalystTL.prototype={init:function(){this.url=this.hostname+this.pathname;
for(var a=0;
a<this.urlPattern.length;
a++){var b=new RegExp(this.hostname+this.urlPattern[a],"gi");
if(this.url.match(b)){this.trackFunction(this.matchingFunc[a])
}}},trackFunction:function(a){this[a]()
}};
wol.siteCatalystTL.prototype.trackSearchRecord=function(){$("#content").delegate(".article a, .publication a, .book a","mousedown",function(){s.linkTrackVars="events";
s.linkTrackEvents=["event3","event11","event12"];
s.events="event3";
if($(this).parents(".productMenu").length>0){$(this).html().match("PDF")?s.events=s.apl(s.events,"event11",",",1):0;
$(this).html().match("Full Article")?s.events=s.apl(s.events,"event12",",",1):0
}s.tl(true,"e","Search Record Link")
})
};
$(document).ready(function(){if(typeof s!="undefined"){var a=new wol.siteCatalystTL();
a.init()
}});