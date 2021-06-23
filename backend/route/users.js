const router = require('express').Router();
let User = require("../models/userModel");


router.route("/add").post((req,res)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    const newUser = new User({first_name,last_name,email,password,password2});
    newUser.save()
        .then(()=>res.json('New User Added'))
        .catch(err =>res.status(400).json('Error: ' +err));
})

module.exports=router;
