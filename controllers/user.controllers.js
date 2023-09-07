const {v4: uuidv4} = require("uuid");
const User = require("../models/user.model");


const getAllUsers = async (req,res) =>{

   try{
    const users = await User.find();
    res.status(200).json(users)
   }
   catch{
    res.status(500).send(error.message)
   }
};

const getOneUser = (req,res) =>{
    res.status(200).json({
        message: "get one user",
    })
};

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

const updatedUser = (req,res) =>{
    res.status(200).json({
        message: "user is updated",
    })
};

const deleteUser = (req,res) =>{
    res.status(200).json({
        message: "user is deleted",
    })
};


module.exports = {getAllUsers, getOneUser , createUser, updatedUser , deleteUser};