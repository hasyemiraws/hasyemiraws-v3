require('~/assets/main.scss')
import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)

  Vue.filter('lowercase', function (value) {
    if (!value) return ''
    return value.toLowerCase()
  })

  head.link.push(
    {
      rel: "stylesheet",
      href: "https://use.typekit.net/npd1ibg.css"
    },

    {
      name: 'author',
      content: "Hasyemi Rafsanjani Asyari"
    },
    {
        key: 'description',
        name: 'description',
        content: "High Functional Introvert. Full Time Learner. Part time stalker."
    },

    { key:"og:type",  property: "og:type", content: 'article' },
    { key:"og:url",  property: "og:url", content: 'https://hasyemiraws.com' },
    { key:"og:description",  property: "og:description", content: "High Functional Introvert. Full Time Learner. Part time stalker." },
    { property: "og:site_name", content: "hasyemiraws" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@hasyemiraws" },
    { name: "twitter:creator", content: "Hasyemi Rafsanjani Asyari" }
  )
}
