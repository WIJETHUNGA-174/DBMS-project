const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
app.post("/login",(req,res)=>{
    const email = req.body.email;
    console.log(email);
    const password = req.body.password; 
    console.log(password);
    connection.query("SELECT email, password FROM USER WHERE email = ? AND password = ?",[email,password],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            console.log(result);
            res.send(result);
        }
        else{
            console.log("Wrong username/password combination");
            res.send({message:"Wrong username/password combination!"});
        }            
    });
});

/*UserID : UserID,
  UserType : UserType,
  FirstName : FirstName,
  LastName : LastName,
  Phone : Phone,
  Address : Address,
  email : email,
  password : password,
*/

app.post("/signup",(req,res)=>{
  const UserID = req.body.UserID;
  const UserType = req.body.UserType;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  const Address = req.body.Address;
  const email = req.body.email;
  const password = req.body.password;
  connection.query("INSERT INTO USER (UserID,UserType,FirstName,LastName,Phone,Address,email,password) VALUES (?,?,?,?,?,?,?,?)",[UserID,UserType,FirstName,LastName,Phone,Address,email,password],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
      }
  });
});
  
