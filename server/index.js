const express = require('express')
const getProduct = require('./getProduct')
const getProducts = require('./getProducts')
const app = express()
const port = 7000

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct);

app.listen(7000, () => {console.log('server is runnning on 7000')})