const micro = require("micro")
const getJSON = require("bent")("GET", "json")
const fs = require("fs")
const path = require("path")
const query = require("micro-query")
const camelize = require("camelize")

const widgetJS = fs
  .readFileSync(path.join(__dirname, "../dist/widget.js"))
  .toString()

module.exports = async (req, res) => {
  const params = camelize(query(req))
  if (!params.channel) return micro.send(res, 400, "must provide channel")
  const streamsURL = `https://api.twitch.tv/helix/streams?user_login=${params.channel}`
  const streamResponse = await getJSON(streamsURL, null, {
    "Client-Id": process.env.TWITCH_CLIENT_ID,
    Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
  })
  const isLive = streamResponse.data.length > 0

  micro.send(
    res,
    200,
    `window.d=${JSON.stringify({ ...params, isLive })};${widgetJS}`
  )
}
