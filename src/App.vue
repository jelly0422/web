<template>
  <div>
    <h1 id="title" align="center">FashionMall</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#title{
  font-family: FBLawnmower,serif;
  font-size: 75px;
}
</style>
