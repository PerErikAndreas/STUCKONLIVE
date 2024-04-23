<template>
  <div class="container">
    <div class="circle-section">
      <div class="text-content">
        <h2>FÖLJ OSS!</h2>
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
  padding: 5px 5px 0px 5px;
  border-radius: 8px;
  border: solid 1px transparent; /* Transparent border by default */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* Tailwind's default shadow */
}
.arrow-right {
  margin: 40px 0 30px 0;
  transform: rotate(0deg); /* Initial rotation */
}

.container {
  margin-top: 82px;
  display: flex;
  font-family: futura;
  flex-direction: column;
  align-items: center;
}

.circle-section {
  background-color: #e7492e; /* The red background color */
  border-radius: 50%;
  width: 340px; /* Adjust as needed */
  height: 340px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content h2 {
  color: white;
  /* Add more styles for your heading */
}

.text-content p {
  color: white;
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
.arrow-right {
  transform: rotate(270deg); /* Initial rotation */
}
.circle-section {
margin-left: 50px;
}

.instagram-post-container {
margin-right: 50px;
padding: 0px 20px 0px 20px;

}
}
@media (min-width: 700px) and (max-width: 1016px) {
  .arrow-right {
  display: none;
}
.circle-section {
 scale: 0.8;
 background: none;
 
}
.circle-section p{
 color: #e7492e;
}

.circle-section h2{
 color: #e7492e;
}
}

</style>
