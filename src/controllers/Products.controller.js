const express = require("express");

const route = express.Router()

const ProductsList = require("../models/product.model")

route.post('',async(req,res) => {
    try {
        const product = await ProductsList.create(req.body);
        console.log(product)
        res.status(201).send(product)
    }
    catch(error){
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

route.get("", async(req,res) => {
    try {
        const product = await ProductsList.find().lean().exec();
        res.status(201).send(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

// getting each product
route.get('products/:Id', async(req,res) =>{
    
    try {
        const product = await ProductsList.findById().lean().exec()
        res.status(201),send(product)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})

module.exports = route