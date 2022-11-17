const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const bodyParser = require('body-parser');
const { useParams } = require('react-router-dom');


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
    console.log("category");
  connection.query("SELECT CategoryName,CategoryID FROM category",(err,result)=>{
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
app.post("/cart/show",(req,res) =>{
  const email = req.body.email;
  connection.query("SELECT Product.ProductID, Product.ProductName ,Brand.BrandName, cart.QTY ,cart.Amount FROM cart JOIN Product ON cart.ProductID = product.ProductID JOIN brand ON product.B_ID = Brand.BrandID join user on cart.UserID = user.UserID WHERE user.email = ?",
  [email],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
      }
  });
})

/**
 * To get all product that belong to a category
 */
app.get("/category1",(req,res)=>{
  const CategoryName = req.body.CategoryName;
  console.log("arff")
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
app.post("/cart/update",(req,res)=>{
  const email = req.body.email;
  const ProductID = req.body.ProductID;
  const QTY = req.body.updatedQty;
  console.log(email);
    console.log(ProductID);
    console.log(QTY);
  connection.query("UPDATE cart SET QTY = ?, Amount = (select product.UnitPrice from product where product.ProductID=?)*? WHERE UserID = (select user.UserID from user where user.email=?) AND ProductID = ?",
    [QTY,ProductID,QTY,email,ProductID],(err,result)=>{
      if(err){
          res.send({err:err});
      }
      else{
          res.send(result);
      }
  });
}
);

/**
 * to add new item to cart
 */
app.put("/addcart",(req,res)=>{
    const email = req.body.email;
    const ProductID = req.body.ProductID;
    console.log(email);
    console.log(ProductID);
    const QTY = req.body.QTY;
    console.log(QTY);

    connection.query("INSERT INTO cart (UserID,ProductID,QTY,Amount) VALUES ((SELECT UserID FROM USER WHERE email = ?),?,?,(SELECT UnitPrice FROM Product WHERE ProductID = ?)*?)",
    [email,ProductID,QTY,ProductID,QTY],(err,result)=>{
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
app.post("/cart/deleteone",(req,res)=>{
  const email = req.body.email;
  const ProductID = req.body.ProductID;
  console.log(email);
    console.log(ProductID);
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
app.post("/cart/deleteall",(req,res)=>{
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
app.post("/cart/items/",(req,res)=>{
    
    const email = req.body.email;    
    connection.query("SELECT COUNT(*) as length FROM cart WHERE UserID = (SELECT USER.UserID FROM USER WHERE email = ?)",
    [email],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        else{
            res.send(result);            
        }
    });
    });
    /**
     * To get all product item and there brand
     */
    app.get("/product",(req,res)=>{
        connection.query("SELECT Product.ProductID, Product.ProductName, Product.UnitPrice, Product.StockQty, Brand.BrandName  FROM product join Brand on Brand.BrandID= product.B_ID",(err,result)=>{
            if(err){
                res.send({err:err});
            }
            else{
                res.send(result);
            }
        });
    }
    );

    /**
     * add to invoice
     */
    app.post("/order/invoice",(req,res)=>{
        const email = req.body.email;
        const Amount = req.body.total;
        const Address = req.body.Address;
        connection.query("INSERT INTO invoice (UserID,InvoiceDate,BilAmount,Address) VALUES ((SELECT UserID FROM USER WHERE email = ?),?,?,?)",
        [email,new Date(),Amount,Address],(err,result)=>{
            if(err){
                res.send({err:err});
            }
            else{
                res.send(result);
            }
        });
    }
    );
    /**
     * get sum of all item amount in cart
     * 
     */
    
    app.post("/cart/total",(req,res)=>{
        const email = req.body.email;
        connection.query("SELECT SUM(Amount) as total FROM cart WHERE UserID = (SELECT UserID FROM USER WHERE email = ?)",
        [email],(err,result)=>{
            if(err){
                res.send({err:err});
            }
            else{
                res.send(result);
                
            }
        });
    }
    );

    
    
    app.post("/category/serchByCategory",(req,res)=>{
        /* const CategoryID = req.query.CategoryID;
        console.log(CategoryID) */
        const CategoryID = req.body.CategoryID;
        connection.query("SELECT Product.ProductID, Product.ProductName, Product.UnitPrice, Product.StockQty, Brand.BrandName  FROM product join Brand on Brand.BrandID= product.B_ID WHERE product.CatagoryID= ?",
        [CategoryID],(err,result)=>{
            if(err){
                res.send({err:err});
            }
            else{
                res.send(result);
            }
        });
    }
    );

/* *
 * pace order
 * add deta to invoice
 * getting details from cart and invoice table
 * then add data to order
 * then delete all item from cart
 * then update product stock
 * */ 
app.post("/order/placeorder",(req,res)=>{
    console.log("place order");
    const email = req.body.email;
    const Address = req.body.Address;
    const Phone = req.body.Phone;

    connection.query("INSERT INTO invoice (UserID,addres,phone) VALUES ((SELECT UserID FROM USER WHERE email = ?),?,?)",
    [email,Address,Phone]);
    connection.query("SELECT *,invoiceID FROM cart join invoice WHERE cart.UserID=invoice.(SELECT UserID FROM USER WHERE email = ?)",
    [email],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        else{
            console.log(result);
            result.forEach(element => {
                connection.query("INSERT INTO orders (ProductID,invoiceID,QTY) VALUES (?,?,?)",
                [element.ProductID,element.invoiceID,element.QTY]);
                connection.query("DELETE FROM cart WHERE UserID = (SELECT UserID FROM USER WHERE email = ?)",
                [email]);
                connection.query("UPDATE product SET StockQty = StockQty - ? WHERE ProductID = ?",
                [element.QTY,element.ProductID]);
            });
        }
    });
}
);
