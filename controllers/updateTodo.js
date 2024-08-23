const Todo = require("../models/Todo") //get the schema of the Todo from 'model' folder

// Define route handler

exports.updateTodo = async (req, res) => {
    try {
        //first find the id
        const { id } = req.params;
        const { title, description } = req.body; //find the title description of that id

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )

        res.status(200).json({
            success: true,
            data: todo, // data k andar fetched data dal do
            message: `Updated successfully`,
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