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
  background: 
        radial-gradient(circle 1050px at center top, #E7492E 50%, transparent 50%), 
        radial-gradient(circle 1050px at center bottom, #E7492E 50%, transparent 50%);
    /* Set the background size for each circle to ensure they span the full width and half the height is visible */
    background-size: 100% 200%;
    /* Prevent the backgrounds from repeating */
    background-repeat: no-repeat;
    /* Position each background correctly */
    background-position: top center, bottom center;
    /* Set the minimum height to ensure full coverage of the viewport */
    min-height: 50vh;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>
