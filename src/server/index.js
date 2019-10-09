import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
import "source-map-support/register";
//bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(express.static("public"));

//db connection
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
app.use(function(req,res,next){
  req.connection=connection;
  next();
});

app.get('/dbUser',function(req,res){
  connection.query("SELECT * FROM User",function(error,rows){
  if(!!error){
    console.log('Error query');
  }
  else{
    console.log('success query');
    console.log(rows); 
    res.json(rows);
  }
})
})
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


app.get("*", (req, res, next) => {
  const store = configureStore();
console.log('xxxxx')
  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      console.log("PROMISE")
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Find a band</title>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
