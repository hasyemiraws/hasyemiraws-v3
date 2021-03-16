<template>
    <section class="container">
        <div class="grid grid-col-3 grid-masonry gap-12 post">
            <template v-for="(page, idx) in pages">
                <figure class="overflow-hidden mb-20" v-if="idx < 3" :key="page.node.id">
                    <g-link :to="page.node.path"><img data-object-fit class="lazy rounded-lg w-full" :data-src="page.node.featured_image.path"/></g-link>
                    <figcaption class="post--label">                                                 
                        <span class="post--category">
                            <a href="#">
                                category
                            </a>
                        </span>

                        <g-link :to="page.node.path">
                            <h3 class="post--title">                              
                                {{ page.node.title }}                              
                            </h3>
                        </g-link>          
                    </figcaption>
                </figure>
            </template>
        </div>
        <div class="masonry">
            <template v-for="(page, idx) in pages">
                <figure class="overflow-hidden mb-20" :key="page.node.id" v-if="idx > 2">
                    <g-link :to="page.node.path"><img data-object-fit class="lazy w-full rounded-lg" :data-src="page.node.featured_image.path"/></g-link>
                    <figcaption class="post--label">                                                 
                        <span class="post--category">
                            <a href="#">
                                category
                            </a>
                        </span>

                        <g-link :to="page.node.path">
                            <h3 class="post--title">                              
                                {{ page.node.title }}                              
                            </h3>
                        </g-link>          
                    </figcaption>
                </figure>
            </template>
        </div>
        <span class="post--more">
            <a href="#">
            <g-image class="post--more-arrow" src="~/assets/images/right-arrow.svg" />
            <svg id="circular" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="circle" 
                        d="M 50, 50
                            m -50, 0
                            a 50,50 0 1,0 100,0
                            a 50,50 0 1,0 -100,0" />
                </defs>
                <text id="brand--text" fill="#000" font-size="12" font-family="apercu medium" font-weight="bold" letter-spacing="12" width="100">
                    <textPath xlink:href="#circle">MORE STORIES</textPath>
                </text>
            </svg>
            </a>
        </span>      
    </section>
</template>

<script>
import LazyLoad from 'vanilla-lazyload'

export default {
    props: ['pages'],
    mounted() {
        var lazyLoadInstance = new LazyLoad({});
    }
}
</script>

<style>
    .grid-masonry figure:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 3;
        /* grid-row-start: 1; */
        /* grid-row-end: 2; */
        grid-row: span 2 / span 2;
    }
    .grid-masonry figure:nth-child(2) {
        grid-column-start: 3;
    }

    .masonry {
        column-count: 3;
        column-gap: 3rem;
    }

    .masonry.first {
        column-count: 2;
    }

    .masonry figure {
        -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
          page-break-inside: avoid; /* Firefox */
               break-inside: avoid; /* IE 10+ */
    }

    .masonry figure:first-child {
        margin-top: -120px
    }

    .masonry figure:nth-child(3) {
        padding-top: 40px
    }

    .masonry figure:nth-child(5) {
        transform: translate3d(0, -40px, 0);
    }

    .masonry figure:last-child {
        margin-bottom: 0px;
    }

    .post--label {
        margin-top: 10px
    }

    .post--category {
        font-size: 13px;
        font-family: 'apercu medium', sans-serif;
    }

    .post--title {
        margin-top: 0px;
        font-size: 1.3em;
        font-family: acumin-pro-semi-condensed, sans-serif;
        font-weight: 700;
        
    }

    .post--more {
        display: flex;
        justify-content: center;
        padding: 30px 0;
    }

    .post--more svg {   
        width: 100px;
        top: 50%;
        left: 50%;
    }

    .post--more a {
        position: relative;
    }

    .post--more-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;

    }

    #circular {
        animation: rotata 10s infinite linear;
    }

    @keyframes rotata {
        0%   {   transform: rotate(0deg); }
        100% {   transform: rotate(360deg); }
    }
</style>