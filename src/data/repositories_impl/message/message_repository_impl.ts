import { IMessageRepository } from 'domain/repositories_interfaces';

import { IMessage } from 'domain/entities';
import { IDataSource } from 'data/data_sources';

export class MessageRepositoryImpl implements IMessageRepository {
  constructor(private dataSource: IDataSource) {}

  async sendMessage(message: IMessage): Promise<void> {
    return await this.dataSource.sendMessage(message);
  }
}
