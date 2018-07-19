<template>
  <div>
    <detail-banner></detail-banner>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import detailBanner from './components/banner.vue';
import detailList from './components/list.vue';
export default {
  name: 'detail',
  data(){
    return{
      list:[{
        title:'成人票',
        children:[
         {
          title:'成人三馆联票',
          children:[
           {title:'成人三馆联票---某一连锁店'}
          ]
        },
         {title:'成人五馆联票'}
        ]
      },{
        title:'学生票',
        children:[
         {title:'学生三馆联票'},
         {title:'学生五馆联票'}
        ]
      },{
        title:'儿童票'
      },{
        title:'特惠票'
      }]
    }
  },
  components:{
    detailBanner,
    detailList
  },
  methods:{
  }
}
</script>

<style>
</style>
