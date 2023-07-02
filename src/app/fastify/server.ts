import { default as fst } from 'fastify';
import { FastifyAppImpl } from './fastify_app_impl';

const fastify = fst({ logger: true });

const app = new FastifyAppImpl();
app.init(fastify);

fastify.register(async () => {
  app.routes.setup();
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log('Running at:', address);
});
