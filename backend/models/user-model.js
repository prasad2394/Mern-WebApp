const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

//bycrypt password
userSchema.pre('save', async function(next) {
    //console.log("pre method", this);
    const user = this;
    if(!user.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt();
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error){
        next(error);
    }
});

const User = new mongoose.model('User', userSchema);
module.exports = User;