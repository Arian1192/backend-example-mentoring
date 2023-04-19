/**
 * @description Here in the userController we import our userModel and then we create the CRUD methods.
 * after that we export the methods to use in our routers. In this case the userRouter.
 */

const User = require('../models/userModel'); // We import the User model.

// get Methods
const getAllUsers = async (req, res) => {
   
    try{
        const users = await User.find() // We search all the users.
        if(users.length > 0){ // If the users exist we send the users.
            res.status(200).json(users) // We send the users.      
        }else{
            res.status(404).json({message: 'No users found'}) // If the users don't exist we send a message.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}


const getUserById = async (req, res) => {
  
    const {id} = req.params; // We get the id from the params.
    console.log("Ahora estoy en el controlador y significa que el middleware ya paso y que encontro el usuario")
    try{
        const user = await User.findById(id) // We search the user by id.
        if(user){
            res.status(200).json(user) // If the user exists we send the user.
        }else{
            res.status(404).json({message: 'User not found'}) // If the user doesn't exist we send a message.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}


// post Methods

const postUser = async (req, res) => {
    const {name, email, password} = req.body; // We get the data from the body.
    try{
        const isEmailExist = await User.find({email: email}) // We check if the user already exists.
        if(isEmailExist > 0){
            res.status(404).json({message: 'User already exists'}) // If the user already exists we send a message.
        }else{
            const user = new User({name, email, password}) // If the user doesn't exist we create a new user.
            const newUser = await user.save() // We save the new user.
            res.status(201).json(newUser) // We send the new user.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}

// patch Methods

const patchUser = async (req, res) => { 
    const {id} = req.params; // We get the id from the params.
    const body = req.body; // We get the data from the body.
    try{
        const userUpdate = await User.findByIdAndUpdate({_id: id} , body, {new: true}) // We update the user.
        if(userUpdate){
            res.status(200).json(userUpdate) // If the user exists we send the user updated.
        }else{
            res.status(404).json({message: 'User not found'}) // If the user doesn't exist we send a message.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}


// delete Methods

const deleteUser = async (req, res) => {
    const {id} = req.params; // We get the id from the params. 
    try{
        const userdeleted = await User.findByIdAndDelete(id) // We delete the user.
        if(userdeleted){
            res.status(200).json({message: 'User deleted'}) // If the user exists we send a message.
        }else{
            res.status(404).json({message: 'User not found'}) // If the user doesn't exist we send a message.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}