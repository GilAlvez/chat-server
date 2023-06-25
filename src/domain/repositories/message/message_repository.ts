import { IMessage } from 'domain/entities';

export interface IMessageRepository {
  sendMessage(message: IMessage): Promise<void>;
}
