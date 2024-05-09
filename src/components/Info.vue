<template>
  <div class="info-container">
    <h2>OM FÖRENINGEN</h2>   
    <div class="cards"> 
    <div class="card">
<p>
        Stuck On är samlingsplatsen för musikälskare i Östersund. Med
        över 100 framgångsrika arrangemang under våra vingar har vi etablerat
        oss som en central kraft inom den lokala musikscenen.
      </p>
    </div>
    <div class="card">
      <p>
        Vår förening grundades med visionen att skapa en gemenskap för
        likasinnade som delar kärleken till musik och samtidigt göra staden mer levande
        genom att arrangera evenemang på flera scener.
      </p>
    </div>
    <div class="card">
      <p>
        Våra arrangemang spänner över olika genrer och stilar för att tillgodose
        den breda smaken hos vårt publikspektrum. Från intima konserter till
        livliga rockkonserter strävar vi alltid efter att erbjuda en
        upplevelse.
      </p>
    </div>
    <div class="card">
      <p>
        Vi är stolta över vårt engagemang för att stödja och främja lokala
        talanger. Genom samarbeten med talangfulla musiker och studieförbundet Sensus strävar vi efter att bygga upp en blomstrande
        musikgemenskap.
      </p>
    </div>
  </div>  
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  max-width: 923px;
  margin: 0 auto 180px auto;
  padding: 20px;
}

.cards {
  background: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.card {
  background: #FAFAFA;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

h2 {
  font-family: var(--font-main);
  color: var(--primary-color);
  margin-bottom: 10px;
  text-align: left;
}
</style>
