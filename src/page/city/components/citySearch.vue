<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="searchInput" v-model="message">
    </div>
    <div class="searchContent">
      <ul>
        <li v-for='item of list'>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  props:{
    cities:Object
  },
  data(){
    return {
      message:'',
      list:[]
    }
  },
  watch:{
    message(){
      const that=this
      const result=[]
      var inputText=this.message
      console.log(inputText)
      for (let key in this.cities) {
        that.cities[key].forEach(function(value){
         if(value.name.indexOf(inputText)>-1 || value.spell.indexOf(inputText)>-1){
          result.push(value)
         }
        })
      }
      this.list=result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{color: #fff}
.search{color: #fff;background:#00bcd4;height: 0.72rem; padding: 0.1rem}
.searchInput{height: .62rem;line-height: .62rem;border-radius: .06rem;text-align: center;width: 100%;color: #3e3e3e;box-sizing:border-box;padding: .1rem}
.searchContent{position: absolute;left: 0;right: 0;bottom:0;top:1.76rem;background: green;overflow: hidden;z-index:3}
</style>
