var express = require('express');
var app = express();
var fs = require('fs');// read file user.json

//get user all
app.get('/getUsers',function(req,res){
  fs.readFile(__dirname+"/"+"user.json",'utf8',function (err,data){

    console.log(data);
    res.end(data);


  });

});

//get user by id
app.get('/getUsers/:id',function(req,res){

  fs.readFile(__dirname+"/"+"user.json",'utf8',function (err,data){
    var users = JSON.parse(data);//convert obj to json
    var user = users["user"+req.params.id]
    console.log(user);
    res.end(JSON.stringify(user));


  });


});

//create variable user4
var user =  {
  "user4": {
    "name": "kong",
    "password": "333",
    "occupation": "programmer",
    "id": 4
  }
}

//add user
app.post('/addUser',function(req,res){
  fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){

    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));

  });

});

//delete user4
app.delete('/deleteUser/:index',function(req,res){
  fs.readFile(__dirname+'/'+'user.json','utf8',function(err,data){
    data = JSON.parse(data);
    delete data['user'+req.params.index];
    console.log(data);
    res.end(JSON.stringify(data));



  });


});




var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port
  console.log("Application Run At http://%s:%s",host , port);



});
