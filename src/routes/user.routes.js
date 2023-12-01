import { createUsers , getUsers } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post('/users', (req,res,next)=>{
    createUsers(req.body)
    .then((data)=>{
        res.json(data)
    }).catch(next)
})

router.get('/users', (req,res,next)=>{
    getUsers(req)
    .then((data)=>{
        res.json(data)
    }).catch(next)
})

export default router;