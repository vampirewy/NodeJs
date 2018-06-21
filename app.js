var http = require("http");
var url = require("url");

http.createServer(function(request, response){
  var pathname=url.parse(request.url).pathname;
  console.log(pathname);
  if(pathname=='/index'){
    http.get('http://www.runoob.com/nodejs/nodejs-router.html',(res,req)=>{
      console.log(res);
    });
  }
}).listen(8888);
console.log('启动了');
