<template>
  <div class="homeTop">
    <span class="time">{{ timeStr }}</span>
  </div>
  <div class='mapCover'>
    <chinaMap v-if="mapData.length" :mapData="mapData"></chinaMap>
  </div>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import useMapState from "@/utils/useMapState"
import { useStore } from "vuex"
import chinaMap from './chinaMap.vue'
export default {
  name: 'home',
  components: {
    chinaMap
  },
  setup() {
    // 时间
    let DateTime = new Date()
    var timeID // 定时器ID
    let timeStr = ref("当前时间：" +
      DateTime.getFullYear() +
      "年" +
      (DateTime.getMonth() + 1) +
      "月" +
      DateTime.getDate() +
      "日" +
      DateTime.getHours() +
      "时" +
      DateTime.getMinutes() +
      "分" +
      DateTime.getSeconds() +
      "秒")
    onMounted(() => {
      timeID = setInterval(() => {
        let DateTime = new Date()
        timeStr.value = "当前时间：" +
          DateTime.getFullYear() +
          "年" +
          (DateTime.getMonth() + 1) +
          "月" +
          DateTime.getDate() +
          "日" +
          DateTime.getHours() +
          "时" +
          DateTime.getMinutes() +
          "分" +
          DateTime.getSeconds() +
          "秒"
      }, 1000)
    })
    onBeforeUnmount(() => {
      clearInterval(timeID)
    })
    // 地图
    const store = useStore()
    const myState = useMapState({
      mapData: state => state.Home.mapData
    })
    onMounted(() => {
      store.dispatch('getMapData')
    })
    return {
      ...myState,
      timeStr
    }
  }
}
</script>

<style lang="less">
.homeTop {
  height: 10%;
  min-height: 80px;
  text-align: center;

  span {
    display: block;
    line-height: 60px;
    height: 60px;
    font-size: 40px;
  }

  .time {
    font-family: 'DS';
    color: rgb(152, 146, 26);
  }
}

.mapCover {
  position: absolute;
  left: 2%;
  width: 87%;
  height: 80%;
}</style>