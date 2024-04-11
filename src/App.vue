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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: radial-gradient(circle 1050px at center top, #E7492E 50%, transparent 50%);
    /* The background size controls the size of the circle. 100% width ensures the circle spans the width, 
       and the height (200%) makes the circle tall enough that only half is visible at the top. */
    background-size: 100% 200%;
    /* Prevent the background from repeating. */
    background-repeat: no-repeat;
    /* Position the background to start from the top. */
    background-position: top center;
    /* Set the minimum height to full viewport height to ensure full coverage. */
    min-height: 50vh;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>
