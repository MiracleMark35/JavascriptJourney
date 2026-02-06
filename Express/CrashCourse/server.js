import express from 'express'
const PORT = process.env.PORT;

// app is basically what we use for routes, middleware , listening
const app  = express()

app.get( '/' , (req, res) => {
  res.send('<h1>HELLO </h1>')
})


app.get( '/about' , (req, res) => {
  res.send('<h1>ABOUT </h1>')
})

app.listen( PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`)
})