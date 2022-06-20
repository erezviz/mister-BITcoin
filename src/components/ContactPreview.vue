<template>
<div class="contact-preview flex col ">
    <div class="previewer flex ">
        <ContactSVG/>
  <h2>{{contact.name}}</h2>
    </div>
</div>

</template>

<script>
import ContactSVG from './icons/ContactSVG.vue'
export default {
    props:{
        contact:{
            type:Object,
            required: true,
        }
    },
    components:{
        ContactSVG,
    }

}
</script>

<style>

</style>