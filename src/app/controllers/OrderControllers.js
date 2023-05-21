const Order = require('../models/Order');


class OrderController {

    //[post] /api/order/new
    newOrder = async (req, res) => {
        try {
            const {
                address,
                phonenumber,
                nameprod,
                price,
                quantity,
                image,
                user,
                totalPrice,
                status
            } = req.body;

            const order =  new Order({
                address,
                phonenumber,
                nameprod,
                price: mongoose.Decimal128,
                quantity,
                image,
                user,
                totalPrice,
                status,
                paidAt: Date.now(),
                user: req.users._id
            })
            await order.save();
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

   
    
}
module.exports = new OrderController;