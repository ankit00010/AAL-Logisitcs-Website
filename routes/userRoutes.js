const express=require("express");
const { loginController, registerController } = require("../server/controllers/userController");

//router object
const require=express.Router();

//POST || LOGIN
router.post('/login',loginController)


//POST || REGISTER USER

router.post('/register',registerController);






module.exports=router;