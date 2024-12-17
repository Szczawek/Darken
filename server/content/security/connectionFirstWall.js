function connectionFirstWall(req,res,next) {
    console.log("connection!")
    next()
}

export {connectionFirstWall}