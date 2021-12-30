<template>
  <Layout>
    <div>
        <h1 class="text-3xl mt-16 page-title">2021 Reading Wrap Up</h1> 
    </div>
  </Layout>
</template>

<page-query>
query {
  allCategories {
      edges {
          node {
              name
              slug
              path
          }
      }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return this.$seo({
        title: "2021 Reading Wrap Up", 
        description: "2021 Reading Wrap Up",
        openGraph: {
            title: `2021 Reading Wrap Up`,
            type: 'article'
        },
        twitter: {
            title: `2021 Reading Wrap Up`,
            type: 'summary'
        },
        script: [
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-1QF3XWFT3G',
                async: true
            },
            {
                innerHTML: `window.dataLayer = window.dataLayer || [];` +
                    `function gtag(){dataLayer.push(arguments);}` +
                    `gtag('js', new Date());` +
                    `gtag('config', 'G-1QF3XWFT3G');`
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href: "https://use.typekit.net/npd1ibg.css"
            },
            {
                rel: "canonical",
                href: `https://hasyemiraws.com/${this.$route.fullPath}`
            },
            {
                rel: "stylesheet",
                href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
                integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
                crossorigin: "anonymous"
            }
        ]
    })
  }
}
</script>

<style scoped>
    .page-title {
      font-family: neue-haas-unica, sans-serif;
      letter-spacing: 1.5px;
    }
</style>