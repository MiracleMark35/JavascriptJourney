let posts = [ {id: 1 , title: "post 1"},
    {id: 2 , title: "post 2"},
    {id: 3 , title: "post 3"},
    {id: 4 , title: "post 4"}
]

const GetAllPost = (req, res, next) => {

    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0){
       return  res.json(posts.slice(0 , limit))
    }
    res.json(posts)
}

const GetPostByID =  (req, res, next) => {
   //console.log(req.params.id); // { id: 1} when we type1 
 const id = parseInt(req.params.id)
 const post = posts.find( (post) => post.id === id)

if(!post ){
    const error =  new Error(`Coud'nt found post ${id} to see`)
    error.status = 404
    return next(error)
}
    res.status(200).json(post)
}


const CreatePost =(req, res,next) => {

//   console.log('METHOD:', req.method)
//   console.log('BODY:', req.body)
//   console.log('BODY:', req.body.id)
//    console.log('BODY:', req.body.title)
    
const neWPost = {
    id: posts.length + 1,
    title: req.body.title
}

if(!neWPost.title){
     const error =  new Error(`Pls include a title`)
    error.status = 404
    return next(error)
}
  posts.push(neWPost)
  console.log("Success")
res.status(200).json(posts)
 }



const EditPostById= (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find( (post) => post.id === id)

   
    if(!post){
        const error =  new Error(`Coud'nt found post ${id} to edit`)
    error.status = 404
    return next(error)
    }

    post.title = req.body.title;
    res.status(200).json(posts)
}


const DeletePostById=  (req, res,next) => {
    const id = parseInt(req.params.id)
    const post = posts.find( (post) => post.id === id)

    if(!post){
           const error =  new Error(`Coud'nt found post ${id} to delete`)
    error.status = 404
    return next(error)
    }

    posts = posts.filter( (post) => post.id !== id)
    res.status(200).json(posts)
}

export  {GetAllPost, GetPostByID ,CreatePost, EditPostById, DeletePostById}
