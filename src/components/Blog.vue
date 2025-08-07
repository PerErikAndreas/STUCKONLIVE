<template>
  <div class="scener-container">
    <h2>STUCKON-DENNIS BLOGG</h2>
    <div class="cards-containers">
      <div class="cards">
        <div class="cards-container">
          <div class="two-cards">
            <!-- Card for Captain Cook -->
             <div class="card">
              <div class="info-picture-container">
                  <img
                    :src="dennisPicture"
                    class="dennis-face"
                    alt="Dennis Face"
                    loading="lazy"
                  />
                </div>
             </div>
            <div class="card">
              <div class="picture-text-container">
                <div class="story-container">
                  <p><strong>{{ currentStory.title }}</strong></p>
                  <p class="subtitle"><em>"{{ currentStory.subtitle }}"</em></p>
                  <br>
                  <p v-html="formatText(currentStory.paragraph1)"></p>
                  <br>
                  <div v-if="showMore">
                    <p v-html="formatText(currentStory.paragraph2)"></p>
                    <br>
                    <p v-html="formatText(currentStory.paragraph3)"></p>
                    <br>
                    <p v-html="formatText(currentStory.paragraph4)"></p>
                  </div>
                  <div class="buttons-container">
                  <button class="read-more-button" @click="toggleShowMore">
                    {{ showMore ? 'LÄS MINDRE' : 'LÄS MER' }}
                  </button>
                  <button class="read-more-button" @click="showNextStory">LÄS FLER MINNEN</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      dennisPicture: require("../assets/dennis.png"),
      stories: [],
      currentStoryIndex: 0,
      showMore: false
    };
  },
  computed: {
    currentStory() {
      return this.stories[this.currentStoryIndex] || {};
    }
  },
  mounted() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        this.stories = data;
      })
      .catch(error => console.error('Error fetching data:', error));
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    showNextStory() {
      this.currentStoryIndex = (this.currentStoryIndex + 1) % this.stories.length;
      this.showMore = false;  // Reset the 'showMore' when switching stories
    },
    formatText(text) {
    if (!text) return ''; // Return an empty string if text is undefined or null
    return text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  }
  }
};
</script>

<style scoped>
.subtitle {
  font-size: 18px;;
}
.story-container {
  width: 100%;
}

.story-container p {
  text-align: justify;
}

.buttons-container {
  display: flex;
  margin-right: 10px;
  justify-content: space-between;
}
.big-picture {
  width: 100%;
  height: 520px;
  object-fit: cover;
}
.read-more-button {
  border-radius: 6px;
  border: none;
  color: var(--primary-color);
  padding: 8px 0px 8px 0px;
  font-family: var(--font-main);
  font-size: 14px;
  background: #fafafa;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.read-more-button:hover {
  text-decoration: underline;
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
  color: var(--primary-color) !important;
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

.dennis-face {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 8px;
}

.scener-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 923px;
  margin: 0 auto 62px auto;
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
  align-items: left;
  margin-bottom: 20px;
  text-align: left;
}

h2 {
  font-family: var(--font-main);
  color: var(--primary-color);
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

  .buttons-container {
  margin-left: 10px;
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
  .two-cards {
  flex-direction: row;
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
