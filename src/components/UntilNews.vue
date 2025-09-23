<template>
  <div class="scener-container">
    <h2>NÄSTA EVENT</h2>
    <div class="cards-containers">
      <div class="cards">
        <div class="cards-container">
          <!-- Single Card -->
          <div class="card" v-if="currentNews">
            <!-- Event Image -->
            <div class="card-image">
              <img src="@/assets/posters/TerraLightfootposter.jpg" alt="Event" />
            </div>

            <!-- Event Text -->
            <div class="picture-text-container">
              <div class="story-container">
                <p><strong>{{ currentNews.title }}</strong></p>
                <p class="subtitle"><em>"{{ currentNews.subtitle }}"</em></p>

                <div v-if="showFullText">
                  <br />
                  <p v-html="formatText(currentNews.content)"></p>
                </div>

                <div class="buttons-container" v-if="!isDesktop">
                  <button class="read-more-button" @click="toggleShowMore">
                    {{ showMore ? 'LÄS MINDRE' : 'LÄS MER' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextShow",
  data() {
    return {
      news: [],
      currentNewsIndex: 0,
      showMore: false,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    currentNews() {
      return this.news[this.currentNewsIndex] || {};
    },
    isDesktop() {
      return this.windowWidth >= 900;
    },
    showFullText() {
      return this.isDesktop || this.showMore;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
    fetch("/data-news.json")
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
      })
      .catch((err) => console.error("Error fetching news:", err));
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },
    formatText(text) {
      if (!text) return "";
      return text.replace(
        /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
        '<a href="$2" target="_blank">$1</a>'
      );
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

<style scoped>
/* Subtitle styling */
.subtitle { font-size: 18px; }

/* Story text container */
.story-container { width: 100%; }
.story-container p { text-align: justify; }

/* Links */
a {
  font-weight: 400;
  color: var(--primary-color) !important;
  text-decoration: none;
}
a:hover { text-decoration: underline; }

/* Card content */
.picture-text-container {
  width: 100%;
  display: flex;
  font-size: 14px;
  flex-direction: column;
}

/* Container */
.scener-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 923px;
  margin: 0 auto 62px auto;
}

/* Cards */
.cards {
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}
.cards-container {
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
}

/* Single card */
.card { display: flex; flex-direction: column; gap: 12px; text-align: left; }

/* Event image */
.card-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

/* Heading */
h2 {
  font-family: var(--font-main);
  color: var(--primary-color);
  margin-bottom: 12px;
  margin-top: 0;
  text-align: left;
}

/* Buttons */
.buttons-container {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.read-more-button {
  border-radius: 6px;
  border: none;
  color: var(--primary-color);
  background: #fafafa;
  font-weight: 600;
  padding: 8px 12px;
  cursor: pointer;
}
.read-more-button:hover { text-decoration: underline; }

/* Paragraph styling */
.picture-text-container p {
  margin: 6px 0;
  font-family: var(--font-secondary);
  line-height: 25px;
  color: #71717A;
}
.picture-text-container p strong {
  font-size: 18px;
  color: var(--secondary-color);
}

/* Media Queries */
@media (min-width: 700px) {
  .scener-container { width: 92%; }
}

@media (min-width: 900px) {
  .cards { padding: 20px 32px; }
  .card { flex-direction: row; }
  .card-image img {
    width: 200px;
    height: auto;
    flex-shrink: 0;
  }
  .picture-text-container { margin-left: 16px; }
}

@media (min-width: 1400px) {
  .scener-container { margin: 0 auto 50px auto; }
}
</style>
