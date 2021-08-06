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
    allCategories(filter: {name: {ne: "anotasi daily"}}) {
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
        return {
            title: "All posts"
        }
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
        font-family: acumin-pro-wide, sans-serif
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