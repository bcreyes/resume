var express = require('express');
var resume_app = express();

resume_app.listen(8002, function () {
  console.log('Bjorn.ninja has started, listening to port 8002..');
});

var options = {
	root:__dirname + '/client'
};

resume_app.get('/', function (req,res){
	res.sendFile('./main.htm',options);
});
