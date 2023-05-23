<template>
    <div class="welcomeWrapper" @click="enter">
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'welcome',
    methods: {
        enter() {
            this.$router.push('/home')
        }
    },
    setup() {
        const welcome = ref('HELLO')
        return {
            welcome
        }
    }
}
</script>

<style lang="less">
.welcomeWrapper {
    background: url('@/assets/bg2.gif') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;

    .welcome {
        margin: 0 auto;
        font-size: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>