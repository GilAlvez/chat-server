import { IDataSource } from '.';

import { IMessage } from 'domain/entities';

import { PrismaClient } from '@prisma/client';
import { MessageMapper } from 'data/mappers';

export class PostgreDataSourceImpl implements IDataSource {
  constructor(private opts: { prisma: PrismaClient }) {}

  async sendMessage(message: IMessage): Promise<void> {
    const data = MessageMapper.fromEntity(message);
    try {
      await this.opts.prisma.message.create({ data });
    } catch (e) {
      throw Error(`${e}`);
    }
  }
}
