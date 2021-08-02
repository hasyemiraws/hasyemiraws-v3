<template>
  <div class="layout-wrapper mx-7 md:mx-20 xl:mx-auto">
      <transition
        mode="out-in"
        appear
        enter-active-class="animate__animated animate__fadeIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div class="main" :key="$i18n.locale">
          <slot />
      </div>
      </transition>
  </div>
</template>
<script>
export default {
  data() {
   return {
     jsonld:  {
       "@type":"WebSite",
       "url":"https://hasyemiraws.com/",
       "name":"Hasyemi Rafsanjani Asyari",
       "author":
        {
          "@type":"Person",
          "name":"Hasyemi Rafsanjani Asyari"
        },
        "description":"High Functional Introvert. Full Time Learner. Part time stalker.",
        "headline":"journal of a high functional introvert.",
        "sameAs":[
          "https://twitter.com/hasyemiraws",
          "https://www.facebook.com/hasyemi.rafsanjani",
          "https://instagram.com/hasyemiraws",
          "https://codepen.io/hasyemiraws",
          "https://www.linkedin.com/in/hasyemirafsanjani",
          "https://plus.google.com/+hasyemirafsanjaniasyari",
          "https://github.com/hasyemiraws",
          "https://www.youtube.com/hasyemiraws"
        ],
        "publisher":
          {
            "@type":"Organization",
            "logo":{
              "@type":"ImageObject",
              "url":"https://hasyemiraws.com/assets/static/hraws-favicon.ac8d93a.90497532acd41cd5a968e3b1f2196d2a.png"
              },
              "name":"Hasyemi Rafsanjani Asyari"
            },
          "@context":"https://schema.org"
      }
   }
 },
 metaInfo() {
   return {
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.main {
  padding-top: 40px;
}

.layout-wrapper {
  max-width: 980px;
  height: 100%;
}

@media screen and (min-width: 640px) {
  .main {
    padding-top: 80px;
  }
}
</style>
