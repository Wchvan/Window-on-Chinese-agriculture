<template>
    <div ref="provinceLine1" class="provinceLine1"></div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'provinceLine1',
    props: {
        lineData1: {
            type: Object
        }
    },
    setup(props) {
        let provinceLine1 = ref()
        function init(lineData1) {
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
            let option = reactive({
                backgroundColor: 'rgba(225, 217  , 163,.6)',
                title: {
                    text: "粮食产量和消耗量（万吨）",
                    textStyle: {
                        align: "center",
                        color: "#121212",
                        fontSize: 20,
                    },
                    left: "center",
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "none",
                        label: {
                            show: true,
                            backgroundColor: "#333",
                        },
                    }
                },
                grid: {
                    left: "1%",
                    right: "1%",
                    bottom: "1%",
                    containLabel: true,
                },
                legend: {
                    itemGap: 50,
                    data: ["粮食产量", "消耗量"],
                    textStyle: {
                        color: "#121212",
                        borderColor: "#fff",
                    },
                    top: '2%',
                    right: '2%'
                },
                xAxis: [
                    {
                        type: "category",
                        boundaryGap: true,
                        axisLine: {
                            //坐标轴轴线相关设置。数学上的x轴
                            show: true,
                            lineStyle: {
                                color: "#808080",
                            },
                        },
                        axisLabel: {
                            //坐标轴刻度标签的相关设置
                            textStyle: {
                                color: "#808080",
                                margin: 15,
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        data: xAxis,
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        min: 0,
                        // max: 140,
                        splitNumber: 7,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "#808080",
                            },
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            margin: 20,
                            textStyle: {
                                color: "#808080",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: "粮食产量",
                        type: "line",
                        smooth: true, //是否平滑曲线显示
                        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                        showAllSymbol: true,
                        symbol: "emptyCircle",
                        symbolSize: 6,
                        lineStyle: {
                            normal: {
                                color: "#28ffb3", // 线条颜色
                                opacity: '0.6'
                            },
                            borderColor: "#f0f",
                        },
                        label: {
                            show: true,
                            position: "top",
                            textStyle: {
                                color: "#4F4F4F",
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#28ffb3",
                            },
                        },
                        areaStyle: {
                            //区域填充样式
                            normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "rgba(0,154,120,1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,0,0, 0)",
                                        },
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                                shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                            },
                        },
                        data: lineData,
                    },
                    {
                        name: "消耗量",
                        type: "bar",
                        barWidth: 20,
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
                        label: {
                            show: true,
                            position: "top",
                            textStyle: {
                                color: "#4F4F4F",
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        "rgba(128, 86, 156, 0.8)",  // 深紫色
                                        "rgba(142, 101, 165, 0.8)",
                                        "rgba(156, 115, 174, 0.8)",
                                        "rgba(170, 130, 182, 0.8)",
                                        "rgba(184, 145, 191, 0.8)",
                                        "rgba(198, 159, 200, 0.8)"
                                    ];

                                    return colorList[params.dataIndex];
                                },
                            },
                        },
                        data: barData,
                    },
                ],
            })
            let mychart = echarts.init(provinceLine1.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            init(props.lineData1)
        })
        watch(() => props.lineData1, (newVal) => {
            init(newVal)
        })
        return {
            provinceLine1
        }
    }
}
</script>

<style>
.provinceLine1 {
    width: 100%;
    height: 100%;
}
</style>