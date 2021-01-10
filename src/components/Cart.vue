<!--购物车组件-->
<template>
  <div>
    <form action="#">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 35px">购物车</span>
          <span style="float: right; color: rgba(49,132,192,0.71);padding: 7px 0; font-size: 20px">总价：{{totalPrice}}</span>
          <el-button style="float: right; padding: 10px 7%; font-size: 20px" type="text" @click="dialogVisible = true" :disabled="btnBoolean" ref="buy">结算</el-button>
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
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @confirm="deleteGoods">
            <el-button type="danger" icon="el-icon-delete" circle slot="reference" style="float: right" :disabled="delDisable" ref="del"></el-button>
          </el-popconfirm>
        <el-divider></el-divider>
        <el-checkbox-group v-model="data" @change="handleCheckedGoodsChange">
          <div v-for="(goods,index) in goodsList">
            <el-checkbox :label="goods.id" :key="index">
              <el-image style="width: 75px;height: 75px" :src="'http://8.129.71.20/photo/' + goods.clothes.p1 + '.jpg'"></el-image>
              <span>
                <span style="font-weight: bold; font-size: 18px; position: absolute; top: 50%;left: 50%">{{goods.clothes.name}}</span>
                <span style="margin-left: 250%;">尺寸：{{size[goods.size]}}</span>
                <span style="margin-left: 10%;">数量：{{goods.number}}</span>
                <span style="margin-left: 10%; color: coral; font-size: 15px">总价：{{goods.money}}</span>
              </span>
            </el-checkbox>
            <el-divider></el-divider>
          </div>
        </el-checkbox-group>
      </el-card>
    </form>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确定购买吗</span>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="buy">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "cart",
  data (){
    return{
      dialogVisible: false,
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
      delDisable: true
    }
  },
  methods:{
    deleteGoods(){
      this.goodsList.forEach((item)=>{
        this.data.forEach((elem)=>{
          if (elem === item.id){
            this.$http('deleteCar',{params:{id:elem}}).then(res=>{
              console.log(res);
              if (res.data === 1){
                this.doCreate()
              }else{
                this.$notify({
                  title: '失败',
                  message: '购买失败',
                  type: 'error'
                })
              }
            })
          }
        })
        //console.log(item);
      })
    },
    buy: function(){
      this.goodsList.forEach((item)=>{
        this.data.forEach((elem)=>{
          if (elem === item.id){
            this.$http('buyClothes',{params:{id:elem,address: this.checkedAdd}}).then(res=>{
              console.log(res);
              if (res.data === 1){
                this.doCreate()
                this.dialogVisible = false
                this.$notify({
                  title: '成功',
                  message: '购买成功',
                  type: 'success'
                })
              }else{
                this.$notify({
                  title: '失败',
                  message: '购买失败',
                  type: 'error'
                })
              }
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
      if (val){
        this.delDisable = false
      }else{
        this.delDisable = true
      }
      if (val && this.addressList !== null && this.checkedAdd.length !== 0){
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
      console.log(checkedCount);
      if (checkedCount !== 0){
        this.delDisable = false
      }else{
        this.delDisable = true
      }
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
    if (this.$cookies.isKey("userid")){
      this.doCreate()
    }else{
      this.$router.push({ path: '/'})
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
