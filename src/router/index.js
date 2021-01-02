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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children:[
        { path:'/', component: MainStore},
        { path:'goodsinfo', component: GoodsInfo},]
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
      children:[
        {path:'email',component:RegistEmail},
        {path:'check',component:RegistCheck},
        {path:'psw',component:RegistPsw},
      ]
    }
    
  ]
})
