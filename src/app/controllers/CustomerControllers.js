// const Customer = require('../models/Customer');
// const bcrypt = require('bcrypt');

// class CustomerControllers {
//     // [post] /api/customer/register
//     regiserCustomer = async (req, res) => {
//         try {
//             const salt = await bcrypt.genSalt(10);
//             const hashed = await bcrypt.hash(req.body.password, salt);

//             const newCustomer = await new Customer({
//                 username: req.body.username,
//                 phonenumber: req.body.phonenumber,
//                 email: req.body.email,
//                 password: hashed,

//             });

//             const customer = await newCustomer.save();
//             res.status(200).json(customer);
//         }
//         catch (err) {
//             res.status(500).json(err);
//         }
//     };

//     //[post] /api/customer/login
//     loginCustomer = async (req, res) => {
//         try {
//             const customer = await Customer.findOne({ phonenumber: req.body.phonenumber });

//             if (!customer) {
//                 res.status(404).json('Sai so dien thoai');
//             }

//             const validPassword = await bcrypt.compare(
//                 req.body.password,
//                 customer.password,
//             );

//             if (!validPassword) {
//                 res.status(404).json('sai mat khau');
//             }

//             if (customer && validPassword) {
//                 res.status(200).json('Dang nhap thanh cong');
//             }

//         } catch (err) {
//             res.status(500).json(err);
//         }
//     };

//     //[put] api/customer/:id/update-customer
//     updateCustomer(req, res) {
//         Customer.updateOne({ _id: req.params.id }, req.body)
//             .then(() =>
//                 res.status(200).send('oke')
//             )
//             .catch((err) =>
//                 res.status(500).json(err)
//             )
//     };

// };

// module.exports = new CustomerControllers;