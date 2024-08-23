const mongoose = require("mongoose");

// define the schema 
const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required:true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema); // "Todo" k naam se export kr diya