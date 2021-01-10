<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">用户订单</span>
      </div>
      <el-table
        :data="orderList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width: 100%;font-size: 15px"
        :row-style="{height: '60px'}">
        <el-table-column
          prop="name"
          label="商品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="number"
          label="数量"
          width="150">
        </el-table-column>
        <el-table-column
          prop="size"
          label="尺寸">
          <template slot-scope="scope">
            <span>{{size[scope.row.size]}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="money"
          label="总价"
          width="180">
        </el-table-column>
        <el-table-column
          prop="time"
          label="下单时间"
          width="180">
          <template slot-scope="scope">
            {{scope.row.time.replace("T"," ").split(".")[0]}}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="block" align="center" style="position: absolute;left: 50%;top: 100%">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="orderList.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Order",
  data (){
    return{
      orderList:[],
      size: ["小","中","大"],
      currentPage: 1,
      pageSize: 5
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
