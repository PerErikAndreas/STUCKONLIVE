<template>
  <div class="container">
    <div class="instagram-post-container">
      <div class="greybackground">
    <div class="circle-section">
      <div class="text-content">
        <h2>FÖLJ OSS!</h2>
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
  padding: 20px 30px 20px 30px;
  border-radius: 8px;
  width: 80%;
  margin-top: 62px;
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
  margin-top: 82px;
  display: flex;
  width: 100%;
  margin: 0 15px 0 15px;
  font-family: futura;
  flex-direction: column;
  align-items: center;
}

.circle-section {
  color: #e7492e; /* The red background color */
  border-radius: 50%;
  width: 300px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content h2 {
  color: #e7492e;
  /* Add more styles for your heading */
}

.text-content p {
  color: #e7492e;
  font-family: Helvetica;

  /* Add more styles for your paragraph */
}

@media (min-width: 700px) {
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
.greybackground {
  flex-direction: row;
  justify-content: space-between;
}
.arrow-right {
  transform: rotate(270deg); /* Initial rotation */
}

.instagram-post-container {
margin-right: 50px;
margin-left: 50px;
margin-top: 62px;
width: 100%;
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
.circle-section p{
 color: #e7492e;
}

.circle-section h2{
 color: #e7492e;
}
}

</style>
