import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let posts = [ {id: 1 , name: "post 1"},
    {id: 2 , name: "post 2"},
    {id: 3 , name: "post 3"},
    {id: 4 , name: "post 4"}
]
const PORT = process.env.PORT || 8000;

// app is basically what we use for routes, middleware , listening
const app  = express()

// static folder
// app.use(express.static(path.join(__dirname, 'public')))

// app.get( '/' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get( '/about' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })
app.get( '/api/posts' , (req, res) => {

    const limit = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0){
       return  res.json(posts.slice(0 , limit))
    }
         res.json(posts)
    

  
})

app.get( '/api/posts/:id' , (req, res) => {
   //console.log(req.params.id); // { id: 1} when we type1 
 const id = parseInt(req.params.id)

 const post = posts.find( (post) => post.id === id)
 

if(!post ){
    return res.status(404).json({messafe: "not Found"})
}
    res.status(200).json(post)
})



app.listen( PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`)
})