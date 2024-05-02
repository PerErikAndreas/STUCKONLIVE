<template>
  <div class="calendar-main">
    <div class="calendar-title">
      <H2>KOMMANDE EVENTS</H2>
    </div>
    <div class="billeto-widget-container">
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

.billeto-widget-container .flex-grow.card-content.px-4.py-5.sm\:px-6.lg\:px-8 {
  background-color: blue !important; /* Intended to override Tailwind's background utility class */
}

.calendar-main {
  padding-left: 20px;
  padding-right: 20px;
}

.calendar-title {
  display: flex;
  justify-content: start;
  color: #e7492e;
  font-family: "Sora", sans-serif;
  margin-bottom: 5px;
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
