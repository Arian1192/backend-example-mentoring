const User = require('../models/userModel'); // We import the userModel.

// methods for authController
/**
 * @description We want to create 2 methods, on for login and one for register.
 */

//TODO: Create the register method in class
const register = async (req, res) => {}
//TODO: Create the login method in class
const login = async (req, res) => {}




//TODO: also we can create a middlewares to check if the JWT is valid or not
//TODO: Create the isTokenValid method to check if the JWT is valid or not at login and register and also any future 
//      method for any router that needs to be protected.