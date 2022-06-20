<template>
  <section v-if="contact" class="contact-details flex col">
    <ContactSVG/>
    <ul class="contact-info">
      <li class="contact-name">{{contact.name}}</li>
      <li class="contact-email">
        <a :href="`mailto:${contact.email}`">{{contact.email}}</a>
      </li>
      <li class="contact-phone">
        <a :href="`tel:${contact.phone}`">{{contact.phone}}</a>
      </li>
    </ul>
    <div class="contact-actions flex ">
      <button class="btn-select" @click="back">Back</button>
     <RouterLink :to="`/contact/edit/${contact._id}`"> <button class="btn-edit">Edit</button></RouterLink>
    </div>
   
  </section>
  <p v-else>Loading...</p>
</template>

<script>
import ContactSVG from '../components/icons/ContactSVG.vue'
import {contactService} from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    }
  },
 async created() {
    const { _id } = this.$route.params
    this.contact = await contactService.get(_id)
  },
  methods:{
    back(){
      this.$router.push('/contact')
    }
  },
  components:{
    ContactSVG,
  }
}
</script>

<style>
</style>