<template>
  <div class="Welcometext-container">
    <div class="Welcometext">
      Välkommen till Stuck-On!
Stuck-On är samlingsplatsen för musikälskare i hjärtat av Östersund. Med över 100 framgångsrika arrangemang under våra vingar har vi etablerat oss som en central kraft inom den lokala musikscenen. Vår förening grundades med visionen att skapa en gemenskap för likasinnade som delar kärleken till musik och samtidigt göra staden mer levande genom att arrangera evenemang på flera scener.
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
}
</script>

<style scoped>
.Welcometext-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  width: 93%;
}

.Welcometext {
   width: 300px; /* Adjust the width as needed */
      height: 300px; /* Set the same height as the width to create a square */
      padding: 20px; /* Optional: Add padding for content spacing */
      overflow: hidden; /* Optional: Hide content that exceeds the square */
}
</style>
