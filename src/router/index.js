/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const home = resolve => require.ensure([], () => resolve(require('../pages/home/home.vue')), 'home')
const signIn = resolve => require.ensure([], () => resolve(require('../components/sign_in.vue')), 'sign')
const signUp = resolve => require.ensure([], () => resolve(require('../components/sign_up.vue')), 'sign')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: home,
        },
        {
            path: '/home',
            component: home,
        }, {
            path: '/sign_in',
            component: signIn,
        }, {
            path: '/sign_up',
            component: signUp,
        },
        {
            path: '/test',
            component: test,
        }
    ]
})
