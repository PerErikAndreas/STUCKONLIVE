<template>
  <div>
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: "DefaultTemplates",
  components: {
    HeaderComponent,
  }
}
</script>
