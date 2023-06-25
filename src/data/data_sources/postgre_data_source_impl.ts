import { IDataSource } from '.';

import { IMessage } from 'domain/entities';

import { PrismaClient } from '@prisma/client';
import { MessageDTO } from 'data/DTO';

export class PostgreDataSourceImpl implements IDataSource {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async sendMessage(message: IMessage): Promise<void> {
    const { user, ...data } = MessageDTO.fromEntity(message);
    try {
      await this.prisma.message.create({ data });
    } catch (e) {
      throw Error(`${e}`);
    }
  }
}
