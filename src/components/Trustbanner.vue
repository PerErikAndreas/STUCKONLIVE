<template>
  <div class="main-1">
    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/musicnote.png"
      /></a>
      120 SPELNINGAR
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/musicnote.png"
      /></a>

      3000 BESÖKARE
    </div>

    <div class="icon-container">
      <a href="/" class="my-logo"
        ><img class="stuckon-logo" src="../assets/musicnote.png"
      /></a>

      4 SCENER
    </div>
  </div>
</template>

<script>
export default {
  name: "Trustbanner",
};
</script>
<style scoped>
.icon-container {
  display: flex;
  flex-direction: column;
  font-family: futura;
}
.main-1 {
  margin-top: 62px;
  margin-bottom: 410px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #e7492e;
  width: 100%;
  padding: 40px 0px 40px 0px;
}
</style>
