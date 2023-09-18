const mongoose = require('mongoose')
const { Schema } = mongoose;

const discountSchema = new Schema({
    Material:String,
    Description:String,
    Brand:String,
    ProductGroup:String,
    Detail:String,
    Distributor:String,
    PriceList:String,
    O:String,
    C:String,
    B:String,
    A:String,
    S:String,
});
module.exports = mongoose.model("Discount", discountSchema);
