const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const morgan = require('morgan')
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body, null, 2)
})
morgan.token('headers', function (req, res) {
  return JSON.stringify(req.headers, null, 2)
})

app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.use(morgan(':method :url \nbody: :body \nheaders: :headers \n'))
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
