<template>
  <div>
    <div class="center">
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div v-for="module in moduleList">
        <GoodsModule v-bind:module="module"></GoodsModule>
      </div>
      <!-- <div>1111</div>
      <div>222</div>
      <div>3333</div>
      <GoodsModule></GoodsModule> -->
    </div>
  </div>
</template>

<script>
import GoodsModule from "./GoodsModule";
export default {
  name: "MainStore",
  components:{
    GoodsModule
  },
  data(){
    return {
      moduleList: ["男装","女装","童装"],
    }
  },
  methods:{

  },
  created() {

  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
