import http from 'http'
const PORT = process.env.PORT;
const server = http.createServer( (req, res) => {

if(req.url === '/'){
    res.setHeader('Content-Type' , 'text/html');
    res.end('<h1>hello Myfriends</h>')
}else if(req.url === '/about'){
        res.end('<h1>Secret 67</h>')

}

})

server.listen( PORT, () => {
    console.log(`server is running at ${PORT}`)
})