<template>
    <section class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
            <div class="col-span-2">
                <div class="grid grid-cols-2 gap-10">
                    <template v-for="(page, idx) in pages">
                        <div v-if="idx < 5" :key="page.node.id" :class="{'col-span-2': idx == 0}">
                            <figure class="overflow-hidden mb-14">
                                <g-link :to="page.node.path" :class="{'aspect-ratio-1-1': idx > 0}"><img data-object-fit class="lazy w-full" :data-src="page.node.featured_image.path"/></g-link>
                                <figcaption class="post--label">                                                 
                                    <span class="post--category">
                                        <a href="#">
                                            category
                                        </a>
                                    </span>

                                    <g-link :to="page.node.path">
                                        <h3 class="post--title text-lg md:text-xl">                              
                                            {{ page.node.title }}                              
                                        </h3>
                                    </g-link>          
                                </figcaption>
                            </figure>
                        </div>
                    </template>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-10">
                <template v-for="(page, idx) in pages">
                    <figure class="overflow-hidden mb-14" :key="page.node.id" v-if="idx > 4">
                        <g-link :to="page.node.path" :class="{'aspect-ratio-1-1': checkWindowSize() < 481}"><img data-object-fit class="lazy w-full" :data-src="page.node.featured_image.path"/></g-link>
                        <figcaption class="post--label">                                                 
                            <span class="post--category">
                                <a href="#">
                                    category
                                </a>
                            </span>

                            <g-link :to="page.node.path">
                                <h3 class="post--title text-lg md:text-xl">                              
                                    {{ page.node.title }}                              
                                </h3>
                            </g-link>          
                        </figcaption>
                    </figure>
                </template>
            </div>
        </div>
        <div class="masonry">
            
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
    methods: {
        checkWindowSize() {
            console.log('test', window.innerWidth)
            return window.innerWidth
        }
    },
    mounted() {
        var lazyLoadInstance = new LazyLoad({});
    }
}
</script>

<style>
    .aspect-ratio-1-1 {
        position: relative;
        display: block;
        padding-top: 100%;
        width: 100%;
    }

    .aspect-ratio-1-1 img {
        position: absolute;
        height: 100%;
        top: 0;
        object-fit: cover;
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
        animation: rotata 8s infinite linear;
    }

    @keyframes rotata {
        0%   {   transform: rotate(0deg); }
        100% {   transform: rotate(360deg); }
    }
</style>