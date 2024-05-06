<template>
<div class="trustbanner-container">
  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/musicnote.png" alt="Music Note Icon" aria-label="100+ Spelningar">
    <div class="icon-container-title">
      100+ <br>EVENTS
    </div>
  </div>

  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/visitors-icon.png" alt="Visitors Icon" aria-label="10,000+ Besökare">
    <div class="icon-container-title">
      10,000+ <br>BESÖKARE
    </div>
  </div>

  <div class="icon-container">
    <img class="stuckon-logo" src="../assets/location.png" alt="Location Icon" aria-label="4 Scener">
    <div class="icon-container-title">
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
  .trustbanner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: var(--primary-color);
    border-radius: 8px;
    width: 92%;
    padding: 40px 0;
    margin-bottom: 62px;
  }

  .icon-container {
    flex: 1;
    flex-direction: column;
    text-align: center;
    font-family: var(--font-main);
  }
  
  .icons-title {
    font-size: 14px;
  }

  @media (min-width: 700px) {
    .trustbanner-container {
      width: 90%;
      max-width: 923px;
      border-radius: 8px;
    }
    .icons-title {
      font-size: 20px;
    }
  }
</style>

