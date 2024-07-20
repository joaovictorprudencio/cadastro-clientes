const prisma = require("../lib/connect");

const CriarUsuario = async (Usuario) => {
  const { nome, email } = Usuario;

  try {
    const UsuarioNovo = await prisma.user.create({
      data: {
        nome,
        email
      }
    });

    return UsuarioNovo;
  } catch (erro) {
    throw new Error(erro.messege);
  }
};

const BuscarUsuario = async (id) => {
  
  try {
    const UsuarioBusca = await prisma.user.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return UsuarioBusca;
  } catch (error) {
    throw new Error(error.messege);
  }
};

const AtualizarUsuario = async (id, UsuarioNovo) => {
  try {
    const { nome, email } = UsuarioNovo;

    const UsuarioAtualizado = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        email,
      },
    });

    return UsuarioAtualizado ;
  } catch (erro) {
    throw new Error(erro.messege);
  }
};

const DeletarUsuario = async (id) => {
  try {
    await prisma.user.delete({
    where:{id: parseInt(id)}
  });

  } catch (error) {
    throw new Error(erro.messege)
  }

}

const Listar = async () => {
    try{
        const usuarios = await prisma.user.findMany();
        return usuarios;
    } catch(erro) {
        throw new Error(error.messege)
    }
};

module.exports = {
    Listar,
    CriarUsuario,
    DeletarUsuario,
    AtualizarUsuario,
    BuscarUsuario
};


