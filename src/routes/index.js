const productRouter = require('./product');
const adminRourter = require('./admin');
const userRouter = require('./auth');
// const orderRouter = require('./order');
function route(app) 
{ 
    app.use('/api/product', productRouter);
    app.use('/api', productRouter);
    // app.use('/order', orderRouter);
    app.use('/api/admin', adminRourter);
    app.use('/api/auth', userRouter);

}

module.exports = route;