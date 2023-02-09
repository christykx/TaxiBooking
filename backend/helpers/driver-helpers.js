const db = require('../config/connection')
const collection = require('../config/collections')
const bcrypt = require('bcrypt')
//const Promise=require('promise')
const { response } = require('express')
const objectId = require('mongodb').ObjectId

const driverHelpers = require('../helpers/driver-helpers')

module.exports = {

    doLogin: (driverinfo) => {
        try {
            return new Promise(async (resolve, reject) => {
                let loginStatus = false
                let response = {}
                let driver = { email: "driver@gmail.com",username:"driver", password: "12345" }
                // let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})

                if (driver.email == driverinfo.email) {

                    if (driverinfo.password == driver.password && driverinfo.username == driver.username ) {
                        // if(status){
                        console.log("Login success")
                        response.driver = driver
                        response.status = true
                        resolve(response)
                    } else {
                        console.log("login fail")
                        resolve({ status: false })
                    }
                    // }
                } else {
                    let err = "Login failed"
                    reject(err)
                    console.log("Login failed")
                }
            }).catch((err) => {
                console.log(err);
                return err;
            })

        } catch (e) {
            console.log(e);
        }

    },


 


}