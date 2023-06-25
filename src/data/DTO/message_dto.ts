import { IMessage, IUser } from 'domain/entities';

export class MessageDTO {
  constructor(
    public id: string,
    public user: IUser,
    public data: string,
    public type: MessageType,
    public status: MessageStatus,
    public userId: string,
    public roomId: string,
    public metadata?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}

  static fromEntity(message: IMessage): MessageDTO {
    return new MessageDTO(
      message.id,
      message.user,
      JSON.stringify(message.data),
      message.type,
      message.status,
      message.user.id,
      message.roomId,
      JSON.stringify(message.metadata),
      message.createdAt,
      message.updatedAt,
    );
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
