<script >
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  
  <AppHeader />
<main class="main-container">
  <RouterView />
</main>

<AppFooter/>
</template>
 

<style lang="scss">
@import './assets/style/styles';
</style>
