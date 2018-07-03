<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="searchInput">
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{color: #fff}
.search{color: #fff;background:#00bcd4;height: 0.72rem; padding: 0.1rem}
.searchInput{height: .62rem;line-height: .62rem;border-radius: .06rem;text-align: center;width: 100%;color: #3e3e3e;box-sizing:border-box;padding: .1rem}
</style>
