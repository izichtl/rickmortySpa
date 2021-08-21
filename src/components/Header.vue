<template>
  <div class="hello">
    <div class="topnav">
      <a class="active" href="#home">RickMory DashBord</a>
       <router-link to="/">Personagens</router-link>
       <router-link to="/about">Episódios</router-link> 
    </div>
  </div>
</template>

<script>





export default {
  name: 'HelloWorld',
  components:{
  },
  data: function (){
    return {
      search: '',
      displayData: [],
      data: {},
      objeto: {}
    }
  },
  
      
}
</script>

<style scoped>
.search-container{
  padding-right: 5px;
}
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
  color: cyan;
}
* {box-sizing: border-box;}

body {

  font-family: Arial, Helvetica, sans-serif;
  
}

.topnav {
  margin-top: 0px;
  overflow: hidden;
  background-color: cyan;
  
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
}

.topnav a:hover {
  background-color: cyan;
  color: white;
}

.topnav a.active {
  background-color: black;
  color: cyan;
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
  background: rgb(179, 173, 173);
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
