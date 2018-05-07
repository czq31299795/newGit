<template>
  <div>
    <p>
      newId:{{$route.params.newsId}}
    </p>
    <p>
      newTitle:{{$route.params.newsTitle}}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'params',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    beforeRouteEnter:(to,from,next) =>{
      console.log("准备进入params路由模版");
      next();
    },
    beforeRouteLeave:(to,from,next) =>{
      console.log("准备退出路由模版");
      next();
    }
  }
</script>
