const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const db = require('./db');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

/*测试服务*/
const test = require('./test');
server.use('/',test);

/*输出端口*/
server.listen(3000,()=>{
  console.log('server is running!')
})
