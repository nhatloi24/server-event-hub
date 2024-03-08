const Router = require('express');
const { register } = require('../controller/authController');

const authRouter = Router();

authRouter.post('/register', register)

module.exports = authRouter;