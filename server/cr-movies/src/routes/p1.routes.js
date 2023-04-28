import {Router} from "express";
import httpCode from "http-status-codes";
const { P1Model } = require("../models/p1.model.js");
const router = Router();

router.post("/",async (req,res)=>{
    P1Model.create(req.app)
        .create(req.body.name,req.body.genre,req.body.release_year,req.body.description,req.body.classification)
        .then(data => {
            res.status(httpCode.OK).json(data);
        }).catch(err => {
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})

router.get("/",(req,res)=>{
    P1Model.create(req.app)
        .read().then(data =>{
            res.status(httpCode.OK).json(data);
    }).catch(err =>{
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})
module.exports = {router}