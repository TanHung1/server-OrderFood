const productRouter = require('./product');
const adminRourter = require('./admin');
const accountRouter = require('../routes/account');
// const orderRouter = require('./order');
function route(app) 
{ 
    app.use('/api/product', productRouter);
    // app.use('/order', orderRouter);
    app.use('/api/admin', adminRourter);
    app.use('/api/account', accountRouter);
}

module.exports = route;