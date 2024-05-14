<template>
  <div class="calendar-container">
    <div class="calendar-container-title">
      <H2>KOMMANDE EVENTS</H2>
    </div>
    <div class="billeto-widget-container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      billettoScriptLoaded: false,
    };
  },
  mounted() {
    // Load the Billetto widget script dynamically
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
};
</script>
<style scoped>

.calendar-container {
  margin: 0 0 52px 0;
  width: 92%;
  max-width: 923px;
}

.calendar-container-title {
  display: flex;
  justify-content: start;
  color: var(--primary-color);
  font-family: var(--font-main);
  margin-bottom: 5px;
}
.calendar-container-title h2 {
  margin: 0;
}

@media (min-width: 700px) {
  .calendar-container {
    margin: 0 40px 62px 40px;

  }
}
</style>
