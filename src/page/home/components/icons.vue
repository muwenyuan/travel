<template>
  <div class="icons">
     <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of page" :key="index">
        <div class="iconList" v-for="itemlist of item" :key="itemlist.id">
          <div class="iconImg">
            <img :src="itemlist.imgUrl" alt="" class="iconImgContent">
          </div>
          <p class="iconDec">{{itemlist.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'icons',
  components: {
    swiper,
    swiperSlide
  },
  props:{
    icons:Array
  },
  data(){
    return {
      swiperOption: {
        loop:true
      }
    }
  },
  computed:{
    page(){
      const pages=[];
      this.icons.forEach(function(value,index,array){
        const page=Math.floor(index/8);
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icons{margin-top: .1rem}
.iconList{width: 25%;float: left;height: 0;padding-bottom: 25%;position: relative;overflow: hidden;}
.iconImg{position: absolute;left:0;bottom: 0.44rem;top:0;right: 0;padding: .1rem;}
.iconImgContent{height: 100%;display: block;margin: 0 auto}
.iconDec{position: absolute;left:0;right:0;bottom: 0;height: 0.44rem;line-height: 0.44rem;text-align: center;}
</style>
