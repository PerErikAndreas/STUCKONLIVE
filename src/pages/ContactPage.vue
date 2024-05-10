<template>
  <div class="contact-container">
    <div class="content">
      <h2>Prata <br>med&nbsp;oss!</h2>
    <p class="question-paragraph">
      Är du en artist ute på vägarna? <br>Har du frågor om föreningen? <br>Vill du bara berätta hur bra<br> en spelning var?
    </p>
    <button @click="sendEmail">Kontakta Stuck On</button>
    </div>
    <div class="lottie-container" ref="lottieContainer"></div>
    <Info />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Info from '../components/Info.vue';
import lottie from 'lottie-web';
import animationData from '../assets/animation3.json';


export default {
  name: "Contact",
  components: {
    Footer,
    Info
  },
  mounted() {
    this.loadAnimation();
  },
  methods: {
    sendEmail() {
      window.location.href = "mailto:morgan.hall@sensus.se";
    },    
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
</script>

<style scoped>

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

.content {
  margin: 40px 0 62px 0;
  display: flex;
  max-width: 923px;
  flex-direction: column;
  align-items: center;
}
.contact-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 20px 20px 20px;
  height: 100%;
}

.question-paragraph {
  color: #FFFFFF;
  max-width: 300px;
  margin-bottom: 50px;
  line-height: 18px;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--font-main);
}

h2 {
  color: #FFFFFF;
  font-family: var(--font-main);
  font-size: 50px;
  line-height: 42px;
  font-weight: 1000;
  margin-bottom: 24px;
  letter-spacing: -5%;
  text-transform: uppercase;
  margin-top: 0px;

}

button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #ffffff;
  color: var(--primary-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgb(170, 4, 4); /* Darker blue on hover */
  color: #ffffff;

}


@media (min-width: 700px) {
  .contact-container {

  margin: 40px;

}

  .lottie-container {
    position: absolute;
  top: 0px; /* Position from the top edge of the parent */
  right: 0px; /* Position from the right edge of the parent */
    display: flex;
    flex-direction: column;
    border-radius: 50%;
  height: 400px;
  width: 400px;
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

.content {
  margin: 40px 0 62px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: start;
}

h2 {
  color: var(--primary-color);
  font-family: var(--font-main);
  font-size: 50px;
  line-height: 42px;
  margin-top: 20px;
}

button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #FFFFFF;
  color: var(--primary-color);
  border: solid 3px var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgb(170, 4, 4); /* Darker blue on hover */
  color: #ffffff;

}

.question-paragraph {
  color: var(--primary-color);
  max-width: 300px;
  margin-bottom: 50px;
}
}
@media (min-width: 1180px) {
  h2 {
  color: var(--primary-color);
  font-family: var(--font-main);
  font-size: 80px;
  line-height: 72px;
}
  }

  @media (min-width: 1400px) {
  h2 {
  color: #ffffff;
  font-family: var(--font-main);
  font-size: 80px;
  line-height: 72px;
  margin-top: 0;
}
.content {
  margin: 0 0 62px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.question-paragraph {
  color: #ffffff;
  max-width: 300px;
  margin-bottom: 50px;
}

button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #ffffff;
  color: var(--primary-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgb(170, 4, 4); /* Darker blue on hover */
  color: #ffffff;

}
.lottie-container {
    position: absolute;
  top: 0px; /* Position from the top edge of the parent */
  right: 100px; /* Position from the right edge of the parent */

}
  }
</style>