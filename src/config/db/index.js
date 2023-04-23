const mongoose = require('mongoose');


async function connect()
{
    try{
        mongoose.set('strictQuery', false);
        // await mongoose.connect('mongodb+srv://admin:Minh2709!@cluster0.ih5wct7.mongodb.net/OrderFood?retryWrites=true&w=majority');
       
        await mongoose.connect('mongodb+srv://admin:Minh2709!@cluster0.ih5wct7.mongodb.net/OrderFood')
        console.log('Connect succesfully');
    }
    catch(error)
    {
        console.log('failure');
    }
    
}

module.exports = { connect };
