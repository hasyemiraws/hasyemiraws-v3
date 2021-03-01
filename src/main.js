require('~/assets/main.scss')
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/npd1ibg.css"
  })
}
