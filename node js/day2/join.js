var http=require("http");
var mysql = require('mysql');
http.createServer((req,res)=>{
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"practice"
      });
      con.connect(function(err) {
          if (err) 
          throw err;
          console.log("Connected!");
          let sql ="select * from emp right outer join dept on emp.e_no=dept.e_no ";
          con.query(sql, function (err, result,fields) {
              if (err) throw err;
              console.log(result);
              console.log(result.length);
              res.write(JSON.stringify(result));
            res.end();
              // console.log(fields);
            });
          });
        
}
).listen(8000);

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database:"practice"
// });
// con.connect(function(err) {
//     if (err) 
//     throw err;
//     console.log("Connected!");
//     let sql ="select * from emp right outer join dept on emp.e_no=dept.e_no ";
//     con.query(sql, function (err, result,fields) {
//         if (err) throw err;
//         console.log(result);
//         console.log(result.length);
//         // console.log(fields);
//       });
//     });

    