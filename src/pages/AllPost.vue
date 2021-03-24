<template>
    <Layout>
        <div class="my-5">
            <span class="category active">
                <g-link to="/all-post/">
                    All Posts
                </g-link>
            </span>
            <span class="category" v-for="cat in $page.allCategories.edges" :key="cat.node.name">
                <g-link :to="cat.node.path">
                    {{ cat.node.name }}
                </g-link>
            </span>
        </div>   
        <h1 class="text-5xl my-10">ALL POSTS</h1> 
        <section>
            <BlogList :pages="$page.allBlogPost.edges" :show-more-stories="false" />
            <Pager class="categories__navigation" :info="$page.allBlogPost.pageInfo"/>
        </section>
    </Layout>
</template>

<page-query>
query($page: Int) {
    allCategories {
        edges {
            node {
                name
                slug
                path
            }
        }
    }

    allBlogPost(sortBy: "published_date", perPage: 9, page: $page) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id
                title
                category {
                display
                }
                description
                published_date
                featured_image {
                path
                }
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
    updated() {
        new LazyLoad({});
    },
    mounted() {
        new LazyLoad({});
    }
}
</script>

<style>
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
    .category {
        font-size: 16px;
        font-family: 'apercu medium', sans-serif;
        display: inline-block;
        border: 2px solid #202020;
        color: #202020;
        padding: 4px 8px;
        border-radius: 20px;
    }

    .category.active {
        background: #202020;
        color: white;
    }

    .category + .category {
        margin-left: 10px;
    }
</style>