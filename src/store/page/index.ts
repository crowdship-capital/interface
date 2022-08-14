import produce from 'immer';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { initialState, IPageStore } from './store';

interface PageState extends IPageStore {
  setLayout: (draft: IPageStore['layout']) => void;
}

const usePageStore = create<PageState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setLayout: (draft) =>
          set(
            produce((state) => {
              state.layout = { ...draft };
            })
          ),
      }),
      {
        name: 'page-storage',
        partialize: (state) => ({ layout: state.layout }),
      }
    )
  )
);

export default usePageStore;
