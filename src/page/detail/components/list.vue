<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key='index'>
      <div class="itemTitle">{{item.title}}</div>
      <div v-if='item.children'>
        <detail-list :list='item.children' class="item-children"></detail-list>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'detailList',
  props:{
    list:Array
  },
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>

<style>
.itemTitle{line-height: .8rem;font-size: .32rem;padding: 0 .2rem;border-bottom: 1px solid #ccc}
.item-children{padding: 0 .2rem}
</style>
