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

# Controllers

# Middlewares


# APP.use()

# Custom Error
# In Most Express Apps → It’s Custom Made
👉 A custom AppError class

👉 A custom error middleware

 👉 HTTP Error Helpers
👉 Custom error classes

👉 Validation library (Joi / Zod)

👉 Logging library (Winston / Pino)

👉 Centralized error middleware 

# 🏆 So What Should YOU Do?   

👉 Start with custom AppError
👉 Add asyncHandler
👉 Later add Zod or Joi for validation

# 🔥 The Real Industry Ways
The standard is:

✅ Consistency
✅ Proper HTTP status codes
✅ Centralized handling
✅ No crash leaks
✅ Clean response structure