<template>
  <div class="main">
    <Info />
   </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  name: "Contact",
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
  gap: 20px;
  height: 100vh;
}
</style>
