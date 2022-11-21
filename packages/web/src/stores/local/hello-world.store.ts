import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { clearPersistedStore, hydrateStore, isHydrated, isPersisting, makePersistable } from 'mobx-persist-store';

import { WebStore } from '@stores/core';

export class HelloWorldStore {
  @observable example: string | null = 'example';

  @observable private loading_ = false;

  constructor(private readonly rootStore: WebStore, private readonly name = 'example') {
    makeAutoObservable(this);
    if (!(typeof window === 'undefined'))
      makePersistable(this, {
        name,
        properties: ['example'],
        storage: window.sessionStorage,
      });
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

  reset() {
    this.example = 'example';
    runInAction(async () => {
      await this.clearStoredData();
    });
  }
}
