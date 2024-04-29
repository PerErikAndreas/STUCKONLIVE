<template>
  <div class="main">
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
.main {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  gap: 20px;
  height: 100vh;
}
</style>
