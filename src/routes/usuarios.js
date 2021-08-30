const { usuarios } = require('../data/usuarios.json');

// Login de usuarios
function login(req, res) {
  const username = req.body.username;
  const passwd = req.body.passwd;
  for (const usuario of usuarios) {
    if (username === usuario.username && passwd === usuario.password) {
      console.log(`Login aprobado de ${username}`);
      let id = usuario.id;
      return res.status(200).json({ userid: id });
    }
  }
  return res.status(401).send('User not found');
}

// Registro de usuarios
function nuevoUsuario(req, res) {
  const nuevoUser = new Object(req.body);
  let id = 0;
  if (usuarios.length > 0) {
    const lastuser = usuarios.length - 1;
    id = usuarios[lastuser].id;
    id++;
  }
  nuevoUser.id = id;
  nuevoUser.pedidos = [];
  usuarios.push(nuevoUser);
  res.status(201).json(nuevoUser);
}

module.exports = {
  login,
  nuevoUsuario,
};
