<template>
    <div ref="nationLine" class="nationLine">

    </div>
</template>
  
<script>
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'nationLine2',
    props: {
        lineData2: {
            type: Object
        }
    },
    setup(props) {
        let lineData2 = props.lineData2
        let xAxis = []
        let lineData = []
        for (let i in lineData2) {
            xAxis.unshift(i)
            lineData.unshift(lineData2[i])
        }
        let nationLine = ref()
        let option = reactive({
            backgroundColor: 'rgba(225, 217  , 163,.6)',
            title: {
                text: "粮食生产总值(亿元)",
                textStyle: {
                    align: "center",
                    color: "#1C1C1C",
                    fontSize: 20,
                },
                left: "center",
                top: "2%"
            },
            grid: {
                left: "5%",
                right: "10%",
                top: "20%",
                bottom: "15%",
                containLabel: true,
            },
            tooltip: {
                show: true,
                trigger: "item",
            },
            legend: {
                show: true,
                x: "center",
                y: "35",
                icon: "stack",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "#4F4F4F",
                },
                data: ["粮食生产总值"],
            },
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    axisLabel: {
                        color: "#363636",
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#363636",
                        },
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "#195384",
                        },
                    },
                    data: xAxis
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "",
                    axisLabel: {
                        formatter: "{value}",
                        textStyle: {
                            color: "#363636",
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#363636",
                        },
                    },
                    axisTick: {
                        show: true,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#11366e",
                        },
                    },
                },
            ],
            series: [
                {
                    name: "粮食生产总值",
                    type: "line",
                    stack: "总量",
                    symbol: "circle",
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: "#00688B",
                            lineStyle: {
                                color: "#00688B",
                                width: 1,
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(107,142,35,0.5)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(107,142,35,0.9)'
                                }]),
                            }
                        },
                    },
                    markPoint: {
                        itemStyle: {
                            normal: {
                                color: "red",
                            },
                        },
                    },
                    data: lineData,
                }
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