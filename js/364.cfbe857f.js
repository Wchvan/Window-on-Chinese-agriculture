"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[364],{3364:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var l=a(9740),n=(a(1758),a(6957),a(7086),a(6570),a(6468)),i=(a(1792),a(7960),a(3396));const o={class:"nationWrapper"},r={class:"nationCharts"},s={class:"leftWrapper"},c={class:"line1"},p={class:"pie"},u={class:"rightWrapper"},d={class:"line2"},f={class:"nationConclusion"},v=(0,i._)("span",null,"从国家层面看来，自2017年到2022年，人均粮食消耗量也维持在20000公斤线上浮动，人均粮食生产量能在65000公斤高位维持，在疫情影响下仍然保持增长势头，两者差值约45000公斤，是粮食存储安全和粮食出口效益的重要保证。我国近六年粮食生产总值从59000亿元增长到了80000亿元，疫情三年未抑制住我国粮食生产总值的增长势头。从近六年的粮食结构看来，谷物和蔬菜这类基础粮食的主导地位未被撼动，种植业中的谷物和蔬菜仍是我国粮食安全基本保证；而牛羊猪肉等高水平的消费追求占比有上升趋势，无疑反映出我国粮食产能的充足和我国人民对于高水平消费的追求。总而言之，虽然疫情影响了我们发展向前的脚步，但是我国粮食产能仍能够稳中求进，生产总值逐年增加，保证了人民消费结构优化的需求。",-1);function b(e,t,a,b,m,y){const g=(0,i.up)("nationLine1"),h=n.BT,w=n.km,D=(0,i.up)("nationPie"),S=(0,i.up)("nationLine2"),x=l.nZ,L=l.b2,k=l.G4;return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[(0,i._)("div",s,[(0,i._)("div",c,[Object.keys(e.lineData1).length?((0,i.wg)(),(0,i.j4)(g,{key:0,lineData1:e.lineData1},null,8,["lineData1"])):(0,i.kq)("",!0)]),(0,i._)("div",p,[(0,i.Wm)(w,{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e),class:"m-2",placeholder:"2017年粮食结构",size:"large"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.options,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),Object.keys(e.pieData).length?((0,i.wg)(),(0,i.j4)(D,{key:0,pieData:e.pieData,val:b.value},null,8,["pieData","val"])):(0,i.kq)("",!0)])]),(0,i._)("div",u,[(0,i._)("div",d,[Object.keys(e.lineData2).length?((0,i.wg)(),(0,i.j4)(S,{key:0,lineData2:e.lineData2},null,8,["lineData2"])):(0,i.kq)("",!0)]),(0,i._)("div",f,[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" 结论 ")])),_:1}),(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[v])),_:1})])),_:1})])])])])}const m={ref:"nationLine",class:"nationLine"};function y(e,t,a,l,n,o){return(0,i.wg)(),(0,i.iD)("div",m,null,512)}a(541);var g=a(4870),h=a(6221),w={name:"nationLine1",props:{lineData1:{type:Object}},setup(e){let t=e.lineData1,a=(0,g.iH)(),l=[];var n=[],o=[];for(let i in t["pd"])l.unshift(i),n.unshift(t["pd"][i]);for(let i in t["rd"])o.unshift(t["rd"][i]);let r=(0,g.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"人均粮食生产和消耗量(公斤)",textStyle:{align:"center",color:"#121212",fontSize:20},left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["人均生产总量","人均消耗量"],textStyle:{color:"#2F4F4F"},top:"8%"},xAxis:{data:l,axisLine:{lineStyle:{color:"#2F4F4F"}}},yAxis:{splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#2F4F4F"}},axisTick:{show:!0}},series:[{name:"人均生产总量",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,itemStyle:{color:"rgb(107,142,35)"},data:n},{name:"人均消耗量",type:"bar",barWidth:20,itemStyle:{normal:{barBorderRadius:5,color:new h.Q.o(0,0,0,1,[{offset:0,color:"#228B22"},{offset:1,color:"#9ACD32"}])}},data:o},{name:"人均生产总量",type:"bar",barGap:"-100%",barWidth:20,itemStyle:{normal:{color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(75,92,116,0.5)"},{offset:.2,color:"rgba(75,92,116,0.2)"},{offset:1,color:"rgba(75,92,116,0)"}])}},z:-12,data:n}]});function s(){let e=h.S1(a.value);e.setOption(r),window.addEventListener("resize",(function(){e.resize()}))}return(0,i.bv)((()=>{s()})),{nationLine:a,option:r}}},D=a(89);const S=(0,D.Z)(w,[["render",y],["__scopeId","data-v-a5346d74"]]);var x=S;const L={ref:"nationPie",class:"nationPie"};function k(e,t,a,l,n,o){return(0,i.wg)(),(0,i.iD)("div",L,null,512)}var _={name:"nationPie",props:{pieData:{type:Object},val:{type:String}},setup(e){let t=(0,g.iH)();function a(e,a){let l=[],n=[],i=[];for(let t in e[a]["ca1"]){let l=t.replaceAll("(万吨)","");l=l.replaceAll("产量",""),l=l.replaceAll("总",""),l=l.replaceAll("（万吨）",""),l=l.replaceAll("(万吨）","");let i={value:e[a]["ca1"][t],name:l};n.unshift(i)}for(let t in e[a]["ca2"]){let n=t.replaceAll("(万吨)","");n=n.replaceAll("产量",""),n=n.replaceAll("总",""),n=n.replaceAll("（万吨）",""),n=n.replaceAll("(万吨）","");let o={value:e[a]["ca2"][t],name:n};l.unshift(n),i.unshift(o)}let o=(0,g.qj)({tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}万吨 ({d}%)"},legend:{orient:"vertical",x:"left",top:"5%",data:l},series:[{name:"粮食结构",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{normal:{position:"inner",fontSize:"13px"}},labelLine:{normal:{show:!1}},data:n},{name:"粮食结构",type:"pie",radius:["40%","55%"],label:{color:"#121212"},data:i}]}),r=h.S1(t.value);r.setOption(o),window.addEventListener("resize",(function(){r.resize()}))}return(0,i.bv)((()=>{a(e.pieData,0)})),(0,i.YP)((()=>e.val),(t=>a(e.pieData,t))),{nationPie:t}}};const j=(0,D.Z)(_,[["render",k],["__scopeId","data-v-51f7d386"]]);var A=j;const z={ref:"nationLine",class:"nationLine"};function C(e,t,a,l,n,o){return(0,i.wg)(),(0,i.iD)("div",z,null,512)}var F={name:"nationLine2",props:{lineData2:{type:Object}},setup(e){let t=e.lineData2,a=[],l=[];for(let i in t)a.unshift(i),l.unshift(t[i]);let n=(0,g.iH)(),o=(0,g.qj)({backgroundColor:"rgba(225, 217  , 163,.6)",title:{text:"粮食生产总值(亿元)",textStyle:{align:"center",color:"#1C1C1C",fontSize:20},left:"center"},grid:{left:"5%",right:"10%",top:"20%",bottom:"15%",containLabel:!0},tooltip:{show:!0,trigger:"item"},legend:{show:!0,x:"center",y:"35",icon:"stack",itemWidth:10,itemHeight:10,textStyle:{color:"#4F4F4F"},data:["粮食生产总值"]},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{color:"#363636"},axisLine:{show:!0,lineStyle:{color:"#363636"}},splitLine:{show:!1,lineStyle:{color:"#195384"}},data:a}],yAxis:[{type:"value",name:"",axisLabel:{formatter:"{value}",textStyle:{color:"#363636"}},axisLine:{lineStyle:{color:"#363636"}},axisTick:{show:!0},splitLine:{show:!0,lineStyle:{color:"#11366e"}}}],series:[{name:"粮食生产总值",type:"line",stack:"总量",symbol:"circle",symbolSize:8,itemStyle:{normal:{color:"#00688B",lineStyle:{color:"#00688B",width:1},areaStyle:{color:new h.Q.o(0,1,0,0,[{offset:0,color:"rgba(107,142,35,0.5)"},{offset:1,color:"rgba(107,142,35,0.9)"}])}}},markPoint:{itemStyle:{normal:{color:"red"}}},data:l}]});function r(){let e=h.S1(n.value);e.setOption(o),window.addEventListener("resize",(function(){e.resize()}))}return(0,i.bv)((()=>{r()})),{nationLine:n,option:o}}};const W=(0,D.Z)(F,[["render",C],["__scopeId","data-v-5cf9278e"]]);var O=W,P=a(5387),q=a(65),H={name:"nation",components:{nationPie:A,nationLine1:x,nationLine2:O},setup(){const e=(0,g.iH)(""),t=(0,g.qj)([{value:"0",label:"2017年粮食结构"},{value:"1",label:"2018年粮食结构"},{value:"2",label:"2019年粮食结构"},{value:"3",label:"2020年粮食结构"},{value:"4",label:"2021年粮食结构"},{value:"5",label:"2022年粮食结构"}]),a=(0,q.oR)(),l=(0,P.Z)({lineData1:e=>e.Nation.lineData1,lineData2:e=>e.Nation.lineData2,pieData:e=>e.Nation.pieData});return(0,i.bv)((()=>{a.dispatch("getNationData")})),{...l,options:t,value:e}}};const Z=(0,D.Z)(H,[["render",b]]);var B=Z},6570:function(e,t,a){a(1758),a(3790)}}]);
//# sourceMappingURL=364.cfbe857f.js.map