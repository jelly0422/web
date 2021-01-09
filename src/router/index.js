import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Regist from "../components/Regist";
import MainStore from "../components/MainStore";
import GoodsInfo from "../components/GoodsInfo";

import RegistEmail from "../components/RegistEmail"
import RegistCheck from "../components/RegistCheck"
import RegistPsw from '../components/RegistPsw';
import Goods from "../components/Goods";
import Cart from "../components/Cart";
import UserCtrl from "../components/UserCtrl";
import UserInfo from "../components/UserInfo";
import UserAddress from "../components/UserAddress";
import Order from "../components/Order";
import ShowGoods from "../components/ShowGoods";

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',name: 'homepage',
      component: HomePage,redirect: '/mainstore',
      children: [
        {path: 'mainstore', component: MainStore},
        {path: 'goodsinfo', name:'GoodsInfo', component: GoodsInfo},
        {path: 'goods', component: Goods},
        {path: 'cart', component: Cart},
        {
          path: 'showgoods', name: 'ShowGoods', component: ShowGoods,

        },
        {
          path: 'userctrl',
          component: UserCtrl,
          children: [{path: 'userinfo', component: UserInfo}, {path: 'useraddress', component: UserAddress}, {path: 'order', component: Order}]
        }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist,
      children: [
        {path: 'email', component: RegistEmail},
        {path: 'check', component: RegistCheck},
        {path: 'psw', component: RegistPsw},
      ]
    }
  ]
})
