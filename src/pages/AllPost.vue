<template>
    <Layout>
        <div class="my-5 category-wrapper">
            <span class="category active">
                <g-link :to="$tp('/all-post/')">
                    All Posts
                </g-link>
            </span>
            <span class="category">
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
        return this.$seo({
            title: this.$t('tulisan'), 
            description: "Semua kategori tulisan dari hasyemiraws",
            openGraph: {
                title: `${ this.$t('tulisan') } - hasyemiraws`,
                type: 'article'
            },
            twitter: {
                title: `${ this.$t('tulisan') } - hasyemiraws`,
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
        font-family: neue-haas-unica, sans-serif
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
        font-family: neue-haas-unica, sans-serif;
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