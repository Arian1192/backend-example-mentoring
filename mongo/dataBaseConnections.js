const mongoose = require('mongoose');

/**
 * @description Here we create the connection to the database, IT IS IMPORTANT TO CREATE THIS FILE WITH THE CONNECTION TO THE DATABASE
 * USING .env VARIABLES. not like who we are doing here.
 * Here we are using the mongoose.connect method to connect to the database with the uri of the database in raw
 * that is not a good practice, we should use the .env variables to hide the uri of the database.
 */


const dataBaseConnections = async () => {
    try{
        await mongoose.connect('mongodb+srv://arianlearning:arianlearning@cluster0.aqe7eco.mongodb.net/test');
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    dataBaseConnections
}
