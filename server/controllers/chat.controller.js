const User = require("../models/user.model");

module.exports.User = (req, res) => {
    console.log("New chatterer created", req.body);
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
}