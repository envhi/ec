const orderService = require("../services/orderService");

class OrderController {

    async findAllOrders(req, res) {
        const data = await orderService.findAllOrders()

        return res.json(data)
    }
}

module.exports = new OrderController();

