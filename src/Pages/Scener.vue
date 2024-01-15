<template>
    <div class="main-scener">
        <div class="grid-container">
    <div class="grid-item">
      <div class="title">STORSJÖTEATERN</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac bibendum nisi.</div>
    </div>

    <div class="grid-item">
      <div class="title">STUDIOSCENEN</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac bibendum nisi.</div>
    </div>

    <div class="grid-item">
      <div class="title">CAPTAIN COOK</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac bibendum nisi.</div>
    </div>

    <div class="grid-item">
      <div class="title">JAZZKÖKET</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac bibendum nisi.</div>
    </div>
  </div>
  <Footer />

    </div>
  </template>
  
  <script>
    import Footer from '@/components/Footer'

  
  export default {
    name: "Scener",
    components: {
      Footer
    }

  }
  </script>
    <style>

    .main-scener {
      font-family: Arial, sans-serif;
      margin: 0vw;
      padding: 20px;
    }

    @media screen and (min-width: 768px) {
  .main-scener {
    margin: 0 10vw;
  }
}

    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .grid-item {
      padding: 20px;
      border-radius: 8px;
    }

    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
  </style>
  