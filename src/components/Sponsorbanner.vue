<template>
  <div class="main-1">
    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="sponsor-logo" src="../assets/regionen-logo.png"
      /></a>
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="sponsor-logo" src="../assets/sensus-logo.png"
      /></a>
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="sponsor-logo" src="../assets/circle-stuckon-logo.png"
      /></a>
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
  width: 150px;
}
.icons-title {
  font-size: 14px;
}
.icon-container {
  flex: 1; /* Each container takes up an equal amount of space */
  flex-direction: column;
  text-align: center; /* Center the content horizontally */
  font-family: futura;
}
.main-1 {
  margin: 82px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #e7492e;
  border-radius: 24px;;
  width: 90%;
  padding: 40px 0px 40px 0px;
}

@media (min-width: 700px) {
  .main-1 {
border-radius: 24px;;
}
.icons-title {
  font-size: 20px;
}
}
</style>
