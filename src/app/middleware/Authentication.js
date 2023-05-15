const jwt = require('jsonwebtoken');
const account = require('../models/Account');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const passport = require("passport");

const AuthenticationAccount = (role) => async (req, res, next) => {
    const authheader = req.header('Authorization');
    const accessToken = authheader && authheader.split(" ")[1];
    if (!accessToken) {
        return res.status(404).send('Token khong ton tai')
    }

    console.log(accessToken);
    try {
        const record = jwt.verify(accessToken, process.env.jwt_access_token);
        const user = await account.findOne({ _id: record.userId });

        if (!user || user.role !== role) {
            return res.status(403).send('Ban khong co quyen truy cap')
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

passport.use(
    new GooglePlusTokenStrategy(
      {
        clientID: `process.env.GOOGLE_CLIENT_ID`,
        clientSecret: `process.env.GOOGLE_CLIENT_SECRET`,
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, next) => {
        try {
          // Kiểm tra xem user đã đăng ký chưa
          const user = await account.findOne({ googleId: profile.id });
          if (user) {
            // Nếu user đã đăng ký, trả về thông tin user
            return next(null, user);
          }
  
          // Nếu user chưa đăng ký, tạo tài khoản mới với thông tin từ Google
          const newUser = new account({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: null,
            googleId: profile.id,
            role: "user"
          });
          await newUser.save();
  
          // Trả về thông tin user mới đăng ký
          return next(null, newUser);
        } catch (error) {
          return next(error, null);
        }
      }
    )
  );
  

module.exports = {
    AuthenticationAccount
}
