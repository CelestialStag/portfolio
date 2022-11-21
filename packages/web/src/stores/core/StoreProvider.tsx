import { IReactionDisposer, autorun } from 'mobx';
import React, { ReactNode, useEffect } from 'react';
import { enableStaticRendering, useLocalObservable } from 'mobx-react-lite';

import { WebStore } from './web.store';

const clientStore = new WebStore();

const StoreContext = React.createContext<WebStore | null>(null);

export const StoreProvider: React.FC<{
  children: ReactNode;
  cookies?: Record<string, string>;
}> = ({ children, cookies: _cookies }) => {
  enableStaticRendering(typeof window === 'undefined');
  // const store = useLocalObservable(() => (typeof window === 'undefined' ? new WebStore(cookies) : clientStore));
  const store = useLocalObservable(() => (typeof window === 'undefined' ? new WebStore() : clientStore));

  useEffect(() => {
    const autorunDisposer: IReactionDisposer = autorun(
      async () => {
        if (store.session.session_token) {
          // do something
        }
      },
      { name: 'store-autorun', delay: 0 },
    );

    const interval = setInterval(() => {
      store.session.refresh();
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(interval);
      autorunDisposer();
    };
  }, [store]);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) throw new Error('useStore() must be used within a StoreProvider.');
  return store;
};
