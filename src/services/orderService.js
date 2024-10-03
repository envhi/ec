const orderRepository = require("../repositories/orderRepository")

class OrderService {

    async findAllOrders() {
        try {
            return await orderRepository.findAllOrders()
        } catch (error) {
            throw new Error('ERROR: test order service find all orders')
        }
    }
}

module.exports = new OrderService()