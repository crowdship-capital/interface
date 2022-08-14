export interface IPageStore {
  layout: {
    baseUrl: string;
  };
}

export const initialState: IPageStore = {
  layout: {
    baseUrl: '',
  },
};
