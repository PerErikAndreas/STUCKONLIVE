<template>
    <div class="calendar-main">
      <div class="calendar-title">
      <H1>BILJETTER</H1>
      </div>
      <billetto-organiser-widget
        v-if="billettoScriptLoaded"
        type="calendar"
        organiser="652330"
        organization="billetto.se"
        lang="sv"
        theme="light"
        color="#e7492e"
        whitelabel
      ></billetto-organiser-widget>
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
  .calendar-main {
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .calendar-title {
    display: flex;
    justify-content: start;
    color: #e7492e;
  }
</style>
  