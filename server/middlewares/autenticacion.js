const jwt = require('jsonwebtoken');

//==============
//Verificar token
//===============

let verificaTonken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.seed, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decode.usuario;
        next();
    });
};

//==============
//Verificar admin role
//===============

let verificaAdmin = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }



};
module.exports = {
    verificaTonken,
    verificaAdmin
}