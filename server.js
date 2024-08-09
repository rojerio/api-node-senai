import { fastify } from 'fastify'

const server = fastify();

server.get('/', () => {
  return 'Brunna';
});

server.listen({
  port: 3333,
})