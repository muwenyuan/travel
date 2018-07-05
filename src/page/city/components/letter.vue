<template>
  <div class="letter">
    <ul>
      <li v-for="(item,key) of cities" @click="clickletter">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityLetter',
  props:{
    cities:Object
  },
  data(){
    return {
    }
  },
  methods:{
    clickletter(e){
      console.log(e.target.innerHTML)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter{position: fixed;top:1.78rem;right: 0;bottom:0;z-index: 2;width: .4rem;display: flex;align-items:center;justify-content:center;line-height: .4rem;font-size: .24rem;color: #04c3bc}
</style>
