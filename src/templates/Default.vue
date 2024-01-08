<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: "DefaultTemplates",
  components: {
    Header,
  }
}
</script>
