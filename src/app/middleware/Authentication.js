const jwt = require('jsonwebtoken');
const user = require('../models/Account');
const { request } = require('express');

// const Auth = {
//      verifyTokenAdmin : async (req, res, next) => {
//         const token  = await req.headers.token;

//         try {
//             if(token){
//                 const accessToken = token.split(" ")[1];
//                 jwt.verify(accessToken, process.env.jwt_access_token,(err, admin) =>{
//                     if(err){
//                        return res.status(403).json("Token is not valid");
//                     }
//                     req.admin = admin;
//                     next();
//                 });
//             }
//             else{
//                 res.status(403).json("You are not authenticated");
//             }
//         } catch (error) {
//             res.status(500).json(error);
//         }
        
//     },

    
// } //dang là object
 

const Auth = (req, res, next) =>{
    const authheader = req.header('Authorization');
    const accessToken = authheader && authheader.split(" ")[1];
    if (!accessToken) {
        return res.status(404).send('Token is not valid')
    }
    
    console.log(accessToken);
    try {
        const record = jwt.verify(accessToken, "minh")
        const account = user.findOne({_id : record.userId})
        req.account = account;
        next();
        console.log(record);
    } catch (error) {
        res.status(500).send(error)
    }
    
}
module.exports = {
    Auth
} ;
