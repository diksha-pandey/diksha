var http=require('http');
http.createServer(function(req,res)
{
res.writeHead(200);
res.end('hello world');
} ) .listen(3000);
console.log('Server started on port 3000');

