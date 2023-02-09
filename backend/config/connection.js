const MongoClient=require('mongodb').MongoClient

const state={
    db:null
}



module.exports.connect=async function(done)
{

    
    const url='mongodb://localhost:27017'
    const dbname='taxiBooking'
    const client = new MongoClient("mongodb://localhost:27017");

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('taxiBooking');
     state.db = db

    return db
 
}


module.exports.get=function(){
    return state.db
}