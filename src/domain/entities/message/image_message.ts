import { IMessage } from '.';

export interface IImageMessageData {
  url: string;
  name: string;
  size: number;
}

export interface IImageMessage extends IMessage<IImageMessageData> {
  type: MessageType.image;
}
