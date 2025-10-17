<template>
  <div class="hero-container">
    <!-- Graphic Circle -->
    <div class="lottie-container">
      <img
        class="graphic-circle slide-in-right"
        src="../assets/animation.png"
        alt="Loading animation"
      />
    </div>

    <!-- Hero Title -->
    <div class="title-container">
      <h1 ref="heroTitle">
        Utforska
        <div>din&nbsp;lokala</div>
        musikscen
      </h1>
    </div>

    <!-- Paragraph -->
    <div class="paragraph-container">
      <p>
        Vi närmar oss 150 genomförda konserter med lokala till internationella akter!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    // IntersectionObserver for title sliding in from left
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.$refs.heroTitle);
  },
};
</script>

<style scoped>
/* Slide-in animations */
@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Title animation on entering viewport */
.title-container h1 {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.title-container h1.in-view {
  opacity: 1;
  transform: translateX(0);
}

/* Circle animation on load */
.slide-in-right {
  animation: slideFromRight 1s ease-out forwards;
}

/* Existing hero styles */
.lottie-container {
  position: absolute;
  top: 390px;
  right: 73%;
  display: inline;
  flex-direction: column;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  overflow: hidden;
}

.graphic-circle {
  width: 120px;
}

.paragraph-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.paragraph-container p {
  max-width: 300px;
  color: var(--background-color);
  font-family: var(--font-main);
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}

.hero-container {
  margin: 52px 0px 62px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--background-color);
}

.title-container h1 {
  font-family: var(--font-main);
  font-size: 50px;
  line-height: 42px;
  font-weight: 1000;
  margin-bottom: 24px;
  letter-spacing: -5%;
  text-transform: uppercase;
}

/* Media Queries */
@media (min-width: 700px) {
  .graphic-circle {
    width: 100%;
  }
  .lottie-container {
    position: absolute;
    top: 80px;
    right: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    overflow: hidden;
  }
  .paragraph-container p {
    max-width: 100%;
    color: var(--primary-color);
  }
  .hero-container {
    margin: 52px 0px 105px 0px;
    text-align: start;
    width: 89%;
    justify-content: start;
    color: var(--primary-color);
    max-width: 923px;
  }
  .paragraph-container {
    padding: 0px;
    width: 40%;
  }
  .title-container h1 {
    font-size: 40px;
    line-height: 30px;
  }
}

@media (min-width: 920px) {
  .title-container h1 {
    font-size: 68px;
    line-height: 55px;
  }
  .paragraph-container p {
    font-size: 18px;
  }
  .hero-container {
    margin: 52px 0px 42px 0px;
  }
}

@media (min-width: 1180px) {
  .title-container h1 {
    font-size: 88px;
    line-height: 75px;
  }
}

@media (min-width: 1400px) {
  .title-container h1 {
    margin-top: 0px;
    font-size: 88px;
    line-height: 75px;
  }
  .hero-container {
    padding: 0px;
    display: flex;
    margin: 0px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: var(--background-color);
  }
  .paragraph-container {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
    color: var(--background-color);
    width: 100%;
    padding: 0px;
  }
  .paragraph-container p {
    max-width: 350px;
    color: var(--background-color);
  }
  .lottie-container {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(280px);
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    overflow: hidden;
  }
}
</style>
