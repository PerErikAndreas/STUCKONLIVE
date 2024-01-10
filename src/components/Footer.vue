<template>
  <div class="main-footer">
    <p class="Footer-text"><img alt="Regionen logo" class="regionenlogo" src="../assets/regionen.png"></p>
    <p class="Footer-text"><img alt="Regionen logo" class="sensuslogo" src="../assets/SENSUS_LOGGO.png"></p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.main-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  text-align: right;
}

.Footer-text {
  margin: 0;
}

.regionenlogo {
  width: 50px;
}
.sensuslogo {
  width: 50px;
  filter: invert(100%);
}
</style>