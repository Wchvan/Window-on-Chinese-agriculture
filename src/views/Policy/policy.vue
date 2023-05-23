<template>
    <el-container class="policy">
        <el-aside width="70%">
            <div class="examples">
                <h1>🎯振兴案例</h1>
                <el-carousel :interval="5000" type="card" height="400px" @change="handleChange">
                    <el-carousel-item v-for=" (item, index ) in examples" :key="index">
                        <a :href="item.url" target="_blank">
                            <h3>{{ item.name }}</h3>
                            <img :src="item.imgUrl" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
                <el-card class="box-card">
                    <span>{{ content }}</span>
                </el-card>
            </div>
        </el-aside>
        <el-main>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span class="title">📕政策列表</span>
                    </div>
                </template>
                <a v-for=" ( item, index) in policy" :key="index" class="text item" :href="item.url" target="_blank">🛆{{
                    item.name }}</a>
            </el-card>
        </el-main>
    </el-container>
</template>

  
<script>
import { reactive, ref } from 'vue'
export default {
    name: 'policy',
    setup() {
        // 案例
        let examples = reactive([
            {
                "name": "山西大同云州区：小黄花，勤快人的“致富花”",
                "brief": "山西省运城地区的黄花已成为一种旅游景点和当地居民收入来源，帮助他们脱贫致富。2011年，该地区将黄花列为重点发展项目后，政府提供了土地转让和资金支持，并出台了一系列政策来支持种植黄花。该地区发展了生态旅游产业，吸引游客来参观自然和文化景观。",
                "url": "https://www.thepaper.cn/newsDetail_forward_8658535",
                imgUrl: require('@/assets/Policy/1.jpg')
            },
            {
                "name": "小蜜瓜大产业 河南兰考擘画乡村发展美好未来",
                "brief": "在全国率先摘掉贫困县帽子的兰考县，积极探索巩固脱贫攻坚成果同乡村振兴有效衔接的道路，用兰考蜜瓜一步步从小到大，由弱变强，进而带动形成以“兰考新三宝”特色主导产业，推进兰考农业品牌实现跨越发展的生动实践，探索出一条品牌助力乡村振兴的新路子。",
                "url": "http://finance.people.com.cn/n1/2021/0621/c1004-32136209.html",
                imgUrl: require('@/assets/Policy/2.jpg')
            },
            {
                "name": "数字赋能 换道超车 淄博市打造数字农业农村中心城市",
                "brief": "谈起山东省淄博市，工矿业名城的印象深入人心。在这座有着110多年近现代工业发展史的城市中，高效率、标准化的思维远远不囿于工业，以数字技术与农业农村经济社会深度融合为方向，当地引领农业农村现代化发展的“数字引擎”早已动能强劲。",
                "url": "http://health.people.com.cn/n1/2021/1021/c441091-32260255.html",
                imgUrl: require('@/assets/Policy/3.jpg')
            },
            {
                "name": "都江堰市：建粮优菜绿猕果花香田园综合体",
                "brief": "位于成都市都江堰市的天府源田园综合体，充分用好各级农业综合开发资源，成功打造以粮优菜绿猕果花香为特色的田园综合体整体，建成生产、产业、经营、生态、服务和运行等六大体系，有效促进了都江堰市全域乡村产业、人才、文化、生态、组织“五大振兴”。",
                "url": "http://health.people.com.cn/n1/2021/1009/c441091-32248243.html",
                imgUrl: require('@/assets/Policy/4.jpg')
            },
            {
                "name": "山东强县转身：蔬菜产业进击的“兰陵模式”",
                "brief": "兰陵县隶属于山东省临沂市，地处山东省南部，处于沿海地区大开放、黄淮海平原大开发的交叉地带。兰陵县聚焦聚力乡村振兴战略推进，率先落实市委乡村振兴“三步走”部署，通过政府引导推进、市场运作经营、基地规模发展，打造提升优质农产品基地，加快推动乡村产业兴旺。",
                "url": "http://health.people.com.cn/n1/2021/1013/c441091-32252366.html",
                imgUrl: require('@/assets/Policy/5.jpg')
            }
        ])
        function handleChange(index) {
            content.value = examples[index].brief
        }
        let content = ref(examples[0].brief)

        // 政策
        let policy = reactive([
            {
                "name": "国务院关于印发“十四五”推进农业农村现代化规划的通知",
                "url": "http://www.gov.cn/zhengce/content/2022-02/11/content_5673082.htm"
            },
            {
                "name": "中共中央 国务院关于做好2023年全面推进乡村振兴重点工作的意见",
                "url": "http://www.gov.cn/zhengce/2023-02/13/content_5741370.htm"
            },
            {
                "name": "农业农村部部署2023年农产品质量安全监管工作",
                "url": "http://www.gov.cn/xinwen/2023-03/22/content_5747813.htm"
            },
            {
                "name": "农业农村部组织开展畜禽屠宰“严规范 促提升 保安全”三年行动",
                "url": "http://www.gov.cn/lianbo/2023-04/11/content_5750915.htm"
            },
            {
                "name": "农业农村部安排部署南方水稻集中育秧工作",
                "url": "http://www.gov.cn/lianbo/2023-04/11/content_5750915.htm"
            },
            {
                "name": "农业农村部部署加快推进农产品初加工机械化工作",
                "url": "http://www.gov.cn/xinwen/2023-03/18/content_5747330.htm"
            },
            {
                "name": "农业农村部办公厅关于印发《2023年“虫口夺粮”保丰收行动方案》的通知",
                "url": "http://www.gov.cn/zhengce/zhengceku/2023-03/08/content_5745444.htm"
            },
            {
                "name": "农业农村部办公厅关于印发《农业农村领域行政许可事项监管规则和标准》的通知",
                "url": "http://www.gov.cn/zhengce/zhengceku/2023-03/14/content_5746597.htm"
            },
            {
                "name": "农业农村部关于落实党中央国务院2023年全面推进乡村振兴重点工作部署的实施意见",
                "url": "http://www.gov.cn/zhengce/zhengceku/2023-02/22/content_5742671.htm"
            },
            {
                "name": "国家林业和草原局 自然资源部 生态环境部 水利部 农业农村部关于印发《互花米草防治专项行动计划（2022—2025年）》的通知",
                "url": "http://www.gov.cn/xinwen/2023-03/16/content_5747029.htm"
            },
            {
                "name": "农业农村部印发指导意见 加强水生生物资源养护",
                "url": "http://www.gov.cn/xinwen/2022-12/05/content_5730143.htm"
            },
            {
                "name": "农业农村部制定发布《农业综合行政执法管理办法》",
                "url": "http://www.gov.cn/xinwen/2022-11/30/content_5729571.htm"
            },
            {
                "name": "关于印发《关于扩大当前农业农村基础设施建设投资的工作方案》的通知",
                "url": "http://www.gov.cn/zhengce/zhengceku/2022-10/26/content_5721717.htm"
            },
            {
                "name": "农业农村部、国家发展改革委联合印发《农业农村减排固碳实施方案》",
                "url": "http://www.gov.cn/xinwen/2022-07/01/content_5698717.htm"
            },
            {
                "name": "中共中央办公厅 国务院办公厅印发《乡村振兴责任制实施办法》",
                "url": "http://www.gov.cn/zhengce/2022-12/14/content_5731828.htm"
            },
            {
                "name": "国家乡村振兴局等七部门印发《农民参与乡村建设指南（试行）》",
                "url": "http://www.gov.cn/xinwen/2023-01/17/content_5737532.htm"
            },
            {
                "name": "国家林业和草原局 农业农村部 自然资源部 国家乡村振兴局关于印发《“十四五”乡村绿化美化行动方案》的通知",
                "url": "http://www.gov.cn/zhengce/zhengceku/2022-11/06/content_5724986.htm"
            },
            {
                "name": "中共中央办公厅 国务院办公厅印发《乡村振兴责任制实施办法》",
                "url": "http://www.gov.cn/zhengce/2022-12/14/content_5731828.htm"
            }
        ])
        return {
            examples,
            content,
            handleChange,
            policy
        }
    }
}
</script>

  
<style lang="less">
.policy {
    width: 100%;
    height: 100%;

    .el-aside {
        height: 100%;
        overflow: hidden;
        .examples {
            margin: 3%;
            height: 92%;
            width: 94%;
            background: rgba(225, 217, 163, .6);
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

            h1 {
                display: block;
                font-size: 45px;
                font-family: 'ADR';
                line-height: 80px;
                text-align: center;
            }

            .el-carousel {
                position: absolute;
                top: 38%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);

                .el-carousel__item--card.is-active {
                    left: -7%;
                    width: 64%;
                }

                .el-carousel__indicators--outside button {
                    background: rgba(123, 123, 0);

                }

                .el-carousel__arrow {
                    background-color: rgba(178, 34, 34, 0.5);
                }

                .el-carousel__arrow:hover {
                    background: rgba(178, 34, 34, 0.9);
                }

                .el-carousel__item {
                    border-radius: 10px;

                    a {
                        height: 100%;
                        width: 100%;
                        position: relative;
                        display: block;

                        h3 {
                            border-radius: 5px;
                            position: absolute;
                            height: 40px;
                            line-height: 40px;
                            bottom: 0;
                            text-align: center;
                            display: block;
                            width: 100%;
                            color: #121212;
                            background: rgba(156, 156, 156, .8);
                            font-family: 'KT';
                            font-weight: bold;
                            font-size: 20px;
                        }

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                }
            }

            .el-card {
                background: rgba(134, 139, 34, .8);
                position: absolute;
                top: 65%;
                left: 50%;
                transform: translateX(-50%);
                width: 75%;
                border-radius: 20px;
                height: 30%;
                font-family: 'KT';
                font-weight: 800;
                font-size: 20px;
                line-height: 40px;
                overflow: auto;
                text-indent: 2em;

                .el-card__body {
                    padding: 5px;
                }
            }
        }
    }

    .el-main {
        height: 95%;
        width: 100%;
        margin: 2%;

        .el-card {
            height: 97%;
            background: rgba(225, 217, 163, .6);
            position: relative;
            border: 0;

            .el-card__header {
                padding: 10px;
                border-bottom: 2px solid #8B8B00;

                .card-header {
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    display: block;
                    font-size: 30px;
                    font-family: 'ADR';
                }
            }

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

            .el-card__body {
                overflow: auto;
                height: 90%;

                .text {
                    display: block;
                    font-family: 'KT';
                    font-size: 20px;
                    line-height: 40px;
                    color: #121212;
                    text-decoration: none;
                    font-weight: bold;
                }

                .text:hover {
                    color: #1E90FF;
                }
            }
        }
    }
}</style>