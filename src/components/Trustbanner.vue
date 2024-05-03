<template>
<div class="main-1">
  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/musicnote.png" alt="Music Note Icon" aria-label="100+ Spelningar">
    <div class="icons-title">
      100+ <br>EVENTS
    </div>
  </div>

  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/visitors-icon.png" alt="Visitors Icon" aria-label="10,000+ Besökare">
    <div class="icons-title">
      10,000+ <br>BESÖKARE
    </div>
  </div>

  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/location.png" alt="Location Icon" aria-label="4 Scener">
    <div class="icons-title">
      4 <br>SCENER
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Trustbanner",
};
</script>
<style scoped>
.icons-title {
  font-size: 14px;
}
.icon-container {
  flex: 1; /* Each container takes up an equal amount of space */
  flex-direction: column;
  text-align: center; /* Center the content horizontally */
  font-family: "Sora", sans-serif;
}
.main-1 {
  margin: 62px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #e7492e;
  border-radius: 8px;;
  width: 92%;
  padding: 40px 0px 40px 0px;
}

@media (min-width: 700px) {
  .main-1 {
    margin: 62px 0px 0px 0px;
    width: 90%;
    max-width: 923px;

border-radius: 8px;
}
.icons-title {
  font-size: 20px;
}
}
</style>
