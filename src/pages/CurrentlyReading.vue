<template>
  <Layout>
    <div class="flex">
      <div class="">
        <h1 class="text-5xl mt-16 page-title">{{ $t('sedang baca') }}</h1> 
      </div>
      <div class="">
        <transition name="fade">
      <ul class="mt-2" v-if="books.length > 0">
        <li v-for="book in books" :key="book.id" class="book-item">
          <img v-if="book.properties.Cover" class="book-thumb" :src="book.properties.Cover.url"/>
          <div>
            <div style="margin-bottom: 3px">
              <span class="book-name">{{ book.properties.Book.title[0].text.content }}</span>
              <ul class="book-format" v-if="book.properties.Format.multi_select.length > 0">
                <li class="book-format-tag" :key="format.name" v-for="format in book.properties.Format.multi_select" :style="{backgroundColor: format.color, borderColor: format.color}">{{ format.name }}</li>
              </ul>
            </div>
            <div class="book-progress">
              <div class="outer-bar">
                <span :style="{width: (book.properties['Last Progress [Percent]'] && book.properties['Last Progress [Percent]'].rollup.number ? `${book.properties['Last Progress [Percent]'].rollup.number}px` : 'Opx')}" class="bar"></span>
              </div>
              <span class="progress-number">{{ (book.properties['Last Progress [Percent]'] && book.properties['Last Progress [Percent]'].rollup.number ? `${book.properties['Last Progress [Percent]'].rollup.number}%` : 'O%') }}</span>
            </div>
          </div>
        </li>
      </ul>
    </transition>
      </div>
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
import axios from 'axios'

export default {
  metaInfo () {
    return this.$seo({
        title: "Currently Reading", 
        description: "Buku yang sedang saat saya baca",
        openGraph: {
            title: `Currently Reading - hasyemiraws`,
            type: 'article'
        },
        twitter: {
            title: `Currently Reading - hasyemiraws`,
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
  },
  data() {
      return {
          books: []
      }
  },
  async mounted () {
    try {
      const results = await axios.get(
        '/.netlify/functions/notion-api/'
      )

      this.books = results.data.results
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
  .book-item {
    display: flex;
    align-items: center;
  }

  .book-thumb {
    max-width: 100px;
    max-height: 110px;
    width: 100%;
    object-fit: contain;
  }

  .book-item + .book-item {
    margin-top: 20px;
  }

  .book-item > div {
    margin-left: 10px;
  }

  .book-item .book-name {
    border-bottom: 2px solid #202020;
  }

  .book-format {
    display: inline-flex;
    margin-left: 5px;
    margin-top: 5px;
  }

  .book-progress {
    display: flex;
    align-items: center;
  }

  .progress-number {
    font-size: 11px;
    margin-left: 2px;
  }

  .outer-bar {
    display: inline-block;
    max-width: 125px;
    width: 100%;
    height: 15px;
    border: 1px solid #202020;
  }

  .outer-bar .bar {
    display: block;
    width: 0;
    height: 100%;
    background: black;
    border: none;
  }

  .book-format-tag {
    color: white;
    padding: 2px 6px;
    background-color: #202020;
    border-color: #202020;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    font-size: 10px;
  }

  .book-format-tag + .book-format-tag {
    margin-left: 5px;
  }
 

  @media screen and (min-width: 640px) {
    .book-thumb {
      max-width: 115px;
    }
  }
</style>