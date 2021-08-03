const express = require('express')

const app = express()

// middleware
// parsing the json body of request
app.use(express.json())

const todos = [
    {
      id: "1",
      title: "Learn Express"
    },
    {
      id: "2",
      title: "Learn JavaScript"
    },
    {
      id: "3",
      title: "Learn Web Dev"
    }
];

// GET API to fetch todos. // 200
app.get('/api/todos', (req, res) => {
  res.status(200).send({todos})
})

app.post('/api/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo)
    res.status(201).send({success: true})
})
 
app.put('/api/todos/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const title = req.body.title

    // FIND THE TODO BY THAT ID
    const todo = todos.find((todo) => todo.id === todoId);

    // FIND THE INDEX OF THAT TODO
    const index = todos.indexOf(todo);

    // DELETE THAT INDEX
    todos.splice(index, 1);

    // ADD THE NEW UPDATED TODO
    todos.push({
        id: todoId,
        title: title
    })

    res.status(201).send({success: true});
})


app.delete('/api/todos/:id' ,(req, res) => {
    const todoId = req.params.todoId

   // FIND THE TODO BY THAT ID
    const todo = todos.find((todo) => todo.id === todoId);

    // FIND THE INDEX OF THAT TODO
    const index = todos.indexOf(todo);

    // DELETE THAT INDEX
    todos.splice(index, 1);

    res.status(204).send({success: true});
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is started sucessfully');
})