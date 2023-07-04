const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is this')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant find</p>
    <a href="/">Back Home</a>`)
    res.end()

})

server.listen(5000)