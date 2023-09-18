const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const cors = require('cors');

const Discount = require('./models/Discount');

const  ObjectID = require('mongodb').ObjectId;

const uri = process.env.IPMONGODB;

mongoose.connect(uri);

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/AddDiscount", async (req, res) => {
  console.log("OK");
  try {
    const {data}  = req.body;
    const Inputdata = [];
    console.log(data.length);
    //console.log(data[0].Material);
    for(let i=1; i < data.length; i++)
    {
      Inputdata.push({
        Material:data[i].Material,
        Description:data[i].Description,
        Brand:data[i].Brand,
        ProductGroup:data[i].ProductGroup,
        Detail:data[i].ProductGroupDetail,
        Distributor:data[i].THDistributorDiscountClass,
        PriceList:data[i].PriceList,
        O:data[i].O,
        C:data[i].C,
        B:data[i].B,
        A:data[i].A,
        S:data[i].S,
      });
    }
    console.log(Inputdata);
    const discount = await Discount.create(Inputdata);
      res.status(200).json(discount);
  } catch (err) {
      console.log(err);
  }
});

app.post('/ReadDiscount',async (req, res,next) => {
  try { 
      var  data  = req.body.Material;
      console.log(data);
      const discount = await Discount.find({'Material':data});   
      res.status(200).json(discount);
   }          
  catch (err) 
  {
    console.log(err);   
  }
});

app.post("/AddOneDiscount", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input Material

    const { Material, Description, Brand , ProductGroup ,Detail, Distributor ,PriceList, O , C ,B , A , S} = req.body;

    if (!(Material && Description && Brand && ProductGroup && Detail && Distributor && PriceList && O && C && B && A && S )) {
      res.status(400).send("All input is required");
    }
    // check if user already exist

    const oldDiscount = await Discount.findOne({ Material, Description, Brand , ProductGroup ,Detail, Distributor ,PriceList ,O , C ,B , A , S });

    if (oldDiscount) {
      return res.status(409).send("Data errer");
    }
    const discount = await Discount.create({
      Material, Description, Brand , ProductGroup ,Detail, Distributor ,PriceList ,O , C ,B , A , S
    });

    res.status(200).json(discount);
  } catch (err) {
    console.log(err);
  }
});

app.post('/updateDiscount', async (req, res, next) => {
  console.log(req.body)
  try {
      const { id, Material, Description, Brand , ProductGroup , Detail, Distributor ,PriceList ,O , C ,B , A , S } = req.body;
      const Discountdata = await Discount.findByIdAndUpdate({ _id: new ObjectID(id) },{
        Material, Description, Brand , ProductGroup ,Detail, Distributor ,PriceList ,O , C ,B , A , S
        });
        res.status(200).json(Discountdata);
  }
  catch (err) {
      return res.status(400).json({
          title: 'error',
          error: 'Discount id'
      })
  }
});

app.post('/deleteDiscount', async(req, res, next) => {
  console.log(req.body)
  try {
      // Get user input
        const  {id} = req.body;
        await Discount.findByIdAndRemove({ _id: new ObjectID(id) });
        return res.status(200).json({
          title: 'Remove User success', 
      })  
  }
  catch (err) {
      return res.status(400).json({
          title: 'error',
          error: 'Error Remove'
      })
  }

});

app.post("/AddOneDiscount2", async (req, res) => {
  
 console.log(req)
});

const port = process.env.PORT || 7010;

app.listen(port, (err) => {
    if (err) return console.log(err); 
    console.log('server running on port ' + port);
})   