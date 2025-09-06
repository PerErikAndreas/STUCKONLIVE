<template>
  <div>
    <h2>Events</h2>
    <div v-if="loading">Laddar events...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ul v-else-if="events.length">
      <li v-for="event in events" :key="event.id">
        <strong>{{ event.attributes.title }}</strong>
        <span v-if="event.attributes.start_time"> – {{ formatDate(event.attributes.start_time) }}</span>
      </li>
    </ul>
    <div v-else>Inga events hittades.</div>
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
  methods: {
    formatDate(dateStr) {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return d.toLocaleString("sv-SE", { dateStyle: "medium", timeStyle: "short" });
    },
  },
  async mounted() {
    try {
      const res = await fetch("/.netlify/functions/event");

      // Läs alltid text först för att undvika 'Unexpected token <'
      const text = await res.text();

      // Om response inte är JSON, visa fel
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Svaret från API:et är inte giltig JSON:\n" + text);
      }

      // Om Billetto returnerar fel
      if (data.error) {
        throw new Error(data.error);
      }

      this.events = data.data || [];
    } catch (err) {
      this.error = "Kunde inte hämta event: " + err.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
