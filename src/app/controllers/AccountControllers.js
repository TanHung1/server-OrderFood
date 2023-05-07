const account = require('../models/Account');
const jwt = require('jsonwebtoken');


    //[post] api/account/register
    const register = async (req, res, next) => {
        try {
            const {username, phonenumber, email, password, role} = req.body;
            const newAccount = await new  account({username, phonenumber, email, password, role: 'customer'})
            newAccount.save();
            res.status(200).json(newAccount); 
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
        
    }

    //[post] api/account/login
    const login = async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = await account.findOne({email});
            const token = jwt.sign(
                {userId: user._id},
                 "minh",
                 {expiresIn: "48h"}
            );
            res.status(200).json({token,user})
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    };

module.exports = {
    register,
    login
}
