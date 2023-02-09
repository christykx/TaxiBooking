const db = require('../config/connection')
const collection = require('../config/collections')
const bcrypt = require('bcrypt')
const Promise = require('promise')
const { response } = require('express')
const objectId = require('mongodb').ObjectId


module.exports = {


    doSignup: (userData) => {

        let findemail = userData?.email
        return new Promise(async (resolve, reject) => {
            userData.password = await bcrypt.hash(userData.password, 10)

            let userCheck = await db.get().collection(collection.USER_COLLECTION).findOne({ email: findemail })

            if (userCheck) {
                let err = 'Email id already exist'
                reject(err)
            }
            else {

                let udata = await db.get().collection(collection.USER_COLLECTION).insertOne(userData)
                // db.get().collection(collection.USER_COLLECTION).updateOne({ email: findemail }, { $set: { "isVerified": false } })
                resolve(udata)

            }

        })

    },


    doLogin: (userData) => {
        try {
            return new Promise(async (resolve, reject) => {
                let response = {}
                let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })

                if (user) {
                    bcrypt.compare(userData.password, user.password).then((status) => {
                        if (status) {
                            console.log("Login success")
                            response.user = user
                            response.status = true
                            resolve(response)
                        } else {
                            let err = "Please check your Password"
                            console.log("login fail")
                            console.log("Please check your Password");
                            reject(err)
                        }
                    }).catch((err) => {
                        console.log(err);
                        reject(err);
                    })
                } else {
                    let err2 = "Please check your Email id"
                    console.log("Please check your Email id");
                }
            })

        }
        catch (e) {
            console.log(e);
        }

    },


    doAddTaxi: (BookingData) => {
        console.log("33333333333333", BookingData);
        try {

            return new Promise(async (resolve, reject) => {

                db.get().collection(collection.TAXIBOOKING_COLLECTION).insertOne(BookingData)
                resolve(BookingData)
                
            })
        } catch (e) {
            console.log(e);
        }

    },


    findusernames: () => {
        try {
            return new Promise(async (resolve, reject) => {

                let allusers = await db.get().collection(collection.USER_COLLECTION).find().toArray()

                resolve(allusers)
            })
        }
        catch (e) {
            console.log(e);
        }

    },


    findbookings: () => {
        try {
            return new Promise(async (resolve, reject) => {

                let bookings = await db.get().collection(collection.TAXIBOOKING_COLLECTION).find().toArray()

                resolve(bookings)
            })
        }
        catch (e) {
            console.log(e);
        }

    },


    doAddPrice: (DriverData) => {
        let userid=DriverData.userid
        try {

            return new Promise(async (resolve, reject) => {
                let driverdata = await db.get().collection(collection.TAXIBOOKING_COLLECTION).findOneAndUpdate({ _id: new objectId(userid) }, { $set: { DriverData } })

                resolve(driverdata)
                
            })
        } catch (e) {
            console.log(e);
        }

    },



    finddriverinfo: (userId) => {
        try {
            return new Promise(async (resolve, reject) => {

                let bookings = await db.get().collection(collection.TAXIBOOKING_COLLECTION).aggregate([
                    {
                        $match: {
                            $and: [
                                {
                                    DriverData: { $exists: true }
                                },
                                {
                                    userid: userId
                                }
                            ]
                        }
                    }
                ]).toArray()
                
                
                resolve(bookings)
            })
        }
        catch (e) {
            console.log(e);
        }

    },



    dodeletedriverdata: (DriverData) => {
        let userId=DriverData.userid
        try {

            return new Promise(async (resolve, reject) => {
                let driverdata = await db.get().collection(collection.TAXIBOOKING_COLLECTION).updateMany({ userid:userId }, { $unset: { DriverData } })
                resolve(driverdata)
                
            })
        } catch (e) {
            console.log(e);
        }

    },


}

