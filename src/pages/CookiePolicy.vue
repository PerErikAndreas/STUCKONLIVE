<template>
  <div class="cookie-policy-container">
      <div class="cards">
          <div class="card">
            <h2>COOKIE POLICY</h2>
        <ul>
                    <li>Denna privacy policy är avsedd att informera dig om våra praxis när det gäller hantering av personuppgifter genom vår webbplats och vår Billetto-widget för biljettförsäljning.</li>
                    <li><strong>Inga personuppgifter samlas in direkt av oss:</strong> Stuckon Live samlar inte in några personuppgifter direkt via vår webbplats. All hantering av personuppgifter sker genom vår partner Billetto, som ansvarar för biljettförsäljningen.</li>
                    <li><strong>Användning av Billetto-widgeten:</strong> Vi använder en widget från Billetto för att tillhandahålla biljetter till våra evenemang. Genom att köpa biljetter via Billetto, kommer vissa personuppgifter att hanteras av dem. Vi uppmanar dig att läsa Billettos dataskyddspolicy för att förstå hur dina personuppgifter skyddas.</li>
                    <li><strong>Inga tredjeparts-cookies eller tracking-teknologier:</strong> Vår webbplats använder inte cookies eller andra tracking-teknologier för att samla information om dig.</li>
                    <li><strong>Säkerhet och försäkring till biljettköpare:</strong> Vår prioritet är säkerheten för våra biljettköpare. Vi samarbetar med Billetto för att säkerställa att dina personuppgifter skyddas under köpprocessen och att köpa biljetter via vår webbplats är tryggt och säkert.</li>
                    <li><strong>Kontaktinformation:</strong> Om du har några frågor eller funderingar gällande vår privacy policy eller dina personuppgifter, är du välkommen att kontakta oss via kontaktsidan.</li>
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
.cookie-policy-container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  max-width: 923px;
  height: 100vh;
  margin: 0 auto 180px auto;
}

.cards {
  background: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  margin: 0 20px 0 20px;
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
  