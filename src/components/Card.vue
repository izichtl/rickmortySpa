<template>
      <div class="conteiner" id="v-for-object" >
        <div v-for="value in this.personagem" :key="value.name">
          
            <div class="card" >
              <div class="img" >
                <img :src='value.image' alt="avatar" >
              </div>
              <div class="textInfo">
              <h2>{{ value.name }}</h2>
              <h4>{{ value.name }}</h4>
              <p>{{ value.origin.name }}</p>
              <p>{{ value.episode[0].name }}</p>  
              </div>
            </div>
        </div>
      </div>
  
  
</template>

<script>
export default {
  name: 'Card',
  props: ['dataTratada', 'personagem', 'episodio'],
  
  data: function (){
    return {
      data: {},
    }
  },
  async mounted(){

      this.data = this.personagem
    
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
.textInfo{
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: rgb(59, 4, 59);
  align-items: flex-start;
  font-size: 13px;
  font-weight: 600;
  max-height: 100%;
  justify-content: space-around;
}
h1, h2, h3, h4, p {
  padding: 0px;
  margin: 0px;
}
.card{
  
  display: flex;
  width: 290px;
  border-radius: 20px;
  padding: 20px;
  background-color: rgb(252, 226, 255);
  margin: 10px;
  
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
