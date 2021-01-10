<template>
  <div id="homepage">
    <h1 id="title" align="center">FashionMall</h1>
    <div id="nav">
      <a href="#/" id="home">首页</a>
      <a href="#/login" class="a" id="login" ref="login">登录</a>
      <a href="#/regist" class="a" id="regist" ref="regist">注册</a>
      <span ref="userid" style="visibility: hidden; color: #99a9bf"></span>
      <a href="#/cart" ref="cart" style="visibility: hidden;">购物车</a>
      <a href="#/userctrl" ref="userctrl" style="visibility: hidden;">个人</a>
    </div>
    <div>
      <!-- float 布局 -->
      <section class="layout absolute">
        <!-- article作为容器将左中右三块包裹起来 -->
        <article class="left-right-center">
          <!-- 划分左中右三个模块 -->
          <div class="left">&nbsp</div>
          <div class="right">&nbsp</div>
          <!-- 中间写一些内容撑开盒子 -->
          <div class="center">
            <span class="block" style="width: 50%">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="2" >
                  <template slot="title">所有分类</template>
                  <el-menu-item index="clothes?key=装">查看所有</el-menu-item>
                  <el-menu-item index="clothes?key=男装">男装</el-menu-item>
                  <el-menu-item index="clothes?key=女装">女装</el-menu-item>
                  <el-menu-item index="clothes?key=童装">童装</el-menu-item>
                </el-submenu>
              </el-menu>
            </span>
            <div id="search">
              <el-input
                placeholder="请输入内容以搜索商品"
                v-model="input"
                clearable style="width: 225px">
              </el-input>
              <el-button type="primary" icon="el-icon-search" @click="doSearch">搜索</el-button>
            </div>
            <div><router-view></router-view></div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import Global from "./global/Global";

export default {
  name: "HomePage",
  data() {
    return {
      activeIndex: '1',
      input: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      //this.$http(key).then(res=>{
        //console.log(res.data);
        this.$router.push({name: 'ShowGoods',query:{search: key}})
      //})
    },
    doSearch(){
      console.log(this.input);
      //this.$http('findClothes?key=' + this.input).then(res=>{
        this.$router.push({
          name: 'ShowGoods',
          query:{search: 'findClothes?key=' + this.input}
        })
      //})
    },
    doCreate(){
      console.log(this.$cookies.isKey("userid"));
      this.$nextTick(()=>{
        console.log(1);
        if (this.$cookies.isKey("userid")){
          this.$refs.userid.innerText = "欢迎您：" + this.$cookies.get("userid")
          this.$refs.userid.style.visibility = "visible"
          this.$refs.login.style.visibility = "hidden"
          this.$refs.regist.style.visibility = "hidden"
          this.$refs.cart.style.visibility = "visible"
          this.$refs.userctrl.style.visibility = "visible"
          localStorage.setItem("id",this.$cookies.get("userid"));
          localStorage.setItem("email",this.$cookies.get("email"));
          localStorage.setItem("wallet",this.$cookies.get("wallet"));
        }else{
          this.$refs.userid.style.visibility = "hidden"
          this.$refs.login.style.visibility = "visible"
          this.$refs.regist.style.visibility = "visible"
          this.$refs.cart.style.visibility = "hidden"
          this.$refs.userctrl.style.visibility = "hidden"
          localStorage.clear()
        }
      })
    }
  },
  created() {
    this.doCreate()
  },
  beforeUpdate() {
    this.doCreate()
  }
}
</script>

<style scoped>
.layout.absolute {
  margin-bottom: 0px;
}
.absolute .left-right-center {
  position: relative;
}
.absolute .left {
  position: absolute;
  width: 15%;
  left: 0;
}
.absolute .right {
  position: absolute;
  width: 15%;
  right: 0;
}
.absolute .center {
  position: absolute;
  left: 15%;
  right: 15%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
a{
  text-align: center;
  text-decoration: none;
  color: #99a9bf;
  display: inline-block;
  width: 60px;
}
#nav {
  background-color: rgba(14, 4, 16, 0.93);
  height: 50px;
  line-height: 50px;
}
a:hover{
  background-color: lightgray;
}
#home{
  margin-left: 15%;
}
#login{
  margin-left: 45%;
}
#search{
  position: absolute;
  top: 1%;
  left: 30%;
}
#title{
  font-family: FBLawnmower,serif;
  font-size: 75px;
}
</style>
