<template>
  <Layout>
    <h5 class="text-2xl mb-5">Currently Reading</h5> 

    <transition name="fade">
      <ul class="mt-2" v-if="books.length > 0">
        <li v-for="book in books" :key="book.id" class="book-item">
          <img class="book-thumb" :src="book.properties.Cover.url"/>
          <div>
            <span class="book-name">{{ book.properties.Book.title[0].text.content }}</span>
            <ul class="book-format" v-if="book.properties.Format.multi_select.length > 0">
              <li class="book-format-tag" :key="format.name" v-for="format in book.properties.Format.multi_select" :style="{backgroundColor: format.color, borderColor: format.color}">{{ format.name }}</li>
            </ul>
            <div class="book-progress">
              <span :style="{width: (book.properties['Last Progress [Percent]'].rollup.number ? `${book.properties['Last Progress [Percent]'].rollup.number}px` : 'Opx')}" class="bar"></span></div>
          </div>
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
    display: flex;
    margin-top: 5px;
  }

  .book-progress {
    display: inline-block;
    max-width: 125px;
    margin-top: 5px;
    width: 100%;
    height: 15px;
    border: 1px solid #202020;
  }

  .book-progress .bar {
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