const bcrypt = require('bcrypt');
const User = require("../Models/User");

// Sign up route handler
exports.signup = async (req, res) => {
    try {
        // get data
        const { firstName, lastName, email, password } = req.body;

        // check if user already exist 
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            })
        }

        // Secured password 
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            })
        }

        console.log("Prince");
        // Create Entry for User
        let user = await User.create({
            firstName,lastName, email,password:hashedPassword
        });


        if(!user) {
            console.log("USer cannot be created");
            return;
        }

        return res.status(200).json({
            success : true,
            message : "User Created Successfully",
            data : user
        });
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "User cannot be register,Please try again later",
        })
    }
}