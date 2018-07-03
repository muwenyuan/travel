<template>
  <div class="header">
    <div class="headerLeft">
      <router-link to="/">
        <i class="iconfont icon-xiangzuo1"></i>
      </router-link>
    </div>
    <div class="headercenter">
     国内城市
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityHeader',
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{color: #fff}
  .header{color: #fff;background:#00bcd4;height: 0.86rem; line-height: 0.86rem; position: relative;}
  .icon-xiangzuo1{width: 0.64rem;text-align: center;font-size: .4rem;position: absolute;left: 0;top:0;}
  .headercenter{text-align: center;}
</style>
