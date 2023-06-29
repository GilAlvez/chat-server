import { OutputMessageDTO, InputMessageDTO } from 'data/DTO';
import { IMessage, IUser } from 'domain/entities';
import { MessageStatus, MessageType } from 'domain/enums';

export class MessageMapper implements InputMessageDTO {
  constructor(
    public id: string,
    public user: IUser,
    public data: string,
    public type: MessageType,
    public status: MessageStatus,
    public roomId: string,
    public metadata?: string,
    public createdAt?: Date | undefined,
    public updatedAt?: Date | undefined,
  ) {}

  static fromEntity(message: IMessage): OutputMessageDTO {
    return <OutputMessageDTO>{
      id: message.id,
      userId: message.user.id,
      type: message.type,
      status: message.status,
      data: JSON.stringify(message.data),
      roomId: message.roomId,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
      metadata: message.metadata && JSON.stringify(message.metadata),
    };
  }

  public toEntity(): IMessage {
    return {
      id: this.id,
      type: this.type,
      status: this.status,
      data: JSON.parse(this.data),
      metadata: this.metadata && JSON.parse(this.metadata),
      user: this.user,
      roomId: this.roomId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
