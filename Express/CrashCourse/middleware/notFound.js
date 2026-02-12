 
 const Missing = (req, res, next) => {
    const error = new Error("Not Found Not YET")
    error.status = 404;
    next(error)
}

export default Missing