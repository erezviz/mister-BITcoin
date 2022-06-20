<template>
  <section class="contact-app flex col">
    <ContactFilter @filter="onFilter" />
    <RouterLink to="/contact/edit"><button class="btn-add">Add contact</button></RouterLink>
    <ContactList @remove-contact="removeContact" :contacts="contactsToShow" />
  </section>
</template>

<script>
import {contactService} from "../services/contact.service";

import ContactFilter from "../components/ContactFilter.vue";
import ContactList from "../components/ContactList.vue";
export default {
  components: {
    ContactList,
    ContactFilter,
  },
  data() {
    return {
      
      filterBy: { txt: "" },
    };
  },
  async created() {
    // this.contacts = await contactService.query()
    this.$store.dispatch({type: 'loadContacts'})
  },
  methods: {
    onFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(contactId){
      await this.$store.dispatch({type: 'removeContact', contactId})
    }
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
    contacts(){ return this.$store.getters.contacts}
  },
};
</script>

<style>
</style>