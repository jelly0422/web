<template>
  <div>
    <el-table :data="result.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              style="width: 100%;font-size: 18px"
              @row-click="toGoodsInfo">
      <el-table-column prop="date" width="180">
        <template slot-scope="scope">
          <el-image
            style="width: 125px;height: 125px"
            :src="'http://8.129.71.20/photo/' + scope.row.p1 + '.jpg'"
            :fit="'cover'"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="180" >
      </el-table-column>
      <el-table-column prop="money" label="商品价格">
      </el-table-column>
    </el-table>
    <div class="block" align="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :page-count="Math.ceil(this.result.length / 4)">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Goods from "./Goods";
export default {
  name: "ShowGoods",
  components:{
    Goods
  },
  data() {
    return {
      result: [],
      currentPage: 1,
      pageSize: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(this.result);
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    toGoodsInfo(row){
      console.log(row);
      this.$router.push({
        name: 'GoodsInfo',
        params:{goods:row}
      })
    },
    doCreate(){
    }
  },
  created() {
    this.doCreate()
  },
  beforeUpdate() {
    this.$http(this.$route.query.search).then(res=>{
      this.result = res.data
    })
  }
}
</script>

<style scoped>

</style>
