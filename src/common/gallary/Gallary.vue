<template>
  <div class="gallaryContent" @click="hideGallay">
      <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="(item,index) in imgs" :kety="index">
            <img :src="item" class="gallaryPic">
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'gallary',
  components: {
    swiper,
    swiperSlide
  },
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        observer:true,
        observeParents:true,
        loop:true
      }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
  },
  methods:{
    hideGallay(){
      this.$emit("close")
    }
  }
}
</script>

<style>
.gallaryContent{position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: #000;display:flex;align-items:center;z-index: 3}
.gallaryPic{width: 100%}
.swiper-pagination{color: #fff;}
</style>
