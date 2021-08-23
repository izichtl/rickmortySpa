<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <Card   />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Card
  }
}
</script>
<style scoped>
.home div{
  
}
</style>
