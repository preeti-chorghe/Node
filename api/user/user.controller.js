const User = require("./user.model");

exports.getAllUser = async (req, res, next) => {
    const users = await User.find({ name: req.query.name });
    res.status(200).json(users);
};

exports.getUserById = async (req, res, next) => {
    console.log('req.params.id', req.params.id);
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
};

exports.createUser = (req,res,next) => {
    const user = new User({
        name: req.body.name
    });
    user.save();

    res.status(201).json(user);
};