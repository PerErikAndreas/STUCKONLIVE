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
              <img src="@/assets/posters/Svartkatt2.jpg" alt="Event" />
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
/* --- TEXT & STRUCTURE --- */
.subtitle { font-size: 18px; }
.story-container { width: 100%; }
.story-container p { text-align: left; }

a {
  font-weight: 400;
  color: var(--primary-color) !important;
  text-decoration: none;
}
a:hover { text-decoration: underline; }

/* --- LAYOUT CONTAINERS --- */
.scener-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 923px;
  margin: 52px auto 52px auto;
}

h2 {
  font-family: var(--font-main);
  color: #e7492e;
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 0.8s forwards;
  animation-delay: 0.2s;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

/* --- CARD --- */
.card {
  display: flex;
  flex-direction: row; /* Bild till vänster även på mobil */
  gap: 12px;
  text-align: left;
  align-items: center;
  flex-wrap: wrap;
}

/* --- IMAGE --- */
.card-image {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image img {
  width: 100%;
  height: auto;
  object-fit: contain; /* 🔹 Visa hela bilden utan att croppa */
  border-radius: 8px;
}

/* --- TEXT --- */
.picture-text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
}
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

/* --- BUTTONS --- */
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

/* --- RESPONSIVE --- */
@media (max-width: 899px) {
  .card {
    flex-direction: row; /* Bild till vänster även på mobil */
    gap: 10px;
    align-items: center;
  }

  .card-image {
    flex: 0 0 40%;
  }

  .card-image img {
    width: 100%;
    height: auto;
    object-fit: contain; /* 🔹 Viktigt: ingen cropping */
  }

  .picture-text-container {
    flex: 1;
  }
}

@media (min-width: 900px) {
  .cards { padding: 20px 32px; }
  .card-image {
    flex: 0 0 200px;
  }
  .card-image img {
    object-fit: cover; /* På desktop fyller den utrymmet snyggt */
  }
  .picture-text-container {
    margin-left: 16px;
  }
  .scener-container {
      margin: 0 auto 52px auto;
  }
}

@media (min-width: 1400px) {
  .scener-container { margin: 0 auto 50px auto; }
}
</style>
