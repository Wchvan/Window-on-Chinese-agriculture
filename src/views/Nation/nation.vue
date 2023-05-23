<template>
  <div class="nationWrapper">
    <div class="leftWrapper">
      <div class="line1">
        <nationLine1 v-if="Object.keys(lineData1).length" :lineData1="lineData1"></nationLine1>
      </div>
      <div class="pie">
        <el-select v-if="Object.keys(pieData).length" v-model="value" class="m-2" placeholder="2017年粮食结构" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <nationPie v-if="Object.keys(pieData).length" :pieData="pieData" :val=value></nationPie>
      </div>
    </div>
    <div class="rightWrapper">
      <div class="line2">
        <nationLine2 v-if="Object.keys(lineData2).length" :lineData2="lineData2"></nationLine2>
      </div>
      <div class="nationConclusion">
        <el-container>
          <el-header>
            结论
          </el-header>
          <el-main>
            <span>从国家层面看来，自2017年到2022年，人均粮食消耗量维持在20000公斤线上浮动，人均粮食生产量能在65000公斤高位维持，在疫情影响下仍然保持增长势头，两者差值约45000公斤，是粮食存储安全和粮食出口效益的重要保证。我国近六年粮食生产总值从59000亿元增长到了80000亿元，疫情三年未抑制住我国粮食生产总值的增长势头。从近六年的粮食结构看来，谷物和蔬菜这类基础粮食的主导地位未被撼动，种植业中仍是我国粮食安全基本保证；而牛羊猪肉等高水平的消费追求占比有上升趋势，无疑反映出我国粮食产能的充足和我国人民对于高水平消费的追求。总而言之，虽然疫情影响了我们发展向前的脚步，但是我国粮食产能仍能够稳中求进，生产总值逐年增加，保证了人民消费结构优化的需求。</span>
          </el-main>
        </el-container>
      </div>
    </div>

  </div>
</template>

<script>
import nationLine1 from './nationLine1.vue';
import nationPie from './nationPie.vue';
import nationLine2 from './nationLine2.vue';
import { onMounted, reactive, ref } from 'vue';
import useMapState from "@/utils/useMapState"
import { useStore } from "vuex"
export default {
  name: 'nation',
  components: { nationPie, nationLine1, nationLine2 },
  setup() {
    const value = ref('')

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
      lineData1: state => state.Nation.lineData1,
      lineData2: state => state.Nation.lineData2,
      pieData: state => state.Nation.pieData,
    })
    onMounted(() => {
      store.dispatch('getNationData')
    })
    return {
      ...myState,
      options,
      value
    }
  }
}
</script>

<style lang="less" >
.nationWrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .leftWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;

    .line1,
    .pie {
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
        bottom: 0;
      }

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

    .pie {
      margin-top: 0;
    }
  }

  .rightWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;

    .line2,
    .nationConclusion {
      margin: 40px;
      flex: 1;
      margin-left: 0;
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

    .nationConclusion {
      background: rgba(225, 217, 163, .6);
      margin-top: 0px;
      height: 100%;
      overflow: hidden;

      .el-container {
        height: 100%;

        .el-header {
          line-height: 60px;
          font-size: 36px;
          font-family: 'ADR';
          text-align: center;
        }

        .el-main {
          overflow: auto;
          margin: 8px;
          line-height: 32px;
          font-size: 20px;
          text-indent: 2em;
          font-weight: 800;
          font-family: 'KT';

        }
      }
    }
  }
}</style>