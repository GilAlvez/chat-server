import { IMessage } from 'domain/entities';

export interface IMessageController {
  sendMessage(message: IMessage): Promise<void>;
}
