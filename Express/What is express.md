# Express
* is a popular web framework for NodeJs it simplifies the process of making web applications

* use for building server-side web applications and API

* Simplifies the process of handling HTTP requests and responses

# Covered in the Course
* Routing
* Request & Response 
* Custom Middleware
* CRUD Operations
* Error handling
* 3rd Party NPM 
* Controllers
* Fetching From Frontend
* Environment Variables

```javascript
// app is basically what we use for routes, middleware , listening
const app  = express()
```
# APP
const app = express()

This creates the main Express application.

Think of app as the entire server.

# Router
const router = express.Router()

This creates a mini app / sub-router.

Think of router as a group of related routes.