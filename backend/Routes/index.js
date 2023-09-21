
const router = require("express").Router();
const Createskey=require('../controllers/index') 

router.post('/Register',Createskey.Register)   

module.exports= router;