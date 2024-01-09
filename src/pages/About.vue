<template>
    <div class="main">
      <About />
    </div>
  </template>
  
  <script>
  import About from '@/components/About'
  
  export default {
    name: "Home",
    components: {
      About
    }
  }
  </script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```


  