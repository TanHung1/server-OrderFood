const Order = require('../models/Order');
const { mongooesToObject } = require('../../util/mongoose');

class StaffController {
    updateOrder = async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);

            if (!order) {
                return res.status(404).send('Không có đơn hàng này')
            };

            if (order.status === "Đã giao") {

                return res.status(400).send('Đơn hàng đã giao rồi');
            };

            await order.save({ validateBeforeSave: false });
            res.status(200).json(order);
        } catch (error) {

        }
    };
}