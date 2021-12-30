<template>
  <div class="book-item w-full md:w-4/6 py-3 px-1">
    <img class="book-thumb" />
    <div class="flex-1 ml-1">
      <div class="mb-2">
        <h4 class="book-title text-lg"></h4>
        <h5 class="book-author text-xs">
          <span class="text-gray-400"></span>
            <span
              class="italic text-slate-400"></span>
        </h5>
        <div class="mt-1">
          <ul class="book-format">
            <li
              class="book-format-tag">
            </li>
            <li
              class="book-format-tag">
            </li>
          </ul>
          <ul class="book-format ml-2">
            <li
              class="book-format-tag">
            </li>
            <li
              class="book-format-tag">
            </li>
          </ul>
        </div>
      </div>
      <div class="book-progress">
        <div class="outer-bar">
          <span class="bar"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}

.book-item {
  display: flex;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid #202020;
  box-shadow: -2px 2px 0px 2px #202020;
  margin-bottom: 20px;
}

.book-thumb {
  min-width: 100px;
  max-width: 100px;
  min-height: 110px;
  width: 100%;
  object-fit: contain;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.book-title, .book-author, .book-progress {
  content: " ";
  width: 60%;
  height: 18px;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.book-format {
    display: inline-flex;
}

.book-format-tag {
  background-color: #ddd;
  border-color: #ddd;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  font-size: 10px;
  padding: 2px 6px;
  animation: pulse-bg 1s infinite;
  content: " ";
  min-width: 40px;
  min-height: 15px;
}

.book-format-tag + .book-format-tag {
    margin-left: 5px;
}

.book-author {
    width: 40%;
}
</style>