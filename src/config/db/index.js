const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/education_online', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully!..');
    } catch(err){
        console.log('connect failed');
    }
}

module.exports = { connect };