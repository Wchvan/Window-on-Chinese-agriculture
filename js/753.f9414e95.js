"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[753],{2753:function(e,t,l){l.r(t),l.d(t,{default:function(){return B}});var a=l(9740),o=(l(1758),l(6957),l(7086),l(6570),l(6468)),i=(l(1792),l(7960),l(3396));const n={class:"saleWrapper"},r={class:"saleStructure"},s={class:"pie1"},c={class:"pie2"},u={class:"saleChange"},h={class:"line"},d={class:"saleConclusion"};function f(e,t,l,f,g,b){const p=o.BT,w=o.km,m=(0,i.up)("salePie1"),v=(0,i.up)("salePie2"),y=(0,i.up)("saleLine"),S=a.nZ,P=a.b2,x=a.G4;return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",r,[(0,i._)("div",s,[(0,i.Wm)(w,{modelValue:f.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value1=e),class:"m-2",placeholder:"2017年",size:"large"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.options,(e=>((0,i.wg)(),(0,i.j4)(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),Object.keys(e.inPie).length?((0,i.wg)(),(0,i.j4)(m,{key:0,inPie:e.inPie,val:f.value1},null,8,["inPie","val"])):(0,i.kq)("",!0)]),(0,i._)("div",c,[(0,i.Wm)(w,{modelValue:f.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>f.value2=e),class:"m-2",placeholder:"2017年",size:"large"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.options,(e=>((0,i.wg)(),(0,i.j4)(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),Object.keys(e.outPie).length?((0,i.wg)(),(0,i.j4)(v,{key:0,outPie:e.outPie,val:f.value2},null,8,["outPie","val"])):(0,i.kq)("",!0)])]),(0,i._)("div",u,[(0,i._)("div",h,[Object.keys(e.inData).length?((0,i.wg)(),(0,i.j4)(y,{key:0,inData:e.inData,outData:e.outData},null,8,["inData","outData"])):(0,i.kq)("",!0)]),(0,i._)("div",d,[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Uk)("结论")])),_:1}),(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[(0,i.Uk)("进出口方面看来，自2017到2022年，我国粮食进出口总量总体呈上升趋势，前四年较为平缓，后两年势头较足，最终出口与进口总量分别达到了3500000百万美元和2700000百万美元，每年出口均高出进口500000百亿美元左右，为我国外汇创造了不错的贸易顺差。而对于进口结构，从2017年开始，进口结构中肉类产品占比逐年增加，到2020年开始下降；出口结构中肉类产品占比下降三年，最终稳定在25%左右。总而言之，进出口结构的不断动态调整也是根据国际市场和消费者需求的动态变化，为的是争取到更大的经济效益和尽可能满足国内消费需求，出口与进口的差额无疑为我国创造了贸易顺差的经济优势，这是粮食大国与经济政策配合下的效益的体现。")])),_:1})])),_:1})])])])}const g={ref:"salePie1",class:"salePie1"};function b(e,t,l,a,o,n){return(0,i.wg)(),(0,i.iD)("div",g,null,512)}l(7658);var p=l(4870),w=l(6221),m={name:"salePie1",props:{inPie:{type:Object},val:{type:String}},setup(e){let t=(0,p.iH)();function l(e,l){let a=[];for(let t in e){let o="";o="meat"==t?"肉类食品":"种植食品";let i={name:o,value:e[t][l]};a.push(i)}var o=["#afa3f5","#00d488","#3feed4","#3bafff","#f1bb4c","rgba(250,250,250,0.5)"];let i=(0,p.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"进口结构",x:"center",top:"47%",textStyle:{fontSize:"26px",fontWeight:"normal",color:"#808080"}},grid:{bottom:150,left:0,right:"10%"},tooltip:{trigger:"item",formatter:" {b}：{c}百万美元 ({d}%)"},legend:{show:!1,orient:"vertical",top:"middle",right:"5%",textStyle:{color:"#f2f2f2",fontSize:25},icon:"roundRect"},series:[{radius:["25%","51%"],center:["50%","50%"],type:"pie",itemStyle:{normal:{color:function(e){return o[e.dataIndex]}}},labelLine:{normal:{show:!0,length:15,length2:120,lineStyle:{color:"#d3d3d3"},align:"right"},color:"#000",emphasis:{show:!0}},label:{normal:{formatter:function(e){var t="";switch(e.name){case"肉类食品":t="{a|}\n{nameStyle|肉类食品 }{rate|"+e.percent+"%}";break;case"种植食品":t="{b|}\n{nameStyle|种植食品}{rate|"+e.percent+"%}";break}return t},padding:[0,-110],height:165,rich:{a:{width:38,height:38,lineHeight:50,align:"left"},b:{width:29,height:45,lineHeight:50,align:"left"},c:{width:34,height:33,lineHeight:50,align:"left"},d:{width:34,height:44,lineHeight:50,align:"left"},e:{width:38,height:30,lineHeight:50,align:"left"},nameStyle:{fontSize:16,color:"#555",align:"left"},rate:{fontSize:20,color:"#1ab4b8",align:"left"}}}},data:a},{radius:["47%","51%"],center:["50%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},animation:!1,tooltip:{show:!1},itemStyle:{normal:{color:"rgba(250,250,250,0.5)"}},data:[{value:1}]}]}),n=w.S1(t.value);n.setOption(i),window.addEventListener("resize",(function(){n.resize()}))}return(0,i.bv)((()=>{l(e.inPie,"2017年")})),(0,i.YP)((()=>e.val),(t=>l(e.inPie,t))),{salePie1:t}}},v=l(89);const y=(0,v.Z)(m,[["render",b]]);var S=y;const P={ref:"salePie2",class:"salePie2"};function x(e,t,l,a,o,n){return(0,i.wg)(),(0,i.iD)("div",P,null,512)}var k={name:"salePie2",props:{outPie:{type:Object},val:{type:String}},setup(e){let t=(0,p.iH)();function l(e,l){let a=[];for(let t in e){let o="";o="meat"==t?"肉类食品":"种植食品";let i={name:o,value:e[t][l]};a.push(i)}var o=["#afa3f5","#00d488","#3feed4","#3bafff","#f1bb4c","rgba(250,250,250,0.5)"];let i=(0,p.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"出口结构",x:"center",top:"47%",textStyle:{fontSize:"26px",fontWeight:"normal",color:"#808080"}},grid:{bottom:150,left:0,right:"10%"},tooltip:{trigger:"item",formatter:" {b}：{c}百万美元 ({d}%)"},legend:{show:!1,orient:"vertical",top:"middle",right:"5%",textStyle:{color:"#f2f2f2",fontSize:25},icon:"roundRect"},series:[{radius:["25%","51%"],center:["50%","50%"],type:"pie",itemStyle:{normal:{color:function(e){return o[e.dataIndex]}}},labelLine:{normal:{show:!0,length:15,length2:120,lineStyle:{color:"#d3d3d3"},align:"right"},color:"#000",emphasis:{show:!0}},label:{normal:{formatter:function(e){var t="";switch(e.name){case"肉类食品":t="{a|}\n{nameStyle|肉类食品 }{rate|"+e.percent+"%}";break;case"种植食品":t="{b|}\n{nameStyle|种植食品}{rate|"+e.percent+"%}";break}return t},padding:[0,-110],height:165,rich:{a:{width:38,height:38,lineHeight:50,align:"left"},b:{width:29,height:45,lineHeight:50,align:"left"},c:{width:34,height:33,lineHeight:50,align:"left"},d:{width:34,height:44,lineHeight:50,align:"left"},e:{width:38,height:30,lineHeight:50,align:"left"},nameStyle:{fontSize:16,color:"#555",align:"left"},rate:{fontSize:20,color:"#1ab4b8",align:"left"}}}},data:a},{radius:["47%","51%"],center:["50%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},animation:!1,tooltip:{show:!1},itemStyle:{normal:{color:"rgba(250,250,250,0.5)"}},data:[{value:1}]}]}),n=w.S1(t.value);n.setOption(i),window.addEventListener("resize",(function(){n.resize()}))}return(0,i.bv)((()=>{l(e.outPie,"2017年")})),(0,i.YP)((()=>e.val),(t=>l(e.outPie,t))),{salePie2:t}}};const D=(0,v.Z)(k,[["render",x]]);var L=D;const z={ref:"saleLine",class:"saleLine"};function j(e,t,l,a,o,n){return(0,i.wg)(),(0,i.iD)("div",z,null,512)}l(541);var O={name:"saleLine",props:{inData:{type:Object},outData:{type:Object}},setup(e){let t=e.inData,l=e.outData,a=[],o=[],n=[];for(let i in t)a.unshift(i),o.unshift(l[i]),n.unshift(t[i]);let r=(0,p.iH)(),s=(0,p.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"粮食进出口总量(百万美元)",textStyle:{align:"center",color:"#121212",fontSize:20},top:"5%",left:"center"},legend:{top:"13%",show:!0,data:["进口总量","出口总量"]},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},grid:{top:"15%",left:"5%",right:"5%",bottom:"15%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0},splitArea:{color:"#f00",lineStyle:{color:"#f00"}},axisLabel:{color:"#121212"},splitLine:{show:!1},boundaryGap:!1,data:a}],yAxis:[{type:"value",min:0,splitNumber:4,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}}],series:[{name:"出口总量",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:25,lineStyle:{normal:{color:"#6c50f3",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!0,position:"top",textStyle:{color:"#6c50f3"}},itemStyle:{color:"#6c50f3",borderColor:"#fff",borderWidth:3,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!1},areaStyle:{normal:{color:new w.Q.o(0,0,0,1,[{offset:0,color:"rgba(108,80,243,0.3)"},{offset:1,color:"rgba(108,80,243,0)"}],!1),shadowColor:"rgba(108,80,243, 0.9)",shadowBlur:20}},data:o},{name:"进口总量",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:25,lineStyle:{normal:{color:"#00ca95",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!0,position:"bottom",textStyle:{color:"#121212"}},itemStyle:{color:"#00ca95",borderColor:"#fff",borderWidth:3,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!1},areaStyle:{normal:{color:new w.Q.o(0,0,0,1,[{offset:0,color:"rgba(0,202,149,0.3)"},{offset:1,color:"rgba(0,202,149,0)"}],!1),shadowColor:"rgba(0,202,149, 0.9)",shadowBlur:20}},data:n}]});function c(){let e=w.S1(r.value);e.setOption(s),window.addEventListener("resize",(function(){e.resize()}))}return(0,i.bv)((()=>{c()})),{saleLine:r,option:s}}};const H=(0,v.Z)(O,[["render",j],["__scopeId","data-v-31ead923"]]);var C=H,_=l(5387),W=l(65),Y={name:"sale",components:{salePie1:S,salePie2:L,saleLine:C},setup(){let e=(0,p.iH)(""),t=(0,p.iH)("");const l=(0,p.qj)([{value:"2017年",label:"2017年"},{value:"2018年",label:"2018年"},{value:"2019年",label:"2019年"},{value:"2020年",label:"2020年"},{value:"2021年",label:"2021年"},{value:"2022年",label:"2022年"}]),a=(0,W.oR)(),o=(0,_.Z)({inData:e=>e.Sale.inData,outData:e=>e.Sale.outData,inPie:e=>e.Sale.inPie,outPie:e=>e.Sale.outPie});return(0,i.bv)((()=>{a.dispatch("getSaleData")})),{...o,options:l,value1:e,value2:t}}};const q=(0,v.Z)(Y,[["render",f]]);var B=q},6570:function(e,t,l){l(1758),l(3790)}}]);
//# sourceMappingURL=753.f9414e95.js.map