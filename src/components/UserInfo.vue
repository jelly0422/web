<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">个人信息</span>
      </div>
      <div class="text item">
        <div>{{user.name}}</div>
        <div>{{user.email}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data (){
    return{
      user:{name: "jelly", email: "1187893119@qq.com", }
    }
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
