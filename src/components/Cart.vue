<!--购物车组件-->
<template>
  <div>
    <form action="#">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 35px">购物车</span>
          <span style="float: right; color: rgba(49,132,192,0.71);padding: 7px 0; font-size: 20px">总价：{{totalPrice}}</span>
          <el-button style="float: right; padding: 10px 7%; font-size: 20px" type="text" @click="buy" :disabled="btnBoolean" ref="buy">结算</el-button>
          <div ref="userAdd">
            <br>
            <div style="font-size: 18px">选择收货地址</div>
            <div v-for="(address, index) in addressList">
              <el-radio v-model="radio" :label="address" :key="index" @change="handleRadioChange">{{address}}</el-radio>
            </div>
          </div>
          <span style="visibility: hidden;color: crimson;font-size: 15px" ref="toUserCtrl">请到个人中心添加收货地址!</span>
          <br>
        </div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-divider></el-divider>
        <el-checkbox-group v-model="data" @change="handleCheckedGoodsChange">
          <div v-for="(goods,index) in goodsList">
            <el-checkbox :label="goods.id" :key="index">
              <el-image style="width: 75px;height: 75px" :src="'http://8.129.71.20/photo/' + goods.clothes.p1 + '.jpg'"></el-image>
              <span>
                <span style="font-weight: bold; font-size: 18px">{{goods.clothes.name}}</span>
                <span style="margin-left: 150%;">尺寸：{{size[goods.size]}}</span>
                <span style="margin-left: 10%;">数量：{{goods.number}}</span>
                <span style="margin-left: 10%; color: coral; font-size: 15px">总价：{{goods.money}}</span>
              </span>
            </el-checkbox>
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
      size:["小", "中", "大"],
      addressList: [],
      checkAll: false,
      goodsList:[],
      checkedAdd:"",
      data: [],
      isIndeterminate: false,
      radio: '0',
      //判断结算按钮是否可点击
      btnBoolean: true,
      totalPrice: 0,
    }
  },
  methods:{
    buy: function(){
      this.goodsList.forEach((item)=>{
        this.data.forEach((elem)=>{
          if (elem === item.id){
            this.$http('buyClothes',{params:{id:elem,address: this.checkedAdd}}).then(res=>{
              console.log(res);
            })
          }
        })
        //console.log(item);
      })
    },
    handleRadioChange(value){
      this.checkedAdd = value;
      this.doBuyAble()
    },
    doBuyAble(){
      if (this.data.length !==0 && this.addressList.length !==0 && this.checkedAdd.length !== 0){
        this.totalPrice = 0;
        this.btnBoolean = false;
        this.goodsList.forEach((item)=>{
          this.data.forEach((elem)=>{
            if (elem === item.id){
              this.totalPrice += item.money;
            }
          })
          //console.log(item);
        })
      }else{
        this.btnBoolean = true;
      }
    },
    handleCheckAllChange(val) {
      this.totalPrice = 0;
      if (val && this.addressList !== null){
        this.btnBoolean = false;
        this.goodsList.forEach((item)=> {
          this.totalPrice += item.money;
        })
      }else{
        this.btnBoolean = true;
      }
      this.checkAll = !!this.checkAll//判断全选
      const checked = this.goodsList.map(function (item) {
        return item.id
      })//通过使用map绑定想要的值
      this.data = this.checkAll ? checked : [] // 是否被选中
      this.isIndeterminate = false
    },
    handleCheckedGoodsChange(value) {
      //console.log(this.data);
      this.totalPrice = 0;
      let checkedCount = value.length;
      //console.log(this.checkedAdd);
      if (checkedCount !==0 && this.addressList.length !==0 && this.checkedAdd.length !== 0){
        this.btnBoolean = false;
        this.goodsList.forEach((item)=>{
          this.data.forEach((elem)=>{
                if (elem === item.id){
                  this.totalPrice += item.money;
                }
          })
          //console.log(item);
        })
      } else{
        this.btnBoolean = true;
      }
      this.checkAll = checkedCount === this.goodsList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.goodsList.length;
    },
    doCreate(){
      this.$http('getMyCar',{params:{userid: localStorage.getItem("id")}}).then(res=>{
        this.goodsList = res.data
        //console.log(res.data);
      })
      this.$http('getAddressById',{params:{id:localStorage.getItem("id")}}).then(res=>{
        var split = res.data.split("|");
        if (split.length === 0){
          this.$nextTick(()=>{
            this.$refs.userAdd.style.visibility = "hidden"
            this.$refs.toUserCtrl.style.visibility = "visible"
          })
        }else{
          split.pop();
          console.log(split);
          this.addressList = split
        }
      })
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
