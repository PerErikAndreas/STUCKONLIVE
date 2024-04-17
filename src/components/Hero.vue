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
      <!-- <input class="input" />
      <button class="cta-button">Få nyhetsbrev</button> -->
      <div class="ml-embedded" data-form="X9IuFM"></div>

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
.arrow-container {
  margin: 94px 0 74px 0;
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
  margin-bottom: 200px;
  padding: 0 20px 0 20px;
}

.cta-button {
  border: 2px solid #e7492e;
  border-radius: 12px;
  height: 50px;
  color: #ffffff;
  background: #e7492e;
  font-size: 16px;
  padding: 0 30px 0 30px;
  font-family: futura;
  text-transform: uppercase;
}

.hero-container {
  padding: 100px 20px 20px 20px;
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
  margin-bottom: 62px;
  letter-spacing: -5%;
  text-transform: uppercase;
}

@media (min-width: 700px) {
  .triangle-graphic {
    display: inline;
  }

  .hero-container {
    padding: 100px 0px 0px 0px;
    text-align: start;
    width: 90%;
    justify-content: start;
    color: #e7492e;
  }

  .paragraph-container {
    margin-bottom: 100px;
    padding: 0px;
    width: 50%;
  }

  .title-container h1 {
    font-size: 38px;
    line-height: 42px;
  }

  .ml-embedded {
    width: 40vw;
  }

  .input-and-ctabutton-container {
    display: flex;
    gap: 10px;
    flex-direction: row;
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
}
</style>
