<template>
    <Layout>
        <section class="post--section content--section post2--section">  
            <div class="container container__post container__post2 mt-20 max-w-2xl mx-auto">
                
                <h2 class="article--title mb-10">{{ $page.blogPost.title }}</h2>
                <div class="article--featured-wrap" :style="{backgroundImage: `url(${$page.blogPost.featured_image.path})`}"></div>

                <article class="article--post">
                
                    <div class="article--post-content">
                        <vue-markdown :source="$page.blogPost.content"></vue-markdown>
                    </div>

                    <div class="article--comments">
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
    content
    author
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
    mounted() {
        var lazyLoadInstance = new LazyLoad({});
    },
    components: {
        VueMarkdown
    }
}
</script>

<style scoped>
    .article--title {
        font-weight: 700;
        letter-spacing: 1px;
        font-family: acumin-pro-wide, sans-serif;
        font-size: 2.2em;
        line-height: 1.4em;
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
</style>