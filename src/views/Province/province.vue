<template>
  <div class="provinceWrapper">
    <div class="provinceName">
      <span>北京市</span>
      <el-select v-model="pName" placeholder="北京市" size="large">
        <el-option v-for="item in poptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="chartWrapper">
      <div class="topWrapper">
        <div class="line1">
          <provinceLine1 v-if="Object.keys(lineData1).length" :lineData1="lineData1"></provinceLine1>
        </div>
        <div class="line2">
          <provinceLine2 v-if="Object.keys(lineData2).length" :lineData2="lineData2"></provinceLine2>
        </div>
      </div>
      <div class="bottomWrapper">
        <div class="line3">
          <provinceLine3 v-if="Object.keys(lineData3).length" :lineData3="lineData3"></provinceLine3>
        </div>
        <div class="pie">
          <el-select v-model="value" class="m-2" placeholder="2017年粮食结构" size="large" v-if="Object.keys(pieData).length">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <provincePie v-if="Object.keys(pieData).length" :pieData="pieData" :val="value"></provincePie>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import provinceLine1 from './provinceLine1.vue';
import provinceLine2 from './provinceLine2.vue';
import provinceLine3 from './provinceLine3.vue';
import provincePie from './provincePie.vue';
import { onMounted, ref, reactive, watch } from 'vue';
import useMapState from "@/utils/useMapState"
import { useStore } from "vuex"
export default {
  name: 'province',
  components: { provinceLine1, provinceLine2, provincePie, provinceLine3 },
  setup() {
    // 选择省份
    let pName = ref('')
    const poptions = reactive([
      {
        "value": "BJ",
        "label": "北京市"
      }, {
        "value": "AH",
        "label": "安徽省"
      }, {
        "value": "CQ",
        "label": "重庆市"
      }, {
        "value": "FJ",
        "label": "福建省"
      }, {
        "value": "GS",
        "label": "甘肃省"
      }, {
        "value": "GD",
        "label": "广东省"
      }, {
        "value": "GX",
        "label": "广西壮族自治区"
      }, {
        "value": "GZ",
        "label": "贵州省"
      }, {
        "value": "HI",
        "label": "海南省"
      }, {
        "value": "HE",
        "label": "河北省"
      }, {
        "value": "HN",
        "label": "河南省"
      }
      , {
        "value": "HL",
        "label": "黑龙江省"
      }, {
        "value": "HB",
        "label": "湖北省"
      }, {
        "value": "HU",
        "label": "湖南省"
      }, {
        "value": "JL",
        "label": "吉林省"
      }, {
        "value": "JS",
        "label": "江苏省"
      }, {
        "value": "JX",
        "label": "江西省"
      }, {
        "value": "LN",
        "label": "辽宁省"
      }, {
        "value": "NM",
        "label": "内蒙古自治区"
      }, {
        "value": "NX",
        "label": "宁夏回族自治区"
      }, {
        "value": "QH",
        "label": "青海省"
      }, {
        "value": "SD",
        "label": "山东省"
      }, {
        "value": "SX",
        "label": "山西省"
      }, {
        "value": "SN",
        "label": "陕西省"
      }, {
        "value": "SH",
        "label": "上海市"
      }, {
        "value": "SC",
        "label": "四川省"
      }, {
        "value": "TJ",
        "label": "天津市"
      }, {
        "value": "XZ",
        "label": "西藏自治区"
      }, {
        "value": "XJ",
        "label": "新疆维吾尔自治区"
      }, {
        "value": "YN",
        "label": "云南省"
      }, {
        "value": "ZJ",
        "label": "浙江省"
      }])
    watch(pName, (newVal, oldVal) => {
      store.dispatch('getProvinceData', newVal)
      value.value = '2017年粮食结构'
      poptions.forEach(item => {
        if (item.value == newVal) {
          document.querySelector('.provinceName span').innerText = item.label
        }
      })
    })
    let value = ref('0')
    const options = reactive([
      {
        value: '0',
        label: '2017年粮食结构',
      },
      {
        value: '1',
        label: '2018年粮食结构',
      },
      {
        value: '2',
        label: '2019年粮食结构',
      },
      {
        value: '3',
        label: '2020年粮食结构',
      },
      {
        value: '4',
        label: '2021年粮食结构',
      }, {
        value: '5',
        label: '2022年粮食结构',
      },
    ])

    const store = useStore()
    const myState = useMapState({
      lineData1: state => state.Province.lineData1,
      lineData2: state => state.Province.lineData2,
      lineData3: state => state.Province.lineData3,
      pieData: state => state.Province.pieData,
    })
    onMounted(() => {
      store.dispatch('getProvinceData', 'BJ')
    })
    return {
      ...myState,
      value,
      options,
      pName,
      poptions
    }
  }
}
</script>

<style lang="less">
.provinceWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .provinceName {
    flex: 1;
    font-size: 40px;
    line-height: 80px;
    font-weight: 500;
    font-family: 'ADR';
    text-align: center;

    .el-select {
      float: right;
      margin-top: 25px;
      .el-input__inner::placeholder {
        color: #121212;
      }
    }
  }

  .chartWrapper {
    flex: 9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .topWrapper {
      flex: 1;
      display: flex;
      flex-direction: row;

      .line1,
      .line2 {
        margin: 40px;
        flex: 1;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          border-top: 2px solid #8B8B00;
          border-left: 2px solid #8B8B00;
          top: 0;
          left: 0;
        }

        &::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          border-bottom: 2px solid #8B8B00;
          border-right: 2px solid #8B8B00;
          right: 0;
          bottom: 0px;
        }
      }

      .line2 {
        margin-left: 0px;
      }
    }

    .bottomWrapper {
      flex: 1;
      display: flex;
      flex-direction: row;

      .line3,
      .pie {
        margin: 40px;
        margin-top: 0;
        flex: 1;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          border-top: 2px solid #8B8B00;
          border-left: 2px solid #8B8B00;
          top: 0;
          left: 0;
        }

        &::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          border-bottom: 2px solid #8B8B00;
          border-right: 2px solid #8B8B00;
          right: 0;
          bottom: 0;
        }
      }

      .pie {
        margin-left: 0px;
        position: relative;

        .el-select {
          z-index: 1;
          top: 3%;
          left: 50%;
          width: 180px;
          border: none !important;
          transform: translateX(-50%);
          position: absolute;

          .el-input__inner::placeholder {
            color: #121212;
          }
        }
      }

    }
  }
}</style>