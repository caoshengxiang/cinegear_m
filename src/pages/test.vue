<template>
    <div>
        <mt-button
                type="primary"
                @click="meth">
            选择操作
        </mt-button>
        <mt-badge size="small" color="green">30</mt-badge>
    </div>
</template>
<script>

    export default {
        name: '',
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
        components: {},
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