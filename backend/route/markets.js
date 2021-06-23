const router = require('express').Router();
let Market = require('../models/marketModel');
 
  

//ADD A NEW MARKET
router.post('/add',async(req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const category = req.body.category;
    const images = req.body.images; 
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;


//Save New Market
const newMarket = new Market({name,description,category,images,address,city,state});

newMarket.save()
    .then(() => res.json("Market Added"))
    .catch(err=>res.status(400).json('Error: ' + err));


});

//Get list of all Market
router.route("/").get((req,res) =>{
    Market.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;