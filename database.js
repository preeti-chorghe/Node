const mongoose = require('mongoose');
const {DB} = require('./config');
const dbconfig = { userNewUrlParser: true, userUnifiedTopology: true};

exports.connect = () => {
    mongoose.connect(DB.URL , dbconfig , () =>{
        console.log('Database connected');
    });
}
