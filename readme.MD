# REST API WITH MONGODB
- npm install express nodemon dotenv cors mongoose uuidv4

- install thunder client in vs code extension for alternative of postman software.
----
### Routeing
- api/users/ : GET : Return all users
- api/users/:id : GET : Return specific user
- api/users/ : POST : add user
- api/users/:id : PATCH : update specific user
- api/users/:id : DELETE : delete specific user
----
### Controllers
```javascript
const {v4: uuidv4} = require("uuid");
const User = require("../models/user.model");


// get all users
const getAllUsers = async (req,res) =>{

   try{
    const users = await User.find();
    res.status(200).json(users)
   }
   catch{
    res.status(500).send(error.message)
   }
};


// get only one user
const getOneUser = async(req,res) =>{

    try{
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user)
    }
    catch{
        res.status(500).send(error.message)
    }
};


//create uses
const createUser = async (req,res) =>{

    try{
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch{
        res.status(500).send(error.message)
    }
};


//update use
const updatedUser = async(req,res) =>{

    try{
        const user = await User.findOne({id: req.params.id});
    user.name = req.body.name;
    user.age = Number(req.body.age);

    await user.save();
    
    res.status(200).json(user)
    }
    catch{
        res.status(500).send(error.message)
    }
};


//delete user
const deleteUser = async(req,res) =>{

    try{
        await User.deleteOne({id: req.params.id});
        res.status(200).json({message: "user is deleted"})
    }
    catch{
        res.status(500).send(error.message)
    }
};


module.exports = {getAllUsers, getOneUser , createUser, updatedUser , deleteUser};
```