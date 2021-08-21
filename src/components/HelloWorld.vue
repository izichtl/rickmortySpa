<template>


  <div class="hello">
    <div class="topnav">
      <a class="active" href="#home">Rick and Mory DashBord</a>
       <a href="#about">Personagens</a>
      <a href="#contact">Episódios</a>



      
    <div class="search-container">
      <form action="/action_page.php">
      <input type="text" v-model="search" placeholder="Searach.." >
      <button type="submit" value="submit"><i class="fa fa-search">Pesquisa</i></button>
    </form>
  </div>
  </div>
  
  
  
  
  

  <div style="padding-left:16px">
  
  </div>
    
  
  </div>
  <DataCard />
  <div id="example">
  <p>Original message: "{{  }}"</p>



  <p>Computed reversed message: "{{ typeof data }}"</p>
</div>
  
</template>

<script>

import DataCard from './DataCard.vue'
const axios = require('axios')


export default {
  name: 'HelloWorld',
  components:{
    DataCard,
  },
  data: function (){
    return {
      search: '',
      displayData: [],
      data: {},
      objeto: {}
    }
  },
  mounted() {
      //let bb = new dataObject();
      //this.objeto = bb.showData();
    },
  async created(){

        try {
          
          let result =  await axios({
              method: "POST",
              url: "https://rickandmortyapi.com/graphql",
              data: {
                query: 
                `{ characters(page: 1, filter: { name: "" }) { info { count } results { name status species origin { name } episode { name } } } location(id: 1) { id } episodesByIds(ids: [1, 2]) { id } }`
              }});
              console.log('log');
              this.data = result.data.data
              
              } catch (error){
          console.error(error);
        }
    
  },
  computed: {
        filteredData: function(){
          
          
          return this.data.filter(() => {})
        }

      }
      
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {box-sizing: border-box;}

body {

  font-family: Arial, Helvetica, sans-serif;
  
}

.topnav {
  margin-top: 0px;
  overflow: hidden;
  background-color: rgb(212, 69, 193);
}

.topnav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: rgb(231, 203, 203);
  color: black;
}

.topnav a.active {
  background-color: #35C092;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
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
