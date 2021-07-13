<template>
  <Layout>
    <h5 class="text-3xl my-10">Currently Reading</h5> 

    <transition name="fade">
      <ul class="mt-2" v-if="books.length > 0">
        <li v-for="book in books" :key="book.id" class="book-item">
          <span>{{ book.properties.Book.title[0].text.content }}</span>
        </li>
      </ul>
    </transition>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Currently Reading'
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

  .book-item span {
    border-bottom: 2px solid #202020;
  }
</style>