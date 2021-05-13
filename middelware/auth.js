const jwt = require("jsonwebtoken");

// Protect routes
exports.auth = async (req, res, next) => {
    if (!req.session.jwt) {
        return res.json({error: {msg: "Please login to access this resource"}});
    }
    try {
        const payload = await jwt.verify(
            req.session.jwt,
            "qwerty"
        ) ;
        req.currentUser = payload.user;
    } catch (err) {}

    next();
};