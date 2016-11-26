var express = require('express')
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var shell = require('./AuxHelper/ShellHelper/shellWriter');


//Hello World
app.get('/', function (req, res) {
  res.send('Hello World')
})

shell.exec('java -classpath AuxHelper/EmailHelper/ Mail mell@negritosmail.com sylalp7@gmail.com Hola comoestas?',function(){
  console.log("executed");
})

/*

app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//BASE DE DATOS
mongoose.connect("mongodb://localhost/test");

var userSchema = {
	name: String,
	mail: String,
	password:String
};

var User = mongoose.model("User", userSchema);
//



// Inicio página
app.get('/',function(req,res){

	res.render("addUser");

});



//---Agregar usuario-----------------------------------------
app.post('/addUser',function(req,res){
	//verificación de correo existente
	//User.find(function(error,documento){
	//var mails = [];
	//for (var i = 0; i < documento.length; i++){
	//	mails.push(documento[i].mail);
	//}

	//console.log(mails);
	//var user=new User(data);

	//if (emails.indexOf(req.body.mail) != -1){
	//	res.render("addUser",{correos:"El correo ya existe"});

	//}
	//});

	var data={
		name:req.body.nombre,
		mail:req.body.email,
		password:req.body.password
	}
	customer.save(function(err){
		res.render("addUser",{correos: "Cliente registrado correctamente"});
	});


});
*/
app.listen(5000)
