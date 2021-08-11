<template>
    <Layout>
        <section class="post--section content--section">  
            <div class="container container__post mt-10 md:mt-20 max-w-2xl mx-auto">
                
                <div>
                    <span class="article--category">
                        <g-link :to="$tp('/anotasi-daily/')">
                            anotasi daily
                        </g-link>
                    </span>
                </div>
                <h2 class="article--title text-3xl">{{ $page.anotasiDaily.title }}</h2>
                <span class="article--date">{{ new Date($page.anotasiDaily.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>

                <article class="article--post my-10">
                
                    <div class="article--post-content" ref="post-content">
                        
                        <div class="ads top">
                            <ins class="adsbygoogle"
                                style="display:block; text-align:center;"
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-9523208256804448"
                                data-ad-slot="1585355662"></ins>
                        </div>

                        <vue-markdown :source="$page.anotasiDaily.content"></vue-markdown>
                    </div>

                    <div class="article--comments mt-10">
                        <Disqus
                            shortname="hasyemiraws"
                            :identifier="$page.anotasiDaily.title"/>
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

    anotasiDaily(id: $id) {
        title
        number
        content
        date
    }
}
</page-query>

<script>
import LazyLoad from 'vanilla-lazyload'
import VueMarkdown from 'vue-markdown'
export default {
    metaInfo () {
        return this.$seo({
            title: `${this.$page.anotasiDaily.title} - anotasi daily`, 
            openGraph: {
                title: `${this.$page.anotasiDaily.title} - anotasi daily - hasyemiraws`, 
                type: 'article'
            },
            twitter: {
                title: `${this.$page.anotasiDaily.title} - anotasi daily - hasyemiraws`, 
                type: 'summary'
            },
            script: [
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9523208256804448',
                    async: true,
                    crossorigin: 'anonymous'
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
    methods: {
        reloadScript(src) {
            var zScript = document.createElement('script');
            zScript.setAttribute('src',src);
            zScript.setAttribute('async',true);
            this.$refs['post-content'].appendChild(zScript);
        }
    },
    mounted() {
        new LazyLoad({});
        let zScript = this.$refs['post-content'].querySelector("z-script");
        if (zScript) {
            this.reloadScript(zScript.getAttribute('src'))
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

    .article--post-content * {
        font-family: basic-sans, sans-serif;
    }

    .article--post p {
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

    .article--post-content img {
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px
    }

    .article--post-content h2 {
        font-size: 1.7em;
    }

    .article--post-content ol, .article--post-content ul {
        list-style: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .article--post-content ol li, .article--post-content ul li {
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    .article--post figure img {
        margin: 0 auto;
    }

    .article--post figure figcaption {
        margin-top: 5px;
        text-align: center;
    }

    .article--post-content .blockquote {
        padding: 30px 25px 30px;
        position: relative;
    }

    .article--post-content .blockquote:before {
        position: absolute;
        top: -20px;
        content: "\"";
        left: -10px;
        font-size: 200px;
        line-height: normal;
        color: rgba(0,0,0,0.1);
    }

    .article--post-content .blockquote {
        font-size: 18px;
        line-height: 26px;
        font-weight: 500;
        text-align: center;
    }
</style>   