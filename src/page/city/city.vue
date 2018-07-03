<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/header.vue';
import CitySearch from './components/citySearch.vue';
import CityList from './components/list.vue';
export default {
  name: 'city',
  components:{
    CityHeader,
    CitySearch,
    CityList
  },
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
