import mongoose from "mongoose";
const {Schema,model} = mongoose;

const userSchema = new Schema({
    first_name : {type:String, required:true},
    last_name : {type:String, required:true},
    email : {type:String, required:true},
    contact_number : {type:String, required:true},
    password : {type:String, required:true}
}, {timestamps:true});

const users = model('Users', userSchema);
export default users;