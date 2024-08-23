const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO Api
const todoRoutes = require("./routes/todos");
app.use("/api/v1",todoRoutes); // mount the todo API route

// Start the Server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

// Connect to the Database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is HOMEPAGE baby </h1>`);
})
