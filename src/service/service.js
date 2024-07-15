const prisma = require("../lib/connect");

const CriarUsuario = async (dadosUsuario) => {
  const { nome, email } = dadosUsuario;

  try {
    const UsuarioNovo = await prisma.user.create({
      data: {
        nome,
        email
      }
    });
  } catch (erro) {
    throw new Error(erro.messege);
  }
};

const BuscarUsuario = async (id) => {
  try {
    const UsuarioBusca = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {}
};
