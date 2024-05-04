<template>
  <div class="contactpage-container">
    <Contact />
   </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  name: "ContactPage",
  components: {
    Contact,
  }
};
</script>

<style scoped>
.contactpage-container {
  display: flex;
  margin: 20px 20px 0 20px;
  gap: 20px;
  height: 100vh;
}
</style>
