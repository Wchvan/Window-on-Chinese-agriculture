<template>
  <div ref="nationPie" class="nationPie">

  </div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
  name: 'nationPie',
  props: {
    pieData: {
      type: Object
    },
    val: {
      type: String
    }
  },
  setup(props) {
    let nationPie = ref()
    function init(pieData, val) {
      let ca2Name = []
      let ca1 = []
      let ca2 = []
      for (let i in pieData[val]['ca1']) {
        let j = i.replaceAll('(万吨)', '')
        j = j.replaceAll('产量', '')
        j = j.replaceAll('总', '')
        j = j.replaceAll('（万吨）', "")
        j = j.replaceAll('(万吨）', "")
        let temp = {
          "value": pieData[val]['ca1'][i],
          "name": j
        }
        ca1.unshift(temp)
      }
      for (let i in pieData[val]['ca2']) {
        let j = i.replaceAll('(万吨)', '')
        j = j.replaceAll('产量', '')
        j = j.replaceAll('总', '')
        j = j.replaceAll('（万吨）', "")
        j = j.replaceAll('(万吨）', "")
        let temp = {
          "value": pieData[val]['ca2'][i],
          "name": j
        }
        ca2Name.unshift(j)
        ca2.unshift(temp)
      }

      let option = reactive({
        backgroundColor: 'rgba(225, 217  , 163,.6)',
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "vertical",
          x: "left",
          top: '5%',
          data: ca2Name,
        },
        series: [
          {
            name: "粮食结构",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              // show:false,
              normal: {
                position: "inner",
                fontSize: '13px'
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: ca1,
          },
          {
            name: "粮食结构",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              color: '#121212'
            },
            data: ca2,
          },
        ],
      })
      let mychart = echarts.init(nationPie.value)
      mychart.setOption(option)
      window.addEventListener("resize", function () {
        mychart.resize();
      });

    }
    onMounted(() => {
      init(props.pieData, 0)
    })
    watch(() => props.val, newVal => init(props.pieData, newVal))
    return {
      nationPie
    }
  }
}
</script>

<style lang="less" scoped>
.nationPie {
  width: 100%;
  height: 100%;
}
</style>