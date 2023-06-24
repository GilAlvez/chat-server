import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async (request, reply) => {
  return { hello: 'Hello World' };
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log('Running at:', address);
});
