import { IApp } from 'app/app';
import { InjectionContainer } from 'app/injection_container';
import { FastifyInstance } from 'fastify';
import { FastifyRoutesImpl } from 'presentation/routes/fastify/fastify_routes_impl';

export class FastifyAppImpl implements IApp {
  public async init(app: FastifyInstance) {
    InjectionContainer.registerDependencies(app);
  }

  public get routes() {
    return InjectionContainer.getDependency<FastifyRoutesImpl>('routes');
  }
}
