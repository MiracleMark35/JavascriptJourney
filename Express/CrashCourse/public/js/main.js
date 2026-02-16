
const getButton = document.querySelector("#get-posts")
const output = document.querySelector("#show-posts")
 const Form = document.querySelector("#add_post")

async function go() {
    try {
        
        const res = await fetch('http://localhost:8003/api/posts')

        if(!res.ok){
            throw new Error("Fetching falied in retrivieing")
        }
        console.log("ok");
        

        const posts = await res.json()
        console.log("ok2");
        output.innerHTML = '';
        console.log("ok3    ");
        posts.forEach(post => {
            const postLine = document.createElement("div")
            postLine.textContent =  post.title
            output.appendChild(postLine)
                    console.log("post addedd");
        });

    } catch (error) {
        console.log("Error fetching");
        
    }
}

async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const title = formData.get('title')
    

    try {
        const res = await fetch('http://localhost:8003/api/posts' , { method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },body: JSON.stringify({title})
    })

    if(!res.ok){
        throw new Error("ADDING FAILED")
    }

    const newPost = await res.json()
    const postLine = document.createElement('div')
    postLine.textContent = newPost.title
    output.appendChild(postLine)

    } catch (error) {
        console.log("ERRORADDING");
        
    }
}

getButton.addEventListener('click', go)
Form.addEventListener('submit' ,addPost )
