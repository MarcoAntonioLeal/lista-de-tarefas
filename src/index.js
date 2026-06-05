const express = require('express')
const path = require('node:path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressLayouts)
app.set('layout', 'layouts/layout')

const router = require('./routes')
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})