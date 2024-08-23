const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");             // POST
const {getTodo} = require("../controllers/getTodo");                   // GET
const {getTodoById} = require("../controllers/getTodoById");           // GET BY ID
const {updateTodo} = require("../controllers/updateTodo");             // PUT or UPDATE
const {deleteTodo} = require("../controllers/deleteTodo")              // DELETE
// define API routes
router.post("/createTodo",createTodo); // (path,controller)

router.get("/getTodo",getTodo);

router.get("/getTodoById/:id",getTodoById);

router.put("/updateTodo/:id",updateTodo);

router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;