<template>
    <div ref="provinceLine2" class="provinceLine2"></div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'provinceLine2',
    props: {
        lineData2: {
            type: Object
        }
    },
    setup(props) {
        let provinceLine2 = ref()
        function init(lineData2) {
            let xAxis = []
            let lineData = []
            for (let i in lineData2) {
                xAxis.unshift(i)
                lineData.unshift(lineData2[i])
            }

            var option = reactive({
                backgroundColor: 'rgba(225, 217  , 163,.6)',
                title: {
                    text: "粮食生产总值（亿元）",
                    textStyle: {
                        align: "center",
                        color: "#121212",
                        fontSize: 24,
                    },
                    left: "center",
                },
                grid: {
                    left: 10,
                    top: "15%",
                    bottom: 20,
                    right: 40,
                    containLabel: true,
                },
                tooltip: {
                    show: true,
                    borderWidth: 1,
                    formatter: "{b}:{c}",
                    extraCssText: "box-shadow: 0 0 5px rgba(0, 0, 0, 1)",
                },
                xAxis: {
                    data: xAxis,
                    boundaryGap: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#5c6076",
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    ayisLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#5c6076",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#2e3547",
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#384157",
                        },
                    },
                },

                series: [
                    {
                        type: "bar",
                        name: "linedemo",

                        tooltip: {
                            show: false,
                        },
                        animation: false,
                        barWidth: 1.4,
                        hoverAnimation: false,
                        data: lineData,
                        itemStyle: {
                            normal: {
                                color: "#008080",
                                opacity: 0.6,
                                label: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        type: "line",
                        name: "linedemo",
                        smooth: true,
                        symbolSize: 10,
                        animation: false,
                        lineWidth: 1.2,
                        hoverAnimation: false,
                        data: lineData,
                        symbol: "circle",
                        itemStyle: {
                            normal: {
                                color: "#008080",
                                shadowBlur: 40,
                                label: {
                                    show: true,
                                    position: "top",
                                    textStyle: {
                                        color: "#008080",
                                    },
                                },
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: "#008080",
                                opacity: 0.08,
                            },
                        },
                    },
                ],
            })

            let mychart = echarts.init(provinceLine2.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            init(props.lineData2)
        })
        watch(() => props.lineData2, (newVal) => init(newVal))
        return {
            provinceLine2
        }
    }
}
</script>

<style>
.provinceLine2 {
    width: 100%;
    height: 100%;
}
</style>