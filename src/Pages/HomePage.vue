<template>
  <div class="main">
  <WelcomeComponent />
  <H1>KOMMANDE EVENTS</H1>
  <BillettoComponent />
  <FooterComponent />
  </div>
</template>

<script>
import WelcomeComponent from '../components/WelcomeComponent.vue'
import BillettoComponent from '../components/BillettoComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: "HomePage",
  components: {
    WelcomeComponent,
    BillettoComponent,
    FooterComponent
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
    margin-bottom: 5vh;
  }

</style>
