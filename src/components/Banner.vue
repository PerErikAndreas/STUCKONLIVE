<template>
  <div class="trustbanner-container">
    <div class="quote-banner">
      <div class="quote-text" :style="{ transform: `translateX(${position}px)` }">
        {{ currentQuote }}
      </div>
    </div>
    <img
      class="graphic-quarter2"
      src="../assets/animationquarter.png"
      alt="Loading animation"
    />
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      quotes: [
        "Musik förenar oss alla!",
        "Harmonier och rytmer för livet.",
        "Vi älskar liveframträdanden!",
        "Gemenskap genom musik.",
      ],
      currentIndex: 0,
      position: 0,
      speed: 2,
    };
  },
  computed: {
    currentQuote() {
      return this.quotes[this.currentIndex];
    },
  },
  mounted() {
    this.startScrolling();
  },
  methods: {
    startScrolling() {
      const bannerWidth = this.$el.offsetWidth;
      const textWidth = this.$el.querySelector(".quote-text").offsetWidth;
      this.position = bannerWidth;

      const scroll = () => {
        this.position -= this.speed;
        if (this.position < -textWidth) {
          this.position = bannerWidth;
          this.currentIndex =
            (this.currentIndex + 1) % this.quotes.length;
        }
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    },
  },
};
</script>

<style scoped>
.trustbanner-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border-radius: 8px;
  width: 92%;
  padding: 40px 0;
  margin-bottom: 52px;
  overflow: hidden; /* viktig för banderollen */
}

.quote-banner {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.quote-text {
  display: inline-block;
  font-family: var(--font-main);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding-left: 100%;
}

.graphic-quarter2 {
  position: absolute;
  height: 35%;
  bottom: 0;
  left: -5px;
  border-radius: 0 100% 0 0;
}

@media (min-width: 700px) {
  .quote-text {
    font-size: 20px;
  }
  .graphic-quarter2 {
    height: 65%;
  }
}

@media (min-width: 1400px) {
  .quote-text {
    font-size: 22px;
  }
}
</style>
