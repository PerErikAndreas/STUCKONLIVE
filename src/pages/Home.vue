<template>
  <div class="main">
  <Welcome />
  <Carousel />
  <Instagram />
  <Footer />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Instagram from '@/components/Instagram'

export default {
  name: "Home",
  components: {
    Welcome,
    Carousel,
    Instagram,
    Footer
  }
}
</script>

<style scoped>

  .two-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  
    .four-four {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .posters {
      max-width: 100%;
      max-height: 100vh;
    }
</style>
