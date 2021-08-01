<template>
  <Layout>
    <div class="my-5">
        <center>
            <h1>WHOOOPS, IT SEEMS THIS PAGE HAS BEEN PRUNED FROM THE "SACRED" TIMELINE</h1>
        </center>
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
  metaInfo: {
    title: '404'
  }
}
</script>
