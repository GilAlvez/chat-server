import { IMessage } from '.';

export interface ITextMessageData {
  text: string;
}

export interface ITextMessage extends IMessage<ITextMessageData> {
  type: MessageType.text;
}