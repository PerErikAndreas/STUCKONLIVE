<template>
  <div class="main">
    <Hero />
    <Tickets />
    <Instagram />
    <Carousel2 />
    <Trustbanner />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Tickets from "@/components/Tickets";
import Instagram from "@/components/Instagram";
import Carousel from "@/components/Carousel";
import Trustbanner from "@/components/Trustbanner";
import Carousel2 from "@/components/Carousel2";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Hero,
    Tickets,
    Instagram,
    Trustbanner,
    Carousel2,
    Footer,
  },
};
</script>

<style scoped>
.two-two {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.four-four {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: #ffffff;
}

@media (min-width: 1075px) { /* Target screens larger than 1024px */
  .main {
    width: 1075px; /* Set a max width of 1024px for larger screens */
    margin: 0 auto; /* Auto margins to horizontally center the #app element */
  }
}

.H1 {
  font-size: 3rem;
  margin-bottom: 5vh;
}
</style>
