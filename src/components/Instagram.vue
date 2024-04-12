<template>
  <div class="container">
    <div class="circle-section">
      <div class="text-content">
        <h1>FÖLJ OSS!</h1>
        <p>På vår instagram postar vi dagliga musiktips, kommande spelningar och evenemang @stuckonlive</p>
      </div>
    </div>
    <div class="phone-section">
      <!-- <img src="../assets/Mockup.png" alt="Phone" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instagram',
  // Component data and methods would go here
}
</script>

<style scoped>
.container {
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}

.circle-section {

  background-color: #E7492E; /* The red background color */
  border-radius: 50%;
  width: 350px; /* Adjust as needed */
  height: 350px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content h1 {
  color: white;
  /* Add more styles for your heading */
}

.text-content p {
  color: white;
  /* Add more styles for your paragraph */
}

.phone-section img {
  width: 200px;
  height: auto;
  z-index: 1; /* To ensure it's above the circle */
}
</style>
