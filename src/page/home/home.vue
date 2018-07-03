<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :icons="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue';
import HomeSwiper from './components/swiper.vue';
import HomeIcons from './components/icons.vue';
import HomeRecommend from './components/recommend.vue';
import HomeWeekend from './components/weekend.vue';
import axios from 'axios';
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      iconList:[],
      swiperList:[],
      recommendList:[],
      weekendList:[],
      city:'北京'
    }
  },
  methods:{
    homeInit(){
      axios.get("/api/index.json?city="+this.city)
      .then(this.getHomeSucc)
    },
    getHomeSucc(res){
      console.log(res)
      res=res.data;
      if(res.ret && res.data){
        this.iconList=res.data.iconList;
        this.swiperList=res.data.swiperList;
        this.recommendList=res.data.recommendList;
        this.weekendList=res.data.weekendList;
      }
    }
  },
  mounted(){
    this.homeInit()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
