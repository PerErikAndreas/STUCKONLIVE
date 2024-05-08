<template>
  <div class="privacy-policy-page-container">
    <div class="privacy-policy-text">
    <p>Introduktion:
"Välkommen till Stuckon Live, en ideell musikarrangör baserad i Östersund. Vår mission är att främja lokala musikevenemang och kulturella aktiviteter. Denna privacy policy är avsedd att informera dig om våra praxis när det gäller hantering av personuppgifter genom vår webbplats och vår Billetto-widget för biljettförsäljning."
Inga personuppgifter samlas in direkt av oss:
"Stuckon Live samlar inte in några personuppgifter direkt via vår webbplats. All hantering av personuppgifter sker genom vår partner Billetto, som ansvarar för biljettförsäljningen."
Användning av Billetto-widgeten:
"Vi använder en widget från Billetto för att tillhandahålla biljetter till våra evenemang. Genom att köpa biljetter via Billetto, kommer vissa personuppgifter att hanteras av dem. Vi uppmanar dig att läsa Billettos dataskyddspolicy för att förstå hur dina personuppgifter skyddas. Du kan läsa deras policy här: Billetto Privacy Policy."
Inga tredjeparts-cookies eller tracking-teknologier:
"Vår webbplats använder inte cookies eller andra tracking-teknologier för att samla information om dig."
Säkerhet och försäkring till kunder:
"Vår prioritet är säkerheten för våra kunder. Vi samarbetar med Billetto för att säkerställa att dina personuppgifter skyddas under köpprocessen och att köpa biljetter via vår webbplats är tryggt och säkert."
Kontaktinformation:
"Om du har några frågor eller funderingar gällande vår privacy policy eller dina personuppgifter, är du välkommen att kontakta oss via [ange kontaktmetod]."</p>
   </div>
  </div>
   <Footer />
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "PrivacyPolicy",
  components: {
    Footer,}
};
</script>

<style scoped>
.privacy-policy-page-container {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  gap: 20px;
  height: 100vh;
}
.privacy-policy-text {
  width: 100%;
  background: none;
  padding: 20px;
  height: 100%;
}

@media (min-width: 700px) {
  .privacy-policy-text {
}
}
</style>
