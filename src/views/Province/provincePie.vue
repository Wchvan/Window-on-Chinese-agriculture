<template>
  <div ref="provincePie" class="provincePie">

  </div>
</template>
  
<script>
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
export default {
  name: 'provincePie',
  props: {
    pieData: {
      type: Object
    },
    val: {
      type: String
    }
  },
  setup(props) {
    let provincePie = ref()
    function init(pieData, val) {
      let name = []
      let ca1 = []
      for (let i in pieData[val]['ca1']) {
        let j = i.replaceAll('产量(万吨)', '')
        j = j.replaceAll('产量（万吨）', '')
        j = j.replaceAll('总', '')
        let temp = {
          "value": pieData[val]['ca1'][i],
          "name": j
        }
        name.unshift(j)
        ca1.unshift(temp)
      }

      let option = reactive({
        backgroundColor: 'rgba(225, 217  , 163,.6)',
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          x: "left",
          top: '5%',
          data: name,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "60%"],

            label: {
              normal: {
                color: '#121212',
                position: "inner",
                fontSize: '13px'
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: ca1
          },
        ],
      })

      let mychart = echarts.init(provincePie.value)
      mychart.setOption(option)
      window.addEventListener("resize", function () {
        mychart.resize();
      });
    }
    onMounted(() => {
      init(props.pieData, 0)
    })
    watch(() => props.pieData, (newVal) => init(newVal, 0))
    watch(() => props.val, (newVal) => {
      init(props.pieData, newVal)
    })
    return {
      provincePie
    }
  }
}
</script>
  
<style lang="less" scoped>
.provincePie {
  width: 100%;
  height: 100%;
}
</style>