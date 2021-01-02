<template>
      <router-view></router-view>
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

</style>
