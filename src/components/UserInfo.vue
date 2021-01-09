<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">个人信息</span>
      </div>
      <div class="text item">
        <div>邮箱：{{user.email}}</div>
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
