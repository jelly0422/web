<!--购物车组件-->
<template>
  <div>
    <form action="#">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 35px">购物车</span>
          <el-button style="float: right; padding: 10px 0; font-size: 20px" type="text">操作按钮</el-button>
          <br>
          <el-divider></el-divider>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </div>
        <el-checkbox-group v-model="goodsList" @change="handleCheckedCitiesChange">
           <div v-for="goods in goodsList" :key="goods" class="text item">
             <el-checkbox @change="handleCheckedCitiesChange" :label="goods.name"><span>{{goods.name}}</span><span>{{goods.price}}</span></el-checkbox>
           </div>
        </el-checkbox-group>
      </el-card>
    </form>
  </div>
</template>

<script>
export default {
  name: "cart",
  data (){
    return{
      checkAll: false,
      goodsList:[{name: "123", price: 90, nums: 1},
                  {name: "456", price: 80, nums: 1}],
      isIndeterminate: true
    }
  },
  methods:{
    handleCheckAllChange(val) {
      //this.checkedCities = val ? goodsList : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.goodsList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.goodsList.length;
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
