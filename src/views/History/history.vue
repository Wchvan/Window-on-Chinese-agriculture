<template>
  <div class="historyWrapper">
    <el-icon class="arrowLeft">
      <ArrowLeft @click="leftHanlde" />
    </el-icon>
    <el-icon class="arrowRight">
      <ArrowRight @click="rightHanlde" />
    </el-icon>
    <div class="timeLineWrapper" ref="timeLineWrapper">
      <div class="timeLine" :style="{ left: leftStr }">
        <el-card class=" session" v-for=" (item, index ) in data" :key="index" shadow="hover"
          @click="showDetail(item.time, item.content)">
          <template #header>
            <div class="card-header">
              <span>{{ item.time }}</span>
              <hr>
            </div>
          </template>

          <div class="text item">{{ item.brief }}</div>
          <div class="dot"></div>
          <span class="rec"></span>
        </el-card>
      </div>
    </div>
    <el-dialog v-model="centerDialogVisible" :title="detailTit" width="35%" center top="16%" class="sessionDetail">
      <span class="detailContent">
        {{ detailContent }}
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

import { onMounted, ref, computed, reactive } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
export default {
  name: 'history',
  components: {
    ArrowLeft,
    ArrowRight
  },
  setup() {
    // line函数
    let timeLineWrapper = ref(null)
    let lineLeft = ref(0)
    let leftStr = computed(() => {
      return lineLeft.value + 'px'

    })
    function leftHanlde() {
      timeLineWrapper.value.scrollLeft -= 150

    }
    function rightHanlde() {
      timeLineWrapper.value.scrollLeft += 150
    }

    // line数据
    let data = reactive([
      {
        "time": "新石器时代晚期",
        "brief": "开始了农业生产，出现了水稻等农作物的种植",
        "content": "中国农业史上的第一件重要事件是农业的发展和定型，它发生在新石器时代晚期。在此之前，人们主要依靠采集和狩猎为生，生活水平较低。新石器时代晚期，人们开始了解种植作物和养殖家畜的方法，逐渐形成了农业经济。这个时期的代表性作物有小麦、稻米、豆类、蔬菜等。人们开始有了稳定的食物来源，人口也随之增加，社会开始出现分工和阶层。农业的发展和定型标志着中国社会向农业文明的转变，为中国文明的发展奠定了基础。"
      },
      {
        "time": "公元前二二一年",
        "brief": "秦始皇统一中国，推广农业生产，开展水利建设",
        "content": "秦始皇推行了均田制，取消了分封制度，将土地重新分配给农民，实现了土地资源的合理分配，提高了农民的耕作积极性和生产效率。其次，秦始皇还在全国范围内推广了水利工程建设。他下令修建了大量的灌溉渠道和水利设施，使得农田得以充分利用水资源，提高了农作物的产量。此外，秦始皇还推行了优胜劣汰的政策，鼓励发展优良品种，淘汰劣质品种，推广高产、抗逆性强的作物品种，以适应不同地区的生态条件和气候变化。,"
      },
      {
        "time": "东汉时期",
        "brief": "张骞出使西域，东西方农耕文化得到交流",
        "content": "张骞出使西域正值汉武帝实行“开疆拓土”政策，西域地区的粮食和农产品对于满足中原地区的粮食需求起到了至关重要的作用，中原地区的农业生产得以向西扩展，同时西域地区的农业技术和作物也得以引进中原地区。"
      },
      {
        "time": "唐宋时期",
        "brief": "发明了新式农具，大力推广水稻种植技术",
        "content": "唐代和宋代的农业科技改进，如耕作工具的改良、农业生产技术的创新，如制作农具的方法、育种、肥料的使用等都有了很大的发展。其中，宋代的育种技术和种植技术得到了很大的改进，例如推广精耕细作、播种、植树等技术。"
      },
      {
        "time": "一九五三年",
        "brief": "“一五”计划开始，奠定农业基础",
        "content": "实行土地改革，引进和制造农业机械，修建大型水利工程。组织农村合作社，推广集约化经营，加强农业科学技术的研究和推广，通过一五计划的实施，中国的农业生产得到了很大的提高，粮食产量从1952年的1,090亿斤增加到1957年的1,300亿斤，棉花、油料、糖料等农产品的产量也有了显著提高。同时，农村经济、农村基础设施和农村教育也得到了一定程度的发展，为中国农业的长期发展奠定了基础。"
      },
      {
        "time": "一九五八年",
        "brief": "大跃进运动和人民公社化运动，集体化农村经济",
        "content": "在大跃进运动期间，中央政府提出了“大跃进”和“人民公社”的口号，倡导“鼓足干劲、力争上游”的思想；在人民公社化运动期间，农村的生产资料被集中到了大型的人民公社中，农民被迫放弃个人生产，加入到集体化的生产中。大跃进运动和人民公社化运动对农业生产的影响是复杂的，既有推动农业现代化的一面，也有严重的负面影响"
      },
      {
        "time": "一九五九年",
        "brief": "三年自然灾害，粮食减产和严重饥荒",
        "content": "三年自然灾害（1959年-1961年）是中国历史上的一次重大自然灾害，由于多种因素的综合作用，导致了大规模的饥荒，由于气候异常、自然灾害频发和农业政策失误等多种因素，全国农作物大面积歉收，农民的生产积极性受到了很大的打击。"
      },
      {
        "time": "二十世纪八十年代",
        "brief": "改革开放,家庭联产承包责任制和农村实验改革",
        "content": "1982年，在全国范围内实行家庭联产承包责任制，使得农民可以自主经营土地并享有相应的经济利益;1984年，中国开始推行农村改革试验区，旨在探索新的农村发展模式。这些试验区率先实行了土地流转、合作经营、乡镇企业等一系列经济制度创新，有效地提高了农村的生产力和经济效益。"
      },
      {
        "time": "二十世纪九十年代",
        "brief": "杂交水稻技术全面推广，水稻产量大幅增长",
        "content": "杂交水稻比传统水稻产量高，耐倒伏，成熟期较短，种植面积较小，而且抗虫、抗病能力强，减少了农民对农药的使用量，从而提高了水稻生产的效益。杂交水稻产量比传统水稻高，可以在同一块田地上种更多的水稻，从而增加粮食供应量，为中国解决粮食短缺问题作出了重要贡献。"
      },
      {
        "time": "二零零六年",
        "brief": "废除农业税条例，大幅缓解三农问题",
        "content": "作为政府解决“三农”问题的重要举措，停止征收农业税不仅减少了农民的负担，增加了农民的公民权利，体现了现代税收中的“公平”原则，同时还符合“工业反哺农业”的趋势。从1992年开始，中国改革开放正式对农业体制进行改革，2006年废除延续千年的农业税。"
      },
      {
        "time": "二零一七年",
        "brief": "实施乡村振兴战略，大力发展农村经济",
        "content": "乡村振兴战略强调发展现代农业，提高农业综合生产能力，推动农业产业化、规模化和品牌化发展，促进农业技术创新和人才培养，提高农业科技含量和效益，使农业生产更加高效、可持续。"
      },
      {
        "time": " 二零一七年",
        "brief": "发布农业发展纲领性文件，规划农业发展",
        "content": "2021年3月14日，中国国务院发布了《“十四五”农业农村发展规划纲要》，该规划纲要是指导未来5年中国农业农村发展的蓝图。该规划纲要旨在促进中国农村经济的发展，提高农民收入，促进城乡一体化发展，实现“农业农村优先发展”战略目标。"
      }
    ])

    // 显示详情
    const centerDialogVisible = ref(false)
    const detailContent = ref('')
    const detailTit = ref('')
    function showDetail(time, content) {

      detailTit.value = time
      detailContent.value = content
      centerDialogVisible.value = true
    }
    return {
      leftHanlde,
      rightHanlde,
      lineLeft,
      leftStr,
      timeLineWrapper,
      data,
      centerDialogVisible,
      detailTit,
      detailContent,
      showDetail
    }
  }
}
</script>

<style lang="less" >
.sessionDetail {
  background: rgba(255, 231, 186, .8);

  .el-dialog__header {
    span {
      line-height: 36px;
      font-family: 'ADR';
      font-size: 24px;
    }
  }

  .detailContent {
    font-size: 18px;
    line-height: 25px;
    font-family: 'KT';
    font-weight: 600;
  }

  .el-button {
    background: rgba(107, 142, 35.9);
  }
}

.historyWrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .arrowLeft,
  .arrowRight {
    font-size: 70px;
    color: rgb(115, 145, 25);
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);

    &:nth-child(1) {
      left: 5%;
    }

    &:nth-child(2) {
      right: 5%;
    }
  }

  .timeLineWrapper {
    overflow-x: scroll;
    height: 100%;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .timeLine {
      position: absolute;
      display: flex;
      justify-content: space-around;
      height: 5px;
      width: 3600px;
      background: rgb(115, 145, 25);
      top: 50%;
      transform: translateY(-50%);

      .session {
        overflow: visible;
        position: relative;
        width: 800px;
        height: 250px;
        top: -300px;
        background: rgb(235, 232, 198);

        .card-header {
          text-align: center;
          font-family: 'ADR';
          font-size: 26px;
          line-height: 50px;
        }

        .el-card__body {
          padding: 5px 8px;
        }

        .text {
          font-size: 20px;
          line-height: 36px;
          font-family: 'KT';
          font-weight: 600;
          text-indent: 2em;
          // text-align: center;
        }

        .item {
          margin-bottom: 18px;
        }

        .rec {
          position: absolute;
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border: solid 20px transparent;
          border-top: 30px rgb(235, 232, 198) solid;
        }

        .dot {
          position: absolute;
          border: 2px solid #DCDFE6;
          bottom: -67px;
          left: 50%-5px;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          background: rgb(26, 113, 113);
          box-sizing: border-box;
        }

        &:nth-child(2n) {
          top: 50px;

          .rec {
            position: absolute;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border: solid 20px transparent;
            border-bottom: 30px rgb(235, 232, 198) solid;
          }

          .dot {
            top: -67px;
          }
        }
      }

    }
  }
}</style>
