<template>
  <div class="list">
    <div class="cityList">
      <div class="title">当前城市</div>
      <div class="buttonList">
        <div class="buttonWrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="cityList">
      <div class="title">热门城市</div>
      <div class="buttonList">
        <div class="buttonWrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="cityList">
      <div class="title">A</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityList',
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{line-height: .54rem;background: #eee;color: #666;font-size: .26rem;padding-left: .2rem;border-bottom: 1px solid #ccc}
.buttonList{overflow: hidden;padding: .1rem .6rem .1rem .1rem}
.buttonWrap{width: 33.33%;float: left;}
.button{margin: .1rem;padding: .1rem 0;text-align: center;border: .02rem solid #ccc;border-radius: .06rem;}
</style>
