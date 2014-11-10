(function(a){a.widget("ol.dynamicSelectGroup",{_create:function(){this.element.wrap("<fieldset />");
this.element.parents("fieldset").parent().wrapInner('<form action="'+this.element.find("a:first").attr("href").split("?")[0]+'" class="simple" method="get" />');
this.element.parents("form").unwrap().append('<input type="submit" value="Download" class="submit"/>')
},_init:function(){this._build();
var b=this.element.parents("form").find("p.error");
if(b.length){this.element.parents("fieldset").append(a("<label/>").addClass("error").attr("for","productType").html(b.detach().html()))
}},_build:function(h,b){var g=this,i=h;
this.element.parents("fieldset").children("label.error").remove();
if(!h){this.element.find("~select").remove();
h=this.element
}else{var d=h.parents("ul").length;
this.element.find("~select").eq(d).find("~select").remove();
h=h.find(">li>ul").filter(function(j){return a(this).siblings("span").text()===a(b).find("option:selected").text()
})
}this.element.parent().children("input[type=hidden]").remove();
h.length&&(i=h);
var e={};
a.each(i.find("a:first").attr("href").split("?")[1].split("&"),function(){if(!g.element.parent().children("#"+this.split("=")[0]).length){e[this.split("=")[0]]=this.split("=")[1]
}});
while(h.length){var c=h.attr("class"),f=c.indexOf(" ")>0?c.split(" ")[1]:c;
delete e[f];
var b=a("<select />").hide().attr({id:f,name:f}).bind("change",{listEl:h},function(j){g._build(j.data.listEl,this)
}).appendTo(this.element.parent());
a(a.map(h.find(">li"),function(j){return a("<option />").attr("value",g._getValueFromQS(j,f)).text(a(j).children("span, a").text())
})).appendTo(b.fadeIn("slow"));
h=h.find(">li:first>ul:first")
}a.each(e,function(k,j){a("<input />").attr({type:"hidden",id:k,name:k}).val(j).appendTo(g.element.parent())
})
},_getValueFromQS:function(c,b){qs=a(c).find("a:first").attr("href").split("?")[1].split("&");
return a.grep(qs,function(d,e){return d.split("=")[0]===b
})[0].split("=")[1]
},destroy:function(){this.element.parent().find("select").remove();
this.element.show();
a.Widget.prototype.destroy.apply(this,arguments)
}});
a.widget("ol.dynamicReportScreen",{_create:function(){var b=this
},_init:function(){this._buildReport();
this._buildReportSection();
a("#reportMonthStart").val(1).attr("selected","selected");
var b=this.element.parents("form").find("p.error");
if(b.length){this.element.parents("fieldset").append(a("<label/>").addClass("error").attr("for","productType").html(b.detach().html()))
}},_getContext:function(){var c=a("#reportUrl").val(),b=location.protocol+"//"+location.host;
if(c==="/admin-tools-web"){b=b+"/admin-tools-web"
}return b
},_getExternalID:function(){var b=a("#externalID").val();
return b
},_buildReportSection:function(){var i=this;
var d=a("#show_reports"),j=a("table.report"),f=a("#generate"),h=a(".delete_report"),c=a("#refresh_reports"),g=a("#message"),e=a("#dialog"),b=a(".ajax-loader");
d.click(function(k){b.show();
a("#report_list tbody").remove();
i._showReports();
j.slideToggle(300);
k.preventDefault()
});
f.click(function(k){i._validateForm();
k.preventDefault()
});
c.click(function(k){b.show();
a("#report_list tbody").remove();
i._showReports();
a("table.report").slideDown(300);
k.preventDefault()
})
},_validateForm:function(){var j=a("#productType option:selected").val(),k=a("#reportType option:selected").val(),h=a("#reportType option:selected").text(),l=a("#reportYear option:selected").val(),b="",q="",c="",p="",f="Reports cannot span more than 1 year <br />",d="Please enter a valid date range <br />",n=a("#count").html(),e="",g="";
if(h.indexOf("COUNTER")>-1||h==="Journal's Frontfile Report"){b=a("#reportMonthStart option:selected").val();
q=a("#reportMonth option:selected").val();
c=a("#reportYearStart option:selected").val();
e=l-c;
g=q-b
}else{a("#reportMonthStart").empty()
}n=(n>0)?parseInt(n,10)+1:1;
if((e===1&&g>=0)||e>1){p=f
}else{if(e<=0&&g<0){p=d
}else{if(e<0){p=d
}}}if(p){a("label.error").show().html(p)
}else{a(".ajax-loader").show();
var m=this,o=m._getContext(),i=a("#usage_report").serialize();
a.ajax({url:o+"/admin/queueReportRequest",type:"get",data:i,cache:false,success:function(r){if(r==="Success"){alert("Report added to queue")
}else{if(r==="exists"){alert("Report is currently in queue")
}else{if(r==="failure"){alert("Error-Please Try Again")
}}}if(r!==""){m._showReports();
a("table.report").slideDown(300)
}}})
}},_showReports:function(){var b=this._getContext(),d=this,f=a(".ajax-loader"),c=d._getExternalID(),e="";
if(c){e="externalID="+c
}a.ajax({url:b+"/admin/customerReports",type:"get",data:e,cache:false,success:function(r){a("#report_list tbody").remove();
var k=JSON.parse(r);
var y="";
for(var z in k){var v=k[z].id,s=k[z].displayReportType,D=k[z].displayReportName,C=k[z].startMonth,w=k[z].startYear,x=k[z].endMonth,o=k[z].endYear,n=k[z].displayReportStatus,l=k[z].downloadUrlfortsv,B=k[z].downloadUrlforcsv,u=k[z].downloadUrlforxml,j=k[z].downloadUrlforxlsx,t=k[z].reportCustID,g="",q='<img src="/images/bin.png" title="Delete" />',p="",m="";
var h=C+" / "+w,A=x+" / "+o;
if(n==="Error-Please Try Again"){m='class="errRow"'
}if(n==="Error-Please Try Again"||n==="Completed"){q='<a href="#" id="'+v+'" data-cust="'+t+'" class="delete">'+q+"</a>"
}if(c){p="&externalID="+c
}if(D==="COUNTER Consortium Report 1"){g=(n==="Completed")?'<a href="'+b+""+u+""+p+'">XML</a>':"XML"
}else{if(D.indexOf("COUNTER")>-1||D==="Journal's Frontfile Report"){g=(n==="Completed")?'<a href="'+b+""+j+""+p+'">XLSX</a> | <a href="'+b+""+l+""+p+'">TSV</a> | <a href="'+b+""+u+""+p+'">XML</a>':"XLSX | TSV | XML"
}else{A=o;
h="Not Applicable";
g=(n==="Completed")?'<a href="'+b+""+j+""+p+'">XLSX</a> | <a href="'+b+""+B+""+p+'">CSV</a>':"XLSX | CSV"
}}y+="<tr "+m+"><td>"+s+"</td><td>"+D+"</td><td>"+h+"</td><td>"+A+"</td><td>"+n+"</td><td>"+g+"</td><td>"+q+"</td></tr>"
}a("#report_list").append(y);
f.hide()
}})
},_hideErrLabel:function(){a("label.error").hide()
},_buildReport:function(){var g=a("#productType"),h=a("#reportType"),k=a("#reportYearStart"),l=a("#reportYear"),i=a("#reportMonthStart"),e=a("#reportMonth"),b=a(".report_usage"),c=a(".reportMonthStartStyle"),d=a(".reportMonthStyle"),f=a(".reportYearStartStyle"),j=this;
b.find("> li > span").each(function(){var m=a(this);
g.append("<option value='"+m.attr("id")+"'>"+m.text()+"</option>")
});
g.change(function(){var m=g.find("option:selected").val().replace(/\s/g,"");
h.empty();
a("span."+m).each(function(){var n=a(this);
h.append("<option value='"+n.attr("id")+"'>"+n.text()+"</option>")
});
h.trigger("change")
});
h.change(function(o){var n=h.find("option:selected").val(),m=g.find("option:selected").val().replace(/\s/g,"");
k.empty();
l.empty();
a(".reportYearStart span."+m+"_"+n).each(function(){var p=a(this);
k.append("<option value='"+p.attr("id")+"'>"+p.text()+"</option>")
});
a(".reportYear span."+m+"_"+n).each(function(){var p=a(this);
l.append("<option value='"+p.attr("id")+"'>"+p.text()+"</option>")
});
k.trigger("change");
l.trigger("change")
});
k.change(function(p){j._hideErrLabel();
var o=k.find("option:selected").val(),m=h.find("option:selected").val(),n=g.find("option:selected").val().replace(/\s/g,"");
if(!o){f.hide();
c.hide()
}else{f.show();
c.show()
}i.empty();
a(".reportMonthStart span."+n+"_"+m+"_"+o).each(function(){var q=a(this);
i.append("<option value='"+q.attr("id")+"'>"+q.text()+"</option>")
});
i.val(1).attr("selected","selected")
});
l.change(function(q){j._hideErrLabel();
d.show();
var o=l.find("option:selected").val(),m=h.find("option:selected").val(),n=g.find("option:selected").val().replace(/\s/g,"");
e.empty();
var p=0;
a(".reportMonth span."+n+"_"+m+"_"+o).each(function(){var r=a(this);
e.append("<option value='"+r.attr("id")+"'>"+r.text()+"</option>");
p++
});
if(!p){d.hide()
}});
i.change(function(m){j._hideErrLabel();
m.preventDefault()
});
e.change(function(m){j._hideErrLabel();
m.preventDefault()
});
g.trigger("change")
}});
a.widget("ol.globalMessaging",{_create:function(){var b=this,c=b.options;
b=a.extend(b,{offset:0,showing:false,available:false,timer:0,isIe6:(a.browser.msie&&a.browser.version==6)});
b.messageElement=(a("#globalMessaging").length?a("#globalMessaging"):a("<div/>").attr("id","globalMessaging").append("<ul/>")).css({top:0,left:0,position:b.isIe6?"absolute":"fixed"}).append(a('<a id="handle" href="#">'+c.openedText+"</a>").click(function(){b.showing?b.hide():b.show(true);
return false
})).bgIframe();
if(b.messageElement.parent().length>0){b.available=true;
b.messageElement.detach().prependTo("body");
b._setOffset();
b.canShow=((b.messageElement.find("li").length>1)||((b.messageElement.find("li").length==1)&&((b.messageElement.find("li.maintenanceMessage").length==0)||(b.messageElement.find("li.maintenanceMessage").length>0)&&(a.cookie("maintenanceMessageViewed")!="true"))));
!b.canShow&&b.hide(true)
}a(window).bind("resize",function(){b.available&&((b.showing&&b._setOffset())||(b._setOffset()&&b.hide(true)))
});
if(b.isIe6){a(window).bind("scroll",function(){b.available&&((b.showing&&b.messageElement.css({top:a(window).scrollTop()}))||(!b.showing&&b.messageElement.css({top:a(window).scrollTop()+b._getOffset()})))
})
}},_init:function(){this.show()
},_getOffset:function(){return parseInt("-"+this.offset,10)
},_setOffset:function(){return this.offset=parseInt(this.messageElement.children("ul").outerHeight(),10)
},addMessage:function(d,c){var b=this;
b.hide(true);
b.messageElement.children("ul").append(a("<li>"+d+"</li>").attr("class",c));
b.messageElement.prependTo("#rightBorder");
b.available=true;
b._setOffset();
b.canShow=((b.messageElement.find("li").length>1)||((b.messageElement.find("li").length==1)&&(b.messageElement.find("li.maintenanceMessage").length>0)&&(a.cookie("maintenanceMessageViewed")!="true")));
if(b.canShow){b.show()
}else{b.hide(true)
}},show:function(d){var b=this,c=b.options;
if(this.available&&!b.showing&&(d||b.canShow)){b.messageElement.children("ul").css("visibility","visible");
b.messageElement.animate({left:0,top:b.isIe6?a(window).scrollTop():0},c.animSpeed,function(){b.messageElement.children("a").html(c.openedText);
if(!d){b.timer=setTimeout(function(){b.hide()
},c.delay)
}b.showing=true
});
(a.cookie("maintenanceMessageViewed")!="true")&&a.cookie("maintenanceMessageViewed","true",{path:"/"})
}},hide:function(d){var b=this,c=b.options;
if(this.available&&(b.showing||d)){clearTimeout(b.timer);
b.messageElement.clearQueue().animate({top:b.isIe6?a(window).scrollTop()+b._getOffset():b._getOffset()},d?0:c.animSpeed,function(){b.messageElement.children("a").html(c.closedText);
b.showing=false
})
}}});
a.extend(a.ol.globalMessaging.prototype,{options:{animSpeed:"fast",delay:5000,openedText:"Hide messages",closedText:"Show messages"}})
})(jQuery);
(function(b){var c=b("#reportUrl").val(),a=location.protocol+"//"+location.host;
if(c==="/admin-tools-web"){a=a+"/admin-tools-web"
}b("#report_list").delegate("a.delete","click",function(h){var g=b(this),k=g.attr("id"),j=g.attr("data-cust"),d=b("#externalID").val(),i=b(".ajax-loader").show(),f="";
if(d){f="&externalID="+d
}b.ajax({url:a+"/admin/archiveReport",data:"id="+k+"&custid="+j+""+f,type:"get",cache:false,success:function(e){if(e==="Success"){i.hide();
g.parent("td").parent("tr").fadeOut(500)
}}});
h.preventDefault()
})
})(jQuery);