<template>
  <div>
    <div class="detailBanner" @click="handelbanner">
      <img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="" class="detailBannerPic">
    </div>
    <gallary :imgs="imgs" v-show="showgallary" @close="hidegallaryclose"></gallary>
  </div>
</template>

<script>
import gallary from './../../../common/gallary/Gallary.vue';
export default {
  name: 'detailBanner',
  data(){
    return{
      showgallary:false,
      imgs:['http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_350x240_9f522f2c.jpg']
    }
  },
  components:{
    gallary
  },
  methods:{
    handelbanner(){
      this.showgallary=true
    },
    hidegallaryclose(){
      this.showgallary=false
    }
  }
}
</script>

<style>
.detailBanner{width: 100%;height: 0;padding-bottom: 55%;position: relative;}
.detailBannerPic{width: 100%}
</style>
