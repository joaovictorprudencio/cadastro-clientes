const service = require("../service/service");

const cadastro = async (req, res) => {
  try {
    const usuario = await service.CriarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.messege });
  }
};

const BuscarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const busca = await service.BuscarUsuario(id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ error: error.messege });
  }
};

const ExcluirUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const Excluir = await service.DeletarUsuario(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.messege });
  }
};

const ListarUsuarios = async (req, res) => {
  try {
    const usuarios = service.Listar();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.messege });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  try {
    const UsuarioAtualizado = await service.AtualizarUsuario(id, req.body);
    req.status(200).json(UsuarioAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.messege });
  }
};

module.exports = {
  cadastro,
  BuscarUsuario,
  ExcluirUsuario,
  ListarUsuarios,
  atualizar
}
