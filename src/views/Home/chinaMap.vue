<template>
    <div class="mapchart" ref="mapDom">

    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import chinaMap from "@/assets/china.json";
export default {
    name: 'chinaMap',
    props: {
        mapData: {
            type: Array
        }
    },
    setup(props) {
        let reMapData = props.mapData
        var geoCoordMap = {
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "西藏": [91.11, 29.97],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "江苏": [118.8062, 31.9208],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891],

        };

        var colors = [
            ["#DD6B66", "#DE8438", "#6B8E23", "#CD5555", "	#A0522D", "#EEAD0E"],
        ];
        var colorIndex = 0;

        var year = ["2017", "2018", "2019", "2020", "2021", "2022"];
        var mapData = [[], [], [], [], [], []];

        /*柱子Y名称*/
        var categoryData = [];
        var barData = [];
        for (var key in geoCoordMap) {
            categoryData.push(key);
            mapData[0].push({
                "year": '2017',
                "name": key,
                "value": reMapData[0]['data'][key]
            });
            mapData[1].push({
                "year": '2018',
                "name": key,
                "value": reMapData[1]['data'][key]
            });
            mapData[2].push({
                "year": '2019',
                "name": key,
                "value": reMapData[2]['data'][key]
            });
            mapData[3].push({
                "year": '2020',
                "name": key,
                "value": reMapData[3]['data'][key]
            });
            mapData[4].push({
                "year": '2021',
                "name": key,
                "value": reMapData[4]['data'][key]
            });
            mapData[5].push({
                "year": '2022',
                "name": key,
                "value": reMapData[5]['data'][key]
            });
        }
        for (var i = 0; i < mapData.length; i++) {
            barData.push([]);
            for (var j = 0; j < mapData[i].length; j++) {
                barData[i].push(mapData[i][j].value)
            }
        }

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        let mapOption = reactive({
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#838e3e'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#D2691E'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#8A781F'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {
                grid: {
                    right: '1%',
                    top: '15%',
                    bottom: '10%',
                    width: '20%'
                },
                tooltip: {
                    trigger: 'item', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.5)' //hover颜色
                        }
                    },
                    // 设置提示框的显示内容
                    formatter: function (params) {
                        if (params.value[2]) {
                            return params.name + ' : ' + params.value[2];
                        } else if (params.value) {
                            return params.name + ' : ' + params.value;
                        }
                    },
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1.6,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(107,142,35, .5)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                // color:'rgba(0, 158, 255, 1)',
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(	205,173,0, .5)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(205,173,0, 1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: '#66b2ff',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#228B22',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        })
        for (var n = 0; n < year.length; n++) {
            mapOption.options.push({
                title: [{
                    top: '3%',
                    text: '农业产量',
                    left: '40%',
                    textStyle: {
                        fontSize: '32px',
                        color: '#838e3e'
                    }
                },
                {
                    id: 'statistic',
                    text: year[n] + "年数据统计情况",
                    left: '78%',
                    top: '5%',
                    textStyle: {
                        color: '#838e3e',
                        fontSize: 30
                    }
                }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#8B7D6B'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#2F4F4F'
                        }
                    },
                    data: categoryData
                },
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 300;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                                textStyle: {
                                    color: '#121212',
                                    fontSize: '14px',
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    color: '#121212',
                                    fontSize: '14px'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        }
                    },
                    //地图？
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#121212'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function (val) {
                            return val[2] / 300;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        data: barData[n]
                    }
                ]
            })
        }
        let mapDom = ref(null)
        function mapInit() {
            let mychart = echarts.init(mapDom.value)
            mychart.setOption(mapOption)
            window.addEventListener("resize", function () {
                mychart.resize();
            });
        }
        onMounted(() => {
            echarts.registerMap("china", { geoJSON: chinaMap });
            mapInit()
        })
        return {
            mapInit,
            mapOption,
            mapDom
        }
    }
}
</script>

<style lang="less">
.mapchart {
    width: 100%;
    height: 100%;
}
</style>