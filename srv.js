const http = require('http')
//const port = 8080 //non usare su Heroku
const PORT = process.env.PORT || 3000;
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Hello world citizen')
}).listen(PORT, ()=> console.log(`server on port ${PORT}`))
