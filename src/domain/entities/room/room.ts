import { IUser } from '..';

export interface IRoom {
  id: string;
  name: string;
  imageUrl?: string;
  type: RoomType;
  createdAt: Date;
  updatedAt: Date;
  users: IUser[];
}
