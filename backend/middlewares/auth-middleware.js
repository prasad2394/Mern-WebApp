const jwt = require("jsonwebtoken");
const User = require("../models/user-model");


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({message:"Unauthorized HTTP, Token is not Provided"});
    }
    const jwtToken = token.replace("Bearer ", "").trim();
    console.log("Token form auth middleware", jwtToken);
    //next();
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRETE_KEY);
        
        const userData = await User.findOne({email:isVerified.email}).
        select({
            password: 0,
        });

        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();

    } catch (error) {
        return res.status(401).json({message:"Unauthorized Invalid Token"});
    }

}

module.exports = authMiddleware;