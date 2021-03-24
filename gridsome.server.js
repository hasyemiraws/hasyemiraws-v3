const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
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

    for (const post of posts) {
      blogCollection.addNode({...post})
    }

    for (const category of categoriesData) {
      categoriesCollection.addNode({...category})
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
