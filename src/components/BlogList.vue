<template>
    <section class="container sm:w-full sm:max-w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
            <div class="col-span-2">
                <div class="grid grid-cols-2 gap-5 md:gap-10">
                    <template v-for="(page, idx) in leftPages">
                        <div v-if="idx < 5" :key="page.node.id" :class="{'col-span-2': idx == 0}">
                            <figure class="post--wrapper mb-14">
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

                                    <span class="post--date">{{ new Date(page.node.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>          
                                </figcaption>
                            </figure>
                        </div>
                    </template>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-10">
                <template v-for="(page, idx) in rightPages">
                    <figure class="post--wrapper mb-14" :key="page.node.id">
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
                            
                            <span class="post--date">{{ new Date(page.node.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>          
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
                <text id="brand--text" fill="#000" font-size="12" font-family="neue-haas-unica" font-weight="bold" letter-spacing="12" width="100">
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
            if (this.currentLang == 'en' && node[`${key}_en`]) {
                if (node[`${key}_en`] != '') return node[`${key}_en`];
            } 

            return node[key];
        },
        getLinkLang(node) {
            return this.$tp(node.path)
        }
    },
    mounted() {
        new LazyLoad({});
    }
}
</script>

<style>
    .post--label {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 15px;
        margin-top: 15px
    }

    .post--wrapper {
        border: 1.2px solid #202020;
        border-radius: 3px;
        align-self: start;
        transition: box-shadow 0.3s ease;
    }

    .post--wrapper a {
        display: block;
    }

    .post--wrapper:hover {
        box-shadow: -2px 2px 0px 2px #202020;
    }

    .post--category {
        font-size: 12px;
        font-family: 'neue-haas-unica', sans-serif;
        display: inline-block;
        background: #202020;
        color: white;
        padding: 4px 8px;
        border-radius: 15px;
    }

    .post--category + .post--category {
        margin-left: 5px;
    }

    .post--title {
        margin-top: 5px;
        font-family: neue-haas-unica, sans-serif;
        font-weight: 500;    
        line-height: 1.35em;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .post--date {
        font-family: neue-haas-unica, sans-serif;
        font-size: 13px;
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
        transition: all 0.3s ease;
    }

    .about-me--more:hover .post--more-arrow {
        transform: translate(calc(-50% + 5px), -50%);
    }

    #circular {
        animation: rotata 8s infinite linear;
    }

    @keyframes rotata {
        0%   {   transform: rotate(0deg); }
        100% {   transform: rotate(360deg); }
    }
</style>