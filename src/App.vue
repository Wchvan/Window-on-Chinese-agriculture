<template>
    <img
      src="@/assets/bg1.png"
      style="
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        -webkit-user-drag: none;
      "
    />
    <el-container class="container">
        <el-header v-if="!$route.meta.hidden"  height="50px" class="nav">
            <NavMenu/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>


<script>
 
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: url('@/assets/bg1.png') no-repeat;
    background-size: 100% 100%;
    height:100vh;
    min-width: 1080px;
    min-height: 607px;
    #app{
        height: 100%;
        .container{
            height: 100%;
            .nav{
                position: relative;
                left: 50%;
                transform: translate(-50%);
                margin-top: 10px;
                width: 70%;
            }
            .el-main{
                padding: 0;
            }
        }
    }
}
</style>
