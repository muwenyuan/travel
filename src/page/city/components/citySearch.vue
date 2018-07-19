<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="searchInput" v-model="message">
    </div>
    <div class="searchContent" ref="searchShow" v-show='message'>
     <ul>
       <li v-for='item of list' :key="item.id" class="searchItem" >{{item.name}}</li>
       <li class="searchItem" v-show='listLength'>暂无数据</li>
     </ul>
   </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'citySearch',
  props:{
    cities:Object
  },
  data(){
    return {
      message:'',
      list:[],
      timer:null
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.searchShow,{})
    })
  },
  computed:{
    listLength(){
      return !this.list.length
    }
  },
  watch:{
    message(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.message){
        this.list=[]
      };
      this.timer=setTimeout(()=>{
        const result=[];
        var inputText=this.message
        for (let key in this.cities) {
          this.cities[key].forEach(function(value){
           if(value.name.indexOf(inputText)>-1 || value.spell.indexOf(inputText)>-1){
            result.push(value)
           }
          })
        }
        this.list=result
      },100)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{color: #fff}
.search{color: #fff;background:#00bcd4;height: 0.72rem; padding: 0.1rem}
.searchInput{height: .62rem;line-height: .62rem;border-radius: .06rem;text-align: center;width: 100%;color: #3e3e3e;box-sizing:border-box;padding: .1rem}
.searchContent{position: absolute;left: 0;right: 0;bottom:0;top:1.76rem;background:#eee;overflow: hidden;z-index:3}
.searchItem{line-height: 0.62rem;padding-left: .2rem;color: #666;background: #fff;border-bottom: 1px solid #f3f2f2}
</style>
