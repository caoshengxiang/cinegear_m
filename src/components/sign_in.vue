<template>
    <div>
        <mt-header title="登陆">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
        <br>
        <mt-button type="danger" size="large">登陆</mt-button>
    </div>
</template>
<script>

    export default {
        name: 'signIn',
        props: {},
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        computed: {},
        methods: {},
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>