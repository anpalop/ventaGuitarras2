import bcrypt from "bcrypt";

let usuarios = [
  { id: 1, username: "admin", password: bcrypt.hashSync("admin123", 10) },
  { id: 2, username: "user", password: bcrypt.hashSync("user123", 10) },
];

export function obtenerUsuarios() {
  return usuarios;
}

export function obtenerUsuariosSinPassword() {
  return usuarios.map((u) => ({ id: u.id, username: u.username }));
}

export function buscarUsuarioPorUsername(username) {
  return usuarios.find((u) => u.username === username);
}

export function agregarUsuario(username, password) {
  const existeUsuario = usuarios.find((u) => u.username === username);
  if (existeUsuario) {
    throw new Error("El usuario ya existe");
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const nextId = usuarios.length ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
  const nuevoUsuario = {
    id: nextId,
    username,
    password: passwordHash,
  };

  usuarios.push(nuevoUsuario);
  return { id: nuevoUsuario.id, username: nuevoUsuario.username };
}

export function actualizarUsuario(id, username, password) {
  const usuario = usuarios.find((u) => u.id === parseInt(id, 10));
  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  if (typeof username === "string" && username.trim() !== "") {
    usuario.username = username;
  }

  if (password) {
    usuario.password = bcrypt.hashSync(password, 10);
  }

  return { id: usuario.id, username: usuario.username };
}

export function eliminarUsuario(id) {
  const indiceUsuario = usuarios.findIndex((u) => u.id === parseInt(id, 10));
  if (indiceUsuario === -1) {
    throw new Error("Usuario no encontrado");
  }

  const removed = usuarios.splice(indiceUsuario, 1)[0];
  return { id: removed.id, username: removed.username };
}