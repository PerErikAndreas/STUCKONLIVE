<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
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

  }
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
      #e7492e 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 750px at center bottom,
      #e7492e 50%,
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
        #e7492e 50%,
        transparent 50%
        ),
    radial-gradient(
      circle 750px at center bottom,
      #e7492e 50%,
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
        #e7492e 50%,
        transparent 50%
        ),
    radial-gradient(
      circle 750px at center bottom,
      #e7492e 50%,
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
</style>
