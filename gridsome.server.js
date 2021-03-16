const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const resp = await axios.get('https://api.hasyemiraws.com/api/collections/get/blogs?token=57ab7bfaa19c4967387094169487f7')
    const posts = resp.data.entries

    const collection = addCollection({
      typeName: 'BlogPost'
    })

    for (const post of posts) {
      collection.addNode({...post})
    }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
