const fetch = require('node-fetch')
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.GRIDSOME_NOTION_KEY,
})

const databaseId = process.env.GRIDSOME_NOTION_DB_ID

const handler = async function () {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "currently reading"
        }
      },
      sorts: [
        {
          property: "Started Reading",
          direction: "ascending"
        }
      ],
    });
    if (!response.object == "error") {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.message }
    }
    const data = response

    return {
      statusCode: 200,
      body: JSON.stringify({ results: data.results }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }