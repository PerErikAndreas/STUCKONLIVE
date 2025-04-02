<template>
  <div class="sponsorbanner-container">
    <div class="sponsor-rows">
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
        <a href="https://www.lansforsakringar.se/jamtland/privat/" role="link" aria-label="LFJämtland">
          <img class="sponsor-logo" :src="lansforsakringarLogo" alt="Länsförsäkringar Logo" loading="lazy">
        </a>
      </div>
    </div>
    
    <div class="sponsor-rows">
      <div class="icon-container">
        <a href="https://www.jamtkraft.se" role="link" aria-label="Jämtkraft">
          <img class="sponsor-logo" :src="jamtkraftLogo" alt="Jämtkraft Logo" loading="lazy">
        </a>
      </div>
      <div class="icon-container">
        <a href="https://billetto.se/users/stuck-on" role="link" aria-label="Billetto">
          <img class="sponsor-logo" :src="billettoLogo" alt="Billetto Logo" loading="lazy">
        </a>
      </div>
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
      lansforsakringarLogo: require('../assets/lansforsakringar-logo.png'),
      jamtkraftLogo: require('../assets/jamtkraft-logo-white.png'),
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
  flex-direction: row; /* Changed to column for stacking */
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border-radius: 6px;
  width: 92%;
  padding: 40px 0;
}

/* New wrapper for grouping logos into rows */
.sponsor-rows {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping into two rows */
  justify-content: center;
  align-items: center;
  gap: 20px; /* Adds spacing between logos */
  width: 100%;
}

.icon-container {
  flex: 1;
  flex-basis: 30%; /* Ensures proper sizing */
  max-width: 150px;
  text-align: center;
  font-family: var(--font-main);
}

.sponsor-logo {
  width: 75px;
  transition: transform 0.3s ease-in-out;
}

.sponsor-logo:hover {
  transform: scale(1.05);
}

.graphic-quarter {
  position: absolute;
  height: 50%;
  bottom: 0;
  right: -5px;
  border-radius: 100% 0 0 0;
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

@media (max-width: 900px) {
  .sponsor-rows {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .sponsor-rows {
    flex-direction: column; /* Stack in one column for small screens */
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
    right: -5px;
    border-radius: 100% 0 0 0;
  }
}
</style>

