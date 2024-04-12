<template>
  <div>
    <div class="calendar-title">
      <h1>GENOMFÖRDA</h1>
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
                // from here down we have horizontal

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
      ]
    }
  },
})
</script>



<style scoped>

.carousel__item{
margin: 0 10px 0 10px;
}

    .carousel__item img {
      max-width: 100%;
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
    font-family: futura;
  }
</style>