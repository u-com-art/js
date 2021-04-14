var mysql      = require('mysql');//引入模块

//创建链接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : '2008'
});
 
connection.connect();
 //执行 query
connection.query('select cat_id,goods_name from p_goods limit 5', function (error, results, fields) {
 //获取查询的结果 results
 console.log(results[0].goods_name)
});
 
connection.end();