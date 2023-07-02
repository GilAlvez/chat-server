import type { FastifyInstance } from 'fastify';
import { MessageControllerImpl } from 'presentation/controllers';
import { IRoute } from '../../routes';

export class SendMessageRouteImpl implements IRoute {
  constructor(
    public opts: {
      app: FastifyInstance;
      messageController: MessageControllerImpl;
    },
  ) {
    this.opts.app.route({
      method: 'GET',
      url: '/',
      handler: (request, reply) => {
        return 'hello world';
      },
    });
  }
}
