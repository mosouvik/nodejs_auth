const jwt = require("jsonwebtoken");

exports.authJwt = (req, res, next) => {
    if (req.cookies && req.cookies.userToken) {
        jwt.verify(req.cookies.userToken, "souvik11234569@98", (err, data) => {
            req.user = data
            next()
        })
    } else {
        next()
    }
}