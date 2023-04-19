const User = require("../../models/userModel")// We import the User model.

const isUserOnDatabase = async (req, res, next) => {
    const {id} = req.params; // We get the id from the params.
    try{
        const user = await User.findById(id)// We search the user by id.
        if(user){
            console.log("Entro en el middleware antes que en la ruta")// If the user exists we continue with the next middleware.
            next()
            
        }else{
            res.status(404).json({message: 'User not found at the middleware'}) // If the user doesn't exist we send a message.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}

module.exports = isUserOnDatabase