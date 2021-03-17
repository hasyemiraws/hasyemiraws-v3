<template>
  <Layout>
    <section class="container hero--intro">    
      <div class="hero--label">
        <h1 class="hero-title">
          <span>
              full time learner.<br/>
              professional overthinker.<br/>
              high functioning introvert.
          </span>
          <span class="post--more">
            <a href="#">
              <g-image
                class="post--more-arrow"
                src="~/assets/images/right-arrow.svg"
              />
              <svg
                id="circular"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50
                                  m -50, 0
                                  a 50,50 0 1,0 100,0
                                  a 50,50 0 1,0 -100,0"
                  />
                </defs>
                <text
                  id="brand--text"
                  fill="#000"
                  font-size="12"
                  font-family="apercu medium"
                  font-weight="bold"
                  letter-spacing="12"
                  width="100"
                >
                  <textPath xlink:href="#circle">MORE ABOUT ME</textPath>
                </text>
              </svg>
            </a>
          </span>
        </h1>
      </div>    
    </section>
    <section class="container section pb-10 first-section">
      <h1 class="section--title">Blogs/</h1>
      <BlogList :pages="$page.allBlogPost.edges" />
    </section>
    <!-- <section class="container--full-width py-10">
      <div class="container section mx-auto">
        <h1 class="section--title">Youtube/</h1>
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
    </section> -->
    <!-- <PlaygroundHome/> -->
  </Layout>
</template>

<page-query>
query {
  allBlogPost(limit: 8) {
    edges {
        node {
            id
            title
            description
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
