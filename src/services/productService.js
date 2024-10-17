const { NotFoundError } = require("../helpers/ApiError")
const productRepository = require("../repositories/productRepository")

class ProductService {

    async findAllProducts() {
        try {
            return await productRepository.findAllProducts()
        } catch (error) {
            throw new Error('ERROR: test product service find all products')
        }
    }

    async findProductById(idProduto) {
        const produto = await productRepository.findProductById(Array(idProduto))

        if (!produto) {
            throw new NotFoundError('Produto não cadastrado')
        }

        return produto

    }
}

module.exports = new ProductService()
