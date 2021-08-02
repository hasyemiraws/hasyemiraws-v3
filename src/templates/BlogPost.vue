<template>
    <Layout>
        <section class="post--section content--section">  
            <div class="container container__post mt-10 md:mt-20 max-w-2xl mx-auto">
                
                <div>
                    <span class="article--category">
                        <g-link :to="$tp($page.blogPost.category.path)">
                            {{ $page.blogPost.category.name | lowercase }}
                        </g-link>
                    </span>
                </div>
                <h2 class="article--title text-lg md:text-3xl">{{ this.getAttributeLang('title') }}</h2>
                <span class="article--date">{{ $page.blogPost.published_date }}</span>

                <div class="article--featured-wrap mt-10" :style="{backgroundImage: `url(${$page.blogPost.featured_image.path})`}"></div>

                <article class="article--post my-10">
                
                    <div class="article--post-content">
                        <div class="ads top">
                            <ins class="adsbygoogle"
                                style="display:block; text-align:center;"
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-9523208256804448"
                                data-ad-slot="1585355662"></ins>
                        </div>
                        
                        <vue-markdown :source="this.getAttributeLang('content')"></vue-markdown>

                        <div class="ads bottom">
                            <ins class="adsbygoogle"
                                style="display:block; text-align:center;"
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-9523208256804448"
                                data-ad-slot="1393783976"></ins>
                        </div>
                    </div>

                    <div class="article--comments mt-10">
                        <Disqus
                            shortname="hasyemiraws"
                            :identifier="getAttributeLang('title')"/>
                    </div>

                </article>
            </div>
            </section>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
    allCategories(filter: {name: {ne: "anotasi daily"}}) {
        edges {
            node {
                name
                slug
                path
            }
        }
    }

    blogPost(id: $id) {
        title
        title_en
        description
        description_en
        content
        content_en
        author
        category {
            name
            path
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
        return this.$seo({
            title: this.getAttributeLang('title'), 
            description: this.getAttributeLang('description'),
            openGraph: {
                title: this.getAttributeLang('title'),
                description: this.getAttributeLang('description'),
                type: 'article'
            },
            twitter: {
                title: this.getAttributeLang('title'),
                description: this.getAttributeLang('description'),
                type: 'summary'
            },
            script: [
                { innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' },
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
    computed: {
        currentLang() {
            return (this.$context.locale == 'en-us') ? 'en' : 'id';
        },
        jsonld() {
            return {
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
                "description":this.getAttributeLang('description'),
                "headline":this.getAttributeLang('title'),
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
        }
    },
    methods: {
        getAttributeLang(key) {
            if (this.currentLang == 'en') {
                if (this.$page.blogPost[`${key}_en`] != '') return this.$page.blogPost[`${key}_en`];
            } 

            return this.$page.blogPost[key];
        },
    },
    mounted() {
        new LazyLoad({});

        if (typeof adsbygoogle !== "undefined") {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    },
    created() {
        const fullPathArr = this.$route.fullPath.split('/'); 
        if (fullPathArr[1] == 'en') {
            this.$i18n.locale = 'en-us'
            this.$context.locale = 'en-us';
            this.$route.meta.locale = 'en-us';
        }
    },
    components: {
        VueMarkdown
    }
}
</script>

<style scoped>
    .ads.top {
        margin-bottom: 15px;   
    }

    .ads.bottom {
        margin-top: 15px;   
    }

    .article--date {
        font-family: 'acumin-pro', sans-serif;
        font-size: 14px;
    }

    .article--category {
        font-size: 12px;
        font-family: 'acumin-pro', sans-serif;
        display: inline-block;
        background: #202020;
        color: white;
        padding: 4px 8px;
        border-radius: 15px;
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
    .article--audio {
        width: 100%;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    .article--post-content a {
        border-bottom: 1px dashed #202020;
    }

    .article--post p {
        font-family: basic-sans, sans-serif;
        font-style: normal;
        font-size: 1.1em;
        line-height: 1.75em;
    }

    .article--post p + p {
        margin-top: 25px;
    }

    .article--post figure {
        margin-top: 10px;
    }

    .article--post figure img {
        margin: 0 auto;
    }

    .article--post figure figcaption {
        margin-top: 5px;
        text-align: center;
    }
</style>