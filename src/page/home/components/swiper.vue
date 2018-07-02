<template>
  <div class="swiper">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item of piclist" >
          <img :src="item" class="index_img">
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
  data(){
    return{
      piclist:['http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg','http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'],
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
.swiper-pagination-bullet-activ{color: #fff !important}
</style>
