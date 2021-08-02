<template>
  <Layout>
    <div class="text-center">
        <h1 class="text-3xl mt-10">YANG BARU DARI @hasyemiraws</h1>
        <h2 class="text-2xl">☟☟☟☟☟☟☟☟☟☟</h2> 

        <ul class="links__container mt-10">
            <li class="links__list" v-for="link in links" :key="link._id">
                <a class="links__href" :href="link.url">{{ link.label }}</a>
            </li>
        </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allCategories(filter: {name: {ne: "anotasi daily"}}) {
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
  metaInfo: {
    title: 'New Content'
  },
  data() {
      return {
          links: []
      }
  },
  async mounted () {
    try {
      const results = await axios.get(
        'https://api.hasyemiraws.com/api/collections/get/Links?token=57ab7bfaa19c4967387094169487f7'
      )

      this.links = results.data.entries
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
    .links__container {
        display: inline-block;
    }

    .links__href {
        border: 2px solid #202020;
        color: #202020;
        padding: 15px;
        background-color: white;
        display: inline-block;
        transition: all 0.3s ease-in;
    }

    .links__href:hover {
        color: white;
        background-color: #202020;
    }

    .links__list + .links__list {
        margin-top: 10px;
    }
</style>