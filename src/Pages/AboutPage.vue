<template>
  <div class="main">
    <div id="about-section">
      <div class="main-scener">
        <div class="join-container">
            <div class="title">ABOUT</div>
            <div>
              <p>Välkommen till Stuck-On, Östersunds pulserande musikförening!
    Stuck-On är en passionerad samlingsplats för musikälskare i hjärtat av Östersund. Med över 100 framgångsrika arrangemang under våra vingar har vi etablerat oss som en central kraft inom den lokala musikscenen.
    Vår förening grundades med visionen att skapa en gemenskap för likasinnade som delar kärleken till musik.</p>
            </div>
            SKRYT: https://www.ltz.se/2020-01-21/stuck-on-drar-igang-varens-livescen-vi-bokar-bara-det-som-ar-riktigt-bra
          </div>
      </div>
      <div id="join-section">
        <h2>Få nyhetsbrev!</h2>
        <p>Here you can provide information about how people can join your music community...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20vw;
  margin-right: 20vw;
  gap: 20px;
}

#about-section,
#join-section {
  margin-bottom: 30px;
}

h2 {
  color: #333;
}

@media screen and (max-width: 600px) {
  #join-section {
    display: flex;
    flex-direction: column;
  }

  #about-section {
    margin-bottom: 20px; /* Add margin for spacing on mobile */
  }
}
</style>
