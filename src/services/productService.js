const { NotFoundError, UnauthorizedError } = require("../helpers/ApiError")
const productRepository = require("../repositories/productRepository")
const userRepository = require("../repositories/userRepository")

class ProductService {

    async findAllProducts() {
        try {
            return await productRepository.findAllProducts()
        } catch (error) {
            throw new Error('ERROR: test product service find all products')
        }
    }

    async findProductById(idProduto) {
        const produto = await productRepository.findProductById(idProduto)

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

    async updateProduct(userId, productId, data) {

        // console.log(productId)

        const product = await productRepository.findProductById(productId)

        if(!product){
            throw new NotFoundError('Produto não existe')
        }

        if(product.id_usuario != userId) {
            throw new UnauthorizedError('Unauthorized')
        }

        const setClause = []
        const values = []
        const keys = []

        for(const key in data) {
            if(data.hasOwnProperty(key)) {
                if(key == 'nome' || key == 'categoria_produto' || key == 'descricao' || key == 'quantidade_estoque' || key == 'foto_url' || key == 'peso' || key == 'marca' || key == 'valor'){
                    setClause.push(`${key} = $${setClause.length + 1}`)
                    values.push(data[key])
                    keys.push(key)
                    
                }
            }
        }
                
        values.push(productId)

        const userUpdate = await productRepository.updateProduct(setClause, values, keys)

        return userUpdate

    }
}

module.exports = new ProductService()
