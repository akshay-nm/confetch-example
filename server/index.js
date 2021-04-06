const express = require("express")
const port = 4000

const cors = require("cors")
const morgan = require("morgan")
morgan.token("body", function (req, res) {
  return JSON.stringify(req.body, null, 2)
})
morgan.token("headers", function (req, res) {
  return JSON.stringify(req.headers, null, 2)
})
const app = express()

app.options("*", cors())
app.use(cors())

app.use(express.json())
app.use(morgan(":method :url \nbody: :body \nheaders: :headers \n"))

app.use("*", (req, res) => res.sendStatus(200))

app.listen(port, console.log("Server up on port: ", port))
