
import express from "express";
const app=express(); 

var mysql = require('mysql');

var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'intern_test'
});
connection.connect(function(error){
  if(!!error){
    console.log('error connection');
  }
  else{
    console.log('connected to database');
    
  }
});
module.exports=connection;
/*

app.use(function(req,res,next){
  req.connection=connection;
  next();
});
app.get('/about',function(req,res){
  connection.query("SELECT * FROM User",function(error,rows,feilds){
  if(!!error){
    console.log('Error query');
  }
  else{
    console.log('success query');
    console.log(rows);
  }
})
})
*/