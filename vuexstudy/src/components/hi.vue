<template>
  <div class="hello">
   <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'H',
    data () {
      return {
        msg: 'IM hi页面'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
