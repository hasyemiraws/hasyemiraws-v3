<template>
  <div class="book-item py-3 py-1">
    <img v-if="cover" class="book-thumb" :src="cover" />
    <div class="flex-1">
      <div class="mb-2">
        <h4 class="book-title text-lg">{{ title }}</h4>
        <h5 class="book-author text-xs">
          <span class="text-gray-400">by: </span>
          <template v-if="author.length > 0">
            <span
              class="italic text-slate-400"
              v-for="aut in author"
              :key="aut.name"
              >{{ aut.name }}</span
            >
          </template>
        </h5>
        <div class="mt-1">
          <ul class="book-format" v-if="formats.length > 0">
            <li
              class="book-format-tag"
              :key="format.name"
              v-for="format in formats"
              :style="{
                backgroundColor: format.color,
                borderColor: format.color,
              }"
            >
              {{ format.name }}
            </li>
          </ul>
          <ul class="book-format ml-2" v-if="genres.length > 0">
            <li
              class="book-format-tag"
              :key="genre.name"
              v-for="genre in genres"
              :style="{
                backgroundColor: genre.color,
                borderColor: genre.color,
              }"
            >
              {{ genre.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="book-progress">
        <div class="outer-bar">
          <span :style="{ width: `${progress}px` }" class="bar"></span>
        </div>
        <span class="progress-number">{{ progress + "%" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cover", "title", "author", "genres", "img", "progress", "formats"],
};
</script>

<style lang="scss" scoped>
.book-item {
  display: flex;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid #202020;
  box-shadow: -2px 2px 0px 2px #202020;
}

.book-thumb {
  max-width: 100px;
  max-height: 110px;
  width: 100%;
  object-fit: contain;
}

.book-item + .book-item {
  margin-top: 20px;
}

.book-item > div {
  margin-left: 10px;
}

.book-item .book-name {
  border-bottom: 2px solid #202020;
}

.book-format {
  display: inline-flex;
}

.book-progress {
  display: flex;
  align-items: center;
}

.progress-number {
  font-size: 11px;
  margin-left: 2px;
}

.outer-bar {
  display: inline-block;
  max-width: 125px;
  width: 100%;
  height: 15px;
  border: 1px solid #202020;
}

.outer-bar .bar {
  display: block;
  width: 0;
  height: 100%;
  background: black;
  border: none;
}

.book-format-tag {
  color: white;
  padding: 2px 6px;
  background-color: #202020;
  border-color: #202020;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  font-size: 10px;
  mix-blend-mode: difference;
}

.book-format-tag + .book-format-tag {
  margin-left: 5px;
}

@media screen and (min-width: 640px) {
  .book-thumb {
    max-width: 115px;
  }
}
</style>