const express = require('express');
const router = express.Router();
const controller=require('../controllers/userControllers')


router.post('/signup',controller.postSignup);

router.post('/login',controller.postLogin);

router.post('/book',controller.postBook);

// router.get('/getallusers',controller.getallusers);

router.get('/getallbooking',controller.getallbooking);

router.post('/addprice',controller.addprice);

router.get('/getdriverdata/:id',controller.getdriverdata);

router.post('/deletedriverdata',controller.deletedriverdata);



 
module.exports = router;
