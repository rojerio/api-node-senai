import { fastify } from 'fastify'
import {Database} from './banco-de-dados.js';

const server = fastify();
const database = new Database;

server.post('/artigos', (request, reply) => {

  await database.create({
    nome: '',
    descicao: '',
    conteudo: '',
    imagem: '',
    github: ''
  })

  return reply.status(201).send;
});

server.get('/', () => {
  return 'Brunna';
});

server.listen({
  port: 3333,
})