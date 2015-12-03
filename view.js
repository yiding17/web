
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

//把根目录下的文件暴露给http客户端
app.use(express.static(__dirname))

app.get('/',function (req,res) {
	console.log('there is a http get request here...')
	res.render('home.ejs',{name:'omy'});
});

app.get('/request/:id',function (req,res){
	var locals = {name:'liu','id':req.params['id']};
	res.render('home.ejs',locals);
});

app.listen(3000);
