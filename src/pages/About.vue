<template>
  <div class="main">
    <div id="about-section">
      <h2>About</h2>
      <p>
        Stuck-On är samlingsplatsen för musikälskare i hjärtat av Östersund. Med
        över 100 framgångsrika arrangemang under våra vingar har vi etablerat
        oss som en central kraft inom den lokala musikscenen. Vår förening
        grundades med visionen att skapa en gemenskap för likasinnade som delar
        kärleken till musik och samtidigt göra staden mer levande genom att
        arrangera evenemang på flera scener.
      </p>

      <p>
        Vår förening grundades med visionen att skapa en gemenskap för
        likasinnade som delar kärleken till musik. Genom åren har vi växt och
        utvecklats, samtidigt som vi förblir trogna vårt uppdrag att främja
        musikkulturen i Östersund.
      </p>

      <p>
        Våra arrangemang spänner över olika genrer och stilar för att tillgodose
        den breda smaken hos vårt publikspektrum. Från intima konserter till
        livliga musikfestivaler strävar vi alltid efter att erbjuda en
        oförglömlig upplevelse för både artister och publik.
      </p>

      <p>
        Vi är stolta över vårt engagemang för att stödja och främja lokala
        talanger. Genom samarbeten med talangfulla musiker, band och andra
        musikrelaterade föreningar strävar vi efter att bygga upp en blomstrande
        musikgemenskap i Östersund.
      </p>

      <p>
        Stuck-On är mer än bara en förening; det är en plattform för
        kreativitet, gemenskap och musikalisk utforskning. Oavsett om du är en
        entusiastisk musiker, dedikerad lyssnare eller helt enkelt älskar
        atmosfären av live-musik, finns det en plats för dig här hos oss.
      </p>

      <p>
        Gå med oss i vår resa att hylla musikens kraft och skapa minnen som
        varar livet ut. Tillsammans formar vi Stuck-Ons musikaliska framtid i
        Östersund och låter tonerna förena oss.
      </p>
    </div>

    <div id="join-section">
      <h2>Få nyhetsbrev!</h2>
      <p>
        Here you can provide information about how people can join your music
        community, whether it's through memberships, events, or other means.
        Encourage them to be part of the musical journey in Östersund.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
}
</style>
