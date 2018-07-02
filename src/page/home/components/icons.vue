<template>
  <div class="icons">
     <swiper :options="swiperOption">
      <!-- <swiper-slide v-for="item of icons" :key="item.id">

      </swiper-slide> -->
    </swiper>
    {{page}}
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
       /* if(!pages[page]){
          pages=[]
        }*/
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
