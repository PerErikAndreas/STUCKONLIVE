<template>
  <div class="sponsorbanner-wrapper">
    <div class="sponsorbanner-track">
      <div class="icon-container" v-for="(logo, index) in duplicatedLogos" :key="index">
        <a :href="logo.link" :aria-label="logo.name" role="link">
          <img class="sponsor-logo" :src="logo.src" :alt="logo.name" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsorbanner",
  data() {
    return {
      logos: [
        {
          name: "Regionen",
          link: "https://www.regionjh.se/",
          src: require("../assets/regionen-logo.png"),
        },
        {
          name: "Sensus",
          link: "https://www.sensus.se/om-sensus/var-organisation/sensus-norrland/",
          src: require("../assets/sensus-logo.png"),
        },
        {
          name: "Länsförsäkringar",
          link: "https://www.lansforsakringar.se/jamtland/privat/",
          src: require("../assets/lansforsakringar-logo.png"),
        },
        {
          name: "Jämtkraft",
          link: "https://www.jamtkraft.se",
          src: require("../assets/jamtkraft-logo-white.png"),
        },
        {
          name: "Billetto",
          link: "https://billetto.se/users/stuck-on",
          src: require("../assets/billetto.png"),
        },
      ],
    };
  },
  computed: {
    duplicatedLogos() {
      // Dubblar listan så att loopen blir sömlös
      return [...this.logos, ...this.logos];
    },
  },
};
</script>

<style scoped>
/* YTTRE WRAPPER */
.sponsorbanner-wrapper {
  overflow: hidden;
  width: 92%;
  background: var(--primary-color);
  padding: 70px 0;
  border-radius: 8px;
  position: relative;
  margin-bottom: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* BANDETS KONTAINER */
.sponsorbanner-track {
  display: flex;
  align-items: center;
  gap: 60px; /* Avstånd mellan loggor */
  width: max-content;
  animation: scrollLeft 25s linear infinite;
}

/* INDIVIDUELL LOGG-KONTAINER */
.icon-container {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* LOGGORNA SJÄLVA */
.sponsor-logo {
  height: 25px; /* Samma höjd för alla loggor */
  width: auto;
  object-fit: contain;
  transition: transform 0.3s;
  filter: brightness(0) invert(1); /* valfritt om bakgrund är mörk */
}

/* Hover-effekt */
.sponsor-logo:hover {
  transform: scale(1.1);
}

/* Animation som flyttar loggorna åt vänster */
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pausa när man hovrar över hela bannern */
.sponsorbanner-wrapper:hover .sponsorbanner-track {
  animation-play-state: paused;
}

/* RESPONSIV JUSTERING */
@media (min-width: 700px) {
    .sponsorbanner-wrapper {
          max-width: 923px;


  }
}
@media (max-width: 700px) {
  .sponsor-logo {
  height: 20px; /* Samma höjd för alla loggor */

  }
  .sponsorbanner-track {
    gap: 40px;
    animation-duration: 20s;
  }
}
</style>
