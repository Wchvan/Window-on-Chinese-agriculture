"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[619],{7619:function(e,l,a){a.r(l),a.d(l,{default:function(){return E}});var t=a(6468),o=(a(1758),a(1792),a(7960),a(3396));const i={class:"provinceWrapper"},n={class:"provinceName"},r=(0,o._)("span",null,"北京市",-1),s=(0,o._)("br",null,null,-1),c={class:"chartWrapper"},p={class:"topWrapper"},u={class:"line1"},v={class:"line2"},b={class:"bottomWrapper"},d={class:"line3"},y={class:"pie"};function m(e,l,a,m,h,f){const w=t.BT,g=t.km,x=(0,o.up)("provinceLine1"),S=(0,o.up)("provinceLine2"),L=(0,o.up)("provinceLine3"),D=(0,o.up)("provincePie");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",n,[r,s,(0,o.Wm)(g,{modelValue:m.pName,"onUpdate:modelValue":l[0]||(l[0]=e=>m.pName=e),class:"m-2",placeholder:"北京市",size:"large"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.poptions,(e=>((0,o.wg)(),(0,o.j4)(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),(0,o._)("div",c,[(0,o._)("div",p,[(0,o._)("div",u,[Object.keys(e.lineData1).length?((0,o.wg)(),(0,o.j4)(x,{key:0,lineData1:e.lineData1},null,8,["lineData1"])):(0,o.kq)("",!0)]),(0,o._)("div",v,[Object.keys(e.lineData2).length?((0,o.wg)(),(0,o.j4)(S,{key:0,lineData2:e.lineData2},null,8,["lineData2"])):(0,o.kq)("",!0)])]),(0,o._)("div",b,[(0,o._)("div",d,[Object.keys(e.lineData3).length?((0,o.wg)(),(0,o.j4)(L,{key:0,lineData3:e.lineData3},null,8,["lineData3"])):(0,o.kq)("",!0)]),(0,o._)("div",y,[(0,o.Wm)(g,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),class:"m-2",placeholder:"2017年粮食结构",size:"large"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.options,(e=>((0,o.wg)(),(0,o.j4)(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),Object.keys(e.pieData).length?((0,o.wg)(),(0,o.j4)(D,{key:0,pieData:e.pieData,val:m.value},null,8,["pieData","val"])):(0,o.kq)("",!0)])])])])}const h={ref:"provinceLine1",class:"provinceLine1"};function f(e,l,a,t,i,n){return(0,o.wg)(),(0,o.iD)("div",h,null,512)}a(541);var w=a(4870),g=a(6221),x={name:"provinceLine1",props:{lineData1:{type:Object}},setup(e){let l=(0,w.iH)();function a(e){let a=[];var t=[],o=[];for(let l in e["pd"])a.unshift(l),t.unshift(e["pd"][l]);for(let l in e["rd"])o.unshift(e["rd"][l]);let i=(0,w.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"粮食产量和消耗量（万吨）",textStyle:{align:"center",color:"#121212",fontSize:20},left:"center"},tooltip:{},grid:{left:"1%",right:"1%",bottom:"1%",containLabel:!0},legend:{itemGap:50,data:["粮食产量","消耗量"],textStyle:{color:"#121212",borderColor:"#fff"},top:"2%",right:"2%"},xAxis:[{type:"category",boundaryGap:!0,axisLine:{show:!0,lineStyle:{color:"#808080"}},axisLabel:{textStyle:{color:"#808080",margin:15}},axisTick:{show:!1},data:a}],yAxis:[{type:"value",min:0,splitNumber:7,splitLine:{show:!0,lineStyle:{color:"#808080"}},axisLine:{show:!1},axisLabel:{margin:20,textStyle:{color:"#808080"}},axisTick:{show:!1}}],series:[{name:"粮食产量",type:"line",showAllSymbol:!0,symbol:"emptyCircle",symbolSize:6,lineStyle:{normal:{color:"#28ffb3",opacity:"0.6"},borderColor:"#f0f"},label:{show:!0,position:"top",textStyle:{color:"#4F4F4F"}},itemStyle:{normal:{color:"#28ffb3"}},tooltip:{show:!1},areaStyle:{normal:{color:new g.Q.o(0,0,0,1,[{offset:0,color:"rgba(0,154,120,1)"},{offset:1,color:"rgba(0,0,0, 0)"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:t},{name:"消耗量",type:"bar",barWidth:20,tooltip:{show:!1},label:{show:!0,position:"top",textStyle:{color:"#4F4F4F"}},itemStyle:{normal:{color:function(e){var l=["rgba(128, 86, 156, 0.8)","rgba(142, 101, 165, 0.8)","rgba(156, 115, 174, 0.8)","rgba(170, 130, 182, 0.8)","rgba(184, 145, 191, 0.8)","rgba(198, 159, 200, 0.8)"];return l[e.dataIndex]}}},data:o}]}),n=g.S1(l.value);n.setOption(i),window.addEventListener("resize",(function(){n.resize()}))}return(0,o.bv)((()=>{a(e.lineData1)})),(0,o.YP)((()=>e.lineData1),(e=>{a(e)})),{provinceLine1:l}}},S=a(89);const L=(0,S.Z)(x,[["render",f]]);var D=L;const F={ref:"provinceLine2",class:"provinceLine2"};function k(e,l,a,t,i,n){return(0,o.wg)(),(0,o.iD)("div",F,null,512)}var j={name:"provinceLine2",props:{lineData2:{type:Object}},setup(e){let l=(0,w.iH)();function a(e){let a=[],t=[];for(let l in e)a.unshift(l),t.unshift(e[l]);var o=(0,w.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"粮食生产总值（亿元）",textStyle:{align:"center",color:"#121212",fontSize:24},left:"center"},grid:{left:10,top:"15%",bottom:20,right:40,containLabel:!0},tooltip:{show:!0,borderWidth:1,formatter:"{b}:{c}",extraCssText:"box-shadow: 0 0 5px rgba(0, 0, 0, 1)"},xAxis:{data:a,boundaryGap:!1,axisLine:{show:!1},axisLabel:{textStyle:{color:"#5c6076"}},axisTick:{show:!1}},yAxis:{ayisLine:{show:!1},axisLabel:{textStyle:{color:"#5c6076"}},splitLine:{show:!0,lineStyle:{color:"#2e3547"}},axisLine:{lineStyle:{color:"#384157"}}},series:[{type:"bar",name:"linedemo",tooltip:{show:!1},animation:!1,barWidth:1.4,hoverAnimation:!1,data:t,itemStyle:{normal:{color:"#008080",opacity:.6,label:{show:!1}}}},{type:"line",name:"linedemo",smooth:!0,symbolSize:10,animation:!1,lineWidth:1.2,hoverAnimation:!1,data:t,symbol:"circle",itemStyle:{normal:{color:"#008080",shadowBlur:40,label:{show:!0,position:"top",textStyle:{color:"#008080"}}}},areaStyle:{normal:{color:"#008080",opacity:.08}}}]});let i=g.S1(l.value);i.setOption(o),window.addEventListener("resize",(function(){i.resize()}))}return(0,o.bv)((()=>{a(e.lineData2)})),(0,o.YP)((()=>e.lineData2),(e=>a(e))),{provinceLine2:l}}};const P=(0,S.Z)(j,[["render",k]]);var A=P;const z={ref:"provinceLine3",class:"provinceLine3"};function H(e,l,a,t,i,n){return(0,o.wg)(),(0,o.iD)("div",z,null,512)}var C={name:"provinceLine3",props:{lineData3:{type:Object}},setup(e){let l=(0,w.iH)();function a(e){let a=[];var t=[],o=[];for(let l in e["area"])a.unshift(l),o.unshift(e["area"][l]);for(let l in e["av"])t.unshift(e["av"][l]);let i=(0,w.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"播种总量(千公顷)和亩产量(公斤公顷)",textStyle:{align:"center",color:"#121212",fontSize:20},top:"3%",left:"30%"},grid:{top:"25%",bottom:"10%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0}}},legend:{data:["播种面积","亩产量"],top:"15%",textStyle:{color:"#4F4F4F"}},xAxis:{data:a,axisLine:{show:!0,lineStyle:{color:"#4F4F4F"}},axisTick:{show:!0},axisLabel:{show:!0,textStyle:{color:"#4F4F4F"}}},yAxis:[{type:"value",name:"千公顷",nameTextStyle:{color:"#4F4F4F"},splitLine:{show:!1},axisTick:{show:!0},axisLine:{show:!0,lineStyle:{color:"#4F4F4F"}},axisLabel:{show:!0,formatter:"{value} ",textStyle:{color:"#4F4F4F"}}},{type:"value",name:"公斤公顷",nameTextStyle:{color:"#4F4F4F"},position:"right",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter:"{value} ",textStyle:{color:"#4F4F4F"}}},{type:"value",gridIndex:0,splitNumber:8,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}}],series:[{name:"亩产量",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,itemStyle:{color:"#3CB371"},lineStyle:{color:"#228B22"},areaStyle:{color:"rgba(32, 178, 170, 0.2)"},data:t},{name:"播种面积",type:"bar",barWidth:15,itemStyle:{normal:{color:new g.Q.o(0,0,0,1,[{offset:0,color:"#FFA500"},{offset:1,color:"#C9B92A"}])}},data:o}]}),n=g.S1(l.value);n.setOption(i),window.addEventListener("resize",(function(){n.resize()}))}return(0,o.bv)((()=>{a(e.lineData3)})),(0,o.YP)((()=>e.lineData3),(e=>a(e))),{provinceLine3:l}}};const _=(0,S.Z)(C,[["render",H]]);var N=_;const T={ref:"provincePie",class:"provincePie"};function O(e,l,a,t,i,n){return(0,o.wg)(),(0,o.iD)("div",T,null,512)}var q={name:"provincePie",props:{pieData:{type:Object},val:{type:String}},setup(e){let l=(0,w.iH)();function a(e,a){let t=[],o=[];for(let l in e[a]["ca1"]){let i=l.replaceAll("产量(万吨)","");i=i.replaceAll("产量（万吨）",""),i=i.replaceAll("总","");let n={value:e[a]["ca1"][l],name:i};t.unshift(i),o.unshift(n)}let i=(0,w.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",top:"5%",data:t},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"60%"],label:{normal:{color:"#121212",position:"inner",fontSize:"13px"}},labelLine:{normal:{show:!1}},data:o}]}),n=g.S1(l.value);n.setOption(i),window.addEventListener("resize",(function(){n.resize()}))}return(0,o.bv)((()=>{a(e.pieData,0)})),(0,o.YP)((()=>e.pieData),(e=>a(e,0))),(0,o.YP)((()=>e.val),(l=>{a(e.pieData,l)})),{provincePie:l}}};const W=(0,S.Z)(q,[["render",O],["__scopeId","data-v-09b732c2"]]);var B=W,J=a(5387),Y=a(65),Z={name:"province",components:{provinceLine1:D,provinceLine2:A,provincePie:B,provinceLine3:N},setup(){let e=(0,w.iH)("");const l=(0,w.qj)([{value:"BJ",label:"北京市"},{value:"AH",label:"安徽省"},{value:"CQ",label:"重庆市"},{value:"FJ",label:"福建省"},{value:"GS",label:"甘肃省"},{value:"GD",label:"广东省"},{value:"GX",label:"广西壮族自治区"},{value:"GZ",label:"贵州省"},{value:"HI",label:"海南省"},{value:"HE",label:"河北省"},{value:"HN",label:"河南省"},{value:"HL",label:"黑龙江省"},{value:"HB",label:"湖北省"},{value:"HU",label:"湖南省"},{value:"JL",label:"吉林省"},{value:"JS",label:"江苏省"},{value:"JX",label:"江西省"},{value:"LN",label:"辽宁省"},{value:"NM",label:"内蒙古自治区"},{value:"NX",label:"宁夏回族自治区"},{value:"QH",label:"青海省"},{value:"SD",label:"山东省"},{value:"SX",label:"山西省"},{value:"SN",label:"陕西省"},{value:"SH",label:"上海市"},{value:"SC",label:"四川省"},{value:"TJ",label:"天津市"},{value:"XZ",label:"西藏自治区"},{value:"XJ",label:"新疆维吾尔自治区"},{value:"YN",label:"云南省"},{value:"ZJ",label:"浙江省"}]);(0,o.YP)(e,((e,t)=>{i.dispatch("getProvinceData",e),a.value="2017年粮食结构",l.forEach((l=>{l.value==e&&(document.querySelector(".provinceName span").innerText=l.label)}))}));let a=(0,w.iH)("0");const t=(0,w.qj)([{value:"0",label:"2017年粮食结构"},{value:"1",label:"2018年粮食结构"},{value:"2",label:"2019年粮食结构"},{value:"3",label:"2020年粮食结构"},{value:"4",label:"2021年粮食结构"},{value:"5",label:"2022年粮食结构"}]),i=(0,Y.oR)(),n=(0,J.Z)({lineData1:e=>e.Province.lineData1,lineData2:e=>e.Province.lineData2,lineData3:e=>e.Province.lineData3,pieData:e=>e.Province.pieData});return(0,o.bv)((()=>{i.dispatch("getProvinceData","BJ")})),{...n,value:a,options:t,pName:e,poptions:l}}};const G=(0,S.Z)(Z,[["render",m]]);var E=G}}]);
//# sourceMappingURL=619.ef3c0df0.js.map