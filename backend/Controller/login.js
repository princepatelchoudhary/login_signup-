const bcrypt = require('bcrypt');
const User = require("../Models/User");
// Login
exports.login = async (req,res) => {
    try
    {
        const {email,password} = req.body;
        console.log(email, password);
        if(!email || !password)
        {
            return res.status(400).json({
                success:false,
                message : "Please fill all the details carefully",
            })
        }

        // check for register user 
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success : false,
                message : "User does not exist",
            });
        }

        if(await bcrypt.compare(password,user.password)){
            // password match

            res.status(200).json({
                success : true,
                user,
                message:"User loged in successfully"
            });
        }
        else {
            // password not match
            return res.status(403).json({
                success : false,
                message : "Password does not match",
            })
        }
    }
    catch(err){
        console.error(err)
        return res.status(500).json({
            success : false,
            message : "Login false" 
        })
    }
}
