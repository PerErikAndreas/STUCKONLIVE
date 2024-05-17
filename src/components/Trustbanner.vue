<template>
  <div class="trustbanner-container">
    <div class="icon-container">
      <img class="stuckon-logo" :src="musicNoteIcon" alt="Music Note Icon" aria-label="100+ Spelningar" loading="lazy">
      <div class="icon-container-title">
        100+ <br>EVENTS
      </div>
    </div>
    <div class="icon-container">
      <img class="stuckon-logo" :src="visitorsIcon" alt="Visitors Icon" aria-label="10,000+ Besökare" loading="lazy">
      <div class="icon-container-title">
        10,000+ <br>BESÖKARE
      </div>
    </div>
    <div class="icon-container">
      <img class="stuckon-logo" :src="locationIcon" alt="Location Icon" aria-label="4 Scener" loading="lazy">
      <div class="icon-container-title">
        4 <br>SCENER
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trustbanner",
  data() {
    return {
      musicNoteIcon: require('../assets/musicnote.png'),
      visitorsIcon: require('../assets/visitors-icon.png'),
      locationIcon: require('../assets/location.png'),
    };
  },
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
  margin-bottom: 222px;
}
.icon-container {
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-family: var(--font-main);
  line-height: 18px;
  font-size: 16px;
}

.icons-title {
  margin-top: 10px;
  font-size: 16px;
}
@media (min-width: 700px) {
  .trustbanner-container {
    width: 92%;
    max-width: 923px;
    border-radius: 8px;
  }
  .icons-container {
    font-size: 20px;
  }
}
@media (min-width: 1400px) {
  .trustbanner-container {
    width: 92%;
    max-width: 923px;
    border-radius: 8px;
    margin-bottom: 232px;
  }
  .icons-container {
    font-size: 22px;
  }
}
</style>
