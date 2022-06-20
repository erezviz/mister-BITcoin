<template>
  <nav class="contact-filter">
    <input @input="filter" v-model="filterBy.txt" type="text" placeholder="Search">
  </nav>
</template>

<script>
export default {
    data(){
        return{
            filterBy: { txt:''}
        }
    },
    methods:{
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style></style>