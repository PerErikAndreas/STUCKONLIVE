<template>
    <div class="instagram-embed">
      <blockquote class="instagram-media" 
        :data-instgrm-permalink="permalink" 
        data-instgrm-version="14" 
        style="background:#FFF; border:1px solid black; border-radius:12px; 
         box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); transform: scale(0.9);
         margin: 1px; max-width:290px; min-width:280px; padding:0;
         width:calc(90% - 2px);
         height: 340px;">
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
