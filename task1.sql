use DBMSmyproject;

Select invoice.Date,user.email,invoice.UserID,orders.invoiceID,orders.QTY
From orders join invoice on orders.invoiceID=invoice.invoiceID
join user on user.UserID=  invoice.UserID
WHERE ProductID=1
Group by invoice.Date 
order by invoice.Date desc;	

Select invoice.Date,user.email,invoice.UserID,orders.invoiceID,orders.QTY
From orders join invoice on orders.invoiceID=invoice.invoiceID
join user on user.UserID=  invoice.UserID
WHERE ProductID=1 and invoice.Date BETWEEN '2008-07-04' AND '2008-07-16' 
Group by invoice.Date 
order by invoice.Date desc;     

