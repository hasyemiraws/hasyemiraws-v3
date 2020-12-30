<template>
    <section class="container">
        <div class="grid grid-cols-3 gap-4">
            <figure class="post__list--item-blog grid--item grid--twelve grid--six--md grid--four--lg column" v-for="edge in $static.allPost.edges" :key="edge.node.id">
                <a :href="edge.node.path"><g-image data-object-fit class="post__list--image post__list--image-blog" :src="edge.node.featured_image"/></a>
                <figcaption class="post__list--text post__list--text-blog">                                                 
                    <span class="post__list--category-label">
                        <a href="#">
                            category
                        </a>
                    </span>

                    <a :href="edge.node.path">
                        <h3 class="post__list--title">                              
                            {{ edge.node.title }}                              
                        </h3>
                    </a>          
                
                    <p class="post__list--desc">
                        {{ edge.node.description }}  
                    </p>
                </figcaption>
            </figure>
        </div>      
    </section>
</template>

<static-query>
query {
    allPost {
        totalCount
        edges {
            node {
                id
                title
                path
                description
                featured_image
            }
        }
    }
}
</static-query>

<script>
export default {
    data() {
        return {
            staticDir: "assets/static/src/"
        }
    },
    mounted() {
        console.log(this.$static);
    }
}
</script>