<template>
  <Layout>
    <section class="container hero--intro">    
      <div class="hero--label">                  
        <span class="small-title">hi, welcome to the journal of a</span>
        <h1 class="hero-title">
          <span>
              full time learner.<br/>
              professional overthinker.<br/>
              high functioning introvert.
          </span>
        </h1>
      </div>    
    </section>
    <section class="container section pb-10">
      <h1 class="section--title">/BLOG</h1>
      <BlogList :pages="$page.allPost.edges" />
    </section>
    <section class="container--full-width py-10">
      <div class="container section mx-auto">
        <h1 class="section--title">/YOUTUBE</h1>
        <div class="grid grid-cols-4 gap-10">
          <figure :class="{'col-span-3 row-span-2': idx == 0}" v-for="(video, idx) in $page.allYoutube.edges" :key="video.node.id" class="overflow-hidden">
              <g-link :to="video.node.path"><img data-object-fit class="lazy w-full rounded-lg" :data-src="video.node.featured_image"/></g-link>
              <figcaption class="post--label">                                                 
                  <span class="post--category">
                      <a href="#">
                          category
                      </a>
                  </span>

                  <g-link :to="video.node.path">
                      <h3 class="post--title">                              
                          {{ video.node.title }}                              
                      </h3>
                  </g-link>          
              </figcaption>
          </figure>
        </div>
      </div>
    </section>
    <PlaygroundHome/>
  </Layout>
</template>

<page-query>
query {
    allPost(limit: 9) {
      edges {
          node {
              id
              title
              path
              description
              featured_image
          }
      }
    }

    allYoutube(limit: 4) {
      edges {
        node {
          id
          title
          path
          description
          featured_image
        }
      }
    }
}
</page-query>

<script>
import BlogList from "../components/BlogList";
import PlaygroundHome from "../components/PlaygroundHome";

export default {
  metaInfo: {
    title: 'High Functional Introvert. Full Time Learner. Part time stalker.'
  },
  components: {BlogList, PlaygroundHome}
}
</script>

<style>
</style>
