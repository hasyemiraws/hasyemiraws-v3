<template>
  <div>
    <Header/>
        <router-view />
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    require('~/assets/js/main.js');
  }
}
</script>
