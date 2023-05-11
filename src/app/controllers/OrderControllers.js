const Order = require('../models/Order');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class OrderController {

    //[post] /api/order/new
    newOrder = async (req, res) => {
        try {
            const {
                shippignInfo,
                orderItems,
                itemsPrice,
                totalPrice,
                status
            } = req.body;

            const order = await new Order({
                shippignInfo,
                orderItems,
                itemsPrice,
                totalPrice,
                status,
                paidAt: Date.now(),
                user: req.users._id
            })
            order.save();
            res.status(200).json(order)

        } catch (error) {
            res.status(500).json(error);
            console.log(error)
        }
    }

    //[get]/api/customers/myorder
    myOrder = async (req, res) => {
        try {
            const orders = await Order.find({ user: req.user._id });
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    };

    //[get] /api/admin/allorders
    getAllOrders = async (req, res) => {
        try {
            const orders = await Order.find();
            let totalAmount = 0;
            orders.forEach((order) => {
                totalAmount += order.totalPrice;
            })

            res.status(200).json({
                orders: mutipleMongooseToObject(orders),
                totalAmount,
            })
        }
        catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
    
}
module.exports = new OrderController;