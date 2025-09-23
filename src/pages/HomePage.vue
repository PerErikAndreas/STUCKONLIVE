<template>
  <div class="homepage-container">
    <Hero />
    <!-- <News /> -->
    <UntilNews />
    <Calendar />
    <Sponsorbanner />
    <Blog />
    <Trustbanner />
    <Carousel />    
    <Scener />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import News from "@/components/News";
import UntilNews from "@/components/UntilNews";
import Calendar from "@/components/Calendar";
import Sponsorbanner from "@/components/Sponsorbanner";
import Scener from "@/components/Scener";
import Trustbanner from "@/components/Trustbanner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";


export default {
  name: "Home",
  components: {
    Hero,
    News,
    UntilNews,
    Calendar,
    Sponsorbanner,
    Scener,
    Trustbanner,
    Carousel,
    Blog,
    Footer,
  },
};
</script>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: var(--background-color);
}

@media (min-width: 1075px) {
  .home-container {
    width: 1075px;
    margin: 0 auto;
  }
}
</style>
