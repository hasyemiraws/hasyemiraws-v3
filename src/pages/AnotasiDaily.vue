<template>
    <Layout>
        <div class="my-5 category-wrapper">
            <span class="category">
                <g-link :to="$tp('/all-post/')">
                    All Posts
                </g-link>
            </span>
            <span class="category active">
                <g-link :to="$tp('/anotasi-daily/')">
                    anotasi daily
                </g-link>
            </span>
            <span class="category" v-for="cat in $page.allCategories.edges" :key="cat.node.name">
                <g-link :to="$tp(cat.node.path)">
                    {{ cat.node.name }}
                </g-link>
            </span>
        </div>   
        <h1 class="text-5xl my-10 mt-16 categories__title">anotasi daily</h1> 
        <ul>
        <li class="mb-10 pb-3 border-b-2 border-gray" v-for="anotasi in $page.allAnotasiDaily.edges" :key="anotasi.id">
            <g-link :to="$tp(anotasi.node.path)" class="flex" style="font-family: acumin-pro-wide, sans-serif">
              <span style="flex-basis: 30px; max-width: 30px;" class="mr-10 text-4xl text-gray-500">{{ anotasi.node.number }}</span>
              <div>
                <h3 class="text-3xl uppercase">{{ anotasi.node.title }} </h3>
                <span class="post--date">{{ new Date(anotasi.node.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>          
              </div>
            </g-link>
          </li>
        </ul>
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

    allAnotasiDaily {
    edges {
      node {
        title
        number
        date
        path
      }
    }
  }
}
</page-query>

<script>
import LazyLoad from 'vanilla-lazyload'
import BlogList from "../components/BlogList";
import { Pager } from 'gridsome'

export default {
    components: {BlogList, Pager},
    metaInfo () {
        return this.$seo({
            title: `anotasi daily`, 
            openGraph: {
                title: `anotasi daily - hasyemiraws`, 
                type: 'article'
            },
            twitter: {
                title: `anotasi daily - hasyemiraws`, 
                type: 'summary'
            },
            script: [
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                    async: true
                },
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
    updated() {
        new LazyLoad({});
    },
    mounted() {
        new LazyLoad({});
    }
}
</script>

<style>
    .categories__title {
        font-family: acumin-pro-wide, sans-serif;
        font-weight: 700;
        letter-spacing: 1.5px;
        font-size: 3.5em;
    }
    
    .categories__navigation {
        text-align: right;
        font-size: 1.7em;
    }

    .categories__navigation a {
        margin-right: 10px;
    }

    .categories__navigation a.active {
        color: #939393;
    }
</style>

<style scoped>
    .category-wrapper {
        display: flex;
        align-items: flex-start;
        overflow: auto;
    }

    .category {
        font-size: 13px;
        padding: 4px 8px;
        border-radius: 15px;
        font-family: 'acumin-pro-wide', sans-serif;
        display: inline-block;
        text-transform: lowercase;
        border: 2px solid #202020;
        color: #202020;
        padding: 5px 8px;
    }

    .category a {
        white-space: nowrap;
    }

    .category.active {
        background: #202020;
        color: white;
    }

    .category + .category {
        margin-left: 15px;
    }
</style>