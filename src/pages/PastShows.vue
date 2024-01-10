<template>
    <div class="main-pastshows">
      <Carousel />
      <Footer />

    </div>
  </template>
  
  <script>
  import Carousel from '@/components/Carousel'
  import Footer from '@/components/Footer'
  
  export default {
    name: "PastShows",
    components: {
        Carousel,
        Footer
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

  