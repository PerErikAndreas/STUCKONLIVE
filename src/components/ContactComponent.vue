<template>
    <div class="main">
      <div class="Contact-container">
        <h2>KONTAKT</h2>
        <a href="mailto:morgan.hall@gmail.com" class="mail" type="link"><p>Morgan Hall</p></a>
      </div>
    </div>
</template>

  <script>
  export default {
    name: "ContactComponent"
  }
  </script>
  <style scoped>
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20vw;
      margin-right: 20vw;
    }

    .mail {
      text-decoration: none;
      color: black; 
    }
    </style>
  