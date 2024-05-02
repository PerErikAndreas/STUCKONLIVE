<template>
<div class="main-1">
  <div class="icon-container">
    <a href="https://www.regionjh.se/" role="link" aria-label="Regionen">
      <img class="sponsor-logo" src="../assets/regionen-logo.png" alt="Regionen Logo">
    </a>
  </div>

  <div class="icon-container">
    <a href="https://www.sensus.se/om-sensus/var-organisation/sensus-norrland/" role="link" aria-label="Sensus">
      <img class="sponsor-logo" src="../assets/sensus-logo.png" alt="Sensus Logo">
    </a>
  </div>

  <div class="icon-container">
    <a href="http://www.stuckon.se" role="link" aria-label="Circle Stuckon">
      <img class="sponsor-logo" src="../assets/circle-stuckon-logo.png" alt="Circle Stuckon Logo">
    </a>
  </div>
</div>

</template>

<script>
export default {
  name: "Sponsorbanner",
};
</script>
<style scoped>
.sponsor-logo {
  width: 75px;
}
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
  margin: 72px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #e7492e;
  border-radius: 6px;;
  width: 92%;
  padding: 40px 0px 40px 0px;
}

@media (min-width: 700px) {
  .main-1 {
border-radius: 8px;
width: 90%;
}

.sponsor-logo {
  width: 100px;
}
}

@media (min-width: 900px) {
  .main-1 {
width: 92%;
max-width: 923px;

}
}
</style>
