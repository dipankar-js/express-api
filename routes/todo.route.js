const express = require('express');
const router = express.Router()

const {getTodos, saveTodo, updateTodo} = require('../controllers/todo.controller');

// GET localhost:3000/api/todo/

// GET
router.get('/', getTodos);

//POST
router.post('/', saveTodo);

//put
router.put('/:id', updateTodo)


module.exports = router;