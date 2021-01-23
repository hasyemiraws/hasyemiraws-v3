<template>
  <div class="layout-wrapper mx-10 md:mx-20 lg:mx-auto">
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout-wrapper {
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
}

.main {
  padding-top: 80px;
}
</style>
