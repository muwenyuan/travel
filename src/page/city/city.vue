<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
  </div>
</template>

<script>
import CityHeader from './components/header.vue';
import CitySearch from './components/citySearch.vue';
import CityList from './components/list.vue';
import axios from "axios"
export default {
  name: 'city',
  components:{
    CityHeader,
    CitySearch,
    CityList
  },
  data(){
    return {
      hotCities:[],
      cities:{}
    }
  },
  methods:{
    cityInit(){
      let that=this;
      axios.get("/api/city.json")
      .then(function(res){
        res=res.data;
        console.log(res)
        if(res.ret && res.data){
          const data = res.data
          that.cities=data.cities
          that.hotCities=data.hotCities
        }
      })
    }
  },
  mounted(){
    this.cityInit();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
