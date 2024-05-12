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
      upplev musiken på nära håll! </p>
  </div>
</div>
<!-- <p>Få reda på det senaste och bli inbjuden till exklusiva spelningar. Följ oss via vårt nyhetsbrev!
    </p> -->
<div class="input-and-ctabutton-container">
  <div class="ml-embedded" data-form="X9IuFM"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../assets/animation3.json';

export default {
  name: "Hero",
  mounted() {
    this.loadAnimation();
  },
  methods: {
    loadAnimation() {
      lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        animationData: animationData,
        renderer: 'svg',
        loop: true,
        autoplay: true
      });
    }
  }
};
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '912655');
</script>

<style scoped>
.calendar-container-title {
  display: flex;
  width: 100%;
  justify-content: start;
  color: var(--primary-color);
  font-family: var(--font-main);
  margin-bottom: 5px;
}
.lottie-container {
    position: absolute;
  top: 0px; /* Position from the top edge of the parent */
  right: 0px; /* Position from the right edge of the parent */
    display: none;
    flex-direction: column;
    border-radius: 50%;
  height: 100px;
  width: 100px;
  overflow: hidden; /* Add overflow: hidden to crop any overflow */
}



/* Make the SVG inside cover the entire space */
.lottie-container svg {
  display: none;
  height: 400px;
  object-fit: cover; /* Add object-fit: cover to cover the container without distorting aspect ratio */
}
  .ml-embedded {
    width: 100%;
  }

  .ml-form-align-center {
    width: 100%;
  }

.triangle-graphic {
  display: none;
  position: absolute;
  top: 70px;
  right: 80px;
  width: 300px;
  height: auto;
}

.input-and-ctabutton-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 62px;
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
.field-graphic {
  display: none;
}

.hero-container {
  margin: 52px 0px 100px 0px;
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
  .contact-container {

  margin: 40px;

}

  .lottie-container {
    position: absolute;
  top: 80px; /* Position from the top edge of the parent */
  right: 50px; /* Position from the right edge of the parent */
    display: flex;
    flex-direction: column;
    border-radius: 50%;
  height: 350px;
  width: 350px;
  overflow: hidden; /* Add overflow: hidden to crop any overflow */
}



/* Make the SVG inside cover the entire space */
.lottie-container svg {
  display: inline;
  height: 400px;
  object-fit: cover; /* Add object-fit: cover to cover the container without distorting aspect ratio */
}
}

@media (min-width: 700px) {
  .triangle-graphic {
    display: inline;
  }

  .field-graphic {
  display: inline;
  background: var(--primary-color);;
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
    margin: 52px 0px 30px 0px;
    text-align: start;
    width: 89%;
    justify-content: start;
    color: var(--primary-color);;
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
  width: 95%;
  justify-content: start;
  align-items: start;
  flex-direction: column;
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
    width: 100%;
    margin-left: -20px;
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
  top: 80px; /* Position from the top edge of the parent */
  left: 50%; /* Start from the middle of the parent */
  transform: translateX(280px); /* Move right by 50px from the center */
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 350px;
  width: 350px;
  overflow: hidden; /* Add overflow: hidden to crop any overflow */
}



/* Make the SVG inside cover the entire space */
.lottie-container svg {
display: inline;
height: 400px;
object-fit: cover; /* Add object-fit: cover to cover the container without distorting aspect ratio */
}
}
</style>
