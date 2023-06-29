import { IDataSource } from '.';

import { IMessage } from 'domain/entities';

import { PrismaClient } from '@prisma/client';
import { MessageMapper } from 'data/mappers';

export class PostgreDataSourceImpl implements IDataSource {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async sendMessage(message: IMessage): Promise<void> {
    const data = MessageMapper.fromEntity(message);
    try {
      await this.prisma.message.create({ data });
    } catch (e) {
      throw Error(`${e}`);
    }
  }
}
