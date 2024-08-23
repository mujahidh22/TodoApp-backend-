const Todo = require("../models/Todo") //get the schema of the Todo from 'model' folder

// Define route handler

exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Entire Todo Data is fetched",
            });
    }
    catch (err) {
        console.log(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server error',
            });
    }
}