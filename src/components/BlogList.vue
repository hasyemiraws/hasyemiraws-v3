<template>
    <section class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
            <div class="col-span-2">
                <div class="grid grid-cols-2 gap-10">
                    <template v-for="(page, idx) in leftPages">
                        <div v-if="idx < 5" :key="page.node.id" :class="{'col-span-2': idx == 0}">
                            <figure class="overflow-hidden mb-14">
                                <g-link :to="getLinkLang(page.node)" :class="{'aspect-ratio-1-1': idx > 0}"><img data-object-fit class="lazy w-full" :data-src="page.node.featured_image.path"/></g-link>
                                <figcaption class="post--label">                                                 
                                    <span class="post--category">
                                        <g-link :to="page.node.category.path">
                                            {{ page.node.category.name | lowercase }}
                                        </g-link>
                                    </span>

                                    <g-link :to="getLinkLang(page.node)">
                                        <h3 class="post--title text-md md:text-xl">                              
                                            {{ getAttributeLang('title', page.node) }}                              
                                        </h3>
                                    </g-link>

                                    <span class="post--date">{{ page.node.published_date }}</span>          
                                </figcaption>
                            </figure>
                        </div>
                    </template>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-10">
                <template v-for="(page, idx) in rightPages">
                    <figure class="overflow-hidden mb-14" :key="page.node.id">
                        <g-link :to="getLinkLang(page.node)" class="aspect-ratio-1-1-sm"><img data-object-fit class="lazy w-full" :data-src="page.node.featured_image.path"/></g-link>
                        <figcaption class="post--label">                                                 
                            <span class="post--category">
                                <g-link :to="page.node.category.path">
                                    {{ page.node.category.name | lowercase }}
                                </g-link>
                            </span>

                            <g-link :to="getLinkLang(page.node)">
                                <h3 class="post--title text-lg md:text-xl">                              
                                    {{ getAttributeLang('title', page.node) }}                              
                                </h3>
                            </g-link>          
                            
                            <span class="post--date">{{ page.node.published_date }}</span>          
                        </figcaption>
                    </figure>
                </template>
            </div>
        </div>
        <div class="masonry">
            
        </div>
        <span class="post--more" v-if="showMoreStories">
            <g-link :to="$tp('/all-post/')">
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
            </g-link>
        </span>      
    </section>
</template>

<script>
import LazyLoad from 'vanilla-lazyload'

export default {
    props: {
        'pages': Array, 
        'showMoreStories': {
            type: Boolean,
            default: true
        }
    },
    computed: {
        leftPages() {
            const pagesCount = this.pages.length;
            if (pagesCount > 5) {
                return this.pages.slice(0, 6)
            } else {
                if (pagesCount <= 4) {
                    return this.pages.slice(0, pagesCount - 1)
                }
                return this.pages.slice(0, pagesCount - 2)
            }
        },
        rightPages() {
            const pagesCount = this.pages.length;
            if (pagesCount > 5) {
                return this.pages.slice(5, pagesCount+1)
            } else {
                if (pagesCount <= 4) {
                    return this.pages.slice(pagesCount - 1, pagesCount+1)
                }
                return this.pages.slice(pagesCount - 2, pagesCount+1)
            }
        },
        currentLang() {
            return (this.$context.locale == 'en-us') ? 'en' : 'id';
        }
    },
    methods: {
        getAttributeLang(key, node) {
            if (this.currentLang == 'en') {
                if (node[`${key}_en`] != '') return node[`${key}_en`];
            } 

            return node[key];
        },
        getLinkLang(node) {
            if (this.currentLang == 'en') {
                return this.$tp(node.path_en, 'en-us', true)
            }

            return node.path;
        }
    },
    mounted() {
        new LazyLoad({});
    }
}
</script>

<style>
    .post--label {
        margin-top: 10px
    }

    .post--category {
        font-size: 13px;
        font-family: 'apercu medium', sans-serif;
        display: inline-block;
        background: #202020;
        color: white;
        padding: 4px 8px;
        border-radius: 10px;
    }

    .post--category + .post--category {
        margin-left: 5px;
    }

    .post--title {
        margin-top: 0px;
        font-family: acumin-pro-semi-condensed, sans-serif;
        font-weight: 700;    
        line-height: 1.35em;
    }

    .post--date {
        font-family: 'apercu medium', sans-serif;
        font-size: 14px;
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