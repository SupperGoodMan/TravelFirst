<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<router-link to="/logo">登陆</router-link>
		&nbsp;&nbps;
		<router-link to="/">首页</router-link>
		<router-view></router-view>
		<a href="./pages/home.vue">首页</a>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
