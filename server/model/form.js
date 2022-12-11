import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    phone:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    school:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)

const Form =  mongoose.model("Form",FormSchema);
export default Form;