import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Users", UserModel);