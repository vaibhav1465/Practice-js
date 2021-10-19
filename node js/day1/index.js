// http module
// let http=require("http");
 
// http.createServer((req,res)=>{
// console.log(req.url);
// let vk={
//     name:"vaibhav",
//     age:25
// }
// res.writeHead(200,{"Content-Type":"application/json"});
// res.write(JSON.stringify(vk));
// // res.writeHead(200,{"Content-Type":"application/json"});
// res.end();
// }
// ).listen(8000);

// url module
// var url = require('url');
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);


// email module
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'karankapoor1465@gmail.com',
//     pass: 'vaibhav51'
//   }
// });

// var mailOptions = {
//   from: 'karankapoor1465@gmail.com',
//   to: 'vkaushal1465@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };


// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
 

// upload module
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8000);
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath=files.filetoupload.path;
        var newpath = 'C:/Users/kaush/OneDrive/Desktop/network On/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) 
          throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8000);