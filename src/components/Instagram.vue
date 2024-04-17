<template>
  <div class="container">
    <div class="circle-section">
      <div class="text-content">
        <h1>FÖLJ OSS!</h1>
        <p>
          På vår instagram postar vi dagliga musiktips, kommande spelningar och
          evenemang @stuckonlive
        </p>
      </div>
    </div>
    <div class="arrow-container">
      <img class="arrow-right" src="../assets/arrow-graphic.png" />
    </div>
    <div className="instagram-post-container">
    <instagram-embed permalink="https://www.instagram.com/p/C4cpNZpNS3_/"></instagram-embed>
  </div>
</div>
</template>

<script>
import InstagramEmbed from './InstagramEmbed.vue';

export default {
  components: {
    InstagramEmbed
  },
  name: "Instagram",
  // Component data and methods would go here
};
</script>

<style scoped>
.instagram-post-container {
  padding: 20px 20px 10px 20px;
  border-radius: 12px;
  background: #e7492e;
}
.arrow-right {
  transform: rotate(0deg); /* Initial rotation */
}

.container {
  margin-top: 82px;
  display: flex;
  font-family: futura;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}

.circle-section {
  background-color: #e7492e; /* The red background color */
  border-radius: 50%;
  width: 375px; /* Adjust as needed */
  height: 375px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content h1 {
  color: white;
  /* Add more styles for your heading */
}

.text-content p {
  color: white;
  font-family: Helvetica;

  /* Add more styles for your paragraph */
}

.phone-section img {
  width: 200px;
  height: auto;
  z-index: 1; /* To ensure it's above the circle */
}

@media (min-width: 700px) {
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
.arrow-right {
  transform: rotate(270deg); /* Initial rotation */
}
.circle-section {
margin-left: 50px;
}

.instagram-post-container {
margin-right: 50px;
}
}
@media (min-width: 700px) and (max-width: 1016px) {
  .arrow-right {
  display: none;
}
.circle-section {
}
}
</style>
