<template>
  <div class="privacy-policy-container">
      <div class="cards">
          <div class="card">
            <h2>PRIVACY POLICY</h2>
            <ul>
    <li>Denna integritetspolicy är avsedd att informera dig om hur vi hanterar personuppgifter när du använder vår webbplats och vår widget för biljettförsäljning.</li>
    <li><strong>Inga personuppgifter samlas in direkt av oss:</strong> Vi, Stuckon Live, samlar inte in några personuppgifter direkt genom vår webbplats. All behandling av personuppgifter sker genom vår partner Billetto, som ansvarar för biljettförsäljningen.</li>
    <li><strong>Användning av Billetto-widgeten:</strong> Vi använder en widget från Billetto för att tillhandahålla biljetter till våra evenemang. När du köper biljetter via Billetto kommer vissa av dina personuppgifter att hanteras av dem. Vi rekommenderar att du läser igenom Billettos dataskyddspolicy för att förstå hur dina personuppgifter skyddas.</li>
    <li><strong>Inga tredjeparts-cookies eller spårningstekniker:</strong> Vår webbplats använder inte cookies eller andra spårningstekniker för att samla in information om dig.</li>
    <li><strong>Säkerhet och skydd för biljettköpare:</strong> Vår prioritet är att säkerställa säkerheten för våra biljettköpare. Vi arbetar tillsammans med Billetto för att skydda dina personuppgifter under köpprocessen och för att göra ditt biljettköp via vår webbplats säkert.</li>
    <li><strong>Kontaktinformation:</strong> Om du har frågor eller funderingar gällande vår hantering av personuppgifter eller denna integritetspolicy, är du välkommen att kontakta oss via vår kontaktsida.</li>
</ul>

      </div>
      </div>
</div>

</template>

  
  <script>  
  export default {
    name: "ContactPage",
  };
  </script>
  
  <style scoped>
     ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin: 10px 0;
            padding: 10px;
        }
  .privacy-policy-container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  max-width: 923px;
  height: 100%;
  margin: 0 auto 50vh auto;
}

.cards {
  background: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  margin: 100px 20px 30% 20px;
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
  </style>