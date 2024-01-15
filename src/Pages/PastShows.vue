<template>
    <div class="main-pastshows">
      <CarouselComponent />
      <FooterComponent />

    </div>
  </template>
  
  <script>
  import CarouselComponent from '../components/CarouselComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: "PastShows",
    components: {
        CarouselComponent,
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

  