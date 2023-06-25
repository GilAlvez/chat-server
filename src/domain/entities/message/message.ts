import { IUser } from '..';

export interface IMessage<T1 = unknown, T2 = unknown> {
  id: string;
  user: IUser;
  data: T1;
  type: MessageType;
  status: MessageStatus;
  roomId: string;
  metadata?: T2;
  createdAt?: Date;
  updatedAt?: Date;
}
