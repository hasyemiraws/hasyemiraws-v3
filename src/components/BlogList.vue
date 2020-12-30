<template>
    <section class="container">
        <div class="grid grid-cols-3 gap-4">
            <figure class="post__list--item-blog grid--item grid--twelve grid--six--md grid--four--lg column" v-for="page in pages" :key="page.node.id">
                <g-link :to="page.node.path"><g-image data-object-fit class="post__list--image post__list--image-blog" :src="page.node.featured_image"/></g-link>
                <figcaption class="post__list--text post__list--text-blog">                                                 
                    <span class="post__list--category-label">
                        <a href="#">
                            category
                        </a>
                    </span>

                    <g-link :to="page.node.path">
                        <h3 class="post__list--title">                              
                            {{ page.node.title }}                              
                        </h3>
                    </g-link>          
                
                    <p class="post__list--desc">
                        {{ page.node.description }}  
                    </p>
                </figcaption>
            </figure>
        </div>      
    </section>
</template>

<script>
export default {
    props: ['pages'],
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