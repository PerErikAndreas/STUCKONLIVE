<template>
  <div class="info-container">
    <h2>OM FÖRENINGEN</h2>   
    <div class="cards"> 
    <div class="card">
      <div class="info-picture-container">
        <img :src="InfoPicture" class="info-picture" alt="Kassi playing at Captain Cook" />

      </div>
      <div>
<p>
        Stuck On är en samlingsplats för musikälskare i Östersund. Med
        över 100 framgångsrika arrangemang i ryggen har vi etablerat
        oss som en naturlig del av den lokala musikscenen.
      </p>

      <p>
        Vår förening grundades med visionen att skapa en gemenskap för
        likasinnade som delar kärleken till musik och samtidigt göra staden mer levande
        genom att arrangera evenemang på flera scener.
      </p>

      <p>
        Våra arrangemang rör sig över olika genrer och stilar allt från intima akustiska konserter till
        rockkonserter och ofta med lokala förband. Genom samarbeten med talangfulla musiker och ett nära sammarbete med studieförbundet Sensus strävar vi efter att bygga upp en blomstrande
        lokal musikgemenskap.
      </p>
    </div>
  </div>
  </div>  
  </div>
</template>

<script>
import InfoPicture from '../assets/photophonics-infopicture.jpg';
export default {
  name: "Info",
  data() {
    return {
      InfoPicture
    };
  }
};
</script>

<style scoped>
.info-picture {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}
.info-picture-container {

}
.info-container {
  display: flex;
  flex-direction: column;
  max-width: 923px;
  margin: 0 auto 180px auto;
}

.cards {
  background: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
}

.card {
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  text-align: left;
}

h2 {
  font-family: var(--font-main);
  color: var(--primary-color);
  margin-bottom: 10px;
  text-align: left;
}

@media (min-width: 700px) {
  .card {

  display: flex;
  flex-direction: row;
  
}
.info-picture {
  width: 250px;
  height: auto;
  object-fit: cover;
}
}

@media (min-width: 1400px) {
  .info-container {
  margin: 0 auto 350px auto;
}

}
</style>
