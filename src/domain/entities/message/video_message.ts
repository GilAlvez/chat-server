import { IMessage } from '.';

export interface IVideoMessageData {
  url: string;
  name: string;
  size: number;
}

export interface IVideoMessage extends IMessage<IVideoMessageData> {
  type: MessageType.VIDEO;
}
