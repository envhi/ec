const productService = require("../services/productService");

class ProductController {

    async findAllProducts(req, res) {
        const data = await productService.findAllProducts()

        return res.json(data)
    }

    async createProduct(req, res) {
        const newProduct = await productService.createProduct(req.body, req.userId)

        console.log(newProduct)

        res.status(201).json('Produto cadastrado com sucesso')
    }

    async findProductById(req, res) {
        const data = await productService.findProductById(req.params.id)

        res.json(data)
    }

    async findUserProducts(req, res) {
        const userProducts = await productService.findUserProducts(req.userId)

        return res.status(200).json(userProducts)
    }

    async updateProduct(req, res) {
        const updateProduct = await productService.updateProduct(req.userId, req.params.id, req.body)

        return res.status(200).json({ msg: 'Produto atualizado', updateProduct })
    }
}

module.exports = new ProductController();
