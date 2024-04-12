<template>
  <div>
    <div class="calendar-title">
    </div>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="slide.image" :alt="slide.alt" class="posters">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        { image: 'https://assets.codepen.io/8685843/JoelAlme.jpg', alt: 'Joel Alme' },
        { image: 'https://assets.codepen.io/8685843/Sodrasverige.jpg', alt: 'Södra Sverige' },
        { image: 'https://assets.codepen.io/8685843/Kazzivalazza.jpeg', alt: 'Kassi Valazza' },
        { image: 'https://assets.codepen.io/8685843/SarahKlang.jpg', alt: 'Sarah Klang' },
        { image: 'https://assets.codepen.io/8685843/JoshuaRayWalkers.jpg', alt: 'Joshua Ray Walkers' },
        { image: 'https://assets.codepen.io/8685843/Spiders.jpg', alt: 'The Spiders' },
        { image: 'https://assets.codepen.io/8685843/AnnaVonHauswolf.jpg', alt: 'Anna Von Hauswolf' },
        { image: 'https://assets.codepen.io/8685843/Tallestman.jpg', alt: 'Tallest Man On Earth' },
        { image: 'https://assets.codepen.io/8685843/TeoLawrense.jpeg', alt: 'Teo Lawrense' },
        { image: 'https://assets.codepen.io/8685843/Vasterbron.jpg', alt: 'Västerbron' },
        { image: 'https://assets.codepen.io/8685843/BrorGunnar.jpeg', alt: 'Bror Gunnar Jansson' },
        { image: 'https://assets.codepen.io/8685843/AstaKask.jpg', alt: 'Asta Kask' },
        { image: 'https://assets.codepen.io/8685843/Henning.jpg', alt: 'Henning' },
        { image: 'https://assets.codepen.io/8685843/MattiasAlkberg.jpg', alt: 'Mattias Alkberg' },
        { image: 'https://assets.codepen.io/8685843/Slowgold.jpg', alt: 'Slowgold' },
        { image: 'https://assets.codepen.io/8685843/CharlesW.jpg', alt: 'Charlie Watson' },
        { image: 'https://assets.codepen.io/8685843/Tonbruket.jpg', alt: 'Tonbruket' },
        { image: 'https://assets.codepen.io/8685843/DavidRitchards.jpg', alt: 'David Ritchard' },
        { image: 'https://assets.codepen.io/8685843/VannaInget.jpeg', alt: 'Vånna Inget' },
        { image: 'https://assets.codepen.io/8685843/WhitneyRose.jpg', alt: 'Whitney Rose' },
        { image: 'https://assets.codepen.io/8685843/Trummor%26Orgel.jpeg', alt: 'Trummor & Orgel' },
        { image: 'https://assets.codepen.io/8685843/Treburt.jpeg', alt: 'Tré Burt' },
        { image: 'https://assets.codepen.io/8685843/Dahmers.jpeg', alt: 'The Dahmers' },
        { image: 'https://assets.codepen.io/8685843/DanielRomanosOutfit.jpeg', alt: 'Daniel Romanos Outfit' },
        { image: 'https://assets.codepen.io/8685843/LudwigHart.jpeg', alt: 'Ludwig Hart' }
      ]
    }
  },
})
</script>



<style scoped>
    .carousel__item img {
      max-width: 90%;
      max-height: 100vh;
      object-fit: cover; /* This ensures the aspect ratio is preserved */
      margin-bottom: 600px;

    }

  .carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin-bottom: 200px;
  }

  .calendar-title {
    display: flex;
    justify-content: flex-end;
    color: #e7492e;
    margin-right: 20px;
  }
</style>