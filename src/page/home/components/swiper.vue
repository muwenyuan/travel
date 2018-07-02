<template>
  <div class="swiper">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" class="index_img">
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props:{
    list:Array
  },
  data(){
    return{
      swiperOption: {
        pagination: {
            el: '.swiper-pagination'
        },
        loop:true
      }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index_img{width: 100%}
</style>
