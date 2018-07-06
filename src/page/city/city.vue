<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter='letter'></city-list>
    <city-letter :cities="cities" @change='clickLetter'></city-letter>
  </div>
</template>

<script>
import CityHeader from './components/header.vue';
import CitySearch from './components/citySearch.vue';
import CityList from './components/list.vue';
import CityLetter from './components/letter.vue';
import axios from "axios"
export default {
  name: 'city',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityLetter
  },
  data(){
    return {
      hotCities:[],
      cities:{},
      letter:""
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
    },
    clickLetter(data){
      this.letter=data
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
