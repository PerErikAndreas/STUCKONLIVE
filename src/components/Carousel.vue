<template>
  <div class="carousel-container">
    <div class="carousel-title">
      <h2>TIDIGARE EVENTS</h2>
    </div>
    <div class="carousel">
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
import { ref, onMounted } from 'vue';
import JoelAlmeImage from "@/assets/posters/JoelAlme.jpg";
import SodraSverigeImage from "@/assets/posters/Sodrasverige.jpg";
import KassiValazzaImage from "@/assets/posters/Kazzivalazza.jpg";
import SarahKlangImage from "@/assets/posters/SarahKlang.jpg";
import JoshuaRayWalkersImage from "@/assets/posters/JoshuaRayWalkers.jpg";
import TheSpidersImage from "@/assets/posters/Spiders.jpg";
import AnnaVonHauswolfImage from "@/assets/posters/AnnaVonHauswolf.jpg";
import TallestManImage from "@/assets/posters/Tallestman.jpg";
import TeoLawrenceImage from "@/assets/posters/TeoLawrence.jpg";
import VasterbronImage from "@/assets/posters/Vasterbron.jpg";
import HenningImage from "@/assets/posters/Henning.jpg";
import MattiasAlkbergImage from "@/assets/posters/MattiasAlkberg.jpg";
import SlowgoldImage from "@/assets/posters/Slowgold.jpg";
import CharlesWImage from "@/assets/posters/CharlesW.jpg";
import TonbruketImage from "@/assets/posters/Tonbruket.jpg";
import DavidRitchardsImage from "@/assets/posters/DavidRitchards.jpg";
import VannaIngetImage from "@/assets/posters/VannaInget.jpg";
import WhitneyRoseImage from "@/assets/posters/WhitneyRose.jpg";
import TrummorOrgelImage from "@/assets/posters/TrummorOrgel.jpg";
import TreburtImage from "@/assets/posters/Treburt.jpg";
import TheDahmersImage from "@/assets/posters/Dahmers.jpg";
import DanielRomanosOutfitImage from "@/assets/posters/DanielRomanosOutfit.jpg";
import AnnaugkondaBrattlandImage from "@/assets/posters/AnnaugkondaBrattland.jpg";
import CalebCImage from "@/assets/posters/CalebC.jpg";
import GrandeRosesImage from "@/assets/posters/GrandeRoses.jpg";
import KristofferAImage from "@/assets/posters/KristofferA.jpg";
import NationalReserveImage from "@/assets/posters/NationalReserve.jpg";
import AncientShapesImage from "@/assets/posters/AncientShapes.jpg";
import HalmImage from "@/assets/posters/Halm.jpg";
import Halm2Image from "@/assets/posters/Halm2.jpg";
import WilliamCrightonImage from "@/assets/posters/WilliamCrighton.jpg";
import MotoBoyImage from "@/assets/posters/MotoBoy.jpg";
import SvartKattImage from "@/assets/posters/SvartKatt.jpg";
import JerryLegerImage from "@/assets/posters/JerryLeger.jpg";
import AndrewCombsImage from "@/assets/posters/AndrewCombs.jpg";
import WillieWattsonImage from "@/assets/posters/WillieWattson.jpg";
import MargoClicerImage from "@/assets/posters/MargoClicer.jpg";
import SkraekodlanImage from "@/assets/posters/Skraekodlan.jpg";
import AvantGardetImage from "@/assets/posters/AvantGardet.jpg";
import ChristianKjellvanderImage from "@/assets/posters/ChristianKjellvander.jpg";
import LesBigByrdsImage from "@/assets/posters/LesBigByrds.jpg";
import DeepDarkWoodsImage from "@/assets/posters/DeepDarkWoods.jpg";
import ByWaterImage from "@/assets/posters/Bywater.jpg";
import MagadogsImage from "@/assets/posters/Magadogs.jpg";
import JesperLindellImage from "@/assets/posters/JesperLindell.jpg";
import KarlKnutSigurdImage from "@/assets/posters/Karlknutsigurd.jpg";
import LaurenmowrrowImage from "@/assets/posters/Laurenmowrrow.jpg";
import ManskensbondenImage from "@/assets/posters/ManskensBonden.jpg";
import EpsTrailerParkImage from "@/assets/posters/EPSTRAILERPARK.jpg";
import VannaskassinoImage from "@/assets/posters/Vannaskassino.jpg";
import WillStevartImage from "@/assets/posters/WillStevart.jpg";
import VilmaFloodImage from "@/assets/posters/vilmaflood.jpg";
import BrorGunnarImage from "@/assets/posters/BrorGunnar.jpg";
import RoselineImage from "@/assets/posters/roseline.jpg";
import TerraImage from "@/assets/posters/terra.jpg";
import LudwigHartImage from "@/assets/posters/LudwigHart.jpg";
import JuniorBrielleImage from "@/assets/posters/JuniorBrielle.jpg";
import Deportees2023Image from "@/assets/posters/deportees2023.jpg";
import DeporteesImage from "@/assets/posters/Deportees.jpg";
import GlesbygdnImage from "@/assets/posters/glesbygdn.jpg";
import IsraelNashImage from "@/assets/posters/israelnash.jpg";
import JakeLaBoltzImage from "@/assets/posters/JAkeLaBoltz.jpg";
import LaLaDushpalatsetImage from "@/assets/posters/laladushpalats.jpg";
import TeddyImage from "@/assets/posters/TeddyErnehed.jpg";
// ... other imports

export default {
  setup() {
    const currentIndex = ref(0);
    const slides = ref([
      [{ image: JoelAlmeImage, alt: "Joel Alme" }, { image: SodraSverigeImage, alt: "Södra Sverige" }],
      [{ image: KassiValazzaImage, alt: "Kassi Valazza" }, { image: SarahKlangImage, alt: "Sarah Klang" }],
      [{ image: WillStevartImage, alt: "Will Stevart" }, { image: VilmaFloodImage, alt: "Vilma Flood" }],
      [{ image: EpsTrailerParkImage, alt: "Eps Trailerpark" }, { image: VannaskassinoImage, alt: "Vännäskassino" }],
      [{ image: Deportees2023Image, alt: "Deportees" }, { image: GlesbygdnImage, alt: "Glesbygdn" }],
      [{ image: LaurenmowrrowImage, alt: "Lauren Morrow" }, { image: ManskensbondenImage, alt: "Månskensbonden" }],
      [{ image: LudwigHartImage, alt: "Ludwig Hart" }, { image: JuniorBrielleImage, alt: "Junior Brielle" }],
      [{ image: JesperLindellImage, alt: "Jesper Lindell" }, { image: KarlKnutSigurdImage, alt: "Karl Knut Sigurd" }],
      [{ image: JoelAlmeImage, alt: "Joel Alme" }, { image: SodraSverigeImage, alt: "Södra Sverige" }],
      [{ image: KassiValazzaImage, alt: "Kassi Valazza" }, { image: SarahKlangImage, alt: "Sarah Klang" }],
      [{ image: IsraelNashImage, alt: "Israel Nash" }, { image: JakeLaBoltzImage, alt: "Jake La Boltz" }],
      [{ image: JoshuaRayWalkersImage, alt: "Joshua Ray Walkers" }, { image: TheSpidersImage, alt: "The Spiders" }],
      [{ image: AnnaVonHauswolfImage, alt: "Anna Von Hauswolf" }, { image: TallestManImage, alt: "The Tallest Man On Earth" }],
      [{ image: TeddyImage, alt: "Teddy" }, { image: SkraekodlanImage, alt: "Skraekodlan" }],
      [{ image: TeoLawrenceImage, alt: "Teo Lawrence" }, { image: VasterbronImage, alt: "Västerbron" }],
      [{ image: HenningImage, alt: "Henning" }, { image: MattiasAlkbergImage, alt: "Mattias Alkberg" }],
      [{ image: SlowgoldImage, alt: "Slowgold" }, { image: CharlesWImage, alt: "Charlie Watson" }],
      [{ image: TonbruketImage, alt: "Tonbruket" }, { image: DavidRitchardsImage, alt: "David Ritchards" }],
      [{ image: BrorGunnarImage, alt: "Bror Gunnar" }, { image: RoselineImage, alt: "Roseline" }],
      [{ image: VannaIngetImage, alt: "Vånna Inget" }, { image: WhitneyRoseImage, alt: "Whitney Rose" }],
      [{ image: TrummorOrgelImage, alt: "Trummor & Orgel" }, { image: TreburtImage, alt: "Tré Burt" }],
      [{ image: TheDahmersImage, alt: "The Dahmers" }, { image: DanielRomanosOutfitImage, alt: "Daniel Romanos Outfit" }],
      [{ image: ByWaterImage, alt: "By Water" }],
      [{ image: MagadogsImage, alt: "Magadogs" }],
      [{ image: CalebCImage, alt: "Caleb C" }],
      [{ image: GrandeRosesImage, alt: "Grande Roses" }],
      [{ image: KristofferAImage, alt: "Kristoffer Åström" }],
      [{ image: NationalReserveImage, alt: "National Reserve" }],
      [{ image: AncientShapesImage, alt: "Ancient Shapes" }],
      [{ image: HalmImage, alt: "Halm" }],
      [{ image: DeporteesImage, alt: "Deportees" }],
      [{ image: WilliamCrightonImage, alt: "William Crighton" }],
      [{ image: MotoBoyImage, alt: "Moto Boy" }],
      [{ image: SvartKattImage, alt: "Svart Katt" }],
      [{ image: JerryLegerImage, alt: "Jerry Leger" }],
      [{ image: AndrewCombsImage, alt: "Andreas Combs" }],
      [{ image: WillieWattsonImage, alt: "Willie Wattson" }],
      [{ image: MargoClicerImage, alt: "Dawn Landes" }],
      [{ image: TerraImage, alt: "Terra" }],
      [{ image: LaLaDushpalatsetImage, alt: "Dushpalatset" }],
      [{ image: AvantGardetImage, alt: "Avant Gardet" }],
      [{ image: ChristianKjellvanderImage, alt: "Christian Kjellvander" }],
      [{ image: LesBigByrdsImage, alt: "Ström" }],
      [{ image: DeepDarkWoodsImage, alt: "Deep Dark Woods" }],
      [{ image: Halm2Image, alt: "Halm" }],
      [{ image: AnnaugkondaBrattlandImage, alt: "Annaugkonda/Brattland" }]
    ]);

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length;
      }, 2000);
    });

    return { slides, currentIndex };
  },
};
</script>

<style scoped>
.carousel-container {
  margin: 0 30px 62px 30px;
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
    margin: 0 40px 62px 40px;
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
