<template>
  <Layout>
    <section class="container hero--intro">    
      <div class="hero--label">
        <h1 class="hero-title">
          <span>
              full time learner.<br/>
              professional overthinker.<br/>
              high functioning introvert.
          </span>
          <span class="post--more about-me--more">
            <g-link :to="$tp('me')">
              <g-image
                class="post--more-arrow"
                src="~/assets/images/right-arrow.svg"
              />
              <svg
                id="circular"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50
                      m -50, 0
                      a 50,50 0 1,0 100,0
                      a 50,50 0 1,0 -100,0"
                  />
                </defs>
                <text
                  id="brand--text"
                  fill="#000"
                  font-size="10"
                  font-family="neue-haas-unica"
                  font-weight="bold"
                  letter-spacing="10"
                  width="100"
                >
                  <textPath xlink:href="#circle">{{ $t('MORE ABOUT ME') }}</textPath>
                </text>
              </svg>
            </g-link>
          </span>
        </h1>
      </div>    
    </section>
    <section class="container section pb-10 first-section">
      <h1 class="section--title">Blogs/</h1>
      <BlogList :pages="$page.allBlogPost.edges" />
    </section>
    <hr/>
    <section class="container section py-10">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 class="section--title">Youtube/</h1>
        <span class="g-ytsubscribe" data-channelid="UCzvyjUsomu2sdTbuBJHA9ag" data-layout="default" data-count="default"></span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-0">
        <figure :class="{'md:col-span-2 row-span-5 latest-video': idx == 0}" v-for="(video, idx) in $page.allYoutube.edges" :key="video.node.id" class="overflow-hidden youtube-post-wrap">
            <a :href="video.node.slug"><img data-object-fit class="lazy w-full rounded-md" :data-src="video.node.featured_image"/></a>
            <figcaption class="post--label">
                <span class="post--category" v-if="idx == 0">
                    <a>
                      LATEST VIDEO
                    </a>
                </span>
                <a :href="video.node.slug">
                    <h3 class="post--title video-title mt-1">                              
                        {{ video.node.title }}                              
                    </h3>
                    <span class="post--date">{{ new Date(video.node.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>          
                </a>          
            </figcaption>
        </figure>
      </div>
      <span class="post--more">
          <a href="https://youtube.com/c/hasyemiraws">
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
                  <textPath xlink:href="#circle">MORE VIDEOS</textPath>
              </text>
          </svg>
          </a>
      </span>      
    </section>
    <hr/>
    <section class="container section py-10">
      <div>
        <h1 class="section--title mb-5">Anotasi daily/</h1>
        <ul>
          <li class="mb-10 pb-4 border-b-2 border-gray" v-for="anotasi in $page.allAnotasiDaily.edges" :key="anotasi.id">
            <g-link :to="$tp(anotasi.node.path)" class="flex">
              <span style="flex-basis: 30px; max-width: 30px;" class="mr-10 text-5xl text-gray-300">{{ anotasi.node.number }}</span>
              <div>
                <h3 class="text-3xl uppercase">{{ anotasi.node.title }} </h3>
                <span class="post--date">{{ new Date(anotasi.node.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>          
              </div>
            </g-link>
          </li>
        </ul>
      </div>
    </section>
    <!-- <PlaygroundHome/> -->
  </Layout>
</template>

<page-query>
query {
  allCategories {
      edges {
          node {
              name
              slug
              path
          }
      }
  }

  allBlogPost(limit: 5, sortBy: "published_date", filter: {status: {eq: "published"}}) {
    edges {
        node {
            id
            title
            title_en
            category {
              name
              path
            }
            published_date
            featured_image {
              path
            }
            path
            path_en: path(to:"en")
        }
    }
  }

  allAnotasiDaily {
    edges {
      node {
        title
        number
        date
        path
      }
    }
  }

  allYoutube(limit: 5) {
    edges {
      node {
        title
        slug
        date
        playlist
        featured_image
      }
    }
  }
}
</page-query>

<script>
import BlogList from "../components/BlogList";
import PlaygroundHome from "../components/PlaygroundHome";

export default {
  metaInfo: {
    title: 'High Functional Introvert. Full Time Learner. Part time stalker.',
    link: [
      {
        rel: "canonical",
        href: "https://hasyemiraws.com"
      },
    ],
    script: [
      {
        src: "https://apis.google.com/js/platform.js"
      }
    ]
  },
  components: {BlogList, PlaygroundHome}
}
</script>

<style lang="scss" scoped>
.hero {
    &--intro {
        height: 60vh;        
        display: flex;   
        justify-content: flex-start;
        align-items: center;
    }

    &--label {
        .hero-title {
            display: inline; 
            letter-spacing: 2px;            
            font-family: $font-primary;
            font-family: neue-haas-unica, sans-serif;
            font-weight: 700;
            font-size: 3.2em;
            line-height: 1.3em;
            position: relative;

            .about-me--more {
                position: absolute;
                top: 52%;
                right: -65px;
                padding: 0;

                .post--more-arrow {
                    transition: all 0.3s ease;
                }
            
        
                &:hover .post--more-arrow {
                    transform: translate(calc(-50% + 5px), -50%);
                }
            }

            @include breakpoint('max_phablet') {
                font-size: 1.7em;

                .about-me--more {
                    left: -20px;
                    right: auto;
                    top: 75%;
                }
            }
        }
    }
}

hr {
  border-top-width: 3px;
  border-color: #202020;
}

.video-title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.youtube-post-wrap:not(.latest-video) {
  display: inline-flex;
}

.youtube-post-wrap:not(.latest-video) img {
  width: 110px;
  max-width: 110px;
  height: 100%;
  object-fit: cover;
}

.youtube-post-wrap:not(.latest-video) figcaption {
  margin-top: 0;
}
</style>