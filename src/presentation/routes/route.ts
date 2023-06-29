export interface IRoute {
  setup(path: string): Promise<void>;
}
