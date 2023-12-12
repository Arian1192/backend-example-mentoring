const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL_DATABASE= process.env.URL_DATABASE;
console.log(URL_DATABASE)
/**
 * @description Here we create the connection to the database, IT IS IMPORTANT TO CREATE THIS FILE WITH THE CONNECTION TO THE DATABASE
 * USING .env VARIABLES. not like who we are doing here.
 * Here we are using the mongoose.connect method to connect to the database with the uri of the database in raw
 * that is not a good practice, we should use the .env variables to hide the uri of the database.
 */

// TODO: ARREGLAR ESTO !

const dataBaseConnections = async () => {
    try{
        await mongoose.connect(URL_DATABASE);
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    dataBaseConnections
}
