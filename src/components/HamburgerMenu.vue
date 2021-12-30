<template>
  <button class="toggle">
    <div class="bar"></div>
  </button>
</template>

<style lang="scss" scoped>
.toggle {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: auto;
  height: 24px;
  width: 40px;
  outline: none !important;
}

.bar {
  position: relative;
  width: 35px;
  height: 2px;
  background: #101010;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: 0;
    transform-origin: center center;
    transition: transform .25s ease, top .25s ease, bottom .25s ease;
  }
  
  &:before {
    top: -10px;
  }
  
  &:after {
    bottom: -10px;
  }

  .menu-active & {
    background: transparent;
					
    &:before, &:after {
      background: white;
    }
    
    &:before {
      transform: rotate(45deg);
      top: 0;
    }
    &:after {
      transform: rotate(-45deg);
      bottom: 0;
    }
  }
}
</style>