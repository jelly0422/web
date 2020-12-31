<template>
  <div id="homepage">
    <div id="nav">
      <a href="#/" id="home">首页</a>
      <a href="#/login" class="a" id="login">登录</a>
      <a href="#/regist" class="a" id="regist">注册</a>
    </div>
    <a href="#/goodsinfo">商品详情</a>
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
            <div class="block">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="2" >
                  <template slot="title">所有分类</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item>
                  <el-input
                    placeholder="请输入内容"
                    v-model="input"
                    clearable>
                  </el-input>
                </el-menu-item>
                <el-menu-item>
                  <el-button type="primary" icon="el-icon-search" id="search">搜索</el-button>
                </el-menu-item>
              </el-menu>
            </div>
            <router-view></router-view>
          </div>
        </article>
      </section>
    </div>

  </div>
</template>

<script>
import MainStore from "./MainStore";
export default {
  name: "HomePage",
  components:{
    MainStore
  },
  data() {
    return {
      activeIndex: '1',
      input: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
  width: 225px;
  left: 0;
}
.absolute .right {
  position: absolute;
  width: 225px;
  right: 0;
}
.absolute .center {
  position: absolute;
  left: 225px;
  right: 225px;
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
#search{
  background-color: #774068;
  border-color: #774068;
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
</style>
