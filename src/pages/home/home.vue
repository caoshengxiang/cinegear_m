<template>
    <div class="home">
        <page-header></page-header>
        <menu-bar></menu-bar>

        <div class="swipe-wall">
            <mt-swipe :auto="4000">
                <mt-swipe-item style="background: red">1</mt-swipe-item>
                <mt-swipe-item style="background: gainsboro">2</mt-swipe-item>
                <mt-swipe-item style="background: green">3</mt-swipe-item>
            </mt-swipe>
        </div>

        <category></category>
        <featured></featured>
    </div>
</template>
<script>
    import pageHeader from '../../components/header/header.vue'
    import menuBar from '../../components/header/menu_bar.vue'
    import category from './main/category.vue'
    import featured from './main/featured.vue'
    export default {
        name: 'home',
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {

        },
        components: {
            pageHeader,
            menuBar,
            category,
            featured,
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .home {
        .swipe-wall {
            width: 100%;
            height: 200px;
            position: relative;
            top: -20px;
            margin-top: 20px;
            margin-bottom: -10px;
        }
    }
</style>
