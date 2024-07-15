const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/userController");


router.post('/', UsuarioController.cadastro);
router.get('/', UsuarioController.ListarUsuarios)
router.get('/:id', UsuarioController.BuscarUsuario);
router.put('/:id', UsuarioController.atualizar);
router.delete('/:id', UsuarioController.ExcluirUsuario);

module.exports = router;