<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="recommendBox">
      <div class="recommendList" v-for="item in weekendList" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <div class="recommendPic">
            <img :src="item.imgUrl" alt="" class="recommendPicContent">
          </div>
          <div class="recommenText">
            <P class='recommendTitle'>{{item.title}}</P>
            <P class='recommendDesc'>{{item.desc}}</P>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props:{
    weekendList:Array
  },
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{line-height: .8rem;background:#eee;text-indent: .2rem;}
.recommendList{background: #fff;border-bottom: 1px solid #ccc;overflow: hidden;}
 .recommendList:last-child{border-bottom: 0px}
  .recommendList a{width: 100%}
.recommendPic{overflow: hidden;height: 0;padding-bottom: 37.09%}
.recommendPicContent{width: 100%}
.recommenText{padding: .1rem}
.recommendTitle{line-height: .54rem;font-size: .32rem}
.recommendDesc{line-height: .4rem;color: #ccc}
</style>
