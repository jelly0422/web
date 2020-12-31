<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3><img src="src/assets/logo.png"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  data (){
    return {
      Goods:[],
      imgList:[

      ]
    }
  },
  methods:{

  },
  created() {
    this.$http.get('url').then(res=>{
      this.Goods = res.data
    })
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
