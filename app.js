const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT||3000;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',function(){
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt',function(text){
	return text.toUpperCase();
});
app.get('/',function(req,res){
	res.render('home.hbs',{
		pageTitle:'Hello Bin',
		welcomeMessage:'Welcome to my website'
	});
});
app.get('/about',function(req,res){
	res.render('about.hbs',{
		pageTitle:'About Page'
	})
});
app.listen(port,function(){
	console.log('The port is 3000');
});