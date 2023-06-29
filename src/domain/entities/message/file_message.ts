import { MessageType } from 'domain/enums';
import { IMessage } from '.';

export interface IFileMessageData {
  url: string;
  name: string;
  size: number;
  mimeType: string;
}

export interface IFileMessage extends IMessage<IFileMessageData> {
  type: MessageType.FILE;
}
