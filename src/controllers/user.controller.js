import users from "../models/User.model.js";

export const createUsers = async (data) => {
    try {
const {email, contact_number, password, first_name, last_name} = data
    if(!email || !contact_number || !password || !first_name || !last_name){
    return "All fields are required"
}
    if(data.password.length < 8) {
        return "Password should contain more then 8 characters!";
    }
    return await users.create(data)
    } catch (error) {
    console.log(error.message)
    }
}

export const getUsers = async (req) => {
    try {
        return users.find()
    } catch (error) {
        console.log(error.message)
    }
}
