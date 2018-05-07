<template>
  <div class="hello">
   <h3>{{msg}}-------{{$route.params.username}}-------ID:{{$route.params.id}}</h3>

  </div>
</template>

<script>
  export default {
    name: 'Hi1',
    data () {
      return {
        msg: 'IM hi1111页面'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
