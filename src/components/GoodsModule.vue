<template>
  <div>
    <el-container>
      <el-header style="font-size: 18px">{{ module }}</el-header>
      <el-main>
        <Goods v-for="(item, index) in list" v-bind:info="item" v-bind:key="index" style="float: left;margin-left: 15px"></Goods>
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
    return{
      list:[]
    }
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
    this.$http('clothes?key=' + this.module).then(res=>{
      this.list = res.data
    })
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
