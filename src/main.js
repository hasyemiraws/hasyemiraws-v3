require('~/assets/main.scss')
import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/npd1ibg.css"
  })
}
