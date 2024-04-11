<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "DefaultTemplates",
  components: {
    Navbar,
  }
}
</script>
