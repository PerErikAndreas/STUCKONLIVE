<template>
    <div class="main-scener">
        <div class="grid-container">
    <div class="grid-item">
      <div class="title">STORSJÖTEATERN</div>
      <div> 
        Storsjöteatern är Östersunds teaterhus som ligger mitt i hjärtat av staden vid Stortorget. 
        Storsjöteatern är en förstklassig teater med en så kallad A-scen och en salong som rymmer 425 personer.
      </div>
    </div>

    <div class="grid-item">
      <div class="title">STUDIOSCENEN</div>
        <div> 
          I Storsjöteaterns källarvåning hittar du Studioscen. Genom åren har vi arrangerat många minnesvärda spelningar, 
          från lokala evenemang till internationella framträdanden. Studioscenen utgör även del av Storsjöytan. Lokalen är 220 kvadratmeter med scen och bar.
        </div>
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
  <FooterComponent />
    </div>
  </template>
  
  <script>
    import FooterComponent from '../components/FooterComponent.vue'

  
  export default {
    name: "ScenerPage",
    components: {
      FooterComponent
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
  