(function(a,c,d){var e=function(g){for(var f in g){if(g.hasOwnProperty(f)){s[f]=g[f]
}}};
var b=function(h,j){if(window.s&&window.s.tl){var t=h.jquery?h:c(h),g=t.attr("href")||"",l=t.attr("data-t-sc")||"",p=l?JSON.parse(l.replace(/'/g,'"')):{},f=(j&&j.linkType)?j.linkType:p.linkType||"o",q=(j&&j.linkDesc)?j.linkDesc:p.linkDesc||t.text(),k=(j&&j.linkTrackVars)?j.linkTrackVars:p.linkTrackVars||s.linkTrackVars,o=(j&&j.linkTrackEvents)?j.linkTrackEvents:p.linkTrackEvents||s.linkTrackEvents,r=(j&&j.events)?j.events:p.events,i=(j&&j.eVars)?j.eVars:p.eVars||"",m=(j&&j.sProps)?j.sProps:p.sProps||"",n=[];
s.linkTrackVars=k;
s.linkTrackEvents=o;
s.events=r?s.apl(s.events,r,",",1):s.events;
if(i){e(i)
}if(m){e(m)
}s.tl(g,f,q)
}};
a.analytics={trackLink:b};
return a
}(window.wol=window.wol||{},jQuery));
$(function(){if(window.s){$("body").delegate(".track-click","click",function(){wol.analytics.trackLink(this)
})
}});