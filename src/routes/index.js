const productRouter = require('./product');
const adminRourter = require('./admin');
const accountRouter = require('../routes/account');
const orderRouter = require('../routes/order');
const { AuthenticationAdmin } = require('../app/middleware/Authentication');
// const orderRouter = require('./order');
function route(app) 
{ 
    app.use('/api/product', productRouter);
    // app.use('/order', orderRouter);
    app.use('/api/admin', adminRourter);
    app.use('/api/account', accountRouter);
    app.use('/api/order',   orderRouter);
}

module.exports = route;