// var express = require('express');
// var router = express.Router();
require('dotenv').config()
const { USER_COLLECTION } = require('../config/collections');

const { db } = require('mongodb');

const userHelpers = require('../helpers/user-helpers')


const objectId = require('mongodb').ObjectId

const controller = require('../controllers/userControllers')

const jwt = require("jsonwebtoken");


module.exports = {

  postSignup: async (req, res) => {
    try {
      userHelpers.doSignup(req.body)
        .then((response) => {
          if (response) {
            userid = response?.user?._id
            const accessToken = jwt.sign(
              {
                id: userid,
                email: response.email,
              },
              process.env.JWT,
              { expiresIn: "7d" })
            res.cookie("accessToken", accessToken,
              { withCredentials: true, secure: false, httpOnly: false }).status(200).json({ response })
          }
        }).catch((err) => {
          console.log(err);
          res.status(500).json(err)
        })

    }
    catch (e) {
      console.log(e);
    }

  },


  postLogin: function (req, res) {
    try {

      userHelpers.doLogin(req.body).then((response) => {

        if (response.status) {
          userid = response?.user?._id


          const accessToken = jwt.sign(
            {
              id: userid,
              email: response.email
            },
            process.env.JWT,
            { expiresIn: "7d" });
          res.cookie("accessToken", accessToken,
            { withCredentials: true, httpOnly: true, secure: false }).status(200).json(response)

        }

        else {
          console.log("-----error---");
        }
      })
    }
    catch (e) {
      console.log(e);
    }

  },

  postBook: function (req, res) {


    try {

      userHelpers.doAddTaxi(req.body).then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },


  getallusers: function (req, res) {
    try {

      userHelpers.findusernames().then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },


  getallbooking: function (req, res) {
    try {

      userHelpers.findbookings().then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },



  addprice: function (req, res) {


    try {

      userHelpers.doAddPrice(req.body).then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },


  getdriverdata: function (req, res) {
    try {
      userHelpers.finddriverinfo(req.params.id).then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },



  deletedriverdata: function (req, res) {


    try {

      userHelpers.dodeletedriverdata(req.body).then((response) => {
        if (response) {
          res.status(200).json(response)
        } else {
          console.log("-----error---");
        }
      }).catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrr", err);
        res.status(500).json(err)
      })

    }
    catch (e) {
      console.log(e);
    }

  },




}

