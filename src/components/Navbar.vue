<template>
  <header>
        <nav class="my-navbar">
          <span class="my-navbar-toggle" id="js-navbar-toggle" aria-label="Toggle navigation"> ≡ </span>
        <a href="/" class="my-logo" alt="Stuckon Logo White" aria-label="Stuckon Logo">
          <img class="stuckon-logowhite" src="../assets/stuckon-logo-white.png" alt="Stuckon Logo White" aria-label="Stuckon Logo">
          <img class="stuckon-logored" src="../assets/stuckon-logo-red.png" alt="Stuckon Logo Red" aria-hidden="true">
        </a>
        <ul class="my-main-nav" id="js-menu">
          <li>
            <a href="/om-oss" class="my-nav-links">Om oss</a>
          </li>
          <li>
            <a href="/kontakt" class="my-nav-links">Kontakt</a>
          </li>
        </ul>
        </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });
  },
};
</script>

<style scoped>
.stuckon-logowhite {
  width: auto;
  margin-top: 20px;
  height: 22px; /* Adjust based on your navbar height */
}
.stuckon-logored {
  display: none;
  width: auto;
  margin-top: 20px;
  height: 22px; /* Adjust based on your navbar height */
}
.my-navbar {
  position: relative; /* New positioning context for the absolute elements */
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
}

.my-main-nav {
  list-style-type: none;
  display: none; /* Initially hidden */
  position: absolute; /* Positioned absolutely */
  margin-right: 20px;
  top: 40px; /* Start just below the navbar */
  right: 0; /* Align to the left of the parent */
  background: white;
  border-radius: 12px 0px 12px 12px;
  z-index: 1000; /* Ensure it's above other content */
}
.my-logo {
  padding-bottom: 6px;
  color: #e7492e;
  font-weight: bold;
  text-decoration: none;
}
.my-nav-links {
  text-decoration: none;
  color: #e7492e;
  font-family: futura;
  font-size: 22px;

}
.my-main-nav li {
  text-align: right;
  padding-right: 0px;
  margin: 15px auto;
}
.my-logo {
  display: inline-block;
  font-family: futura;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
}

.my-main-nav li {
    margin-bottom: 5;
  }

.my-navbar-toggle {
  position: absolute;
  top: 17px;
  right: 20px;
  cursor: pointer;
  color: #ffffff;
  font-size: 40px;
}
.active {
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  gap: 20px;
}

@media screen and (min-width: 700px) {
  .my-navbar {
    display: flex;
    justify-content: space-between;
    padding: 22px 10px  0 20px;
  }

  .my-main-nav {
  position: absolute; /* Positioned absolutely */
  top: 15px; /* Start just below the navbar */
  right: 0; /* Align to the left of the parent */
  background: transparent;
  border-radius: 12px 12px 12px 12px;
  z-index: 1000; /* Ensure it's above other content */
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
    color: white;
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
    height: 22px; /* Adjust based on your navbar height */
  }
  .stuckon-logored {
    display: inline;
    width: auto;
    margin-top: 15px;
    height: 22px; /* Adjust based on your navbar height */
  }
}
@media (min-width: 1395px) { /* Target screens larger than 1024px */
  .my-navbar {
    margin: 0 auto; /* Auto margins to horizontally center the #app element */
    padding: 22px 10px 0 20px;

  }
  .my-main-nav {

  background: transparent;

}
.my-nav-links {
    color: #e7492e;
  }
  
}
</style>
