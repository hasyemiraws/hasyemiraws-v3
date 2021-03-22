<template>
  <div class="layout-wrapper mx-7 md:mx-20 xl:mx-auto">
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

.main {
  padding-top: 80px;
}
</style>
