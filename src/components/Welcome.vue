<template>
  <div class="Welcometext-container">
    <div class="Welcometext">
    Välkommen till Stuck-On, Östersunds pulserande musikförening!
    Stuck-On är en passionerad samlingsplats för musikälskare i hjärtat av Östersund. Med över 100 framgångsrika arrangemang under våra vingar har vi etablerat oss som en central kraft inom den lokala musikscenen.
    Vår förening grundades med visionen att skapa en gemenskap för likasinnade som delar kärleken till musik.
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
  margin-bottom: 5vh;
}

.Welcometext {
  width: 60vw;
}
</style>
