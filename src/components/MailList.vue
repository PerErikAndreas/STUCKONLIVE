<template>
  <div class="input-and-ctabutton-container">
    <img 
      :src="waveGraphic" 
      alt="graphic waves" 
      class="wave-graphic-picture" 
      aria-label="graphic section" 
      loading="lazy" 
    />
    <div class="ml-embedded" data-form="X9IuFM"></div>
  </div>
</template>

<script>
export default {
  name: "MailerLiteForm",
  data() {
    return {
      waveGraphic: require("../assets/wave-graphic-newsletter.png"),
    };
  },
  mounted() {
    this.loadMailerLiteScript();
  },
  methods: {
    loadMailerLiteScript() {
      if (!window.ml) {
        (function(w, d, e, u, f, l, n) {
          w[f] = w[f] || function() {
            (w[f].q = w[f].q || []).push(arguments);
          };
          l = d.createElement(e);
          l.async = 1;
          l.src = u;
          n = d.getElementsByTagName(e)[0];
          n.parentNode.insertBefore(l, n);
        })(window, document, "script", "https://assets.mailerlite.com/js/universal.js", "ml");

        ml("account", "912655");
      }
    },
  },
};
</script>

<style scoped>
.wave-graphic-picture {
  display: none;
}

.ml-embedded {
  width: 100%;
}

.ml-form-align-center {
  width: 100%;
}

.input-and-ctabutton-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
}

@media (min-width: 700px) {
  .wave-graphic-picture {
    display: inline;
    margin-top: 20px;
    width: 450px;
    height: 106px;
  }
  .ml-embedded {
    max-width: 50vw;
    display: flex;
    flex-direction: row;
  }
  .input-and-ctabutton-container {
    display: flex;
    width: 90%;
    justify-content: start;
    align-items: start;
    flex-direction: row;
    margin-bottom: 62px;
  }
}

@media (min-width: 920px) {
  .input-and-ctabutton-container {
    width: 95%;
    max-width: 923px;
  }
}
</style>
