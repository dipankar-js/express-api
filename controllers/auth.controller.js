const { validationResult } = require('express-validator');

const USERS = [];

// {
//     email:
//     password:
// }

exports.signupUser = ((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    USERS.push({
        email,
        password
    })
    res.status(201).send({})
})

exports.loginUser = ((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // find email exists or not in USERS
    const user = USERS.find((user) => user.email === email) // find --> return the whole object 

    // {}  ---> false ---> !false
    // {......} ---> true
    // if user does not exists
    if(!user) {
        return res.status(401).send({message: 'Invalid Username or Password'});
    }

    // Check Password is correct or not
    const isPasswordCorrect = user.password === password;

    if(!isPasswordCorrect) {
        return res.status(401).send({message: 'Invalid Username or Password'});
    }

    res.status(201).send({message: 'Login is successfull'});
})