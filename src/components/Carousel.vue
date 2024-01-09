<template>
  <div class="carousel-container">
  <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
<slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/CalebC.jpg" class="posters" alt="Caleb Caud">
    <img src="https://assets.codepen.io/8685843/GrandeRoses.jpg" class="posters" alt="Grande Roses">
    </div>
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/KristofferA.jpg" class="posters" alt="Kristoffer Åström">
    <img src="https://assets.codepen.io/8685843/NationalReserve.jpg" class="posters" alt="National Reserve">
    </div>
  </div>
</slide>
<slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/AncientShapes.jpg" class="posters" alt="Ancient Shapes">
    <img src="https://assets.codepen.io/8685843/Halm.jpg" class="posters" alt="Halm">
    </div>
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/WilliamCrighton.jpg" class="posters" alt="William Crighton">
    <img src="https://assets.codepen.io/8685843/MotoBoy.jpg" class="posters" alt="Moto Boy">
    </div>
  </div>
</slide>
<slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/SvartKatt.jpg" class="posters" alt="Svart Katt">
    <img src="https://assets.codepen.io/8685843/JerryLeger.jpg" class="posters" alt="Jerry Leger">
    </div>
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/AndrewCombs.jpg" class="posters" alt="Andreas Combs">
    <img src="https://assets.codepen.io/8685843/WillieWattson.jpg" class="posters" alt="Willie Wattson">
    </div>
  </div>
</slide>
<slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/DawnLandes.jpg" class="posters" alt="Dawn Landes">
    <img src="https://assets.codepen.io/8685843/Skraekodlan.jpg" class="posters" alt="Skraekodlan">
    </div>
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/AvantGardet.jpg" class="posters" alt="Avant Gardet">
    <img src="https://assets.codepen.io/8685843/ChristianKjellvander.jpeg" class="posters" alt="Christian Kjellvander">
    </div>
  </div>
</slide>
<slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/Strom.jpeg" class="posters" alt="Ström">
      <img src="https://assets.codepen.io/8685843/MargoClicer.jpeg" class="posters" alt="Margo Clicer">
    </div>
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/DeepDarkWoods.jpeg" class="posters" alt="Deep Dark Woods">
    <img src="https://assets.codepen.io/8685843/AnnaugkondaBrattland.jpeg" class="posters" alt="Annaugkonda/Brattland">
    </div>
  </div>
</slide>
<!-- <slide>
  <div class="four-four">
    <div class="two-two">
      <img src="https://assets.codepen.io/8685843/LesBigByrds.jpg" class="posters" alt="Les Big">
      <img src="https://assets.codepen.io/8685843/Deportees.jpg" class="posters" alt="Deportees">
    </div>
    <div class="two-two">

    </div>
  </div>
</slide> -->
</carousel>
</div>
</template>

<script>
export default {
  name: "Carosel"
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

  .posters {
      max-width: 100%;
      max-height: 100vh;
    }

  .carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
  }
</style>



