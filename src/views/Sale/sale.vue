<template>
  <div class="saleWrapper">
    <div class="saleStructure">
      <div class="pie1">
        <el-select v-model="value1" class="m-2" placeholder="2017年" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
            v-if="Object.keys(inPie).length" />
        </el-select>
        <salePie1 v-if="Object.keys(inPie).length" :inPie="inPie" :val="value1"></salePie1>
      </div>
      <div class="pie2">
        <el-select v-model="value2" class="m-2" placeholder="2017年" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
            v-if="Object.keys(outPie).length" />
        </el-select>
        <salePie2 v-if="Object.keys(outPie).length" :outPie="outPie" :val="value2"></salePie2>
      </div>
    </div>
    <div class="saleChange">
      <div class="line">
        <saleLine v-if="Object.keys(inData).length" :inData="inData" :outData="outData"></saleLine>
      </div>
      <div class="saleConclusion">
        <el-container>
          <el-header>结论</el-header>
          <el-main>进出口方面看来，自2017到2022年，我国粮食进出口总量总体呈上升趋势，前四年较为平缓，后两年势头较足，最终出口与进口总量分别达到了3500000百万美元和2700000百万美元，每年出口均高出进口500000百亿美元左右，为我国外汇创造了不错的贸易顺差。而对于进口结构，从2017年开始，进口结构中肉类产品占比逐年增加，到2020年开始下降；出口结构中肉类产品占比下降三年，最终稳定在25%左右。总而言之，进出口结构的不断动态调整也是根据国际市场和消费者需求的动态变化，为的是争取到更大的经济效益和尽可能满足国内消费需求，出口与进口的差额无疑为我国创造了贸易顺差的经济优势，这是粮食大国与经济政策配合下的效益的体现。</el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import salePie1 from './salePie1.vue';
import salePie2 from './salePie2.vue';
import saleLine from './saleLine.vue';
import { onMounted, ref, reactive } from 'vue';
import useMapState from "@/utils/useMapState"
import { useStore } from "vuex"
export default {

  name: 'sale',
  components: { salePie1, salePie2, saleLine },
  setup() {
    let value1 = ref('')
    let value2 = ref('')
    const options = reactive([
      {
        value: '2017年',
        label: '2017年',
      },
      {
        value: '2018年',
        label: '2018年',
      },
      {
        value: '2019年',
        label: '2019年',
      },
      {
        value: '2020年',
        label: '2020年',
      },
      {
        value: '2021年',
        label: '2021年',
      }, {
        value: '2022年',
        label: '2022年',
      },
    ])
    const store = useStore()
    const myState = useMapState({
      inData: state => state.Sale.inData,
      outData: state => state.Sale.outData,
      inPie: state => state.Sale.inPie,
      outPie: state => state.Sale.outPie,
    })
    onMounted(() => {
      store.dispatch('getSaleData')
    })
    return {
      ...myState,
      options,
      value1,
      value2
    }
  }
}
</script>

<style lang="less">
.saleWrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .saleStructure {
    flex: 1;
    display: flex;
    flex-direction: column;

    .pie1,
    .pie2 {
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
        top: 10%;
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

    .pie2 {
      margin-top: 0;
    }
  }

  .saleChange {
    flex: 1;
    display: flex;
    flex-direction: column;

    .line,
    .saleConclusion {
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

    .saleConclusion {
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