const Todo = require("../models/Todo") //get the schema of the Todo from 'model' folder

// Define route handler

exports.getTodoById = async (req, res) => {
    try {
        // extract todo item basis on id
        const id = req.params.id; // first get the id
        const todo = await Todo.findById({ _id: id }) // fetch the data using that id

        res.status(200).json({
            success: true,
            data: todo, // data k andar fetched data dal do
            message: `updated successfully`,
        })


    }
    catch (err) {
        console.log(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server Error',
            });
    }
}