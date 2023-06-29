import { RoomRole } from 'domain/enums';
import { IRoom } from '.';

export interface IGroupRoom extends IRoom {
  description?: string;
  role: RoomRole;
}
