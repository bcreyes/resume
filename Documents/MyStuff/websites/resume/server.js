var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');

var index = require('./routes/index');
var bjorn = require('./routes/bjorn');

var resume_app = express();

var options = {
	root:__dirname
};

//View Engine
resume_app.set('views', path.join(__dirname, 'views'));
resume_app.set('view engine', 'ejs');
resume_app.engine('html',require('ejs').renderFile);

//Set Static Folder
resume_app.use(express.static(path.join(__dirname, 'client')))

//Body parser
resume_app.use(bodyParser.json());
resume_app.use(bodyParser.urlencoded({extended: false}));

resume_app.use('/', index);
resume_app.use('/api', bjorn);

resume_app.listen(8002, function () {
  console.log('Bjorn.ninja has started, listening to port 8002..');
});
