<!--购物车组件-->
<template>
  <div>
    <form action="#">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 35px">购物车</span>
          <el-button style="float: right; padding: 10px 0; font-size: 20px" type="text">结算</el-button>
          <div v-for="(address, index) in addressList">
            <el-radio v-model="radio" :label="index" :key="index">{{address.address}}</el-radio>
          </div>
          <br>
        </div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-divider></el-divider>
        <el-checkbox-group v-model="data" @change="handleCheckedCitiesChange">
          <div v-for="(goods,index) in goodsList">
            <el-checkbox :label="goods.name" :key="index">{{goods.name}}</el-checkbox>
            <el-divider></el-divider>
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
      addressList: [{address: "asdf"},{address: "asdf"},{address: "asdf"}],
      checkAll: false,
      goodsList:[{name: "123", price: 90},
                  {name: "456", price: 80}],
      checkedCities: ['上海', '北京'],
      data: [],
      isIndeterminate: false,
      radio: '0'
    }
  },
  methods:{
    handleCheckAllChange(val) {
      this.checkAll = !!this.checkAll//判断全选
      const checked = this.goodsList.map(function (item) {
        return item.name
      })//通过使用map绑定想要的值
      this.data = this.checkAll ? checked : [] // 是否被选中
      this.isIndeterminate = false
      console.log(this.data)
      // this.checkedCities = val ? cityOptions  : [];
      // this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      console.log(value.length);
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
