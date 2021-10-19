var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

con.connect(function(err) {
  if (err) 
  throw err;
  console.log("Connected!");
//   let sql="CREATE TABLE student(id int(11),name varchar(255),age int(11), born int(11),PRIMARY KEY(id))";
//   let sql="ALTER TABLE student modify born varchar(255) ";
// let sql="alter table student modify id AUTO_INCREMENT";
// let sql="INSERT INTO student VALUES('vaibhav',21, '1999')";
// let sql="INSERT INTO student (`name`, `age`, `born`) VALUES ('mahesh', '21', '2002')";
// let sql="alter table student modify born int(11)";
// let sql="insert into student (name,age,born) values ('gghn',21,2514)";
// let values =[
// ['llhn',21,2514],
// ['ppap',21,2514],
// ['llke',81,2515],
// ['ccs',8855,8545]
// ] 
// let sql="insert into student (name,age,born) values "+mysql.escape(values);
// let sql="select * from student where name like 'l%' ";
// let name="vaibhav";
// let age=21;
// var sql = 'SELECT * FROM student WHERE name = '+mysql.escape(name)+' OR age = '+mysql.escape(age);
// let sql ="select * from student order by name";

// var sql = "DELETE FROM student WHERE name = 'ppap'";
// var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
// var sql="drop table if exists customers";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
var sql = "INSERT INTO customers (name, address) VALUES "+mysql.escape(values);

  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    console.log(result);
    // console.log(fields);
  });
});
