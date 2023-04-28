import {Router} from "express";
import httpCode from "http-status-codes";

const { P1Model } = require("../models/p1.model.js");
const router = Router();

router.get("/nombre",(req,res)=>{
    P1Model.create(req.app)
        .readName().then(data =>{
        res.status(httpCode.OK).json(data);
    }).catch(err =>{
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})

router.get("/carnet",(req,res)=>{
    P1Model.create(req.app)
        .readCarnet().then(data =>{
        res.status(httpCode.OK).json(data);
    }).catch(err =>{
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})





module.exports = {router}