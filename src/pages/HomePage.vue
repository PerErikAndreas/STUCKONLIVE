<template>
  <div class="homepage-container">
    <Hero />
    <Calendar />
    <Sponsorbanner />
    <Carousel />
    <Trustbanner />
    <!-- <Blog /> -->
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Calendar from "@/components/Calendar";
import Sponsorbanner from "@/components/Sponsorbanner";
import Blog from "@/components/Blog";
import Trustbanner from "@/components/Trustbanner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Hero,
    Calendar,
    Sponsorbanner,
    Blog,
    Trustbanner,
    Carousel,
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
