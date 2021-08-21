const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const PORT = process.env.PORT | 3000
const app = express()

app.use('/',serveStatic(path.join(__dirname, '/dist')))

app.listen(PORT)
console.log('Servidor Rodando________')