// vamos a proteger las rutas de los usuarios comprobando que el email no exista en la base de datos

const express = require('express');
const {register, login} = require('../controllers/authController');
const noUserEmailRepeat = require('../utils/middlewares/noUserEmailRepeat');
const isUserOnDatabase = require('../utils/middlewares/isUserOnDatabase');


const authRouter = express.Router();

// aqui metemos el middleware para comprobar que el email no exista en la base de datos
authRouter.post('/register', noUserEmailRepeat, register);
authRouter.post('/login', login);


module.exports = authRouter;