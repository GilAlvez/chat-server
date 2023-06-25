import { IMessage } from 'domain/entities';

export interface IDataSource {
  sendMessage(message: IMessage): Promise<void>;
}
