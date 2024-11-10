<template>
    <div class="latest-news-container">
      <h2>NÄSTA EVENT</h2>
      <div class="news-card" v-if="latestNews">
        <div class="news-content">
          <p><strong>{{ latestNews.title }}</strong></p>
          <p class="subtitle"><em>{{ latestNews.subtitle }}</em></p>
          <p>{{ latestNews.content }}</p>
        </div>
      </div>
      <p v-else>Loading latest news...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "LatestNews",
    data() {
      return {
        latestNews: null
      };
    },
    mounted() {
      fetch('/data-news.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            this.latestNews = data[0]; // Display only the most recent item
          }
        })
        .catch(error => console.error('Error fetching latest news:', error));
    }
  };
  </script>
  
  <style scoped>
  .latest-news-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 923px;
    margin: 0 auto 62px auto;
    justify-content: start;
  }
  
  .news-card {
    background: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
  }
  
  .news-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fafafa;
    border-radius: 8px;

  }
  
  .subtitle {
    font-size: 18px;
    color: #71717A;
  }
  
  h2 {
    font-family: var(--font-main);
    color: var(--primary-color);
    margin-bottom: 15px;
    text-align: left;
  }
  </style>
  