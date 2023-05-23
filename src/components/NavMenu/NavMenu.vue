<template>
  <el-menu 
  :default-active="activeIndex"
  mode="horizontal "
  router
  background-color="none"
  text-color="#838e3e"
  active-text-color="#BB5535"
  class="NavMenu"
  >
    <div class="tit" @click="backToHome">
        <img src="@/assets/logo.png" alt="">
        <span>中国农业之窗</span>
    </div>
    <el-menu-item index = '/home'>
        农业之窗
    </el-menu-item>
    <el-menu-item index = '/nation'>
        农业大观
    </el-menu-item>
    <el-menu-item index = '/sale'>
        邻邦农贸
    </el-menu-item>
    <el-menu-item index = '/province'>
        九州粮仓
    </el-menu-item>
    <el-menu-item index="/policy">
        农策有方
    </el-menu-item>
    <el-menu-item index="/info">
        农粮百科
    </el-menu-item>
    <el-menu-item index="/history">
        耕耘迭代
    </el-menu-item>
  </el-menu>
</template>

<script>
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
export default {
    name:'NavMenu',
    setup(){
        let route = useRoute()
        let router = useRouter()
        let activeIndex = ref(route.path)
        function backToHome(){
            router.push('/home')
        }
        return{
            activeIndex,
            backToHome
        }
    },
    watch:{
        $route(){
            this.activeIndex = this.$route.path
        }
    },
    mounted(){
    }
}
</script>

<style lang="less">
.NavMenu{
    width: 100%;
    height: 100%;
    background: rgba(203, 185, 121,.5) !important;
    border: 1px solid rgba(107,142,35, .5);
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    .tit{
        cursor: pointer;
        margin:5px 10px ;
        margin-right:auto ;
        display: flex;
        flex-direction: row;
        justify-content: center;
        img{
            height: 40px;
            width: 40px;
        }
        span{
            margin-left: 10px;
            line-height: 40px;
            font-size: 24px;
            font-family: "ADR";
            color: darkgreen;
        }
    }
    .el-menu-item{
        margin: 4px 0 6px;
        padding: 0 10px;
        border-radius: 20px;
        font-family: "KT";
        font-weight: 1000;
        height: 40px;
        line-height: 40px;
        font-size: 21px;
        border-bottom: none !important;
        &:hover{
            background-color: rgba(107,142,35, .5) !important;
        }
        &:last-child{
            margin-right: 30px;
        }
    }
    .el-menu-item.is-active {
        background-color: rgba(107,142,35, .9) !important;
    }
}
</style>