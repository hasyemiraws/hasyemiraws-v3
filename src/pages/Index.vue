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
    <section class="container section">
      <h1 class="section--title">/BLOG</h1>
      <BlogList :pages="$page.allPost.edges" />
    </section>
  </Layout>
</template>

<page-query>
query {
    allPost(limit: 9) {
        totalCount
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

export default {
  metaInfo: {
    title: 'High Functional Introvert. Full Time Learner. Part time stalker.'
  },
  components: {BlogList}
}
</script>

<style>
</style>
