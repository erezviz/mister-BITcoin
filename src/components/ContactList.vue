<template>
  <section v-if="contacts" class="contact-list">
    <article class="contact-preview-container" v-for="contact in contacts" :key="contact._id">
       <RouterLink :to="`/contact/${contact._id}`"> <ContactPreview :contact="contact"/></RouterLink>
       <button @click="removeContact(contact._id)">Delete</button>
    </article>
  </section>
    <div v-else>Loading...</div>
</template>

<script>
import ContactPreview from '../components/ContactPreview.vue'
export default {
    components:{
        ContactPreview,
    },
    props:{
        contacts:{
            type: Array,
            required: true,
        },
    },
    methods:{
        removeContact(contactId){
            this.$emit('remove-contact', contactId)
        }
    }
}
</script>

<style>

</style>