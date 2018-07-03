<template>
  <div class="header">
    <div class="headerLeft">
      <i class="iconfont icon-xiangzuo1"></i>
    </div>
    <div class="headercenter">
      <i class="iconfont icon-search"></i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="headerRight">
        北京
        <i class="iconfont icon-xiangxia1"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{color: #fff}
  .header{display:flex;color: #fff;background:#00bcd4;height: 0.86rem; line-height: 0.86rem; }
  .icon-xiangzuo1{width: 0.64rem;float: left;text-align: center;font-size: .4rem}
  .headercenter{flex:1;background: #fff;line-height: 0.64rem;height: 0.64rem;margin-left: .2rem;padding-left: .2rem;border-radius: .1rem;color: #ccc;margin-top: 0.12rem}
  .headerRight{min-width: 1.04rem;padding: 0 .1rem;float: right;text-align: center;}
</style>
