const User = require('../models/userModel'); // We import the userModel.
const bcrypt = require('bcryptjs'); // We import bcrypt to encrypt the password.
const jwt = require('jsonwebtoken'); // We import jwt to create the JWT.
const PrivateKey = "Perro" // We create a private key to create the JWT. This key should be in a .env file.

// methods for authController
/**
 * @description We want to create 2 methods, on for login and one for register.
 */


const register = async (req, res) => {
    // We get the data from the body.
    // try{
    //     const bodyUser = req.body;  
    //     const passwordEncrypted = await bcrypt.hash(bodyUser.password, 10) // We encrypt the password.
    //     bodyUser.password = passwordEncrypted // We replace the password with the encrypted password. // We get the data from the body.
    //     const user = new User(bodyUser) // We create a new user with body data
    //     const newUser = await user.save() // We save the new user.
    //     const payload = {
    //         id: newUser._id,
    //         name: newUser.name,
    //         email: newUser.email,
    //         role: newUser.role
    //     }
    //     const token = jwt.sign(payload, PrivateKey)
    //     res.status(200).json(token) // We create the JWT.
    // }catch(error){
    //     res.status(500).json({message: error.message}) // If there is an error we send the error message.
    // }
}


const login = async (req, res) => {
    // try{
    //     const {email, password} = req.body; // We get the data from the body.
    //     const user = await User.findOne({ email}) // We check if the user already exists.
    //     if(!user){
    //         res.status(404).json({message: 'User not found'}) // If the user doesn't exist we send a message.
    //     }
    //     const passwordMatch = await bcrypt.compare(password, user.password) // We compare the password.
    //     if(!passwordMatch){
    //         res.status(404).json({message: 'Incorrect password'}) // If the password doesn't match we send a message.
    //     }else{
    //         const payload = {
    //             id: user._id,
    //             name: user.name,
    //             email: user.email,
    //             role: user.role
    //         }
    //         const token = jwt.sign(payload, PrivateKey)
    //         res.status(200).json(token) // We create the JWT.
    //     }
    // }catch(error){
    //     res.status(500).json({message: error.message}) // If there is an error we send the error message.
    // }
}


// const jwtMW = (app) => {
//     app.use(
//       '/',
//       expressjwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({
//         path: ['/register', '/login'],
//       })
//     )
//   }
  
//   module.exports = { authRouter, jwtMW }



module.exports = {
    register,
    login
}