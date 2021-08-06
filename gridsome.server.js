const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async ({ addCollection, store }) => {
    const blogposts = await axios.get('https://api.hasyemiraws.com/api/collections/get/blogs?token=57ab7bfaa19c4967387094169487f7')
    const categories = await axios.get('https://api.hasyemiraws.com/api/collections/get/categories?token=57ab7bfaa19c4967387094169487f7')
    const anotasiDaily = await axios.get('https://api.hasyemiraws.com/api/collections/get/anotasi_daily?token=57ab7bfaa19c4967387094169487f7')
    const posts = blogposts.data.entries
    const categoriesData = categories.data.entries
    const anotasiDailyData = anotasiDaily.data.entries
    const langs = ['id', 'en']

    const blogCollection = addCollection({
      typeName: 'BlogPost'
    })

    const categoriesCollection = addCollection({
      typeName: 'Categories'
    })

    const anotasiDailyCollection = addCollection({
      typeName: 'AnotasiDaily'
    })

    for (const category of categoriesData) {
      categoriesCollection.addNode({...category})
    }

    for (const anotasi of anotasiDailyData) {
      anotasiDailyCollection.addNode({...anotasi})
    }

    for (const post of posts) {
      const categoryPost = categoriesCollection._collection.data.find((cat) => {
        return cat.name == post.category.display
      })

      let translations = {};

      langs.forEach(lang => {
        if (lang == 'en') {
          translations['en'] = {
            'title': post.title_en,
            'description': post.description_en,
            'content': post.content_en,
            'slug': post.slug_en
          }
        } else {
          translations['id'] = {
            'title': post.title,
            'description': post.description,
            'content': post.content,
            'slug': post.slug
          }
        }
      });

      let extendPost = Object.assign({...post}, {
        "category": store.createReference('Categories', categoryPost.id),
        "translations": translations
      })

      blogCollection.addNode({...extendPost})
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
