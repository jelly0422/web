<template>
  <div>
    <h1 id="title" align="center">FashionMall</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {};
  },
  methods: {
    redirectHome(){
      this.$router.push("/regist/email");
    }
  },
  created() {
    this.redirectHome();
  },
};
</script>

<style scoped>
#title{
  font-family: FBLawnmower,serif;
  font-size: 75px;
}
</style>
