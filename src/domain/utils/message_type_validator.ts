import {
  IAudioMessage,
  IFileMessage,
  IImageMessage,
  IMessage,
  ITextMessage,
  IVideoMessage,
} from 'domain/entities';
import { MessageType } from 'domain/enums/message_type';

export class MessageTypeValidator {
  public static isTextMessage(message: IMessage): message is ITextMessage {
    return message.type === MessageType.TEXT;
  }
  public static isAudioMessage(message: IMessage): message is IAudioMessage {
    return message.type === MessageType.AUDIO;
  }
  public static isVideoMessage(message: IMessage): message is IVideoMessage {
    return message.type === MessageType.VIDEO;
  }
  public static isFileMessage(message: IMessage): message is IFileMessage {
    return message.type === MessageType.FILE;
  }
  public static isImageMessage(message: IMessage): message is IImageMessage {
    return message.type === MessageType.IMAGE;
  }
}
