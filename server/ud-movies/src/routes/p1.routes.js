import {Router} from "express";
import httpCode from "http-status-codes";

const { P1Model } = require("../models/p1.model.js");
const router = Router();

router.put("/",async (req,res)=>{
    P1Model.create(req.app)
        .update(req.body.id,req.body.name,req.body.genre,req.body.release_year,req.body.description,req.body.classification)
        .then(data => {
            if(data == false){
                return res.status(httpCode.NOT_FOUND).json({"message":"movie not found"})
            }
            return res.status(httpCode.OK).json(data);
        }).catch(err => {
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})

router.delete("/",async (req,res)=>{
    P1Model.create(req.app)
        .delete(req.body.id)
        .then(data => {
            if(data == false){
                return res.status(httpCode.NOT_FOUND).json({"message":"movie not found"})
            }
            return res.status(httpCode.OK).json(data);
        }).catch(err => {
        console.log(err);
        res.status(httpCode.INTERNAL_SERVER_ERROR).json(err);
    })
})





module.exports = {router}