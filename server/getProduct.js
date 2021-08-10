const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.find((val) => val.id === parseInt(req.params.id))
    if (!item) {
        return res.status(500).send('Item is not in list')
    }
    res.status(200).send(item)
}
module.exports = getProduct