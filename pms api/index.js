let http=require('http');
let fs=require('fs');
let url=require('url');

let products=JSON.parse(fs.readFileSync("data.json", 'utf8'));
// console.log(products.length)

http.createServer((req, res) => {
 
    let path=url.parse(req.url,true);
    // console.log(path);
    if(path.pathname=="/products" && req.method=="GET")
    { 
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(products));
    }
    else if (path.pathname=="/product" && req.method=="GET"){
        let id=Number(path.query.id);
        let product=products.find(product=>product.id===id);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(product));
    }
    else if(path.pathname=="/product" && req.method=="DELETE"){
        let id=Number(path.query.id);
        let index=products.findIndex(product=>product.id===id);
        products.splice(index,1);
        fs.writeFileSync("data.json", JSON.stringify(products));
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: "Product Deleted"}));
        // res.write("deleted");
        // console.log(products);
    }
    else if(path.pathname=='/product' && req.method=="POST"){
        console.log("===================================");
        let product="";
        req.on('data',(chunk)=>{
          product+=chunk;
        });
        req.on('end',()=>{
            // console.log(product);
            product=JSON.parse(product);
            product.id=products[products.length-1].id+1;
            // console.log(products.length);
            products.push(product);
            // console.log(product);
        fs.writeFileSync("data.json", JSON.stringify(products));
        console.log("end");
        });
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: "Product Created"}));
       

    }
    else if(path.pathname=="/product" && req.method=="PATCH"){
        let id=Number(path.query.id);
        let index=products.findIndex(product=>product.id===id);
        let temp=products[index];
        // console.log(temp);
        let product="";
        req.on('data',(chunk)=>{
          product+=chunk;
        });
        req.on('end',()=>{
            product=JSON.parse(product);
            product.id=id;
            if(product.name==null)
            product.name=temp.name;
            if(product.rate==null)
            product.rate=temp.rate;
           console.log(product);
           products[index]=product;
           fs.writeFileSync("data.json",JSON.stringify(products));
        });
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: "Product updateed"}));

    }
    else if(path.pathname=="/product" && req.method=="PUT"){
        let id=Number(path.query.id);
        let index=products.findIndex(product=>product.id===id);
        let product="";
        req.on('data',(chunk)=>{
          product+=chunk;
        });
        req.on('end',()=>{
            product=JSON.parse(product);
            product.id=id;
            console.log(product);
           products[index]=product;
           fs.writeFileSync("data.json",JSON.stringify(products));
        });
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: "Product updateed"}));

    }
    res.end();

}).listen(8000);

// console.log(data);