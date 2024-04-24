<template>
  <div class="main">
    <Hero />
    <Tickets />
    <Sponsorbanner />
    <Instagram />
    <Carousel2 />
    <Trustbanner />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Tickets from "@/components/Tickets";
import Sponsorbanner from "@/components/Sponsorbanner";
import Instagram from "@/components/Instagram";
import Trustbanner from "@/components/Trustbanner";
import Carousel2 from "@/components/Carousel2";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Hero,
    Tickets,
    Sponsorbanner,
    Instagram,
    Trustbanner,
    Carousel2,
    Footer,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: #ffffff;
}

@media (min-width: 1075px) {
  .main {
    width: 1075px;
    margin: 0 auto;
  }
}

.H1 {
  font-size: 3rem;
  margin-bottom: 5vh;
}
</style>
