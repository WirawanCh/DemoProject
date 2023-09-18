const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const cors = require('cors');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const Role = require('./models/role');
const  ObjectID = require('mongodb').ObjectId;

const uri = process.env.IPMONGODB;

mongoose.connect(uri);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/Signup", async (req, res) => {
    // Our register logic starts here
    try {
      // Get user input 
      //const { name, surname, username , password ,role ,age ,email ,phone , department , gender,address} = req.body;
      const { name, surname, username , password ,role , department} = req.body;
      // Validate user input
      if (!(name && password && name && surname && role && department)) {
        res.status(400).send("All input is required");
      }
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ username });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        surname, 
        username,
        password: encryptedPassword,
        role,
        department,
       /* age,
        email,
        phone,
        department,
        gender,
        address,*/
      });
  
      // return new user
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  });
  

app.post('/updateuser', async (req, res, next) => {
    console.log(req.body)
    try {
        // Get user input
        //const { name, surname, role , _id , email, phone, department , address , gender , age} = req.body;
        const {  id , name, surname, role , department } = req.body;
        const user = await User.findByIdAndUpdate({ _id: new ObjectID(id) },{
            name,
            surname,
            role, 
            department,
          /*  email,
            age,
            address,
            phone,
            gender,*/
          });
          // return new user
          res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json({
            title: 'error',
            error: 'Uesr id'
        })
    }
})  
app.post('/deleteuser', async(req, res, next) => {
    console.log(req.body)
    try {
        // Get user input
        const  _id = req.body;

          await User.findByIdAndRemove({ _id: new ObjectID(_id) });
       // const user = await User.findByIdAndRemove({ _id: new ObjectID(_id) });
          // return new user
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
 
})   

app.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        // Validate user input
        if (!(username && password)) {
        res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ username });

        if (user && ( await bcrypt.compare(password, user.password))) {
        // Create token
            console.log(bcrypt.compare(password, user.password));
            let token =jwt.sign({ userId: user._id  }, 'secretkey', { expiresIn: '24h' });
            return res.status(200).json({
                title: 'login',
                token: token
            })
        }
        else {
            console.log(err);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
})

app.get('/user',async (req, res, next) => {
    let token = req.headers.token; //token
    var decoded =  jwt.verify(token, 'secretkey');  
    try { 
        const user = await User.findById({ _id: new ObjectID(decoded.userId) });
        if (user) 
        {
            let tokenrole = jwt.sign({user}, 'secretkey'); 
            try { 
                const roleid =  user.role;
                console.log(roleid)
                const data = await Role.findOne({role: roleid});
                console.log(data)
                let tokenpage = jwt.sign({ pages: data.pages }, 'secretkey');   
                    return res.status(200).json({
                            title: 'user grabbed',
                            SecretID:tokenrole,
                            Auth:tokenpage
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
        else{
            console.log(err)
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
})

app.post('/role', async (req, res, next) => {
    try {
        // Get user input
        const role= req.body.role;
        const pages = req.body.rolemodel;
        await Role.updateOne( {role:role},{
            pages:pages,
        });
          // return new user
          return res.status(200).json({
            title: 'Update role success',
        })
    }
    catch (err) {
        return res.status(400).json({
            title: 'error',
            error: 'Update'
        })
    }
})
app.get('/userlist', async (req, res, next) => {
    try {
       // let DataExport = {_id:1 ,name:1, surname:1, role:1 , plant:1 , department:1 };
        const UserAll =  await User.find({},{ 
            "_id":1,
            "name": 1,
            "surname": 1,   
            "role": 1,
            "department": 1,
           /* "age": 1,
            "email": 1,
            "phone": 1,
            "gender":1,*/
        });
        console.log(UserAll) 
        return res.status(200).json(UserAll);
    } catch (err) {
        console.log(err);
    }     
})

app.get('/rolelist',  async (req, res, next) => {
    try {
        let role = req.headers.role;
        const DataExport = { _id:1 , pages:1, role:1 };
        const RoleAll =  await Role.find({role},DataExport);
        console.log(RoleAll) 
        return res.status(200).json(RoleAll)
    } 
    catch (err) 
    {
        console.log(err);
    }       
})

app.post('/profileedit', async (req, res, next) => {
    console.log(req.body)
    try {
        // Get user input
        //const {_id ,name, surname ,email, phone, department , address , gender , age } = req.body;
        const {_id ,name, surname , department} = req.body;
        const user = await User.findByIdAndUpdate(_id,{
            name,
            surname,
            department,
           /* email,
            age,
            address,
            phone,
           
            gender,*/
          });
          // return new user
          res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json({
            title: 'error',
            error: 'Uesr id'
        })
    }
})
app.post("/updatepassword", async (req, res) => {
    // Our register logic starts here
    try {
      // Get user input 
      const { _id, password } = req.body;
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
      // Create user in our database
      const user = await User.findByIdAndUpdate(_id,{
        password: encryptedPassword,
      });
      console.log(user);
      // return new user
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  });

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
    if (err) return console.log(err); 
    console.log('server running on port ' + port);
})   