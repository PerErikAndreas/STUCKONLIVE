<template>
    <header>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <nav class="my-navbar">
            <span class="my-navbar-toggle" id="js-navbar-toggle">
              ≡
            </span>
            <a href="/" class="my-logo"><img class="stuckon-logo" src="../assets/STUCKONLOGO.png"></a>
            <ul class="my-main-nav" id="js-menu">
              <li>
                <a href="/About" class="my-nav-links">About</a>
              </li>
              <li>
                <a href="/PastShows" class="my-nav-links">Past Shows</a>
              </li>
              <li>
                <a async href="/Contact" class="my-nav-links">Contact</a>
              </li>
            </ul>
          </nav>
        </body>
      </html>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    mounted() {
      let mainNav = document.getElementById("js-menu");
      let navBarToggle = document.getElementById("js-navbar-toggle");
  
      navBarToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
      });
    }
  }
  </script>

<style scoped>
.stuckon-logo {
  margin-top: 14px;
    width: 102px;

}
.my-navbar{font-size:18px;}
.my-main-nav{list-style-type:none;display:none}
.my-logo{padding-bottom:6px;color:#000;font-weight:bold;text-decoration:none;}
.my-nav-links{text-decoration:none;color:#000}
.my-main-nav li{text-align:right;padding-right:15px;margin:15px auto}
.my-logo{display:inline-block;font-size:22px;margin-top:10px;margin-left:20px}
.my-navbar-toggle{position:absolute;top:10px;right:20px;cursor:pointer;color:#000;font-size:40px;}
.active{display:block; z-index: 1000;}
@media screen and (min-width:768px){
  .my-navbar{display:flex;justify-content:space-between;padding:15px;align-items:center;
}
  .my-main-nav{display:flex;margin-right:30px;flex-direction:row;justify-content:flex-end}.my-main-nav li{margin:0}.my-nav-links{margin-left:40px}.my-logo{margin-top:0;padding-bottom:11px;}.my-navbar-toggle{display:none}.my-logo:hover,.my-nav-links:hover{color:#fcc134}}
</style>