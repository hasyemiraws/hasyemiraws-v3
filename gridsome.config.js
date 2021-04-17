const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

const path = require('path')
const { allowedNodeEnvironmentFlags } = require('process')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/*.scss'),
      ],
    })
}

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteUrl: 'https://hasyemiraws.com',
  siteName: 'hasyemiraws',
  siteDescription: "High Functional Introvert. Full Time Learner. Part time stalker.",
  icon: './src/hraws-favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {}
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-108167393-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/youtube/*.md',
        typeName: 'Youtube',
        route: '/videos/:slug'
      }
    },
    {
      use: 'gridsome-plugin-seo'
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'in-id',
          'en-us'
        ],
        pathAliases: { // path segment alias for each locales
          'in-id': 'id',
          'en-us': 'en'
        },
        fallbackLocale: 'in-id', // fallback language
        defaultLocale: 'in-id', // default language
        enablePathRewrite: true,
        enablePathGeneration: false,
        routes: require('./routes.js'),
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
      }
    }
  ],
  templates: {
    BlogPost: [
      {
        name: "default",
        path: '/blog/:slug',
        component: './src/templates/BlogPost.vue'
      },
      {
        name: 'en',
        path: (node) => {
          if (node.slug_en !== null) {
            return `/en/blog/${node.slug_en}`
          } else {
            return `/en/blog/${node.slug}`
          }
        },
        component: './src/templates/BlogPost.vue'
      }
    ],
    Categories: [
      {
        path: (node) => {
          return `/categories/${node.slug}`
        }
      },
      {
        name: 'en',
        path: (node) => {
          return `/en/categories/${node.slug}`
        },
        component: './src/templates/Categories.vue'
      }
    ]
  },
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
