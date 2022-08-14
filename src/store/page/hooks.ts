import shallow from 'zustand/shallow';
import usePageStore from '@/store/page';

import { IPageStore } from './store';

export const useLayout = (): [
  IPageStore['layout'],
  (draft: IPageStore['layout']) => void
] => {
  const { layout, setLayout } = usePageStore(
    (state) => ({
      layout: state.layout,
      setLayout: state.setLayout,
    }),
    shallow
  );

  return [layout, setLayout];
};
