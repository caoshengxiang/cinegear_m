<template>
    <div>
        <div>
            <a @click="signIn">登陆</a>
            <a @click="signUp">注册</a>
            <a href="tel:17744311727">联系客服</a>
        </div>

        <div style="with: 100%;height: 200px;margin-top: 20px;">
            <mt-swipe :auto="4000">
                <mt-swipe-item style="background: red">1</mt-swipe-item>
                <mt-swipe-item style="background: gainsboro">2</mt-swipe-item>
                <mt-swipe-item style="background: green">3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {
            signIn () {
                this.$router.push('sign_in')
            },
            signUp () {
                this.$router.push('sign_up')
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .mint-swipe-indicator {
        background-color: #0089dc !important;
        color: #fff;
    }
</style>
