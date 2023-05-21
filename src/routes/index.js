const productRouter = require('./product');
const adminRourter = require('./admin');
const accountRouter = require('../routes/account');
const orderRouter = require('../routes/order');
const staffRouter = require('../routes/staff');
const { AuthenticationAccount } = require('../app/middleware/Authentication');

function route(app) 
{ 
    app.use('/api/product', productRouter);
    app.use('/api/admin', AuthenticationAccount('admin'),adminRourter);
    app.use('/api/account', accountRouter);
    app.use('/api/order', AuthenticationAccount('customer'), orderRouter);
    app.use('/api/staff', AuthenticationAccount('staff'), staffRouter);
}

module.exports = route;