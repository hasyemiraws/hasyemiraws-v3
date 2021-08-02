<template>
    <Layout :key="$page.categories.name">
        <div>
            <div class="my-5 category-wrapper">
                <span class="category">
                    <g-link :to="$tp('/all-post/', $context.locale, true)">
                        All Posts
                    </g-link>
                </span>
                <span class="category">
                    <g-link :to="$tp('/anotasi-daily/')">
                        anotasi daily
                    </g-link>
                </span>
                <span class="category" :class="{'active': cat.node.name == $page.categories.name}" v-for="cat in $page.allCategories.edges" :key="cat.node.name">
                    <g-link :to="$tp(cat.node.path, $context.locale, true)">
                        {{ cat.node.name }}
                    </g-link>
                </span>
            </div>   
            <h1 class="text-5xl my-10 mt-16 categories__title">{{ $page.categories.name | uppercase }}</h1> 
            <section v-if="$page.allBlogPost.edges.length > 0">
                <BlogList :pages="$page.allBlogPost.edges" :show-more-stories="false" />
                <Pager class="categories__navigation" :info="$page.allBlogPost.pageInfo"/>
            </section>
            <section v-else>
                <h1>No post yet</h1>
            </section>
        </div>
    </Layout>
</template>

<page-query>
query($page: Int, $id: ID!) {
    categories(id: $id) {
        id
        name
    }

    allCategories(filter: {name: {ne: "anotasi daily"}}) {
        edges {
            node {
                name
                slug
                path
            }
        }
    }

    allBlogPost(sortBy: "published_date", perPage: 9, page: $page, filter: {status: {eq: "published"}, category: {eq: $id}}) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
        edges {
            node {
                id
                title
                category {
                    name
                }
                description
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
    metaInfo () {
        return this.$seo({
            title: this.$page.categories.name, 
            description: this.$page.categories.name,
            openGraph: {
                title: this.$page.categories.name,
                type: 'article'
            },
            twitter: {
                title: this.$page.categories.name,
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
                    rel: "stylesheet",
                    href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
                    integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
                    crossorigin: "anonymous"
                }
            ]
        })
    },
    components: {BlogList, Pager},
    updated() {
        new LazyLoad({});
    },
    mounted() {
        new LazyLoad({});
    },
    created() {
        const fullPathArr = this.$route.fullPath.split('/'); 
        if (fullPathArr[1] == 'en') {
            this.$i18n.locale = 'en-us'
            this.$context.locale = 'en-us';
            this.$route.meta.locale = 'en-us';
        }
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