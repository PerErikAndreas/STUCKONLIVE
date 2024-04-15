<template>
  <div class="app">
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style>
/* Global styles for the entire application */
body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: radial-gradient(
      circle 1050px at center top,
      #e7492e 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 1050px at center bottom,
      #e7492e 50%,
      transparent 50%
    );
  background-size: 100% 200%;
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
      circle 1050px at center bottom,
      #e7492e 50%,
      transparent 50%
      );

    background-size: 200% 200%; /* Adjust the size so only a quarter is visible */
    background-repeat: no-repeat;
    background-position: right top, bottom center; /* Reposition to upper right corner */
  }
}

#app {
  text-align: center;
  color: #2c3e50;

}
</style>
