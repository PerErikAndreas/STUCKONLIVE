<template>
  <div>
    <h2>Events</h2>
    <div v-if="loading">Laddar events...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="event in events" :key="event.id">
        {{ event.attributes.title }} – {{ event.attributes.start_time }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      events: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const res = await fetch("/.netlify/functions/event");
      const text = await res.text();

      // Testa om det går att parse:a JSON
      this.events = JSON.parse(text).data || [];
    } catch (err) {
      this.error = "Kunde inte hämta event: " + err.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>
