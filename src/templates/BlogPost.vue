<template>
    <Layout>
        <section class="post--section content--section post2--section">  
            <div class="container container__post container__post2">

                <div class="article--featured-wrap">
                    <img data-object-fit class="lazy rounded-lg w-full fadeInUp" :data-src="$page.blogPost.featured_image.path"/>
                </div>

                <article class="article--post">
                
                    <div class="article--post-content">
                        <vue-markdown :source="$page.blogPost.content"></vue-markdown>
                    </div>

                    <div class="article--comments">
                        <Disqus
                            shortname="hasyemiraws"
                            :identifier="$page.blogPost.title"
                        />
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