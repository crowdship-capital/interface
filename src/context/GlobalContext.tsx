import React, { createContext, useContext } from 'react';

import { SearchModalDialog } from '@/components/SearchModalDialog';
import { NotificationBar } from '@/components/NotificationBar';
import { Loading } from '@/components/Loading';

import {
  useNotification,
  useLoading,
  useSearchModal,
} from '@/store/application/hooks';

const GlobalContext = createContext({});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

const GlobalProvider = ({ children }) => {
  const [notification, setNotification] = useNotification();
  const [loading] = useLoading();
  const [searchModal, setSearchModal] = useSearchModal();

  return (
    <GlobalContext.Provider value={{}}>
      <Loading {...loading} />
      <NotificationBar
        {...notification}
        onClose={() => setNotification({ isOpen: false })}
      />
      <SearchModalDialog
        {...searchModal}
        onOpen={() => setSearchModal({ isOpen: true })}
        onClose={() => setSearchModal({ isOpen: false })}
      />
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
