const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("this is the homepage")
    }
    if(req.url ==='/about'){
        res.end('this is the abut page')
    }
    res.end(`
    <h1>OOPS there isnt anything things</h1>
    <p>We can't seem to the page you are lookijg for</p>
    <a href="/">back home</a>
    `
    )
})

server.listen(8080)
