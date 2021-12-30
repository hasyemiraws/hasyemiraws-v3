<template>
  <Layout>
    <div class="flex flex-col md:flex-row mt-16">
      <div class="w-1/4">
        <h1 class=" font-medium uppercase text-5xl page-title">{{ $t('sedang baca') }}</h1> 
      </div>
      <div class="ml-0 mb-10 mt-10 md:ml-20 md:mt-0 flex-auto">

        <div>
          <transition-group name="fade">
            <template v-if="isBookLoaded">
              <div v-if="books.length > 0" key="loaded">
                <book-item 
                  v-for="book in books" :key="book.id" 
                  :cover="book.properties.Cover.url"
                  :title="book.properties.Book.title[0].text.content"
                  :author="book.properties.Author.multi_select"
                  :formats="book.properties.Format.multi_select"
                  :genres="book.properties.Genre.multi_select"
                  :progress="book.properties['Last Progress [Percent]'].rollup.number || 0"/>
              </div>
            </template>
            <template v-else>
              <book-item-skeleton key="1" />
              <book-item-skeleton key="3" />
              <book-item-skeleton key="2" />
            </template>
          </transition-group>
        </div>
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
import BookItemSkeleton from '../components/skeleton/BookItem.vue';
import BookItem from '../components/BookItem.vue';

export default {
  components: { BookItem, BookItemSkeleton },
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
          isBookLoaded: false,
          books: []
      }
  },
  async mounted () {
    try {
      const results = await axios.get(
        '/.netlify/functions/notion-api/'
      )

      this.books = results.data.results
      this.isBookLoaded = true;  
    } catch (error) {
      this.isBookLoaded = true;
      console.log(error)
    }
  }
}
</script>

<style scoped>
  .page-title {
    line-height: 1.2em;
  }
</style>