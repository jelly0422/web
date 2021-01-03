<template>
  <div id="goods">
    <div id="pic">
      <a href="">
        <el-image
          style="width: 140px; height: 175px"
          :src="'http://8.129.71.20/1.jpg'"
          :fit="'fill'"></el-image>
      </a>
    </div>
    <span><a href="">
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
