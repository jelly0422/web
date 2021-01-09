<template>
  <div>
    <div class="center">
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="(item,index) in carouselList.slice(0,6)" :key="index">
            <router-link :to="{path:'goodsinfo',query:{goods: item}}">
              <el-image
                style="width: 500px"
                :src="'http://8.129.71.20/photo/' + item.p1 + '.jpg'"
                :fit="'cover'"></el-image>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div v-for="module in moduleList">
        <GoodsModule v-bind:module="module"></GoodsModule>
      </div>
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
  data (){
    return {
      carouselList:[],
      moduleList: ["男装","女装","童装"],
    }
  },
  methods:{

  },
  created() {
    this.$http('clothes?key=装').then(res=>{
      this.carouselList = res.data
      console.log(this.carouselList[0]);
    })
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
