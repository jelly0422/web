<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">用户订单</span>
      </div>
      <div v-for="(item,index) in orderList" :key="index" class="text item">
        <div style="font-size: 20px">{{item.name}}</div>
        <div style="color: coral; float: right">总价：{{item.money}}</div>
        <br>
        <div>
          <span>数量：{{item.number}}</span>
          <span style="margin-left: 10%">尺寸：{{size[item.size]}}</span>
        </div>
        <div style="float: right">下单时间：{{item.time.split('.')[0].replace('T',' ')}}</div>
        <div><el-divider></el-divider></div>
      </div>
      <span ref="noOrder" style="visibility: visible;font-size: 18px">暂无订单信息</span>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Order",
  data (){
    return{
      orderList:[],
      size: ["小","中","大"]
    }
  },
  methods:{
    doCreate(){
      this.$http('getOrder',{params:{userid: localStorage.getItem("id")}}).then(res=>{
        console.log(res);
        this.orderList = res.data
        if (res.data.length !==0){
          this.$refs.noOrder.style.visibility = "hidden"
        }
      })
    },
    trans(val){
      val.replace("T"," ")
      val.split('.')
      console.log(val);
    }
  },
  created() {
    this.doCreate()
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
