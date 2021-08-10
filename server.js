const express = require('express')
const todoRouter = require('./routes/todo.route');
const authRouter = require('./routes/auth.route');

const app = express()

// middleware
// parsing the json body of request
app.use(express.json())

// http://localhost:3000/api/todo

app.use('/api/todo', todoRouter);
app.use('/api/auth', authRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is started sucessfully');
});