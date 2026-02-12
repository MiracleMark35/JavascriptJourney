import express from 'express'
import  {GetAllPost, GetPostByID ,CreatePost, EditPostById, DeletePostById} from "../controllers/postControllers.js"
const router = express.Router()

// get all posts
router.get( '/' , GetAllPost)
// get the id
router.get( '/:id' ,GetPostByID)

// create posts
 router.post('/',CreatePost )

router.put('/:id' , EditPostById)

//delete 
router.delete('/:id' ,DeletePostById )

export default router


