<template>
  <div id="goods">
    <div id="pic">
      <span @click="jump">
        <el-image
          style="width: 140px; height: 175px"
          :src="'http://8.129.71.20/1.jpg'"
          :fit="'fill'"></el-image>
      </span>
    </div>
    <span><a href="#/goodinfo" @click="jump">
      <div id="other">
        <div class="info">商品名称</div>
        <br>
        <div class="info">价格</div>
      </div>
    </a></span>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data(){
    return{
      goods:{name: "大衣",price: 98,info: "lkahslebn"}
    }
  },
  methods:{
    jump:function () {
      this.$router.push({
        //path后面跟跳转的路由地址
        path: '/goodsinfo',
        //name后面跟跳转的路由名字（必须有亲测，不使用命名路由会传参失败）
        name: 'GoodsInfo',
        params: {
          //imgsListsUrl2是自己定义的名字，this.imgsListsUrl是要被传递的值
          name: this.goods.name,
          price: this.goods.price,
          info: this.goods.info
        }
      })
    }
  }
}
</script>

<style scoped>
#other{
  margin-top: 10px;
}
#pic{
  padding-top: 25px;
  margin-left: 42.5px;
}
a{
  text-align: center;
  text-decoration: none;
}
#goods{
  width: 225px;
  height: 300px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
#goods:hover{
  box-shadow: 3px 4px 15px 3px rgba(0, 0, 0, 0.1)
}
</style>
