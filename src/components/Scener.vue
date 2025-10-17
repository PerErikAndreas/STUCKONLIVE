<template>
  <div class="scener-container">
    <h2>VÅRA SCENER</h2>
    <div class="cards-containers">
    <div class="cards">
      <div class="cards-container">
        <div class="two-cards">
          <!-- Card for Storsjöteatern Salongen -->
          <div class="card">
            <div class="picture-text-container">
              <div class="info-picture-container">
                <img
                  :src="info2Picture"
                  class="info-picture"
                  alt="Playing at Storsjöteatern Salongen"
                  loading="lazy"
                />
              </div>
              <div>
                <p><strong>Storsjöteatern Salongen</strong> <br>Stortorget 7, 831 30 Östersund</p>
              </div>
            </div>
            <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stortorget 7, 831 30 Östersund')" class="hittahit-button">Hitta hit</a>
          </div>
        </div>
        <div class="two-cards">
          <!-- Card for Jazzköket -->
          <div class="card">
            <div class="picture-text-container">
              <div class="info-picture-container">
                <img
                  :src="info4Picture"
                  class="info-picture"
                  alt="Playing at Jazzköket"
                  loading="lazy"
                />
              </div>
              <div>
                <p><strong>Jazzköket</strong> <br>Prästgatan 44G, Östersund</p>
              </div>
            </div>
            <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Prästgatan 44G, Östersund')" class="hittahit-button">Hitta hit</a>
          </div>

          <!-- Card for Studioscenen -->
          <div class="card">
            <div class="picture-text-container">
              <div class="info-picture-container">
                <img
                  :src="info3Picture"
                  class="info-picture"
                  alt="Playing at Studioscenen"
                  loading="lazy"
                />
              </div>
              <div>
                <p><strong>Studioscenen</strong> <br>Stortorget 7, 831 30 Östersund</p>
              </div>
            </div>
            <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stortorget 7, 831 30 Östersund')" class="hittahit-button">Hitta hit</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Duplicate of cards div -->
    <div class="cards2">
      <div class="cards-container2">
        <img
                  :src="kassi"
                  class="big-picture"
                  alt="El PArador at Captain Cook"
                  loading="lazy"
                />
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Scener",
  data() {
    return {
      info2Picture: require("../assets/salongenpicture.jpg"),
      info3Picture: require("../assets/studioscenenpicture.jpg"),
      info4Picture: require("../assets/jazzkoketpicture.png"),
      kassi: require("../assets/kassi.jpg"),

    };
  },
};
</script>

<style scoped>
.big-picture {
  width: 100%;
  height: 393px;
  object-fit: cover;
}
.hittahit-button {
  width: 100%;
  border-radius: 6px;
  border: none;
  color: #FFFFFF;
  background: #87878E;
  padding: 8px 0px 8px 0px;
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.hittahit-button:hover {
  background: #67676d;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

a {
  font-weight: 400;
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.picture-text-container {
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-bottom: 5px;
  flex-direction: column;
}

.info-picture {
  width: 96px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
}

.scener-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 923px;
  margin: 0 auto 230px auto;
}

.articles-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 923px;
  margin: 0 auto 180px auto;
}

.cards, .cards2 {
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

.two-cards {
  display: flex;
  flex-direction: column;
}

.cards-container {
  background: #fafafa;
  padding: 20px 20px 0 20px;
  border-radius: 8px;
}
.cards-container2 {
  background: #fafafa;
  padding: 20px 20px 20px 20px;
  border-radius: 8px;
}
.card {
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  text-align: left;
}

h2 {
  font-family: var(--font-main);
  color: #e7492e;
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
}

.picture-text-container p {
  margin: 10px 0 0px 0px;
  font-family: var(--font-secondary);
  line-height: 25px;
  color: #71717A;
}

.picture-text-container p strong {
  font-size: 18px;
  color: var(--secondary-color);
}

@media (min-width: 500px) {
  .picture-text-container {
    flex-direction: row;
    width: 100%;
  }

  .picture-text-container p {
    margin: 5px 0 0px 12px;
  }

  .card {
    align-items: start;
  }
}

@media (min-width: 700px) {
  .scener-container {
    width: 92%;
  }
}

@media (min-width: 900px) {
  .cards {
    padding: 20px 32px 20px 32px;
  }
}

@media (min-width: 1400px) {
  .articles-container {
    margin: 0 auto 350px auto;
  }
}

/* Hide cards2 by default */
.cards2 {
  display: none;
}

/* Show cards2 when container is over 800px */
@media (min-width: 850px) {
  .cards, .cards2 {
    display: flex;
    width: 100%;

  }
  .cards-containers {
  display: flex;
  gap: 12px;
}
}
</style>
