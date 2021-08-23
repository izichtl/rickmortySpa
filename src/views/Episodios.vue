<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <List   />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import List from '../components/List.vue'

export default {
  name: 'Home',
  components: {
    Header,
    List
  }
}
</script>
