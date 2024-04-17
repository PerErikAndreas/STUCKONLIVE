<template>
    <div class="calendar-title">
      <h2>GENOMFÖRDA</h2>
    </div>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(group, index) in slides" :key="index">
        <div class="carousel__item">
          <div v-for="(image, idx) in group" :key="idx"
               class="image-container"
               :class="{ 'single-image': group.length === 1 }">
            <img :src="image.image" :alt="image.alt" />
          </div>
        </div>
      </Slide>
    </Carousel>
</template>



<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
      [
        { image: "https://assets.codepen.io/8685843/JoelAlme.jpg", alt: "Joel Alme" },
        { image: "https://assets.codepen.io/8685843/Sodrasverige.jpg", alt: "Södra Sverige" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Kazzivalazza.jpeg", alt: "Kassi Valazza" },
        { image: "https://assets.codepen.io/8685843/SarahKlang.jpg", alt: "Sarah Klang" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/JoshuaRayWalkers.jpg", alt: "Joshua Ray Walkers" },
        { image: "https://assets.codepen.io/8685843/Spiders.jpg", alt: "The Spiders" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/AnnaVonHauswolf.jpg", alt: "Anna Von Hauswolf" },
        { image: "https://assets.codepen.io/8685843/Tallestman.jpg", alt: "Tallest Man On Earth" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/TeoLawrense.jpeg", alt: "Teo Lawrense" },
        { image: "https://assets.codepen.io/8685843/Vasterbron.jpg", alt: "Västerbron" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Henning.jpg", alt: "Henning" },
        { image: "https://assets.codepen.io/8685843/MattiasAlkberg.jpg", alt: "Mattias Alkberg" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Slowgold.jpg", alt: "Slowgold" },
        { image: "https://assets.codepen.io/8685843/CharlesW.jpg", alt: "Charlie Watson" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Tonbruket.jpg", alt: "Tonbruket" },
        { image: "https://assets.codepen.io/8685843/DavidRitchards.jpg", alt: "David Ritchard" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/VannaInget.jpeg", alt: "Vånna Inget" },
        { image: "https://assets.codepen.io/8685843/WhitneyRose.jpg", alt: "Whitney Rose" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Trummor%26Orgel.jpeg", alt: "Trummor & Orgel" },
        { image: "https://assets.codepen.io/8685843/Treburt.jpeg", alt: "Tré Burt" }
      ],
      [
        { image: "https://assets.codepen.io/8685843/Dahmers.jpeg", alt: "The Dahmers" },
        { image: "https://assets.codepen.io/8685843/DanielRomanosOutfit.jpeg", alt: "Daniel Romanos Outfit" }
      ],

      [
        { image: "https://assets.codepen.io/8685843/AnnaugkondaBrattland.jpeg", alt: "Annaugkonda/Brattland", }
        // This last one is alone if there's an odd number of images
      ],
      [{ image: "https://assets.codepen.io/8685843/CalebC.jpg", alt: "Caleb C" }],
      [{ image: "https://assets.codepen.io/8685843/GrandeRoses.jpg", alt: "Grande Roses" }],
      [{ image: "https://assets.codepen.io/8685843/KristofferA.jpg", alt: "Kristoffer Åström" }],
      [{ image: "https://assets.codepen.io/8685843/NationalReserve.jpg", alt: "National Reserve" }],
      [{ image: "https://assets.codepen.io/8685843/AncientShapes.jpg", alt: "Ancient Shapes" }],
      [{ image: "https://assets.codepen.io/8685843/Halm.jpg", alt: "Halm" }],
      [{ image: "https://assets.codepen.io/8685843/WilliamCrighton.jpg", alt: "William Crighton" }],
      [{ image: "https://assets.codepen.io/8685843/MotoBoy.jpg", alt: "Moto Boy" }],
      [{ image: "https://assets.codepen.io/8685843/SvartKatt.jpg", alt: "Svart Katt" }],
      [{ image: "https://assets.codepen.io/8685843/JerryLeger.jpg", alt: "Jerry Leger" }],
      [{ image: "https://assets.codepen.io/8685843/AndrewCombs.jpg", alt: "Andreas Combs" }],
      [{ image: "https://assets.codepen.io/8685843/WillieWattson.jpg", alt: "Willie Wattson" }],
      [{ image: "https://assets.codepen.io/8685843/MargoClicer.jpeg", alt: "Dawn Landes" }],
      [{ image: "https://assets.codepen.io/8685843/Skraekodlan.jpg", alt: "Skraekodlan" }],
      [{ image: "https://assets.codepen.io/8685843/AvantGardet.jpg", alt: "Avant Gardet" }],
      [{ image: "https://assets.codepen.io/8685843/ChristianKjellvander.jpeg", alt: "Christian Kjellvander" }],
      [{ image: "https://assets.codepen.io/8685843/LesBigByrds.jpg", alt: "Ström" }],
      [{ image: "https://assets.codepen.io/8685843/MargoClicer.jpeg", alt: "Margo Clicer" }],
      [{ image: "https://assets.codepen.io/8685843/DeepDarkWoods.jpeg", alt: "Deep Dark Woods" }],
      [{ image: "https://assets.codepen.io/8685843/AnnaugkondaBrattland.jpeg", alt: "Annaugkonda/Brattland" }]
    ],
    };
  },
});
</script>

<style scoped>
.carousel__item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%; /* Ensures that the carousel item takes full width */
  height: auto; /* Allows the height to adjust based on the image */
  margin: 10px
}

.image-container {
  flex: 1 0 40%; /* Each image takes about half the width minus some margin */
 }

.image-container.single-image {
  flex: 1 0 96%; /* Takes almost the full width of the slide */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images cover the area without distorting */
}

.carousel-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw; /* Adjusted for better control over size */
  margin: 0 10px 0 10px;
}

.calendar-title {
  display: flex;
  font-family: futura;
  margin-top: 72px;
  color: #e7492e;
  width: 90%;
}

.calendar-title h2 {
margin-bottom: 0px;
}
</style>

