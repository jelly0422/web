<template>
  <!-- 商品详情 -->
  <div>
    <div id="imgs">
      <el-carousel indicator-position="outside" height="450px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <div><img v-bind:src="item.url" alt=""></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <form action="#" class="goodsinfo">
      <div>
        <span><p id="name">商品名称</p></span>
        <el-divider></el-divider>
        <div><span><p>商品信息</p></span></div>
        <span><p>价格</p></span>

        <div>
          <el-divider>选择商品尺寸</el-divider>
          <el-radio-group v-model="radio1">
            <el-radio label="1" border>大</el-radio>
            <el-radio label="2" border>中</el-radio>
            <el-radio label="3" border>小</el-radio>
          </el-radio-group>
        </div>
        <el-divider></el-divider>
        <el-button type="primary" round icon="el-icon-shopping-cart-2">加入购物车</el-button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  data (){
    return {
      Goods:[],
      imgList:[
        {url:'http://8.129.71.20/1.jpg'}
      ],
      radio1: '1',
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
.goodsinfo{
  position: absolute;
  left: 60%;
  top: 140px;
}
.size{

}
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
#imgs{
  width: 400px;
  margin-left: 10%;
  margin-top: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
img{
  width: 100%;
  height: 100%;
}
#name{
  font-size: 30px;
}
</style>
