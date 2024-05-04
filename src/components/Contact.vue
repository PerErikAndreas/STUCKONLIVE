<template>
  <div class="contact-container">
      <h2>Prata med oss!</h2>
      <p>
        <a href="mailto:morgan.hall@sensus.se">Morgan Hall</a>
      </p>
    </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
 .contact-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h2 {
  color: #333;
}
</style>
