const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const creteUser = async(req, res = response) => {
    
    const { email, password } = req.body;
    
    try {

        let user = await User.findOne({ email });

        if( user )
            return res.status(400).json({
                ok: false,
                msg: 'USER_EXIST'
            });

        user = new User( req.body );

        //Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt);

        await user.save();
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'TALK_TO_ADMIN'
        })
    }
};

const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if( !user )
            return res.status(400).json({
                ok: false,
                msg: 'WRONG_EMAIL_PASSWORD'
            });
        
        const validPassword = bcrypt.compareSync( password, user.password);

        if( !validPassword )
            return res.status(400).json({
                ok: false,
                msg: 'WRONG_EMAIL_PASSWORD'
            });

            const token = await generateJWT(user.id, user.name);
            res.json({
                ok: true,
                uid: user.id,
                name: user.name,
                token
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'TALK_TO_ADMIN'
        })
    }
};

const refreshToken = async(req, res = response) => {

    const { uid, name } = req;

    const token = await generateJWT(uid, name);
    res.json({
        ok: true,
        uid,
        name,
        token
    })
};

module.exports = {
    creteUser,
    login,
    refreshToken,
}