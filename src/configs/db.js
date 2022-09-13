const  mongoose = require("mongoose")
// const url = "mongodb+srv://MohammadAli:MohammadAli@h3api.kscwrws.mongodb.net/Products"

const connect = () => {
    return mongoose.connect("mongodb+srv://MohammadAli:MohammadAli@h3api.kscwrws.mongodb.net/Products")
}

module.exports = connect ;