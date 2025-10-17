<template>
  <div class="app">
    <!-- Loader overlay -->
    <div v-if="!isLoaded" class="loader-overlay">
      <img src="/loader.jpg" alt="Loading..." class="loader-logo" />
    </div>

    <!-- Main content -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="isLoaded" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    // Show loader for ~1.5 seconds
    setTimeout(() => {
      this.isLoaded = true;
    }, 1500);
  }
};
</script>

<style>
html {
  font-size: 16px;
}

body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: radial-gradient(
      circle 900px at center top,
      #000000 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 750px at center bottom,
      #000000 50%,
      transparent 50%
    );
  background-size: 
    100% 50%, /* Top circle */
    100% 30%; /* Bottom circle, reduced in height */
  background-repeat: no-repeat;
  background-position: 
    top center, 
    bottom center;
  min-height: 50vh;
}

/* Media query for screens with a max-width of 400px */
@media (min-width: 700px) {
  body {
    background: radial-gradient(
        circle 950px at right top,
        #000000 50%,
        transparent 50%
        ),
    radial-gradient(
      circle 750px at center bottom,
      #000000 50%,
      transparent 50%
      );

    background-size: 200% 200%; /* Adjust the size so only a quarter is visible */
    background-repeat: no-repeat;
    background-position: right top, bottom center; /* Reposition to upper right corner */
  }
}

@media (min-width: 1400px) {
  body {
    background: radial-gradient(
        circle 1000px at top,
        #000000 50%,
        transparent 50%
        ),
    radial-gradient(
      circle 750px at center bottom,
      #000000 50%,
      transparent 50%
      );

    background-size: 200% 200%; /* Adjust the size so only a quarter is visible */
    background-repeat: no-repeat;
    background-position: top, bottom center; /* Reposition to upper right corner */
  }
}

#app {
  text-align: center;
  color: #2c3e50;
}

/* Loader overlay */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white; /* can also match your brand bg */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Rotating logo */
.loader-logo {
  width: 150px; /* adjust as needed */
  height: auto;
  animation: spin 1.3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
