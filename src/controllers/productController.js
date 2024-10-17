const productService = require("../services/productService");

class ProductController {

    async findAllProducts(req, res) {
        const data = await productService.findAllProducts()

        return res.json(data)
    }

    async createProduct(req, res) {
        res.json({msg: 'ok', body: req.body})
    }

    async findProductById(req, res) {
        const data = await productService.findProductById(req.params.id)

        res.json(data)
    }
}

module.exports = new ProductController();
