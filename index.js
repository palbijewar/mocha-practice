import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from "./src/routes/user.routes.js"

dotenv.config();

const app = express();

app.use(express.json());

console.log(process.env.MONGOOSE_URL)

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser:true
}).then(()=>console.log('Database connected')).catch((error)=>console.log(error.message));

app.use('/api', route);

let PORT=process.env.PORT||4000

app.listen(PORT, () => {
    console.log(`server runing on port : ${PORT}`)
});