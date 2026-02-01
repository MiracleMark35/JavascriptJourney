import http from 'http'
import fs from 'fs/promises'
import url from 'url';
import path from 'path'

const __fileurl = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileurl);

const PORT = process.env.PORT;
const server = http.createServer(  async (req, res) => {

// console.log(__fileurl, __dirname);

try {
  if(req.method === 'GET'){
    // const hello = req.method;
    // console.log(hello)

    let filePath;
   if(req.url === '/'){
   filePath = path.join(__dirname, 'public', 'index.html')
}else if(req.url === '/about'){
   filePath = path.join(__dirname, 'public', 'about.html')

}else{
   throw new Error('Not Found')
}
 
const data =  await fs.readFile(filePath);
res.setHeader( 'Content-Type', 'text/html');
res.write(data)
res.end()
  }else{
    throw new Error('Method Not Allowed')
  }
}catch(error){
    res.writeHead( 500, {'Content-Type': 'text/html'});
    res.end(`<h1>Server Erorr</h1>`)
}


})

server.listen( PORT, () => {
    console.log(`server is running at ${PORT}`)
})