import { IMessage } from 'domain/entities';
import { SendMessageUseCaseImpl } from 'domain/use_cases';

import type { IMessageController } from '.';

export class MessageControllerImpl implements IMessageController {
  constructor(private sendMessageUseCase: SendMessageUseCaseImpl) {}

  async sendMessage(message: IMessage): Promise<void> {
    this.sendMessageUseCase.execute(message);
  }
}
