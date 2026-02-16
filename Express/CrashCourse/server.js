import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './router/post.js'
import logger from './middleware/logger.js'
import ErrorHandler from "./middleware/error.js"
import Missing from "./middleware/notFound.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const PORT = process.env.PORT || 8003;

// app is basically what we use for routes, middleware , listening
const app  = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(logger)
app.use(express.static(path.join(__dirname, 'public')))
app.use( '/api/posts' , posts)
app.use(Missing)
app.use(ErrorHandler)

// static folder


// app.get( '/' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get( '/about' , (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'))
//   res.json({message: "ABOUT IS ON"})
// })

app.listen( PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})