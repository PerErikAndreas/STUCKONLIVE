<template>
  <div class="Welcometext-container">
    <img class="triangle" src="../assets/triangle.png" />

    <div class="Welcometext">
      UTFORSKA
      <div>DIN&nbsp;LOKALA</div>
      MUSIKSCEN
    </div>
    <div class="paragraph-container">
      Mer än 100 genomförda konserter med internationella och lokala akter –
      upplev musiken på nära håll!
    </div>
    <div class="input-and-ctabutton-container">
      <input class="input" /><button class="cta-button">FÅ NYHETSBREV</button>
    </div>
    <div class="arrow-container">
      <img class="stuckon-logo" src="../assets/down-arrow.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.arrow-container {
  margin: 74px 0 74px 0;
  display: flex; /* Ensures the container is suitable for flex children */
  align-items: center; /* Centers the arrow vertically */
  justify-content: center; /* Centers the arrow horizontally */
  animation: bounce 10s infinite; /* Apply the bounce animation */
  -webkit-animation: bounce 10s infinite; /* For Safari and older Chrome browsers */
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0); /* For Safari and older Chrome browsers */
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

.triangle {
  display: none;
  position: absolute;
  top: 70px; /* Percentage of the container's height */
  right: 80px; /* Percentage of the viewport's width */
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
.input {
  border: 2px solid #e7492e;
  border-radius: 12px;
  height: 44px;
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
}
.Welcometext-container {
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center; /* This centers the content vertically within the container */
  color: #ffffff; /* Text color is white */
  /* If you want the container itself to be centrally aligned within its parent, 
     and if its parent is also a flex container, you might not need additional settings here.
     However, if the container's parent isn't styled with flexbox, consider adding margins: */
  /* Height is necessary if you want to ensure vertical centering within a specific size. */
}

.Welcometext {
  font-family: futura;
  font-size: 48px;
  line-height: 42px;
  font-weight: 900;
  margin-bottom: 62px;
  letter-spacing: -5%;
}

@media (min-width: 700px) {
  .triangle {
    display: inline;
    position: absolute;
    top: 70px; /* Percentage of the container's height */
    right: 80px; /* Percentage of the viewport's width */
    width: 300px;
    height: auto;
  }

  .input {
  max-width: 400px;
}
  .Welcometext-container {
    padding: 100px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 90%;
    justify-content: start; /* This centers the content vertically within the container */
    color: #e7492e; /* Text color is white */
    /* If you want the container itself to be centrally aligned within its parent, 
     and if its parent is also a flex container, you might not need additional settings here.
     However, if the container's parent isn't styled with flexbox, consider adding margins: */
    /* Height is necessary if you want to ensure vertical centering within a specific size. */
  }
  .paragraph-container {
    display: flex;
    margin-bottom: 100px;
    padding: 0px;
    width: 50%;
  }
  .Welcometext {
    font-family: futura;
    font-size: 38px;
    line-height: 42px;
    font-weight: 900;
    margin-bottom: 62px;
    letter-spacing: -5%;
  }

  .input {
    border: 2px solid #e7492e;
    border-radius: 12px;
    height: 44px;
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
  .Welcometext {
  font-family: futura;
  font-size: 68px;
  line-height: 62px;
  font-weight: 900;
  margin-bottom: 62px;
  letter-spacing: -5%;
}
}
</style>
