import produce from 'immer';
import create from 'zustand';

import { initialState, IApplicationStore } from './store';

interface ApplicationState extends IApplicationStore {
  setSearchModal: (draft: IApplicationStore['searchModalDialog']) => void;
  setNotification: (draft: IApplicationStore['notification']) => void;
  setLoading: (draft: IApplicationStore['loading']) => void;
  setProfileOverviewModal: (
    draft: IApplicationStore['profileOverviewModal']
  ) => void;
}

const useApplicationStore = create<ApplicationState>()((set) => ({
  ...initialState,
  setSearchModal: (draft) =>
    set(
      produce((state) => {
        state.searchModalDialog = { ...draft };
      })
    ),
  setNotification(draft) {
    set(
      produce((state) => {
        state.notification = { ...draft };
      })
    );
  },
  setLoading(draft) {
    set(
      produce((state) => {
        state.loading = { ...draft };
      })
    );
  },
  setProfileOverviewModal(draft) {
    set(
      produce((state) => {
        state.profileOverviewModal = { ...draft };
      })
    );
  },
}));

export default useApplicationStore;
