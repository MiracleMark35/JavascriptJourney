import { createServer } from 'http'
const PORT = process.env.PORT

const users = [
    {id: 1, name: 'John Gleen'},
    {id:2 , name:'IMbis'},
    {id:3 , name: 'look Back'}


]

const server = createServer( (req, res) => {
   if( req.url === '/api/users' && req.method === 'GET'){
     res.setHeader('Content', 'application/json')
     res.write(JSON.stringify(users))
     res.end();
   } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')  {
const id  = req.url.split('/')[3]
const user = users.find( (user) => {
   return user.id === parseInt(id)
})
 res.setHeader('Content', 'application/json')
if(user){
   
     res.write(JSON.stringify(user))

}else{

    res.statusCode = 404;
     res.write(JSON.stringify( {message: 'User NOt FOUND'}))

}
     res.end();
   }else{
    res.setHeader('Content', 'application/json')
    res.statusCode = 404;
     res.write(JSON.stringify( {message: 'Route NOt FOUND'}))
     res.end();
   }
})

server.listen( PORT, () => {
    console.log(`server is running at ${PORT}`)
})