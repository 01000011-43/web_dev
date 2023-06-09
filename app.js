var express = require('express');
var mysql = require('mysql');
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var connection = mysql.createConnection({
    host:'',
    port:'3306',
    user:'',
    password:'',
    database:''
});
app.use(express.static('public'))

app.post('/do_register',function (req,res) {
    connection.connect();
    var user_name=req.body.username;
    var sql = "INSERT INTO user (username, password, name, tel, status) VALUES ('" +user_name +"', '123456', '张三', '13800000001', 0)"
    var str = " ";
    connection.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        str = "注册成功:用户名"+user_name;
        console.log(str);
        res.send(str);
    });
    connection.end();
});
app.listen(3000,function () {
    console.log('Server running at 3000 port');
});