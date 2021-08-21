<template>
    <h1>DATA CARD HERE</h1>
    <Card v-bind:personagem="personagem" v-bind:episodio="episodio"  />
</template>

<script>
const axios = require('axios')
import Card from './Card.vue'

export default {
  name: 'HelloWorld',
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
  },
  async created(){

        try {
          
          let result =  await axios({
              method: "POST",
              url: "https://rickandmortyapi.com/graphql",
              data: {
                query: 
                `{ characters (page: 0, filter: { name: "a" }) { results { name image origin { name } episode { name } } } episodes (page: 0, filter: { name: "" }) { results { name air_date characters { name } } } }`
              }});
              this.dataGeral = result.data.data
              this.personagem = this.dataGeral.characters.results
              this.episodio = this.dataGeral.episodes.results
              console.log(result);
              this.dataRecebida = result.data.data.characters.results
            
                
              this.personagem.forEach( elemento => {
                 
                this.arr.push(elemento)
                
               
              })
              
              } catch (error){
          console.error(error);
        }
    
  },     
}
</script>


<style scoped>
</style>
