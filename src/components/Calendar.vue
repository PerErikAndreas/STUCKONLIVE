<template>
  <div class="calendar-container">
    <div class="calendar-container-title">
      <h2>KOMMANDE EVENTS</h2>
    </div>
    <div class="cards-containers">
    <!-- Card 1: Always visible -->
    <div class="cards1">
      <billetto-organiser-widget
        v-if="billettoScriptLoaded"
        type="list"
        organiser="652330"
        organization="billetto.se"
        lang="sv"
        theme="light"
        color="#87878E"
        whitelabel
      ></billetto-organiser-widget>
    </div>
    <!-- Card 2: Visible over 850px width -->
    <div class="cards2">
      <div class="cards-container2">
        <img
                  :src="elParador"
                  class="big-picture"
                  alt="El PArador at Captain Cook"
                  loading="lazy"
                />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billettoScriptLoaded: false,
      elParador: require("../assets/elparador.jpg"),
    };
  },
  mounted() {
    // Load the Billetto widget script dynamically
    this.loadBillettoScript();
  },
  methods: {
    loadBillettoScript() {
      const script = document.createElement("script");
      script.src = "https://billetto.se/widget.js";
      script.async = true;
      script.onload = () => {
        // Set the flag to true once the script is loaded
        this.billettoScriptLoaded = true;
      };

      // Append the script to the document
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
.big-picture {
  width: 100%;
  height: 100%; /* Add this line to ensure the image fills the container */
  object-fit: cover;
}

.cards-container2 {
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  height: 100%; /* Ensure it takes full height */
  display: flex; /* Add this line */
}

.cards2 {
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100%; /* Ensure it takes full height */
}

.calendar-container {
  margin: 0 0 52px 0;
  width: 90%;
  max-width: 923px;
  flex-wrap: wrap;
}

.calendar-container-title {
  width: 100%;
  color: var(--primary-color);
  font-family: var(--font-main);
  margin-bottom: 5px;
  display: flex;
  max-width: 923px;
  justify-content: left;
}

.calendar-container-title h2 {
  margin: 0;
}

.cards1 {
  width: 100%;
}

.cards2 {
  display: none;
  height: 96.8%;
}

@media (min-width: 850px) {
  .cards2 {
    display: block;
    height: 96.8%;
  }
}

@media (min-width: 800px) {
  .cards, .cards2 {
    display: flex;
    width: 100%;
  }
  .cards-containers {
    display: flex;
    gap: 12px;
    max-width: 923px;
  }
}

</style>
