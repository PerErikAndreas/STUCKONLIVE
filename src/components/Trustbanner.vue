<template>
  <div class="trustbanner-container">
    <div class="icon-container">
      <img class="stuckon-logo" :src="musicNoteIcon" alt="Music Note Icon" aria-label="100+ Spelningar" loading="lazy">
      <div class="icon-container-title">
        <count-up :end-val="100"><template v-slot:suffix>+</template>
        </count-up>
        EVENTS
      </div>
    </div>
    <div class="icon-container">
      <img class="stuckon-logo" :src="visitorsIcon" alt="Visitors Icon" aria-label="10,000+ Besökare" loading="lazy">
      <div class="icon-container-title">
        <count-up :end-val="10000"><template v-slot:suffix>+</template>
        </count-up>
        BESÖKARE
      </div>
    </div>
    <div class="icon-container">
      <img class="stuckon-logo" :src="locationIcon" alt="Location Icon" aria-label="4 Scener" loading="lazy">
      <div class="icon-container-title">
        <count-up :end-val="4"></count-up>
        SCENER
      </div>
    </div>
    <img class="graphic-quarter2" src="../assets/animationquarter.png" alt="Loading animation" />
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3'

export default {
  name: "Trustbanner",
  components: {
    CountUp,
  },
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
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: var(--primary-color);
  border-radius: 8px;
  width: 92%;
  padding: 40px 0;
  margin-bottom: 52px;
}

.graphic-quarter2 {
  position: absolute;
height: 35%;  
bottom: 0;
  left:-5px;
  border-radius: 0 100% 0 0;
}

.icon-container {
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-family: var(--font-main);
  line-height: 18px;
  font-size: 16px;
}

.icon-container-title {
  margin-top: 5px;
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

  .icon-container-title {
  margin-top: 10px;
}

  .graphic-quarter2 {
height: 65%;  

}
}
@media (min-width: 1400px) {
  .trustbanner-container {
    width: 92%;
    max-width: 923px;
    border-radius: 8px;
    margin-bottom: 52px;
  }
  .icons-container {
    font-size: 22px;
  }
}
</style>
