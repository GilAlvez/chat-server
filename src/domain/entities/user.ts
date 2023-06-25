import { IMessage } from '.';

export interface IUser {
  id: string;
  firstName: string;
  lastName?: string;
  imageUrl?: string;
  lastSeen?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
