const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    // _id:{type:String,required:false},
    title : {type:String, required : false},
    price : {type:String, required : false},
    category : {
        // _id : {type:String, required : false},
        name : {type:String, required : false},
        slug :{type:String, required : false},
    },
    description : {type:String, required : false},
    createdBy : {
        role : {type:String, required : false},
        // _id : {type:String, required : false},
        name : {type:String, required : false},
    },
    createdAt : {type:String, required : false},
    updatedAt : {type:String, required : false},
    slug: {type:String, required : false},
    image:{type:String, required : false}
},

)

const ProductsList = mongoose.model('products',ProductsSchema);
module.exports = ProductsList