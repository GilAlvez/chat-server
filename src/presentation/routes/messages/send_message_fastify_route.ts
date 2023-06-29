import { IMessage } from 'domain/entities';
import { MessageStatus, MessageType } from 'domain/enums';
import { FastifyInstance } from 'fastify';
import { IMessageController } from 'presentation/controllers';
import { IRoute } from 'presentation/routes/route';

export class SendMessageFastifyRouteImpl implements IRoute {
  constructor(private fastify: FastifyInstance, private messageController: IMessageController) {}

  async setup(path: string): Promise<void> {
    const message: IMessage = {
      id: 'uid.generate()',
      user: {
        id: 'uid.generate()',
        firstName: 'Test',
      },
      data: {
        text: 'Hello World',
      },
      type: MessageType.TEXT,
      roomId: 'uid.generate()',
      status: MessageStatus.SENT,
    };

    this.fastify.post(path, async (request, reply) => {
      await this.messageController.sendMessage(message);
    });
  }
}
