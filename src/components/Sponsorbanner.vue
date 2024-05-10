<template>
<div class="sponsorbanner-container">
  <div class="icon-container">
    <a href="https://www.regionjh.se/" role="link" aria-label="Regionen">
      <img class="sponsor-logo" src="../assets/regionen-logo.png" alt="Regionen Logo">
    </a>
  </div>

  <div class="icon-container">
    <a href="https://www.sensus.se/om-sensus/var-organisation/sensus-norrland/" role="link" aria-label="Sensus">
      <img class="sponsor-logo" src="../assets/sensus-logo.png" alt="Sensus Logo">
    </a>
  </div>

  <div class="icon-container">
    <a href="https://billetto.se/users/stuck-on" role="link" aria-label="Billetto">
      <img class="sponsor-logo" src="../assets/billetto.png" alt="Billetto Logo">
    </a>
  </div>
</div>

</template>

<script>
export default {
  name: "Sponsorbanner",
};
</script>
<style scoped>
  .sponsorbanner-container {
    margin: 0 0 72px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: var(--primary-color);
    border-radius: 6px;
    width: 92%;
    padding: 40px 0;
  }

  .icon-container {
    flex: 1;
    flex-direction: column;
    text-align: center;
    font-family: var(--font-main);
  }

  .sponsor-logo {
    width: 75px;
  }
  .sponsor-logo:hover {
    transform: scale(1.05);
  }
  
  .icons-title {
    font-size: 14px;
  }

  @media (min-width: 700px) {
    .sponsorbanner-container {
      border-radius: 8px;
      width: 90%;
    }
    .sponsor-logo {
      width: 100px;
    }
  }

  @media (min-width: 900px) {
    .sponsorbanner-container {
      width: 92%;
      max-width: 923px;
    }
  }
</style>
