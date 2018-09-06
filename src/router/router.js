import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'


/**
 * 组件异步加载装置 => react-loadable
 * @param {String} filename 
 */
const loadable = (filename) => Loadable({
    loader:() => import(`@/page/${filename}`),
    loading:() => <div></div>
});



/**
 * 根路由集合
 */
const rootRouters = [
    {
        //根路由匹配
        path:'/',
        exact:true,
        component:() => <Redirect to='/react-router'/>
    },
    {
        // 首页
        path:'/react-router',
        component:Loadable({
            loader:() => import('@/component/list/list.jsx'),
            loading:() => ('')
        })
    },
    {
        // 404 匹配
        path:'*',
        component:loadable('404')
    }
];

/**
 *  嵌套路由集合
 */
const routers = [
    {
        // React hash 模式路由实现的手段
        path:'/view0',
        component:loadable('view0')
    },
    {
        // React Route 路由的基本配置 以及 实现路由的模糊匹配（动态路由）
        path:'/view1',
        component:loadable('view1')
    },
    {
        // React 路由参数
        path:'/view2',
        component:loadable('view2')
    },
    {
        // 路由重定向
        path:'/view3',
        component:loadable('view3')
    },
    {
        // 路由匹配404 处理
        path:'/view4',
        component:loadable('view4')
    },
    {
        // Router 侧栏 / 页面过渡 /
        path:'/view5',
        component:loadable('view5')
    },
    {
        // Route Render 渲染的方式，可选component、render、children
        path:'/view6',
        component:loadable('view6')
    },
    {
        // React Router Api
        path:'/view7',
        component:loadable('view7')
    },
    {
        // 404 匹配
        path:'/',
        component:(null)
    },
    {
        // 404 匹配
        path:'*',
        component:loadable('404')
    }
];


export {
    rootRouters,
    routers,
}