<template>
    <div ref="salePie1" class="salePie1"></div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
    name: 'salePie1',
    props: {
        inPie: {
            type: Object
        },
        val: {
            type: String
        }
    },
    setup(props) {
        let salePie1 = ref()
        function init(inPie, val) {
            let data = []
            for (let i in inPie) {
                let name = ''
                if (i == 'meat') {
                    name = '肉类食品'
                } else {
                    name = '种植食品'
                }
                let temp = {
                    'name': name,
                    'value': inPie[i][val]
                }
                data.push(temp)
            }
            var colorList = [
                "#afa3f5",
                "#00d488",
                "#3feed4",
                "#3bafff",
                "#f1bb4c",
                "rgba(250,250,250,0.5)",
            ];


            let option = reactive({

                backgroundColor: 'rgba(225, 217  , 163,.6)',
                title: {
                    text: "进口结构",
                    x: 'center',
                    top: '47%',
                    textStyle: {
                        fontSize: '26px',
                        fontWeight: 'normal',
                        color: '#808080'
                    }
                },
                grid: {
                    bottom: 150,
                    left: 0,
                    right: "10%",
                },
                tooltip: {
                    trigger: "item",
                    formatter: " {b}：{c}百万美元 ({d}%)",
                },
                legend: {
                    show: false,
                    orient: "vertical",
                    top: "middle",
                    right: "5%",
                    textStyle: {
                        color: "#f2f2f2",
                        fontSize: 25,
                    },
                    icon: "roundRect",
                },
                series: [
                    // 主要展示层的
                    {
                        radius: ["25%", "51%"],
                        center: ["50%", "50%"],
                        type: "pie",
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex];
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 15,
                                length2: 120,
                                lineStyle: {
                                    color: "#d3d3d3",
                                },
                                align: "right",
                            },
                            color: "#000",
                            emphasis: {
                                show: true,
                            },
                        },
                        label: {
                            normal: {
                                formatter: function (params) {
                                    var str = "";
                                    switch (params.name) {
                                        case "肉类食品":
                                            str =
                                                "{a|}\n{nameStyle|肉类食品 }" +
                                                "{rate|" +
                                                params.percent +
                                                "%}";
                                            break;
                                        case "种植食品":
                                            str =
                                                "{b|}\n{nameStyle|种植食品}" +
                                                "{rate|" +
                                                params.percent +
                                                "%}";
                                            break;
                                    }
                                    return str;
                                },
                                padding: [0, -110],
                                height: 165,
                                rich: {
                                    a: {
                                        width: 38,
                                        height: 38,
                                        lineHeight: 50,
                                        // backgroundColor: {
                                        //     image: sportsIcon.e,
                                        // },
                                        align: "left",
                                    },
                                    b: {
                                        width: 29,
                                        height: 45,
                                        lineHeight: 50,
                                        // backgroundColor: {
                                        //     image: sportsIcon.d,
                                        // },
                                        align: "left",
                                    },
                                    c: {
                                        width: 34,
                                        height: 33,
                                        lineHeight: 50,
                                        // backgroundColor: {
                                        //     image: sportsIcon.c,
                                        // },
                                        align: "left",
                                    },
                                    d: {
                                        width: 34,
                                        height: 44,
                                        lineHeight: 50,
                                        // backgroundColor: {
                                        //     image: sportsIcon.b,
                                        // },
                                        align: "left",
                                    },
                                    e: {
                                        width: 38,
                                        height: 30,
                                        lineHeight: 50,
                                        // backgroundColor: {
                                        //     image: sportsIcon.a,
                                        // },
                                        align: "left",
                                    },
                                    nameStyle: {
                                        fontSize: 16,
                                        color: "#555",
                                        align: "left",
                                    },
                                    rate: {
                                        fontSize: 20,
                                        color: "#1ab4b8",
                                        align: "left",
                                    },
                                },
                            },
                        },
                        data: data
                    },
                    // 边框的设置
                    {
                        radius: ["47%", "51%"],
                        center: ["50%", "50%"],
                        type: "pie",
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            },
                        },
                        animation: false,
                        tooltip: {
                            show: false,
                        },
                        itemStyle: {
                            normal: {
                                color: "rgba(250,250,250,0.5)",
                            },
                        },
                        data: [
                            {
                                value: 1,
                            },
                        ],
                    },
                ],
            })

            let mychart = echarts.init(salePie1.value)
            mychart.setOption(option)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }

        onMounted(() => {
            init(props.inPie, "2017年")
        })
        watch(() => props.val, newVal => init(props.inPie, newVal))
        return {
            salePie1
        }
    }
}
</script>

<style>
.salePie1 {
    width: 100%;
    height: 100%;
}
</style>