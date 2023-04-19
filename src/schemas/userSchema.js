/**
 * @description This is the user schema on we will create the Schema for the user model, this is the structure of the entity user.
 */
const {Schema} = require('mongoose'); // We import the Schema from mongoose.
const userSchema = new Schema({ // We create a new Schema.
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    role: {type:String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

module.exports = userSchema; // We export the userSchema to use in our models.