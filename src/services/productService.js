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

    async createProduct(productData, userId) {
        // nome, categoria_produto, descricao, quantidadeEstoque, codigo_barra, foto_url, peso, marca, valor // req body
        // id => token => req.userId 

        const values = [
            productData.nome,
            productData.categoriaProduto,
            productData.descricao,
            productData.qtdEstoque,
            productData.codigoBarra,
            productData.fotoUrl,
            productData.peso,
            productData.marca,
            productData.valor,
            userId
        ]

        // console.log(values)
        // return

        return await productRepository.createProduct(values)

    }

    async findUserProducts(userId) {
        const userProducts = await productRepository.findUserProducts(userId)

        if(userProducts.length === 0) {
            throw new NotFoundError('Não há produtos cadastrados')
        }

        return userProducts
    }
}

module.exports = new ProductService()
