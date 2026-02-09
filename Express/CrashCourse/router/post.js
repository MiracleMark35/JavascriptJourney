import express from 'express'

const router = express.Router()

let posts = [ {id: 1 , name: "post 1"},
    {id: 2 , name: "post 2"},
    {id: 3 , name: "post 3"},
    {id: 4 , name: "post 4"}
]
// get all posts
router.get( '/' , (req, res) => {

    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0){
       return  res.json(posts.slice(0 , limit))
    }
    res.json(posts)
})
// get the id
router.get( '/:id' , (req, res) => {
   //console.log(req.params.id); // { id: 1} when we type1 
 const id = parseInt(req.params.id)
 const post = posts.find( (post) => post.id === id)

if(!post ){
    return res.status(404).json({messafe: "not Found"})
}
    res.status(200).json(post)
})

// create posts
 router.post('/', (req, res) => {
    console.log(req.body)

    res.status(200).json(posts)
 })


export default router


