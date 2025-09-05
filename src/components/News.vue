<template>
  <div class="news">
    <h2 v-if="event">{{ event.title }}</h2>
    <p v-if="event">{{ event.description }}</p>
    <img v-if="event?.image" :src="event.image" :alt="event.title" />
    <p v-if="event?.date">📅 Datum: {{ event.date }}</p>

    <p v-else>Laddar event...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const event = ref(null)

onMounted(async () => {
  try {
    // 👇 anropar din Netlify Function
    const res = await fetch("/.netlify/functions/event?id=12345")
    const data = await res.json()
    event.value = data
  } catch (err) {
    console.error("Kunde inte hämta event:", err)
  }
})
</script>

<style scoped>
.news {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  font-family: sans-serif;
}
.news img {
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
