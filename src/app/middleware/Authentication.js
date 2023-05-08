const jwt = require('jsonwebtoken');
const account = require('../models/Account');

const AuthenticationAccount = (req, res, next) => {
    const authheader = req.header('Authorization');
    const accessToken = authheader && authheader.split(" ")[1];
    if (!accessToken) {
        return res.status(404).send('Token is not valid')
    }

    console.log(accessToken);
    try {
        const record = jwt.verify(accessToken, process.env.jwt_access_token)
        const user = account.findOne({ _id: record.userId })
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).send(error)
        console.log(error)
    }
}
const AuthenticationAdmin = (req, res, next) => {
    const authheader = req.header('Authorization');
    const accessToken = authheader && authheader.split(" ")[1];
    if (!accessToken) {
        return res.status(404).send('Token is not valid')
    }

    console.log(accessToken);
    try {
        const record = jwt.verify(accessToken, process.env.jwt_access_token)
        const user = account.findOne({ _id: record.userId })
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
    // AuthenticationAccount(req, res, () => {
    //     const accessAdmin = req.account.admin('true');
    //     if(accessAdmin)
    //     {
    //         next();
    //     }
    //     else{
    //         return res.status(500).send("you are not admin")
    //         console.log(error)
    //     }
    // });
}

module.exports = {
    AuthenticationAdmin,
    AuthenticationAccount
}
