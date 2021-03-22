<template>
  <svg
    class="ham hamRotate ham4 ham5"
    viewBox="0 0 100 100"
    width="60"
    onclick="this.classList.toggle('active')"
  >
    <path
      class="line top"
      d="m 70,30 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
    />
    <path class="line middle" d="m 70,45 h -20" />
    <path
      class="line bottom"
      d="m 40,60 h 30 c 0,0 6.5,0.149796 7.5,-7.5 0,-7.649796 -7.5,-7.5 -7.5,-7.5 h -20 v 20"
    />
  </svg>
</template>

<style>
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: auto;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 4.5;
  stroke-linecap: round;
}

.menu-active .line {
  stroke: #fff
}
.ham4 .top {
  stroke-dasharray: 40 122;
}
.ham4 .bottom {
  stroke-dasharray: 40 121;
}
.ham4.active .top {
  stroke-dashoffset: -68px;
}
.ham4.active .bottom {
  stroke-dashoffset: -68px;
}

.ham5 .bottom {
  stroke-dasharray: 30 121;
}
</style>