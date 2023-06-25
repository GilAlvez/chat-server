import { IMessage } from 'domain/entities';

export interface ISendMessageUseCase {
  execute(message: IMessage): void;
}
