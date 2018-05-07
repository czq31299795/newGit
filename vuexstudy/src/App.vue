<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goBack">后推</button>
        <button @click="goCome">前进</button>
        <button @click="goHome">返回首页</button>
      </div>
      <router-link to="/">首页</router-link>|
      <router-link to="/">调换</router-link>|
      <router-link to="/hi">HI 页面</router-link>|
      <router-link :to="{name:'hi1',params:{username:username,id:dataid}}">HI 页面1</router-link>|
      <router-link to="/hi/hi2">HI 页面2</router-link>|
      <router-link to="/params/808/this very good">Params 传递参数</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/108/goParams very good">Params 传递参数</router-link>|
      <router-link to="/hi1">真 HI1</router-link>|
      <router-link to="/jschen">jschen</router-link>|
      <router-link to="/count">count Vuex</router-link>
      <hr/>
    </div>
    <p>
      我是name传值：{{$route.name}}
    </p>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <transition name="fade" mode="out-in">
    <router-view name="left" class="lefts"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
    <router-view name="right" class="rights"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      username:"dddddddd",
      dataid:"8889888"
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goCome(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
  .lefts{
    width: 50%;
    float: left;
    background-color: #1d8ce0;
  }
.rights{
  width: 50%;
  float: left;
  background-color: #8cc5ff;
}
  .fade-enter{
    opacity: 0;

  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
      opacity: 0;
    transition: opacity .5s;
  }
</style>
