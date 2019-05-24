let express = require('express')

let {getProducts,
    getProductById} = require('./getProducts')

let app = express()

let port = 5000

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProductById)

app.listen(port, () => {
    console.log("Listening Now!!")

})

