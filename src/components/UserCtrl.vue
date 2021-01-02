<template>
  <div>
    <el-col :span="5">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        background-color="#303133"
        text-color="#fff"
        active-text-color="#14E6CA">
        <el-menu-item index="/userinfo">
            <i class="el-icon-user"></i>
            <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-location-information"></i>
          <span slot="title">收货地址</span>
        </el-menu-item>
        <el-menu-item index="/order">
          <i class="el-icon-tickets"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "UserCtrl",
  data (){
    return{
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>

</style>
