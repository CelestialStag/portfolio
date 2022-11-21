import { configure, makeAutoObservable } from 'mobx';

import { Api, BaseRootStore, SessionStore } from '@lib/stores';

import { HelloWorldStore } from 'stores/local';

configure({ enforceActions: 'observed' });

export class WebStore implements BaseRootStore {
  public readonly api: Api;
  public readonly session: SessionStore;
  public readonly hello_world: HelloWorldStore;

  // constructor(cookies?: Record<string, string>) {
  constructor() {
    makeAutoObservable(this);
    this.api = new Api(this);
    this.session = new SessionStore(this);
    this.hello_world = new HelloWorldStore(this);
  }

  reset() {
    this.session.reset();
    this.hello_world.reset();
  }
}
