<template>
    <div class="main-pastshows">
      <PostersComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import PostersComponent from '../components/PostersComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: "PastShows",
    components: {
        PostersComponent,
        FooterComponent
    }
  }
  </script>

<style scoped>

.main-pastshows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

</style>

  