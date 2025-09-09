<template>
  <header>
    <nav class="my-navbar">
      <span class="my-navbar-toggle" id="js-navbar-toggle" aria-label="Toggle navigation"> ≡ </span>
      <a href="https://www.stuckon.se" class="my-logo" aria-label="Stuckon Logo">
        <img class="stuckon-logowhite" :src="stuckonLogoWhite" alt="Stuckon Logo White" aria-label="Stuckon Logo" loading="lazy">
        <img class="stuckon-logored" :src="stuckonLogoRed" alt="Stuckon Logo Red" aria-hidden="true" loading="lazy">
      </a>
      <ul class="my-main-nav" id="js-menu">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="my-nav-links">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      stuckonLogoWhite: require('../assets/stuckon-logo-white.png'),
      stuckonLogoRed: require('../assets/stuckon-logo-red.png'),
      navLinks: [
        { text: 'Hem', href: '/' },
        { text: 'Kontakt/Info', href: '/Kontakt' },
        { text: 'Shop', href: '/Shop' }
      ]
    };
  },
  mounted() {
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from propagating to the document
      mainNav.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (!mainNav.contains(event.target) && !navBarToggle.contains(event.target)) {
        mainNav.classList.remove("active");
      }
    });
  }
};
</script>

<style scoped>
.stuckon-logowhite,
.stuckon-logored {
  width: auto;
  margin-top: 20px;
  height: 25px; /* Adjust based on your navbar height */
}

.stuckon-logored {
  display: none;
}

.my-navbar {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
}

.my-main-nav {
  list-style-type: none;
  display: none;
  position: absolute;
  margin-right: 20px;
  top: 45px;
  right: 0;
  background: var(--background-color);
  border-radius: 12px 0px 12px 12px;
  z-index: 1000;
}

.my-nav-links {
  text-decoration: none;
  color: var(--primary-color);
  font-family: var(--font-main);
  font-size: 22px;
  font-weight: 600;
}

.my-main-nav li {
  text-align: right;
  padding-right: 0px;
  margin: 15px auto;
}

.my-logo {
  display: inline-block;
  font-family: var(--font-main);
  font-size: 21px;
  margin-top: 10px;
  margin-left: 20px;
}

.my-logo:hover {
  transform: scale(1.05);
}

.my-navbar-toggle {
  position: absolute;
  top: 22px;
  right: 20px;
  cursor: pointer;
  color: var(--background-color);
  font-size: 40px;
}

.active {
  display: flex;
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
}

@media screen and (min-width: 700px) {
  .my-navbar {
    display: flex;
    justify-content: space-between;
    padding: 22px 10px 0 20px;
  }

  .my-main-nav {
    position: absolute;
    top: 16px;
    right: 0;
    background: transparent;
    border-radius: 12px 12px 12px 12px;
    z-index: 1000;
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  .my-main-nav li {
    margin: 0;
  }

  .my-nav-links {
    margin-right: 20px;
    text-decoration: none;
    color: var(--background-color);
  }

  .my-logo {
    margin-top: 0;
    padding-bottom: 11px;
  }

  .my-navbar-toggle {
    display: none;
  }

  .my-nav-links:hover {
    text-decoration: underline;
  }

  .stuckon-logowhite {
    display: none;
    width: auto;
    margin-top: 15px;
    height: 32px;
  }

  .stuckon-logored {
    display: inline;
    width: auto;
    margin-top: 15px;
    height: 32px;
  }
}

@media (min-width: 1400px) {
  .my-navbar {
    margin: 0 auto;
    padding: 22px 10px 0 20px;
  }

  .my-main-nav {
    top: 12px;
    background: transparent;
  }

  .my-nav-links {
    color: var(--primary-color);
  }
}

@media (min-width: 1400px) and (max-width: 1540px) {
  .my-main-nav {
    flex-direction: column;
    top: 7px;
  }
}
</style>
