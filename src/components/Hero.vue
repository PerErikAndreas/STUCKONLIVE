<template>
  <div class="hero-container">
    <div class="lottie-container" ref="lottieContainer"></div>
    <div class="title-container">
      <h1>
        Utforska
        <div>din&nbsp;lokala</div>
        musikscen
      </h1>
    </div>
    <div class="paragraph-container">
      <p>
        Fler än 100 genomförda konserter med internationella och lokala akter –
        upplev musiken på nära håll!
      </p>
    </div>
  </div>
  <div class="input-and-ctabutton-container">
    <img :src="waveGraphic" alt="graphic waves" class="wave-graphic-picture" aria-label="graphic section" loading="lazy" />
    <div class="ml-embedded" data-form="X9IuFM"></div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      waveGraphic: require('../assets/wave-graphic-newsletter.png'),
    };
  },
  mounted() {
    this.loadAnimation();
  },
  methods: {
    async loadAnimation() {
      const lottie = await import('lottie-web');
      const animationData = await import('../assets/animation3.json');
      lottie.default.loadAnimation({
        container: this.$refs.lottieContainer,
        animationData: animationData.default,
        renderer: 'svg',
        loop: true,
        autoplay: true
      });
    }
  },
  created() {
    (function(w, d, e, u, f, l, n) {
      w[f] = w[f] || function() {
        (w[f].q = w[f].q || []).push(arguments);
      };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
    ml('account', '912655');
  }
};
</script>

<style scoped>
.wave-graphic-picture {
  display: none;
}
.lottie-container {
  position: absolute;
  top: 67px;
  right: 73%;
  display: inline;
  flex-direction: column;
  border-radius: 50%;
  height: 67px;
  width: 67px;
  overflow: hidden;
}
.lottie-container svg {
  display: none;
  height: 400px;
  object-fit: cover;
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
.paragraph-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.paragraph-container p {
  max-width: 300px;
  color: var(--background-color);
  font-family: var(--font-main);
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}
.hero-container {
  margin: 52px 0px 62px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--background-color);
}
.title-container h1 {
  font-family: var(--font-main);
  font-size: 50px;
  line-height: 42px;
  font-weight: 1000;
  margin-bottom: 24px;
  letter-spacing: -5%;
  text-transform: uppercase;
}
@media (min-width: 700px) {
  .wave-graphic-picture {
    display: inline;
    margin-top: 20px;
    width: 450px;
    height: 106px;
  }
  .contact-container {
    margin: 40px;
  }
  .lottie-container {
    position: absolute;
    top: 80px;
    right: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    overflow: hidden;
  }
  .lottie-container svg {
    display: inline;
    height: 400px;
    object-fit: cover;
  }
  .triangle-graphic {
    display: inline;
  }
  .field-graphic {
    display: inline;
    background: var(--primary-color);
    margin: 20px 0 0 0;
    border-radius: 20px;
    width: 100%;
    height: 110px;
  }
  .paragraph-container p {
    max-width: 100%;
    color: var(--primary-color);
  }
  .hero-container {
    margin: 52px 0px 92px 0px;
    text-align: start;
    width: 89%;
    justify-content: start;
    color: var(--primary-color);
    max-width: 923px;
  }
  .paragraph-container {
    padding: 0px;
    width: 40%;
  }
  .title-container h1 {
    font-size: 40px;
    line-height: 30px;
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
  .title-container h1 {
    font-size: 68px;
    line-height: 55px;
  }
  .paragraph-container p {
    font-size: 18px;
  }
  .input-and-ctabutton-container {
    width: 95%;
    max-width: 923px;
  }
  .hero-container {
    margin: 52px 0px 42px 0px;
  }
}
@media (min-width: 1180px) {
  .title-container h1 {
    font-size: 88px;
    line-height: 75px;
  }
}
@media (min-width: 1400px) {
  .triangle-graphic {
    display: none;
  }
  .title-container h1 {
    margin-top: 0px;
    font-size: 88px;
    line-height: 75px;
  }
  .hero-container {
    padding: 0px 0px 0px 0px;
    display: flex;
    margin: 0px 0px 0px 0px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: var(--background-color);
  }
  .paragraph-container {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
    color: var(--background-color);
    width: 100%;
    padding: 0px;
  }
  .paragraph-container p {
    max-width: 350px;
    color: var(--background-color);
  }
  .contact-container {
    margin: 40px;
  }
  .lottie-container {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(280px);
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    overflow: hidden;
  }
  .lottie-container svg {
    display: inline;
    height: 400px;
    object-fit: cover;
  }
}
</style>
