const express = require("express");

const connect = require("./src/configs/db");
const productsController = require("./src/controllers/Products.controller")
const app = express();

app.use(express.json());

app.use('/shopping_Items',productsController)
app.listen(3005, async() =>{
    try{
        await connect();
        console.log("listening on port 3005")
    }
    catch (err){
        console.log(err.message)
    }
})