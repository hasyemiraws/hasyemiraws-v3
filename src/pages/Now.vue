<template>
  <Layout>
    <div>
        <h1 class="text-3xl mt-16 page-title">WHAT I'VE BEEN UP TO & DOING</h1> 
        <span class="text-sm">Update terakhir: Agustus, 07 2021</span>
        <p class="text-gray-500 text-base mt-5">Laman ini dibuat terinspirasi dari konsep laman <a href="https://nownownow.com/about" target="_blank">now</a> dari Derek Shivers.


        <div class="mt-5">
            <ul>
                <li>Masih bekerja dan sedang menetap di Malaysia untuk sebuah perusahaan e-commerce dengan role sebagai Senior Front-end Developer dengan spesialisasi slipcover sofa <a href="https://comfort-works.com" target="_blank">Comfort Works</a></li>
                <li>Kadang kala membuat konten buku atau video esai lainnya dalam format video di <a target="_blank" href="https://www.youtube.com/channel/UCzvyjUsomu2sdTbuBJHA9ag">Youtube</a>, audio podcast atau tulisan di blog ini.</li>
                <li>Perlahan-lahan mulai kembali membangun dan mengelola web blog hasyemiraws ini</li>
                <li>Buku yang sedang saya baca bisa dilihat di tautan ini: <g-link :to="$tp('/currently-reading/')">{{ $t('sedang baca') }}</g-link> </li>
            </ul>
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
    .page-title {
      font-family: acumin-pro-wide, sans-serif;
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

    ul {
        margin-left: 25px;
    }

    ul li {
        list-style: disc;
        font-size: 18px;
        margin-bottom: 10px;
    }

    a {
        border-bottom: 1px dashed #202020;
    }
</style>