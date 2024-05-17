<template>
  <div class="contact-container">
    <div class="content">
      <h2>Prata <br>med&nbsp;oss!</h2>
      <p class="question-paragraph">
        Är du en artist ute på vägarna? <br>Har du frågor om föreningen? <br>Vill du bara berätta hur bra<br> en spelning var?
      </p>
      <button @click="sendEmail">Kontakta Stuck On</button>
    </div>
    <div class="lottie-container">
      <img src="../assets/animation.png" alt="Loading animation" />
    </div>
    <Info />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Info from '../components/Info.vue';

export default {
  name: "Contact",
  components: {
    Footer,
    Info
  },
  methods: {
    sendEmail() {
      window.location.href = "mailto:morgan.hall@sensus.se";
    }
  }
};
</script>

<style scoped>
.lottie-container {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  flex-direction: column;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  overflow: hidden;
}
.content {
  margin: 40px 0 62px;
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
  margin: 0 20px 20px;
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
  margin-top: 0;
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
  background-color: rgb(170, 4, 4);
  color: #ffffff;
}
@media (min-width: 700px) {
  .contact-container {
    margin: 40px;
  }
  .lottie-container {
    display: flex;
    height: 400px;
    width: 400px;
  }
  .content {
    margin: 40px 0 62px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: start;
  }
  h2 {
    color: var(--primary-color);
    font-size: 50px;
    line-height: 42px;
    margin-top: 20px;
  }
  button {
    background-color: #FFFFFF;
    border: solid 3px var(--primary-color);
  }
  .question-paragraph {
    color: var(--primary-color);
  }
}
@media (min-width: 1180px) {
  h2 {
    font-size: 80px;
    line-height: 72px;
  }
}
@media (min-width: 1400px) {
  .contact-container {
    margin: 0;
  }
  h2 {
    color: #ffffff;
  }
  .content {
    margin: 0 0 62px;
    text-align: center;
    align-items: center;
  }
  .question-paragraph {
    color: #ffffff;
  }
  .lottie-container {
    right: 100px;
  }
}
</style>
