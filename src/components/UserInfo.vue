<template>
  <div>
    <h5 align="center" style="font-size: 40px">个人信息</h5>
    <br>
    <hr>
    <br>
    <div>
      <span style="margin-left: 5%">用户id: {{user.name}}</span>
      <br>
      <span style="margin-left: 5%">邮箱: {{user.email}}</span>
    </div>
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

</style>
