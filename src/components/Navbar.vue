<template>
  <header>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav class="my-navbar">
          <span class="my-navbar-toggle" id="js-navbar-toggle"> ≡ </span>
          <a href="/" class="my-logo"
            ><img
              class="stuckon-logowhite"
              src="../assets/stuckon-logo-white.png" /><img
              class="stuckon-logored"
              src="../assets/stuckon-logo-red.png"
          /></a>
          <ul class="my-main-nav" id="js-menu">
            <li>
              <a href="/Om-oss" class="my-nav-links">Om oss</a>
            </li>
            <li>
              <a async href="/Kontakt" class="my-nav-links">Kontakt</a>
            </li>
          </ul>
        </nav>
      </body>
    </html>
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
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
}
.my-main-nav {
  list-style-type: none;
  display: none;
  z-index: 1000;
}
.my-logo {
  padding-bottom: 6px;
  color: #e7492e;
  font-weight: bold;
  text-decoration: none;
}
.my-nav-links {
  text-decoration: none;
  color: #ffffff;
}
.my-main-nav li {
  text-align: right;
  padding-right: 0px;
  margin: 15px auto;
}
.my-logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
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
  z-index: 1000;
  position: relative;
}

@media screen and (min-width: 700px) {
  .my-navbar {
    display: flex;
    justify-content: space-between;
    padding: 22px 10px  0 20px;
  }
  .my-main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
  .my-main-nav li {
    margin: 0;
  }
  .my-nav-links {
    margin-left: 40px;
  }
  .my-logo {
    margin-top: 0;
    padding-bottom: 11px;
  }
  .my-navbar-toggle {
    display: none;
  }
  .my-logo:hover,
  .my-nav-links:hover {
    color: #982815;
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
@media (min-width: 1075px) { /* Target screens larger than 1024px */
  .my-navbar {
    margin: 0 auto; /* Auto margins to horizontally center the #app element */
    padding: 15px 10px 0 50px;

  }
}
</style>
