import { IRoom } from '.';

export interface IGroupRoom extends IRoom {
  description?: string;
  role: RoomRole;
}
