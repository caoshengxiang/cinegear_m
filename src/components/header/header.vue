<template>
    <div class="header">
        <div>
            <a class="bar-left" href="tel:400678912345"><i class="sprites phone-16"></i> 400678912345</a>
            <span class="bar-right" v-if="!user">
                <a class="sign" @click="signIn">登陆</a>
                <a class="sign" @click="signUp">注册</a>
                <a class="qq-server" href=""><i class="sprites QQ-16"></i></a>
            </span>
            <span class="bar-right" v-if="user">
                <a class="sign msg-signal" @click="signIn">
                    <i class="sprites QQ-16"></i>
                    <span class="tips dots" v-show="msg"></span>
                </a>
                <a class="sign" @click="signUp"><i class="sprites QQ-16"></i></a>
                <a class=""><i class="sprites QQ-16"></i></a>
            </span>

        </div>
    </div>
</template>
<script>

    export default {
        name: 'pageHeader',
        props: {},
        data() {
            return {
                user: '123',
                msg: '2'
            }
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
    @import "../../styles/var";
    @import "../../styles/sprites.css";
    @import "../../styles/fun";
    .header {
        background: #3a1515;
        color: #ffffff;
        height: px2rem(50px);
        line-height: px2rem(50px);
        a {
            color: #ffffff;
            font-size: px2rem(16px);
            text-decoration: none;
        }
        .bar-left {
            float: left;
            margin-left: $page-padding;
        }
        .bar-right {
            float: right;
            margin-right: $page-padding;
            a{
                margin-left: px2rem(15px);
            }
        }
        .bar-right:after {
            content: '';
            display: block;
            clear: both;
        }
        .msg-signal {
            position: relative;
            .tips {
                position: absolute;
                top: px2rem(-4px);
                right: px2rem(-4px);

                &.dots {
                    width: px2rem(10px);
                    height: px2rem(10px);
                    display: inline-block;
                    border-radius: 50%;
                    background: red;
                }
            }
        }
    }
</style>