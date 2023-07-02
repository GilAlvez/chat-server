import { IRoutes } from 'presentation/routes/routes';

export interface IApp<T = unknown> {
  init(app: T): Promise<void>;
  get routes(): IRoutes;
}
