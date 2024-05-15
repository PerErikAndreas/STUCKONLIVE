<template>
  <footer class="footer-container">
    <div class="footer-content">
      <nav class="footer-nav">
        <ul>
          <li><a href="/Kontakt">Kontakt/Info</a></li>
        </ul>
      </nav>
      <div class="footer-policies">
        <a href="/Cookie-Policy">Cookie Policy</a> •
        <a href="/Privacy-Policy">Privacy Policy</a>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/stuckonlive/" aria-label="Instagram">
          <img :src="instagramIcon" alt="Instagram" loading="lazy" />
        </a>
        <a href="https://open.spotify.com/playlist/2M6Ea4H70MDyu970RII008?si=Un3DR2bkQ1i3-h8_PyuClw&nd=1&dlsi=1c1ff4dcabcd408a" aria-label="Spotify">
          <img :src="spotifyIcon" alt="Spotify" loading="lazy" />
        </a>
        <a href="https://www.facebook.com/stuckonlive" aria-label="Facebook">
          <img :src="facebookIcon" alt="Facebook" loading="lazy" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      instagramIcon: require('../assets/instagram-icon.png'),
      spotifyIcon: require('../assets/spotify.png'),
      facebookIcon: require('../assets/facebook-icon.png'),
    };
  },
};
</script>

<style scoped>
.footer-container {
  background-color: transparent;
  color: var(--background-color);
  padding: 2rem;
  text-align: center;
  margin-bottom: 30px;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.footer-nav a {
  color: var(--background-color);
  text-decoration: none;
  font-family: var(--font-main);
  font-size: 22px;
}
.footer-policies a {
  color: var(--background-color);
  text-decoration: none;
  font-size: 16px;
}
.footer-policies {
  margin-bottom: 1rem;
}
.footer-social a {
  margin: 0 0.5rem;
}
.footer-social img {
  width: 30px;
  height: 30px;
}
.footer-copy {
  font-size: 0.75rem;
  margin-top: 1rem;
}
</style>
