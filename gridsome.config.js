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
  siteName: 'hasyemiraws',
  siteDescription: "High Functional Introvert. Full Time Learner. Part time stalker.",
  icon: './src/hraws-favicon.png',
  plugins: [
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
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
      }
    }
  ],
  templates: {
    BlogPost: [{
      path: (node) => {
        return `/blog/${node.slug}`
      }
    }],
    Categories: [
      {
        path: (node) => {
          return `/categories/${node.slug}`
        }
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
