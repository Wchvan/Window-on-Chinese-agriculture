<template>
    <div class="infoCover">
        <span class="tit">粮食关系图</span>
        <div class="relation" ref="infoChart">
        </div>
    </div>
    <el-dialog v-model="centerDialogVisible" :title="title" width="50%" center top="10%" class="caDetail">
        <el-container>
            <el-aside width="50%">
                <span class="detailTit">
                    <el-icon class="icon">
                        <Tickets />
                    </el-icon>
                    粮食简介
                </span>
                <span class="detailContent">
                    {{ detailContent }}
                </span>
            </el-aside>
            <el-main>
                <span class="detailTit">
                    <el-icon class="icon">
                        <Tickets />
                    </el-icon>
                    关键词云
                </span>
                <div class="labelsWrapper">
                    <labels v-if="centerDialogVisible" :labelData="labelData"></labels>
                </div>
            </el-main>
        </el-container>
    </el-dialog>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts';
import labels from './labels.vue';
export default {
    name: 'info',
    components: { labels },
    setup() {
        // 总数据
        let relationData = {
            "种植食品": [
                {
                    "name": "水稻",
                    "introduce": "水稻是一种主要粮食作物，是世界上最重要的粮食作物之一。它是一种禾本科植物，属于稻属，一般被认为是在中国南部起源的。水稻在亚洲是最古老的农作物之一，已有数千年的种植历史。目前，水稻是世界上超过50%的人类的主食来源，被认为是解决全球粮食安全问题的重要作物之一。",
                    "labels": [
                        "遍布全国各地",
                        "稻品种繁多",
                        "粳稻",
                        "糯稻",
                        "籼稻",
                        "碳水化合物",
                        "蛋白质",
                        "矿物质"
                    ]
                },
                {
                    "name": "小麦",
                    "introduce": "小麦是一种谷类作物，属于禾本科小麦属，是人类主要的粮食作物之一。小麦起源于中东地区，经过漫长的演化和培育，现在已经广泛分布于世界各地。在世界粮食作物中，小麦的面积和产量仅次于玉米和稻米，是人类主要的三大粮食作物之一。",
                    "labels": [
                        "黄淮海平原",
                        "长江流域",
                        "东北平原",
                        "春小麦",
                        "冬小麦",
                        "适应性强",
                        "收获期短",
                        "产量高",
                        "一年"
                    ]
                },
                {
                    "name": "玉米",
                    "introduce": "玉米是一种重要的粮食作物，属于禾本科植物，起源于中美洲地区。其粒果为一种种子，可以食用或加工成各种食品和工业原料。在世界范围内，玉米是种植面积最广、产量最高的粮食作物之一，也是人们饮食结构中重要的来源之一。",
                    "labels": [
                        "东北地区最为广泛",
                        "适应性强",
                        "干旱地区生长",
                        "主要谷物",
                        "蓄水量少",
                        "产量高",
                        "淀粉",
                        "抗倒伏"
                    ]
                },
                {
                    "name": "高粱",
                    "introduce": "高粱，又称黍、稷、秫、谷子等，是一种古老的粮食作物。它的颖果外形独特，似小毛刷，粒子大小不均匀。",
                    "labels": [
                        "北方和西北方多",
                        "耐旱",
                        "耐寒",
                        "抗倒伏",
                        "生长期短",
                        "蛋白质",
                        "淀粉",
                        "脂肪",
                        "维生素"
                    ]
                },
                {
                    "name": "马铃薯",
                    "introduce": "马铃薯是茄科、薯属植物，是全球第四大主要粮食作物，也是蔬菜中的重要种类。它原产于南美洲，主要生长在海拔2000米以下的温带和亚热带地区，现已被广泛种植于全球各地，是世界上最重要的粮食作物之一。",
                    "labels": [
                        "全国各地种植",
                        "适应性强",
                        "生长快",
                        "产量高",
                        "蛋白质",
                        "矿物质",
                        "三年两熟到一年一熟",
                        "淀粉含量高"
                    ]
                },
                {
                    "name": "花生",
                    "introduce": "花生，也叫作落花生、土豆、地瓜仁等，是豆科植物的一种。花生是一种经济作物和蛋白质来源，被广泛种植和食用。花生原产于南美洲，现在已在全球许多地方种植，包括中国、印度、尼日利亚、美国等国家。",
                    "labels": [
                        "北方多",
                        "蛋白质",
                        "脂肪等",
                        "用途广泛",
                        "油料",
                        "食品加工",
                        "油脂多",
                        "营养价值高",
                        "东北平原"
                    ]
                },
                {
                    "name": "甘蔗",
                    "introduce": "甘蔗是一种多年生草本植物，属于禾本科甘蔗属，原产于南亚和南太平洋地区。甘蔗的茎粗大，内部含有丰富的糖分，可以用来制糖、酿酒和生产能源。甘蔗还可以作为家畜和家禽的饲料，也可以用来制作食品和药品。在热带和亚热带地区广泛种植，是一种重要的经济作物。",
                    "labels": [
                        "南方多",
                        "高产作物",
                        "利用广泛",
                        "酿酒",
                        "能源",
                        "糖料",
                        "耐旱涝",
                        "糖料作物",
                        "附加值高",
                        "种植面积广",
                        "北回归线"
                    ]
                },
                {
                    "name": "甜菜",
                    "introduce": "中国主要分布在新疆、黑龙江、内蒙古等地。甜菜喜温作物，但耐寒性较强。土壤肥力高、土层深厚、结构良好、保肥水能力强且具有便利灌溉条件是获得高产、高糖的基础。甜菜在深而富含有机质的松软土壤上生长良好，施用化肥和粪肥均有良效。甜菜是重要的经济作物，也是中国主要糖料作物之一。",
                    "labels": [
                        "糖料作物",
                        "北方",
                        "喜温耐寒",
                        "保肥保水",
                        "主产区东北",
                        "产糖效率高",
                        "秦岭淮河以北",
                        "环境友好",
                        "附加值高"
                    ]
                },
                {
                    "name": "油菜",
                    "introduce": "主要集中于江西婺源篁（huáng）岭、汉中盆地和长江流域各地。在食品工业中还可制作人造奶油、人造蛋白。还在冶金、机械、橡胶、化工、油漆、纺织、制皂、造纸、皮革和医药等方面都有广泛的用途，具有重要的经济价值。",
                    "labels": [
                        "油料作物",
                        "南方",
                        "需水量大",
                        "两年三熟到一年两熟",
                        "产油量足",
                        "价值高",
                        "附加值高"
                    ]
                },
                {
                    "name": "茶叶",
                    "introduce": "茶叶分布于中国大部地区（我国主产长江以南各地）。茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。",
                    "labels": [
                        "南方作物",
                        "喜阴好湿",
                        "丘陵种植",
                        "附加值高",
                        "酸性红壤",
                        "两年三熟到一年两熟"
                    ]
                }
            ],
            "肉类食品": [
                {
                    "name": "猪肉",
                    "introduce": "猪是人类驯养的最古老的家畜之一，约有9000年的历史。猪是一种常见的食用动物，全身都可以食用，是世界上最主要的肉类之一。在中国，猪被誉为“家畜之王”，在中华文化中有着重要的地位。",
                    "labels": [
                        "产地多",
                        "家畜之王",
                        "营养丰富",
                        "用途广泛",
                        "食品加工",
                        "工业原料"
                    ]
                },
                {
                    "name": "牛肉",
                    "introduce": "牛是一种哺乳动物，是人类历史上最早驯养的家畜之一。牛的起源可以追溯到约1万年前的新石器时代。牛是以植物为主要饲料的草食动物，主要产地包括欧洲、北美洲、南美洲、亚洲和非洲。在世界范围内，牛肉是最常见的肉类之一，在很多国家被视为主要的食物来源之一。",
                    "labels": [
                        "多产于内蒙古",
                        "高蛋白",
                        "低脂肪",
                        "用途广泛",
                        "皮革制造"
                    ]
                },
                {
                    "name": "羊肉",
                    "introduce": "羊是一种草食性动物，属于哺乳纲、偶蹄目、反刍亚目、牛科、绵羊属，是世界上重要的畜牧动物之一。羊的数量众多，广泛分布于世界各地，特别是在草原和半干旱地区。",
                    "labels": [
                        "西北地区多",
                        "氨基酸组成丰富",
                        "高蛋白",
                        "低脂肪",
                        "利于肝脏和神经系统"
                    ]
                },
                {
                    "name": "鸡肉",
                    "introduce": "鸡，又称为鸡科鸟类家禽，是人类常见的家禽之一。鸡的体型较小，大多数品种的体重在1至3公斤之间，但也有一些特别大型的品种。鸡肉是一种较为常见的肉类食品，含有较多的蛋白质、氨基酸、维生素和矿物质等营养物质，是人们日常饮食中的重要组成部分。",
                    "labels": [
                        "主要的肉类",
                        "广泛分布",
                        "富含氨基酸",
                        "维生素B群、铁等"
                    ]
                },
                {
                    "name": "鸭",
                    "introduce": "鸭是是人类常见的家禽之一。中国养鸭的历史久远，在古籍《尔雅》中就记载了伏羲氏发明网捕捉野鸟的事迹，其中被捕的野鸟中就有绿头野鸭。当时将野鸭称之为凫，家鸭称之为鹜。鸭营养丰富，含有较多的蛋白质、氨基酸、维生素和矿物质等营养物质，是人们日常饮食中的重要组成部分。",
                    "labels": [
                        "家禽",
                        "富含蛋白质",
                        "肉质紧实",
                        "氨基酸含量高",
                        "味道鲜美"
                    ]
                },
                {
                    "name": "鹅",
                    "introduce": "鹅是食草动物，鹅肉含蛋白质，其组成接近人体所需氨基酸的比例，从生物学价值上来看，鹅肉是全价蛋白质、优质蛋白质。鹅肉中的脂肪含量也较低，而且品质好，单一的不饱和脂肪酸的含量高，特别是亚麻酸含量超过其它肉类，鹅肉的脂肪熔点亦很低，质地柔软，容易被人体消化吸收，还含有相当量的钙、磷、钾、钠等十多种微量元素，对人体健康有利。",
                    "labels": [
                        "家禽",
                        "富含蛋白质",
                        "肉质紧实",
                        "氨基酸含量高",
                        "味道鲜美"
                    ]
                }
            ],
            "水产食品": [
                {
                    "name": "鱼",
                    "introduce": "鱼是一种广泛存在于淡水和海水中的脊椎动物，属于脊索动物门、硬骨鱼纲，是人类重要的食品之一。根据不同的分类系统，鱼类的数量可以有很大的变化，目前已知的鱼类约有3万多种，其中海水鱼类约有15,000种，淡水鱼类约有15,000种以上。",
                    "labels": [
                        "分布范围广泛",
                        "种类多",
                        "营养丰富",
                        "蛋白质",
                        "维生素",
                        "易于消化"
                    ]
                },
                {
                    "name": "虾类",
                    "introduce": "虾是一种广泛分布于淡水、近海和海洋的节肢动物，属于甲壳纲动物。虾的身体呈卵圆形，由头、胸、腹三部分组成，头部有一对长须和一对复眼，胸部有五对脚，腹部有数对呼吸足和尾部。",
                    "labels": [
                        "多产于南海和东海沿岸",
                        "营养丰富",
                        "种类多",
                        "青虾",
                        "对虾",
                        "明虾",
                        "河虾",
                        "高蛋白",
                        "矿物质",
                        "维生素"
                    ]
                },
                {
                    "name": "贝类",
                    "introduce": "贝类是一类软体动物，通常具有扁平的壳体，壳体两侧可以合拢或张开，以保护自己或捕食猎物。贝类分布广泛，生活在淡水或海水中，是一种重要的食用海产品。",
                    "labels": [
                        "多产于东海、南海",
                        "种类多",
                        "营养丰富",
                        "用途广泛",
                        "食品",
                        "制药",
                        "工业"
                    ]
                },
                {
                    "name": "藻类",
                    "introduce": "藻类是一类广泛存在于水中或湿润环境中的单细胞或多细胞生物，是植物界的一支。藻类的体型和生活方式多种多样，有的是单细胞微型生物，有的则可以长成几十米长的大型海藻。",
                    "labels": [
                        "温带淡水区多",
                        "维持生态平衡",
                        "环境污染",
                        "光合作用",
                        "用途广泛",
                        "化妆品",
                        "药品"
                    ]
                },
                {
                    "name": "软体动物类",
                    "introduce": "体卵形或卵圆形，肌肉强健，外套腔开口窄，体表一般不具水孔。腕吸盘1列或2列。雄性左侧或右侧第3腕茎化，腕腹缘具精沟，末端具勺状舌叶；茎化腕不能自断。漏斗外套锁退化。具1对退化针状内壳或无内壳。若具齿舌，齿舌侧齿一般单尖。胃和盲肠位于消化腺后部。",
                    "labels": [
                        "营养价值高",
                        "章鱼",
                        "鱿鱼",
                        "牡蛎",
                        "味道鲜美"
                    ]
                },
                {
                    "name": "蟹类",
                    "introduce": "蟹是十足目短尾次目的甲壳动物，尤指短尾族的种类（真蟹）。亦包括其他一些类型，如歪尾族的种类约有4700种。其分布见于所有海洋、河流及陆地。蟹的尾部与其他十足目（如虾、龙虾、螯虾）不同，卷曲于胸部下方，背甲通常宽阔。第一对胸足特化为螯足。通常以步行或爬行的方式移动。 ",
                    "labels": [
                        "南方多",
                        "阳澄湖大闸蟹",
                        "高蛋白质",
                        "松叶蟹",
                        "附加值高",
                        "帝王蟹",
                        "养殖成本高"
                    ]
                }
            ]
        }
        // 关系图
        let infoChart = ref()
        function chartInit() {
            let myChart = echarts.init(infoChart.value)
            var colors = ["#DD6B66", "#6B8E23", "#A0522D", "#20B2AA",]
            let categories = [{ name: "粮食", itemStyle: { color: colors[0] } }]
            let nodes = [{ name: '粮食', symbolSize: 80, category: '粮食' }]
            let links = []
            let index = 1
            for (let i in relationData) {
                // catagories部分
                let name = i;
                let color = colors[index++]
                let temp = {
                    name: name,
                    itemStyle: {
                        color,
                    },
                }
                categories.push(temp)
                // graph nodes部分
                temp = {
                    name: name,
                    symbolSize: 60,
                    category: name
                }
                nodes.push(temp)
                for (let j in relationData[i]) {
                    temp = {
                        name: relationData[i][j].name,
                        symbolSize: 40,
                        value: relationData[i][j].introduce,
                        labels: relationData[i][j].labels,
                        category: i
                    }
                    nodes.push(temp)
                }
                // graph links部分
                temp = {
                    source: "粮食",
                    target: name
                }
                links.push(temp)

                for (let j in relationData[i]) {
                    temp = {
                        source: i,
                        target: relationData[i][j].name
                    }
                    links.push(temp)
                }

            }
            var graph = {
                nodes,
                links
            };
            const defaultCategory = "粮食";
            const currentGraph = {
                nodes: {},
                links: {},
            };
            const nodeMap = {};
            // 页面加载时，第一次初始化图
            function init() {
                // 根据定义的常量，产生currentGraph的默认数据
                // 遍历全部nodes和links，产生node映射map
                for (let i = 0; i < graph.nodes.length; i++) {
                    if (graph.nodes[i].category === defaultCategory) {
                        currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
                    }
                    nodeMap[graph.nodes[i].name] = graph.nodes[i];
                    nodeMap[graph.nodes[i].name]["links"] = {};
                    nodeMap[graph.nodes[i].name]["nodes"] = {};
                    nodeMap[graph.nodes[i].name]["hasAppend"] = false;
                }
                for (let i = 0; i < graph.links.length; i++) {
                    let link = graph.links[i];
                    if (
                        nodeMap[link.source] !== undefined &&
                        nodeMap[link.target] !== undefined
                    ) {
                        nodeMap[link.source].links[link.target] = link;
                        nodeMap[link.source].nodes[nodeMap[link.target].name] =
                            nodeMap[link.target];
                    }
                }

                for (let i = 0; i < graph.nodes.length; i++) {
                    graph.nodes[i].itemStyle = null;
                    graph.nodes[i].label = {
                        normal: {
                            show: graph.nodes[i].symbolSize > 15,
                        },
                    };
                }
                redrawGraph();
            }
            // 处理点击节点展开
            function append(nodeName) {
                // 根据nodeName从nodeMap里拿出对应的nodes和links，并append到currentGraph.nodes currentGraph.links
                let node = nodeMap[nodeName];
                if (
                    node.hasAppend === true ||
                    Object.keys(node.nodes).length === 0 ||
                    Object.keys(node.links).length === 0
                ) {
                    title.value = node.name
                    detailContent.value = node.value
                    centerDialogVisible.value = true
                    labelData.splice(0)
                    node.labels.forEach(item => labelData.push(item))
                    return;
                }
                Object.values(node.nodes).forEach((n) => {
                    currentGraph.nodes[n.name] = n;
                });
                Object.values(node.links).forEach((l) => {
                    currentGraph.links[l.source + "_" + l.target] = l;
                });
                node.hasAppend = true;
                redrawGraph();
            }
            // 处理点击节点收缩
            function remove(nodeName) {
                //根据nodeName从nodeMap里拿出对应的nodes和links，从currentGraph.nodes currentGraph.links删除当前节点的nodes和links并且递归
                let node = nodeMap[nodeName];
                Object.values(node.nodes).forEach((n) => {
                    delete currentGraph.nodes[n.name];
                    if (n.hasAppend === true && Object.keys(n.nodes).length > 0) {
                        remove(n.name);
                    }
                });
                Object.values(node.links).forEach((l) => {
                    delete currentGraph.links[l.source + "_" + l.target];
                });
                // 设置flag 等于false
                node.hasAppend = false;

                redrawGraph();
            }
            // 根据更新后的option重新画图
            function redrawGraph() {
                option.series[0].data = Object.values(currentGraph.nodes);
                option.series[0].links = Object.values(currentGraph.links);
                myChart.setOption(option);
            }
            const option = {
                backgroundColor: 'rgba(225, 217  , 163,.6)',
                tooltip: { show: false },
                legend: [],
                animation: false,
                series: [
                    {
                        type: "graph",
                        layout: "force",
                        data: Object.values(currentGraph.nodes),
                        links: Object.values(currentGraph.links),
                        categories,
                        roam: true,
                        focusNodeAdjacency: false,
                        itemStyle: {
                            normal: {
                                miterLimit: 20,
                                borderColor: "#fff",
                                borderWidth: 1,
                                shadowBlur: 10,
                                shadowColor: "rgba(0, 0, 0, 0.3)",
                            },
                        },
                        label: {
                            position: "right",
                            formatter: "{b}",
                            color: '#121212',
                            fontSize: '16px'
                        },
                        lineStyle: {
                            color: "target",
                            opacity: 0.6,
                            curveness: 0.3,

                        },
                        emphasis: {
                            lineStyle: {
                                width: 10,
                            },
                        },
                        force: {
                            layoutAnimation: false,
                            repulsion: 1000,
                        },
                    },
                ],
            };
            init();
            myChart.on("click", function (params) {
                if (params.dataType === "node") {
                    const node = nodeMap[params.data.name];
                    if (node.hasAppend === true) {
                        remove(node.name);
                    } else {
                        append(node.name);
                    }
                }
            });
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
        onMounted(() => {
            chartInit()
        })

        // 对话框
        let centerDialogVisible = ref(false)
        let detailContent = ref()
        let title = ref()
        let labelData = reactive([])
        return {
            infoChart,
            chartInit,
            centerDialogVisible,
            detailContent,
            title,
            labelData
        }
    }
}
</script>

<style lang="less">
.icon {
    font-size: 36px;
    color: rgba(115, 145, 25, .8);
    position: relative;
    top: 8px;
}

.caDetail {
    aspect-ratio: 1.8;
    background: rgba(255, 231, 186);

    .el-dialog__header {
        span {
            line-height: 50px;
            font-family: 'ADR';
            font-size: 36px;
        }
    }

    .el-dialog__body {
        padding: 0 20px 20px;
        height: 100%;

        .detailTit {
            display: block;
            font-size: 30px;
            line-height: 45px;
            font-family: 'KT';
            font-weight: 800;
            margin-bottom: 10px;
        }

        .el-container {
            height: 100%;

            .el-aside {
                .detailContent {
                    display: block;
                    font-size: 20px;
                    line-height: 30px;
                    font-family: 'KT';
                    font-weight: 600;
                    text-indent: 2em;
                }

                margin-right: 10px;
            }

            .el-main {
                overflow: hidden;
                height: 90%;

                .labelsWrapper {
                    width: 100%;
                    height: 90%;
                }
            }
        }
    }


}

.infoCover {
    width: 90%;
    height: 85%;
    margin: 0 5% 5% 5%;

    .tit {
        display: block;
        text-align: center;
        height: 80px;
        line-height: 80px;
        font-size: 40px;
        font-family: 'ADR';

    }

    .relation {
        width: 100%;
        height: 100%;

        &::before {
            content: "";
            position: absolute;
            width: 60px;
            height: 60px;
            border-top: 4px solid #8B8B00;
            border-left: 4px solid #8B8B00;
            top: 0;
            left: 0;
        }

        &::after {
            content: "";
            position: absolute;
            width: 60px;
            height: 60px;
            border-bottom: 4px solid #8B8B00;
            border-right: 4px solid #8B8B00;
            right: 0;
            bottom: 0px;
        }
    }
}</style>