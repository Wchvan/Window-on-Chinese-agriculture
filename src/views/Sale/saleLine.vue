<template>
    <div ref="saleLine" class="saleLine">

    </div>
</template>
  
<script>
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'saleLine',
    props: {
        inData: {
            type: Object
        },
        outData: {
            type: Object
        }
    },
    setup(props) {
        let inData = props.inData
        let outData = props.outData
        let xAxis = []
        let line1 = []
        let line2 = []
        for (let i in inData) {
            xAxis.unshift(i)
            line1.unshift(outData[i])
            line2.unshift(inData[i])
        }
        let saleLine = ref()
        let option = reactive({
            backgroundColor: 'rgba(225, 217  , 163,.6)',
            title: {
                text: "粮食进出口总量(百万美元)",
                textStyle: {
                    align: "center",
                    color: "#121212",
                    fontSize: 20,
                },
                top: "5%",
                left: "center",
            },
            legend: {
                top: '13%',
                show: true,
                data: ['进口总量', '出口总量']
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(0, 255, 233,0)",
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(255, 255, 255,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 255, 233,0)",
                                },
                            ],
                            global: false,
                        },
                    },
                },
            },
            grid: {
                top: "15%",
                left: "5%",
                right: "5%",
                bottom: "15%",
                containLabel: true
            },
            xAxis: [
                {
                    type: "category",
                    axisLine: {
                        show: true,
                    },
                    splitArea: {
                        // show: true,
                        color: "#f00",
                        lineStyle: {
                            color: "#f00",
                        },
                    },
                    axisLabel: {
                        color: "#121212",
                    },
                    splitLine: {
                        show: false,
                    },
                    boundaryGap: false,
                    data: xAxis,
                },
            ],

            yAxis: [
                {
                    type: "value",
                    min: 0,
                    // max: 140,
                    splitNumber: 4,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.1)",
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                        margin: 20,
                        textStyle: {
                            color: "#d1e6eb",
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: "出口总量",
                    type: "line",
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: "circle",
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#6c50f3",
                            shadowColor: "rgba(0, 0, 0, .3)",
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#6c50f3",
                        },
                    },
                    itemStyle: {
                        color: "#6c50f3",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: "rgba(0, 0, 0, .3)",
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false,
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(108,80,243,0.3)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(108,80,243,0)",
                                    },
                                ],
                                false
                            ),
                            shadowColor: "rgba(108,80,243, 0.9)",
                            shadowBlur: 20,
                        },
                    },
                    data: line1,
                },
                {
                    name: "进口总量",
                    type: "line",
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: "circle",
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#00ca95",
                            shadowColor: "rgba(0, 0, 0, .3)",
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: "bottom",
                        textStyle: {
                            color: "#121212",
                        },
                    },

                    itemStyle: {
                        color: "#00ca95",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: "rgba(0, 0, 0, .3)",
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false,
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(0,202,149,0.3)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(0,202,149,0)",
                                    },
                                ],
                                false
                            ),
                            shadowColor: "rgba(0,202,149, 0.9)",
                            shadowBlur: 20,
                        },
                    },
                    data: line2,
                },
            ],
        })
        function lineInit() {
            let mychart = echarts.init(saleLine.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            lineInit()
        })
        return {
            saleLine,
            option
        }
    }
}
</script>
  
<style lang="less" scoped>
.saleLine {
    width: 100%;
    height: 100%;
}
</style>