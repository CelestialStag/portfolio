import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { clearPersistedStore, hydrateStore, isHydrated, isPersisting, makePersistable } from 'mobx-persist-store';

import { BaseRootStore } from '..';

const version = 'v0.0.1';
export class SessionStore {
  @observable readonly version = version;

  @observable session_token_: string | null = null;
  @observable private loading_ = false;

  constructor(
    private readonly rootStore: BaseRootStore,
    // cookies: Record<string, string> = {},
    private readonly name = 'session',
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    if (!(typeof window === 'undefined'))
      makePersistable(this, {
        name,
        properties: ['version', 'session_token_'],
        storage: window.localStorage,
      });
  }

  @action refresh = () => {
    console.log('SessionStore: refresh()');
  };

  /**
   * @description Set the session token
   */
  set session_token(token: string | null) {
    this.session_token_ = token;
  }

  /**
   * @description Get the session token
   */
  get session_token() {
    return this.session_token_;
  }

  /**
   * @description Set request loading status
   */
  get isLoading() {
    return this.loading_;
  }

  /**
   * @description Set request loading status
   */
  set isLoading(status) {
    runInAction(() => {
      this.loading_ = status;
    });
  }

  get isHydrated() {
    return isHydrated(this);
  }

  get isPersisting() {
    return isPersisting(this);
  }

  @action async hydrateStore() {
    return hydrateStore(this);
  }

  @action async clearStoredData() {
    await clearPersistedStore(this);
  }

  @action reset() {
    this.isLoading = true;
    this.session_token = null;
    runInAction(async () => {
      await this.clearStoredData();
    });
    this.isLoading = false;
  }
}
