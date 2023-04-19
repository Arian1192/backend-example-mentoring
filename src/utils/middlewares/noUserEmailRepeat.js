const User = require("../../models/userModel")// We import the User model.

const noUserEmailRepeat = async (req, res, next) => {
    
    try{
        let email = req.body.email;
        const isEmailExist = await User.find({email: email})
        console.log(isEmailExist) // We check if the user already exists.
        if(isEmailExist.length > 0){
            res.status(404).json({message: 'User already exists'}) // If the user already exists we send a message.
        }else{
            next() // If the user doesn't exist we continue with the next middleware.
        }
    }catch(error){
        res.status(500).json({message: error.message}) // If there is an error we send the error message.
    }
}


module.exports = noUserEmailRepeat