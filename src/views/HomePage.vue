<template>
  <section class="home-page">
   <h1> Welcome {{currUser.name}}</h1>
   <h2>You have <span>{{currUser.coins}}</span> coins</h2>
   <h4>Current Bitcoin rate: {{currRate}}</h4>
  </section>
</template>

<script>
import {userService} from '../services/user.service'
import {bitcoinService} from '../services/bitcoin.service'
export default {
  data(){
    return{
      currUser: null,
      currRate: 0
    }
  },
  created(){
    this.currUser = userService.getUser()
    this.currRate = bitcoinService.getRate(this.currUser.coins)
  }
}
</script>

<style lang="scss">

</style>