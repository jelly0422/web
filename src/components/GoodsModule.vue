<template>
  <div>
    <el-container>
      <el-header style="font-size: 18px">{{ module }}</el-header>
      <el-main>
        <div id="goods" style="position: absolute"></div>
        <Goods style="margin-left: 250px"></Goods>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Goods from "./Goods";
export default {
  name: "GoodsModule",
  components:{
    Goods
  },
  data(){
    return{}
  },
  props: {
    module:{
      type: String,
      required: true
    }
  },
  methods:{

  },
  created() {

  }
}
</script>

<style scoped>
#goods{
  width: 225px;
  height: 300px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>
