const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send(
            "Auth Router is Working..."
        );
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);

        const {username, email, phone, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"Email Already Register"});
        }

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password,
        });

        res.status(201).json({
            message: "Registration Successful", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(),
        });

    } catch (error) {   
        //res.status(400).send({msg:"Register Page not found"});
        next(error);
    }
};

//User Login Controller
const login = async (req, res) => {
    try {
        const{email, password} = req.body;
        const userExists = await User.findOne({email});
        console.log(userExists);

        if(!userExists) {
            return res.status(400).json({message:"This Name User Not Available.. Please Register First"});
        }
        const user = await userExists.comparePassword(password);
        
        if(user){
            return res.status(200).json({
                message:"Login Successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        } else {
            res.status(401).json({message:"Invalid Password"});
        }
    } catch (error) {
        //res.status(500).json("Internal Server Error");
        next();
    }
}


// Send User Data Logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({msg:userData});
    } catch (error) {
        console.log(`Error from user root ${error}`);
    }
}


module.exports = {home, register, login, user};