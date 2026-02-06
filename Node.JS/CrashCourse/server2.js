import { createServer } from 'http'
const PORT = process.env.PORT

const users = [
    {id: 1, name: 'John Gleen'},
    {id:2 , name:'IMbis'},
    {id:3 , name: 'look Back'}
]

const logger = ( req, res , next) => {
  console.log(`${req.method} ${req.url} logger`)
  next()
}


// JSON MIDDLEWARE
 const jsonMiddleware = (req , res , next ) => {
  res.setHeader('Content-Type' , 'application/json')
  next()
 }
// RouteHandler for API users
const getUsersHandler = (req, res) => {
   res.write(JSON.stringify(users))
   res.end();
}

// Route Handler for GET / API /USER ID
const getUserbyId = (req, res) => {
  const id  = req.url.split('/')[3]
const user = users.find( (user) => {
   return user.id === parseInt(id)})
 res.setHeader('Content-Type', 'application/json')
if(user){
     res.write(JSON.stringify(user))
}else{
    res.statusCode = 404;
     res.write(JSON.stringify( {message: 'User NOt FOUND'}))
}
     res.end();
}

// not Found
const notFound = (req, res ) => {
 res.statusCode = 404;
     res.write(JSON.stringify( {message: 'Route NOt FOUND'}))
     res.end();
}

const addUser = (req, res) => {
  let body = '';
  req.on('data' , (chunk) => {
    body += chunk.toString()
  })

  req.on( 'end' , () => {
    const newUser = JSON.parse(body)
    users.push(newUser )
    res.statusCode = 201;
    res.write(JSON.stringify(users));
    res.end()
  })

}

const server = createServer( (req, res) => {

  logger( req, res , () => {

    jsonMiddleware (req, res , () => {
     
    if( req.url === '/api/users' && req.method === 'GET'){
      getUsersHandler(req, res)
   } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')  {
    getUserbyId(req, res)
   } else if(req.url === '/api/users/add' && req.method === 'POST') {
      addUser(req, res)
   }else{
    notFound(req, res)
   }
    })
 
})
  })
 

server.listen( PORT, () => {
    console.log(`server is running at ${PORT}`)
})