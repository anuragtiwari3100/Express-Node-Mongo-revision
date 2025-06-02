const express = require("express");
const router = express.Router();

///import the controllers

const{createTodo} = require("../controller/createTodo")
const{getTodos,getTodoById} = require("../controller/getTodo")
const{updateTodo} = require("../controller/updateTodo");
const {deleteTodo} = require("../controller/deleteTodo")



//defining the API  routes


router.post("/createTodo",createTodo);
router.get("/getTodo", getTodos);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo", deleteTodo);