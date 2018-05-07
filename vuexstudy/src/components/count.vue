<template>
  <div>
    <h2>{{msg}}</h2><hr/>
    <h3>{{count}}</h3>
    <div>
      <button @click="add(3)">
        增加
      </button>
      <button @click="reduce">
        减小
      </button>
    </div>
    <div>
      <button @click="addAction">
        增加
      </button>
      <button @click="reduceAction">
        减小
      </button>
    </div>

  </div>
</template>

<script>
  import store from '@/vuex/store'
  import  { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
  export default {
    data(){
      return{
        msg:"hello Vuex"
      }
    },
    computed:{
      ...mapState(['count']),
//      count(){
//       return this.$store.getters.count;
//      }
//      ...mapGetters(['count'])
    },
    methods: {
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
