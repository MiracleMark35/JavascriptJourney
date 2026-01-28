// import { generateRandom } from "./utils.js";

// console.log(generateRandom())

import {getPost} from  "./postController.js";


console.log(getPost().forEach(  baka => {
    console.log( ` The id is ${baka.id} and the title is ${baka.title}`);
    
}))