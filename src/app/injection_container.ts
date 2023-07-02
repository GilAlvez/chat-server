import * as awilix from 'awilix';
import { SendMessageUseCaseImpl } from 'domain/use_cases';
import type { FastifyInstance } from 'fastify';

import { PostgreDataSourceImpl } from 'data/data_sources';
import { MessageControllerImpl } from 'presentation/controllers';
import { MessageRepositoryImpl } from 'data/repositories_impl';
import { SendMessageRouteImpl, FastifyRoutesImpl } from 'presentation/routes/fastify';

export class InjectionContainer {
  private static container = awilix.createContainer();

  public static getDependency<T>(name: string): T {
    return InjectionContainer.container.resolve<T>(name);
  }

  public static registerDependencies(app: FastifyInstance) {
    this.container.register({
      // App
      app: awilix.asValue(app),
      // Use Cases
      sendMessageUseCase: awilix.asClass(SendMessageUseCaseImpl),
      // Repositories
      messageRepository: awilix.asClass(MessageRepositoryImpl),
      // Data Source
      dataSource: awilix.asClass(PostgreDataSourceImpl),
      // Controllers
      messageController: awilix.asClass(MessageControllerImpl),
      // Routes
      routes: awilix.asClass(FastifyRoutesImpl),
      sendMessageRoute: awilix.asClass(SendMessageRouteImpl),
    });
  }
}
