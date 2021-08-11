<template>
  <Layout>
    <div class="my-10 flex gap-10 items-center flex-wrap md:flex-nowrap">
    <p>Hello! My name is Hasyemi Rafsanjani Asyari, I'm a Front End Developer from Indonesia currently living and work in Kuala Lumpur, Malaysia. I write about books, code, and personal thoughts about life. Say hi <a class="footer__about--info--link" href="mailto:hi@hasyemiraws.com">hi@hasyemiraws.com</a>.</p>
    <g-image width="300" src="~/assets/images/profile-picture.jpg" />
    </div>
  </Layout>
</template>

<page-query>
query {
  allCategories {
      edges {
          node {
              name
              slug
              path
          }
      }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Tentang saya',
      link: [
        {
            rel: "canonical",
            href: `https://hasyemiraws.com/${this.$route.fullPath}`
        },
      ]
    }
  }
}
</script>
