<template>
    <Card   />
</template>

<script>

import Card from './Card.vue'

export default {
  name: 'DataCard',
  components:{
      Card,
    
  },
  data: function (){
    return {
        dataTratada: [],
        episodio: {},
        personagem: {},
        arr: [],
        dataRecebida: {},
        dataGeral: {},
        }
  }, methods: {
    sort: async function () {
      
      //console.log(this.arr.sort())
      console.log()
    }
  },    
}
</script>


<style scoped>
</style>
