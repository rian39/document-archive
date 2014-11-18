var wol=this.wol||{};
wol.siteCatalyst=function(){this.urlPattern=["/adlogin","/doi/[^/]{1,}[/]{0,1}[^/]{1,}/pdf","/doi/[^/]{1,}[/]{0,1}[^/]{1,}/full"];
this.matchingEvent=["event9","event11","event12"];
this.event="";
this.hostname=location.hostname;
this.pathname=location.pathname;
this.url=""
};
wol.siteCatalyst.prototype={init:function(){this.url=this.hostname+this.pathname;
for(var a=0;
a<this.urlPattern.length;
a++){var b=new RegExp(this.hostname+this.urlPattern[a],"gi");
if(this.url.match(b)){this.addEvent(this.matchingEvent[a])
}}},addEvent:function(a){this.event=a
}};
if(typeof s!="undefined"){var siteCatalyst=new wol.siteCatalyst()
};