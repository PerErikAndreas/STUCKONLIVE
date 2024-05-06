<template>
  <div class="instagram-container">
    <div class="instagram-post-container">
      <div class="greybackground">
    <div class="text-section">
      <div class="text-content">
        <h2>MUSIKTIPS!</h2>
        <p>
          På vår instagram postar vi dagliga musiktips, kommande spelningar och
          evenemang @stuckonlive
        </p>
      </div>
    </div>
    <instagram-embed permalink="https://www.instagram.com/p/C4cpNZpNS3_/"></instagram-embed>
  </div>
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
  display: flex;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
  border-radius: 0px;
  width: 88%;
  border: solid 1px transparent; /* Transparent border by default */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* Tailwind's default shadow */
}

.greybackground {
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.instagram-container {
  display: flex;
  width: 100%;
  margin: 0 0 250px 0;
  font-family: var(--font-main);
  flex-direction: column;
  align-items: center;
}

.text-section {
  color: var(--primary-color);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content {
  margin: 80px 0 80px 0;
}

.text-content h2 {
  color: var(--primary-color);
  margin-top: 20px;
  /* Add more styles for your heading */
}

.text-content p {
  color: #3F3F46;
  font-family: var(--font-secondary);
  max-width: 300px;


  /* Add more styles for your paragraph */
}

@media (min-width: 700px) {
.instagram-container {
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  margin-bottom: 350px;
}
.greybackground {
  flex-direction: row;
  justify-content: space-between;
}
.arrow-right {
  transform: rotate(270deg); /* Initial rotation */
}

.instagram-post-container {
width: 100%;
max-width: 923px;
border-radius: 8px;
padding: 20px 24px 20px 24px;
flex-direction: row;
}
}
@media (min-width: 700px) {
.arrow-right {
  display: none;
}
.circle-section {
  background: none;
  width: 350px; /* Adjust as needed */
  height: 350px; /* Adjust as needed */
}
}

@media (min-width: 1000px) {
.instagram-post-container {
  margin: 0 40px 0 40px;
  width: 92%;
  max-width: 883px;
  border-radius: 8px;
  padding: 20px;
  flex-direction: row;
  }
.instagram-container {
  margin-bottom: 380px;
}
}

</style>
