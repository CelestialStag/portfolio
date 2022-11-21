import { Api, SessionStore } from '../local-stores';

interface IBaseRootStore {
  reset(): void;
}

export interface BaseRootStore extends IBaseRootStore {
  readonly api: Api;
  readonly session: SessionStore;
}
