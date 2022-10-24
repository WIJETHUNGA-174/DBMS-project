const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

/**
 * to login user already registered
 */
app.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password; 
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

/**
 * to register new user and save it in database
 */

app.post("/signup/",(req,res)=>{
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

app.get("/category",(req,res)=>{ 
  connection.query("SELECT CategoryName FROM category",(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
      }
  });
});

/*To get all cart item that preticular user have
*/
app.get("./cart",(req,res) =>{
  const email = req.body.email;
  connection.query("SELECT Product.ProductName , Cart.QTY , cart.Amount FROM USER join cart on user.UserID = cart.UserID join Product on cart.ProductID = product.ProductID where email = ?",
  [email],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
})

/**
 * To get all product that belong to a category
 */
app.get("./category1",(req,res)=>{
  const CategoryName = req.body.CategoryName;
  connection.query("SELECT Product.ProductName, Brand.BrandName  FROM category join product on category.CategoryID = product.CatagoryID join Brand on Brand.BrandID= product.B_ID where CategoryName = ?",
  [CategoryName],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
});

/**
 * to update the cart item when user add or remove item from cart
 */
app.post("./cart",(req,res)=>{
  const email = req.body.email;
  const ProductID = req.body.ProductID;
  const QTY = req.body.QTY;
  const Amount = req.body.Amount;
  connection.query("UPDATE cart SET QTY = ?, Amount = ? WHERE UserID = (SELECT UserID FROM USER WHERE email = 'jhon@gmail.com') AND ProductID = ?)",
  [QTY,Amount,email,ProductID],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
});

/**
 * to add new item to cart
 */
app.post("./cart",(req,res)=>{
  const email = req.body.email;
  const ProductID = req.body.ProductID;
  const QTY = req.body.QTY;
  const Amount = req.body.Amount;
  connection.query("INSERT INTO cart (UserID,ProductID,QTY,Amount) VALUES ((SELECT UserID FROM USER WHERE email = ?),?,?,?)",
  [email,ProductID,QTY,Amount],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
});

/**
 * to delete item from cart
 */
app.delete("./cart",(req,res)=>{
  const email = req.body.email;
  const ProductID = req.body.ProductID;
  connection.query("DELETE FROM cart WHERE UserID = (SELECT UserID FROM USER WHERE email = ?) AND ProductID = ?",
  [email,ProductID],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
});

/**
 * delete all item from cart when user checkout
 */
app.delete("./cart",(req,res)=>{
  const email = req.body.email;
  console.log(email);
  connection.query("DELETE FROM cart WHERE UserID = (SELECT UserID FROM USER WHERE email = ?)",
  [email],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
          console.log(result);
      }
  });
});
/**
 * Number Of Item in cart
 */
app.post("/cart/items",(req,res)=>{
    console.log("hello");
    const email = req.body.email;
    connection.query("SELECT COUNT(*) as len FROM cart WHERE UserID = (SELECT UserID FROM USER WHERE email = ?)",
    [email],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
    });
