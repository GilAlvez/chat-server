import fastify from 'fastify';
import { PostgreDataSourceImpl } from 'data/data_sources';
import { MessageRepositoryImpl } from 'data/repositories_impl';
import { SendMessageUseCaseImpl } from 'domain/use_cases';
import { MessageControllerImpl } from 'presentation/controllers';
import { SendMessageFastifyRouteImpl } from 'presentation/routes';

const app = fastify({ logger: true });

// TODO: dependecy injection
const postgreDataSource = new PostgreDataSourceImpl();
const messageRepository = new MessageRepositoryImpl(postgreDataSource);
const sendMessageUseCase = new SendMessageUseCaseImpl(messageRepository);
const messageController = new MessageControllerImpl(sendMessageUseCase);
const sendMessageRoute = new SendMessageFastifyRouteImpl(app, messageController);

// TODO: inject all routes with one router
sendMessageRoute.setup('/messages');

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log('Running at:', address);
});
