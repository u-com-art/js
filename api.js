const express=require('express') //引入模块
const mysql=require('mysql')
const app=express()              //调用express
const port=8080                  //服务运行的端口

app.get('/user',function(req,res){
     res.send("欢迎访问用户接口")
})
app.get('/list',(req,res)=>{
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
//    console.log(results)
   res.send(JSON.stringify(results))
  });
  connection.end();
  
})
app.get('/',(req,res)=>{
    const list=[
        {
            userid:111,
            name:"gofan",
            age:17
        },
        {
            userid:222,
            name:"gongwenjun",
            age:17
        },
        {
            userid:333,
            name:"ergozi",
            age:17
        }
    ]
    //将数组转为json字符串
    res.send(JSON.stringify(list))
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})