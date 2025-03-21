const User = require('./../model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Role = require('../model/role.model.js');

exports.signin = async (req,res,next) => {
    let user = {
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password,10)
    };
    let result = await User.create(user);
    res.status(201).json(result);
}

exports.login = async (req,res,next) => {
    let user = await User.findOne({where: {email: req.body.user.email},include:[Role]});
    if(!user){
        return res.status(401).json({message: "Login ou mot de passe incorrect"});
    }
    if(!bcrypt.compareSync(req.body.user.password,user.password)){
        return res.status(401).json({message: "Login ou mot de passe incorrect"});
    }
    let token = jwt.sign({
        userId: user.id,
        role: user.roles
    },'RVNHSS0zQUwtTk9ERUpT');
    res.status(200).json({
        email: user.email,
        token: token
    });
}
