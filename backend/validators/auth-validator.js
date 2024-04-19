const { z } = require("zod");

//Creating an Object Schema
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3, {message:"Name must be atleast 3 characters"})
    .max(255, {message:"Name Must not be more than 255 Characters"}),

    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3, {message:"Email must be atleast 3 characters"})
    .max(255, {message:"Email Must not be more than 255 Characters"}),

    phone: z
    .string({required_error:"Phone Number is Required"})
    .trim()
    .min(10, {message:"Phone must be atleast 10 characters"})
    .max(20, {message:"Phone Must not be more than 20 Characters"}),

    password: z
    .string({required_error:"Password is Required"})
    .trim()
    .min(7, {message:"Password must be atleast 6 characters"})
    .max(1024, {message:"Password Must not be more than 1024 Characters"}),
});

module.exports = signupSchema;