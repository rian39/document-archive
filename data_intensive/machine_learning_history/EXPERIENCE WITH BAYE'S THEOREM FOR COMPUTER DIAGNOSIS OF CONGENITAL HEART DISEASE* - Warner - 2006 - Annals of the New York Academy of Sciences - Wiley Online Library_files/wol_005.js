var wol=this.wol||{};
wol.metrics=function(){this.fancyBoxWidth=752;
this.fancyBoxHeight=628;
this.viewsEndDate=$("#enddate").text();
this.viewsStartDate=$("#startdate").text();
this.chartCount=$("#totalViews span").text();
this.$dataTables=$(".dataTable").first();
this.ajaxURL=window.location.pathname.split("/").slice(0,-1).join("/")+"/metricsData",this.daySegment=7;
this.monthSegment=1;
this.quarterlySegment=1;
this.minDays=42;
this.$usageContainer=$(".usageStats");
this.flotContainerTabbed='<div class="tabbedContent"><ul><li class="active" id="cumulativeGraph"><span>Cumulative Usage</span></li></ul></div>';
this.flotContainer='<div id="flotGraph"><div id="graph"></div></div>'
};
wol.metrics.prototype={init:function(){this.bindTotalViews()
},ajaxCall:function(){var a=this;
$.fancybox.hideActivity();
$.ajax({type:"GET",url:this.ajaxURL,dataType:"html",success:function(c,b){$.fancybox({content:c,width:a.fancyBoxWidth,height:a.fancyBoxHeight,autoDimensions:false,autoScale:false,scrolling:"no"});
a.$dataTables=$("#fancybox-inner  .dataTable");
a.$usageContainer=$("#fancybox-inner .usageStats");
a.viewsEndDate=$("#enddate").text();
a.viewsStartDate=$("#startdate").text();
$("#fancybox-inner").children().removeAttr("id");
a.paintContainer();
a.paintGraph();
a.bindPlotHover();
wol.altmetrics.init()
}})
},bindPlotHover:function(){var a=this;
$("#graph").bind("plothover",function(c,d,b){if(b){$("body").append('<div class="flotToolTip"></div>');
a.toolTip($(".flotToolTip"),b)
}else{$(".flotToolTip").remove()
}})
},bindTotalViews:function(){var a=this;
if(this.chartCount!=0){$("#totalViews a").click(function(b){b.preventDefault();
$.fancybox.staticUseSetup();
$.fancybox.showActivity();
a.ajaxCall()
})
}else{$("#totalViewsError a").click(function(b){b.preventDefault();
$.fancybox.staticUseSetup();
$.fancybox.showActivity();
a.ajaxCall()
})
}},paintContainer:function(){this.$dataTables.each(function(a,b){$(this).hide()
});
this.$usageContainer.append(this.flotContainerTabbed);
this.$usageContainer.append(this.flotContainer)
},paintGraph:function(){var b=this.dataMapFlot("pdf").split("-"),e=JSON.parse(b[0]),i=b[1],a=this.dataMapFlot("html").split("-"),d=JSON.parse(a[0]),g=a[1],c=this.dateMapStartPadded().getTime(),j=this.dataMax(b[1],a[1]),f=this.tickSize(),k=this.dateTimeType();
end=this.dateMapEndPadded().getTime();
var h=this;
this.flot=$.plot($("#graph"),[{label:"PDF",data:e},{label:"HTML",data:d}],{yaxis:{max:j},xaxis:{mode:"time",timeFormat:k,tickSize:f,min:c,max:end},legend:{position:"nw"},lines:{show:"true"},points:{show:"true"},grid:{hoverable:true,clickable:true,backgroundColor:"#fff",color:"#000",borderWidth:1,borderColor:"#ccc"},colors:["#b695ff","#007E8B"]})
},parseTableData:function(){var a=this;
this.data=[];
this.$dataTables.each(function(c,d){var b={};
b.data=[];
$(d).find("tr").each(function(g,e){if(g!==0){var f={};
f.date=a.dateConverter($(e).find("th").text());
f.pdf=$(e).find("td").first().text();
f.html=$(e).find("td").last().text();
b.data.push(f)
}});
b.start=a.dateConverter($(d).find("th:eq(3)").text());
b.end=a.dateConverter($(d).find("th").last().text());
a.data.push(b)
});
return this.data
},dateConverter:function(a){if(!isNaN(a.substr(0,1))){return a
}else{return"01 "+a
}},dataMapFlot:function(a){var c=this;
var e=true;
var d=0;
var b=this.parseTableData();
var f=[];
f="[["+c.dateMapStartPadded().getTime()+",0]";
$.each(b[0].data,function(g,h){f+=",["+(new Date(h.date)).getTime()+","+h[a]+"]";
if(parseInt(h[a],10)>parseInt(d,10)){d=parseInt(h[a],10)
}});
f+="]";
f+="-"+d;
return f
},dateMapStart:function(){this.data=this.parseTableData();
this.start=this.data[0].start;
return this.start
},dateMapEnd:function(){this.data=this.parseTableData();
this.end=this.data[0].end;
return this.end
},padMonth:function(c,b){var d=new Date(c);
var a=new Date(d.getFullYear(),d.getMonth()+b,1);
return a
},padQuarter:function(c,b,d){var e=new Date(c);
var a=(e.getMonth()+1)%3;
if(d&&a==0){e=new Date(e.getFullYear(),e.getMonth()-3,1)
}else{e=new Date(e.getFullYear(),e.getMonth()-a,1)
}return e.setHours(1)
},padDay:function(b,d){var c=new Date(b);
var a=c.setDate(c.getDate()+d);
return a
},dateMapStartPadded:function(){this.start=this.dateMapStart();
if(this.startsWithNullValue()){if(this.isQuarterly()){this.newStart=this.padQuarter(this.start,-1);
return new Date(this.newStart)
}else{return new Date(this.start)
}}else{if(this.isDaily()){this.newStart=this.padDay(this.dateMapStart(),-1)
}else{if(this.isMonthly()){this.newStart=this.padMonth(this.start,-1)
}else{this.newStart=this.padQuarter(this.start,-1,true)
}}return new Date(this.newStart)
}},startsWithNullValue:function(){if(this.data[0].data[0].html==0&&this.data[0].data[0].pdf==0){return true
}},dateMapEndPadded:function(){this.end=this.dateMapEnd();
if(this.isDaily()){this.newEnd=this.padDay(this.dateMapStart(),42)
}else{this.newEnd=this.padMonth(this.end,3)
}return new Date(this.newEnd)
},tickSize:function(){var a;
if(this.isDaily()){a=[this.daySegment,"day"]
}else{if(this.isMonthly()){a=[this.monthSegment,"month"]
}else{if(this.isQuarterly()){a=[this.quarterlySegment,"quarter"]
}}}return a
},isDaily:function(){this.days=this.dateFromNow();
if(this.days<=this.minDays){return true
}},isMonthly:function(){this.days=this.dateFromNow();
if(this.days>=this.minDays&&this.days<=365){return true
}},isQuarterly:function(){this.days=this.dateFromNow();
if(!this.isDaily()&&!this.isMonthly()){return true
}},dataMax:function(b,a){this.vanillaMax=0;
this.maxValue=0;
if(parseInt(b,10)>parseInt(a,10)){this.vanillaMax=parseInt(b,10)
}else{this.vanillaMax=parseInt(a,10)
}this.days=this.dateFromNow();
if(this.days<4){this.maxValue=parseInt(this.vanillaMax,10)+(parseInt(this.vanillaMax,10)*1)
}else{if(this.days>3&&this.days<8){this.maxValue=parseInt(this.vanillaMax,10)+(parseInt(this.vanillaMax,10)*0.5)
}else{if(this.days>7&&this.days<31){this.maxValue=parseInt(this.vanillaMax,10)+(parseInt(this.vanillaMax,10)*0.2)
}else{this.maxValue=parseInt(this.vanillaMax,10)+(parseInt(this.vanillaMax,10)*0.1)
}}}return Math.ceil(this.maxValue)
},dateFromNow:function(){this.diff=new Date()-new Date(this.dateMapStart()).getTime();
this.day=60*60*24*1000;
this.diffDay=Math.ceil(this.diff/this.day);
return this.diffDay
},dateTimeType:function(){this.days=this.dateFromNow();
if(this.isDaily()){this.timeType="%d %b"
}else{this.timeType="%b %y"
}return this.timeType
},toolTip:function(a,b){if(b.dataIndex!==0){var c=this.tooltipHtml(b);
a.html(c);
a.css({opacity:0.8,top:(b.pageY+10)+"px",left:(b.pageX+5)+"px"});
a.fadeIn(200)
}},tooltipHtml:function(b){var d=new Date(this.viewsEndDate),a=new Date(this.viewsStartDate),c=new Date(b.datapoint[0]);
a.setHours(1);
d.setHours(1);
if(c.getTime()>=a.getTime()){startDateString=$.plot.formatDate(a,"%d %b %y")
}else{startDateString=$.plot.formatDate(c,"%b %y")
}if(c.getTime()==new Date(this.data[0].end).getTime()){endDateString=$.plot.formatDate(d,"%d %b %y")
}else{c.setHours(1);
if(!this.isDaily()){endDateString=$.plot.formatDate(c,"%b %y")
}else{endDateString=$.plot.formatDate(c,"%d %b %y")
}}if(b.dataIndex===1){return b.datapoint[1]+" "+b.series.label+" views "+endDateString
}else{return b.datapoint[1]+" "+b.series.label+" views "+startDateString+" - "+endDateString
}}};
$(document).ready(function(){window.metric=new wol.metrics();
window.metric.init()
});