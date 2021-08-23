<template>
      <div class="cardC">
        <div class="search">

         <button class="button" v-on:click="sort()">Ordenar</button>
         <input type="text" v-model="search" placeholder="Digite para pesquisar" >
      </div>
        
      
       
        <div v-if="this.info" class="conteiner" >
            <div  v-for="item in filtrado" :key="item[0]" class="card" >
                          <div class='imgtext'>
                          <div class='text'>
                          <div class="textInfo">
                    <h2>{{item[0]}}</h2><br>
                    <h4>Data de Lançamento: </h4>
                    <h3> {{item[1]}}</h3>
                    <button class="button" v-on:click="botao = !botao">Personagens</button>
                          </div>
                          </div>
                          </div>

                  <div class='ep' v-if="botao">
                        <h5>Personagens:</h5><br>
                      <p v-for="(ep, index) in item[2]" :key="ep.name"> 
                      {{ item[2][index].name }}
                      </p> 
                      
                      </div>
                      
                      
              </div>
        </div>
      </div>
      
  
  
</template>

<script>
const axios = require('axios')

export default {
  name: 'Card',
  props: ['dataTratada', 'arr', 'episodio'],
  
  data: function (){
    return {
      dataView: [],
      botao: false,
      search: '',
      info: [],
      infoSorted: [],
      isSorted: false,
    }
  },
  methods: {
    filter: function () {
        let filtro = this.dataView.filter((b) => {
          
          return b[0].match(this.search)
        })
        console.log(filtro)




    },
    btn: function () {
      this.botao = true;

    },
    sort: function () {
      if(this.isSorted){
        this.isSorted = false
        console.log(this.isSorted)
        this.dataView = this.info
        
      } else {
        this.isSorted = true
        console.log(this.isSorted)
        this.dataView = this.infoSorted
        
      }
      console.log(this.dataView)
      console.log(this.info)
      
    },
    }, async created() {
      let array = []
      let arraySort = []
        try {
          
          let result =  await axios({
            method: "POST",
              url: "https://rickandmortyapi.com/graphql",
              data: {
                query: 
                `{ characters (page: 0, filter: { name: "" }) { results { name image origin { name } episode { name } } } episodes (page: 0, filter: { name: "" }) { results { name air_date characters { name } } } }`
              }});
          let data = result.data.data.episodes.results
        

          data.forEach( (elemento) => {
                let arrModel = [elemento.name, elemento.air_date, elemento.characters]
                array.push(arrModel)
              })
          console.log(array)
          array.forEach(e => {
            arraySort.push(e)
          })
          
          
          this.info = array
          this.dataView = this.info
          this.infoSorted = arraySort.sort()
              } catch (error){
          console.error(error);
        } return array
  },
  computed: {
    filtrado: function(){
      return this.dataView.filter((b) => {
          return b[0].toLowerCase().match(this.search.toLowerCase())
        })
    }
  }
  

}
</script>


<style scoped>
.conteiner{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ep{
  display: flex;
  flex-direction: column;
  align-items: left;
}
.ep p{
  font-size: 15px;
}
img:hover{
  cursor: pointer;
}
img{
  width: 250px;
  max-height:100%; 
  border-radius: 3px;
  box-shadow: 0px 0px 15px #a0e743;
}
.imgtext{
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
}
.cardC{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search{
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.search  input.active {
  border-color:     #a0e743;
}
.search input{
  color: #a0e743;
  background-color: #080808;
  height: 40px;
  font-size: 20px;
  width: 70%;
  border-color: #a0e743;
  border-width: 1px;
}
.button{
  margin: 1.8vh;
  padding: 1.5vh;
  color: #a0e743;
  width: 130px;
  background-color: #080808;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  border: 1px solid #a0e743; 
}
.text{
  display: flex;

}
.textInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: rgb(0, 0, 0);
  font-size: 13px;
  font-weight: 600;
  max-height: 100%;
}
h1, h2, h3, h4, h5, p {
  padding: 5px;
  margin: 0px;
  color: #a0e743;
}
.card{
  border: 1.5px solid #a0e743;
  align-items: center;
  width: 280px;
  padding: 20px;
  border-radius: 2px;
  background-color: #202020;
  margin: 15px;
  
}
.card:hover{
  border: 1.5px solid#FF6937;
  background-color: #0A0A0A;
}
li {
  color: pink;
}
@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>
