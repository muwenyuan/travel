<template>
  <div class="list" ref="list">
    <div class="listContent">
      <div class="cityList">
        <div class="title">当前城市</div>
        <div class="buttonList">
          <div class="buttonWrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="cityList">
        <div class="title">热门城市</div>
        <div class="buttonList">
          <div class="buttonWrap" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="cityList" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="letterBox">
          <div class="letterList" v-for="itemlist of item" :key="itemlist.id">{{itemlist.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  data(){
    return {

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.list,{})
    })
  },
  watch:{
    letter(){
      const element=this.$refs[this.letter][0]
      this.scroll.scrollToElement(element,300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{position: absolute;left: 0;top:1.78rem;right:0;bottom: 0;overflow: hidden;}
.title{line-height: .54rem;background: #eee;color: #666;font-size: .26rem;padding-left: .2rem;border-bottom: 1px solid #ccc}
.buttonList{overflow: hidden;padding: .1rem .6rem .1rem .1rem}
.buttonWrap{width: 33.33%;float: left;}
.button{margin: .1rem;padding: .1rem 0;text-align: center;border: .02rem solid #ccc;border-radius: .06rem;}
.letterList{line-height: .76rem;padding-left: .2rem;border-bottom:1px solid #e6e6e6;}
</style>
