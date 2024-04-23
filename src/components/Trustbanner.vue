<template>
  <div class="main-1">
    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/musicnote.png"
      /></a><div class="icons-title">
      120 <br>SPELNINGAR
    </div>
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/people.png"
      /></a><div class="icons-title">

      3000 <br>BESÖKARE
    </div>
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/location.png"
      /></a><div class="icons-title">

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
  display: flex;
  flex-direction: column;
  font-family: futura;
}
.main-1 {
  margin: 62px 0px 410px 0px;
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
