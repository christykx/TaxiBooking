const express = require('express');
const router = express.Router();


const driverHelpers = require('../helpers/driver-helpers');

 
router.post('/driverlogin', function (req, res) {
    try {
        driverHelpers.doLogin(req.body).then((response, error) => {
            if (response.status) {
                res.json({ status: true })
            } else {
                console.log("-----error---", error);
            }
        })
    }
    catch (e) {
        console.log(e);
    }

});





module.exports = router;
