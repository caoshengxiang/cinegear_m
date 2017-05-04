<i18n>
    {
        "cn": {
            "name": "组件"
        },
        "en": {
            "name": "component"
        }
    }
</i18n>
<template>
    <div>
        <set-lang></set-lang>
        <div>{{$t('name')}}</div>

        <mt-button
                type="primary"
                @click="meth">
            选择操作
        </mt-button>
        <mt-badge size="small" color="green">30</mt-badge>
    </div>
</template>
<script>
    import setLang from '../components/set_lang.vue'

    export default {
        name: 'Test',
        props: {},
        data() {
            return {
                loading: false,
                list: [1,2,3,4,5,6,7,8]
            }
        },
        computed: {},
        methods: {
            meth() {
                this.$toast('Hello world')
            },
        },
        components: {
            setLang,
        },
        created() {
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    div {
        ul {
            li {
                list-style: none;
            }
        }
    }
</style>