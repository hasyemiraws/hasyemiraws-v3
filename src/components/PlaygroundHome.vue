<template>
  <section class="container section pb-20 mt-40">
    <h1 class="section--title bg-white">/PLAYGROUND</h1>
    <div class="playground--section">
      <div class="grid grid-cols-3 gap-5 items-center">
        <div class="">
          <div class="playground--intro">
            <p class="mb-1">
              Collection of things that i do for fun or just to play around
              using code.
            </p>
            <div class="playground--intro-link">
                <a href="https://codepen.io/hasyemiraws" target="_blank">
                    Visit my playground 
                    <g-image src="~/assets/images/right-arrow.svg" height="15" />
                </a>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="playground--list">
            <div class="grid mb-0 grid-cols-3 gap-5">
              <div class="">
                <figure class="playground--item">
                  <a
                    href="https://codepen.io/hasyemiraws/details/LQeLpz/"
                    target="_blank"
                  >
                    <g-image
                      class="playground--thumb rounded"
                      src="~/assets/images/playground/003.png"
                    />
                  </a>
                </figure>
              </div>
              <div class="">
                <figure class="playground--item">
                  <a
                    href="https://codepen.io/hasyemiraws/details/xXoNrr/"
                    target="_blank"
                  >
                    <g-image
                      class="playground--thumb rounded"
                      src="~/assets/images/playground/002.png"
                    />
                  </a>
                </figure>
              </div>
              <div class="">
                <figure class="playground--item">
                  <a
                    href="https://codepen.io/hasyemiraws/details/WZOGPm/"
                    target="_blank"
                  >
                    <g-image
                      class="playground--thumb rounded"
                      src="~/assets/images/playground/001.png"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
    .playground--intro {
        font-size: 16px;
        font-family: 'apercu medium', sans-serif;
        margin-bottom: 10px;
    }

    .playground--intro-link a {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
    }

    .playground--intro-link img {
        height: 15px;
    }

    .playground--item {
        margin: 0;
    }
    .playground--item:hover .playground--thumb {
        box-shadow: 0 0px 15px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.22);
    }
</style>