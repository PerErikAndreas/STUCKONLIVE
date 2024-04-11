<template>
  <div class="Welcometext-container">
    <div class="Welcometext">
      UTFORSKA <div>DIN&nbsp;LOKALA</div>
MUSIKSCEN
    </div> 
    <div class="paragraph-container">
    Mer än 100 genomförda konserter med internationella och lokala akter – upplev musiken på nära håll!
  </div>
    <div class="input-and-ctabutton-container">
      <input class="input" /><button class="cta-button">FÅ NYHETSBREV</button>
    </div>
    <div class="arrow-container">
      <img class="stuckon-logo" src="../assets/Arrow.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style scoped>
.arrow-container{
margin: 74px 0 74px 0;
}
.input-and-ctabutton-container{
  display: flex;
  gap:10px;
  flex-direction: column;
}
.paragraph-container{
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding: 0 10vw 0 10vw;
}
.input {
  border: 2px solid #E7492E;
  border-radius: 12px;
  height: 50px;
}

.cta-button {
  border: 2px solid #E7492E;
  border-radius: 12px;
  height: 50px;
  color: #FFFFFF;
  background: #E7492E;
  font-size: 20px;
  font-family: futura;
}
.Welcometext-container {
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center; /* This centers the content vertically within the container */
  color: #FFFFFF; /* Text color is white */
  /* If you want the container itself to be centrally aligned within its parent, 
     and if its parent is also a flex container, you might not need additional settings here.
     However, if the container's parent isn't styled with flexbox, consider adding margins: */
  /* Height is necessary if you want to ensure vertical centering within a specific size. */
}
.Welcometext {
  color: #FFFFFF;
  font-family: futura;
  font-size: 48px;
  line-height: 42px;
  font-weight: 900;
  margin-bottom: 62px;
  letter-spacing: -5%;
}
</style>
