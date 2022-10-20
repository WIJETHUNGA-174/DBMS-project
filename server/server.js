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
app.post

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
app.get("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;   
    connection.query("SELECT FirstName, UserID FROM USER WHERE username = ? AND password = ?",[username,password],(err,result)=>{
        if(err){
            res.send({err:err});
        }else{
          res.send(result);
        }        
    });
});
