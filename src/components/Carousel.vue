<template>
  <div>
    <div class="calendar-title">
      <h1>BILJETTER</h1>
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
        { image: 'https://assets.codepen.io/8685843/CalebC.jpg', alt: 'Caleb C' },
        { image: 'https://assets.codepen.io/8685843/GrandeRoses.jpg', alt: 'Grande Roses' },
        { image: 'https://assets.codepen.io/8685843/KristofferA.jpg', alt: 'Kristoffer Åström' },
        { image: 'https://assets.codepen.io/8685843/NationalReserve.jpg', alt: 'National Reserve' },
        { image: 'https://assets.codepen.io/8685843/AncientShapes.jpg', alt: 'Ancient Shapes' },
        { image: 'https://assets.codepen.io/8685843/Halm.jpg', alt: 'Halm' },
        { image: 'https://assets.codepen.io/8685843/WilliamCrighton.jpg', alt: 'William Crighton' },
        { image: 'https://assets.codepen.io/8685843/MotoBoy.jpg', alt: 'Moto Boy' },
        { image: 'https://assets.codepen.io/8685843/SvartKatt.jpg', alt: 'Svart Katt' },
        { image: 'https://assets.codepen.io/8685843/JerryLeger.jpg', alt: 'Jerry Leger' },
        { image: 'https://assets.codepen.io/8685843/AndrewCombs.jpg', alt: 'Andreas Combs' },
        { image: 'https://assets.codepen.io/8685843/WillieWattson.jpg', alt: 'Willie Wattson' },
        { image: 'https://assets.codepen.io/8685843/MargoClicer.jpeg', alt: 'Dawn Landes' },
        { image: 'https://assets.codepen.io/8685843/Skraekodlan.jpg', alt: 'Skraekodlan' },
        { image: 'https://assets.codepen.io/8685843/AvantGardet.jpg', alt: 'Avant Gardet' },
        { image: 'https://assets.codepen.io/8685843/ChristianKjellvander.jpeg', alt: 'Christian Kjellvander' },
        { image: 'https://assets.codepen.io/8685843/LesBigByrds.jpg', alt: 'Ström' },
        { image: 'https://assets.codepen.io/8685843/MargoClicer.jpeg', alt: 'Margo Clicer' },
        { image: 'https://assets.codepen.io/8685843/DeepDarkWoods.jpeg', alt: 'Deep Dark Woods' },
        { image: 'https://assets.codepen.io/8685843/AnnaugkondaBrattland.jpeg', alt: 'Annaugkonda/Brattland' },
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

    }

  .carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
  }

  .calendar-title {
    display: flex;
    justify-content: flex-end;
    color: #e7492e;
    margin-right: 20px;
  }
</style>