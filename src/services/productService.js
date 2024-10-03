const productRepository = require("../repositories/productRepository")

class ProductService {

    async findAllProducts() {
        try {
            return await productRepository.findAllProducts()
        } catch (error) {
            throw new Error('ERROR: test product service find all products')
        }
    }
}

module.exports = new ProductService()