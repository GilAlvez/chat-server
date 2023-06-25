import { IMessage } from '.';

export interface IAudioMessageData {
  url: string;
  name: string;
  size: number;
  duration: number;
  mimeType: string;
  waveForm: number[];
}

export interface IAudioMessage extends IMessage<IAudioMessageData> {
  type: MessageType.AUDIO;
}
