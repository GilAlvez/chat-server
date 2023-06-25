import { IMessageRepository } from '.';

import { IMessage } from 'domain/entities';

export class MessageRepositoryImpl implements IMessageRepository {
  // TODO: Implements data source
  constructor(private dataSource: any) {}

  async sendMessage(message: IMessage): Promise<void> {
    return await this.dataSource.sendMessage(message);
  }
}
