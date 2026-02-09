import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './router/post.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const PORT = process.env.PORT || 8000;

// app is basically what we use for routes, middleware , listening
const app  = express()

app.use(express.json())
app.use(express.urlencoded( {extended: false}))
app.use( '/api/posts' , posts)
// static folder
// app.use(express.static(path.join(__dirname, 'public')))

// app.get( '/' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get( '/about' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

app.listen( PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`)
})