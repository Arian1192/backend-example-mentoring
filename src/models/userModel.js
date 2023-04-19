/**
 * @description When the userSchema is created and imported here in the userModel, 
 * we create a new model with the userSchema.
 * This model will be used in the userController to create the CRUD methods.
 */
const {model} = require('mongoose'); // We import the model from mongoose.
const userSchema = require('../schemas/userSchema'); // We import the userSchema.
const User = model('user', userSchema); // We create a new model with the userSchema.
// We export the userModel to use in our controllers.
module.exports = User // We export the userModel to use in our controllers.