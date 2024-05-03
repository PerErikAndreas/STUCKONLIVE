<template>
  <div class="container">
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
  margin-top: 62px;
  width: 85%;
  margin-bottom: 340px;
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

.container {
  display: flex;
  width: 100%;
  margin: 0 15px 0 15px;
  font-family: "Sora", sans-serif;
  flex-direction: column;
  align-items: center;
}

.text-section {
  color: #e7492e; /* The red background color */
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
  color: #e7492e;
  margin-top: 20px;
  /* Add more styles for your heading */
}

.text-content p {
  color: #3F3F46;
  font-family: Helvetica;
  max-width: 300px;


  /* Add more styles for your paragraph */
}

@media (min-width: 700px) {

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}
.greybackground {
  flex-direction: row;
  justify-content: space-between;
}
.arrow-right {
  transform: rotate(270deg); /* Initial rotation */
}

.instagram-post-container {
margin-right: 40px;
margin-left: 40px;
width: 92%;
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
    margin-right: 40px;
margin-left: 40px;
width: 92%;
max-width: 883px;
border-radius: 8px;
padding: 20px 20px 20px 20px;
flex-direction: row;
}
}

</style>
