<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">用户订单</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        <div><el-divider></el-divider></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Order",
  data (){
    return{
      orderList:[]
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 15px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {

}
</style>
