import { ObservableMap, action, makeObservable, observable } from 'mobx';

export abstract class BaseStore<T = unknown> {
  constructor() {
    makeObservable(this);
    this.values = new ObservableMap<T>();
  }

  @observable protected values: ObservableMap<T>;

  @action reset() {
    // do something
  }
}
