<template>
  <div class="sponsorbanner-container">
    <div class="icon-container">
      <a href="https://www.regionjh.se/" role="link" aria-label="Regionen">
        <img class="sponsor-logo" :src="regionenLogo" alt="Regionen Logo" loading="lazy">
      </a>
    </div>
    <div class="icon-container">
      <a href="https://www.sensus.se/om-sensus/var-organisation/sensus-norrland/" role="link" aria-label="Sensus">
        <img class="sponsor-logo" :src="sensusLogo" alt="Sensus Logo" loading="lazy">
      </a>
    </div>
    <div class="icon-container">
      <a href="https://billetto.se/users/stuck-on" role="link" aria-label="Billetto">
        <img class="sponsor-logo" :src="billettoLogo" alt="Billetto Logo" loading="lazy">
      </a>
    </div>
    <img class="graphic-quarter" src="../assets/animationquarter.png" alt="Loading animation" />
  </div>
</template>

<script>
export default {
  name: "Sponsorbanner",
  data() {
    return {
      regionenLogo: require('../assets/regionen-logo.png'),
      sensusLogo: require('../assets/sensus-logo.png'),
      billettoLogo: require('../assets/billetto.png'),
    };
  },
};
</script>

<style scoped>
.sponsorbanner-container {
  margin: 0 0 32px 0;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: var(--primary-color);
  border-radius: 6px;
  width: 92%;
  padding: 40px 0;
}
.icon-container {
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-family: var(--font-main);
}
.sponsor-logo {
  width: 75px;
}
.graphic-quarter {
  position: absolute;
height: 50%;  
bottom: 0;
  right:-5px;
  border-radius: 100% 0 0 0;
}
.sponsor-logo:hover {
  transform: scale(1.05);
}
.icons-title {
  font-size: 14px;
}
@media (min-width: 700px) {
  .sponsorbanner-container {
    margin: 0 0 42px 0;
    border-radius: 8px;
    width: 90%;
  }
  .sponsor-logo {
    width: 100px;
  }
}
@media (min-width: 900px) {
  .sponsorbanner-container {
    width: 92%;
    max-width: 923px;
  }
  .graphic-quarter {
  position: absolute;
height: 65%;  
bottom: 0;
  right:-5px;
  border-radius: 100% 0 0 0;
}
}
</style>
