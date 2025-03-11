<template>
  <div class="carousel-container">
    <div class="carousel-title">
      <h2>TIDIGARE EVENTS</h2>
    </div>
    <div class="carousel" @mouseenter="stopCarousel" @mouseleave="startCarousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(group, index) in slides" :key="index">
          <div class="image-container" v-for="(image, idx) in group" :key="idx" :class="{ 'single-image': group.length === 1 }">
            <img :src="image.image" :alt="image.alt" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const currentIndex = ref(0);
    const intervalId = ref(null);

    const slides = ref([
      [{ image: require('@/assets/posters/JoelAlme.jpg'), alt: "Joel Alme" }, { image: require('@/assets/posters/Sodrasverige.jpg'), alt: "Södra Sverige" }],
      [{ image: require('@/assets/posters/Horndal2024.jpg'), alt: "Horndal" }, { image: require('@/assets/posters/Alkberg2024.jpg'), alt: "Mattias Alberg" }],
      [{ image: require('@/assets/posters/Perpersson2024.jpg'), alt: "Per Persson" }, { image: require('@/assets/posters/Hemvandarkvall.jpg'), alt: "Hämvändarkväll" }],
      [{ image: require('@/assets/posters/Kazzivalazza.jpg'), alt: "Kassi Valazza" }, { image: require('@/assets/posters/SarahKlang.jpg'), alt: "Sarah Klang" }],
      [{ image: require('@/assets/posters/WillStevart.jpg'), alt: "Will Stevart" }, { image: require('@/assets/posters/vilmaflood.jpg'), alt: "Vilma Flood" }],
      [{ image: require('@/assets/posters/EPSTRAILERPARK.jpg'), alt: "Eps Trailerpark" }, { image: require('@/assets/posters/Vannaskasino.jpg'), alt: "Vännäskassino" }],
      [{ image: require('@/assets/posters/deportees2023.jpg'), alt: "Deportees" }, { image: require('@/assets/posters/glesbygdn.jpg'), alt: "Glesbygdn" }],
      [{ image: require('@/assets/posters/Laurenmowrrow.jpg'), alt: "Lauren Morrow" }, { image: require('@/assets/posters/ManskensBonden.jpg'), alt: "Månskensbonden" }],
      [{ image: require('@/assets/posters/LudwigHart.jpg'), alt: "Ludwig Hart" }, { image: require('@/assets/posters/JuniorBrielle.jpg'), alt: "Junior Brielle" }],
      [{ image: require('@/assets/posters/JesperLindell.jpg'), alt: "Jesper Lindell" }, { image: require('@/assets/posters/Karlknutsigurd.jpg'), alt: "Karl Knut Sigurd" }],
      [{ image: require('@/assets/posters/israelnash.jpg'), alt: "Israel Nash" }, { image: require('@/assets/posters/JAkeLaBoltz.jpg'), alt: "Jake La Boltz" }],
      [{ image: require('@/assets/posters/JoshuaRayWalkers.jpg'), alt: "Joshua Ray Walkers" }, { image: require('@/assets/posters/Spiders.jpg'), alt: "The Spiders" }],
      [{ image: require('@/assets/posters/AnnaVonHauswolf.jpg'), alt: "Anna Von Hauswolf" }, { image: require('@/assets/posters/Tallestman.jpg'), alt: "The Tallest Man On Earth" }],
      [{ image: require('@/assets/posters/TeddyErnehed.jpg'), alt: "Teddy" }, { image: require('@/assets/posters/Skraekodlan.jpg'), alt: "Skraekodlan" }],
      [{ image: require('@/assets/posters/TeoLawrence.jpg'), alt: "Teo Lawrence" }, { image: require('@/assets/posters/Vasterbron.jpg'), alt: "Västerbron" }],
      [{ image: require('@/assets/posters/Henning.jpg'), alt: "Henning" }, { image: require('@/assets/posters/MattiasAlkberg.jpg'), alt: "Mattias Alkberg" }],
      [{ image: require('@/assets/posters/Slowgold.jpg'), alt: "Slowgold" }, { image: require('@/assets/posters/CharlesW.jpg'), alt: "Charlie Watson" }],
      [{ image: require('@/assets/posters/Tonbruket.jpg'), alt: "Tonbruket" }, { image: require('@/assets/posters/DavidRitchards.jpg'), alt: "David Ritchards" }],
      [{ image: require('@/assets/posters/BrorGunnar.jpg'), alt: "Bror Gunnar" }, { image: require('@/assets/posters/roseline.jpg'), alt: "Roseline" }],
      [{ image: require('@/assets/posters/VannaInget.jpg'), alt: "Vånna Inget" }, { image: require('@/assets/posters/WhitneyRose.jpg'), alt: "Whitney Rose" }],
      [{ image: require('@/assets/posters/TrummorOrgel.jpg'), alt: "Trummor & Orgel" }, { image: require('@/assets/posters/Treburt.jpg'), alt: "Tré Burt" }],
      [{ image: require('@/assets/posters/Dahmers.jpg'), alt: "The Dahmers" }, { image: require('@/assets/posters/DanielRomanosOutfit.jpg'), alt: "Daniel Romanos Outfit" }],
      [{ image: require('@/assets/posters/PaulStelling.jpg'), alt: "Paul Stelling" }],
      [{ image: require('@/assets/posters/JennyDont.jpg'), alt: "Jenny Dont & The Spurs" }],
      [{ image: require('@/assets/posters/Lalasuperstar2024.jpg'), alt: "Lala Superstar + Lovers Skit" }],
      [{ image: require('@/assets/posters/Ludwighart2024.jpg'), alt: "Ludwig Hart" }],
      [{ image: require('@/assets/posters/Gatuplan.jpg'), alt: "Gatuplan" }],
      [{ image: require('@/assets/posters/Horsebath.jpg'), alt: "Horsebath" }],
      [{ image: require('@/assets/posters/Bywater.jpg'), alt: "By Water" }],
      [{ image: require('@/assets/posters/TarantulaWaltz.jpg'), alt: "The Tarantula Waltz + The Photophonics" }],
      [{ image: require('@/assets/posters/Magadogs.jpg'), alt: "Magadogs" }],
      [{ image: require('@/assets/posters/CalebC.jpg'), alt: "Caleb C" }],
      [{ image: require('@/assets/posters/GrandeRoses.jpg'), alt: "Grande Roses" }],
      [{ image: require('@/assets/posters/KristofferA.jpg'), alt: "Kristoffer Åström" }],
      [{ image: require('@/assets/posters/NationalReserve.jpg'), alt: "National Reserve" }],
      [{ image: require('@/assets/posters/AncientShapes.jpg'), alt: "Ancient Shapes" }],
      [{ image: require('@/assets/posters/Halm.jpg'), alt: "Halm" }],
      [{ image: require('@/assets/posters/Deportees.jpg'), alt: "Deportees" }],
      [{ image: require('@/assets/posters/MiraRayHSelf.jpg'), alt: "Mira Ray + H.Self" }],
      [{ image: require('@/assets/posters/WilliamCrighton.jpg'), alt: "William Crighton" }],
      [{ image: require('@/assets/posters/MotoBoy.jpg'), alt: "Moto Boy" }],
      [{ image: require('@/assets/posters/SvartKatt.jpg'), alt: "Svart Katt" }],
      [{ image: require('@/assets/posters/JerryLeger.jpg'), alt: "Jerry Leger" }],
      [{ image: require('@/assets/posters/AndrewCombs.jpg'), alt: "Andreas Combs" }],
      [{ image: require('@/assets/posters/WillieWattson.jpg'), alt: "Willie Wattson" }],
      [{ image: require('@/assets/posters/MargoClicer.jpg'), alt: "Dawn Landes" }],
      [{ image: require('@/assets/posters/terra.jpg'), alt: "Terra" }],
      [{ image: require('@/assets/posters/Division7.jpg'), alt: "Division 7" }],
      [{ image: require('@/assets/posters/laladushpalats.jpg'), alt: "Dushpalatset" }],
      [{ image: require('@/assets/posters/AvantGardet.jpg'), alt: "Avant Gardet" }],
      [{ image: require('@/assets/posters/ChristianKjellvander.jpg'), alt: "Christian Kjellvander" }],
      [{ image: require('@/assets/posters/LesBigByrds.jpg'), alt: "Ström" }],
      [{ image: require('@/assets/posters/DeepDarkWoods.jpg'), alt: "Deep Dark Woods" }],
      [{ image: require('@/assets/posters/Halm2.jpg'), alt: "Halm" }],
      [{ image: require('@/assets/posters/AnnaugkondaBrattland.jpg'), alt: "Annaugkonda/Brattland" }]
    ]);

    const startCarousel = () => {
      if (!intervalId.value) {
        intervalId.value = setInterval(() => {
          currentIndex.value = (currentIndex.value + 1) % slides.value.length;
        }, 2000);
      }
    };

    const stopCarousel = () => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    };

    onMounted(() => {
      startCarousel();
    });

    onUnmounted(() => {
      stopCarousel();
    });

    return {
      slides,
      currentIndex,
      startCarousel,
      stopCarousel,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  margin: 0 20px 52px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-title {
  font-family: var(--font-main);
  color: var(--primary-color);
  width: 100%;
  text-align: left;
}
.carousel-title h2 {
  margin-bottom: 5px;
}
.carousel {
  width: 100%;
  overflow: hidden;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.image-container {
  flex: 1 0 40%;
}
.image-container.single-image {
  flex: 1 0 96%;
}
.image-container img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

@media (min-width: 700px) {
  .carousel-container {
    margin: 0 45px 62px 45px;
  }
}

@media (min-width: 1000px) {
  .carousel-container {
    max-width: 923px;
    margin: 0 auto 62px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
