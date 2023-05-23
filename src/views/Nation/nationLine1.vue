<template>
    <div ref="nationLine" class="nationLine">

    </div>
</template>
  
<script>
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'nationLine1',
    props: {
        lineData1: {
            type: Object
        }
    },
    setup(props) {
        let lineData1 = props.lineData1
        let nationLine = ref()
        let xAxis = []
        var lineData = [];
        var barData = [];

        for (let i in lineData1['pd']) {
            xAxis.unshift(i)
            lineData.unshift(lineData1['pd'][i])
        }
        for (let i in lineData1['rd']) {
            barData.unshift(lineData1['rd'][i])
        }
        // option
        let option = reactive({
            backgroundColor: 'rgba(225, 217  , 163,.6)',
            title: {
                text: "人均粮食生产和消耗量(公斤)",
                textStyle: {
                    align: "center",
                    color: "#121212",
                    fontSize: 20,
                },
                left: "center",
                top: "2%"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true,
                        backgroundColor: "#333",
                    },
                },
            },
            legend: {
                data: ["人均生产总量", "人均消耗量"],
                textStyle: {
                    color: "#2F4F4F",
                },
                top: '8%'
            },
            xAxis: {
                data: xAxis,
                axisLine: {
                    lineStyle: {
                        color: "#2F4F4F",
                    },
                },
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#2F4F4F",
                    },
                },
                axisTick: {
                    show: true
                }

            },
            series: [
                {
                    name: "人均生产总量",
                    type: "line",
                    smooth: true,
                    showAllSymbol: true,
                    symbol: "emptyCircle",
                    symbolSize: 15,
                    itemStyle: {
                        color: 'rgb(107,142,35)'
                    },
                    data: lineData,
                },
                {
                    name: "人均消耗量",
                    type: "bar",
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "#228B22" },
                                { offset: 1, color: "#9ACD32" },
                            ]),
                        },
                    },
                    data: barData,
                },
                {
                    name: "人均生产总量",
                    type: "bar",
                    barGap: "-100%",
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "rgba(75,92,116,0.5)" },
                                { offset: 0.2, color: "rgba(75,92,116,0.2)" },
                                { offset: 1, color: "rgba(75,92,116,0)" },
                            ]),
                        },
                    },
                    z: -12,
                    data: lineData,
                },
            ],
        })
        function lineInit() {
            let mychart = echarts.init(nationLine.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            lineInit()
        })
        return {
            nationLine,
            option
        }
    }
}
</script>
  
<style lang="less" scoped>
.nationLine {
    width: 100%;
    height: 100%;
}
</style>