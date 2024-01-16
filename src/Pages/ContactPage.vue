<template>
    <div>
      <ContactComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import ContactComponent from '../components/ContactComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: "ContactPage",
    components: {
      ContactComponent,
      FooterComponent
    }
  }
  </script>
  