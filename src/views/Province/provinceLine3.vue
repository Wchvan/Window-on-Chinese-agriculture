<template>
    <div ref="provinceLine3" class="provinceLine3"></div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'provinceLine3',
    props: {
        lineData3: {
            type: Object
        }
    },
    setup(props) {
        let provinceLine3 = ref()
        function init(lineData3) {
            let xAxis = []
            var lineData = [];
            var barData = [];

            for (let i in lineData3['area']) {
                xAxis.unshift(i)
                barData.unshift(lineData3['area'][i])
            }
            for (let i in lineData3['av']) {
                lineData.unshift(lineData3['av'][i])
            }

            let option = reactive({
                backgroundColor: 'rgba(225, 217  , 163,.6)',
                title: {
                    text: "播种总量(千公顷)和亩产量(公斤公顷)",
                    textStyle: {
                        align: "center",
                        color: "#121212",
                        fontSize: 20,
                    },
                    top: "3%",
                    left: "30%",
                },
                grid: {
                    top: "25%",
                    bottom: "10%", //也可设置left和right设置距离来控制图表的大小
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true,
                        },
                    },
                },
                legend: {
                    data: ["播种面积", "亩产量"],
                    top: "15%",
                    textStyle: {
                        color: "#4F4F4F",
                    },
                },
                xAxis: {
                    data: xAxis,
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: "#4F4F4F",
                        },
                    },
                    axisTick: {
                        show: true, //隐藏X轴刻度
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#4F4F4F", //X轴文字颜色
                        },
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        name: "千公顷",
                        nameTextStyle: {
                            color: "#4F4F4F",
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#4F4F4F",
                            },
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value} ",
                            textStyle: {
                                color: "#4F4F4F",
                            },
                        },
                    },
                    {
                        type: "value",
                        name: "公斤公顷",
                        nameTextStyle: {
                            color: "#4F4F4F",
                        },
                        position: "right",
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value} ", //右侧Y轴文字显示
                            textStyle: {
                                color: "#4F4F4F",
                            },
                        },
                    },
                    {
                        type: "value",
                        gridIndex: 0,
                        splitNumber: 8,
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: "亩产量",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: true, //平滑曲线显示
                        showAllSymbol: true, //显示所有图形。
                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 10, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: "#3CB371",
                        },
                        lineStyle: {
                            color: "#228B22",
                        },
                        areaStyle: {
                            color: "rgba(32, 178, 170, 0.2)",
                        },
                        data: lineData,
                    },
                    {
                        name: "播种面积",
                        type: "bar",
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "#FFA500",
                                    },
                                    {
                                        offset: 1,
                                        color: "#C9B92A",
                                    },
                                ]),
                            },
                        },
                        data: barData,
                    },
                ],
            })
            let mychart = echarts.init(provinceLine3.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            init(props.lineData3)
        })
        watch(() => props.lineData3, (newVal) => init(newVal))
        return {
            provinceLine3
        }
    }
}
</script>

<style>
.provinceLine3 {
    width: 100%;
    height: 100%;
}
</style>