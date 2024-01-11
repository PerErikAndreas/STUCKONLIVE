<template>
    <div>
      <!-- Your other Vue components go here -->
      <billetto-organiser-widget
        v-if="billettoScriptLoaded"
        type="calendar"
        organiser="652330"
        organization="billetto.se"
        lang="sv"
        theme="light"
        color="#FCC134"
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
  