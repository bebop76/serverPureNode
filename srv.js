const http = require('http')
const port = 8080
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Hello world citizen')
}).listen(port, ()=> console.log(`server on port ${port}`))