<template>
      <div class="cardC">
        <div class="search">

         <input type="text" v-model="search" placeholder="Digite para pesquisar" >
         <button class="button" v-on:click="sort()">ORDENAR</button>
      </div>
        <div v-if="this.info" class="conteiner" >
            <div  v-for="item in filtrado" :key="item.message" class="card" >
              <div class="img" >
                <img :src='item[2]' alt="avatar" >
              </div>
              <div class="textInfo">
              <h4>NAME: {{ item[0] }}</h4>
              <p>LOC: {{ item[1] }}</p>
              <p>EP'S: {{ item[3][0].name }}</p>  
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
      console.log("_________RESQUEST_______")
        try {
          
          let result =  await axios({
            method: "POST",
              url: "https://rickandmortyapi.com/graphql",
              data: {
                query: 
                `{ characters (page: 0, filter: { name: "" }) { results { name image origin { name } episode { name } } } episodes (page: 0, filter: { name: "" }) { results { name air_date characters { name } } } }`
              }});
          let data = result.data.data.characters.results
          data.forEach( (elemento) => {
                let arrModel = [elemento.name, elemento.origin.name, elemento.image, elemento.episode]
                array.push(arrModel)
              })
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
.img img{
  width: 130px;
  max-height:100%; 
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
.search input{
  color: red;
  height: 40px;
  font-size: 20px;
  width: 70%;
  border-color: cyan;
  border-width: 6px;
}
.button{
  margin: 1.8vh;
  padding: 1.5vh;
  color: cyan;
  width: 150px;
  background-color: rgb(20, 20, 20);
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
}
.textInfo{
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: rgb(0, 0, 0);
  align-items: flex-start;
  font-size: 13px;
  font-weight: 600;
  max-height: 100%;
  justify-content: space-around;
}
h1, h2, h3, h4, p {
  padding: 0px;
  margin: 0px;
  color: cyan;
}
.card{
  
  display: flex;
  width: 280px;
  border-radius: 20px;
  padding: 20px;
  background-color: rgb(41, 39, 39);
  margin: 15px;
  box-shadow: 3px 6px cyan;
  
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
