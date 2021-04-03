<template>
    <Layout>
        <section class="post--section content--section">  
            <div class="container container__post mt-20 max-w-2xl mx-auto">
                
                <div>
                    <span class="article--category">
                        <a href="#">
                            {{ $page.blogPost.category.name | lowercase }}
                        </a>
                    </span>
                </div>
                <h2 class="article--title text-lg md:text-3xl">{{ $page.blogPost.title }}</h2>
                <span class="article--date">{{ $page.blogPost.published_date }}</span>

                <div class="article--featured-wrap mt-10" :style="{backgroundImage: `url(${$page.blogPost.featured_image.path})`}"></div>

                <article class="article--post my-10">
                
                    <div class="article--post-content">
                        <vue-markdown :source="$page.blogPost.content"></vue-markdown>
                    </div>

                    <div class="article--comments mt-10">
                        <Disqus
                            shortname="hasyemiraws"
                            :identifier="$page.blogPost.title"/>
                    </div>

                </article>
            </div>
            </section>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    description
    content
    author
    category {
        name
    }
    published_date
    featured_image {
        path
    }
  }
}
</page-query>

<script>
import LazyLoad from 'vanilla-lazyload'
import VueMarkdown from 'vue-markdown'
export default {
    metaInfo () {
        const jsonld = {
            "@type":"BlogPosting",
            "image":this.$page.blogPost.featured_image.path,
            "url":`https://hasyemiraws.com/${this.$route.fullPath}`,
            "mainEntityOfPage":{
                "@type":"WebPage",
                "@id":`https://hasyemiraws.com/${this.$route.fullPath}`
            },
            "author":{
                "@type":"Person",
                "name":"Hasyemi Rafsanjani Asyari"
            },
            "description":this.$page.blogPost.description,
            "headline":this.$page.blogPost.title,
            "dateModified":this.$page.blogPost.published_date,
            "datePublished":this.$page.blogPost.published_date,
            "publisher":{
                "@type":"Organization",
                "logo":{
                    "@type":"ImageObject",
                    "url":"https://hasyemiraws.com/assets/static/hraws-favicon.ac8d93a.90497532acd41cd5a968e3b1f2196d2a.png"
                },
                "name":"Hasyemi Rafsanjani Asyari"
            },
            "@context":"https://schema.org"
        }

        return this.$seo({
            title: this.$page.blogPost.title, 
            description: this.$page.blogPost.description,
            openGraph: {
                title: this.$page.blogPost.title,
                type: 'article'
            },
            twitter: {
                title: this.$page.blogPost.title,
                type: 'summary'
            },
        }), {
            script: [
                { innerHTML: JSON.stringify(jsonld), type: 'application/ld+json' }
            ]
        }, {
            title: this.$page.blogPost.title
        }
    },
    mounted() {
        new LazyLoad({});
    },
    components: {
        VueMarkdown
    }
}
</script>

<style scoped>
    .article--date {
        font-family: 'apercu medium', sans-serif;
        font-size: 14px;
    }

    .article--category {
        font-size: 13px;
        font-family: 'apercu medium', sans-serif;
        display: inline-block;
        background: #202020;
        color: white;
        padding: 4px 8px;
        border-radius: 10px;
    }

    .article--category + .article--category {
        margin-left: 5px;
    }

    .article--title {
        font-weight: 700;
        letter-spacing: 1px;
        font-family: acumin-pro-semi-condensed, sans-serif;
    }

    .article--featured-wrap {
        width: 100vw;
        margin-left: -moz-calc(50% - 50vw);
        margin-right: -moz-calc(50% - 50vw);
        margin-left: -webkit-calc(50% - 50vw);
        margin-right: -webkit-calc(50% - 50vw);
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        height: 60vh;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-attachment: fixed;
    }

    @media (max-width: 480px) {
        .article--featured-wrap {
            background-attachment: initial;
        }
    }
</style>

<style>
    .article--post--content a {
        border-bottom: 1px dashed #202020;
    }

    .article--post p {
        font-family: acumin-pro, sans-serif;
        font-style: normal;
        font-size: 17px;
        line-height: 1.75em;
    }

    .article--post p + p {
        margin-top: 25px;
    }

    .article--post figure {
        margin-top: 10px;
    }

    .article--post figure figcaption {
        margin-top: 5px;
        text-align: center;
    }
</style>