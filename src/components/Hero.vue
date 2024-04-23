<template>
  <div class="hero-container">
    <img class="triangle-graphic" src="../assets/triangle-graphic.png" />
    <div class="title-container">
      <h1>
        Utforska
        <div>din&nbsp;lokala</div>
        musikscen
      </h1>
    </div>
    <div class="paragraph-container">
      <p>
        Mer än 100 genomförda konserter med internationella och lokala akter –
        upplev musiken på nära håll!
      </p>
    </div>
    <div class="input-and-ctabutton-container">
      <div class="ml-embedded" data-form="X9IuFM"></div>
      <div class="field-graphic"></div>
    </div>
    <div class="arrow-container">
      <img src="../assets/arrow-graphic.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '912655');
</script>

<style scoped>
  .ml-embedded {
    width: 100%;
  }

  .ml-form-align-center {
    width: 100%;
  }

.arrow-container {
  margin: 74px 0 74px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 10s infinite;
  -webkit-animation: bounce 10s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
  }
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
  gap: 10px;
  flex-direction: column;
}
.paragraph-container {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  padding: 0 20px 0 20px;
}

.paragraph-container p {
  max-width: 300px;
}
.field-graphic {
  display: none;
}

.hero-container {
  padding: 52px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #ffffff;
}

.title-container h1 {
  font-family: futura;
  font-size: 48px;
  line-height: 42px;
  font-weight: 900;
  margin-bottom: 44px;
  letter-spacing: -5%;
  text-transform: uppercase;
}

@media (min-width: 700px) {
  .triangle-graphic {
    display: inline;
  }

  .field-graphic {
  display: inline;
  background: #FAFAFA;
  margin: 20px 0 0 0;
  border-radius: 20px;
  width: 100%;
  height: 110px;
}

  .paragraph-container p {
  max-width: 100%;
  }

  .hero-container {
    padding: 100px 0px 0px 0px;
    text-align: start;
    width: 90%;
    justify-content: start;
    color: #e7492e;
  }

  .paragraph-container {
    margin-bottom: 42px;
    padding: 0px;
    width: 50%;
  }

  .title-container h1 {
    font-size: 38px;
    line-height: 42px;
  }

  .ml-embedded {
    width: 40vw;
    display: flex;
    flex-direction: row;
  }

  .input-and-ctabutton-container {
    display: flex;
    gap: 10px;
    flex-direction: row;
    margin-left: -20px;
  }
  .arrow-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media (min-width: 1020px) {
  .title-container h1 {
    font-size: 68px;
    line-height: 62px;
  }
  .hero-container {
  padding: 32px 0px 0px 0px;
}
}

@media (min-width: 1180px) {
  .title-container h1 {
    font-size: 88px;
    line-height: 82px;
  }
}

@media (min-width: 1400px) {
  .triangle-graphic {
    display: none;
  }

  .title-container h1 {
    margin-top: 20px;
    font-size: 88px;
    line-height: 82px;
  }

  .hero-container {
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #ffffff;
}
  .paragraph-container {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  color: white;
  width: 100%;
  padding: 0px 20px 0 20px;
}
.paragraph-container p {
  max-width: 300px;
}
}
</style>
