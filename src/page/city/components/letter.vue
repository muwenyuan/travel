<template>
  <div class="letter">
    <ul>
      <li
        v-for="item of letters"
        @click="clickletter"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityLetter',
  props:{
    cities:Object
  },
  data(){
    return {
      handtouchStart:false,
      startAY:0,
      timer:null
    }
  },
  computed:{
    letters(){
      const letters=[]
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated(){
    this.startAY=this.$refs["A"][0].offsetTop
  },
  methods:{
    clickletter(e){
      this.$emit("change",e.target.innerHTML)
    },
    touchStart(){
      this.handtouchStart=true
    },
    touchMove(e){
      if(this.handtouchStart){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
          const touchmoveY=e.touches[0].clientY-89;
          const index=Math.floor((touchmoveY-this.startAY)/20)
          if(index>=0&&index<this.letters.length){
            this.$emit("change",this.letters[index])
          }
        },16)
      }
    },
    touchEnd(){
      this.handtouchStart=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter{position: fixed;top:1.78rem;right: 0;bottom:0;z-index: 2;width: .4rem;display: flex;align-items:center;justify-content:center;line-height: .4rem;font-size: .24rem;color: #04c3bc}
</style>
