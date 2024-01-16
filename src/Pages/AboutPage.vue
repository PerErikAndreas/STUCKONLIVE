<template>
  <div class="main">
    <div id="about-section">
      <div class="main-scener">
        <div class="join-container">
            <div class="title">ABOUT</div>
            <div>
              <p>Stuck-On är samlingsplatsen för musikälskare i hjärtat av Östersund...</p>
              <p>Vår förening grundades med visionen att skapa en gemenskap för likasinnade...</p>
              <p>Våra arrangemang spänner över olika genrer och stilar för att tillgodose den breda smaken...</p>
              <p>Vi är stolta över vårt engagemang för att stödja och främja lokala talanger...</p>
              <p>Stuck-On är mer än bara en förening; det är en plattform för kreativitet, gemenskap och musikalisk utforskning...</p>
              <p>Gå med oss i vår resa att hylla musikens kraft och skapa minnen som varar livet ut...</p>
            </div>
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
