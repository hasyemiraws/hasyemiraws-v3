const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async ({ addCollection, store }) => {
    const blogposts = await axios.get('https://api.hasyemiraws.com/api/collections/get/blogs?token=57ab7bfaa19c4967387094169487f7')
    const categories = await axios.get('https://api.hasyemiraws.com/api/collections/get/categories?token=57ab7bfaa19c4967387094169487f7')
    const posts = blogposts.data.entries
    const categoriesData = categories.data.entries

    const blogCollection = addCollection({
      typeName: 'BlogPost'
    })

    const categoriesCollection = addCollection({
      typeName: 'Categories'
    })

    for (const category of categoriesData) {
      categoriesCollection.addNode({...category})
    }

    for (const post of posts) {
      const categoryPost = categoriesCollection._collection.data.find((cat) => {
        return cat.name == post.category.display
      })
      let extendPost = Object.assign({...post}, {
        "category": store.createReference('Categories', categoryPost.id)
      })

      blogCollection.addNode({...extendPost})
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
