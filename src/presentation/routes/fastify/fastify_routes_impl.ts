import { SendMessageRouteImpl } from './messages';
import type { IRoutes } from '..';

export class FastifyRoutesImpl implements IRoutes {
  constructor(private opts: { sendMessageRoute: SendMessageRouteImpl }) {}

  async setup(): Promise<void> {
    this.opts.sendMessageRoute;
  }
}
