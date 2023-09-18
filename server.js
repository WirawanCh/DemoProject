import { createRequire } from "module";

const require = createRequire(import.meta.url);

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const cors = require('cors');

const Discount = require('./Account/models/Discount');

const  ObjectID = require('mongodb').ObjectId;
// const path = require('path');

// const uri = process.env.IPMONGODB;

mongoose.connect('mongodb://localhost:27017/Account');

const app = express();

app.set('views','src/views');
app.set('view engine', 'ejs');


app.use(cors());
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));

app.post("/AddDiscount", async (req, res) => {
  console.log("OK");
  try {
    const {data}  = req.body;
    const Inputdata = [];
    console.log(data.length);
   
    for(let i=1; i < data.length; i++)
    {
      Inputdata.push({
        Model:data[i].Model,
        Description:data[i].Description,
        Brand:data[i].Brand,
        ProductGroup:data[i].ProductGroup,
        ProductGroupDetail:data[i].ProductGroupDetail,
        THDistributorDiscountClass:data[i].THDistributorDiscountClass,
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
  if(req.body.Topic ==="Model")
  {
    try { 
        var  data  = req.body.Search;
        console.log(data);
        const discount = await Discount.find({'Model':data});   
        res.status(200).json(discount);
    }          
    catch (err) 
    {
      console.log(err);   
    }
  }
  if(req.body.Topic === "Brand")
  {
    try { 
      const data = req.body.Search;
      console.log(data);
      const discount = await Discount.find( { '$text': { '$search': data } });
      //const discount = await Discount.find({"Brand":data});   
      res.status(200).json(discount);         
    }          
    catch (err) 
    {
      console.log(err);   
    }
  }
});

//////////////Return Preview //////////////////////

app.post('/Preview',async (req, res) => {  
    const data = req.body.data;
    // const html = res.render('table',{data : data});
    return res.json(data);
  
  });


 //////////////////////////////////////////////////// 

app.post("/AddOneDiscount", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input Material

    const { Model, Description, Brand , ProductGroup ,ProductGroupDetail, THDistributorDiscountClass ,PriceList, O , C ,B , A , S} = req.body;

    if (!(Model && Description && Brand && ProductGroup && ProductGroupDetail && THDistributorDiscountClass && PriceList && O && C && B && A && S )) {
      res.status(400).send("All input is required");
    }
    // check if user already exist

    const oldDiscount = await Discount.findOne({ Model, Description, Brand , ProductGroup ,ProductGroupDetail, THDistributorDiscountClass ,PriceList ,O , C ,B , A , S });

    if (oldDiscount) {
      return res.status(409).send("Data errer");
    }
    const discount = await Discount.create({
      Model, Description, Brand , ProductGroup ,ProductGroupDetail, THDistributorDiscountClass ,PriceList ,O , C ,B , A , S
    });

    res.status(200).json(discount);
  } catch (err) {
    console.log(err);
  }
});

app.post('/updateDiscount', async (req, res, next) => {
  console.log(req.body)
  try {
      const { id, Model, Description, Brand , ProductGroup , ProductGroupDetail, THDistributorDiscountClass ,PriceList ,O , C ,B , A , S } = req.body;
      const Discountdata = await Discount.findByIdAndUpdate({ _id: new ObjectID(id) },{
        Model, Description, Brand , ProductGroup ,ProductGroupDetail, THDistributorDiscountClass ,PriceList ,O , C ,B , A , S
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

app.post('/deleteAll', async(req, res, next) => {
  try {
  
    await Discount.collection.deleteMany();
    return res.status(200).json({
      title: 'Drop All success', 
  })  
}
catch (err) {
  return res.status(400).json({
      title: 'error',
      error: 'Error Drop'
  })
}
});


const port = 3500;
app.listen(port, (err) => {
    if (err) return console.log(err); 
    console.log('server running on port ' + port);
})   