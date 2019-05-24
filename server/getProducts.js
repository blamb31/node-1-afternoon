let products = require('../products.json')



let getProducts = (req, res) => {
    if (req.query.price) {
        let queryProducts = products.filter (elem => {
            if( +elem.price <= +req.query.price) {
                return elem
            }

        })
        res.send(queryProducts)
    }
    else {
        res.status(200).send(products)
    }
}

let getProductById = (req, res) => {
    let idProduct = products.filter( (elem) => {
        if (+elem.id === +req.params.id) {
            return elem
        }
    })

    if(!idProduct[0]) {
        res.status(500).send('Item not in list')
    }
    else{
        res.status(200).send(idProduct)
    }
}



module.exports = {
    getProducts,
    getProductById
}