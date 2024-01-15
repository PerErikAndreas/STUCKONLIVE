<template>
  <div>
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: "DefaultTemplates",
  components: {
    HeaderComponent,
  }
}
</script>
