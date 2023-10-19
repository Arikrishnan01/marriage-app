import UserModel from '../Models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try{
        const { userName, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email});

        /** CHECK THE USER IS ALREADY EXISTING */
        if(existingUser){
            return res.status(400).json({
                message: "User is already exist!! use some other email.."
            });
        }

        /**HASH THE PASSWORD BECAUSE NOBODY WON'T GET */
        const hashedPassword = await bcrypt.hash(password, 10);

        /** CREATE NEW USER */
        const newUser = new UserModel({
            userName,
            email, 
            password: hashedPassword
        });
        await newUser.save()
        return res.status(200).json({
            message: "New user signup successfully!!!!",
            data: newUser
        });
    }
    catch(error){
    return res.status(500).json({
            message: "Internal Server error!!!"
        });
    }
};

export const signin = async(req, res) => {
    try{
        const {email, password} = req.body;
        // console.log(email)
        const User = await UserModel.findOne({ email });
        // console.log(User)

        /** CHECK THE USER IS ALREADY EXIST */
        if(!User){
            return res.status(404).json({
                message: "User is not exist!, Please give correct email...."
            });
        }

        /** MATCH THE PASSWROD */
        const passwordMatch = await bcrypt.compare(password, User.password);
        if(!passwordMatch){
            return res.status(400).json({
                message: "Password is incorrect, Please enter the correct pasword"
            });
        }

        /**GENERATE THE JWT TOKEN */
        const generateToken = jwt.sign(
            { userId: User._id, email: User.email },
              process.env.JWT_SECRET,
            { expiresIn: "24h"}
        )
        return res.status(200).json({
            message: "SignIn successfully!!",
            token: generateToken
        });
    }
    catch(error){
        return res.status(400).json({
            message: "Internal server error"
        });
    }
};