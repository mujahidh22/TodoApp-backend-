const Todo = require("../models/Todo") //get the schema of the Todo from 'model' folder

// Define route handler

exports.deleteTodo = async (req, res) => {
    try {
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success : true,
            message : "Todo Deleted",

        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error',
        });
    }
}