// This file establishes connection between your application and database

const mongoose = require("mongoose");

require("dotenv").config(); // Jo bhi "env" folder k andar define kiya hoga wo sara load ho jyga 'process' object k andar

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("DB ka connection is successful")
        })
        .catch((error) => {
            console.log("Issue in DB connection");
            console.error(error.message);
            process.exit(1);
        })
}


// const dbConnect= async()=> {
//     try{
//         await mongoose.connect(process.env.DATABASE_URL);
//         console.log("Database connection successfull");
//     }
//     catch(err){
//         console.log("Database connection fail");
//     }
// }

module.exports = dbConnect;