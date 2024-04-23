<template>
  <div class="main">
    <Info />
   </div>
</template>

<script>
import Info from "@/components/Info";

export default {
  name: "About",
  components: {
    Info,
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
