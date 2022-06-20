<template>
  <section class="contact-edit-page flex col center">
    <h1>Edit</h1>
    <form v-if="contact" @submit.prevent="save"  class="flex col">
        <span>Name:</span>
        <input v-model="contact.name" type="text">
        <span>Email:</span>
        <input v-model="contact.email" type="text">
        <span>Tel:</span>
        <input v-model="contact.phone" type="text">
        <button type="submit">Submit</button>
    </form>
    <button @click="back">Back</button>
  </section>
</template>

<script>
import {contactService} from '../services/contact.service'
export default {
    data(){
        return{
            contact: null
        }
    },
    methods:{
        async save(){
            await contactService.save(this.contact)
            this.back()
        },  
        back(){
            this.$router.push(`/contact/${this.contact._id}`)
        }
    },
   async created(){
        const {_id} = this.$route.params
        if(_id) this.contact = await contactService.get(_id) 
        else this.contact = contactService.getEmptyContact()
    }
}
</script>

<style>

</style>