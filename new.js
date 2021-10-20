const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser')
const post = require('./models/Post')


//bodyParser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

//config
  //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set("view engine", "handlebars");

  app.get("/home", function(req, res){
    res.render('home.handlebars');
  })
  app.get("/formulario", function(req, res){
    res.render('formu.handlebars');
  });
  app.post("/index", function(req, res){
    post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(function(){
      res.redirect('/home')
    })
  })

  app.listen(8081, function(){
    console.log("Hello World!");
  });
