<template>
  <!-- 商品详情 -->
  <div>
    <div id="imgs">
      <el-carousel indicator-position="outside" height="450px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <div><img v-bind:src="item.url" alt=""></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <form action="#" class="goodsinfo">
      <div>
        <span><p id="name">{{Goods.name}}</p></span>
        <el-divider></el-divider>
        <div><span><p>{{ Goods.introduce }}</p></span></div>
        <br>
        <span><p style="color: coral">￥{{ Goods.money }}</p></span>

        <div>
          <el-divider>选择商品尺寸</el-divider>
          <el-radio-group v-model="radio1">
            <el-radio label="2" border>大</el-radio>
            <el-radio label="1" border>中</el-radio>
            <el-radio label="0" border>小</el-radio>
          </el-radio-group>
        </div>
        <el-divider>选择数量</el-divider>
        <div><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></div>
        <br>
        <el-button type="primary" round icon="el-icon-shopping-cart-2" @click="addToCart">加入购物车</el-button>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>请登陆后将商品添加到购物车</span>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </form>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import Global from "./global/Global";
export default {
  name: "GoodsInfo",
  data (){
    return {
      Goods: {},
      imgList:[],
      radio1: '1',
      dialogVisible: false,
      num: 1
    }
  },
  methods:{
    addToCart: function () {
      if (Global.isLogin.isLogin===false){
        this.dialogVisible = true
      }else{
        this.$http("/addClothes",{params:{userid:localStorage.getItem("id"),
            clothesid:this.Goods.id,
            money: this.Goods.money * this.num,
            number: this.num,
            size: this.radio1}}).then(res=>{
          if (res.data === 1){
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success'
            });
          }else{
            this.$notify.error({
              title: '错误',
              message: '添加失败'
            });
          }
        })
      }
    },
    //测试计数值用
    handleChange(value) {
      console.log(value);
      console.log(this.num);
    }
  },
  created() {
  },
  mounted () {
    //this.imgsListsUrl2是自己在B组件里定义的数据
    //this.$route.params.imgsListsUrl2是传过来的参数
    if (this.$route.params.goods === undefined){
      this.Goods = this.$route.query.goods;
      //console.log(this.Goods);
    }else{
      this.Goods = this.$route.params.goods;
    }
    this.imgList = [{url:'http://8.129.71.20/photo/' + this.Goods.p2 + '.jpg'},
                    {url:'http://8.129.71.20/photo/' + this.Goods.p3 + '.jpg'},
                    {url:'http://8.129.71.20/photo/' + this.Goods.p4 + '.jpg'}]
  },
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
