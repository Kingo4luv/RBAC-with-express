const {enforcer} = require('../config/casbin');
 

// Protect routes
exports.permitted = (resource, action) => {
    return async (req, res, next) => {
        const permission = await enforcer();
        if (!await permission.enforce(req.currentUser.role, resource, action)) {
            return res.status(401).send("You are not authorized");
        }
        next();
    }
};