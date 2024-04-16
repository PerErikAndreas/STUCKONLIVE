<template>
    <div class="instagram-embed">
      <blockquote class="instagram-media" 
        :data-instgrm-permalink="permalink" 
        data-instgrm-version="14" 
        style="background:#FFF; border:0; border-radius:3px; 
               box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);
               margin: 1px; max-width:340px; min-width:300px; padding:0;
               width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);
               height: 350px;"> <!-- Adjust the height here -->
      </blockquote>
    </div>
  </template>

<script>
export default {
  name: 'InstagramEmbed',
  props: {
    permalink: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.loadInstagramScript();
  },
  methods: {
    loadInstagramScript() {
      if (!window.instgrm) {
        const s = document.createElement('script');
        s.async = true;
        s.src = '//www.instagram.com/embed.js';
        s.onload = () => {
          window.instgrm.Embeds.process();
        };
        document.body.appendChild(s);
      } else {
        window.instgrm.Embeds.process();
      }
    }
  }
}
</script>
