import mongoose from "mongoose";

const FunctionModel = mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    city: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        default: 0
    },
    gold: {
        type: String,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Users" 
    }
});

export default mongoose.model("Function", FunctionModel);