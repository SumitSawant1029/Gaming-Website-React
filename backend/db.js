const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/GamingEccommerce?readPreference=primary&directConnection=true&tls=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected Successfully");

}

module.exports = connectToMongo;