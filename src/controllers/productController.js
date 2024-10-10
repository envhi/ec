const productService = require("../services/productService");

class ProductController {

    async findAllProducts(req, res) {
        const data = await productService.findAllProducts()

        return res.json(data)
    }

    async createProduct(req, res) {
        res.json({msg: 'ok', body: req.body})
    }
}

module.exports = new ProductController();
