const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log('conexão realizada com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao se concetar ao banco de dados :', error);
  });

module.exports = prisma;