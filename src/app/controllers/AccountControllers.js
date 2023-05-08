const account = require('../models/Account');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AccountControler {
    //[post] api/account/register
    register = async (req, res, next) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const {
                username,
                phonenumber,
                email,
                hashed = await bcrypt.hash(req.body.password, salt)
            } = req.body;
            const newAccount = await new account(
                {
                    username,
                    phonenumber,
                    email,
                    password: hashed,
                })
            newAccount.save();
            res.status(200).json(newAccount);
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }

    }

    //[post] api/account/login
    login = async (req, res, next) => {
        try {
            const {
                email,
                password: hashed,
            } = req.body;
            const user = await account.findOne({ email });
            const token = jwt.sign(
                { userId: user._id },
                process.env.jwt_access_token,
                { expiresIn: "48h" }
            );
            res.status(200).json({ token, user })
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    };
}


module.exports = new AccountControler;
