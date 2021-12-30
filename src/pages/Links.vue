<template>
  <Layout>
    <div>
      <h1 class="text-3xl mt-16 page-title">Konten baru</h1> 
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
  metaInfo() {
    return {
      title: 'New Content',
      link: [
        {
          rel: "canonical",
          href: `https://hasyemiraws.com/${this.$route.fullPath}`
        }
      ]
    }
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
    .page-title {
      font-family: neue-haas-unica, sans-serif;
      letter-spacing: 1.5px;
    }

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