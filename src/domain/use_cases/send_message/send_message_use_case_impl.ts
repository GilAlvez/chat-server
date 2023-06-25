import { ISendMessageUseCase } from '.';

import { IMessageRepository } from 'domain/repositories';
import { IMessage } from 'domain/entities';

export class SendMessageUseCaseImpl implements ISendMessageUseCase {
  constructor(private repository: IMessageRepository) {}

  async execute(message: IMessage): Promise<void> {
    return await this.repository.sendMessage(message);
  }
}
