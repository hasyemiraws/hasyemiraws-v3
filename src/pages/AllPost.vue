<template>
    <Layout>
        <div class="my-5 category-wrapper">
            <span class="category active">
                <g-link to="/all-post/">
                    All Posts
                </g-link>
            </span>
            <span class="category" v-for="cat in $page.allCategories.edges" :key="cat.node.name">
                <g-link :to="$tp(cat.node.path)">
                    {{ cat.node.name }}
                </g-link>
            </span>
        </div>   
        <h1 class="text-5xl my-10 mt-16 categories__title">ALL POSTS</h1> 
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

    allBlogPost(sortBy: "published_date", perPage: 9, page: $page, filter: {status: {eq: "published"}}) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id
                title
                title_en
                category {
                    name
                    path
                }
                published_date
                featured_image {
                    path
                }
                path
                path_en: path(to:"en")
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
        font-size: 16px;
        font-family: 'apercu medium', sans-serif;
        display: inline-block;
        border: 2px solid #202020;
        color: #202020;
        padding: 4px 8px;
        border-radius: 20px;
    }

    .category a {
        white-space: nowrap;
    }

    .category.active {
        background: #202020;
        color: white;
    }

    .category + .category {
        margin-left: 10px;
    }
</style>