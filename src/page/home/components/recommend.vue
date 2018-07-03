<template>
  <div>
    <div class="title">热销推荐</div>
    <div class="recommendBox">
      <div class="recommendList" v-for="item in recommendList" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <div class="recommendPic">
            <img :src="item.imgUrl" alt="" class="recommendPicContent">
          </div>
          <div class="recommenText">
            <P class='recommendTitle'>{{item.title}}</P>
            <P class='recommendDesc'>{{item.desc}}</P>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  components:{
  },
  props:{
    recommendList:Array
  },
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{line-height: .8rem;background:#eee;text-indent: .2rem;margin-top: .2rem}
 .recommendList{background: #fff;border-bottom: 1px solid #ccc;overflow: hidden;}
 .recommendList:last-child{border-bottom: 0px}
  .recommendList a{display:flex;width: 100%}
.recommendPic{width: 1.7rem;height: 1.7rem;padding: .1rem}
.recommendPicContent{width: 100%;height: 100%}
.recommenText{flex:1;padding: .1rem}
.recommendTitle{line-height: .54rem;font-size: .32rem}
.recommendDesc{line-height: .4rem;color: #ccc}
.item-button{line-height: .44rem;margin-top: .16rem;background: #ff9300;padding: 0 .2rem;border-radius: .06rem;color: #fff}
</style>
