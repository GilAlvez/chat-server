import { IUser } from 'domain/entities';
import { MessageStatus, MessageType } from 'domain/enums';

export interface InputMessageDTO {
  id: string;
  user: IUser;
  data: unknown;
  metadata?: unknown;
  type: MessageType;
  status: MessageStatus;
  roomId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OutputMessageDTO {
  id: string;
  userId: string;
  data: string;
  metadata?: string;
  type: MessageType;
  status: MessageStatus;
  roomId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
