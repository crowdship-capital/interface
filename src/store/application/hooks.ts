import shallow from 'zustand/shallow';
import useApplicationStore from '@/store/application';

import { IApplicationStore } from './store';

export const useNotification = (): [
  IApplicationStore['notification'],
  (draft: IApplicationStore['notification']) => void
] => {
  const { notification, setNotification } = useApplicationStore(
    (state) => ({
      notification: state.notification,
      setNotification: state.setNotification,
    }),
    shallow
  );

  return [notification, setNotification];
};

export const useLoading = (): [
  IApplicationStore['loading'],
  (draft: IApplicationStore['loading']) => void
] => {
  const { loading, setLoading } = useApplicationStore(
    (state) => ({
      loading: state.loading,
      setLoading: state.setLoading,
    }),
    shallow
  );

  return [loading, setLoading];
};

export const useSearchModal = (): [
  IApplicationStore['searchModalDialog'],
  (draft: IApplicationStore['searchModalDialog']) => void
] => {
  const { searchModal, setSearchModal } = useApplicationStore(
    (state) => ({
      searchModal: state.searchModalDialog,
      setSearchModal: state.setSearchModal,
    }),
    shallow
  );

  return [searchModal, setSearchModal];
};

export const useProfileOverviewModal = (): [
  IApplicationStore['profileOverviewModal'],
  (draft: IApplicationStore['profileOverviewModal']) => void
] => {
  const { profileOverviewModal, setProfileOverviewModal } = useApplicationStore(
    (state) => ({
      profileOverviewModal: state.profileOverviewModal,
      setProfileOverviewModal: state.setProfileOverviewModal,
    }),
    shallow
  );

  return [profileOverviewModal, setProfileOverviewModal];
};
