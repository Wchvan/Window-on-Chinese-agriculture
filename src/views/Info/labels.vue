<template>
    <div ref="labels" class="labels" id="cloudWord">

    </div>
</template>
    
<script>
import { reactive, ref, onMounted, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-wordcloud';
export default {
    name: 'labels',
    props: {
        labelData: {
            type: Array
        }
    },
    setup(props) {
        let labels = ref()
        function init(labelData) {
            let value = [60, 55, 75, 67, 80, 70, 60, 80, 50, 40, 60, 55, 75, 67, 80, 70, 60, 80, 50, 40, 60, 55, 75, 67, 80, 70, 60, 80, 50, 40]
            let data = []
            labelData.forEach((item, index) => {
                data.push({
                    name: item,
                    value: value[index]
                })
            });
            let option = {
                series: [
                    {
                        type: "wordCloud",
                        gridSize: 20,
                        sizeRange: [20, 35],
                        rotationRange: [-45, 45],
                        rotationStep: 20,
                        shape: "circle",
                        textStyle: {
                            fontFamily: 'ADR',
                            color: function () {
                                // Random color
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: "#333",
                            },
                        },
                        data: data
                    },
                ],
            };
            setTimeout(() => {
                let mychart = echarts.init(labels.value)
                mychart.setOption(option)
                window.addEventListener("resize", function () {
                    mychart.resize();
                });
            }, 50)
        }
        onMounted(() => {
            init(props.labelData)
        })
        watch(() => props.labelData, (newVal) => init(newVal))
        return {
            labels
        }
    }
}
</script>
    
<style lang="less" scoped>
canvas {
    background: none !important;
}

.labels {
    background: rgba(115, 145, 25, .4);
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
}
</style>