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
  background-color: #f2f2f2;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
