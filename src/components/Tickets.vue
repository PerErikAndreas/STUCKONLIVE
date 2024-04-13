<template>
  <div class="calendar-main">
    <div class="calendar-title">
      <H2>BILJETTER</H2>
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
  padding-left: 15px;
  padding-right: 15px;
}

.calendar-title {
  display: flex;
  justify-content: start;
  color: #e7492e;
  font-family: futura;
}
.calendar-title h2 {
  margin: 0;
}

@media (min-width: 700px) {
  .calendar-main {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
