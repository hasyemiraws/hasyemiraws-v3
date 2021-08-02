require('~/assets/main.scss')
import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import 'animate.css';

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)

  Vue.filter('lowercase', function (value) {
    if (!value) return ''
    return value.toLowerCase()
  })

  Vue.filter('uppercase', function (value) {
    if (!value) return ''
    return value.toUpperCase()
  })

  head.meta.push(
    {
      name: 'keywords',
      content: 'hasyemiraws, blog, jurnal highly functioning introvert'
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
    { name: "twitter:creator", content: "Hasyemi Rafsanjani Asyari" },
    { name: "robots", content: "index, follow" },
    { name: "google-site-verification", content: "JORh0NC0333783L9OQ8J5Fs-JM21GF3NcnP7lekDtHw" }
  )

  head.link.push(
    {
      rel: "stylesheet",
      href: "https://use.typekit.net/npd1ibg.css"
    }
  )

  head.link.push(
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
      integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
      crossorigin: "anonymous"
    }
  )

  head.script.push({
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    async: true
  })

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=G-1QF3XWFT3G',
    async: true
  })

  head.script.push({
   innerHTML: `window.dataLayer = window.dataLayer || [];` +
     `function gtag(){dataLayer.push(arguments);}` +
     `gtag('js', new Date());` +
     `gtag('config', 'G-1QF3XWFT3G');`
  })
  
  appOptions.i18n.setLocaleMessage('in-id', require('./locales/in-id.json'))
  appOptions.i18n.setLocaleMessage('en-us', require('./locales/en-us.json'))
}
