const http= require('http');
const url= require('url');
const mysql= require('mysql');

http.createServer((req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"nodejs"
      });
        con.connect((err)=>{
            console.log("Connection established");
            if(err) throw err;

    //  console.log("Connection established");
     let path=url.parse(req.url,true);
   let sql="";
   let id;
let type="";
    if(path.pathname=='/products' && req.method=='GET'){
        console.log("confirmation");
    
        sql="select * from products";
        con.query(sql, function(err,result){
            if(err) throw err;
            //  console.log(result);
             res.writeHead(200, {"Content-Type": "application/json"})
            res.write(JSON.stringify(result));
            res.end();
        });
}
    else if(path.pathname=='/product' && req.method=='GET'){
        id=path.query.id;
        type=path.query.type;
        if(id!=null){
            sql="select * from products where id = "+mysql.escape(id);
        con.query(sql, function(err,result){
            if (err) throw err;
          //  console.log(result);
          res.writeHead(200, {"Content-Type": "application/json"})
          res.write(JSON.stringify(result));
          res.end();


        });
    }
    else if(type!=null){
        sql="select * from products where type = "+mysql.escape(type);
        con.query(sql, function(err,result){
          //  console.log(result);
          if(err) throw err;
          res.writeHead(200, {"Content-Type": "application/json"})
          res.write(JSON.stringify(result));
          res.end();

    });
}  
    }
    else if(path.pathname=='/product' && req.method=='POST'){
        let product="";
        req.on('data', function(chunk){
         product+=chunk;
        });
        req.on('end', function(){
            product=JSON.parse(product);
            // console.log(product);
            const {name,price,type}=product;
            // console.log(name,price,type);
            sql="Insert into products (id,name,price,type) values (null,?,?,?)";
             
            con.query(sql,[name,price,type], function(err){
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "application/json"})
                res.write(JSON.stringify({message:"Product Created"}));
                res.end();
            });
        })
        
    }
    else if(path.pathname=='/product' && req.method=='DELETE'){
        id=path.query.id;
        type=path.query.type;
        if(id!= null){
            sql="Delete from products where id = "+mysql.escape(id);
            con.query(sql, function(err,result){
                if (err) throw err;
              //  console.log(result);
              res.writeHead(200, {"Content-Type": "application/json"})
              res.write(JSON.stringify({message:"Product Deleted"}));
              res.end();
            });
        }
        else if(type!=null){
            sql="Delete from products where type = "+mysql.escape(type);
            con.query(sql, function(err,result){
                if (err) throw err;
              //  console.log(result);
              res.writeHead(200, {"Content-Type": "application/json"})
              res.write(JSON.stringify({message:"Product Deleted"}));
              res.end();
            });
        }

        
    }
    else if(path.pathname=='/product' && req.method=='PATCH'){
        id=path.query.id;
        let product="";
        req.on('data', function(chunk){
         product+=chunk;
        });
        req.on('end', function(){
            product=JSON.parse(product);
            console.log(product);
            const {name,price,type}=product;
            console.log(name,price,type);
        sql="update products set name=?,price=?,type=? where id="+mysql.escape(id);
            con.query(sql,[name,price,type], function(err){
                if (err) throw err;
                res.writeHead(200, {"Content-Type": "application/json"})
                res.write(JSON.stringify({message:"Product Updated"}));
                res.end();
            });
        
      })
    }
      
});


}).listen(8000);