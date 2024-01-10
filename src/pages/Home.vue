<template>
  <div class="main">
  <Welcome />
  <H1>KOMMANDE EVENTS</H1>

  <Footer />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome'
import Footer from '@/components/Footer'

export default {
  name: "Home",
  components: {
    Welcome,
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

  .H1 {
    font-size: 3rem;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

</style>
