<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">收货地址</span>
        <el-button style="float: right; padding: 3px 0;font-size: 15px" type="text">添加</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        <span style="margin-left: 77%">
          <el-tooltip content="修改" placement="top">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </el-tooltip>
        <el-tooltip content="删除" placement="top">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-tooltip>
        </span>
        <div><el-divider></el-divider></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserAddress",
  data(){
    return{
      addressList:[]
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
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
