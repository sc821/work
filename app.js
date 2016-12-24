/**
 * Created by wsc on 2016/12/24.
 */
var express=require('express'),
    path=require('path');
var bodyParser = require('body-parser');
var app=express();
var users=[],
    title=[{title:'注册'},{title:'登录'},{title:'欢迎'}];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.resolve('view'));
app.get('/signup',function (req,res){
    res.render('signup.ejs',{Title:title[0].title});
});
app.post('/signup',function (req,res){
    users.push(req.body);
    //console.log(users);
    res.redirect('/signin');
});
app.get('/signin',function (req,res){
    res.render('signin.ejs',{Title:title[1].title});
});
app.post('/signin',function (req,res){
    var user=req.body;
    var userl=users.find(function (item){
        return item.name==user.name;
    });
    if(userl){
        res.redirect('/welcome');
    }else{
        res.redirect('/signin');
    }
});
app.get('/welcome',function (req,res){
    res.render('welcome.ejs',{Title:title[2].title});
});
app.listen(8080);