<template>
  <div class="blog-container">
    <div class="carousel-title">
      <h2>BLOGG</h2>
    </div>
    <div class="blog-post-container">
      <div class="greybackground">
    <div class="text-section">
      <div class="text-content">
        <h2>MUSIKTIPS!</h2>
        <p>
          På vår blog postar vi dagliga musiktips, kommande spelningar och
          evenemang.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: "Blog",
  // Component data and methods would go here
};
</script>

<style scoped>

.blog-post-container {
  display: flex;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
  border-radius: 0px;
  width: 88%;
  border: solid 1px transparent; /* Transparent border by default */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* Tailwind's default shadow */
}

.carousel-title {
  font-family: var(--font-main);
  color: var(--primary-color);
  width: 100%;
  text-align: left;
}
.carousel-title h2 {
  margin-bottom: 5px;
}

.greybackground {
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.blog-container {
  display: flex;
  width: 100%;
  margin: 0 0 210px 0;
  font-family: var(--font-main);
  flex-direction: column;
  align-items: center;
}

.blog-embed {
  margin-bottom: 62px;
}

@media (min-width: 700px) {
.blog-container {
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-bottom: 250px;
}

.blog-embed {
  margin-bottom: 0;
}

.greybackground {
  flex-direction: row;
  justify-content: space-around;
}

.blog-post-container {
width: 100%;
max-width: 883px;
border-radius: 8px;
padding: 20px 24px 20px 24px;
flex-direction: row;
}
}

@media (min-width: 1000px) {
.blog-post-container {
  margin: 0 40px 0 40px;
  width: 92%;
  max-width: 883px;
  border-radius: 8px;
  padding: 20px 32px 20px 32px;
  flex-direction: row;
  }
.blog-container {
  margin-bottom: 250px;
}
}

@media (min-width: 1400px) {

.blog-container {
  margin-bottom: 360px;
}
}

</style>
