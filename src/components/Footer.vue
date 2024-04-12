<template>
  <footer class="footer">
    <div class="footer-content">
      <nav class="footer-nav">
        <ul>
          <li><a href="/tickets">Köp Biljett</a></li>
          <li><a href="/about">Om oss</a></li>
          <li><a href="/scenes">Scener</a></li>
        </ul>
      </nav>
      <div class="footer-policies">
        <a href="/cookie-policy">Cookie Policy</a> •
        <a href="/accessibility-statement">Accessibility Statement</a> •
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div class="footer-social">
        <a href="/instagram" aria-label="Instagram"><img src="../assets/instagram-icon.png" alt="Instagram" /></a>
        <a href="/youtube" aria-label="Youtube"><img src="../assets/youtube-icon.png" alt="Youtube" /></a>
        <a href="/facebook" aria-label="Facebook"><img src="../assets/facebook-icon.png" alt="Facebook" /></a>
      </div>
    </div>
    <div class="footer-copy">
      © 2024 Stuck On Live. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #E7492E;
  color: white;
  padding: 2rem;
  text-align: center;
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
  color: white;
  text-decoration: none;
}
.footer-policies a {
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
}
.footer-policies {
  margin-bottom: 1rem;
}
.footer-social a {
  margin: 0 0.5rem;
}
.footer-social img {
  width: 24px;
  height: 24px;
}
.footer-copy {
  font-size: 0.75rem;
  margin-top: 1rem;
}
</style>
