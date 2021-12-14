function adminMiddlewareProducts (req, res, next){
    console.log(req.session.userLogged);

    if(req.session.userLogged && req.session.userLogged.email == 'martinalejandropm@gmail.com'){
        
    } else {
        res.redirect("/")
    }
    next()
    
    
}

module.exports = adminMiddlewareProducts