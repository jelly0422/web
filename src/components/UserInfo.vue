<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">个人信息</span>
        <el-button type="text" style="float: right; font-size: 18px; padding-top: 1%" @click="exit">退出登陆</el-button>
      </div>
      <div class="text item" style="font-size: 18px">
        <div>邮箱：{{user.email}}</div>
        <br>
        <div>账户余额：{{user.wallet}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data (){
    return{
      user:{
        email:"",wallet:"",
      }
    }
  },
  methods:{
    doCreate(){
      console.log(localStorage.getItem("wallet"));
      this.user.email = localStorage.getItem("email");
      this.user.wallet = localStorage.getItem("wallet")
    },
    exit(){
      this.$cookies.remove("userid")
      this.$cookies.remove("email")
      this.$cookies.remove("wallet")
      this.$router.push({path: '/'})
    }
  },
  created() {
    this.doCreate()
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
}
</style>
